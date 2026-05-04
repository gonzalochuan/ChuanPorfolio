"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ResumeScroll({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    // Start unrolling when the top of the container reaches 75% down the viewport (coming into view)
    // Finish unrolling when the bottom of the container reaches 85% down the viewport
    offset: ["start 75%", "end 85%"],
  });

  // The height of the paper revealing the content
  const heightAnim = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // A subtle rotation effect on the bottom roller to simulate rolling
  const rotateAnim = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div ref={containerRef} className={`relative flex flex-col items-center w-full ${className}`}>
      
      {/* Top Roller */}
      <div className="relative z-20 w-[104%] h-10 md:h-12 bg-gradient-to-b from-neutral-300 via-white to-neutral-400 rounded-[20px] shadow-[0_4px_10px_rgba(0,0,0,0.5)] border border-neutral-400">
        {/* Decorative end caps */}
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-12 md:h-14 bg-gradient-to-b from-neutral-400 via-neutral-100 to-neutral-500 rounded-full border border-neutral-500 shadow-sm"></div>
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-12 md:h-14 bg-gradient-to-b from-neutral-400 via-neutral-100 to-neutral-500 rounded-full border border-neutral-500 shadow-sm"></div>
      </div>

      {/* The Paper / Scroll Body */}
      {/* We animate the height of this clipping container */}
      <motion.div
        className="w-[96%] relative overflow-hidden bg-[#f4f4f4] shadow-[inset_0_0_40px_rgba(0,0,0,0.05)] origin-top border-x border-neutral-300"
        style={{
          scaleY: scrollYProgress,
          transformOrigin: "top"
        }}
      >
        {/* Rip/tear edge simulation at the top and bottom inside (optional) */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-black/10 to-transparent z-10 pointer-events-none"></div>

        <div className="p-4 md:p-8 w-full relative">
          {/* This wrapper applies the blend mode to effectively 'burn' the image onto the scroll */}
          {/* Since children is basically the <Image /> tag, its white bg will vanish and black text blends */}
          <div className="mix-blend-multiply opacity-90 w-full h-full flex justify-center">
            {children}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none"></div>
      </motion.div>

      {/* Bottom Roller that moves down with the scroll */}
      {/* It's attached to the bottom edge of the paper naturally because of flex-col */}
      <motion.div 
        className="relative z-20 w-[104%] h-10 md:h-12 bg-gradient-to-b from-neutral-300 via-white to-neutral-400 rounded-[20px] shadow-[0_4px_15px_rgba(0,0,0,0.6)] border border-neutral-400"
      >
        <motion.div style={{ rotateX: rotateAnim }} className="w-full h-full absolute inset-0">
          {/* Decorative end caps with rotation */}
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-12 md:h-14 bg-gradient-to-b from-neutral-400 via-neutral-100 to-neutral-500 rounded-full border border-neutral-500 shadow-sm flex items-center justify-center">
            <div className="w-1 h-1 bg-black rounded-full"></div>
          </div>
          <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-12 md:h-14 bg-gradient-to-b from-neutral-400 via-neutral-100 to-neutral-500 rounded-full border border-neutral-500 shadow-sm flex items-center justify-center">
             <div className="w-1 h-1 bg-black rounded-full"></div>
          </div>
        </motion.div>
      </motion.div>

    </div>
  );
}
