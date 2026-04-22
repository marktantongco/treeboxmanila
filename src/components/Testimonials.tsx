"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, HoverLiftCard, fadeInUp, RippleButton } from "@/components/animations";

const testimonials = [
  {
    name: "Maria Santos",
    role: "Owner, Sweet Cravings Bakery",
    content:
      "Treebox Manila has been our go-to printer for over 5 years now. Their custom cake boxes are always perfectly printed and durable. The colors are vibrant and consistent every single time. I never have to worry about quality — they deliver on their promise every order.",
    rating: 5,
    service: "Custom Boxes",
  },
  {
    name: "Roberto Chen",
    role: "Marketing Director, Prime Realty",
    content:
      "We needed 10,000 flyers for a property launch with a very tight deadline. Treebox Manila delivered ahead of schedule with exceptional print quality. The paper stock felt premium and the colors were exactly as our designer intended. Highly recommended for real estate printing needs.",
    rating: 5,
    service: "Flyers & Brochures",
  },
  {
    name: "Angela Reyes",
    role: "Operations Manager, FreshMart PH",
    content:
      "As a food business, packaging is everything. Treebox Manila understood our requirements for food-safe packaging and delivered custom bags and boxes that elevated our brand image. Their team is responsive and always willing to accommodate rush orders.",
    rating: 5,
    service: "Paper Bags",
  },
  {
    name: "James Villanueva",
    role: "CEO, Villanueva & Associates Law Firm",
    content:
      "Professional stationery is non-negotiable for a law firm. Treebox Manila prints our letterheads, envelopes, and business cards with impeccable quality. The attention to detail — from paper weight to color accuracy — is exactly what we need for our corporate identity.",
    rating: 5,
    service: "Menus & Stationery",
  },
  {
    name: "Carmen Lim",
    role: "Founder, Caliente Hot Sauce",
    content:
      "Our product labels need to be waterproof and eye-catching on store shelves. Treebox Manila's label printing is outstanding — vibrant colors, precise die-cutting, and the waterproof material holds up perfectly even in refrigerated display. They helped our products stand out.",
    rating: 5,
    service: "Stickers & Labels",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 15 }}
        >
          <Star
            className={`h-6 w-6 ${
              i < rating
                ? "text-[var(--color-brand-amber)] fill-[var(--color-brand-amber)] drop-shadow-md"
                : "text-gray-200"
            }`}
          />
        </motion.div>
      ))}
      <span className="ml-3 text-lg font-bold text-[var(--color-brand-amber-dark)]">
        {rating}.0
      </span>
    </div>
  );
}

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const AUTO_ADVANCE_DURATION = 6000;

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
      return;
    }
    intervalRef.current = setInterval(next, AUTO_ADVANCE_DURATION);
    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + 100 / (AUTO_ADVANCE_DURATION / 50), 100));
    }, 50);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [next, isPaused]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  const t = testimonials[current];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-64 h-64 bg-[var(--color-brand-green)]/3 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-[var(--color-brand-amber)]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-[var(--color-brand-amber-dark)] font-semibold text-sm mb-4">
              Client Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Businesses Across{" "}
              <span className="text-gradient-green">Metro Manila</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Do not just take our word for it. Here is what our clients say about
              working with Treebox Manila Co.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div
              className="relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Quote icon */}
              <div className="absolute -top-6 left-8 sm:left-12 z-10">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="w-14 h-14 rounded-xl gradient-green flex items-center justify-center shadow-lg shadow-green-900/20"
                >
                  <Quote className="h-7 w-7 text-white" />
                </motion.div>
              </div>

              {/* Card with animated gradient border */}
              <div className="gradient-border-card rounded-2xl p-[3px]">
                <div className="bg-[var(--color-brand-cream)] rounded-2xl p-8 sm:p-12 pt-16 relative overflow-hidden">
                  {/* Decorative */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand-green)]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-[var(--color-brand-amber)]/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                  <div className="relative">
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.div
                        key={current}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        {/* Star rating */}
                        <div className="bg-white/60 inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-sm shadow-sm mb-6">
                          <StarRating rating={t.rating} />
                        </div>

                        <blockquote className="mt-2 text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
                          &ldquo;{t.content}&rdquo;
                        </blockquote>

                        <div className="mt-8 flex items-center gap-4">
                          {/* Avatar with gradient */}
                          <div className="w-14 h-14 rounded-full gradient-green flex items-center justify-center text-white font-bold text-xl shadow-md ring-3 ring-white">
                            {t.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">{t.name}</p>
                            <p className="text-sm text-gray-500">{t.role}</p>
                          </div>
                          <div className="ml-auto hidden sm:block">
                            <span className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-green-50 text-[var(--color-brand-green)] border border-green-100">
                              {t.service}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Auto-advance progress bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200/50">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[var(--color-brand-green)] to-[var(--color-brand-amber)]"
                      style={{ width: `${progress}%` }}
                      transition={{ duration: 0.05 }}
                    />
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                {/* Counter */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-extrabold text-[var(--color-brand-green)] tabular-nums">
                    {String(current + 1).padStart(2, "0")}
                  </span>
                  <div className="w-10 h-0.5 bg-[var(--color-brand-green)]/30 rounded-full" />
                  <span className="text-lg text-gray-400 font-bold tabular-nums">
                    {String(testimonials.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Dot indicators */}
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setDirection(i > current ? 1 : -1);
                        setCurrent(i);
                        setProgress(0);
                      }}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === current
                          ? "bg-[var(--color-brand-green)] w-8"
                          : "bg-gray-300 hover:bg-gray-400 w-2"
                      }`}
                    />
                  ))}
                </div>

                {/* Arrow buttons */}
                <div className="flex gap-2">
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="w-10 h-10 rounded-full border border-gray-200 hover:border-[var(--color-brand-green)] hover:bg-green-50 flex items-center justify-center text-gray-500 hover:text-[var(--color-brand-green)] transition-all duration-300 hover-glow"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.85 }}
                    onClick={next}
                    aria-label="Next testimonial"
                    className="w-10 h-10 rounded-full border border-gray-200 hover:border-[var(--color-brand-green)] hover:bg-green-50 flex items-center justify-center text-gray-500 hover:text-[var(--color-brand-green)] transition-all duration-300 hover-glow"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
