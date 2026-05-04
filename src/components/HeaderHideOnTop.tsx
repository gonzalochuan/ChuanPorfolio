"use client";

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
    const onScroll = () => {
      setAtTop(window.scrollY <= 10);
      // Automatically close menu on scroll for that nice "auto-close" effect
      setOpen(false);
    };
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
        "fixed top-6 right-6 z-50 flex flex-col items-end transition-all duration-500 " +
        (atTop ? "opacity-0 pointer-events-none translate-y-[-10px]" : "opacity-100 translate-y-0")
      }
    >
      {/* Little Navigation Dropdown */}
      <div
        className={
          "mb-3 overflow-hidden transition-all duration-300 ease-in-out origin-top-right " +
          (open ? "opacity-100 scale-100 max-h-96" : "opacity-0 scale-95 max-h-0")
        }
      >
        <div className="bg-white/90 backdrop-blur-xl border border-black/5 rounded-xl shadow-2xl px-2 py-2 flex flex-col gap-0.5 min-w-[130px]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={handleLinkClick}
              className="font-hasweny font-bold text-[10px] tracking-[0.2em] text-black/80 hover:text-black uppercase px-3 py-2 rounded-lg hover:bg-black/5 transition-colors duration-150"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>

      {/* Little Toggle Button - Always Hamburger, hidden when open */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle navigation"
        className={
          "w-10 h-10 rounded-full bg-white/90 backdrop-blur-md text-black border border-black/10 flex items-center justify-center shadow-lg hover:bg-white transition-all duration-300 " +
          (open ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100")
        }
      >
        <svg width="18" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1H16M0 6H16M0 11H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
