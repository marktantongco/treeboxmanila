"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerReveal, HoverLiftCard, fadeInUp } from "@/components/animations";

const services = [
  {
    title: "Custom Boxes",
    description:
      "Premium custom-printed boxes for every need — shoe boxes, pizza boxes, cake boxes, gift boxes, food boxes, and corrugated shipping boxes.",
    image: "/images/products/boxes.png",
    alt: "Custom printed boxes including shoe boxes, pizza boxes, and cake boxes by Treebox Manila",
    items: ["Shoe Box", "Pizza Box", "Cake Box", "Gift Box", "Food Box", "Corrugated Box"],
  },
  {
    title: "Paper Bags",
    description:
      "Customized shopping bags, kraft paper bags, and luxury bags with your brand printed in full color. Perfect for retail and corporate gifting.",
    image: "/images/products/paper-bags.png",
    alt: "Custom printed paper shopping bags with brand logos by Treebox Manila",
    items: ["Shopping Bags", "Kraft Paper Bags", "Luxury Bags", "Branded Bags"],
  },
  {
    title: "Calendars",
    description:
      "Professional wall and desk calendars printed with your company branding. Ideal for corporate giveaways and year-round brand visibility.",
    image: "/images/products/calendars.png",
    alt: "Custom printed wall calendars and desk calendars by Treebox Manila",
    items: ["Wall Calendars", "Desk Calendars", "Company Calendars"],
  },
  {
    title: "Flyers & Brochures",
    description:
      "Eye-catching marketing materials — from real estate flyers and medical flyers to travel brochures and tri-fold brochures that drive results.",
    image: "/images/products/flyers-brochures.png",
    alt: "Custom printed flyers, brochures, and marketing materials by Treebox Manila",
    items: ["Real Estate Flyers", "Medical Flyers", "Travel Brochures", "Tri-Fold Brochures"],
  },
  {
    title: "Menus & Stationery",
    description:
      "Complete stationery suite including restaurant menus, corporate letterheads, and envelopes — all printed with professional quality.",
    image: "/images/products/menus-stationery.png",
    alt: "Custom printed restaurant menus, letterheads, and envelopes by Treebox Manila",
    items: ["Restaurant Menus", "Letterheads", "Envelopes"],
  },
  {
    title: "Stickers & Labels",
    description:
      "High-quality product labels, brand stickers, and packaging labels printed with vibrant colors and precise die-cutting for a professional finish.",
    image: "/images/products/stickers-labels.png",
    alt: "Custom printed stickers and product labels by Treebox Manila",
    items: ["Product Labels", "Brand Stickers", "Packaging Labels"],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <motion.div variants={fadeInUp}>
      <HoverLiftCard className="h-full">
        <Card className="h-full overflow-hidden border border-gray-100 bg-white hover:border-[var(--color-brand-green)]/20 transition-colors duration-300">
          <div className="relative overflow-hidden aspect-[4/3]">
            <Image
              src={service.image}
              alt={service.alt}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-3 right-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/90 text-[var(--color-brand-green)] text-xs font-bold shadow-sm">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          </div>
          <CardContent className="p-5">
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[var(--color-brand-green)] transition-colors">
              {service.title}
            </h3>
            <p className="text-sm text-gray-500 mb-3 leading-relaxed line-clamp-2">
              {service.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {service.items.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="inline-block text-xs px-2.5 py-1 bg-green-50 text-[var(--color-brand-green)] rounded-full font-medium"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </CardContent>
        </Card>
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

        <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" staggerDelay={0.1}>
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </StaggerReveal>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-[var(--color-brand-green)] text-[var(--color-brand-green)] hover:bg-[var(--color-brand-green)] hover:text-white font-semibold group transition-all duration-300"
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
