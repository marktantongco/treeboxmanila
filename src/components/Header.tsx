"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { MagneticButton } from "@/components/animations";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  /* Scroll progress bar */
  const { scrollYProgress } = useScroll();
  const scaleXRaw = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleX = useSpring(scaleXRaw, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "glass shadow-lg shadow-green-900/5 border-b border-white/20 backdrop-blur-xl"
          : "bg-white/95 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Treebox Manila Home">
          <motion.div
            whileHover={{ rotate: 5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
          <div className="flex flex-col">
            <span className="text-lg font-bold text-[var(--color-brand-green)] group-hover:text-[var(--color-brand-green-light)] transition-colors leading-tight">
              Treebox Manila
            </span>
            <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest leading-tight hidden sm:block">
              Since 1997
            </span>
          </div>
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
                className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive(link.href)
                    ? "text-[var(--color-brand-green)] bg-green-50"
                    : "text-gray-600 hover:text-[var(--color-brand-green)] hover:bg-green-50/50"
                }`}
              >
                {link.label}
                {/* Active indicator */}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[var(--color-brand-green)] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop CTA — prominent and always visible */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="hidden md:flex items-center gap-3"
        >
          <Button
            asChild
            className="group/cta bg-[var(--color-brand-amber)] hover:bg-[var(--color-brand-amber-light)] text-white font-bold shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 btn-shine h-11 px-5 text-sm hover-glow-amber"
          >
            <Link href="/contact" aria-label="Get a quote">
              Get a Quote Now
              <ArrowRight className="ml-2 h-4 w-4 group-hover/cta:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <motion.div whileTap={{ scale: 0.9 }}>
            <Button
              asChild
              size="sm"
              className="bg-[var(--color-brand-amber)] hover:bg-[var(--color-brand-amber-light)] text-white font-bold btn-shine h-9 px-3 text-xs"
            >
              <Link href="/contact" aria-label="Get a quote">
                Get a Quote
              </Link>
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
                        transition={{ delay: i * 0.08, type: "spring", stiffness: 200, damping: 20 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className={`flex items-center gap-3 px-4 py-3.5 text-base font-medium rounded-lg transition-colors touch-feedback ${
                            isActive(link.href)
                              ? "text-[var(--color-brand-green)] bg-green-50"
                              : "text-gray-700 hover:text-[var(--color-brand-green)] hover:bg-green-50"
                          }`}
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${
                              isActive(link.href)
                                ? "bg-[var(--color-brand-green)]"
                                : "bg-[var(--color-brand-amber)]"
                            }`}
                          />
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </nav>
                <div className="p-4 border-t space-y-3">
                  <Button
                    asChild
                    className="w-full bg-[var(--color-brand-amber)] hover:bg-[var(--color-brand-amber-light)] text-white font-bold h-12 btn-shine"
                  >
                    <Link href="/contact">
                      Get a Quote Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-2 border-[var(--color-brand-green)] text-[var(--color-brand-green)] hover:bg-[var(--color-brand-green)] hover:text-white font-bold h-12"
                  >
                    <a href="tel:+63281234567">
                      <Phone className="mr-2 h-4 w-4" />
                      Call +63 2 8123 4567
                    </a>
                  </Button>
                  <p className="text-xs text-gray-400 text-center">
                    Mon–Sat: 8AM – 5PM
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[var(--color-brand-green)] to-[var(--color-brand-amber)] origin-left"
        style={{ scaleX }}
      />
    </motion.header>
  );
}
