"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, StaggerReveal, fadeInUp } from "@/components/animations";

const faqs = [
  {
    question: "What types of printing services does Treebox Manila offer?",
    answer:
      "We offer a comprehensive range of offset lithography printing services including custom boxes (shoe boxes, pizza boxes, cake boxes, gift boxes, food boxes, corrugated boxes), paper bags, calendars, posters, flyers, brochures, restaurant menus, letterheads, envelopes, stickers, labels, business cards, invitations, and certificates. We are a one-stop shop for all your commercial printing needs in Metro Manila.",
  },
  {
    question: "What is the typical turnaround time for an order?",
    answer:
      "Turnaround times vary depending on the complexity and quantity of the order. Standard orders typically take 5 to 7 working days, while rush orders can be accommodated in 3 to 5 working days. Large-volume or highly customized orders may take longer. We always provide a clear timeline during the quotation process so you know exactly when to expect your delivery.",
  },
  {
    question: "Do you have a minimum order quantity (MOQ)?",
    answer:
      "Since we specialize in offset lithography printing, we have competitive minimum order quantities that make even mid-volume runs cost-effective. MOQ varies by product — for example, custom boxes typically start at 500 pieces, while flyers can start at 1,000 pieces. Contact us with your specific requirements and we will provide a quotation that works for your budget and volume.",
  },
  {
    question: "Can I request a custom size or design that is not listed on your website?",
    answer:
      "Absolutely. Most of our work involves custom specifications tailored to each client's unique needs. Whether you need a non-standard box size, a special paper stock, unique finishing like embossing or foil stamping, or a completely custom design, we can accommodate it. Our team works closely with you to ensure the final product matches your exact specifications.",
  },
  {
    question: "What file formats do you accept for print-ready artwork?",
    answer:
      "We accept high-resolution PDF files (preferred), as well as AI, PSD, INDD, and high-resolution JPG/PNG files. For the best results, artwork should be at least 300 DPI, in CMYK color mode, with 3mm bleed on all sides and crop marks. If you need assistance with file preparation, our team can guide you through the process or recommend a graphic designer.",
  },
  {
    question: "Do you offer free quotations and samples?",
    answer:
      "Yes, we provide free, no-obligation quotations for all printing inquiries. Simply contact us by phone, email, or through our website form with your specifications and we will send you a detailed quote within one business day. We can also arrange sample viewing at our Quezon City office so you can see and feel the quality of our materials before placing an order.",
  },
  {
    question: "What areas do you deliver to?",
    answer:
      "We deliver across Metro Manila including Quezon City, Makati, Pasig, Mandaluyong, San Juan, Caloocan, Valenzuela, Manila, Taguig, and Paranaque. We also ship to provinces throughout the Philippines via courier. Delivery fees vary by location and order size. For large Metro Manila orders, we may offer free delivery — ask us about it when you request a quote.",
  },
  {
    question: "How do I place an order with Treebox Manila?",
    answer:
      "Placing an order is simple. You can call us directly at +63 2 8123 4567, send an email to treeboxmanila@gmail.com, or fill out the contact form on our website. We will discuss your requirements, provide a quotation, and once approved, proceed with a proof for your approval before printing begins. Our team guides you through every step of the process.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-[var(--color-brand-cream)] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none dot-pattern" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-[var(--color-brand-green)] font-semibold text-sm mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked{" "}
              <span className="text-gradient-green">Questions</span>
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Everything you need to know about our printing services. Cannot find
              the answer you are looking for? Contact us directly.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:border-[var(--color-brand-green)]/20 transition-colors duration-300">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left group"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-semibold text-gray-900 pr-4 group-hover:text-[var(--color-brand-green)] transition-colors text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="h-5 w-5 text-gray-400 group-hover:text-[var(--color-brand-green)] transition-colors" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
