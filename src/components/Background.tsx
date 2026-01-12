"use client";

import { motion } from "framer-motion";
import { CursorGlow } from "@/components/cursor-glow";

export const Background = () => {
    return (
        <div className="fixed md:block hidden inset-0 pointer-events-none">
            <CursorGlow />
            <div className="absolute inset-0 overflow-hidden z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.15, 0.1],
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-slate-400/10 blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1.1, 1, 1.1],
                        opacity: [0.05, 0.1, 0.05],
                        x: [0, -30, 0],
                        y: [0, 20, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -bottom-[10%] -right-[10%] w-[60%] h-[60%] rounded-full bg-slate-500/5 blur-[120px]"
                />
            </div>
        </div>
    );
};
