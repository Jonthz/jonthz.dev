"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const isLight = document.body.classList.contains("light");
    setLight(isLight);
  }, []);

  const toggle = () => {
    const next = !light;
    document.body.classList.toggle("light", next);
    try {
      localStorage.setItem("jz-theme", next ? "light" : "dark");
    } catch {}
    setLight(next);
  };

  return (
    <button
      className="theme-toggle"
      aria-label="Toggle theme"
      title="Toggle theme"
      onClick={toggle}
    >
      {light ? "☽" : "☀"}
    </button>
  );
}
