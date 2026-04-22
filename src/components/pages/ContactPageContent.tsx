"use client";

import { Phone, Mail, MapPin, Clock, MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { ScrollReveal, fadeInUp, fadeInRight, fadeInLeft, BounceIn, SlideIn } from "@/components/animations";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+63 2 8123 4567",
    href: "tel:+63281234567",
    description: "Call us directly for immediate assistance and quotes",
  },
  {
    icon: Mail,
    label: "Email",
    value: "treeboxmanila@gmail.com",
    href: "mailto:treeboxmanila@gmail.com",
    description: "Send us an email and we will respond within 24 hours",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "Quezon City, Metro Manila, Philippines",
    href: null,
    description: "We serve all of Metro Manila and surrounding areas",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Monday–Saturday: 8:00 AM – 5:00 PM",
    href: null,
    description: "Sunday: Closed",
  },
];

const cities = [
  "Quezon City", "Makati", "Pasig", "Mandaluyong",
  "San Juan", "Caloocan", "Valenzuela", "Manila",
  "Taguig", "Paranaque",
];

export function ContactPageContent() {
  return (
    <>
      {/* Page Header */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-[var(--color-brand-green)]/5 rounded-full blur-3xl animate-morph" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-brand-amber)]/10 text-[var(--color-brand-amber-dark)] font-semibold text-sm mb-4">
                Get in Touch
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-[1.1]">
                Contact <span className="text-gradient-green">Treebox Manila</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ready to start your print project? Get in touch with us for a
                free, no-obligation quote. You can reach us by phone, email, or
                fill out the form below and we will get back to you within 24
                hours.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Prominent CTA Buttons */}
      <section className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <BounceIn>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-brand-green)] hover:bg-[var(--color-brand-green-light)] text-white font-bold px-8 py-4 rounded-xl shadow-xl shadow-green-900/20 hover:shadow-2xl transition-all duration-300 text-lg group relative overflow-hidden action-button-prominent w-full sm:w-auto hover-glow"
              >
                Get a Quote Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+63281234567"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-brand-amber)] hover:bg-[var(--color-brand-amber-light)] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-xl transition-all duration-300 text-lg btn-shine w-full sm:w-auto hover-glow"
              >
                <Phone className="h-5 w-5" />
                Call Us: +63 2 8123 4567
              </a>
            </div>
          </BounceIn>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section id="quote-form" className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <SlideIn direction="left" className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Request a Free Quote
                </h2>
                <p className="text-gray-500 mb-8">
                  Fill out the form below with your printing requirements and we
                  will provide you with a detailed quote within one business day.
                </p>
                <ContactForm />
              </div>
            </SlideIn>

            {/* Sidebar */}
            <SlideIn direction="right" delay={0.15}>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Contact Information
                </h2>
                <p className="text-gray-500 mb-6">
                  Reach out to us directly through any of the following channels.
                </p>

                <div className="space-y-3">
                  {contactInfo.map((info, i) => {
                    const Icon = info.icon;
                    const content = (
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-[var(--color-brand-green)]/20 hover:shadow-sm transition-all bg-white"
                      >
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl gradient-green text-white shrink-0 shadow-md shadow-green-900/10">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            {info.label}
                          </p>
                          <p className="font-semibold text-gray-900 text-sm mt-0.5">
                            {info.value}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5">
                            {info.description}
                          </p>
                        </div>
                      </motion.div>
                    );

                    if (info.href) {
                      return (
                        <a key={info.label} href={info.href} className="block" aria-label={`${info.label}: ${info.value}`}>
                          {content}
                        </a>
                      );
                    }
                    return <div key={info.label}>{content}</div>;
                  })}
                </div>

                {/* Quick Call CTA */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="gradient-green rounded-2xl p-6 text-white relative overflow-hidden"
                >
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full" />
                    <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-white/5 rounded-full" />
                  </div>
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-3">
                      <MessageCircle className="h-6 w-6" />
                      <h3 className="font-bold text-lg">Prefer to Talk?</h3>
                    </div>
                    <p className="text-green-100/80 text-sm mb-5">
                      Our team is available Monday to Saturday, 8 AM to 5 PM. Call
                      us directly for immediate assistance with your printing needs.
                    </p>
                    <a
                      href="tel:+63281234567"
                      className="inline-flex items-center gap-2 bg-[var(--color-brand-amber)] hover:bg-[var(--color-brand-amber-light)] text-white font-semibold px-5 py-2.5 rounded-lg transition-colors text-sm shadow-md shadow-amber-900/20"
                    >
                      <Phone className="h-4 w-4" />
                      +63 2 8123 4567
                    </a>
                  </div>
                </motion.div>

                {/* Service Area */}
                <div className="border border-gray-100 rounded-2xl p-6 bg-white">
                  <h3 className="font-bold text-gray-900 mb-3">
                    Service Area
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    We serve businesses across Metro Manila and surrounding areas:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cities.map((city) => (
                      <motion.span
                        key={city}
                        whileHover={{ scale: 1.08 }}
                        className="inline-block text-xs px-2.5 py-1 bg-green-50 text-[var(--color-brand-green)] rounded-full font-medium cursor-default hover:bg-green-100 transition-colors"
                      >
                        {city}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[var(--color-brand-cream)] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-[var(--color-brand-green)] font-semibold text-sm mb-4">
                Find Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                Visit Us in <span className="text-gradient-green">Quezon City</span>
              </h2>
              <p className="text-gray-500">
                Located in Quezon City, Metro Manila — easily accessible from all
                major business districts.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="rounded-2xl overflow-hidden shadow-2xl shadow-green-900/5 bg-gradient-to-br from-green-50 to-amber-50/50 aspect-[16/7] flex items-center justify-center border border-gray-200 spotlight-hover"
            >
              <div className="text-center p-8">
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                >
                  <MapPin className="h-14 w-14 text-[var(--color-brand-green)] mx-auto mb-4" />
                </motion.div>
                <p className="font-bold text-gray-900 text-xl">
                  Treebox Manila Co.
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  Quezon City, Metro Manila, Philippines
                </p>
                <a
                  href="https://maps.google.com/?q=Quezon+City+Metro+Manila+Philippines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-4 px-5 py-2.5 bg-[var(--color-brand-green)] text-white font-semibold text-sm rounded-lg hover:bg-[var(--color-brand-green-light)] transition-colors shadow-md shadow-green-900/10"
                >
                  <MapPin className="h-4 w-4" />
                  Open in Google Maps
                </a>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
