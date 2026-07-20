"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export function GlassCard({ children, className, hover = true, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -5 } : undefined}
      className={cn(
        "p-6 rounded-3xl",
        "bg-[var(--shape-glass-bg)] dark:bg-[var(--shape-glass-bg)]",
        "border-2 border-[var(--shape-border)]",
        "backdrop-blur-[2px]",
        "shadow-[var(--shape-glow)]",
        "transition-all duration-300",
        hover && "hover:border-primary/30",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
