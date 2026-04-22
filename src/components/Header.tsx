"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg border-b border-white/20"
          : "bg-white/95 shadow-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <motion.div
            whileHover={{ rotate: 5, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/images/treebox-logo.png"
              alt="Treebox Manila Co. Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
          </motion.div>
          <span className="text-lg font-bold text-[var(--color-brand-green)] group-hover:text-[var(--color-brand-green-light)] transition-colors">
            Treebox Manila
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08 }}
            >
              <Link
                href={link.href}
                className="relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-[var(--color-brand-green)] rounded-md transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--color-brand-green)] rounded-full transition-all duration-300 group-hover:w-3/4" />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="hidden md:flex items-center gap-3"
        >
          <Button
            asChild
            className="bg-[var(--color-brand-amber)] hover:bg-[var(--color-brand-amber-light)] text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
          >
            <a href="tel:+63281234567" aria-label="Call to get a quote">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <Phone className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              Call to Get a Quote
            </a>
          </Button>
        </motion.div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <motion.div
            whileTap={{ scale: 0.9 }}
          >
            <Button
              asChild
              size="sm"
              className="bg-[var(--color-brand-amber)] hover:bg-[var(--color-brand-amber-light)] text-white"
            >
              <a href="tel:+63281234567" aria-label="Call us">
                <Phone className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <span className="text-lg font-bold text-[var(--color-brand-green)]">
                    Treebox Manila
                  </span>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" aria-label="Close menu">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex-1 p-4" aria-label="Mobile navigation">
                  <AnimatePresence>
                    {navLinks.map((link, i) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 40 }}
                        transition={{ delay: i * 0.08 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-3 px-4 py-3.5 text-base font-medium text-gray-700 hover:text-[var(--color-brand-green)] hover:bg-green-50 rounded-lg transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-amber)]" />
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </nav>
                <div className="p-4 border-t">
                  <Button
                    asChild
                    className="w-full bg-[var(--color-brand-amber)] hover:bg-[var(--color-brand-amber-light)] text-white font-semibold"
                  >
                    <a href="tel:+63281234567">
                      <Phone className="mr-2 h-4 w-4" />
                      Call to Get a Quote
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
