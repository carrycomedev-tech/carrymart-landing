import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().trim().email().max(254),
});

/**
 * Launch-list signup.
 *
 * Set SUBSCRIBE_WEBHOOK_URL to the endpoint of whichever provider you use
 * (Formspree, Mailchimp, Zapier, a Google Apps Script, anything that accepts a
 * JSON POST). Without it the route fails loudly rather than quietly dropping
 * addresses, so a misconfigured deploy is obvious instead of invisible.
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

  const webhook = process.env.SUBSCRIBE_WEBHOOK_URL;
  if (!webhook) {
    console.error(
      "[subscribe] SUBSCRIBE_WEBHOOK_URL is not set — signup from %s was not stored.",
      parsed.data.email
    );
    return NextResponse.json(
      { error: "Signups are not available right now." },
      { status: 503 }
    );
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        email: parsed.data.email,
        source: "carrymart-landing-footer",
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      console.error("[subscribe] provider responded %s", res.status);
      return NextResponse.json(
        { error: "Signups are not available right now." },
        { status: 502 }
      );
    }
  } catch (error) {
    console.error("[subscribe] provider request failed", error);
    return NextResponse.json(
      { error: "Signups are not available right now." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
