"use client";

import { useActionState, useState, type CSSProperties } from "react";
import { sendContact, type ContactState } from "@/app/actions/contact";
import { SectionLabel } from "./SectionLabel";

const INITIAL: ContactState = { ok: null, message: "" };

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [state, formAction, isPending] = useActionState(sendContact, INITIAL);

  const labelStyle: CSSProperties = {
    fontFamily: "var(--font-mono)",
    fontSize: "11px",
    color: "var(--muted)",
    marginBottom: "6px",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
  };

  if (state.ok === true) {
    return (
      <section style={{ marginBottom: "96px" }} id="contact">
        <SectionLabel>Get in Touch</SectionLabel>
        <div
          style={{
            padding: "48px 36px",
            border: "1px solid var(--accent)",
            borderRadius: "10px",
            background: "var(--accent-dim)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "28px",
              color: "var(--accent)",
              marginBottom: "12px",
            }}
          >
            ✓
          </div>
          <div
            style={{
              fontWeight: 600,
              color: "var(--text)",
              marginBottom: "6px",
            }}
          >
            Message sent!
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--text-dim)",
            }}
          >
            I&apos;ll get back to you at {form.email}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{ marginBottom: "96px" }} id="contact">
      <SectionLabel>Get in Touch</SectionLabel>
      <form
        action={formAction}
        style={{
          padding: "32px",
          border: "1px solid var(--border)",
          borderRadius: "10px",
          background: "var(--surface)",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {/* Honeypot — hidden from humans, bots fill it in */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          style={{
            position: "absolute",
            left: "-10000px",
            width: "1px",
            height: "1px",
            opacity: 0,
          }}
          aria-hidden="true"
        />

        <div className="contact-grid">
          <div>
            <div style={labelStyle}>Name</div>
            <input
              className="contact-input"
              name="name"
              type="text"
              placeholder="Your name"
              required
              maxLength={120}
              value={form.name}
              onChange={(e) =>
                setForm((f) => ({ ...f, name: e.target.value }))
              }
            />
          </div>
          <div>
            <div style={labelStyle}>Email</div>
            <input
              className="contact-input"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              maxLength={240}
              value={form.email}
              onChange={(e) =>
                setForm((f) => ({ ...f, email: e.target.value }))
              }
            />
          </div>
        </div>
        <div>
          <div style={labelStyle}>Message</div>
          <textarea
            className="contact-input"
            style={{ minHeight: "120px" }}
            name="message"
            placeholder="What's on your mind?"
            required
            maxLength={5000}
            value={form.message}
            onChange={(e) =>
              setForm((f) => ({ ...f, message: e.target.value }))
            }
          />
        </div>

        {state.ok === false && state.message && (
          <div
            role="alert"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "#fca5a5",
              padding: "10px 14px",
              borderRadius: "6px",
              border: "1px solid #fca5a555",
              background: "#fca5a520",
            }}
          >
            {state.message}
          </div>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--muted)",
            }}
          >
            or email directly →{" "}
            <a
              href="mailto:jonathan.zambrano.k@gmail.com"
              style={{ color: "var(--accent)" }}
            >
              jonathan.zambrano.k@gmail.com
            </a>
          </span>
          <button
            type="submit"
            disabled={isPending}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              padding: "10px 24px",
              borderRadius: "6px",
              border: "1px solid var(--accent)",
              background: isPending ? "var(--accent-dim)" : "var(--accent)",
              color: isPending ? "var(--accent)" : "oklch(9% 0.012 240)",
              cursor: isPending ? "not-allowed" : "pointer",
              fontWeight: 600,
              transition: "all 0.2s",
            }}
          >
            {isPending ? "Sending..." : "Send →"}
          </button>
        </div>
      </form>
    </section>
  );
}
