"use client";

import { memo, useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springConfig = { stiffness: 300, damping: 28, mass: 0.5 };

export const CustomCursor = memo(function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const scale = useMotionValue(1);

  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);
  const smoothScale = useSpring(scale, { stiffness: 200, damping: 20 });

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    },
    [cursorX, cursorY]
  );

  const onMouseOver = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, [role='button'], input, textarea, .cursor-interactive")
      ) {
        scale.set(2.5);
      }
    },
    [scale]
  );

  const onMouseOut = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, [role='button'], input, textarea, .cursor-interactive")
      ) {
        scale.set(1);
      }
    },
    [scale]
  );

  useEffect(() => {
    // Only show custom cursor on pointer devices
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return;

    document.documentElement.style.cursor = "none";

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseout", onMouseOut, { passive: true });

    return () => {
      document.documentElement.style.cursor = "";
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, [onMouseMove, onMouseOver, onMouseOut]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-3 h-3 rounded-full bg-white/80 pointer-events-none mix-blend-difference"
      style={{
        x: smoothX,
        y: smoothY,
        scale: smoothScale,
        translateX: "-50%",
        translateY: "-50%",
        zIndex: 9999,
      }}
      aria-hidden="true"
    />
  );
});
