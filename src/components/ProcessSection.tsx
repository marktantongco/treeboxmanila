"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  FileText,
  Printer,
  Truck,
} from "lucide-react";
import {
  ScrollReveal,
  StaggerReveal,
  fadeInUp,
  RevealLine,
  FloatingElement,
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

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
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
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[var(--color-brand-green)]/20 via-[var(--color-brand-green)]/30 to-[var(--color-brand-green)]/20" />

          <StaggerReveal
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
            staggerDelay={0.15}
          >
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.title} variants={fadeInUp}>
                  <div className="relative text-center group">
                    {/* Step number */}
                    <div className="relative z-10 mx-auto mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white border-2 border-[var(--color-brand-green)]/10 shadow-lg shadow-green-900/5 group-hover:border-[var(--color-brand-green)]/30 group-hover:shadow-xl group-hover:shadow-green-900/10 transition-all duration-500"
                      >
                        <Icon className="h-8 w-8 text-[var(--color-brand-green)]" />
                        {/* Step badge */}
                        <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full gradient-green text-white text-xs font-bold flex items-center justify-center shadow-md">
                          {i + 1}
                        </span>
                      </motion.div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[var(--color-brand-green)] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto mb-4">
                      {step.description}
                    </p>
                    <span className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-green-50 text-[var(--color-brand-green)] border border-green-100">
                      {step.detail}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </StaggerReveal>
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="text-center mt-16">
            <p className="text-gray-500 mb-6">
              Ready to start your printing project?
            </p>
            <motion.a
              href="tel:+63281234567"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-[var(--color-brand-amber)] hover:bg-[var(--color-brand-amber-light)] text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-amber-500/25 transition-colors duration-300 btn-shine"
            >
              <MessageSquare className="h-5 w-5" />
              Call to Get Started
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
