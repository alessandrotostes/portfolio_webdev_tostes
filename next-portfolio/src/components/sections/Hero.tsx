"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Rocket, ChevronRight } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const HeroScene = dynamic(
  () => import("@/components/3d/HeroScene").then((mod) => mod.HeroScene),
  { ssr: false }
);

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Parallax text effects
    const textY = useTransform(scrollYProgress, [0, 1], [0, 180]);
    const textOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    const fadeUpVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div ref={containerRef} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            {/* Glowing Blur Blobs for Nebula Effect */}
            <div className="absolute top-[10%] left-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/10 blur-[80px] sm:blur-[120px] mix-blend-screen animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
            <div className="absolute bottom-[10%] right-[-10%] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-violet-600/10 dark:bg-violet-600/10 blur-[90px] sm:blur-[130px] mix-blend-screen animate-pulse pointer-events-none" style={{ animationDuration: '12s' }} />
            <div className="absolute top-[40%] left-[30%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/5 blur-[70px] sm:blur-[100px] mix-blend-screen animate-pulse pointer-events-none" style={{ animationDuration: '10s' }} />

            <motion.div style={{ y: textY, opacity: textOpacity }} className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight font-display">
                            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--hero-gradient-text-primary)" }}>
                                Desenvolvendo
                            </span>
                            <br />
                            <span
                                className="bg-clip-text text-transparent"
                                style={{ backgroundImage: "var(--hero-gradient-text-accent)" }}
                            >
                                Soluções Digitais
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                            De Sites e Landing Pages a Aplicações Web completas.
                            Transformando ideias complexas em experiências digitais premium.
                        </p>
                    </motion.div>

                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="https://wa.me/5516997643604?text=Ol%C3%A1%20visitei%20seu%20site%2C%20poderia%20me%20tirar%20d%C3%BAvidas%3F"
                            target="_blank"
                            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-primary px-8 font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105"
                        >
                            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                                <div className="relative h-full w-8 bg-white/20" />
                            </div>
                            <span className="flex items-center gap-2">
                                Bora bater um papo? 💬 <Rocket className="w-4 h-4" />
                            </span>
                        </Link>

                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[var(--shape-border)] bg-[var(--shape-glass-bg)] px-8 font-medium text-foreground backdrop-blur-sm transition-all hover:bg-secondary/50 hover:border-primary/50"
                        >
                            Espiar meus trabalhos 👀
                            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                style={{ opacity: textOpacity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
            >
                <span className="text-xs uppercase tracking-widest">Role</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent opacity-50" />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80 pointer-events-none" />
        </div>
    );
}
