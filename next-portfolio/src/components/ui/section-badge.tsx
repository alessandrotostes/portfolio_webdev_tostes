"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  icon?: React.ReactNode;
  text: string;
  className?: string;
  delay?: number;
}

export function SectionBadge({ icon, text, className, delay = 0 }: SectionBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full",
        "bg-white/[0.03] border border-white/[0.08]",
        "backdrop-blur-sm",
        className
      )}
    >
      {icon || <Circle className="h-2 w-2 fill-rose-500/80 text-rose-500/80" />}
      <span className="text-sm text-white/60 tracking-wide">{text}</span>
    </motion.div>
  );
}
