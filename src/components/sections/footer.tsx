"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { InstagramLogo, TiktokLogo, ArrowRight } from "@phosphor-icons/react";
import { MagneticButton } from "@/components/magnetic-button";
import { DriftingText } from "@/components/drifting-text";

export function FooterSection() {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);

  return (
    <footer className="bg-[#0A0A0A] text-[#C0C0C0]">
      {/* Giant ghosted wordmark with infinite drift */}
      <div className="relative overflow-hidden">
        <motion.div
          className="pt-24 md:pt-36"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
        >
          <DriftingText
            text="PULSE"
            className="text-[15vw] leading-none tracking-tighter font-light select-none text-white opacity-[0.04]"
          />
        </motion.div>
      </div>

      {/* Three-column grid */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-16">
        <div className="border-t border-[#A8A8A8]/10 pt-12 md:pt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* SHOP */}
            <div>
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#A8A8A8] font-light block mb-6">
                Shop
              </span>
              <ul className="flex flex-col gap-3">
                {["Collection", "New Arrivals", "Lookbook"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[13px] font-light text-[#A8A8A8]/60 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* INFO */}
            <div>
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#A8A8A8] font-light block mb-6">
                Info
              </span>
              <ul className="flex flex-col gap-3">
                {["Our Story", "Sizing", "Shipping & Returns", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[13px] font-light text-[#A8A8A8]/60 hover:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONNECT */}
            <div>
              <span className="text-[11px] tracking-[0.3em] uppercase text-[#A8A8A8] font-light block mb-6">
                Connect
              </span>
              <div className="flex items-center gap-5 mb-8">
                <MagneticButton
                  as="a"
                  href="#"
                  className="text-[#A8A8A8]/40 hover:text-white transition-colors duration-300"
                  strength={0.4}
                >
                  <InstagramLogo size={20} weight="light" />
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href="#"
                  className="text-[#A8A8A8]/40 hover:text-white transition-colors duration-300"
                  strength={0.4}
                >
                  <TiktokLogo size={20} weight="light" />
                </MagneticButton>
              </div>

              {/* Newsletter signup with expanding underline */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setEmail("");
                }}
                className="relative pb-2"
              >
                <div className="flex items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder="Email for updates"
                    className="flex-1 bg-transparent text-[13px] font-light text-[#C0C0C0] placeholder:text-[#A8A8A8]/30 outline-none"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="text-[#A8A8A8]/40 hover:text-white transition-colors duration-300 ml-3"
                  >
                    <ArrowRight size={16} weight="light" />
                  </button>
                </div>
                {/* Static base line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#A8A8A8]/20" />
                {/* Expanding active line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-px bg-white origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focused ? 1 : 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  style={{ width: "100%" }}
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pb-8">
        <div className="border-t border-[#A8A8A8]/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <span className="text-[11px] tracking-[0.15em] font-light text-[#A8A8A8]/30 uppercase">
            &copy; 2026 Pulse. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[11px] tracking-[0.15em] font-light text-[#A8A8A8]/30 uppercase hover:text-white transition-colors duration-300"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-[11px] tracking-[0.15em] font-light text-[#A8A8A8]/30 uppercase hover:text-white transition-colors duration-300"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
