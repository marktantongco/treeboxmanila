"use client";

import { motion, useInView } from "framer-motion";
import { Award, Truck, Clock, Layers } from "lucide-react";
import { ScrollReveal, StaggerGridReveal, AnimatedCounter, fadeInUp, HoverLiftCard, SectionHeadingReveal, cardReveal3D, MobileSwipeReveal } from "@/components/animations";
import { useRef } from "react";

const reasons = [
  {
    icon: Award,
    title: "25+ Years of Excellence",
    stat: 25,
    statSuffix: "+",
    statLabel: "Years",
    description:
      "Established in 1997 as MWC Enterprises, we have over two decades of experience delivering premium offset lithography printing services to businesses across Metro Manila and beyond.",
  },
  {
    icon: Truck,
    title: "Direct Supplier",
    stat: "No",
    statSuffix: "",
    statLabel: "Middlemen",
    description:
      "As a direct supplier, we eliminate middlemen to offer you competitive pricing without compromising on quality. You get factory-direct service from quote to delivery.",
  },
  {
    icon: Layers,
    title: "Wide Range of Products",
    stat: 50,
    statSuffix: "+",
    statLabel: "Products",
    description:
      "From custom boxes and paper bags to calendars, flyers, brochures, stickers, and labels — we print it all. One supplier for all your printing and packaging needs.",
  },
  {
    icon: Clock,
    title: "Fast & Reliable Turnaround",
    stat: 99,
    statSuffix: "%",
    statLabel: "On Time",
    description:
      "We understand deadlines matter. Our efficient production process ensures your orders are completed on time, every time — so you never miss a launch date or event.",
  },
];

function StatDisplay({ stat, suffix, label }: { stat: string | number; suffix: string; label: string }) {
  if (typeof stat === "number") {
    return (
      <div className="text-center mb-5">
        <div className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-gradient-green leading-none tracking-tight">
          <AnimatedCounter target={stat} suffix={suffix} />
        </div>
        <p className="text-sm text-gray-400 font-semibold uppercase tracking-[0.2em] mt-3">{label}</p>
      </div>
    );
  }
  return (
    <div className="text-center mb-5">
      <div className="text-6xl sm:text-7xl lg:text-8xl font-extrabold text-gradient-green leading-none tracking-tight">
        {stat}{suffix}
      </div>
      <p className="text-sm text-gray-400 font-semibold uppercase tracking-[0.2em] mt-3">{label}</p>
    </div>
  );
}

function ReasonCard({ reason, index }: { reason: typeof reasons[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = reason.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <HoverLiftCard className="h-full">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full text-center group hover:shadow-xl hover:shadow-green-900/5 transition-all duration-500">
          {/* Icon with hover-glow and micro-interaction */}
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="relative inline-flex items-center justify-center rounded-xl gradient-green text-white mb-2 shadow-lg shadow-green-900/25 hover-glow"
            style={{ width: "4.5rem", height: "4.5rem" }}
          >
            <Icon className="h-9 w-9" />
          </motion.div>

          <StatDisplay stat={reason.stat} suffix={reason.statSuffix} label={reason.statLabel} />

          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[var(--color-brand-green)] transition-colors duration-300">
            {reason.title}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            {reason.description}
          </p>
        </div>
      </HoverLiftCard>
    </motion.div>
  );
}

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-[var(--color-brand-cream)] relative overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 pointer-events-none dot-pattern opacity-60" />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-[var(--color-brand-green)]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-brand-amber)]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeadingReveal
          badge="Why Treebox Manila"
          title={
            <>
              Why Choose <span className="text-gradient-green">Treebox Manila</span>?
            </>
          }
          subtitle="Businesses across Metro Manila trust us for their printing needs. Here is what sets us apart from the competition."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.title} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
