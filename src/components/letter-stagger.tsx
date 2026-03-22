"use client";

import { memo } from "react";
import { motion } from "framer-motion";

interface LetterStaggerProps {
  text: string;
  className?: string;
  delay?: number;
}

const containerVariants = {
  hidden: {},
  visible: (delay: number) => ({
    transition: {
      staggerChildren: 0.04,
      delayChildren: delay,
    },
  }),
};

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

export const LetterStagger = memo(function LetterStagger({
  text,
  className = "",
  delay = 0.3,
}: LetterStaggerProps) {
  const lines = text.split("\n");

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      custom={delay}
      aria-label={text}
    >
      {lines.map((line, lineIdx) => (
        <span key={lineIdx} className="block">
          {line.split("").map((char, charIdx) => (
            <motion.span
              key={`${lineIdx}-${charIdx}`}
              variants={letterVariants}
              className="inline-block"
              style={{ whiteSpace: char === " " ? "pre" : undefined }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
});
