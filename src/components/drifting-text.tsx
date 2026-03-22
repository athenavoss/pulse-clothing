"use client";

import { memo } from "react";
import { motion } from "framer-motion";

interface DriftingTextProps {
  text: string;
  className?: string;
}

export const DriftingText = memo(function DriftingText({
  text,
  className = "",
}: DriftingTextProps) {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className={`inline-flex w-max ${className}`}
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          },
        }}
      >
        <span className="inline-block pr-[4vw]">{text}</span>
        <span className="inline-block pr-[4vw]">{text}</span>
        <span className="inline-block pr-[4vw]">{text}</span>
      </motion.div>
    </div>
  );
});
