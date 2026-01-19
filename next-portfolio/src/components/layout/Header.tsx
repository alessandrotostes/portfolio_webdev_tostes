"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Rocket } from "lucide-react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navItems = [
  { name: "Início", path: "#home" },
  { name: "Serviços", path: "#services" },
  { name: "Destaque", path: "#pwa-showcase" },
  { name: "Projetos", path: "#projects" },
  { name: "Sobre", path: "#about" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border/50 py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="relative z-50 flex items-center gap-2 group">
          <div className="relative w-32 h-10 group-hover:scale-105 transition-transform">
             <Image 
              src="/img/logo.webp" 
              alt="Tostes Logo" 
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative group",
                pathname === item.path ? "text-primary" : "text-muted-foreground"
              )}
            >
              {item.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                pathname === item.path && "scale-x-100"
              )} />
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="https://wa.me/5516997643604"
            target="_blank"
            className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
          >
            <span>Falar Conosco</span>
            <Rocket className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden z-50 p-2 text-foreground active:scale-95 transition-transform"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-0 bg-background/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center pt-20"
            >
              <div className="flex flex-col items-center gap-8 w-full px-8">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1 }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-3xl font-display font-bold hover:text-primary transition-colors",
                        pathname === item.path ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8 flex flex-col items-center gap-4 w-full"
                >
                  <ThemeToggle />
                  <Link
                    href="https://wa.me/5516997643604"
                    target="_blank"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full text-lg font-medium shadow-lg shadow-primary/20 w-full justify-center"
                  >
                    Falar Conosco
                    <Rocket className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
