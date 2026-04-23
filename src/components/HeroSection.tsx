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
  TiltCard,
} from "@/components/animations";
import { useRef } from "react";

const rotatingWords = [
  "Custom Boxes",
  "Paper Bags",
  "Calendars",
  "Flyers & Brochures",
  "Stickers & Labels",
  "Menus & Stationery",
];

const textVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.15 + i * 0.12, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
};

const mobileTextVariants = {
  hidden: { opacity: 0, y: 25, filter: "blur(2px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.94, x: 40, rotateY: -6 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    rotateY: 0,
    transition: { delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const mobileImageVariants = {
  hidden: { opacity: 0, scale: 0.97, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
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
          initial={{ y: "100%", opacity: 0, filter: "blur(8px)", scale: 0.9 }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)", scale: 1 }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(8px)", scale: 0.9 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-0 text-gradient-amber"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  const tv = isMobile ? mobileTextVariants : textVariants;
  const iv = isMobile ? mobileImageVariants : imageVariants;

  return (
    <section className="relative overflow-hidden gradient-mesh" ref={heroRef}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[var(--color-brand-green)]/5 rounded-full blur-3xl animate-morph" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[var(--color-brand-amber)]/5 rounded-full blur-3xl animate-color-shift" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-100/30 rounded-full blur-[100px]" />

        <FloatingElement className="absolute top-[15%] right-[10%] hidden sm:block" amplitude={12} duration={4} delay={0}>
          <div className="w-16 h-16 rounded-xl border border-[var(--color-brand-green)]/10 bg-[var(--color-brand-green)]/5 rotate-12 animate-morph" />
        </FloatingElement>
        <FloatingElement className="absolute bottom-[20%] left-[5%]" amplitude={8} duration={5} delay={1}>
          <div className="w-10 h-10 rounded-full border border-[var(--color-brand-amber)]/10 bg-[var(--color-brand-amber)]/5 animate-color-shift" />
        </FloatingElement>
        <FloatingElement className="absolute top-[40%] left-[8%] hidden sm:block" amplitude={6} duration={3.5} delay={0.5}>
          <div className="w-6 h-6 rounded-md bg-[var(--color-brand-green)]/10 rotate-45" />
        </FloatingElement>
        <FloatingElement className="absolute top-[20%] left-[40%] hidden md:block" amplitude={10} duration={4.5} delay={2}>
          <div className="w-4 h-4 rounded-full bg-[var(--color-brand-amber)]/15" />
        </FloatingElement>

        {/* Particle dots */}
        {[...Array(isMobile ? 3 : 6)].map((_, i) => (
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

      <div className="relative py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10 xl:gap-14">
          {/* Text Content — left column on desktop */}
          <div className="order-2 lg:order-1 w-full px-4 sm:px-6 lg:pl-[max(2rem,calc((100vw-80rem)/2))] lg:pr-6 xl:pr-10">
            <div className="lg:max-w-lg xl:max-w-xl">
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={tv}
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
                variants={tv}
                className="mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-6xl font-extrabold text-gray-900 leading-[1.08] mb-6"
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
                variants={tv}
                className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8"
              >
                From custom boxes and paper bags to calendars, flyers, and
                brochures — Treebox Manila Co. delivers premium offset
                lithography printing with over 25 years of trusted service to
                businesses across Metro Manila.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={tv}
                className="flex flex-col sm:flex-row gap-3"
              >
                {isMobile ? (
                  <>
                    <Button
                      asChild
                      className="bg-[var(--color-brand-amber)] hover:bg-[var(--color-brand-amber-light)] text-white font-bold shadow-lg shadow-amber-500/25 transition-all duration-300 text-base group h-12 px-6 btn-shine w-full"
                    >
                      <Link href="/contact">
                        Get a Quote Now
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      className="bg-[var(--color-brand-green)] hover:bg-[var(--color-brand-green-light)] text-white font-bold text-base group transition-all duration-300 h-12 px-6 shadow-lg shadow-green-900/20 btn-shine w-full"
                    >
                      <a href="tel:+63281234567">
                        <Phone className="mr-2 h-4 w-4" />
                        Call +63 2 8123 4567
                      </a>
                    </Button>
                  </>
                ) : (
                  <>
                    <MagneticButton strength={0.15} className="inline-flex">
                      <Button
                        asChild
                        className="bg-[var(--color-brand-amber)] hover:bg-[var(--color-brand-amber-light)] text-white font-bold shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 text-sm group h-12 px-6 btn-shine"
                      >
                        <Link href="/contact">
                          Get a Quote Now
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </MagneticButton>
                    <MagneticButton strength={0.1} className="inline-flex">
                      <Button
                        asChild
                        className="bg-[var(--color-brand-green)] hover:bg-[var(--color-brand-green-light)] text-white font-bold text-sm group transition-all duration-300 h-12 px-6 shadow-lg shadow-green-900/20 btn-shine"
                      >
                        <a href="tel:+63281234567">
                          <Phone className="mr-2 h-4 w-4" />
                          Call +63 2 8123 4567
                        </a>
                      </Button>
                    </MagneticButton>
                  </>
                )}
              </motion.div>

              {/* Trust badges */}
              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={tv}
                className="mt-8 flex items-center gap-4 sm:gap-5"
              >
                {trustBadges.map((badge, i) => {
                  const Icon = badge.icon;
                  return (
                    <div key={badge.text} className="flex items-center gap-2 group/badge">
                      <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center group-hover/badge:bg-green-100 transition-colors">
                        <Icon className="h-4 w-4 text-[var(--color-brand-green)]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900 leading-tight">{badge.text}</p>
                        <p className="text-[10px] text-gray-500 leading-tight">{badge.subtext}</p>
                      </div>
                      {i < trustBadges.length - 1 && (
                        <div className="w-px h-7 bg-gray-200 ml-2 sm:ml-3" />
                      )}
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>

          {/* Hero Image — top on mobile, right on desktop, stretches to edge */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={iv}
            className="order-1 lg:order-2 w-full lg:flex-1 px-4 sm:px-6 lg:pl-0 lg:pr-[max(1rem,calc((100vw-80rem)/2))] lg:pt-2 lg:pb-4"
          >
            <TiltCard tiltAmount={4}>
              <div className="relative w-full">
                {/* Decorative shape */}
                <div className="absolute -inset-3 bg-gradient-to-br from-green-200/40 to-amber-200/30 rounded-3xl rotate-2 animate-morph" />
                <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-green-900/10 ring-1 ring-black/5">
                  <Image
                    src="/images/hero-printing-press.png"
                    alt="Treebox Manila offset lithography printing press producing custom boxes and packaging materials"
                    width={1440}
                    height={768}
                    priority
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>

                {/* Floating badge — Call Now — COMPACT footprint */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.0, type: "spring", stiffness: 200, damping: 15 }}
                  whileHover={{ scale: 1.06 }}
                  className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 lg:bottom-5 lg:left-5 bg-white/95 backdrop-blur-sm rounded-lg shadow-md p-2 sm:p-2.5 flex items-center gap-2 ring-1 ring-black/5 cursor-pointer"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md gradient-green flex items-center justify-center text-white">
                    <Phone className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 leading-tight">Call Now</p>
                    <p className="text-xs sm:text-sm font-bold text-gray-900 leading-tight">+63 2 8123 4567</p>
                  </div>
                </motion.div>

                {/* Floating badge — Since 1997 — COMPACT footprint */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, y: -15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1.3, type: "spring", stiffness: 200, damping: 15 }}
                  whileHover={{ scale: 1.06 }}
                  className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 lg:top-5 lg:right-5 bg-white/95 backdrop-blur-sm rounded-lg shadow-md p-2 sm:p-2.5 ring-1 ring-black/5 cursor-pointer"
                >
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-md gradient-amber flex items-center justify-center text-white text-[10px] sm:text-xs font-bold">
                      25+
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900 leading-tight">Since 1997</p>
                      <p className="text-[10px] text-gray-400 leading-tight">MWC Enterprises</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating badge — Free Quote — desktop only, compact */}
                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 1.6, type: "spring", stiffness: 200, damping: 15 }}
                  whileHover={{ scale: 1.08 }}
                  className="absolute top-1/2 right-2.5 sm:right-4 lg:right-5 -translate-y-1/2 hidden lg:block"
                >
                  <div className="bg-[var(--color-brand-green)] text-white rounded-lg shadow-md px-2.5 py-1.5 text-xs font-bold animate-pulse-badge">
                    Free Quote
                  </div>
                </motion.div>
              </div>
            </TiltCard>
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
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
