"use client";

import { Marquee, ScrollReveal } from "@/components/animations";
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

function IndustryCard({ name, Icon }: { name: string; Icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="inline-flex items-center gap-3 px-6 py-3.5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[var(--color-brand-green)]/20 transition-all duration-300 group cursor-default shrink-0">
      <div className="w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center group-hover:bg-[var(--color-brand-green)] transition-colors duration-300">
        <Icon className="h-4.5 w-4.5 text-[var(--color-brand-green)] group-hover:text-white transition-colors duration-300" />
      </div>
      <span className="text-sm font-semibold text-gray-700 group-hover:text-[var(--color-brand-green)] transition-colors whitespace-nowrap">
        {name}
      </span>
    </div>
  );
}

export function ClientLogoMarquee() {
  return (
    <section className="py-16 bg-white border-y border-gray-100 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-[var(--color-brand-green)] font-semibold text-sm mb-3">
              Industries We Serve
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Trusted Across <span className="text-gradient-green">Industries</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
              From food and beverage to legal services, businesses across sectors rely on our printing expertise for quality, reliability, and competitive pricing.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee row with fade edges */}
      <div className="marquee-fade">
        <Marquee speed={40} pauseOnHover>
          <div className="flex gap-4">
            {industries.map((industry) => (
              <IndustryCard key={industry.name} name={industry.name} Icon={industry.Icon} />
            ))}
          </div>
          <div className="flex gap-4">
            {industries.map((industry) => (
              <IndustryCard key={`${industry.name}-dup`} name={industry.name} Icon={industry.Icon} />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
