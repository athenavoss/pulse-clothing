"use client";

import { StaggerReveal, StaggerItem } from "@/components/stagger-reveal";
import { TextReveal } from "@/components/text-reveal";
import { ProductCard } from "@/components/product-card";

const products = [
  { name: "Oversized Washed Tee", price: 68, slug: "pulse-washed-tee" },
  { name: "Relaxed Cargo Pant", price: 128, slug: "pulse-cargo-pant" },
  { name: "Heavyweight Hoodie", price: 148, slug: "pulse-heavyweight-hoodie" },
  { name: "Canvas Work Jacket", price: 198, slug: "pulse-work-jacket" },
  { name: "Ribbed Tank", price: 48, slug: "pulse-ribbed-tank" },
  { name: "Pleated Wide Leg", price: 158, slug: "pulse-pleated-wide" },
];

export function CollectionSection() {
  return (
    <section id="collection" className="bg-[#0A0A0A] py-16 md:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24">
          <div>
            <TextReveal>
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#A8A8A8] font-light block mb-4">
                01 / Collection
              </span>
            </TextReveal>
            <TextReveal delay={0.08}>
              <h2 className="text-4xl md:text-6xl tracking-tighter leading-none font-light text-[#E8E8E8]">
                New Arrivals
              </h2>
            </TextReveal>
          </div>
          <TextReveal delay={0.16}>
            <p className="text-[13px] text-[#999999] font-light tracking-wide mt-4 md:mt-0 max-w-[28ch]">
              Six essentials. Cut clean, dyed slow, made to stay.
            </p>
          </TextReveal>
        </div>

        {/* Product grid — 2 cols on mobile, asymmetric on desktop */}
        <StaggerReveal
          className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-10 md:gap-y-16"
          staggerDelay={0.1}
        >
          {products.map((product, i) => (
            <StaggerItem
              key={product.slug}
              className={i === 0 ? "md:col-span-1 md:row-span-1" : ""}
            >
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
