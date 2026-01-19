"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/utils/cn";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <motion.div
        className={cn(
          "fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] hidden md:block transition-colors duration-300",
          resolvedTheme === "dark" 
            ? "bg-[#00d2ff] mix-blend-screen shadow-[0_0_15px_rgba(0,210,255,0.6)]" 
            : "bg-[#21808d] mix-blend-multiply shadow-[0_0_10px_rgba(33,128,141,0.3)]"
        )}
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          x: { duration: 0 },
          y: { duration: 0 },
          scale: {
            type: "spring",
            damping: 30,
            stiffness: 300,
            mass: 0.1,
          }
        }}
      />
      <motion.div
        className={cn(
          "fixed top-0 left-0 w-8 h-8 border rounded-full pointer-events-none z-[9998] hidden md:block transition-colors duration-300",
          resolvedTheme === "dark" ? "border-[#00d2ff]/50" : "border-[#21808d]/50"
        )}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{
          x: { duration: 0 },
          y: { duration: 0 },
          scale: {
            type: "spring",
            damping: 20,
            stiffness: 150,
            mass: 0.5,
          },
          opacity: { duration: 0.2 }
        }}
      />
    </>
  );
}
