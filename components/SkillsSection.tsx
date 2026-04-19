"use client";

import { skillGroups } from "@/lib/data";
import { SectionLabel } from "./SectionLabel";

export function SkillsSection() {
  return (
    <section style={{ marginBottom: "96px" }}>
      <SectionLabel>Stack</SectionLabel>
      <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
        {skillGroups.map((group) => (
          <div key={group.label}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--muted)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "12px",
              }}
            >
              {group.label}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {group.skills.map((s) => (
                <span
                  key={s}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                    padding: "6px 14px",
                    borderRadius: "5px",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    color: "var(--text-dim)",
                    transition: "all 0.2s",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--accent)";
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.background = "var(--accent-dim)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--text-dim)";
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.background = "var(--surface)";
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
