"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  text: string;
  className?: string;
}

export function Marquee({ text, className = "" }: MarqueeProps) {
  const repeated = `${text}\u00A0\u00A0\u00A0\u2014\u00A0\u00A0\u00A0`;

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-flex w-max"
        animate={{ x: ["0%", "-25%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        <span className="inline-block">{repeated}</span>
        <span className="inline-block">{repeated}</span>
        <span className="inline-block">{repeated}</span>
        <span className="inline-block">{repeated}</span>
      </motion.div>
    </div>
  );
}
