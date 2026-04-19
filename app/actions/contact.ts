"use server";

import { Resend } from "resend";

export type ContactState = {
  ok: boolean | null;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const website = String(formData.get("website") ?? "");

  if (website) return { ok: true, message: "" };

  if (!name || !email || !message) {
    return { ok: false, message: "Please fill in all fields." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, message: "That email address doesn't look right." };
  }
  if (message.length > 5000) {
    return { ok: false, message: "Message is too long (max 5000 characters)." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return {
      ok: false,
      message: "Email service is not configured. Please email me directly.",
    };
  }

  const to = process.env.CONTACT_TO_EMAIL ?? "jonathan.zambrano.k@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: `jonthz.dev contact <${from}>`,
      to: [to],
      replyTo: email,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return {
        ok: false,
        message: "Could not send the message. Please try again later.",
      };
    }

    return { ok: true, message: "" };
  } catch (err) {
    console.error("Unexpected contact-form error:", err);
    return {
      ok: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
