"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, ChevronDown, Shield, Truck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  MagneticButton,
  FloatingElement,
  RippleButton,
  TiltCard,
} from "@/components/animations";

const rotatingWords = [
  "Custom Boxes",
  "Paper Bags",
  "Calendars",
  "Flyers & Brochures",
  "Stickers & Labels",
  "Menus & Stationery",
];

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9, x: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { delay: 0.5, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const trustBadges = [
  { icon: Shield, text: "25+ Years", subtext: "Experience" },
  { icon: Truck, text: "Direct", subtext: "Supplier" },
  { icon: Award, text: "50+", subtext: "Products" },
];

function RotatingText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [words.length]);

  return (
    <span className="inline-block relative h-[1.2em] overflow-hidden align-bottom w-[250px] sm:w-[300px] lg:w-[360px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: "100%", opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute left-0 text-gradient-amber"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-mesh">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--color-brand-green)]/5 rounded-full blur-3xl animate-morph" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[var(--color-brand-amber)]/5 rounded-full blur-3xl animate-color-shift" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-100/30 rounded-full blur-[100px]" />

        {/* Floating decorative shapes with enhanced morph animations */}
        <FloatingElement className="absolute top-[15%] right-[10%]" amplitude={12} duration={4} delay={0}>
          <div className="w-16 h-16 rounded-xl border border-[var(--color-brand-green)]/10 bg-[var(--color-brand-green)]/5 rotate-12 animate-morph" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-[20%] left-[5%]" amplitude={8} duration={5} delay={1}>
          <div className="w-10 h-10 rounded-full border border-[var(--color-brand-amber)]/10 bg-[var(--color-brand-amber)]/5 animate-color-shift" />
        </FloatingElement>
        <FloatingElement className="absolute top-[40%] left-[8%]" amplitude={6} duration={3.5} delay={0.5}>
          <div className="w-6 h-6 rounded-md bg-[var(--color-brand-green)]/10 rotate-45" />
        </FloatingElement>
        <FloatingElement className="absolute top-[20%] left-[40%]" amplitude={10} duration={4.5} delay={2}>
          <div className="w-4 h-4 rounded-full bg-[var(--color-brand-amber)]/15" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-[30%] right-[15%]" amplitude={7} duration={3} delay={1.5}>
          <div className="w-8 h-8 rounded-lg border border-[var(--color-brand-green)]/8 bg-[var(--color-brand-green)]/3 -rotate-12" />
        </FloatingElement>

        {/* Animated particle dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-[var(--color-brand-green)]/20"
            style={{
              top: `${15 + i * 15}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + i * 0.5,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
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
              Premium{" "}
              <RotatingText words={rotatingWords} />
              <br />
              <span className="text-gradient-green">Printing Services</span> in Metro Manila
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
              className="flex flex-col sm:flex-row gap-4"
            >
              <RippleButton>
                <MagneticButton strength={0.15}>
                  <Button
                    asChild
                    className="bg-[var(--color-brand-amber)] hover:bg-[var(--color-brand-amber-light)] text-white font-bold shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 text-base group h-14 px-8 btn-shine"
                  >
                    <Link href="/contact">
                      Get a Quote Now
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </MagneticButton>
              </RippleButton>
              <MagneticButton strength={0.1}>
                <Button
                  asChild
                  className="bg-[var(--color-brand-green)] hover:bg-[var(--color-brand-green-light)] text-white font-bold text-base group transition-all duration-300 h-14 px-8 shadow-lg shadow-green-900/20 btn-shine"
                >
                  <a href="tel:+63281234567">
                    <Phone className="mr-2 h-5 w-5" />
                    Call +63 2 8123 4567
                  </a>
                </Button>
              </MagneticButton>
            </motion.div>

            {/* Trust badges with micro-interactions */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="mt-10 flex items-center gap-4 sm:gap-6"
            >
              {trustBadges.map((badge, i) => {
                const Icon = badge.icon;
                return (
                  <div key={badge.text} className="flex items-center gap-2.5 group/badge">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center group-hover/badge:bg-green-100 transition-colors"
                    >
                      <Icon className="h-5 w-5 text-[var(--color-brand-green)]" />
                    </motion.div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 leading-tight">{badge.text}</p>
                      <p className="text-xs text-gray-500 leading-tight">{badge.subtext}</p>
                    </div>
                    {i < trustBadges.length - 1 && (
                      <div className="w-px h-8 bg-gray-200 ml-2 sm:ml-4" />
                    )}
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Hero Image with 3D Tilt */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="order-1 lg:order-2"
          >
            <TiltCard tiltAmount={5}>
              <div className="relative">
                {/* Decorative shape with morph animation */}
                <div className="absolute -inset-4 bg-gradient-to-br from-green-200/40 to-amber-200/30 rounded-3xl rotate-3 animate-morph" />
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
                {/* Floating badge — Call Now with shadow pulse */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                  className="absolute -bottom-4 -left-4 sm:bottom-4 sm:left-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2 ring-1 ring-black/5 animate-shadow-pulse"
                >
                  <div className="w-10 h-10 rounded-lg gradient-green flex items-center justify-center text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Call Now</p>
                    <p className="text-sm font-bold text-gray-900">+63 2 8123 4567</p>
                  </div>
                </motion.div>
                {/* Floating badge — Since 1997 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.5, type: "spring" }}
                  className="absolute -top-4 -right-4 sm:top-4 sm:right-4 bg-white rounded-xl shadow-lg p-3 ring-1 ring-black/5"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg gradient-amber flex items-center justify-center text-white text-xs font-bold">
                      25+
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Since 1997</p>
                      <p className="text-[10px] text-gray-400">MWC Enterprises</p>
                    </div>
                  </div>
                </motion.div>
                {/* Floating badge — Free Quote with pulse */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8, type: "spring" }}
                  className="absolute top-1/2 -right-2 sm:right-0 -translate-y-1/2 hidden lg:block"
                >
                  <div className="bg-[var(--color-brand-green)] text-white rounded-xl shadow-lg px-3 py-2 text-xs font-bold animate-pulse-badge">
                    Free Quote
                  </div>
                </motion.div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator with enhanced animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1"
      >
        <span className="text-xs text-gray-400">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
