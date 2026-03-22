"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TextReveal } from "@/components/text-reveal";
import { StaggerReveal, StaggerItem } from "@/components/stagger-reveal";

const lookbookImages = [
  { src: "https://images.pexels.com/photos/2861830/pexels-photo-2861830.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop", alt: "Overhead concrete stairwell", aspect: "aspect-[3/4]" },
  { src: "https://images.pexels.com/photos/4400988/pexels-photo-4400988.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop", alt: "Urban architecture editorial", aspect: "aspect-[4/3]" },
  { src: "https://images.pexels.com/photos/7173190/pexels-photo-7173190.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop", alt: "Parking garage silhouette at night", aspect: "aspect-[4/5]" },
  { src: "https://images.pexels.com/photos/36348777/pexels-photo-36348777.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop", alt: "Concrete bench editorial", aspect: "aspect-square" },
  { src: "https://images.pexels.com/photos/4065842/pexels-photo-4065842.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop", alt: "Graffiti door editorial", aspect: "aspect-[2/3]" },
];

function LookbookImage({ src, alt, aspect }: { src: string; alt: string; aspect: string }) {
  return (
    <motion.div
      className={`relative overflow-hidden ${aspect} group cursor-pointer bg-[#181818]`}
      whileHover={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="absolute inset-0 ring-1 ring-white/0 transition-all duration-500 group-hover:ring-white/10 group-hover:inset-1 pointer-events-none" style={{ zIndex: 1 }} />
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </motion.div>
  );
}

export function LookbookSection() {
  return (
    <section id="lookbook" className="bg-[#0A0A0A] py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <TextReveal>
            <span className="text-[11px] tracking-[0.3em] uppercase text-[#A8A8A8] font-light block mb-4">
              03 / Lookbook
            </span>
          </TextReveal>
          <TextReveal delay={0.08}>
            <h2 className="text-4xl md:text-6xl tracking-tighter leading-none font-light text-[#E8E8E8]">
              In context
            </h2>
          </TextReveal>
        </div>

        {/* Asymmetric masonry-style grid */}
        <StaggerReveal
          className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4 md:gap-6"
          staggerDelay={0.12}
        >
          {/* Large left image */}
          <StaggerItem>
            <LookbookImage
              src={lookbookImages[0].src}
              alt={lookbookImages[0].alt}
              aspect="aspect-[3/4]"
            />
          </StaggerItem>

          {/* Right column — two stacked */}
          <div className="flex flex-col gap-4 md:gap-6">
            <StaggerItem>
              <LookbookImage
                src={lookbookImages[1].src}
                alt={lookbookImages[1].alt}
                aspect="aspect-[4/3]"
              />
            </StaggerItem>
            <StaggerItem>
              <LookbookImage
                src={lookbookImages[2].src}
                alt={lookbookImages[2].alt}
                aspect="aspect-[4/5]"
              />
            </StaggerItem>
          </div>
        </StaggerReveal>

        {/* Second row — reversed asymmetry */}
        <StaggerReveal
          className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4 md:gap-6 mt-4 md:mt-6"
          staggerDelay={0.12}
        >
          <StaggerItem>
            <LookbookImage
              src={lookbookImages[3].src}
              alt={lookbookImages[3].alt}
              aspect="aspect-square"
            />
          </StaggerItem>
          <StaggerItem>
            <LookbookImage
              src={lookbookImages[4].src}
              alt={lookbookImages[4].alt}
              aspect="aspect-[2/3]"
            />
          </StaggerItem>
        </StaggerReveal>
      </div>
    </section>
  );
}
