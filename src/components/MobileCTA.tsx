"use client";

import { Phone, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export function MobileCTA() {
  const [visible, setVisible] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

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
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          {/* Gradient backdrop */}
          <div className="bg-gradient-to-t from-black/30 via-black/10 to-transparent h-6 -mt-6" />
          <div className="bg-white/95 backdrop-blur-lg border-t border-gray-200/50 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
            <div className="flex gap-3">
              <Link
                href="/contact"
                onClick={() => setHasInteracted(true)}
                className="flex-1 flex items-center justify-center gap-2 bg-[var(--color-brand-amber)] hover:bg-[var(--color-brand-amber-light)] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-amber-500/25 active:scale-[0.97] transition-transform duration-150 touch-feedback relative overflow-hidden"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Get a Quote</span>
                {/* Pulse indicator when not yet interacted */}
                {!hasInteracted && (
                  <motion.span
                    animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white"
                  />
                )}
              </Link>
              <a
                href="tel:+63281234567"
                aria-label="Call Treebox Manila now"
                className="flex items-center justify-center gap-2 bg-[var(--color-brand-green)] hover:bg-[var(--color-brand-green-light)] text-white font-bold py-3.5 px-5 rounded-xl shadow-lg shadow-green-900/20 active:scale-[0.97] transition-transform duration-150 touch-feedback"
              >
                <Phone className="h-5 w-5" />
                <span className="hidden xs:inline">Call Us</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
