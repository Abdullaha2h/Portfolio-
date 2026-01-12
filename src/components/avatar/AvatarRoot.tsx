"use client";

import React, { useRef, useState, createContext, useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { Torso } from "./Torso";
import { Neck } from "./Neck";
import { Head } from "./Head";


// Create a context to share mouse position with child components (like Eyes)
interface AvatarContextType {
    mousePosition: { x: number; y: number };
    containerRef: React.RefObject<SVGSVGElement | null>;
}

export const AvatarContext = createContext<AvatarContextType>({
    mousePosition: { x: 0, y: 0 },
    containerRef: { current: null },
});

export const useAvatarContext = () => useContext(AvatarContext);

export default function AvatarRoot({ className = "max-w-[400px]" }: { className?: string }) {
    const containerRef = useRef<SVGSVGElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleWindowMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                setMousePosition({
                    x: e.clientX - centerX,
                    y: e.clientY - centerY,
                });
            }
        };

        window.addEventListener("mousemove", handleWindowMouseMove);
        return () => window.removeEventListener("mousemove", handleWindowMouseMove);
    }, []);

    return (
        <AvatarContext.Provider value={{ mousePosition, containerRef }}>
            <div className={`relative w-full aspect-square flex justify-center items-center ${className}`}>
                {/* Circular Frame */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1.2,
                        ease: [0.23, 1, 0.32, 1], // Custom cubic-bezier for a professional feel
                        delay: 0.1
                    }}
                    className="relative w-full h-full rounded-full flex justify-center items-center p-4 bg-gradient-to-b from-slate-400/5 to-slate-500/10 border border-slate-100/10 shadow-[0_0_50px_-12px_rgba(255,255,255,0.05)] backdrop-blur-[2px] overflow-hidden"
                >
                    {/* Inner Decorative Ring */}
                    <motion.div
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute inset-2 rounded-full border border-dashed border-slate-100/5 pointer-events-none"
                    />

                    {/* Floating Avatar Container */}
                    <motion.div
                        animate={{
                            y: [0, -8, 0],
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="w-full h-full relative z-10 flex justify-center items-end"
                    >
                        <svg
                            ref={containerRef}
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="-20 -20 165 220"
                            xmlSpace="preserve"
                            className="md:w-[130%] md:h-[130%]  w-[140%]  h-[140%]  overflow-visible relative  translate-y-[20%] md:translate-y-[15%]"
                        >
                            <g>
                                <Torso />
                                <Neck />
                                <Head />
                            </g>
                        </svg>
                    </motion.div>

                    {/* Outer Glow Effect */}
                    <div className="absolute inset-0 rounded-full bg-blue-500/5 blur-3xl -z-10 group-hover:bg-blue-500/10 transition-colors duration-500" />
                </motion.div>
            </div>
        </AvatarContext.Provider>
    );
}
