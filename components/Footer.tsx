"use client";

export function Footer() {
  return (
    <footer
      style={{
        paddingTop: "40px",
        paddingBottom: "60px",
        borderTop: "1px solid var(--border)",
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
          fontSize: "12px",
          color: "var(--muted)",
        }}
      >
        © 2026 Jonathan Zambrano
      </span>
      <a
        href="mailto:jonathan.zambrano.k@gmail.com"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "12px",
          color: "var(--text-dim)",
          textDecoration: "none",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
        onMouseLeave={(e) =>
          (e.currentTarget.style.color = "var(--text-dim)")
        }
      >
        jonathan.zambrano.k@gmail.com
      </a>
    </footer>
  );
}
