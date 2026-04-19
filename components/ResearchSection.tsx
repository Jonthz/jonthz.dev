"use client";

import { research } from "@/lib/data";
import { Badge } from "./Badge";
import { SectionLabel } from "./SectionLabel";

export function ResearchSection() {
  return (
    <section style={{ marginBottom: "96px" }}>
      <SectionLabel>Research</SectionLabel>
      {research.map((r, i) => (
        <div
          key={i}
          style={{
            padding: "28px",
            border: "1px solid var(--border)",
            borderRadius: "10px",
            background: "var(--surface)",
            transition: "border-color 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = "var(--accent)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.borderColor = "var(--border)")
          }
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "16px",
              marginBottom: "12px",
              flexWrap: "wrap",
            }}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "var(--text)",
                lineHeight: 1.4,
                maxWidth: "480px",
              }}
            >
              {r.title}
            </h3>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "12px",
                  color: "var(--accent)",
                }}
              >
                {r.venue}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  color: "var(--muted)",
                }}
              >
                {r.date}
              </div>
            </div>
          </div>
          <p
            style={{
              fontSize: "14px",
              color: "var(--text-dim)",
              lineHeight: 1.65,
              marginBottom: "14px",
            }}
          >
            {r.desc}
          </p>
          <Badge highlight>{r.role}</Badge>
        </div>
      ))}
    </section>
  );
}
