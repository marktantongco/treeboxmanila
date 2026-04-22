"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, Users, Target, Heart, ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollReveal, StaggerReveal, AnimatedCounter, fadeInUp, fadeInRight, fadeInLeft, HoverLiftCard, ParallaxSection } from "@/components/animations";

const milestones = [
  { year: "1997", title: "Founded as MWC Enterprises", description: "Our journey began in Quezon City as MWC Enterprises, providing offset lithography printing services to local businesses with a focus on quality and reliability." },
  { year: "2005", title: "Expanded Product Line", description: "We expanded from basic printing to offering a comprehensive range of products including custom boxes, paper bags, calendars, and marketing materials." },
  { year: "2012", title: "Rebranded as Treebox Manila Co.", description: "To better reflect our specialty in custom box printing and our Manila roots, we rebranded as Treebox Manila Co. while maintaining the same commitment to quality." },
  { year: "2020s", title: "Modernized Operations", description: "We invested in modern printing equipment and expanded our service area across Metro Manila, serving businesses in Quezon City, Makati, Pasig, and beyond." },
];

const values = [
  { icon: Award, title: "Commitment to Excellence", description: "Every print job undergoes strict quality control to ensure colors are accurate, cuts are precise, and the finished product exceeds your expectations. We treat every order as if it were for our own brand." },
  { icon: Users, title: "Client Relationships First", description: "Our business is built on long-term relationships, not one-time transactions. Many of our clients have been with us for over a decade because we consistently deliver on our promises and communicate transparently." },
  { icon: Target, title: "Operational Efficiency", description: "As a direct supplier, we have streamlined our production process to minimize waste and maximize output. This efficiency translates to faster turnaround times and competitive pricing for our clients." },
  { icon: Heart, title: "Industry Expertise", description: "With over 25 years in the printing industry, we understand the unique needs of different sectors — from food packaging requirements to real estate marketing materials, healthcare compliance to legal document formatting." },
];

const industries = ["Food & Beverage", "Real Estate", "Healthcare & Medical", "Electronics", "Legal Services", "Retail & Fashion", "Education", "Hospitality & Tourism", "Corporate & B2B", "Government & NGOs"];

const stats = [
  { value: 25, suffix: "+", label: "Years of Experience" },
  { value: 500, suffix: "+", label: "Clients Served" },
  { value: 50, suffix: "+", label: "Product Types" },
  { value: 99, suffix: "%", label: "On-Time Delivery" },
];

export function AboutPageContent() {
  return (
    <>
      {/* Page Header */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-[var(--color-brand-green)]/5 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-brand-amber)]/10 text-[var(--color-brand-amber-dark)] font-semibold text-sm mb-4">
                Our Story
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-[1.1]">
                About <span className="text-gradient-green">Treebox Manila</span> Co.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-gray-600 leading-relaxed">
                Established in 1997, formerly known as MWC Enterprises, Treebox Manila Co. is an offset lithography printing service company that has been serving businesses across Metro Manila for over 25 years. We pride ourselves in our commitment to excellence, efficiency, and client relationships built through years of outstanding service.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <ScrollReveal key={stat.label}>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-extrabold text-gradient-green">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-gray-500 mt-1 font-medium">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal variants={fadeInLeft}>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  A Legacy of Quality Printing Since 1997
                </h2>
              </ScrollReveal>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <ScrollReveal delay={0.1}>
                  <p>Treebox Manila Co. began its journey in 1997 as MWC Enterprises, a small offset lithography printing shop in Quezon City with a simple mission: deliver high-quality printed materials that help businesses look their best. From our very first order, we made a commitment to quality that has remained the cornerstone of everything we do.</p>
                </ScrollReveal>
                <ScrollReveal delay={0.2}>
                  <p>Over the years, we have grown from a small operation into a full-service printing company capable of handling orders of any scale. Our rebranding to Treebox Manila Co. reflected our evolution and specialty in custom packaging, while our roots in offset lithography printing remain the foundation of our expertise.</p>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                  <p>Today, we serve businesses across Metro Manila and surrounding areas, providing everything from custom boxes and paper bags to calendars, flyers, brochures, and more. Our clients span a wide range of industries including food and beverage, real estate, healthcare, electronics, and legal services.</p>
                </ScrollReveal>
              </div>
            </div>
            <ScrollReveal variants={fadeInRight} delay={0.2}>
              <ParallaxSection speed={0.15}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-br from-green-100/60 to-amber-100/40 rounded-3xl rotate-2" />
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-green-900/10 ring-1 ring-black/5">
                    <Image
                      src="/images/hero-printing-press.png"
                      alt="Treebox Manila Co. printing facility with offset lithography equipment"
                      width={1344}
                      height={768}
                      className="w-full h-auto object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </ParallaxSection>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-[var(--color-brand-cream)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-brand-green)]/3 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-[var(--color-brand-green)] font-semibold text-sm mb-4">Our Values</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                What Sets Us <span className="text-gradient-green">Apart</span>
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">For over 25 years, these core principles have guided every print job and every client relationship.</p>
            </div>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8" staggerDelay={0.12}>
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div key={value.title} variants={fadeInUp}>
                  <HoverLiftCard className="h-full">
                    <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 h-full">
                      <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }} className="inline-flex items-center justify-center w-14 h-14 rounded-xl gradient-green text-white mb-5 shadow-lg shadow-green-900/20">
                        <Icon className="h-7 w-7" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{value.description}</p>
                    </div>
                  </HoverLiftCard>
                </motion.div>
              );
            })}
          </StaggerReveal>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-[var(--color-brand-amber-dark)] font-semibold text-sm mb-4">Who We Serve</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Industries We <span className="text-gradient-amber">Serve</span>
              </h2>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">Our printing expertise spans a wide range of industries.</p>
            </div>
          </ScrollReveal>
          <StaggerReveal className="flex flex-wrap justify-center gap-3" staggerDelay={0.06}>
            {industries.map((industry) => (
              <motion.div key={industry} variants={fadeInUp}>
                <motion.span whileHover={{ scale: 1.08, y: -2 }} className="inline-block px-5 py-2.5 bg-green-50 text-[var(--color-brand-green)] rounded-full font-medium text-sm border border-green-100 cursor-default hover:bg-green-100 hover:border-green-200 transition-colors shadow-sm">
                  {industry}
                </motion.span>
              </motion.div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-[var(--color-brand-cream)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--color-brand-amber)]/5 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-[var(--color-brand-green)] font-semibold text-sm mb-4">Our Journey</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">Milestones</h2>
            </div>
          </ScrollReveal>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <ScrollReveal key={milestone.year} delay={index * 0.1}>
                <div className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <motion.div whileHover={{ scale: 1.15 }} className="flex items-center justify-center w-16 h-16 rounded-2xl gradient-green text-white font-bold text-sm shrink-0 shadow-lg shadow-green-900/20 group-hover:shadow-xl transition-shadow">
                      {milestone.year}
                    </motion.div>
                    {index < milestones.length - 1 && (
                      <motion.div initial={{ height: 0 }} whileInView={{ height: "100%" }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }} className="w-0.5 bg-gradient-to-b from-[var(--color-brand-green)] to-green-200 mt-3" />
                    )}
                  </div>
                  <div className="pb-10">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[var(--color-brand-green)] transition-colors">{milestone.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="gradient-cta absolute inset-0" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-white/5 rounded-full blur-3xl" />
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            className="absolute top-8 right-12 w-20 h-20 border border-white/10 rounded-xl"
          />
          <motion.div
            animate={{ rotate: [360, 0] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute bottom-8 left-12 w-14 h-14 border border-white/10 rounded-full"
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6"
            >
              <Heart className="h-8 w-8 text-white" />
            </motion.div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
              Ready to Work with the Best?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-green-100/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Join hundreds of businesses across Metro Manila that trust Treebox Manila for their printing needs. Get a free quote today and experience the difference.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-[var(--color-brand-green)] hover:bg-green-50 font-bold px-10 py-4 rounded-xl shadow-xl shadow-black/20 hover:shadow-2xl transition-all duration-300 text-lg group relative overflow-hidden action-button-prominent"
              >
                Get a Free Quote
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+63281234567"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-brand-amber)] hover:bg-[var(--color-brand-amber-light)] text-white font-bold px-10 py-4 rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-xl transition-all duration-300 text-lg btn-shine"
              >
                <Phone className="h-5 w-5" />
                Call Us Now
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
