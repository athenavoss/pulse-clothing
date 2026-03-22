"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { List, X, Bag } from "@phosphor-icons/react";

const navLinks = [
  { label: "Collection", href: "#collection" },
  { label: "Story", href: "#story" },
  { label: "Lookbook", href: "#lookbook" },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-5 transition-colors duration-500 ${
          scrolled ? "bg-[#0A0A0A]/90 backdrop-blur-md" : "bg-transparent"
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
      >
        <a
          href="#"
          className="text-[#E8E8E8] text-xl tracking-[0.3em] font-light select-none"
        >
          PULSE
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#E8E8E8] text-[13px] tracking-[0.15em] uppercase font-medium hover:text-white transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <button
            aria-label="Shopping bag"
            className="text-[#E8E8E8] hover:text-white transition-colors duration-300"
          >
            <Bag size={20} weight="light" />
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(true)}
          className="md:hidden text-[#E8E8E8]"
          aria-label="Open menu"
        >
          <List size={24} weight="light" />
        </button>
      </motion.nav>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#0A0A0A] flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="text-[#E8E8E8] text-xl tracking-[0.3em] font-light">
                PULSE
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="text-[#E8E8E8]"
              >
                <X size={24} weight="light" />
              </button>
            </div>

            <div className="flex flex-col items-start justify-center flex-1 px-10 gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#C0C0C0] text-4xl tracking-tighter font-light hover:text-white transition-colors duration-300"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.1 + i * 0.08,
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
