import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// this runs when user submits the contact / quote form
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
    } = body || {};

    // basic spam / bot check
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // build plain text and HTML versions
    const text = `
New ${title} Submission

Name: ${name}
Email: ${email}
Phone: ${phone}
Address: ${address}

Message:
${message}
    `.trim();

    const html = `
      <div style="font-family: sans-serif; line-height:1.5; font-size:14px; color:#0f172a;">
        <p><strong>New ${title} Submission</strong></p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address || "(not provided)"}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-line; border:1px solid #e2e8f0; background:#f8fafc; padding:12px; border-radius:8px;">
          ${message}
        </p>
      </div>
    `;

    // send email using Resend
    const result = await resend.emails.send({
      from: `Prime Roof Care <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL!, // where YOU receive it
      subject: `New ${title} from ${name}`,
      text,
      html,
      replyTo: email, // ✅ correct key
      headers: {
        "X-PRC-Form": title,
      },
    });

    // If Resend didn't like it, report that upward
    if ((result as any).error) {
      console.error("Resend error:", (result as any).error);
      return NextResponse.json(
        {
          ok: false,
          error: "Email delivery failed.",
        },
        { status: 500 }
      );
    }

    // success
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      {
        ok: false,
        error: "Server error processing form.",
      },
      { status: 500 }
    );
  }
}
