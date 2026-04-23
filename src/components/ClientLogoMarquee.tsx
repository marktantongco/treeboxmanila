"use client";

import { Marquee, ScrollReveal } from "@/components/animations";
import { motion, useInView } from "framer-motion";
import {
  UtensilsCrossed,
  Building2,
  Stethoscope,
  ShoppingBag,
  Scale,
  Hotel,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { useRef } from "react";

const industries = [
  { name: "Food & Beverage", Icon: UtensilsCrossed },
  { name: "Real Estate", Icon: Building2 },
  { name: "Healthcare", Icon: Stethoscope },
  { name: "Retail", Icon: ShoppingBag },
  { name: "Legal", Icon: Scale },
  { name: "Hospitality", Icon: Hotel },
  { name: "Education", Icon: GraduationCap },
  { name: "Corporate", Icon: Briefcase },
];

function IndustryCard({ name, Icon, index }: { name: string; Icon: React.ComponentType<{ className?: string }>; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="inline-flex items-center gap-2.5 px-5 py-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[var(--color-brand-green)]/20 transition-all duration-300 group cursor-default shrink-0 hover-lift"
    >
      <motion.div
        whileHover={{ scale: 1.1, backgroundColor: "var(--color-brand-green)" }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center transition-colors duration-300 overflow-hidden"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        >
          <Icon className="h-4 w-4 text-[var(--color-brand-green)] group-hover:text-white transition-colors duration-300" />
        </motion.div>
      </motion.div>
      <span className="text-sm font-semibold text-gray-700 group-hover:text-[var(--color-brand-green)] transition-colors whitespace-nowrap">
        {name}
      </span>
    </motion.div>
  );
}

export function ClientLogoMarquee() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section className="py-14 bg-[var(--color-brand-cream)]/50 border-y border-gray-100 relative overflow-hidden" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-[var(--color-brand-green)] font-semibold text-sm mb-3">
              Industries We Serve
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Trusted Across <span className="text-gradient-green">Industries</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
              From food and beverage to legal services, businesses across sectors rely on our printing expertise.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee row with fade edges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="marquee-fade"
      >
        <Marquee speed={40} pauseOnHover>
          <div className="flex gap-3">
            {industries.map((industry, i) => (
              <IndustryCard key={industry.name} name={industry.name} Icon={industry.Icon} index={i} />
            ))}
          </div>
          <div className="flex gap-3">
            {industries.map((industry, i) => (
              <IndustryCard key={`${industry.name}-dup`} name={industry.name} Icon={industry.Icon} index={i} />
            ))}
          </div>
        </Marquee>
      </motion.div>
    </section>
  );
}
