"use client";

import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = ["Now", "Stack", "Build", "Research", "Contact"] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        padding: "0 clamp(24px, 6vw, 80px)",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled
          ? "color-mix(in oklch, var(--bg) 92%, transparent)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        transition: "all 0.3s",
        zIndex: 100,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "13px",
          color: "var(--text)",
          letterSpacing: "-0.01em",
        }}
      >
        <span style={{ color: "var(--accent)" }}>jz</span>.dev
      </span>

      <div className="nav-links">
        {links.map((label) => (
          <a
            key={label}
            className="nav-link-text"
            href={label === "Contact" ? "#contact" : `#${label.toLowerCase()}`}
          >
            {label}
          </a>
        ))}
        <button
          className="nav-hamburger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
        <ThemeToggle />
      </div>

      {menuOpen && (
        <div className="nav-mobile-menu" role="menu">
          {links.map((label) => (
            <a
              key={label}
              role="menuitem"
              className="nav-mobile-item"
              href={label === "Contact" ? "#contact" : `#${label.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
