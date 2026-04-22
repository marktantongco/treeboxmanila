"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + i * 0.15, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, x: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { delay: 0.6, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--color-brand-green)]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[var(--color-brand-amber)]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-100/30 rounded-full blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-brand-amber)]/10 text-[var(--color-brand-amber-dark)] font-semibold text-sm">
                <span className="w-2 h-2 rounded-full bg-[var(--color-brand-amber)] animate-pulse" />
                Your Trusted Printing Partner Since 1997
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-6"
            >
              Quality Printing{" "}
              <span className="text-gradient-green">Services</span> in Metro Manila
            </motion.h1>

            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl"
            >
              From custom boxes and paper bags to calendars, flyers, and
              brochures — Treebox Manila Co. delivers premium offset
              lithography printing with over 25 years of trusted service to
              businesses across Metro Manila.
            </motion.p>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-[var(--color-brand-amber)] hover:bg-[var(--color-brand-amber-light)] text-white font-semibold shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 text-base group relative overflow-hidden"
              >
                <a href="tel:+63281234567">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <Phone className="mr-2 h-4 w-4" />
                  Get a Quote
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-[var(--color-brand-green)] text-[var(--color-brand-green)] hover:bg-[var(--color-brand-green)] hover:text-white font-semibold text-base group transition-all duration-300"
              >
                <Link href="/services">
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mt-10 flex items-center gap-6 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-[var(--color-brand-green)] font-bold text-xs">25+</span>
                </div>
                <span>Years Experience</span>
              </div>
              <div className="w-px h-6 bg-gray-300" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-[var(--color-brand-amber-dark)] font-bold text-xs">DS</span>
                </div>
                <span>Direct Supplier</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              {/* Decorative shape */}
              <div className="absolute -inset-4 bg-gradient-to-br from-green-200/40 to-amber-200/30 rounded-3xl rotate-3" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-green-900/10 ring-1 ring-black/5">
                <Image
                  src="/images/hero-printing-press.png"
                  alt="Treebox Manila offset lithography printing press producing custom boxes and packaging materials"
                  width={1344}
                  height={768}
                  priority
                  className="w-full h-auto object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                className="absolute -bottom-4 -left-4 sm:bottom-4 sm:left-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2 ring-1 ring-black/5"
              >
                <div className="w-10 h-10 rounded-lg gradient-green flex items-center justify-center text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Call Now</p>
                  <p className="text-sm font-bold text-gray-900">+63 2 8123 4567</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1"
      >
        <span className="text-xs text-gray-400">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
