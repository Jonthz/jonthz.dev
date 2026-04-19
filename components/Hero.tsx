"use client";

import { useEffect, useState } from "react";

function Cursor() {
  return (
    <span
      style={{
        display: "inline-block",
        width: "10px",
        height: "1.1em",
        background: "var(--accent)",
        marginLeft: "3px",
        verticalAlign: "text-bottom",
        animation: "blink 1.1s step-end infinite",
        borderRadius: "1px",
      }}
    />
  );
}

const FULL = "Software Engineer & AI Researcher";

const LINKS = [
  { label: "GitHub", href: "https://github.com/jonthz" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jonathan-zambrano-477b81252/" },
  { label: "Email", href: "mailto:jonathan.zambrano.k@gmail.com" },
];

export function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTyped(FULL.slice(0, i + 1));
      i++;
      if (i >= FULL.length) clearInterval(timer);
    }, 38);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      <div
        className="fade-up"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          color: "var(--accent)",
          marginBottom: "24px",
          letterSpacing: "0.05em",
        }}
      >
        ~/jonthz
      </div>

      <h1
        className="fade-up-delay-1"
        style={{
          fontSize: "clamp(42px, 6vw, 72px)",
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          marginBottom: "20px",
          color: "var(--text)",
        }}
      >
        Jonathan
        <br />
        Zambrano
      </h1>

      <div
        className="fade-up-delay-2"
        style={{
          fontSize: "clamp(18px, 2.5vw, 24px)",
          fontWeight: 400,
          color: "var(--text-dim)",
          marginBottom: "20px",
          fontFamily: "var(--font-mono)",
          minHeight: "32px",
        }}
      >
        {typed}
        <Cursor />
      </div>

      <p
        className="fade-up-delay-3"
        style={{
          fontSize: "17px",
          color: "var(--text-dim)",
          lineHeight: 1.7,
          marginBottom: "40px",
          maxWidth: "520px",
        }}
      >
        Building software at the intersection of{" "}
        <span style={{ color: "var(--accent)" }}>AI</span>,{" "}
        <span style={{ color: "var(--accent)" }}>Health</span>, and{" "}
        <span style={{ color: "var(--accent)" }}>Sustainability</span>.
      </p>

      <div
        className="fade-up-delay-4"
        style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
      >
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              padding: "9px 20px",
              borderRadius: "6px",
              border: "1px solid var(--border)",
              color: "var(--text-dim)",
              background: "var(--surface)",
              transition: "all 0.2s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.background = "var(--accent-dim)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-dim)";
              e.currentTarget.style.background = "var(--surface)";
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
