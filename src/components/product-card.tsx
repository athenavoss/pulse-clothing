"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const productImages: Record<string, string> = {
  "pulse-washed-tee": "https://images.pexels.com/photos/6863599/pexels-photo-6863599.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
  "pulse-cargo-pant": "https://images.pexels.com/photos/5319511/pexels-photo-5319511.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
  "pulse-heavyweight-hoodie": "https://images.pexels.com/photos/5319514/pexels-photo-5319514.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
  "pulse-work-jacket": "https://images.pexels.com/photos/4065842/pexels-photo-4065842.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
  "pulse-ribbed-tank": "https://images.pexels.com/photos/5320165/pexels-photo-5320165.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
  "pulse-pleated-wide": "https://images.pexels.com/photos/7000904/pexels-photo-7000904.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
};

interface Product {
  name: string;
  price: number;
  slug: string;
}

export function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.98, y: 1 }}
    >
      <div className="relative overflow-hidden mb-4 bg-[#141414]">
        <motion.div
          animate={{ scale: isHovered ? 1.04 : 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <Image
            src={productImages[product.slug] ?? `https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop`}
            alt={product.name}
            width={600}
            height={800}
            className="w-full aspect-[3/4] object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 p-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <span className="inline-block text-[11px] tracking-[0.2em] uppercase text-[#E8E8E8] bg-[#141414]/80 backdrop-blur-sm px-3 py-1.5">
            View Details
          </span>
        </motion.div>
      </div>

      <div className="flex justify-between items-start">
        <h3 className="text-[13px] tracking-[0.05em] text-[#C0C0C0] font-light group-hover:text-white transition-colors duration-300">
          {product.name}
        </h3>
        <span className="text-[13px] text-[#A8A8A8] font-light tabular-nums">
          ${product.price}
        </span>
      </div>
    </motion.div>
  );
}
