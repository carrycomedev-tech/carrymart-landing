import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

// SMTP needs a real TCP socket, which the Edge runtime cannot open.
export const runtime = "nodejs";

const schema = z.object({
  email: z.string().trim().email().max(254),
});

/**
 * The outgoing server for a mailbox, unless SMTP_HOST says otherwise. The
 * site delivers through Namecheap Private Email or Gmail depending on which
 * subscription is live, and swapping between them should only mean swapping
 * SMTP_USER and SMTP_PASS.
 */
function smtpHost(mailbox: string): string {
  if (process.env.SMTP_HOST) return process.env.SMTP_HOST;
  return mailbox.toLowerCase().endsWith("@gmail.com")
    ? "smtp.gmail.com"
    : "mail.privateemail.com";
}

/**
 * Launch-list signup.
 *
 * Emails each address to the mailbox in SMTP_USER. That is the Private Email
 * mailbox (support@carrymartgh.com) or, while that subscription is lapsed, a
 * Gmail account, where SMTP_PASS must be a Google App Password rather than
 * the account password. SUBSCRIBE_TO redirects the notifications somewhere
 * other than the sending mailbox. Without credentials the route fails loudly
 * rather than quietly dropping addresses, so a misconfigured deploy is obvious
 * instead of invisible.
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
    host: smtpHost(user),
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const submittedAt = new Date().toISOString();

  try {
    await transport.sendMail({
      // The envelope sender must be the authenticated mailbox or SPF fails,
      // and Gmail rewrites any other sender to the account anyway.
      from: `CarryMart launch list <${user}>`,
      to: process.env.SUBSCRIBE_TO ?? user,
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
