"use client";

type SectionProps = { title: string; children: React.ReactNode };
function Section({ title, children }: SectionProps) {
  return (
    <div className="mt-4 md:mt-6">
      <div className="font-hasweny tracking-widest text-xs md:text-sm font-semibold mb-2">{title}</div>
      <div className="text-[12px] md:text-[14px] leading-relaxed">{children}</div>
    </div>
  );
}

import React, { useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import CardTilt from "@/components/CardTilt";

export default function Home() {
  const gabayVideos = ["/video/mockup.mp4", "/video/mockup2.mp4", "/video/mockup3.mp4"];
  const chatboxVideos = ["/video/mockup5.mp4", "/video/mockup4.mp4", "/video/mockup6.mp4"];
  const barangayVideos = ["/video/mockup7.mp4", "/video/mockup8.mp4", "/video/mockup9.mp4"];
  const ojtVideos = ["/video/mockup10.mp4", "/video/mockup11.mp4", "/video/mockup12.mp4"];

  const gabayVideoRef = useRef<HTMLVideoElement>(null);
  const gabayIndexRef = useRef(0);
  const chatboxVideoRef = useRef<HTMLVideoElement>(null);
  const chatboxIndexRef = useRef(0);
  const barangayVideoRef = useRef<HTMLVideoElement>(null);
  const barangayIndexRef = useRef(0);
  const ojtVideoRef = useRef<HTMLVideoElement>(null);
  const ojtIndexRef = useRef(0);

  const playNext = useCallback((ref: React.RefObject<HTMLVideoElement | null>, playlist: string[], indexRef: React.MutableRefObject<number>) => {
    indexRef.current = (indexRef.current + 1) % playlist.length;
    const el = ref.current;
    if (!el) return;
    el.src = playlist[indexRef.current];
    el.load();
    el.play().catch(() => { });
  }, []);

  // Start playback imperatively on mount for all videos
  useEffect(() => {
    const gabay = gabayVideoRef.current;
    if (gabay) {
      gabay.src = gabayVideos[0];
      gabay.load();
      gabay.play().catch(() => { });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const chatbox = chatboxVideoRef.current;
    if (chatbox) {
      chatbox.src = chatboxVideos[0];
      chatbox.load();
      chatbox.play().catch(() => { });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const barangay = barangayVideoRef.current;
    if (barangay) {
      barangay.src = barangayVideos[0];
      barangay.load();
      barangay.play().catch(() => { });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const ojt = ojtVideoRef.current;
    if (ojt) {
      ojt.src = ojtVideos[0];
      ojt.load();
      ojt.play().catch(() => { });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-white text-black" style={{ touchAction: 'pan-y' }}>
      {/* Fixed background arrows - desktop only to avoid mobile touch interference */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-40 md:opacity-100 transition-opacity duration-300">
        {/* Desktop only */}
        <div className="block">
          <img src="/svg/arrow1.svg" alt="" className="decor-faint absolute left-[6%] top-[8%] w-[90px]" />
          <img src="/svg/arrow1.svg" alt="" className="decor-faint absolute left-[88%] top-[6%] -scale-x-100 w-[85px]" />
          <img src="/svg/arrow3.svg" alt="" className="decor-faint absolute right-[20%] top-[25%] w-[110px]" />
          <img src="/svg/arrow4.svg" alt="" className="decor-faint absolute right-[26%] bottom-[20%] w-[130px]" />
          <img src="/svg/arrow1.svg" alt="" className="decor-faint absolute -left-[5%] bottom-[12%] w-[110px]" />
          <img src="/svg/arrow3.svg" alt="" className="decor-faint absolute left-[18%] top-[55%] -scale-x-100 w-[90px]" />
          <img src="/svg/arrow4.svg" alt="" className="decor-faint absolute right-[12%] top-[46%] -scale-x-100 w-[125px]" />
          <img src="/svg/arrow1.svg" alt="" className="decor-faint absolute left-[80%] bottom-[6%] w-[85px]" />
        </div>
      </div>

      <main className="min-h-[calc(100dvh-96px)] pt-[12vh] md:pt-0 flex items-center justify-center">
        <div className="w-full px-6 md:px-8" aria-label="CHUAN">
          <div className="font-brigends select-none leading-none flex flex-col items-center gap-[12vw] text-[32vw] relative
                          md:gap-[8vw] md:flex-row md:justify-between md:items-center md:gap-0 md:text-[13vw] lg:text-[11vw]">
            <span className="relative block">
              C
              {/* Mobile arrow + label */}
              <img src="/svg/core.svg" alt="Core" className="absolute -left-[10vw] -top-[1vw] w-[10vw] float-tl pointer-events-none md:hidden" />
              <span className="absolute -left-[11vw] -top-[9vw] text-[3vw] font-semibold z-10 font-hasweny md:hidden pointer-events-none">Core</span>
              {/* Desktop arrow + label */}
              <img src="/svg/core.svg" alt="Core" className="hidden md:block absolute left-[3.3vw] -top-[4.3vw] w-[3.2vw] float-tl pointer-events-none" />
              <span className="hidden md:block absolute left-[2.2vw] -top-[7.2vw] text-[1.64vw] font-semibold z-10 font-hasweny">Core</span>
            </span>
            <span className="relative block">
              H
              {/* Mobile */}
              <img src="/svg/history.svg" alt="Hub" className="absolute left-[32vw] top-[30vw] w-[10vw] float-br delay-1 pointer-events-none md:hidden" />
              <span className="absolute left-[46vw] top-[40vw] text-[3vw] font-semibold z-10 font-hasweny md:hidden pointer-events-none">Hub</span>
              {/* Desktop */}
              <img src="/svg/history.svg" alt="Hub" className="hidden md:block absolute left-[1.0vw] top-[10.1vw] w-[3.4vw] float-br delay-1 pointer-events-none" />
              <span className="hidden md:block absolute left-[5.4vw] top-[13.4vw] text-[1.64vw] font-semibold z-10 font-hasweny">Hub</span>
            </span>
            <span className="relative block">
              U
              {/* Mobile */}
              <img src="/svg/undertakings.svg" alt="Undertakings" className="absolute -left-[12vw] -top-[2vw] w-[10vw] -scale-x-100 float-tl delay-2 pointer-events-none md:hidden" />
              <span className="absolute -left-[15vw] -top-[10.1vw] text-[3vw] font-semibold z-10 font-hasweny md:hidden pointer-events-none">Undertakings</span>
              {/* Desktop */}
              <img src="/svg/undertakings.svg" alt="Undertakings" className="hidden md:block absolute left-[11.2vw] -top-[1.5vw] w-[3.1vw] float-tl delay-2 pointer-events-none" />
              <span className="hidden md:block absolute left-[9.1vw] -top-[4.4vw] text-[1.64vw] font-semibold z-10 font-hasweny">Undertakings</span>
            </span>
            <span className="relative block">
              A
              {/* Mobile */}
              <img src="/svg/accreditations.svg" alt="Achievements" className="absolute -left-[8vw] -top-[3vw] w-[10vw] -scale-y-100 float-tl pointer-events-none md:hidden" />
              <span className="absolute -left-[12vw] -top-[10vw] text-[3vw] font-semibold z-10 font-hasweny md:hidden pointer-events-none">Achievements</span>
              {/* Desktop */}
              <img src="/svg/accreditations.svg" alt="Achievements" className="hidden md:block absolute left-[6.8vw] top-[10.2vw] w-[3.2vw] float-bl pointer-events-none" />
              <span className="hidden md:block absolute left-[2.4vw] top-[21.5vw] text-[1.64vw] font-semibold z-10 font-hasweny">Achievements</span>
            </span>
            <span className="relative block">
              N
              {/* Mobile */}
              <img src="/svg/network.svg" alt="Network" className="absolute -right-[10vw] -top-[8vw] w-[10vw] float-tl delay-3 pointer-events-none md:hidden" />
              <span className="absolute right-[2vw] -top-[11vw] text-[3vw] font-semibold z-10 font-hasweny md:hidden pointer-events-none">Network</span>
              {/* Desktop */}
              <img src="/svg/network.svg" alt="Network" className="hidden md:block absolute -left-[4.2vw] -scale-x-100 -top-[2.1vw] w-[3.6vw] float-tl delay-3 pointer-events-none" />
              <span className="hidden md:block absolute right-[6.1vw] -top-[4.2vw] text-[1.64vw] font-semibold z-10 font-hasweny">Network</span>
            </span>
          </div>
        </div>
      </main>

      {/* Core Section */}
      <section id="core" className="relative container-wide px-6 md:px-8 py-16 md:py-24">
        {/* vertical banners at edges */}
        <div className="pointer-events-none absolute left-20 top-135 -translate-y-1/2 hidden lg:block">
          <div className="font-brigends text-outline text-7xl tracking-[0.3em] rotate-[-90deg] -translate-x-195">HELLO THERE!</div>
        </div>
        <div className="pointer-events-none absolute right-20 top-135 -translate-y-1/2 hidden lg:block text-right">
          <div className="font-brigends text-outline text-7xl tracking-[0.3em] rotate-[90deg] translate-x-195">HELLO THERE!</div>
        </div>

        {/* mobile vertical banners moved and z-indexed for iOS visibility */}
        <div className="pointer-events-none absolute left-0 top-[55%] -translate-y-1/2 md:hidden z-30">
          <div className="font-brigends text-3xl tracking-[0.2em] select-none" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', color: 'transparent', WebkitTextStroke: '1.5px rgba(0,0,0,0.28)', WebkitTextFillColor: 'transparent' }}>HELLO THERE!</div>
        </div>
        <div className="pointer-events-none absolute right-0 top-[55%] -translate-y-1/2 md:hidden z-30">
          <div className="font-brigends text-3xl tracking-[0.2em] select-none" style={{ writingMode: 'vertical-rl', color: 'transparent', WebkitTextStroke: '1.5px rgba(0,0,0,0.28)', WebkitTextFillColor: 'transparent' }}>HELLO THERE!</div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-start relative z-10 px-4 md:px-0">
          <div>
            <h2 className="font-brigends text-3xl md:text-5xl text-center md:text-left mt-2">CORE</h2>
            <h3 className="font-hasweny text-base text-center md:text-[1.3vw] font-semibold tracking-widest mt-6 md:mt-12 md:text-left balance max-w-[30ch] mx-auto md:max-w-none md:mx-0">HELLO I AM GONZALO CHUAN JR</h3>
            <ul className="mt-4 md:mt-8 space-y-3 md:space-y-6 text-zinc-800 text-center md:text-left max-w-[32ch] mx-auto md:max-w-none md:mx-0">
              <li className="font-hasweny text-sm md:text-[1.3vw] font-semibold">✧ Front-End Developer</li>
              <li className="font-hasweny text-sm md:text-[1.3vw] font-semibold">✧ Full-Stack Developer</li>
              <li className="font-hasweny text-sm md:text-[1.3vw] font-semibold">✧ Freelancer</li>
            </ul>
            <p className="mt-4 md:mt-20 font-hasweny text-sm md:text-[1.3vw] font-semibold leading-relaxed text-zinc-800 max-w-[28ch] md:max-w-prose mx-auto md:mx-0 text-center md:text-left balance">
              ✧ Front-End / Full-Stack Developer specializing in React, Next.js, and real-time web applications. Experienced in building responsive UIs, integrating APIs, and developing scalable systems using Node.js and Databases. Strong background in performance optimization and user-centered design.
            </p>
          </div>
          {/* Mobile portrait */}
          <div className="md:hidden mt-8 flex justify-center relative" style={{ touchAction: 'pan-y' }}>
            {(() => {
              // @ts-ignore
              const DynamicObj = require("next/dynamic").default(() => import("@/components/ObjModel"), { ssr: false });
              // @ts-ignore
              return (
                <DynamicObj
                  src="/3d/me/tripo_convert_66f635b3-d076-490e-91bc-1dac68d3deaf.obj"
                  height={400}
                  scale={1.1}
                  position={[0, -0.2, 0]}
                  autoRotate
                  rotateAxis="y"
                  rotateSpeed={0.4}
                  pointerEvents="none"
                />
              );
            })()}
          </div>
          <div className="hidden md:block left-25 relative">
            {/* 3D portrait */}
            {/* eslint-disable-next-line @typescript-eslint/no-var-requires */}
            {(() => {
              // @ts-ignore
              const DynamicObj = require("next/dynamic").default(() => import("@/components/ObjModel"), { ssr: false });
              // @ts-ignore
              return (
                <DynamicObj
                  src="/3d/me/tripo_convert_66f635b3-d076-490e-91bc-1dac68d3deaf.obj"
                  height={1030}
                  scale={1.0}
                  position={[0, -0.2, 0]}
                  autoRotate
                  rotateAxis="y"
                  rotateSpeed={0.4}
                  controls
                />
              );
            })()}
          </div>
        </div>



        {/* TOOLS marquee moved above grid */}
        <div className="mt-2 md:mt-2 relative z-20">
          <div className="flex justify-center items-center">
            <div className="text-center font-hasweny tracking-widest font-semibold text-2xl md:text-2xl">TOOLS</div>
          </div>
          <div className="mt-12 md:mt-26 marquee w-full md:w-screen relative md:left-1/2 md:-translate-x-1/2">
            <div className="marquee-track items-center">
              {/* One sequence */}
              <div className="inline-flex items-center gap-6 md:gap-10">
                <img src="/image/ts.png" alt="TypeScript" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/react.png" alt="React" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/next.png" alt="Next.js" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/vsc.png" alt="VS Code" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/git.png" alt="Git" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/python.png" alt="Python" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/php.png" alt="PHP" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/figma.png" alt="Figma" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/flutter.png" alt="Flutter" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/mysql.png" alt="MySQL" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/firebase.png" alt="Firebase" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/windsurf.png" alt="Windsurf" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/supabase.png" alt="Supabase" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/gemini.png" alt="Gemini" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/chatgpt.png" alt="ChatGPT" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/tailwind.png" alt="Tailwind CSS" className="h-8 md:h-10 lg:h-12 inline-block" />
              </div>
              {/* Duplicate sequence (aria-hidden to avoid repetition) */}
              <div className="inline-flex items-center gap-6 md:gap-10" aria-hidden="true">
                <img src="/image/ts.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/react.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/next.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/vsc.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/git.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/python.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/php.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/figma.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/flutter.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/mysql.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/firebase.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/windsurf.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/supabase.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/gemini.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/chatgpt.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/tailwind.png" alt="Tailwind CSS" className="h-8 md:h-10 lg:h-12 inline-block" />
              </div>
              {/* Third sequence for perfect seamless loop */}
              <div className="inline-flex items-center gap-6 md:gap-10" aria-hidden="true">
                <img src="/image/ts.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/react.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/next.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/vsc.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/git.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/python.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/php.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/figma.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/flutter.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/mysql.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/firebase.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/windsurf.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/supabase.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/gemini.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/chatgpt.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
                <img src="/image/tailwind.png" alt="Tailwind CSS" className="h-8 md:h-10 lg:h-12 inline-block" />
              </div>
            </div>
          </div>
        </div>

        {/* Second marquee row (reverse direction) */}
        <div className="mt-16 marquee w-full md:w-screen relative md:left-1/2 md:-translate-x-1/2">
          <div className="marquee-track reverse items-center">
            {/* One sequence */}
            <div className="inline-flex items-center gap-6 md:gap-10">
              <img src="/image/firebase.png" alt="Firebase" className="h-8 md:h-10 lg:h-12 inline-block" />
              <img src="/image/mysql.png" alt="MySQL" className="h-8 md:h-10 lg:h-12 inline-block" />
              <img src="/image/supabase.png" alt="Supabase" className="h-8 md:h-10 lg:h-12 inline-block" />
              <img src="/image/windsurf.png" alt="Windsurf" className="h-8 md:h-10 lg:h-12 inline-block" />
              <img src="/image/chatgpt.png" alt="ChatGPT" className="h-8 md:h-10 lg:h-12 inline-block" />
              <img src="/image/gemini.png" alt="Gemini" className="h-8 md:h-10 lg:h-12 inline-block" />
              <img src="/image/figma.png" alt="Figma" className="h-8 md:h-10 lg:h-12 inline-block" />
              <img src="/image/tailwind.png" alt="Tailwind CSS" className="h-8 md:h-10 lg:h-12 inline-block" />
              <img src="/image/php.png" alt="PHP" className="h-8 md:h-10 lg:h-12 inline-block" />
              <img src="/image/python.png" alt="Python" className="h-8 md:h-10 lg:h-12 inline-block" />
            </div>
            {/* Duplicate sequence (aria-hidden to avoid repetition) */}
            <div className="inline-flex items-center gap-6 md:gap-10" aria-hidden="true">
              <img src="/image/firebase.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
              <img src="/image/mysql.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
              <img src="/image/supabase.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
              <img src="/image/windsurf.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
              <img src="/image/chatgpt.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
              <img src="/image/gemini.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
              <img src="/image/figma.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
              <img src="/image/tailwind.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
              <img src="/image/php.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
              <img src="/image/python.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
            </div>
            {/* Third sequence for perfect seamless loop */}
            <div className="inline-flex items-center gap-6 md:gap-10" aria-hidden="true">
              <img src="/image/firebase.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
              <img src="/image/mysql.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
              <img src="/image/supabase.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
              <img src="/image/windsurf.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
              <img src="/image/chatgpt.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
              <img src="/image/gemini.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
              <img src="/image/figma.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
              <img src="/image/tailwind.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
              <img src="/image/php.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
              <img src="/image/python.png" alt="" className="h-8 md:h-10 lg:h-12 inline-block" />
            </div>
          </div>
        </div>
      </section>

      {/* HUB (Projects Section) */}
      <section id="hub" className="relative container-wide px-6 md:px-8 pt-16 md:pt-32 mt-12 md:mt-24">
        <div className="relative z-10 flex flex-col items-center mb-24 md:mb-32">
          <h2 className="font-brigends text-4xl md:text-6xl text-center">HUB</h2>
          <p className="font-hasweny text-sm md:text-base mt-6 text-zinc-600 tracking-widest uppercase flex items-center gap-3">
            Selected Projects
          </p>
        </div>
      </section>

      {/* HUB PROJECTS (Boxed Version) */}
      <section className="relative w-full px-4 md:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-12 lg:gap-16 w-full mx-auto relative z-10">

          {/* Project 1: ChatBox */}
          <CardTilt maxTilt={3} disabled={true}>
            <div className="relative w-full h-[70vh] md:h-[80vh] min-h-[500px] md:min-h-[600px] rounded-[28px] overflow-hidden bg-black shadow-2xl flex items-end group">
              {/* Main Video Sequence (Looping between Mockup 4, 5, and 6) */}
              <video
                ref={chatboxVideoRef}
                muted
                playsInline
                preload="auto"
                onEnded={() => playNext(chatboxVideoRef, chatboxVideos, chatboxIndexRef)}
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
                style={{ willChange: 'transform' }}
              />

              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>

              {/* Content */}
              <div className="relative z-20 p-6 md:p-14 lg:p-20 w-full">
                <div className="flex flex-col w-full">
                  <div className="w-full">
                    <div className="flex items-center gap-1.5 sm:gap-4 mb-3 md:mb-6 flex-nowrap w-full">
                      <h3 className="font-brigends text-[20px] sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl text-white min-w-0 truncate">ChatBox</h3>
                      <span className="font-hasweny text-[8px] sm:text-[10px] md:text-xs px-1.5 sm:px-3 md:px-4 py-0.5 sm:py-1 bg-white/10 text-white backdrop-blur-md rounded-full tracking-wide sm:tracking-wider font-semibold border border-white/20 uppercase shrink-0 whitespace-nowrap">Progressive Web App</span>
                    </div>
                    <h4 className="font-hasweny font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-4 md:mb-8 text-zinc-300 leading-relaxed">Intranet Communication System</h4>
                    <ul className="space-y-3 sm:space-y-4 md:space-y-5 text-[13px] sm:text-[14px] md:text-lg text-zinc-300 mb-6 md:mb-12 font-hasweny list-none">
                      <li className="flex gap-4"><span className="text-white font-bold text-lg">✧</span> <span className="leading-relaxed">Developed a real-time chat application with WebSockets, Node.js, and TypeScript.</span></li>
                      <li className="flex gap-4"><span className="text-white font-bold text-lg">✧</span> <span className="leading-relaxed">PWA technologies were used to implement offline support.</span></li>
                    </ul>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-6 md:mt-8">
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {["TypeScript", "Node.js", "WebSockets", "PWA"].map(t => (
                          <span key={t} className="text-[9px] md:text-xs uppercase font-bold tracking-widest border border-zinc-700 px-2.5 md:px-4 py-1.5 md:py-2 bg-zinc-800/50 backdrop-blur-md text-zinc-300 rounded-md">{t}</span>
                        ))}
                      </div>
                      <a
                        href="http://chat-box-seait.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 text-white font-hasweny text-[10px] md:text-xs tracking-[0.15em] font-bold rounded-xl transition-all duration-300 hover:border-white/40 self-start shrink-0 w-fit"
                      >
                        <span className="relative z-10 uppercase">Visit Project</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardTilt>

          {/* Project 2: CHED OJT */}
          <CardTilt maxTilt={3} disabled={true}>
            <div className="relative w-full h-[70vh] md:h-[80vh] min-h-[500px] md:min-h-[600px] rounded-[28px] overflow-hidden bg-black shadow-2xl flex items-end group">
              {/* Main Video Sequence (Looping between Mockup 10, 11, and 12) */}
              <video
                ref={ojtVideoRef}
                muted
                playsInline
                preload="auto"
                onEnded={() => playNext(ojtVideoRef, ojtVideos, ojtIndexRef)}
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
                style={{ willChange: 'transform' }}
              />

              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>

              {/* Content */}
              <div className="relative z-20 p-6 md:p-14 lg:p-20 w-full">
                <div className="flex flex-col w-full">
                  <div className="w-full">
                    <div className="flex items-center gap-1.5 sm:gap-4 mb-3 md:mb-6 flex-nowrap w-full">
                      <h3 className="font-brigends text-[20px] sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl text-white min-w-0 truncate">CHED OJT</h3>
                      <span className="font-hasweny text-[8px] sm:text-[10px] md:text-xs px-1.5 sm:px-3 md:px-4 py-0.5 sm:py-1 bg-white/10 text-white backdrop-blur-md rounded-full tracking-wide sm:tracking-wider font-semibold border border-white/20 uppercase shrink-0 whitespace-nowrap">OJT Lifecycle System</span>
                    </div>
                    <h4 className="font-hasweny font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-4 md:mb-8 text-zinc-300 leading-relaxed">Onboarding Monitoring & Evaluation System</h4>
                    <ul className="space-y-3 sm:space-y-4 md:space-y-5 text-[13px] sm:text-[14px] md:text-lg text-zinc-300 mb-6 md:mb-12 font-hasweny list-none">
                      <li className="flex gap-4"><span className="text-white font-bold text-lg">✧</span> <span className="leading-relaxed">Integrated real-time performance monitoring and rubric-based scoring for accurate evaluations.</span></li>
                      <li className="flex gap-4"><span className="text-white font-bold text-lg">✧</span> <span className="leading-relaxed">Automated document verification and digital certification with AI evaluation assistance.</span></li>
                    </ul>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-6 md:mt-8">
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {["TypeScript", "Prisma", "OJT Lifecycle"].map(t => (
                          <span key={t} className="text-[9px] md:text-[11px] uppercase font-bold tracking-widest border border-zinc-700 px-2.5 md:px-4 py-1.5 md:py-2 bg-zinc-800/50 backdrop-blur-md text-zinc-300 rounded-md">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardTilt>

          {/* Project 3: Barangay */}
          <CardTilt maxTilt={3} disabled={true}>
            <div className="relative w-full h-[70vh] md:h-[80vh] min-h-[500px] md:min-h-[600px] rounded-[28px] overflow-hidden bg-black shadow-2xl flex items-end group">
              {/* Main Video Sequence (Looping between Mockup 7, 8, and 9) */}
              <video
                ref={barangayVideoRef}
                muted
                playsInline
                preload="auto"
                onEnded={() => playNext(barangayVideoRef, barangayVideos, barangayIndexRef)}
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
                style={{ willChange: 'transform' }}
              />

              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>

              {/* Content */}
              <div className="relative z-20 p-6 md:p-14 lg:p-20 w-full">
                <div className="flex flex-col w-full">
                  <div className="w-full">
                    <div className="flex items-center gap-1.5 sm:gap-4 mb-3 md:mb-6 flex-nowrap w-full">
                      <h3 className="font-brigends text-[20px] sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl text-white min-w-0 truncate">Barangay</h3>
                      <span className="font-hasweny text-[8px] sm:text-[10px] md:text-xs px-1.5 sm:px-3 md:px-4 py-0.5 sm:py-1 bg-white/10 text-white backdrop-blur-md rounded-full tracking-wide sm:tracking-wider font-semibold border border-white/20 uppercase shrink-0 whitespace-nowrap">Community System</span>
                    </div>
                    <h4 className="font-hasweny font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-4 md:mb-8 text-zinc-300 leading-relaxed">Local Community Service Platform</h4>
                    <ul className="space-y-3 sm:space-y-4 md:space-y-5 text-[13px] sm:text-[14px] md:text-lg text-zinc-300 mb-6 md:mb-12 font-hasweny list-none">
                      <li className="flex gap-4"><span className="text-white font-bold text-lg">✧</span> <span className="leading-relaxed">Integrated an offline bot chat for instant community support and quick answers.</span></li>
                      <li className="flex gap-4"><span className="text-white font-bold text-lg">✧</span> <span className="leading-relaxed">Organized record management and service requests for residents.</span></li>
                    </ul>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-6 md:mt-8">
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {["TypeScript", "Database", "Offline Bot", "Management"].map(t => (
                          <span key={t} className="text-[9px] md:text-xs uppercase font-bold tracking-widest border border-zinc-700 px-2.5 md:px-4 py-1.5 md:py-2 bg-zinc-800/50 backdrop-blur-md text-zinc-300 rounded-md">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardTilt>

          {/* Project 4: Gabay */}
          <CardTilt maxTilt={3} disabled={true}>
            <div className="relative w-full h-[70vh] md:h-[80vh] min-h-[500px] md:min-h-[600px] rounded-[28px] overflow-hidden bg-black shadow-2xl flex items-end group">
              {/* Main Video Sequence (Looping between Mockup 1 and 2) */}
              <video
                ref={gabayVideoRef}
                muted
                playsInline
                preload="auto"
                onEnded={() => playNext(gabayVideoRef, gabayVideos, gabayIndexRef)}
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
                style={{ willChange: 'transform' }}
              />

              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>

              {/* Content */}
              <div className="relative z-20 p-6 md:p-14 lg:p-20 w-full">
                <div className="flex flex-col w-full">
                  <div className="w-full">
                    <div className="flex items-center gap-1.5 sm:gap-4 mb-3 md:mb-6 flex-nowrap w-full">
                      <h3 className="font-brigends text-[20px] sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl text-white min-w-0 truncate">Gabay</h3>
                      <span className="font-hasweny text-[8px] sm:text-[10px] md:text-xs px-1.5 sm:px-3 md:px-4 py-0.5 sm:py-1 bg-white/10 text-white backdrop-blur-md rounded-full tracking-wide sm:tracking-wider font-semibold border border-white/20 uppercase shrink-0 whitespace-nowrap">Mobile AR</span>
                    </div>
                    <h4 className="font-hasweny font-bold text-base sm:text-lg md:text-xl lg:text-2xl mb-4 md:mb-8 text-zinc-300 leading-relaxed">Campus Navigation Mobile Application</h4>
                    <ul className="space-y-3 sm:space-y-4 md:space-y-5 text-[13px] sm:text-[14px] md:text-lg text-zinc-300 mb-6 md:mb-12 font-hasweny list-none">
                      <li className="flex gap-4"><span className="text-white font-bold text-lg">✧</span> <span className="leading-relaxed">I made a navigation system for devices using Flutter and Unity.</span></li>
                      <li className="flex gap-4"><span className="text-white font-bold text-lg">✧</span> <span className="leading-relaxed">Added UI overlays and real-time location guidance overlays.</span></li>
                    </ul>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 mt-6 md:mt-8">
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {["Flutter", "Unity", "AR", "Mobile"].map(t => (
                          <span key={t} className="text-[9px] md:text-xs uppercase font-bold tracking-widest border border-zinc-700 px-2.5 md:px-4 py-1.5 md:py-2 bg-zinc-800/50 backdrop-blur-md text-zinc-300 rounded-md">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardTilt>

        </div>
      </section>

      {/* UNDERTAKINGS (Professional Experience) */}
      <section id="undertakings" className="relative w-full px-6 md:px-12 lg:px-20 py-16 md:py-24 overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zinc-100 rounded-full blur-[120px] opacity-50 pointer-events-none z-0"></div>

        <div className="relative z-10 flex flex-col items-center mb-16 md:mb-20 w-full">
          <h2 className="font-brigends text-3xl sm:text-4xl md:text-6xl text-center px-2">UNDERTAKINGS</h2>
          <p className="font-hasweny text-xs sm:text-sm font-bold text-lg md:text-xl mt-4 md:mt-6 text-zinc-600 tracking-widest uppercase text-center px-2">
            Education & Professional Experience
          </p>
        </div>

        <div className="relative w-full pb-20 pt-4 md:pt-10 z-10 flex flex-col">

          {/* Row 1: Academic */}
          <div className="group flex flex-col md:flex-row md:justify-between border-t border-zinc-200 py-12 md:py-20 transition-all duration-500 px-4 md:px-8 -mx-4 md:-mx-8">
            {/* Left Side */}
            <div className="md:w-[45%] mb-10 md:mb-0">
              <div className="font-hasweny text-xs md:text-sm font-bold tracking-[0.2em] text-zinc-600 uppercase mb-4">
                Academic <span className="mx-3">|</span> 2022 – 2026
              </div>
              <h3 className="font-brigends text-4xl md:text-5xl lg:text-6xl text-black leading-[1.1] mb-6 group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-500">
                Information<br />Technology
              </h3>
              <div className="font-hasweny text-lg md:text-xl tracking-widest uppercase">
                <span className="font-bold text-black">Bachelor of Science</span>
              </div>
            </div>

            {/* Right Side */}
            <div className="md:w-[50%] flex flex-col justify-center">
              <div className="font-hasweny text-xl md:text-2xl font-bold tracking-widest uppercase mb-6 text-zinc-800">
                South East Asian Institute of Technology
              </div>
              <p className="font-hasweny text-[15px] md:text-[17px] font-bold text-zinc-600 leading-relaxed max-w-prose">
                A comprehensive program focusing on web development, full-stack technologies, system integration, and core software engineering principles.
              </p>
            </div>
          </div>

          {/* Row 2: Front-End Developer */}
          <div className="group flex flex-col md:flex-row-reverse md:justify-between border-t border-zinc-200 py-12 md:py-20 transition-all duration-500 px-4 md:px-8 -mx-4 md:-mx-8">
            {/* Right Side (Visual), Left in DOM: Title */}
            <div className="md:w-[45%] mb-10 md:mb-0 md:text-right">
              <div className="font-hasweny text-xs font-bold md:text-sm font-bold tracking-[0.2em] text-zinc-600 uppercase mb-4">
                Professional Exp <span className="mx-3">|</span> Jan 2025 – Jul 2025
              </div>
              <h3 className="font-brigends text-4xl md:text-5xl lg:text-6xl text-black leading-[1.1] mb-6 group-hover:-translate-x-2 md:group-hover:-translate-x-4 transition-transform duration-500">
                Front End<br />Developer
              </h3>
              <div className="font-hasweny text-lg md:text-xl tracking-widest uppercase">
                <span className="font-bold text-black">Edufied</span> <span className="text-zinc-600 mx-3">—</span> <span className="text-zinc-600 font-bold">Intern</span>
              </div>
            </div>

            {/* Left Side (Visual), Right in DOM: Description */}
            <div className="md:w-[50%] flex flex-col justify-center">
              <ul className="space-y-6 font-hasweny text-[15px] md:text-[17px] text-zinc-600">
                <li className="flex gap-6 items-start">
                  <span className="text-black font-bold text-xl leading-none mt-1">✧</span>
                  <span className="leading-relaxed font-bold text-zinc-600">Created responsive user interface elements with Tailwind CSS and React.</span>
                </li>
                <li className="flex gap-6 items-start">
                  <span className="text-black font-bold text-xl leading-none mt-1">✧</span>
                  <span className="leading-relaxed font-bold text-zinc-600">Enhanced UI speed and load time through component rendering optimization.</span>
                </li>
                <li className="flex gap-6 items-start">
                  <span className="text-black font-bold text-xl leading-none mt-1">✧</span>
                  <span className="leading-relaxe d font-bold text-zinc-600">Worked together using Jira for task management and Git version control.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Row 3: Encoder */}
          <div className="group flex flex-col md:flex-row md:justify-between border-t border-b border-zinc-200 py-12 md:py-20 transition-all duration-500 px-4 md:px-8 -mx-4 md:-mx-8">
            {/* Left Side */}
            <div className="md:w-[45%] mb-10 md:mb-0">
              <div className="font-hasweny text-xs md:text-sm font-bold tracking-[0.2em] text-zinc-600 uppercase mb-4">
                Professional Exp <span className="mx-3">|</span> Jul 2025 – Nov 2025
              </div>
              <h3 className="font-brigends text-4xl md:text-5xl lg:text-6xl text-black leading-[1.1] mb-6 group-hover:translate-x-2 md:group-hover:translate-x-4 transition-transform duration-500">
                Encoder Trainee
              </h3>
              <div className="font-hasweny text-lg md:text-xl tracking-widest uppercase">
                <span className="font-bold text-black">City Hall of Koronadal</span> <span className="text-zinc-600 mx-3">—</span> <span className="text-zinc-600 font-bold">OJT</span>
              </div>
            </div>

            {/* Right Side */}
            <div className="md:w-[50%] flex flex-col justify-center">
              <ul className="space-y-6 font-hasweny text-[15px] md:text-[17px] text-zinc-600">
                <li className="flex gap-6 items-start">
                  <span className="text-black font-bold text-xl leading-none mt-1">✧</span>
                  <span className="leading-relaxed font-bold text-zinc-600">Accurately managed and encoded official documents.</span>
                </li>
                <li className="flex gap-6 items-start">
                  <span className="text-black font-bold text-xl leading-none mt-1">✧</span>
                  <span className="leading-relaxed font-bold text-zinc-600">Helped users with fundamental system functions.</span>
                </li>
                <li className="flex gap-6 items-start">
                  <span className="text-black font-bold text-xl leading-none mt-1">✧</span>
                  <span className="leading-relaxed font-bold text-zinc-600">Exhibited professionalism and teamwork.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
