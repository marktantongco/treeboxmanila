"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal, HoverLiftCard, RevealLine, fadeInLeft, fadeInRight, fadeInUp } from "@/components/animations";
import { motion } from "framer-motion";

const allServices = [
  {
    title: "Custom Boxes",
    slug: "custom-boxes",
    description:
      "We manufacture and print custom boxes for every industry and purpose. From food-safe packaging for restaurants to premium gift boxes for luxury brands, our offset lithography process ensures vibrant, consistent colors on every box. We offer a wide variety of box styles including rigid boxes, folding cartons, and corrugated shipping boxes, all produced with precision die-cutting and premium paper stocks.",
    image: "/images/products/boxes.png",
    alt: "Custom printed boxes — shoe boxes, pizza boxes, cake boxes, and gift boxes by Treebox Manila",
    items: [
      { name: "Shoe Box", detail: "Premium rigid shoe boxes with custom branding and interior printing" },
      { name: "Pizza Box", detail: "Food-safe corrugated pizza boxes with full-color printing" },
      { name: "Cake Box", detail: "Elegant cake boxes with window cutouts and custom sizing" },
      { name: "Gift Box", detail: "Luxury gift boxes with magnetic closures and ribbon accents" },
      { name: "Food Box", detail: "Food-grade packaging for restaurants and food businesses" },
      { name: "Corrugated Box", detail: "Heavy-duty shipping boxes with custom dimensions and printing" },
    ],
  },
  {
    title: "Paper Bags",
    slug: "paper-bags",
    description:
      "Our custom paper bags are perfect for retail stores, corporate events, and promotional giveaways. Printed in full color with your brand logo and design, our bags are available in various sizes, paper weights, and handle styles. We use high-quality kraft and art paper to ensure durability and a premium feel that reflects well on your brand.",
    image: "/images/products/paper-bags.png",
    alt: "Custom printed paper shopping bags with brand logos by Treebox Manila",
    items: [
      { name: "Shopping Bags", detail: "Full-color retail shopping bags in multiple sizes" },
      { name: "Kraft Paper Bags", detail: "Eco-friendly natural kraft bags with printed logos" },
      { name: "Luxury Bags", detail: "Premium laminated bags with ribbon or rope handles" },
      { name: "Branded Bags", detail: "Corporate gift bags with custom printing and finishes" },
    ],
  },
  {
    title: "Calendars",
    slug: "calendars",
    description:
      "Start the year right with professionally printed calendars featuring your company branding. Our calendars serve as year-round marketing tools that keep your brand visible on desks and walls. Choose from wall calendars, desk calendars, and poster calendars with various binding options and premium paper stocks.",
    image: "/images/products/calendars.png",
    alt: "Custom printed wall calendars and desk calendars for corporate giveaways by Treebox Manila",
    items: [
      { name: "Wall Calendars", detail: "Large format wall calendars with spiral binding" },
      { name: "Desk Calendars", detail: "Compact desk calendars with easel stands" },
      { name: "Company Calendars", detail: "Branded calendars for corporate giveaways" },
    ],
  },
  {
    title: "Posters",
    slug: "posters",
    description:
      "Make a big impression with our high-quality poster printing services. Whether you need event posters, advertising posters, or retail displays, our offset printing delivers sharp details and vibrant colors even at large sizes. Available in various paper stocks and finishes to suit any application.",
    image: "/images/products/flyers-brochures.png",
    alt: "Custom printed posters and event displays by Treebox Manila",
    items: [
      { name: "Event Posters", detail: "Eye-catching posters for concerts, events, and promotions" },
      { name: "Advertising Posters", detail: "Marketing posters for retail and commercial spaces" },
      { name: "Retail Displays", detail: "Point-of-sale displays and in-store promotional materials" },
    ],
  },
  {
    title: "Flyers & Brochures",
    slug: "flyers-brochures",
    description:
      "Drive results with professionally printed flyers and brochures. Our marketing materials are designed to capture attention and communicate your message effectively. From single-page flyers to multi-page brochures, we offer various folding options and paper stocks to suit your needs and budget.",
    image: "/images/products/flyers-brochures.png",
    alt: "Custom printed flyers, brochures, and marketing materials by Treebox Manila",
    items: [
      { name: "Real Estate Flyers", detail: "Property listing flyers with photo-quality printing" },
      { name: "Medical Flyers", detail: "Healthcare and medical practice promotional flyers" },
      { name: "Travel Brochures", detail: "Travel and tourism brochures with vivid imagery" },
      { name: "Tri-Fold Brochures", detail: "Classic tri-fold brochures for general marketing" },
    ],
  },
  {
    title: "Menus & Stationery",
    slug: "menus-stationery",
    description:
      "Complete your brand identity with professional stationery and menu printing. From restaurant menus that withstand daily use to corporate letterheads that make a professional impression, we print every piece with precision and care. Available in various paper stocks and finishing options including lamination and embossing.",
    image: "/images/products/menus-stationery.png",
    alt: "Custom printed restaurant menus, letterheads, and envelopes by Treebox Manila",
    items: [
      { name: "Restaurant Menus", detail: "Durable laminated menus for restaurants and cafes" },
      { name: "Letterheads", detail: "Corporate letterheads with watermarked paper options" },
      { name: "Envelopes", detail: "Custom printed envelopes in various sizes and styles" },
    ],
  },
  {
    title: "Stickers & Labels",
    slug: "stickers-labels",
    description:
      "Add the finishing touch to your products with custom stickers and labels. Our offset printing process produces crisp, vibrant labels that enhance your product packaging. We offer die-cut stickers, roll labels, and sheet labels in various shapes, sizes, and materials including waterproof options for food and beverage products.",
    image: "/images/products/stickers-labels.png",
    alt: "Custom printed stickers and product labels by Treebox Manila",
    items: [
      { name: "Product Labels", detail: "Waterproof product labels for bottles, jars, and packaging" },
      { name: "Brand Stickers", detail: "Die-cut brand stickers for promotional use" },
      { name: "Packaging Labels", detail: "Ingredient lists, barcodes, and compliance labels" },
    ],
  },
  {
    title: "Other Printing Services",
    slug: "other-printing",
    description:
      "Beyond our core product categories, we offer a wide range of additional printing services to meet your business needs. From business cards that make a first impression to certificates that commemorate achievements, our offset printing ensures every piece is produced with the highest quality standards.",
    image: "/images/products/menus-stationery.png",
    alt: "Additional printing services — calling cards, invitations, and certificates by Treebox Manila",
    items: [
      { name: "Calling Cards", detail: "Professional business cards with various finishes and stocks" },
      { name: "Invitations", detail: "Custom printed invitations for events and special occasions" },
      { name: "Certificates", detail: "Formal certificates with gold foil and embossing options" },
      { name: "Packaging Materials", detail: "Tissue paper, tags, and other packaging accessories" },
    ],
  },
];

export function ServicesPageContent() {
  return (
    <>
      {/* Hero Banner */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[var(--color-brand-amber)]/5 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-brand-amber)]/10 text-[var(--color-brand-amber-dark)] font-semibold text-sm mb-4">
                Our Products & Services
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-[1.1]">
                Printing Services <span className="text-gradient-green">& Products</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-gray-600 leading-relaxed">
                As a direct supplier with over 25 years of experience, Treebox
                Manila Co. offers a comprehensive range of offset lithography
                printing services. From custom packaging to marketing materials, we
                print it all with precision and quality.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Detail Sections */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-32">
          {allServices.map((service, index) => (
            <div
              key={service.slug}
              id={service.slug}
              className="scroll-mt-20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                {/* Image */}
                <ScrollReveal
                  variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                  className={index % 2 === 1 ? "lg:order-2" : ""}
                >
                  <HoverLiftCard lift={12}>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-green-900/10 aspect-[4/3] ring-1 ring-black/5 group">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                      {/* Service number badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/90 text-[var(--color-brand-green)] text-sm font-bold shadow-md backdrop-blur-sm">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </HoverLiftCard>
                </ScrollReveal>

                {/* Content */}
                <ScrollReveal
                  variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
                  delay={0.15}
                  className={index % 2 === 1 ? "lg:order-1" : ""}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <RevealLine color="var(--color-brand-amber)" />
                    <span className="text-xs font-semibold text-[var(--color-brand-amber-dark)] uppercase tracking-widest">
                      Service {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-500 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="space-y-2.5">
                    {service.items.map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        viewport={{ once: true }}
                      >
                        <Card className="border border-gray-100 shadow-none hover:border-[var(--color-brand-green)]/20 hover:shadow-sm transition-all duration-300">
                          <CardContent className="p-3.5 flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full gradient-green mt-1.5 shrink-0" />
                            <div>
                              <h3 className="font-semibold text-gray-900 text-sm">
                                {item.name}
                              </h3>
                              <p className="text-xs text-gray-400 mt-0.5">
                                {item.detail}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-6">
                    <Button
                      asChild
                      className="bg-[var(--color-brand-green)] hover:bg-[var(--color-brand-green-light)] text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 group btn-shine"
                    >
                      <Link href="/contact">
                        Request Quote
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-28 gradient-cta overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-10 left-10 w-20 h-20 border border-white/10 rounded-xl"
          />
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute bottom-10 right-10 w-16 h-16 border border-white/10 rounded-full"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              Need a Custom <span className="text-[var(--color-brand-amber)]">Print Job</span>?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-green-100/80 max-w-2xl mx-auto mb-10">
              We handle custom orders of all sizes. Contact us today to discuss
              your specific printing requirements and get a free, no-obligation
              quote.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-[var(--color-brand-green)] hover:bg-green-50 font-bold shadow-xl shadow-black/20 hover:shadow-2xl transition-all duration-300 text-base group h-14 px-8 btn-shine"
              >
                <Link href="/contact">
                  Get a Quote Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-[var(--color-brand-amber)] hover:bg-[var(--color-brand-amber-light)] text-white font-bold shadow-xl shadow-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-300 text-base group h-14 px-8 btn-shine"
              >
                <a href="tel:+63281234567">
                  <Phone className="mr-2 h-5 w-5" />
                  Call for a Free Quote
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
