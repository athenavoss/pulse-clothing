"use client";

import { TextReveal } from "@/components/text-reveal";
import { ClipTextReveal } from "@/components/clip-text-reveal";
import { ParallaxImage } from "@/components/parallax-image";
import { MagneticButton } from "@/components/magnetic-button";
import { ArrowRight } from "@phosphor-icons/react";

export function StorySection() {
  return (
    <section id="story" className="bg-[#0A0A0A] py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20 items-center">
          {/* Left — Editorial copy */}
          <div>
            <TextReveal>
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#A8A8A8] font-light block mb-6">
                02 / Story
              </span>
            </TextReveal>

            <ClipTextReveal className="mb-8">
              <h2 className="text-4xl md:text-5xl tracking-tighter leading-[0.95] font-light text-[#E8E8E8]">
                Worn in,
                <br />
                not out
              </h2>
            </ClipTextReveal>

            <TextReveal delay={0.16}>
              <p className="text-base text-[#888888] leading-relaxed max-w-[50ch] font-light mb-6">
                PULSE started in a garage in East London with a single conviction:
                clothing should age well. We source deadstock fabrics, overdye in
                small batches, and cut patterns that settle into the body over time
                rather than fighting it.
              </p>
            </TextReveal>

            <TextReveal delay={0.24}>
              <p className="text-base text-[#888888] leading-relaxed max-w-[50ch] font-light">
                No seasonal churn. No trend forecasting. We release when the
                garment is finished, not when the calendar says so. Every piece is
                enzyme-washed once and garment-dyed twice. The color you get on day
                one is just the beginning.
              </p>
            </TextReveal>

            <TextReveal delay={0.32}>
              <MagneticButton
                as="a"
                href="#"
                className="inline-flex items-center gap-3 text-[12px] tracking-[0.2em] uppercase text-[#C0C0C0] font-light border-b border-[#C0C0C0]/20 pb-2 hover:text-white hover:border-white transition-colors duration-500 mt-10"
              >
                Our Process
                <ArrowRight size={14} weight="light" />
              </MagneticButton>
            </TextReveal>
          </div>

          {/* Right — Single editorial image */}
          <div>
            <ParallaxImage
              src="https://images.pexels.com/photos/4863012/pexels-photo-4863012.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
              alt="Fabric detail close-up"
              className="relative w-full aspect-[4/3]"
              speed={0.1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
