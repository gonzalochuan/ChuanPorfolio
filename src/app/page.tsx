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

import React, { useState } from "react";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import CardTilt from "@/components/CardTilt";

export default function Home() {
  const gabayVideos = ["/video/mockup.mp4", "/video/mockup2.mp4", "/video/mockup3.mp4"];
  const chatboxVideos = ["/video/mockup5.mp4", "/video/mockup4.mp4", "/video/mockup6.mp4"];
  const [currentGabayVideo, setCurrentGabayVideo] = useState(0);
  const [currentChatboxVideo, setCurrentChatboxVideo] = useState(0);

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Fixed background arrows across the entire page */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Desktop only */}
        <div className="hidden md:block">
          <img src="/svg/arrow1.svg" alt="" className="decor-faint absolute left-[6%] top-[8%] w-[90px]" />
          <img src="/svg/arrow1.svg" alt="" className="decor-faint absolute left-[48%] top-[6%] -scale-x-100 w-[85px]" />
          <img src="/svg/arrow2.svg" alt="" className="decor-faint absolute left-[28%] top-[42%] w-[120px]" />

          <img src="/svg/arrow3.svg" alt="" className="decor-faint absolute right-[20%] top-[10%] w-[110px]" />
          <img src="/svg/arrow4.svg" alt="" className="decor-faint absolute right-[26%] bottom-[20%] w-[130px]" />
          <img src="/svg/arrow1.svg" alt="" className="decor-faint absolute right-[8%] bottom-[8%] -scale-x-100 w-[95px]" />

          <img src="/svg/arrow2.svg" alt="" className="decor-faint absolute -left-[5%] top-[18%] w-[100px]" />
          <img src="/svg/arrow1.svg" alt="" className="decor-faint absolute -left-[5%] bottom-[12%] w-[110px]" />
          <img src="/svg/arrow3.svg" alt="" className="decor-faint absolute left-[18%] top-[55%] -scale-x-100 w-[90px]" />

          <img src="/svg/arrow1.svg" alt="" className="decor-faint absolute -right-[5%] top-[14%] w-[105px]" />
          <img src="/svg/arrow2.svg" alt="" className="decor-faint absolute -right-[2%] bottom-[16%] w-[115px]" />
          <img src="/svg/arrow4.svg" alt="" className="decor-faint absolute right-[12%] top-[46%] -scale-x-100 w-[125px]" />

          <img src="/svg/arrow3.svg" alt="" className="decor-faint absolute left-[12%] bottom-[28%] w-[100px]" />
          <img src="/svg/arrow2.svg" alt="" className="decor-faint absolute right-[42%] top-[34%] -scale-x-100 w-[90px]" />
          <img src="/svg/arrow1.svg" alt="" className="decor-faint absolute left-[60%] bottom-[6%] w-[85px]" />
        </div>

        {/* Mobile only */}
        <div className="md:hidden">
          <img src="/svg/arrow1.svg" alt="" className="decor-faint absolute left-[68%] top-[14%] w-[64px]" />
          <img src="/svg/arrow3.svg" alt="" className="decor-faint absolute right-[26%] top-[44%] w-[72px]" />
          <img src="/svg/arrow2.svg" alt="" className="decor-faint absolute left-[14%] bottom-[18%] w-[78px]" />
          <img src="/svg/arrow4.svg" alt="" className="decor-faint absolute right-[12%] bottom-[10%] w-[74px]" />
        </div>
      </div>

      <main className="min-h-[calc(100dvh-96px)] flex items-center justify-center">
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
              <img src="/svg/history.svg" alt="Hub" className="absolute left-[32vw] top-[37vw] w-[10vw] float-br delay-1 pointer-events-none md:hidden" />
              <span className="absolute left-[46vw] top-[47vw] text-[3vw] font-semibold z-10 font-hasweny md:hidden pointer-events-none">Hub</span>
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
              <img src="/svg/network.svg" alt="Network" className="absolute -right-[10vw] -top-[3vw] w-[10vw] float-tl delay-3 pointer-events-none md:hidden" />
              <span className="absolute right-[2vw] -top-[6vw] text-[3vw] font-semibold z-10 font-hasweny md:hidden pointer-events-none">Network</span>
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

        {/* mobile vertical banners */}
        <div className="pointer-events-none absolute left-0 top-[55%] -translate-y-1/2 md:hidden z-10">
          <div className="font-brigends text-3xl tracking-[0.2em] select-none" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', color: 'transparent', WebkitTextStroke: '1.5px rgba(0,0,0,0.28)', WebkitTextFillColor: 'transparent' }}>HELLO THERE!</div>
        </div>
        <div className="pointer-events-none absolute right-0 top-[55%] -translate-y-1/2 md:hidden z-10">
          <div className="font-brigends text-3xl tracking-[0.2em] select-none" style={{ writingMode: 'vertical-lr', color: 'transparent', WebkitTextStroke: '1.5px rgba(0,0,0,0.28)', WebkitTextFillColor: 'transparent' }}>HELLO THERE!</div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-start relative z-10 px-4 md:px-0">
          <div>
            <h2 className="font-brigends text-3xl md:text-5xl text-center md:text-left mt-2">CORE</h2>
            <h3 className="font-hasweny text-base text-center md:text-[1.3vw] font-semibold tracking-widest mt-6 md:mt-12 md:text-left balance max-w-[30ch] mx-auto md:max-w-none md:mx-0">HELLO I AM GONZALO CHUAN JR</h3>
            <ul className="mt-4 md:mt-8 space-y-3 md:space-y-6 text-zinc-800 text-center md:text-left max-w-[32ch] mx-auto md:max-w-none md:mx-0">
              <li className="font-hasweny text-sm md:text-[1.3vw] font-semibold">✧ Web Developer</li>
              <li className="font-hasweny text-sm md:text-[1.3vw] font-semibold">✧ Full Stack Developer</li>
              <li className="font-hasweny text-sm md:text-[1.3vw] font-semibold">✧ Freelancer</li>
            </ul>
            <p className="mt-4 md:mt-20 font-hasweny text-sm md:text-[1.3vw] font-semibold leading-relaxed text-zinc-800 max-w-[28ch] md:max-w-prose mx-auto md:mx-0 text-center md:text-left balance">
              ✧ Full stack developer with experience building academic systems, capstone projects, and technical documentation. Graduating 4th-year student with freelance experience delivering functional, user-focused web solutions.
            </p>
          </div>
          {/* Mobile portrait */}
          <div className="md:hidden mt-8 flex justify-center relative">
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
      <section id="hub" className="relative container-wide px-6 md:px-8 pt-16 md:pt-32 mt-12 md:mt-24 bg-white">
        {/* Background Decors */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50 z-0">
          <img src="/svg/arrow2.svg" alt="" className="absolute left-[10%] top-[20%] w-[120px] decor-faint -rotate-12" />
          <img src="/svg/arrow4.svg" alt="" className="absolute right-[5%] bottom-[10%] w-[160px] decor-faint rotate-12" />
        </div>

        <div className="relative z-10 flex flex-col items-center mb-16 md:mb-24">
          <h2 className="font-brigends text-4xl md:text-6xl text-center">HUB</h2>
          <p className="font-hasweny text-sm md:text-base mt-6 text-zinc-600 tracking-widest uppercase flex items-center gap-3">
            <span className="w-8 h-[1px] bg-zinc-400"></span>
            Selected Projects
            <span className="w-8 h-[1px] bg-zinc-400"></span>
          </p>
        </div>
      </section>

      {/* HUB PROJECTS (Boxed Version) */}
      <section className="relative container-wide px-6 md:px-8 py-10 md:py-16 bg-white">
        <div className="flex flex-col gap-16 md:gap-24 max-w-[1400px] mx-auto relative z-10">

          {/* Project 1: Gabay (Boxed Video) */}
          <CardTilt maxTilt={3} disabled={true}>
            <div className="relative w-full h-[70vh] md:h-[80vh] min-h-[500px] md:min-h-[600px] rounded-[28px] overflow-hidden bg-black shadow-2xl flex items-end group">
              {/* Main Video Sequence (Looping between Mockup 1 and 2) */}
              <video
                src={gabayVideos[currentGabayVideo]}
                autoPlay
                muted
                playsInline
                onEnded={() => setCurrentGabayVideo((prev) => (prev + 1) % gabayVideos.length)}
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-90"
              />

              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>

              {/* Content */}
              <div className="relative z-20 p-6 md:p-14 lg:p-20 w-full">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 md:gap-8">
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <h3 className="font-brigends text-3xl md:text-5xl lg:text-6xl text-white">Gabay</h3>
                      <span className="font-hasweny text-[10px] md:text-xs px-3 md:px-4 py-1 bg-white/10 text-white backdrop-blur-md rounded-full tracking-wider font-semibold border border-white/20 uppercase shrink-0">Mobile AR</span>
                    </div>
                    <h4 className="font-hasweny font-bold text-lg md:text-xl lg:text-2xl mb-4 md:mb-8 text-zinc-300 leading-relaxed">Campus Navigation Mobile Application</h4>
                    <ul className="space-y-3 md:space-y-4 text-xs md:text-base text-zinc-400 mb-6 md:mb-10 font-hasweny list-none">
                      <li className="flex gap-3"><span className="text-white font-bold">✧</span> <span className="leading-relaxed">Developed a mobile navigation system using Flutter and Unity integration.</span></li>
                      <li className="flex gap-3"><span className="text-white font-bold">✧</span> <span className="leading-relaxed">Implemented real-time location guidance and AR UI overlays.</span></li>
                    </ul>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {["Flutter", "Unity", "AR", "Mobile"].map(t => (
                        <span key={t} className="text-[9px] md:text-xs uppercase font-bold tracking-widest border border-zinc-700 px-2.5 md:px-4 py-1.5 md:py-2 bg-zinc-800/50 backdrop-blur-md text-zinc-300 rounded-md">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardTilt>

          {/* Project 2: ChatBox */}
          <CardTilt maxTilt={3} disabled={true}>
            <div className="relative w-full h-[70vh] md:h-[80vh] min-h-[500px] md:min-h-[600px] rounded-[28px] overflow-hidden bg-black shadow-2xl flex items-end group">
              {/* Main Video Sequence (Looping between Mockup 4, 5, and 6) */}
              <video
                src={chatboxVideos[currentChatboxVideo]}
                autoPlay
                muted
                playsInline
                onEnded={() => setCurrentChatboxVideo((prev) => (prev + 1) % chatboxVideos.length)}
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
              />

              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10"></div>

              {/* Content */}
              <div className="relative z-20 p-6 md:p-14 lg:p-20 w-full">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 md:gap-8">
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 md:mb-6">
                      <h3 className="font-brigends text-3xl md:text-5xl lg:text-6xl text-white">ChatBox</h3>
                      <span className="font-hasweny text-[10px] md:text-xs px-3 md:px-4 py-1 bg-white/10 text-white backdrop-blur-md rounded-full tracking-wider font-semibold border border-white/20 uppercase shrink-0">Progressive Web App</span>
                    </div>
                    <h4 className="font-hasweny font-bold text-lg md:text-xl lg:text-2xl mb-4 md:mb-8 text-zinc-300 leading-relaxed">Intranet Communication System</h4>
                    <ul className="space-y-3 md:space-y-4 text-xs md:text-base text-zinc-400 mb-6 md:mb-10 font-hasweny list-none">
                      <li className="flex gap-3"><span className="text-white font-bold">✧</span> <span className="leading-relaxed">Built real-time chat application using TypeScript, Node.js, and WebSockets.</span></li>
                      <li className="flex gap-3"><span className="text-white font-bold">✧</span> <span className="leading-relaxed">Implemented light-weight application support using PWA technologies.</span></li>
                    </ul>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {["TypeScript", "Node.js", "WebSockets", "PWA"].map(t => (
                        <span key={t} className="text-[9px] md:text-xs uppercase font-bold tracking-widest border border-zinc-700 px-2.5 md:px-4 py-1.5 md:py-2 bg-zinc-800/50 backdrop-blur-md text-zinc-300 rounded-md">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col items-end shrink-0">
                    <a href="http://chat-box-seait.vercel.app/" target="_blank" rel="noreferrer" className="inline-flex font-hasweny text-xs md:text-base px-6 md:px-10 py-3 md:py-5 bg-white text-black tracking-widest hover:bg-zinc-200 transition-colors items-center gap-3 font-bold uppercase rounded-2xl shadow-xl">
                      Visit Site <span className="text-xl md:text-2xl leading-none mb-[2px]">↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CardTilt>

          {/* Project 3: BMS */}
          <CardTilt maxTilt={3} disabled={true}>
            <div className="bg-white border border-zinc-200 rounded-[28px] p-6 md:p-14 lg:p-20 w-full flex flex-col lg:flex-row justify-between gap-6 md:gap-10 group hover:border-black transition-colors duration-500 shadow-2xl relative overflow-hidden min-h-[400px] md:min-h-[500px]">
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-zinc-100 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10 max-w-3xl">
                <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <h3 className="font-brigends text-3xl md:text-5xl lg:text-6xl text-black">Barangay</h3>
                  <span className="font-hasweny text-[10px] md:text-xs px-3 md:px-4 py-1 bg-zinc-100 rounded-full tracking-wider font-semibold border border-zinc-200 shrink-0 uppercase">Web System</span>
                </div>
                <h4 className="font-hasweny font-bold text-lg md:text-xl lg:text-2xl mb-4 md:mb-8 leading-relaxed text-zinc-700">Enhancing Service Efficiency and Community Engagement</h4>
                <ul className="space-y-3 md:space-y-4 text-xs md:text-base text-zinc-600 mb-6 md:mb-10 font-hasweny list-none">
                  <li className="flex gap-3"><span className="text-black font-bold">✧</span> <span className="leading-relaxed">Comprehensive online portal tailored for managing barangay operations effectively.</span></li>
                  <li className="flex gap-3"><span className="text-black font-bold">✧</span> <span className="leading-relaxed">Focused on enhancing local government service efficiency.</span></li>
                </ul>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {["TypeScript", "Database", "Management"].map(t => (
                    <span key={t} className="text-[9px] md:text-xs uppercase font-bold tracking-widest border border-zinc-200 px-2.5 md:px-4 py-1.5 md:py-2 bg-zinc-50 rounded-md">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </CardTilt>

          {/* Project 4: River Ranch */}
          <CardTilt maxTilt={3} disabled={true}>
            <div className="bg-zinc-50 border border-zinc-200 rounded-[28px] p-6 md:p-14 lg:p-20 w-full flex flex-col lg:flex-row justify-between gap-6 md:gap-10 group hover:border-black transition-colors duration-500 shadow-2xl relative overflow-hidden min-h-[400px] md:min-h-[500px]">
              <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-200/50 rounded-full blur-[120px] pointer-events-none group-hover:bg-zinc-300/60 transition-colors duration-700"></div>
              <div className="relative z-10 max-w-3xl">
                <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <h3 className="font-brigends text-3xl md:text-5xl lg:text-6xl text-black">River Ranch</h3>
                  <span className="font-hasweny text-[10px] md:text-xs px-3 md:px-4 py-1 bg-white rounded-full tracking-wider font-semibold border border-zinc-200 shrink-0 uppercase">Booking App</span>
                </div>
                <h4 className="font-hasweny font-bold text-lg md:text-xl lg:text-2xl mb-4 md:mb-8 leading-relaxed text-zinc-700">Online Booking System for River Ranch</h4>
                <ul className="space-y-3 md:space-y-4 text-xs md:text-base text-zinc-600 mb-6 md:mb-10 font-hasweny list-none">
                  <li className="flex gap-3"><span className="text-black font-bold">✧</span> <span className="leading-relaxed">Developed an online reservation and booking platform for resort customers.</span></li>
                  <li className="flex gap-3"><span className="text-black font-bold">✧</span> <span className="leading-relaxed">Streamlined availability management and customer scheduling.</span></li>
                </ul>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {["TypeScript", "Booking", "UI Design"].map(t => (
                    <span key={t} className="text-[9px] md:text-xs uppercase font-bold tracking-widest border border-zinc-200 px-2.5 md:px-4 py-1.5 md:py-2 bg-white rounded-md">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </CardTilt>

        </div>
      </section>

      {/* UNDERTAKINGS (below Tools) */}
      <section id="undertakings" className="relative container-wide top-5 px-6 md:px-8 py-16 md:py-24">
        <h2 className="font-brigends text-3xl md:text-5xl text-center mb-8 md:mb-12">Undertakings</h2>
        <div className="flex justify-center pb-20 pt-10">
          {(() => {
            // @ts-ignore
            const ResumeScroll = require("next/dynamic").default(() => import("@/components/ResumeScroll"), { ssr: false });
            // @ts-ignore
            return (
              <ResumeScroll className="w-full max-w-[92vw] sm:max-w-[560px] md:max-w-[700px] lg:max-w-[820px]">
                {process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME ? (
                  <CldImage
                    src="resume"
                    alt="Resume"
                    width={1240}
                    height={1754}
                    sizes="(max-width: 640px) 92vw, (max-width: 768px) 560px, (max-width: 1024px) 820px, 960px"
                    priority
                    className="w-full h-auto select-none drop-shadow-sm filter brightness-105 contrast-125 grayscale"
                  />
                ) : (
                  <Image
                    src="/image/resume.png"
                    alt="Resume"
                    width={1240}
                    height={1754}
                    sizes="(max-width: 640px) 92vw, (max-width: 768px) 560px, (max-width: 1024px) 820px, 960px"
                    priority
                    className="w-full h-auto select-none drop-shadow-sm filter brightness-105 contrast-125 grayscale"
                  />
                )}
              </ResumeScroll>
            );
          })()}
        </div>
        <div className="mt-10 flex justify-center">
          <a href="/resumepdf/resume.pdf" download="Gonzalo_Chuan_Resume.pdf" className="inline-flex font-semibold items-center gap-2 px-4 py-2 rounded-lg border border-black/20 shadow-sm hover:shadow transition font-hasweny">
            Download PDF
          </a>
        </div>
      </section>
    </div>
  );
}
