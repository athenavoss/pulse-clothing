"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ClipTextRevealProps {
  children: ReactNode;
  className?: string;
}

export function ClipTextReveal({ children, className = "" }: ClipTextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.35"],
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0.2, 1]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Ghost text for layout */}
      <div className="invisible" aria-hidden="true">
        {children}
      </div>
      {/* Revealed text */}
      <motion.div
        className="absolute inset-0"
        style={{ clipPath, opacity }}
      >
        {children}
      </motion.div>
    </div>
  );
}
