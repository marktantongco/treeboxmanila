"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerReveal, HoverLiftCard, fadeInUp } from "@/components/animations";

const services = [
  {
    title: "Custom Boxes",
    description:
      "Premium custom-printed boxes for every need — shoe boxes, pizza boxes, cake boxes, gift boxes, food boxes, and corrugated shipping boxes with vibrant full-color printing.",
    image: "/images/products/boxes.png",
    alt: "Custom printed boxes including shoe boxes, pizza boxes, and cake boxes by Treebox Manila",
    items: ["Shoe Box", "Pizza Box", "Cake Box", "Gift Box", "Food Box", "Corrugated Box"],
    slug: "custom-boxes",
  },
  {
    title: "Paper Bags",
    description:
      "Customized shopping bags, kraft paper bags, and luxury bags with your brand printed in full color. Perfect for retail and corporate gifting.",
    image: "/images/products/paper-bags.png",
    alt: "Custom printed paper shopping bags with brand logos by Treebox Manila",
    items: ["Shopping Bags", "Kraft Paper Bags", "Luxury Bags", "Branded Bags"],
    slug: "paper-bags",
  },
  {
    title: "Calendars",
    description:
      "Professional wall and desk calendars printed with your company branding. Ideal for corporate giveaways and year-round brand visibility.",
    image: "/images/products/calendars.png",
    alt: "Custom printed wall calendars and desk calendars by Treebox Manila",
    items: ["Wall Calendars", "Desk Calendars", "Company Calendars"],
    slug: "calendars",
  },
  {
    title: "Flyers & Brochures",
    description:
      "Eye-catching marketing materials — from real estate flyers and medical flyers to travel brochures and tri-fold brochures that drive results for your business.",
    image: "/images/products/flyers-brochures.png",
    alt: "Custom printed flyers, brochures, and marketing materials by Treebox Manila",
    items: ["Real Estate Flyers", "Medical Flyers", "Travel Brochures", "Tri-Fold Brochures"],
    slug: "flyers-brochures",
  },
  {
    title: "Menus & Stationery",
    description:
      "Complete stationery suite including restaurant menus, corporate letterheads, and envelopes — all printed with professional quality and precision.",
    image: "/images/products/menus-stationery.png",
    alt: "Custom printed restaurant menus, letterheads, and envelopes by Treebox Manila",
    items: ["Restaurant Menus", "Letterheads", "Envelopes"],
    slug: "menus-stationery",
  },
  {
    title: "Stickers & Labels",
    description:
      "High-quality product labels, brand stickers, and packaging labels printed with vibrant colors and precise die-cutting for a professional finish.",
    image: "/images/products/stickers-labels.png",
    alt: "Custom printed stickers and product labels by Treebox Manila",
    items: ["Product Labels", "Brand Stickers", "Packaging Labels"],
    slug: "stickers-labels",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div variants={fadeInUp}>
      <HoverLiftCard className="h-full">
        <Card className="h-full overflow-hidden border border-gray-100 bg-white hover:border-[var(--color-brand-green)]/20 transition-all duration-500 group">
          <div className="relative overflow-hidden aspect-[4/3]">
            <Image
              src={service.image}
              alt={service.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-brand-green)]/80 via-[var(--color-brand-green)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
              <Link
                href={`/services#${service.slug}`}
                className="text-white text-sm font-semibold flex items-center gap-1.5 hover:gap-2.5 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            {/* Step number badge */}
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/90 text-[var(--color-brand-green)] text-xs font-bold shadow-sm backdrop-blur-sm">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
          <CardContent className="p-5">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[var(--color-brand-green)] transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-sm text-gray-500 mb-3 leading-relaxed line-clamp-2">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {service.items.map((item) => (
                <span
                  key={item}
                  className="inline-block text-xs px-2.5 py-1 bg-green-50 text-[var(--color-brand-green)] rounded-full font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </HoverLiftCard>
    </motion.div>
  );
}

function CustomCTACard() {
  return (
    <motion.div variants={fadeInUp}>
      <HoverLiftCard className="h-full" lift={12}>
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
                size="lg"
                className="bg-white text-[var(--color-brand-green)] hover:bg-green-50 font-bold shadow-xl shadow-black/20 hover:shadow-2xl transition-all duration-300 text-base group/btn relative overflow-hidden h-12 px-6"
              >
                <Link href="/contact">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-green-100/40 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                  Get a Quote
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-[var(--color-brand-amber)] hover:bg-[var(--color-brand-amber-light)] text-white font-bold shadow-xl shadow-amber-500/30 hover:shadow-2xl transition-all duration-300 text-base group/btn relative overflow-hidden h-12 px-6"
              >
                <a href="tel:+63281234567">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </HoverLiftCard>
    </motion.div>
  );
}

export function ServicesGrid() {
  return (
    <section className="py-20 lg:py-28 bg-white wave-divider">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-50 text-[var(--color-brand-green)] font-semibold text-sm mb-4">
              What We Print
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Can We Print for You?
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              We cater to a wide variety of industries including food, real
              estate, healthcare, electronics, and legal. Whatever your printing
              need, we have the expertise to deliver.
            </p>
          </div>
        </ScrollReveal>

        {/* Service Cards Grid - 7 items: 3+3+1 on desktop, 2+2+2+1 on tablet */}
        <StaggerReveal
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          staggerDelay={0.1}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
          {/* 7th card - Custom CTA */}
          <CustomCTACard />
        </StaggerReveal>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="border-2 border-[var(--color-brand-green)] text-[var(--color-brand-green)] hover:bg-[var(--color-brand-green)] hover:text-white font-semibold group transition-all duration-300 bg-transparent"
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
