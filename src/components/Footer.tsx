"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Instagram, Youtube, ArrowUpRight, Heart } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/contact", label: "Contact Us" },
];

const serviceLinks = [
  { href: "/services#custom-boxes", label: "Custom Boxes" },
  { href: "/services#paper-bags", label: "Paper Bags" },
  { href: "/services#calendars", label: "Calendars" },
  { href: "/services#flyers-brochures", label: "Posters & Flyers" },
  { href: "/services#menus-stationery", label: "Brochures" },
  { href: "/services#stickers-labels", label: "Stickers & Labels" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/treeboxmanila",
    label: "Instagram",
    Icon: Instagram,
  },
  {
    href: "https://www.youtube.com/@treeboxmanila",
    label: "YouTube",
    Icon: Youtube,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative">
      {/* Wave Top */}
      <div className="bg-[var(--color-brand-cream)]">
        <svg viewBox="0 0 1440 60" className="w-full block" preserveAspectRatio="none">
          <path
            fill="#1B5E20"
            d="M0,32L48,29.3C96,27,192,21,288,21.3C384,21,480,27,576,32C672,37,768,43,864,42.7C960,43,1056,37,1152,32C1248,27,1344,21,1392,18.7L1440,16L1440,60L0,60Z"
          />
        </svg>
      </div>

      {/* Main Footer */}
      <div className="gradient-cta text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* About Column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <span className="text-sm font-bold">T</span>
                </span>
                Treebox Manila Co.
              </h3>
              <p className="text-green-100/80 text-sm leading-relaxed mb-5">
                Your trusted offset lithography printing service since 1997.
                Formerly MWC Enterprises, we pride ourselves in our commitment
                to excellence, efficiency, and client relationships built through
                decades of outstanding service.
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ href, label, Icon }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${label}`}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 transition-all duration-300 hover:shadow-lg"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
                <div className="w-6 h-0.5 bg-[var(--color-brand-amber)] rounded-full" />
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group text-green-100/80 hover:text-white text-sm transition-colors flex items-center gap-1.5"
                    >
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
                <div className="w-6 h-0.5 bg-[var(--color-brand-amber)] rounded-full" />
                Our Services
              </h3>
              <ul className="space-y-2.5">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group text-green-100/80 hover:text-white text-sm transition-colors flex items-center gap-1.5"
                    >
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-5 flex items-center gap-2">
                <div className="w-6 h-0.5 bg-[var(--color-brand-amber)] rounded-full" />
                Contact Us
              </h3>
              <ul className="space-y-3.5">
                <li className="flex items-start gap-3 group">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors"
                  >
                    <MapPin className="h-3.5 w-3.5 text-green-300" />
                  </motion.div>
                  <span className="text-green-100/80 text-sm pt-1">
                    Quezon City, Metro Manila, Philippines
                  </span>
                </li>
                <li className="flex items-center gap-3 group">
                  <motion.a
                    href="tel:+63281234567"
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-brand-amber)] transition-all duration-300"
                  >
                    <Phone className="h-3.5 w-3.5 text-green-300 group-hover:text-white transition-colors" />
                  </motion.a>
                  <a
                    href="tel:+63281234567"
                    className="text-green-100/80 hover:text-white text-sm transition-colors font-medium"
                  >
                    +63 2 8123 4567
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors"
                  >
                    <Mail className="h-3.5 w-3.5 text-green-300" />
                  </motion.div>
                  <a
                    href="mailto:treeboxmanila@gmail.com"
                    className="text-green-100/80 hover:text-white text-sm transition-colors"
                  >
                    treeboxmanila@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3 group">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors"
                  >
                    <Clock className="h-3.5 w-3.5 text-green-300" />
                  </motion.div>
                  <div className="text-green-100/80 text-sm pt-0.5">
                    <p>Mon–Sat: 8:00 AM – 5:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-green-200/60 text-xs">
              &copy; {currentYear} Treebox Manila Co. All rights reserved.
            </p>
            <p className="text-green-200/60 text-xs flex items-center gap-2">
              <span>Established 1997</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>Formerly MWC Enterprises</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span className="flex items-center gap-1">
                Made with <Heart className="h-3 w-3 text-red-400 fill-red-400" /> in Quezon City
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
