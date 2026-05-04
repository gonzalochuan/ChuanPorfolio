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
    <div
      ref={menuRef}
      className={
        "fixed top-4 right-4 z-50 flex flex-col items-end transition-all duration-300 " +
        (atTop ? "opacity-0 pointer-events-none translate-y-[-6px]" : "opacity-100 translate-y-0")
      }
    >
      {/* Dropdown menu */}
      <div
        className={
          "mb-2 overflow-hidden transition-all duration-300 ease-in-out origin-top-right " +
          (open ? "opacity-100 scale-100 max-h-96" : "opacity-0 scale-95 max-h-0")
        }
      >
        <div className="bg-white/95 backdrop-blur-xl border border-black/10 rounded-2xl shadow-2xl px-5 py-4 flex flex-col gap-1 min-w-[160px]">
          <Link
            href="/"
            className="font-hasweny font-bold text-xs tracking-widest text-black/40 uppercase mb-2 px-2"
            onClick={handleLinkClick}
          >
            CHUAN
          </Link>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={handleLinkClick}
              className="font-hasweny font-bold text-sm tracking-wider text-black uppercase px-2 py-2 rounded-xl hover:bg-black/5 transition-colors duration-150"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle navigation"
        className={
          "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg " +
          (open
            ? "bg-black text-white"
            : "bg-white/90 backdrop-blur-md text-black border border-black/10")
        }
      >
        {open ? (
          // X icon
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          // Hamburger icon
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1H16M0 6H16M0 11H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        )}
      </button>
    </div>
  );
}
