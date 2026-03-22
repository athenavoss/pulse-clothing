"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  as?: "button" | "a";
  href?: string;
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  as = "button",
  href,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-20, 20], [2, -2]);
  const rotateY = useTransform(x, [-20, 20], [-2, 2]);

  function handleMouse(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const Component = as === "a" ? motion.a : motion.button;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      style={{ x, y, rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      <Component
        href={href}
        className={className}
        whileTap={{ scale: 0.98, y: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {children}
      </Component>
    </motion.div>
  );
}
