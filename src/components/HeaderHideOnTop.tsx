"use client";

import Link from "next/link";
import React from "react";

export default function HeaderHideOnTop() {
  const [atTop, setAtTop] = React.useState(true);

  React.useEffect(() => {
    const onScroll = () => {
      setAtTop(window.scrollY <= 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "sticky top-0 z-50 transition-all duration-300 " +
        (atTop ? "opacity-0 -translate-y-2 pointer-events-none" : "opacity-100 translate-y-0")
      }
      aria-hidden={atTop}
    >
      <div className="container-wide px-6 py-4 flex flex-col items-center gap-2 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="font-hasweny tracking-wide font-bold text-black text-base md:text-lg">
          CHUAN
        </Link>
        <nav className="w-full md:w-auto">
          <ul className="flex flex-wrap justify-center md:justify-end items-center gap-x-4 gap-y-2 md:gap-8 text-[10px] md:text-base tracking-wide font-hasweny text-black uppercase">
            <li><a className="hover:opacity-100 font-bold" href="#core">Core</a></li>
            <li><a className="hover:opacity-100 font-bold" href="#hub">Highlights</a></li>
            <li><a className="hover:opacity-100 font-bold" href="#undertakings">Undertakings</a></li>
            <li><a className="hover:opacity-100 font-bold" href="#accreditations">Accreditations</a></li>
            <li><a className="hover:opacity-100 font-bold" href="#network">Network</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
