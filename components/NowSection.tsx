"use client";

import { now, type RoleType } from "@/lib/data";
import { SectionLabel } from "./SectionLabel";

const typeColors: Record<RoleType, string> = {
  work: "#6ee7b7",
  research: "var(--accent)",
  community: "#c4b5fd",
};

export function NowSection() {
  return (
    <section style={{ marginBottom: "96px" }}>
      <SectionLabel>Currently</SectionLabel>
      <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
        {now.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "16px",
              padding: "16px 20px",
              borderRadius: "8px",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              transition: "border-color 0.2s",
              cursor: "default",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "var(--accent)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--border)")
            }
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: typeColors[item.type],
                marginTop: "7px",
                flexShrink: 0,
                boxShadow: `0 0 8px ${typeColors[item.type]}`,
              }}
            />
            <div>
              <div
                style={{
                  fontWeight: 500,
                  fontSize: "15px",
                  color: "var(--text)",
                }}
              >
                {item.role}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--text-dim)",
                  marginTop: "2px",
                }}
              >
                {item.org}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
