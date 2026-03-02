import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  phone?: string;
  businessName?: string;
  message?: string;
};

function validate(payload: ContactPayload) {
  if (!payload.name || payload.name.trim().length < 2) {
    return "Please provide your name.";
  }

  if (!payload.phone || !/^[+\d][\d\s-]{7,}$/.test(payload.phone.trim())) {
    return "Please provide a valid phone number.";
  }

  if (!payload.businessName || payload.businessName.trim().length < 2) {
    return "Please provide your business name.";
  }

  if (!payload.message || payload.message.trim().length < 12) {
    return "Please provide a short project message.";
  }

  return null;
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { message: "Invalid request payload." },
      { status: 400 }
    );
  }

  const validationError = validate(payload);

  if (validationError) {
    return NextResponse.json({ message: validationError }, { status: 400 });
  }

  const submission = {
    ...payload,
    source: "devstack-solutions-site",
    submittedAt: new Date().toISOString()
  };

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (webhookUrl) {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(submission),
      cache: "no-store"
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          message:
            "The form could not be delivered right now. Please try again or send a WhatsApp message instead."
        },
        { status: 502 }
      );
    }
  } else {
    console.log("Contact form submission", submission);
  }

  return NextResponse.json({
    message: "Thanks. Your inquiry has been received."
  });
}
