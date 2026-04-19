import type { ReactNode } from "react";

export function Badge({
  children,
  highlight,
}: {
  children: ReactNode;
  highlight?: boolean;
}) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "3px 10px",
        borderRadius: "4px",
        fontSize: "12px",
        fontFamily: "var(--font-mono)",
        background: highlight ? "var(--accent-dim)" : "var(--surface)",
        color: highlight ? "var(--accent)" : "var(--text-dim)",
        border: `1px solid ${highlight ? "var(--accent)" : "var(--border)"}`,
        transition: "all 0.2s",
      }}
    >
      {children}
    </span>
  );
}
