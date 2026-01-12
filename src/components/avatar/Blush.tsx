"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AVATAR_COLORS, PATHS } from "./avatarConstants";

export function Blush({ isVisible }: { isVisible: boolean }) {
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Define Gradients locally or in defs. Here we use an inline radial gradient simulation
              using a circle with gradient fill for soft blush effect */}
                    <defs>
                        <radialGradient id="blushGradient">
                            <stop offset="0%" stopColor="#ffb7b2" stopOpacity="0.6" />
                            <stop offset="100%" stopColor="#ffb7b2" stopOpacity="0" />
                        </radialGradient>
                    </defs>

                    {/* Right Blush Lines */}
                    {PATHS.blush.rightLines.map((line, i) => (
                        <line
                            key={`r-${i}`}
                            x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
                            fill="none" stroke={AVATAR_COLORS.blushLine} strokeMiterlimit="10"
                        />
                    ))}
                    {/* Right Blush Blob (Simulated Image) */}
                    <circle cx="48" cy="88" r="8" fill="url(#blushGradient)" />


                    {/* Left Blush Lines */}
                    {PATHS.blush.leftLines.map((line, i) => (
                        <line
                            key={`l-${i}`}
                            x1={line.x1} y1={line.y1} x2={line.x2} y2={line.y2}
                            fill="none" stroke={AVATAR_COLORS.blushLine} strokeMiterlimit="10"
                        />
                    ))}
                    {/* Left Blush Blob */}
                    <circle cx="83" cy="88" r="8" fill="url(#blushGradient)" />

                </motion.g>
            )}
        </AnimatePresence>
    );
}
