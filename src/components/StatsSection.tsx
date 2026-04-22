"use client";

import { motion } from "framer-motion";
import { ScrollReveal, AnimatedCounter } from "@/components/animations";
import { Building2, Users, Package, Clock } from "lucide-react";

const stats = [
  {
    value: 25,
    suffix: "+",
    label: "Years of Experience",
    description: "Serving Metro Manila since 1997",
    Icon: Building2,
  },
  {
    value: 500,
    suffix: "+",
    label: "Clients Served",
    description: "Businesses trust Treebox Manila",
    Icon: Users,
  },
  {
    value: 50,
    suffix: "+",
    label: "Product Types",
    description: "Boxes, bags, flyers, and more",
    Icon: Package,
  },
  {
    value: 99,
    suffix: "%",
    label: "On-Time Delivery",
    description: "Reliable turnaround every time",
    Icon: Clock,
  },
];

export function StatsSection() {
  return (
    <section className="relative py-14 lg:py-16 gradient-stats overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-white/5 rounded-full blur-3xl" />
        <motion.div
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          className="absolute top-4 right-12 w-20 h-20 border border-white/5 rounded-xl"
        />
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="absolute bottom-4 left-12 w-14 h-14 border border-white/5 rounded-full"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => {
            const Icon = stat.Icon;
            return (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center group">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-3 group-hover:bg-white/20 transition-colors"
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </motion.div>
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-none tracking-tight">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2.5} />
                  </div>
                  <p className="text-white font-semibold text-sm sm:text-base mt-2">
                    {stat.label}
                  </p>
                  <p className="text-green-100/60 text-xs sm:text-sm mt-1">
                    {stat.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
