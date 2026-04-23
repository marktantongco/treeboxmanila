"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Award, Truck, Clock, Layers } from "lucide-react";
import { ScrollReveal, StaggerGridReveal, AnimatedCounter, fadeInUp, HoverLiftCard, SectionHeadingReveal, cardReveal3D, MobileSwipeReveal, ImageReveal } from "@/components/animations";
import { useRef, useState, useEffect } from "react";

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
      <div className="text-center mb-4">
        <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gradient-green leading-none tracking-tight">
          <AnimatedCounter target={stat} suffix={suffix} />
        </div>
        <p className="text-xs text-gray-400 font-semibold uppercase tracking-[0.15em] mt-2">{label}</p>
      </div>
    );
  }
  return (
    <div className="text-center mb-4">
      <div className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gradient-green leading-none tracking-tight">
        {stat}{suffix}
      </div>
      <p className="text-xs text-gray-400 font-semibold uppercase tracking-[0.15em] mt-2">{label}</p>
    </div>
  );
}

function ReasonCard({ reason, index }: { reason: typeof reasons[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = reason.icon;
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
      initial={{
        opacity: 0,
        y: isMobile ? 20 : 40,
        scale: 0.95,
        filter: "blur(4px)",
      }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      } : {}}
      transition={{
        duration: isMobile ? 0.5 : 0.7,
        delay: index * (isMobile ? 0.06 : 0.1),
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <HoverLiftCard className="h-full">
        <motion.div
          animate={isInView ? { boxShadow: ["0 1px 2px rgba(0,0,0,0.04)", "0 4px 16px rgba(27,94,32,0.08)", "0 1px 2px rgba(0,0,0,0.04)"] } : {}}
          transition={{ repeat: Infinity, duration: 4, delay: index * 0.5, ease: "easeInOut" }}
          className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-[var(--color-brand-green)]/30 h-full text-center group transition-all duration-500"
        >
          {/* Icon — full size with continuous idle rotate */}
          <div className="relative inline-flex items-center justify-center mb-4">
            {/* Rotating dashed ring decoration */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              className="absolute inset-[-6px] rounded-2xl border-2 border-dashed border-white/20"
            />
            <motion.div
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.92 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative inline-flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-2xl gradient-green text-white shadow-lg shadow-green-900/25 hover-glow cursor-pointer overflow-hidden"
            >
              {/* Ambient glow pulse behind icon */}
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0, 0.15] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute inset-0 bg-white rounded-2xl"
              />
              {/* Continuous spinning icon */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              >
                <Icon className="h-12 w-12 sm:h-14 sm:w-14" />
              </motion.div>
            </motion.div>
          </div>

          <StatDisplay stat={reason.stat} suffix={reason.statSuffix} label={reason.statLabel} />

          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-[var(--color-brand-green)] transition-colors duration-300">
            {reason.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {reason.description}
          </p>
        </motion.div>
      </HoverLiftCard>
    </motion.div>
  );
}

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);

  /* Subtle parallax for background decorations */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const decorY1 = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const decorY2 = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section className="py-20 lg:py-28 bg-[var(--color-brand-cream)] relative overflow-hidden" ref={sectionRef}>
      {/* Dot pattern background */}
      <div className="absolute inset-0 pointer-events-none dot-pattern opacity-60" />

      {/* Background decoration with parallax */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div style={{ y: decorY1 }} className="absolute top-0 right-0 w-72 h-72 bg-[var(--color-brand-green)]/5 rounded-full blur-3xl" />
        <motion.div style={{ y: decorY2 }} className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-brand-amber)]/5 rounded-full blur-3xl" />
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
