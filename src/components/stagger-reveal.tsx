"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  direction?: "up" | "left" | "right";
}

const containerVariants = {
  hidden: {},
  visible: (staggerDelay: number) => ({
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    },
  }),
};

const directionMap = {
  up: { y: 40, x: 0 },
  left: { x: -40, y: 0 },
  right: { x: 40, y: 0 },
};

const itemVariants = (direction: "up" | "left" | "right") => ({
  hidden: {
    opacity: 0,
    scale: 0.95,
    ...directionMap[direction],
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
});

export function StaggerReveal({
  children,
  className = "",
  staggerDelay = 0.08,
  direction = "up",
}: StaggerRevealProps) {
  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={staggerDelay}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
}) {
  return (
    <motion.div className={className} variants={itemVariants(direction)}>
      {children}
    </motion.div>
  );
}
