"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { RippleButton } from "@/components/animations";

const serviceOptions = [
  "Custom Boxes",
  "Paper Bags",
  "Calendars",
  "Posters",
  "Flyers & Brochures",
  "Menus & Stationery",
  "Stickers & Labels",
  "Other Printing",
];

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
};

function validateForm(data: {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) {
    errors.name = "Please enter your name.";
  }
  if (!data.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!data.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  }
  if (!data.service) {
    errors.service = "Please select a service.";
  }
  if (!data.message.trim()) {
    errors.message = "Please describe your printing needs.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Please provide at least 10 characters describing your needs.";
  }
  return errors;
}

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Shake animation on error
      return;
    }

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Message sent successfully!", {
        description:
          "Thank you for contacting Treebox Manila. We will get back to you within 24 hours.",
      });
      setIsSuccess(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
        setErrors({});
        setIsSuccess(false);
      }, 3000);
    } catch {
      toast.error("Failed to send message", {
        description:
          "Something went wrong. Please try again or call us directly at +63 2 8123 4567.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {isSuccess ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="flex flex-col items-center justify-center py-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
            className="w-20 h-20 rounded-full gradient-green flex items-center justify-center text-white mb-6 shadow-lg shadow-green-900/20"
          >
            <CheckCircle className="h-10 w-10" />
          </motion.div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
          <p className="text-gray-500">We will get back to you within 24 hours.</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          className="space-y-5"
          noValidate
        >
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Juan Dela Cruz"
              value={formData.name}
              onChange={handleChange}
              className={`transition-all duration-200 focus:scale-[1.01] ${errors.name ? "border-red-400 focus-visible:ring-red-400" : "focus-visible:ring-[var(--color-brand-green)]"}`}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            <AnimatePresence>
              {errors.name && (
                <motion.p
                  id="name-error"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-sm text-red-500"
                >
                  {errors.name}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className={`transition-all duration-200 focus:scale-[1.01] ${errors.email ? "border-red-400 focus-visible:ring-red-400" : "focus-visible:ring-[var(--color-brand-green)]"}`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    id="email-error"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-sm text-red-500"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone Number <span className="text-red-500">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+63 917 123 4567"
                value={formData.phone}
                onChange={handleChange}
                className={`transition-all duration-200 focus:scale-[1.01] ${errors.phone ? "border-red-400 focus-visible:ring-red-400" : "focus-visible:ring-[var(--color-brand-green)]"}`}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
              />
              <AnimatePresence>
                {errors.phone && (
                  <motion.p
                    id="phone-error"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="text-sm text-red-500"
                  >
                    {errors.phone}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="service" className="text-sm font-medium text-gray-700">
              Service Interested In <span className="text-red-500">*</span>
            </Label>
            <Select
              value={formData.service}
              onValueChange={(value) => {
                setFormData((prev) => ({ ...prev, service: value }));
                if (errors.service) {
                  setErrors((prev) => ({ ...prev, service: undefined }));
                }
              }}
            >
              <SelectTrigger
                id="service"
                className={`transition-all duration-200 focus:scale-[1.01] ${errors.service ? "border-red-400 focus:ring-red-400" : "focus:ring-[var(--color-brand-green)]"}`}
                aria-invalid={!!errors.service}
                aria-describedby={errors.service ? "service-error" : undefined}
              >
                <SelectValue placeholder="Select a printing service" />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <AnimatePresence>
              {errors.service && (
                <motion.p
                  id="service-error"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-sm text-red-500"
                >
                  {errors.service}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium text-gray-700">
              Your Message <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your printing needs — quantity, size, material, etc."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={`transition-all duration-200 resize-none focus:scale-[1.01] ${errors.message ? "border-red-400 focus-visible:ring-red-400" : "focus-visible:ring-[var(--color-brand-green)]"}`}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            <AnimatePresence>
              {errors.message && (
                <motion.p
                  id="message-error"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-sm text-red-500"
                >
                  {errors.message}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

          <RippleButton className="inline-block">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full sm:w-auto gradient-green hover:opacity-90 text-white font-semibold shadow-lg shadow-green-900/20 transition-all duration-300 hover-glow"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </>
              )}
            </Button>
          </RippleButton>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
