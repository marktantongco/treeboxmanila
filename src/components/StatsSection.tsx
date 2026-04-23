"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ScrollReveal, CountUp } from "@/components/animations";
import { Building2, Users, Package, Clock } from "lucide-react";
import { useRef, useState, useEffect } from "react";

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

function StatItem({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = stat.Icon;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: isMobile ? 16 : 30, scale: 0.9, filter: "blur(4px)" }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" } : {}}
      transition={{
        duration: isMobile ? 0.4 : 0.6,
        delay: index * (isMobile ? 0.08 : 0.12),
        ease: [0.16, 1, 0.3, 1],
      }}
      className="text-center group relative"
    >
      {/* Divider between items (desktop only) */}
      {index > 0 && (
        <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-white/15" />
      )}

      <motion.div
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 mb-3 group-hover:bg-white/20 transition-colors cursor-pointer"
      >
        <Icon className="h-5 w-5 text-white" />
      </motion.div>
      <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-none tracking-tight">
        <CountUp target={stat.value} suffix={stat.suffix} duration={2} />
      </div>
      <p className="text-white font-semibold text-sm mt-2">
        {stat.label}
      </p>
      <p className="text-green-100/50 text-xs mt-0.5">
        {stat.description}
      </p>
    </motion.div>
  );
}

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

  return (
    <section className="relative py-12 lg:py-14 gradient-stats overflow-hidden" ref={sectionRef}>
      <motion.div className="absolute inset-0 pointer-events-none" style={{ scale: bgScale }}>
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
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
