"use client";

import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="tel:+63281234567"
          aria-label="Call Treebox Manila now"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 md:hidden flex items-center justify-center w-14 h-14 rounded-full gradient-green text-white shadow-lg shadow-green-900/30 active:scale-90 transition-transform"
        >
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[var(--color-brand-green)] animate-pulse-ring" />
          <Phone className="h-6 w-6 relative z-10" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
