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
  AnimatePresence,
} from "framer-motion";

/* ──────────────── Reusable Animation Presets ──────────────── */

export const fadeInUp: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export const fadeInDown: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, y: -40, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export const fadeInLeft: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, x: -40, filter: "blur(3px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
};

export const fadeInRight: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, x: 40, filter: "blur(3px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
};

export const scaleIn: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, scale: 0.85, filter: "blur(6px)" },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
};

export const rotateIn: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, rotate: -8, scale: 0.9, filter: "blur(4px)" },
  visible: { opacity: 1, rotate: 0, scale: 1, filter: "blur(0px)" },
};

export const blurIn: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, filter: "blur(12px)" },
  visible: { opacity: 1, filter: "blur(0px)" },
};

export const slideInFromBottom: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, y: 60, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
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
export const EASE_SPRING = { type: "spring" as const, stiffness: 200, damping: 20 };

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
  duration = 0.7,
  once = true,
  margin = "-50px",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: margin as `-50px` });
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
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={{ willChange: "transform, opacity" }}
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

/* ──────────────── Ripple Button ──────────────── */

interface RippleButtonProps {
  children: ReactNode;
  className?: string;
  color?: string;
}

export function RippleButton({ children, className = "", color = "rgba(255,255,255,0.3)" }: RippleButtonProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600);
  };

  return (
    <motion.div
      onClick={handleClick}
      className={`relative overflow-hidden ${className}`}
      whileTap={{ scale: 0.97 }}
      style={{ display: "inline-flex" }}
    >
      {children}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 10,
            height: 10,
            marginLeft: -5,
            marginTop: -5,
            backgroundColor: color,
          }}
        />
      ))}
    </motion.div>
  );
}

/* ──────────────── Glow Card ──────────────── */

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export function GlowCard({ children, className = "", glowColor = "var(--color-brand-green)" }: GlowCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative group ${className}`}
    >
      <div
        className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"
        style={{ background: `linear-gradient(135deg, ${glowColor}, transparent, ${glowColor})` }}
      />
      <div className="relative bg-white rounded-2xl">{children}</div>
    </motion.div>
  );
}

/* ──────────────── Count Up (spring-based) ──────────────── */

interface CountUpProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function CountUp({ target, suffix = "", prefix = "", duration = 2, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 50, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, target, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });
    return unsubscribe;
  }, [springValue]);

  return (
    <span ref={ref} className={className}>
      {prefix}{display}{suffix}
    </span>
  );
}

/* ──────────────── Slide In ──────────────── */

interface SlideInProps {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  className?: string;
  delay?: number;
  distance?: number;
}

export function SlideIn({ children, direction = "up", className = "", delay = 0, distance = 60 }: SlideInProps) {
  const directionMap = {
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────── Bounce In ──────────────── */

interface BounceInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function BounceIn({ children, className = "", delay = 0 }: BounceInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.3 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 260, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────── Tilt Card (3D hover) ──────────────── */

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  tiltAmount?: number;
}

export function TiltCard({ children, className = "", tiltAmount = 10 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      x.set(((e.clientY - centerY) / rect.height) * -tiltAmount);
      y.set(((e.clientX - centerX) / rect.width) * tiltAmount);
    },
    [tiltAmount, x, y]
  );

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  const rotateX = useSpring(x, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(y, { stiffness: 200, damping: 20 });

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────── Typing Effect ──────────────── */

interface TypingEffectProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  cursor?: boolean;
}

export function TypingEffect({ text, className = "", speed = 50, delay = 0, cursor = true }: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayedText(text.slice(0, i + 1));
          i++;
        } else {
          setIsComplete(true);
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [isInView, text, speed, delay]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {cursor && !isComplete && <span className="animate-typing-cursor">|</span>}
    </span>
  );
}

/* ──────────────── Stagger Text Lines ──────────────── */

interface StaggerTextProps {
  lines: string[];
  className?: string;
  staggerDelay?: number;
}

export function StaggerText({ lines, className = "", staggerDelay = 0.1 }: StaggerTextProps) {
  return (
    <div className={className}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.div
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * staggerDelay, ease: EASE_OUT_EXPO }}
          >
            {line}
          </motion.div>
        </div>
      ))}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   ENHANCED ANIMATION COMPONENTS — Scroll Reveals & Mobile
   ══════════════════════════════════════════════════════════════ */

/* ──────────────── 3D Card Reveal on Scroll ──────────────── */

export const cardReveal3D: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, y: 50, scale: 0.95, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
};

export const cardRevealLeft: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, x: -50, scale: 0.95, filter: "blur(4px)" },
  visible: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
};

export const cardRevealRight: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, x: 50, scale: 0.95, filter: "blur(4px)" },
  visible: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
};

export const revealFromBlur: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, filter: "blur(16px)", scale: 0.94 },
  visible: { opacity: 1, filter: "blur(0px)", scale: 1 },
};

export const revealFromClip: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/* Mobile-optimized variant — shorter distance, faster */
export const fadeInUpMobile: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInUpBounce: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 20 },
  },
};

/* ──────────────── Scroll-Reveal with Direction ──────────────── */

interface DirectionalRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  mobileDistance?: number;
}

export function DirectionalReveal({
  children,
  direction = "up",
  className = "",
  delay = 0,
  duration = 0.65,
  distance = 40,
  once = true,
  mobileDistance,
}: DirectionalRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-40px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  /* Use smaller distance on mobile for snappier feel */
  const effectiveDistance = mobileDistance ? (isMobile ? mobileDistance : distance) : (isMobile ? distance * 0.5 : distance);

  const directionMap = {
    up: { x: 0, y: effectiveDistance },
    down: { x: 0, y: -effectiveDistance },
    left: { x: -effectiveDistance, y: 0 },
    right: { x: effectiveDistance, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...directionMap[direction] }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────── Staggered Grid Reveal (for card grids) ──────────────── */

interface StaggerGridRevealProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
  columns?: number;
}

export function StaggerGridReveal({
  children,
  className = "",
  staggerDelay = 0.08,
  once = true,
}: StaggerGridRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });
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
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────── Card with 3D Scroll Reveal ──────────────── */

interface Card3DRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export function Card3DReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: Card3DRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const variantsMap = {
    up: cardReveal3D,
    left: cardRevealLeft,
    right: cardRevealRight,
  };

  return (
    <motion.div
      ref={ref}
      variants={variantsMap[direction]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────── Mobile Swipe Reveal (touch-optimized) ──────────────── */

interface MobileSwipeRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "up";
  delay?: number;
}

export function MobileSwipeReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: MobileSwipeRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const dirMap = {
    up: { y: 30, x: 0 },
    left: { y: 0, x: 30 },
    right: { y: 0, x: -30 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...dirMap[direction], scale: 0.95 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : {}}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────── Pulse Ring Animation ──────────────── */

interface PulseRingProps {
  children: ReactNode;
  className?: string;
  color?: string;
  size?: number;
}

export function PulseRing({ children, className = "", color = "var(--color-brand-green)", size = 40 }: PulseRingProps) {
  return (
    <div className={`relative ${className}`}>
      {children}
      <motion.div
        animate={{
          scale: [1, 1.8],
          opacity: [0.4, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeOut",
        }}
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          backgroundColor: color,
          opacity: 0.2,
          width: size,
          height: size,
          top: "50%",
          left: "50%",
          marginTop: -size / 2,
          marginLeft: -size / 2,
        }}
      />
    </div>
  );
}

/* ──────────────── Scroll Progress Bar ──────────────── */

interface ScrollProgressProps {
  className?: string;
  color?: string;
}

export function ScrollProgress({ className = "", color = "var(--color-brand-green)" }: ScrollProgressProps) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        scrollYProgress.set(window.scrollY / scrollHeight);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollYProgress]);

  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.div
      ref={ref}
      className={`h-1 rounded-full ${className}`}
      style={{ width, backgroundColor: color, originX: 0 }}
    />
  );
}

/* ──────────────── Staggered Number Counter with Suffix ──────────────── */

interface StaggerCounterProps {
  items: Array<{ value: number; suffix?: string; prefix?: string; label: string }>;
  className?: string;
}

export function StaggerCounter({ items, className = "" }: StaggerCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className={`grid grid-cols-2 gap-6 ${className}`}>
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          <div className="text-3xl sm:text-4xl font-extrabold">
            <AnimatedCounter target={item.value} suffix={item.suffix} prefix={item.prefix} />
          </div>
          <p className="text-sm text-gray-500 mt-1">{item.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

/* ──────────────── Image Reveal with Mask ──────────────── */

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right" | "up" | "down";
}

export function ImageReveal({ children, className = "", delay = 0, direction = "up" }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  /* Simple opacity + scale reveal — no clip-path to avoid:
     1. Images permanently hidden when useInView doesn't fire
     2. Jitter from clip-path + scale combo
     3. Poor mobile performance with clip-path animations */
  const directionOffset = {
    up: { y: 25, x: 0 },
    down: { y: -25, x: 0 },
    left: { x: 25, y: 0 },
    right: { x: -25, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionOffset[direction], scale: 1.04, filter: "blur(4px)" }}
      animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" } : { opacity: 0, ...directionOffset[direction], scale: 1.04, filter: "blur(4px)" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────── Section Heading Reveal (staggered badge + title + subtitle) ──────────────── */

interface SectionHeadingRevealProps {
  badge?: string;
  title: ReactNode;
  subtitle?: string;
  className?: string;
  badgeColor?: "green" | "amber";
}

export function SectionHeadingReveal({
  badge,
  title,
  subtitle,
  className = "",
  badgeColor = "green",
}: SectionHeadingRevealProps) {
  const badgeStyles = {
    green: "bg-green-50 text-[var(--color-brand-green)]",
    amber: "bg-amber-50 text-[var(--color-brand-amber-dark)]",
  };

  return (
    <div className={`text-center mb-14 ${className}`}>
      {badge && (
        <ScrollReveal delay={0}>
          <span className={`inline-block px-4 py-1.5 rounded-full font-semibold text-sm mb-4 ${badgeStyles[badgeColor]}`}>
            {badge}
          </span>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.08}>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.16}>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}

/* ──────────────── Hover Tilt Card (touch-friendly) ──────────────── */

interface HoverTiltProps {
  children: ReactNode;
  className?: string;
  tiltDegree?: number;
  scale?: number;
}

export function HoverTilt({ children, className = "", tiltDegree = 3, scale = 1.02 }: HoverTiltProps) {
  return (
    <motion.div
      whileHover={{ scale, rotateZ: tiltDegree }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ──────────────── Stagger List (for sequential items) ──────────────── */

interface StaggerListProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerList({ children, className = "", staggerDelay = 0.06 }: StaggerListProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
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

export const staggerListItem: { hidden: Variant; visible: Variant } = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};
