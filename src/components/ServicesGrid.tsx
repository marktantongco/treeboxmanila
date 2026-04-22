"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import {
  ScrollReveal,
  StaggerGridReveal,
  GlowCard,
  fadeInUp,
  fadeInUpBounce,
  RippleButton,
  SectionHeadingReveal,
  cardReveal3D,
  cardRevealLeft,
  cardRevealRight,
  MobileSwipeReveal,
  ImageReveal,
} from "@/components/animations";
import { useRef, useEffect, useAnimation } from "react";

const services = [
  {
    title: "Custom Boxes",
    description:
      "Premium custom-printed boxes for every need — shoe boxes, pizza boxes, cake boxes, gift boxes, food boxes, and corrugated shipping boxes with vibrant full-color printing.",
    image: "/images/products/boxes.png",
    alt: "Custom printed boxes including shoe boxes, pizza boxes, and cake boxes by Treebox Manila",
    items: ["Shoe Box", "Pizza Box", "Cake Box", "Gift Box", "Food Box", "Corrugated Box"],
    slug: "custom-boxes",
    popular: true,
  },
  {
    title: "Paper Bags",
    description:
      "Customized shopping bags, kraft paper bags, and luxury bags with your brand printed in full color. Perfect for retail and corporate gifting.",
    image: "/images/products/paper-bags.png",
    alt: "Custom printed paper shopping bags with brand logos by Treebox Manila",
    items: ["Shopping Bags", "Kraft Paper Bags", "Luxury Bags", "Branded Bags"],
    slug: "paper-bags",
    popular: false,
  },
  {
    title: "Calendars",
    description:
      "Professional wall and desk calendars printed with your company branding. Ideal for corporate giveaways and year-round brand visibility.",
    image: "/images/products/calendars.png",
    alt: "Custom printed wall calendars and desk calendars by Treebox Manila",
    items: ["Wall Calendars", "Desk Calendars", "Company Calendars"],
    slug: "calendars",
    popular: false,
  },
  {
    title: "Flyers & Brochures",
    description:
      "Eye-catching marketing materials — from real estate flyers and medical flyers to travel brochures and tri-fold brochures that drive results for your business.",
    image: "/images/products/flyers-brochures.png",
    alt: "Custom printed flyers, brochures, and marketing materials by Treebox Manila",
    items: ["Real Estate Flyers", "Medical Flyers", "Travel Brochures", "Tri-Fold Brochures"],
    slug: "flyers-brochures",
    popular: false,
  },
  {
    title: "Menus & Stationery",
    description:
      "Complete stationery suite including restaurant menus, corporate letterheads, and envelopes — all printed with professional quality and precision.",
    image: "/images/products/menus-stationery.png",
    alt: "Custom printed restaurant menus, letterheads, and envelopes by Treebox Manila",
    items: ["Restaurant Menus", "Letterheads", "Envelopes"],
    slug: "menus-stationery",
    popular: false,
  },
  {
    title: "Stickers & Labels",
    description:
      "High-quality product labels, brand stickers, and packaging labels printed with vibrant colors and precise die-cutting for a professional finish.",
    image: "/images/products/stickers-labels.png",
    alt: "Custom printed stickers and product labels by Treebox Manila",
    items: ["Product Labels", "Brand Stickers", "Packaging Labels"],
    slug: "stickers-labels",
    popular: false,
  },
];

/* ──── Enhanced Service Card with 3D scroll-triggered reveal ──── */
function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  /* Alternate reveal direction for visual variety */
  const revealDirection = index % 3 === 0 ? cardReveal3D : index % 3 === 1 ? cardRevealLeft : cardRevealRight;

  return (
    <motion.div
      ref={ref}
      variants={revealDirection}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      style={{ perspective: 1200 }}
    >
      <GlowCard className="h-full" glowColor="var(--color-brand-green)">
        <Card className="h-full overflow-hidden border border-gray-100 bg-white hover:border-[var(--color-brand-green)]/20 transition-all duration-500 group">
          {/* Image with scroll-triggered reveal mask */}
          <div className="relative overflow-hidden aspect-[4/3]">
            <Image
              src={service.image}
              alt={service.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Shimmer overlay on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-green)]/80 via-[var(--color-brand-green)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
              <Link
                href={`/services#${service.slug}`}
                className="text-white text-sm font-semibold flex items-center gap-1.5 hover:gap-2.5 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            {/* Popular badge */}
            {service.popular && (
              <div className="absolute top-3 left-3 z-10">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--color-brand-amber)] text-white text-xs font-bold shadow-lg shadow-amber-500/30 animate-pulse-badge">
                  <Sparkles className="h-3 w-3" />
                  Popular
                </span>
              </div>
            )}
            {/* Step number badge */}
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/90 text-[var(--color-brand-green)] text-xs font-bold shadow-sm backdrop-blur-sm">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
          <CardContent className="p-5">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[var(--color-brand-green)] transition-colors duration-300 flex items-center gap-2">
              {service.title}
              {service.popular && (
                <span className="text-[10px] px-2 py-0.5 bg-amber-50 text-[var(--color-brand-amber-dark)] rounded-full font-semibold border border-amber-100">
                  Most Requested
                </span>
              )}
            </h3>
            <p className="text-sm text-gray-500 mb-3 leading-relaxed line-clamp-2">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {service.items.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.3 + i * 0.06, duration: 0.3 }}
                  whileHover={{ scale: 1.08, y: -2 }}
                  className="inline-block text-xs px-2.5 py-1 bg-green-50 text-[var(--color-brand-green)] rounded-full font-medium cursor-default hover:bg-green-100 transition-colors"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </CardContent>
        </Card>
      </GlowCard>
    </motion.div>
  );
}

function CustomCTACard() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <GlowCard className="h-full" glowColor="var(--color-brand-amber)">
        <div className="relative h-full min-h-[380px] rounded-2xl overflow-hidden group">
          {/* Green gradient background */}
          <div className="absolute inset-0 gradient-cta-card" />

          {/* Animated decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/5 rounded-full" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full" />
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute top-8 right-8 w-16 h-16 border border-white/10 rounded-xl"
            />
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute bottom-8 left-8 w-12 h-12 border border-white/10 rounded-full"
            />
            {/* Floating dots */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/10 rounded-full"
            />
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-white/10 rounded-full"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/15 backdrop-blur-sm mb-6 shadow-lg"
            >
              <Sparkles className="h-8 w-8 text-[var(--color-brand-amber)]" />
            </motion.div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
              Need Something Custom?
            </h3>
            <p className="text-green-100/80 text-sm sm:text-base leading-relaxed mb-8 max-w-sm">
              We specialize in custom printing solutions tailored to your unique requirements. Tell us what you need and we will make it happen.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                className="bg-white text-[var(--color-brand-green)] hover:bg-green-50 font-bold shadow-xl shadow-black/20 hover:shadow-2xl transition-all duration-300 text-base group/btn h-12 px-6 btn-shine"
              >
                <Link href="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                className="bg-[var(--color-brand-amber)] hover:bg-[var(--color-brand-amber-light)] text-white font-bold shadow-xl shadow-amber-500/30 hover:shadow-2xl transition-all duration-300 text-base group/btn h-12 px-6 btn-shine"
              >
                <a href="tel:+63281234567">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
}

export function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section className="py-20 lg:py-28 bg-white wave-divider relative" ref={sectionRef}>
      {/* Animated background decoration that appears on scroll */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isHeadingInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-brand-green)]/3 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isHeadingInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute bottom-0 left-0 w-72 h-72 bg-[var(--color-brand-amber)]/3 rounded-full blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Enhanced heading with staggered reveal */}
        <div ref={headingRef}>
          <SectionHeadingReveal
            badge="What We Print"
            title={
              <>
                What Can We Print{" "}
                <span className="text-gradient-green">for You</span>?
              </>
            }
            subtitle="We cater to a wide variety of industries including food, real estate, healthcare, electronics, and legal. Whatever your printing need, we have the expertise to deliver."
          />
        </div>

        {/* Service Cards Grid with staggered 3D reveals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
          {/* 7th card - Custom CTA */}
          <CustomCTACard />
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <Button
              asChild
              className="border-2 border-[var(--color-brand-green)] text-[var(--color-brand-green)] hover:bg-[var(--color-brand-green)] hover:text-white font-semibold group transition-all duration-300 bg-transparent btn-shine"
            >
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
