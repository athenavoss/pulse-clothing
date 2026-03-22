"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface KenBurnsImageProps {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
}

export const KenBurnsImage = memo(function KenBurnsImage({
  src,
  alt,
  sizes,
  priority,
}: KenBurnsImageProps) {
  return (
    <motion.div
      className="absolute inset-0 will-change-transform"
      animate={{
        scale: [1, 1.08, 1.04, 1.1, 1],
        x: ["0%", "1.5%", "-1%", "0.5%", "0%"],
        y: ["0%", "-1%", "0.5%", "-0.5%", "0%"],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={sizes}
        priority={priority}
      />
    </motion.div>
  );
});
