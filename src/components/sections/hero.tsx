"use client";

import { motion } from "framer-motion";
import { KenBurnsImage } from "@/components/ken-burns-image";
import { LetterStagger } from "@/components/letter-stagger";
import { MagneticButton } from "@/components/magnetic-button";
import { TextReveal } from "@/components/text-reveal";
import { Marquee } from "@/components/marquee";
import { ArrowDown } from "@phosphor-icons/react";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] bg-[#0A0A0A]">
      {/* Asymmetric split layout */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] min-h-[100dvh]">
        {/* Left — Text content */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-20 pb-12 pt-24 md:pt-0 md:pb-32">
          <TextReveal>
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#A8A8A8] font-light block mb-4">
              Spring / Summer 2026
            </span>
          </TextReveal>

          <div className="mb-5">
            <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] tracking-tighter leading-[0.9] font-light text-[#E8E8E8]">
              <LetterStagger text={"Built for\nthe drift"} delay={0.3} />
            </h1>
          </div>

          <TextReveal delay={0.2}>
            <p className="text-[15px] sm:text-base text-[#999999] leading-relaxed max-w-[38ch] font-light mb-7">
              Garments shaped by movement and city texture.
              Quiet construction, honest materials, nothing wasted.
            </p>
          </TextReveal>

          <TextReveal delay={0.3}>
            <MagneticButton
              as="a"
              href="#collection"
              className="inline-flex items-center gap-3 text-[12px] tracking-[0.2em] uppercase text-[#C0C0C0] font-light border-b border-[#C0C0C0]/20 pb-2 hover:text-white hover:border-white transition-colors duration-500"
            >
              Explore Collection
              <ArrowDown size={14} weight="light" />
            </MagneticButton>
          </TextReveal>
        </div>

        {/* Right — Editorial image with Ken Burns */}
        <div className="relative h-[50vh] md:h-auto overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <KenBurnsImage
              src="https://images.pexels.com/photos/5840443/pexels-photo-5840443.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1600&fit=crop"
              alt="Editorial fashion photography"
              sizes="(max-width: 768px) 100vw, 55vw"
              priority
            />
            {/* Top gradient for nav legibility */}
            <div className="absolute inset-x-0 top-0 h-[100px] bg-gradient-to-b from-black/60 to-transparent" />
            {/* Subtle fade on left edge for blend */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent opacity-40 hidden md:block" />
          </motion.div>
        </div>
      </div>

      {/* Marquee at bottom */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-[#C0C0C0]/5">
        <Marquee
          text="New Collection Available"
          className="py-3 text-[11px] tracking-[0.3em] uppercase text-[#A8A8A8] font-light"
        />
      </div>
    </section>
  );
}
