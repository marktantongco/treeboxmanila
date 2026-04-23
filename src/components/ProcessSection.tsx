"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation, useScroll, useTransform } from "framer-motion";
import {
  MessageSquare,
  FileText,
  Printer,
  Truck,
  ArrowRight,
  Phone,
} from "lucide-react";
import Link from "next/link";
import {
  ScrollReveal,
  StaggerReveal,
  SlideIn,
  BounceIn,
  fadeInUp,
} from "@/components/animations";

const steps = [
  {
    icon: MessageSquare,
    title: "Inquiry & Consultation",
    description:
      "Reach out to us by phone, email, or through our contact form. Tell us about your printing needs — product type, quantity, size, material preferences, and deadline. Our team responds within 24 hours with expert guidance and recommendations tailored to your project.",
    detail: "Free consultation & quotation",
  },
  {
    icon: FileText,
    title: "Design & Proof Approval",
    description:
      "Submit your print-ready artwork or work with our design team to create it. We prepare a digital proof for your review and approval, ensuring every detail — colors, text, layout, and dimensions — is exactly right before printing begins.",
    detail: "Digital proof before printing",
  },
  {
    icon: Printer,
    title: "Production & Quality Check",
    description:
      "Your order goes through our offset lithography printing process with strict quality control at every stage. We check color accuracy, registration, cutting precision, and finishing quality to ensure every piece meets our high standards.",
    detail: "Strict QC at every stage",
  },
  {
    icon: Truck,
    title: "Delivery & Follow-Up",
    description:
      "We deliver your finished order right to your doorstep across Metro Manila and ship nationwide. After delivery, our team follows up to ensure you are completely satisfied with the results and to discuss any future printing needs.",
    detail: "Metro Manila & nationwide delivery",
  },
];

/* ──── Animated connecting line (desktop) ──── */
function AnimatedConnectingLine() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div ref={ref} className="hidden lg:block absolute top-[4.5rem] left-[12.5%] right-[12.5%]">
      {/* Background track */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 rounded-full" />
      {/* Animated gradient fill */}
      <motion.div
        className="absolute top-0 left-0 h-1 rounded-full bg-gradient-to-r from-[var(--color-brand-green)] via-[var(--color-brand-amber)] to-[var(--color-brand-green)]"
        style={{ transformOrigin: "left" }}
        initial={{ scaleX: 0 }}
        variants={{
          hidden: { scaleX: 0 },
          visible: { scaleX: 1 },
        }}
        animate={controls}
        transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
      />
      {/* Glowing progress trail */}
      <motion.div
        className="absolute top-0 left-0 h-3 rounded-full"
        style={{
          transformOrigin: "left",
          background: "linear-gradient(90deg, transparent, rgba(27,94,32,0.15), transparent)",
        }}
        initial={{ scaleX: 0 }}
        variants={{
          hidden: { scaleX: 0 },
          visible: { scaleX: 1 },
        }}
        animate={controls}
        transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
      />
      {/* Glowing pulse that travels along the line */}
      <motion.div
        className="absolute top-0 left-0 h-1 w-16 rounded-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
        style={{ transformOrigin: "left" }}
        initial={{ x: "-10%", opacity: 0 }}
        variants={{
          hidden: { x: "-10%", opacity: 0 },
          visible: { x: "110%", opacity: [0, 1, 1, 0] },
        }}
        animate={controls}
        transition={{ duration: 3, ease: [0.25, 0.1, 0.25, 1], delay: 1, repeat: Infinity, repeatDelay: 2 }}
      />
      {/* Diamond nodes at intervals */}
      <div className="absolute top-0 left-0 right-0 h-1 flex items-center justify-between">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="relative"
            initial={{ scale: 0, opacity: 0 }}
            variants={{
              hidden: { scale: 0, opacity: 0 },
              visible: { scale: 1, opacity: 1 },
            }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.4, type: "spring", stiffness: 300 }}
          >
            {/* Outer pulse ring */}
            <motion.div
              animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.3, ease: "easeInOut" }}
              className="absolute inset-[-6px] rounded-full bg-[var(--color-brand-green)]/20"
            />
            {/* Inner dot */}
            <div className="w-3 h-3 rounded-full bg-[var(--color-brand-green)] shadow-md shadow-green-900/20 ring-2 ring-white" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ──── Step badge with enhanced pulse ──── */
function StepBadge({ number }: { number: number }) {
  return (
    <span className="absolute -top-3 -right-3 w-9 h-9 rounded-full gradient-green text-white text-sm font-bold flex items-center justify-center shadow-lg shadow-green-900/30 animate-pulse-badge">
      {number}
      {/* Extra pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[var(--color-brand-green)]/30 animate-pulse-ring" />
    </span>
  );
}

/* ──── Progress indicator for mobile with scroll-based active state ──── */
function MobileProgressIndicator({ activeStep }: { activeStep: number }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-8 sm:hidden">
      {steps.map((_, i) => (
        <motion.div
          key={i}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: i * 0.15, duration: 0.4 }}
          className={`h-1.5 rounded-full transition-all duration-500 ${
            i <= activeStep
              ? "bg-[var(--color-brand-green)] w-8"
              : "bg-gray-200 w-4"
          }`}
        />
      ))}
    </div>
  );
}

/* ──── Mobile step card with swipe-style reveal ──── */
function MobileStepCard({ step, index, isActive }: { step: typeof steps[0]; index: number; isActive: boolean }) {
  const Icon = step.icon;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30, scale: 0.95, filter: "blur(4px)" }}
      animate={isInView ? { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      data-step={index}
      className="relative"
    >
      <div className={`bg-white rounded-xl p-5 shadow-sm border transition-all duration-300 ${
        isActive ? 'border-[var(--color-brand-green)]/30 shadow-md' : 'border-gray-100'
      }`}>
        <div className="flex items-start gap-4">
          <motion.div
            whileTap={{ scale: 0.95 }}
            className="relative shrink-0"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center"
            >
              <Icon className="h-6 w-6 text-[var(--color-brand-green)]" />
            </motion.div>
            <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full gradient-green text-white text-[10px] font-bold flex items-center justify-center shadow-md">
              {index + 1}
            </span>
          </motion.div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-gray-900 mb-1">{step.title}</h3>
            <p className="text-xs text-gray-600 leading-relaxed mb-2">{step.description}</p>
            <span className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full bg-green-50 text-[var(--color-brand-green)] border border-green-100">
              {step.detail}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const step = Number(el.dataset.step);
            if (!isNaN(step)) {
              setActiveStep(step);
            }
          }
        });
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    const stepElements = sectionRef.current?.querySelectorAll("[data-step]");
    stepElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none grid-pattern" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-brand-green)]/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[var(--color-brand-amber)]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-[var(--color-brand-green)] font-semibold text-sm mb-4">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              From Inquiry to{" "}
              <span className="text-gradient-green">Delivery</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Our streamlined 4-step process makes ordering printed materials
              simple, transparent, and hassle-free from start to finish.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="relative">
          {/* Animated connecting line (desktop) */}
          <AnimatedConnectingLine />

          {/* Mobile progress indicator */}
          <MobileProgressIndicator activeStep={activeStep} />

          {/* Mobile: stacked card layout */}
          {isMobile ? (
            <div className="space-y-3 sm:hidden">
              {steps.map((step, i) => (
                <MobileStepCard
                  key={step.title}
                  step={step}
                  index={i}
                  isActive={activeStep >= i}
                />
              ))}
            </div>
          ) : (
            <StaggerReveal
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
              staggerDelay={0.15}
            >
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div key={step.title} variants={fadeInUp}>
                    <div className="relative text-center group" data-step={i}>
                      {/* Step icon container */}
                      <div className="relative z-10 mx-auto mb-6">
                        <BounceIn delay={i * 0.1}>
                        <motion.div
                          animate={{ y: [-3, 3, -3] }}
                          transition={{ repeat: Infinity, duration: 3, delay: i * 0.2, ease: "easeInOut" }}
                        >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                          className="relative inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-white border-2 border-[var(--color-brand-green)]/10 shadow-lg shadow-green-900/5 group-hover:border-[var(--color-brand-green)]/30 group-hover:shadow-xl group-hover:shadow-green-900/10 transition-all duration-500"
                        >
                          {/* Rotating ring decoration */}
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                            className="absolute inset-0 rounded-2xl border-2 border-dashed border-[var(--color-brand-green)]/10"
                          />
                          <Icon className="h-10 w-10 text-[var(--color-brand-green)]" />
                          {/* Step badge with enhanced pulse */}
                          <StepBadge number={i + 1} />
                        </motion.div>
                        </motion.div>
                        </BounceIn>
                      </div>

                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[var(--color-brand-green)] transition-colors">
                        {step.title}
                      </h3>
                      <SlideIn direction="up" delay={i * 0.1}>
                        <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto mb-4">
                          {step.description}
                        </p>
                      </SlideIn>
                      <span className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-green-50 text-[var(--color-brand-green)] border border-green-100">
                        {step.detail}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </StaggerReveal>
          )}
        </div>

        {/* Prominent CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20">
            <div className="gradient-cta-card rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
                <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-white/5 rounded-full" />
                <motion.div
                  animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="absolute top-4 right-4 w-12 h-12 border border-white/10 rounded-lg"
                />
                <motion.div
                  animate={{ y: [5, -5, 5], rotate: [0, -3, 0] }}
                  transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                  className="absolute bottom-4 left-4 w-10 h-10 border border-white/10 rounded-full"
                />
              </div>

              <div className="relative z-10">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 mb-6"
                >
                  <Printer className="h-7 w-7 text-white" />
                </motion.div>
                <p className="text-green-100/80 text-lg mb-2">
                  Ready to start your printing project?
                </p>
                <p className="text-white text-3xl sm:text-4xl font-extrabold mb-8 leading-tight">
                  Let&apos;s Bring Your Vision to Life
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white text-[var(--color-brand-green)] hover:bg-green-50 font-bold px-10 py-4 rounded-xl shadow-xl shadow-black/20 hover:shadow-2xl transition-all duration-300 text-lg group btn-shine"
                  >
                    Get a Free Quote
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="tel:+63281234567"
                    className="inline-flex items-center justify-center gap-2 bg-[var(--color-brand-amber)] hover:bg-[var(--color-brand-amber-light)] text-white font-bold px-10 py-4 rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-xl transition-all duration-300 text-lg btn-shine"
                  >
                    <Phone className="h-5 w-5" />
                    Call to Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
