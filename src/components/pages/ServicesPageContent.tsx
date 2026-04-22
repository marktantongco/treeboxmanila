"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal, HoverLiftCard, fadeInLeft, fadeInRight, fadeInUp } from "@/components/animations";
import { motion } from "framer-motion";

const allServices = [
  { title: "Custom Boxes", slug: "custom-boxes", description: "We manufacture and print custom boxes for every industry and purpose. From food-safe packaging for restaurants to premium gift boxes for luxury brands, our offset lithography process ensures vibrant, consistent colors on every box.", image: "/images/products/boxes.png", alt: "Custom printed boxes by Treebox Manila", items: [{ name: "Shoe Box", detail: "Premium rigid shoe boxes with custom branding" }, { name: "Pizza Box", detail: "Food-safe corrugated pizza boxes" }, { name: "Cake Box", detail: "Elegant cake boxes with window cutouts" }, { name: "Gift Box", detail: "Luxury gift boxes with magnetic closures" }, { name: "Food Box", detail: "Food-grade packaging for restaurants" }, { name: "Corrugated Box", detail: "Heavy-duty shipping boxes" }] },
  { title: "Paper Bags", slug: "paper-bags", description: "Our custom paper bags are perfect for retail stores, corporate events, and promotional giveaways. Printed in full color with your brand logo, available in various sizes and handle styles.", image: "/images/products/paper-bags.png", alt: "Custom printed paper bags by Treebox Manila", items: [{ name: "Shopping Bags", detail: "Full-color retail shopping bags" }, { name: "Kraft Paper Bags", detail: "Eco-friendly natural kraft bags" }, { name: "Luxury Bags", detail: "Premium laminated bags" }, { name: "Branded Bags", detail: "Corporate gift bags" }] },
  { title: "Calendars", slug: "calendars", description: "Start the year right with professionally printed calendars featuring your company branding. Our calendars serve as year-round marketing tools that keep your brand visible.", image: "/images/products/calendars.png", alt: "Custom printed calendars by Treebox Manila", items: [{ name: "Wall Calendars", detail: "Large format with spiral binding" }, { name: "Desk Calendars", detail: "Compact with easel stands" }, { name: "Company Calendars", detail: "Branded corporate giveaways" }] },
  { title: "Posters", slug: "posters", description: "Make a big impression with our high-quality poster printing services. Our offset printing delivers sharp details and vibrant colors even at large sizes.", image: "/images/products/flyers-brochures.png", alt: "Custom printed posters by Treebox Manila", items: [{ name: "Event Posters", detail: "Eye-catching posters for events" }, { name: "Advertising Posters", detail: "Marketing posters for retail" }, { name: "Retail Displays", detail: "Point-of-sale displays" }] },
  { title: "Flyers & Brochures", slug: "flyers-brochures", description: "Drive results with professionally printed flyers and brochures. We offer various folding options and paper stocks to suit your needs and budget.", image: "/images/products/flyers-brochures.png", alt: "Custom printed flyers and brochures by Treebox Manila", items: [{ name: "Real Estate Flyers", detail: "Property listing flyers" }, { name: "Medical Flyers", detail: "Healthcare promotional flyers" }, { name: "Travel Brochures", detail: "Tourism brochures" }, { name: "Tri-Fold Brochures", detail: "Classic marketing brochures" }] },
  { title: "Menus & Stationery", slug: "menus-stationery", description: "Complete your brand identity with professional stationery and menu printing. From restaurant menus to corporate letterheads, we print with precision and care.", image: "/images/products/menus-stationery.png", alt: "Custom printed menus and stationery by Treebox Manila", items: [{ name: "Restaurant Menus", detail: "Durable laminated menus" }, { name: "Letterheads", detail: "Corporate letterheads" }, { name: "Envelopes", detail: "Custom printed envelopes" }] },
  { title: "Stickers & Labels", slug: "stickers-labels", description: "Add the finishing touch to your products with custom stickers and labels. Our offset printing produces crisp, vibrant labels for product packaging.", image: "/images/products/stickers-labels.png", alt: "Custom printed stickers and labels by Treebox Manila", items: [{ name: "Product Labels", detail: "Waterproof product labels" }, { name: "Brand Stickers", detail: "Die-cut brand stickers" }, { name: "Packaging Labels", detail: "Compliance labels" }] },
  { title: "Other Printing Services", slug: "other-printing", description: "Beyond our core categories, we offer business cards, invitations, certificates, and more. Our offset printing ensures every piece meets the highest quality standards.", image: "/images/products/menus-stationery.png", alt: "Additional printing services by Treebox Manila", items: [{ name: "Calling Cards", detail: "Professional business cards" }, { name: "Invitations", detail: "Custom printed invitations" }, { name: "Certificates", detail: "Formal certificates" }, { name: "Packaging Materials", detail: "Tissue paper, tags, accessories" }] },
];

export function ServicesPageContent() {
  return (
    <>
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[var(--color-brand-amber)]/5 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-brand-amber)]/10 text-[var(--color-brand-amber-dark)] font-semibold text-sm mb-4">Our Products & Services</span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-[1.1]">
                Printing Services <span className="text-gradient-green">& Products</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-gray-600 leading-relaxed">As a direct supplier with over 25 years of experience, Treebox Manila Co. offers a comprehensive range of offset lithography printing services.</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24 lg:space-y-32">
          {allServices.map((service, index) => (
            <div key={service.slug} id={service.slug} className="scroll-mt-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
                <ScrollReveal variants={index % 2 === 0 ? fadeInLeft : fadeInRight} className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <HoverLiftCard lift={12}>
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-green-900/10 aspect-[4/3] ring-1 ring-black/5">
                      <Image src={service.image} alt={service.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/90 text-[var(--color-brand-green)] text-sm font-bold shadow-md backdrop-blur-sm">{String(index + 1).padStart(2, "0")}</span>
                      </div>
                    </div>
                  </HoverLiftCard>
                </ScrollReveal>
                <ScrollReveal variants={index % 2 === 0 ? fadeInRight : fadeInLeft} delay={0.15} className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-0.5 bg-[var(--color-brand-amber)] rounded-full" />
                    <span className="text-xs font-semibold text-[var(--color-brand-amber-dark)] uppercase tracking-widest">Service {String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-500 leading-relaxed mb-6">{service.description}</p>
                  <div className="space-y-2.5">
                    {service.items.map((item, i) => (
                      <motion.div key={item.name} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}>
                        <Card className="border border-gray-100 shadow-none hover:border-[var(--color-brand-green)]/20 hover:shadow-sm transition-all duration-300">
                          <CardContent className="p-3.5 flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full gradient-green mt-1.5 shrink-0" />
                            <div>
                              <h3 className="font-semibold text-gray-900 text-sm">{item.name}</h3>
                              <p className="text-xs text-gray-400 mt-0.5">{item.detail}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-28 gradient-cta overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div animate={{ y: [-10, 10, -10] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="absolute top-10 left-10 w-20 h-20 border border-white/10 rounded-xl" />
          <motion.div animate={{ y: [10, -10, 10] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} className="absolute bottom-10 right-10 w-16 h-16 border border-white/10 rounded-full" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">Need a Custom <span className="text-[var(--color-brand-amber)]">Print Job</span>?</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-lg text-green-100/80 max-w-2xl mx-auto mb-10">We handle custom orders of all sizes. Contact us today to discuss your specific printing requirements and get a free, no-obligation quote.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-[var(--color-brand-amber)] hover:bg-[var(--color-brand-amber-light)] text-white font-semibold shadow-lg shadow-amber-500/30 transition-all duration-300 text-base group relative overflow-hidden">
                <a href="tel:+63281234567">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <Phone className="mr-2 h-4 w-4" />Call for a Free Quote
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white hover:text-[var(--color-brand-green)] font-semibold text-base group transition-all duration-300">
                <Link href="/contact">Request a Quote Online<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
