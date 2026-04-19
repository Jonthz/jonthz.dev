"use client";

import { useState } from "react";
import { projects } from "@/lib/data";
import { SectionLabel } from "./SectionLabel";
import { Badge } from "./Badge";

type Project = (typeof projects)[number];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        border: "1px solid var(--border)",
        borderRadius: "10px",
        overflow: "hidden",
        background: "var(--surface)",
        transition: "border-color 0.2s, transform 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--accent)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
      onClick={() => setExpanded((v) => !v)}
    >
      <div style={{ padding: "24px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "10px",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "var(--muted)",
              }}
            >
              {String(index + 1).padStart(2, "0")} /
            </span>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: 600,
                color: "var(--text)",
              }}
            >
              {project.name}
            </h3>
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              padding: "3px 8px",
              borderRadius: "3px",
              background: "var(--accent-dim)",
              color: "var(--accent)",
              border: "1px solid var(--accent)",
              flexShrink: 0,
            }}
          >
            {project.status === "shipped" ? "▶ shipped" : "◆ pitched"}
          </span>
        </div>

        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--accent)",
            marginBottom: "10px",
            opacity: 0.8,
          }}
        >
          {project.tag}
        </div>

        <p
          style={{
            fontSize: "14px",
            color: "var(--text-dim)",
            lineHeight: 1.65,
          }}
        >
          {project.desc}
        </p>

        {expanded && (
          <div
            style={{
              marginTop: "16px",
              display: "flex",
              gap: "8px",
              flexWrap: "wrap",
            }}
          >
            {project.tech.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>
        )}

        <div
          style={{
            marginTop: "14px",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--muted)",
          }}
        >
          {expanded ? "↑ collapse" : "↓ tech stack"}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section style={{ marginBottom: "96px" }}>
      <SectionLabel>Builder Log</SectionLabel>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
