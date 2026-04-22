"use client";

import { HeroSection } from "@/components/HeroSection";
import { StatsSection } from "@/components/StatsSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ClientLogoMarquee } from "@/components/ClientLogoMarquee";
import { ProcessSection } from "@/components/ProcessSection";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { ScrollReveal, RippleButton } from "@/components/animations";
import Link from "next/link";
import { Phone, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HomePageContent() {
  return (
    <>
      <HeroSection />

      <StatsSection />

      <ServicesGrid />

      <WhyChooseUs />

      <ClientLogoMarquee />

      <ProcessSection />

      <Testimonials />

      <FAQ />

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28 gradient-cta overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[var(--color-brand-amber)]/10 rounded-full blur-3xl" />
          {/* Floating shapes */}
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-10 left-10 w-20 h-20 border border-white/10 rounded-xl animate-morph"
          />
          <motion.div
            animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute bottom-10 right-10 w-16 h-16 border border-white/10 rounded-full animate-morph"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/90 font-medium text-sm mb-6">
              <Sparkles className="h-3.5 w-3.5 text-[var(--color-brand-amber)]" />
              Start Your Project Today
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
              Ready to Start Your
              <br />
              <span className="text-[var(--color-brand-amber)]">Print Project</span>?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg text-green-100/80 max-w-2xl mx-auto mb-10">
              Whether you need custom boxes, paper bags, or any printed material,
              our team is ready to help. Get a free quote today and experience the
              Treebox Manila difference.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <RippleButton className="inline-flex">
                <Button
                  asChild
                  className="bg-white text-[var(--color-brand-green)] hover:bg-green-50 font-bold shadow-xl shadow-black/20 hover:shadow-2xl transition-all duration-300 text-base group h-14 px-8 btn-shine"
                >
                  <Link href="/contact">
                    Get a Quote Now
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </RippleButton>
              <Button
                asChild
                className="bg-[var(--color-brand-amber)] hover:bg-[var(--color-brand-amber-light)] text-white font-bold shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 text-base group h-14 px-8 btn-shine hover-glow-amber"
              >
                <a href="tel:+63281234567">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +63 2 8123 4567
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
