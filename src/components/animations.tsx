"use client";

import { useEffect, useRef, useState, useCallback, type ReactNode } from "react";
import {
  motion,
  useInView,
  useAnimation,
  useMotionValue,
  useSpring,
  useTransform,
  type Variant,
} from "framer-motion";

/* ──────────────── Reusable Animation Presets ──────────────── */

export const fadeInUp: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInDown: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInLeft: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRight: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
};

export const rotateIn: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, rotate: -10, scale: 0.9 },
  visible: { opacity: 1, rotate: 0, scale: 1 },
};

export const blurIn: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: { opacity: 1, filter: "blur(0px)" },
};

export const slideInFromBottom: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

/* ──────────────── Easing Curves ──────────────── */

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_OUT_QUINT = [0.22, 1, 0.36, 1] as const;
export const EASE_SPRING = { type: "spring" as const, stiffness: 300, damping: 20 };

/* ──────────────── ScrollReveal Wrapper ──────────────── */

interface ScrollRevealProps {
  children: ReactNode;
  variants?: { hidden: Variant; visible: Variant };
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  margin?: string;
}

export function ScrollReveal({
  children,
  variants = fadeInUp,
  className = "",
  delay = 0,
  duration = 0.6,
  once = true,
  margin = "-80px",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: margin as `-80px` });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────── Stagger Children Wrapper ──────────────── */

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerReveal({
  children,
  className = "",
  staggerDelay = 0.1,
  once = true,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────── Animated Counter ──────────────── */

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

/* ──────────────── Parallax Section ──────────────── */

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function ParallaxSection({
  children,
  speed = 0.3,
  className = "",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);
  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight && rect.bottom > 0) {
        y.set((windowHeight - rect.top) * speed * 0.1);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, y]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y: springY }}>{children}</motion.div>
    </div>
  );
}

/* ──────────────── Hover Lift Card ──────────────── */

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  lift?: number;
}

export function HoverLiftCard({
  children,
  className = "",
  lift = 8,
}: HoverCardProps) {
  return (
    <motion.div
      whileHover={{ y: -lift, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────── Magnetic Button ──────────────── */

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.3,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set((e.clientX - centerX) * strength);
      y.set((e.clientY - centerY) * strength);
    },
    [strength, x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────── Text Reveal (words) ──────────────── */

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.03,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{
              duration: 0.5,
              delay: delay + i * staggerDelay,
              ease: EASE_OUT_EXPO,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </div>
  );
}

/* ──────────────── Marquee / Infinite Scroll ──────────────── */

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
}

export function Marquee({
  children,
  className = "",
  speed = 30,
  direction = "left",
  pauseOnHover = true,
}: MarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);
  const animationDirection = direction === "left" ? "normal" : "reverse";

  return (
    <div
      className={`overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        className="flex gap-8 whitespace-nowrap"
        style={{
          animation: `marquee ${speed}s linear infinite ${animationDirection}`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}

/* ──────────────── Reveal Line (animated underline) ──────────────── */

interface RevealLineProps {
  className?: string;
  delay?: number;
  color?: string;
}

export function RevealLine({
  className = "",
  delay = 0,
  color = "var(--color-brand-green)",
}: RevealLineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={`h-0.5 w-12 rounded-full ${className}`}>
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        animate={isInView ? { width: "100%" } : { width: 0 }}
        transition={{ duration: 0.8, delay, ease: EASE_OUT_EXPO }}
      />
    </div>
  );
}

/* ──────────────── Floating Element ──────────────── */

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
}

export function FloatingElement({
  children,
  className = "",
  amplitude = 10,
  duration = 3,
  delay = 0,
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [-amplitude, amplitude, -amplitude],
      }}
      transition={{
        repeat: Infinity,
        duration,
        delay,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────── Scale On Scroll ──────────────── */

interface ScaleOnScrollProps {
  children: ReactNode;
  className?: string;
  from?: number;
  to?: number;
}

export function ScaleOnScroll({
  children,
  className = "",
  from = 0.8,
  to = 1,
}: ScaleOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: from, opacity: 0 }}
      animate={isInView ? { scale: to, opacity: 1 } : { scale: from, opacity: 0 }}
      transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
