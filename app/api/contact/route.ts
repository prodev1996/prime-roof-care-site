import { NextResponse } from "next/server";


export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name = "",
      email = "",
      phone = "",
      address = "",
      message = "",
      title = "Quote Request",
      _honeypot = "",
    } = body || {};

    // spam trap
    if (_honeypot && _honeypot.trim() !== "") {
      return NextResponse.json({ ok: true, skipped: true }, { status: 200 });
    }

    // basic validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    const FROM_EMAIL = process.env.FROM_EMAIL;
    const TO_EMAIL = process.env.TO_EMAIL;
    const API_KEY = process.env.RESEND_API_KEY;

    
    if (!API_KEY || !FROM_EMAIL || !TO_EMAIL) {
      console.warn(
        "Email not configured (RESEND_API_KEY / FROM_EMAIL / TO_EMAIL missing)."
      );

      return NextResponse.json(
        {
          ok: false,
          error:
            "Email not configured yet. Please call 0469 097 690 or email primeroofcare@gmail.com.",
        },
        { status: 200 }
      );
    }

    // Lazy import Resend ONLY inside the handler to avoid build-time crash.
    const { Resend } = await import("resend");
    const resend = new Resend(API_KEY);

    const textBody = `
New ${title}

Name: ${name}
Email: ${email}
Phone: ${phone}
Address: ${address}

Message:
${message}
`.trim();

    const htmlBody = `
      <div style="font-family: system-ui, sans-serif; line-height:1.5; font-size:14px; color:#0f172a;">
        <p><strong>New ${title}</strong></p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address || "(not provided)"}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap; background:#f8fafc; border:1px solid #e2e8f0; padding:12px; border-radius:8px;">
${message}
        </pre>
      </div>
    `;

    const result = await resend.emails.send({
      from: `Prime Roof Care <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      subject: `New ${title} from ${name}`,
      text: textBody,
      html: htmlBody,
      replyTo: email,
      headers: {
        "X-PRC-Form": title,
      },
    });

    if ((result as any)?.error) {
      console.error("Resend API error:", (result as any).error);
      return NextResponse.json(
        {
          ok: false,
          error:
            "We couldn't send your message right now. Please call 0469 097 690.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    console.error("Contact route crash:", err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "Something went wrong submitting your request. Please call 0469 097 690.",
      },
      { status: 500 }
    );
  }
}
