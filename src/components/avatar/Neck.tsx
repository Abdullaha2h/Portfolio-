"use client";

import { motion } from "framer-motion";
import { AVATAR_COLORS, PATHS } from "./avatarConstants";

export function Neck() {
    return (
        <motion.g
            id="Neck"
            initial={{ y: 0 }}
            animate={{
                y: [0, 0.5, 0]
            }}
            transition={{
                duration: 1,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 0.2 // Slight delay from torso for realism
            }}
        >
            <path fill={AVATAR_COLORS.neck} d={PATHS.neck.base} />
            <path fill={AVATAR_COLORS.skinShadow} d={PATHS.neck.shadow} />
        </motion.g>
    );
}
