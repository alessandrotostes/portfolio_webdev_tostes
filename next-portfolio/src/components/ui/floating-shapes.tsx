"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ShapeSize = "sm" | "md" | "lg";
type ShapeColor = "indigo" | "rose" | "violet" | "amber" | "cyan";

interface Shape {
  size: ShapeSize;
  color: ShapeColor;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  delay?: number;
  rotate?: number;
}

interface FloatingShapesProps {
  shapes: Shape[];
  className?: string;
}

const sizeMap: Record<ShapeSize, { width: number; height: number }> = {
  sm: { width: 150, height: 40 },
  md: { width: 300, height: 80 },
  lg: { width: 500, height: 120 },
};

const colorMap: Record<ShapeColor, string> = {
  indigo: "from-indigo-500/[0.15]",
  rose: "from-rose-500/[0.15]",
  violet: "from-violet-500/[0.15]",
  amber: "from-amber-500/[0.15]",
  cyan: "from-cyan-500/[0.15]",
};

function FloatingShape({ shape }: { shape: Shape }) {
  const { width, height } = sizeMap[shape.size];
  const gradient = colorMap[shape.color];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: (shape.rotate || 0) - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: shape.rotate || 0,
      }}
      transition={{
        duration: 2.4,
        delay: shape.delay || 0,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className="absolute pointer-events-none transform-gpu"
      style={{
        top: shape.position.top,
        bottom: shape.position.bottom,
        left: shape.position.left,
        right: shape.position.right,
      }}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "border border-[var(--shape-border)]",
            "shadow-[var(--shape-glow)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

export function FloatingShapes({ shapes, className }: FloatingShapesProps) {
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden z-0", className)}>
      {shapes.map((shape, index) => (
        <FloatingShape key={index} shape={shape} />
      ))}
    </div>
  );
}
