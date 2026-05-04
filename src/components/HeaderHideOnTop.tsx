"use client";

import Link from "next/link";
import React from "react";

const links = [
  { label: "Core", href: "#core" },
  { label: "Highlights", href: "#hub" },
  { label: "Undertakings", href: "#undertakings" },
  { label: "Accreditations", href: "#accreditations" },
  { label: "Network", href: "#network" },
];

export default function HeaderHideOnTop() {
  const [atTop, setAtTop] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const onScroll = () => setAtTop(window.scrollY <= 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when clicking outside
  React.useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler as any, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler as any);
    };
  }, [open]);

  // Close on link click
  const handleLinkClick = () => setOpen(false);

  return (
    <nav
      className={
        "fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 " +
        (atTop ? "opacity-0 pointer-events-none -translate-y-4" : "opacity-100 translate-y-0")
      }
    >
      <div className="bg-white/80 backdrop-blur-lg border border-black/5 rounded-full shadow-lg px-4 py-2 flex items-center gap-4 md:gap-6">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="font-hasweny font-bold text-[9px] md:text-[11px] tracking-widest text-black/70 hover:text-black uppercase transition-colors duration-200"
          >
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
