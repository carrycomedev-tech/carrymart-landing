import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

import { SUPPORT_EMAIL } from "@/lib/contact";

// SMTP needs a real TCP socket, which the Edge runtime cannot open.
export const runtime = "nodejs";

const schema = z.object({
  email: z.string().trim().email().max(254),
});

/**
 * Launch-list signup.
 *
 * Delivers each address to the support mailbox over SMTP. Set SMTP_USER and
 * SMTP_PASS to the Private Email mailbox credentials; SMTP_HOST, SMTP_PORT and
 * SUBSCRIBE_TO only need setting if you move off Namecheap. Without the
 * credentials the route fails loudly rather than quietly dropping addresses, so
 * a misconfigured deploy is obvious instead of invisible.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) {
    console.error(
      "[subscribe] SMTP_USER/SMTP_PASS are not set — signup from %s was not stored.",
      parsed.data.email
    );
    return NextResponse.json(
      { error: "Signups are not available right now." },
      { status: 503 }
    );
  }

  const port = Number(process.env.SMTP_PORT ?? 465);
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "mail.privateemail.com",
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const submittedAt = new Date().toISOString();

  try {
    await transport.sendMail({
      // The envelope sender must be the authenticated mailbox or SPF fails.
      from: `CarryMart launch list <${user}>`,
      to: process.env.SUBSCRIBE_TO ?? SUPPORT_EMAIL,
      // Lets you answer the signup straight from the notification.
      replyTo: parsed.data.email,
      subject: `Launch list signup: ${parsed.data.email}`,
      text: [
        `Email:  ${parsed.data.email}`,
        `Source: carrymart-landing-footer`,
        `Time:   ${submittedAt}`,
      ].join("\n"),
    });
  } catch (error) {
    console.error("[subscribe] SMTP delivery failed", error);
    return NextResponse.json(
      { error: "Signups are not available right now." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
