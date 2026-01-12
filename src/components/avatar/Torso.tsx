"use client";

import { motion } from "framer-motion";
import { AVATAR_COLORS, PATHS } from "./avatarConstants";

export function Torso() {
    return (
        <motion.g
            id="Torso"
            initial={{ y: 0, scale: 1 }}
            animate={{
                y: [0, 1, 0],
                scale: [1, 1.01, 1]
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
            }}
        >
            <path
                fill={AVATAR_COLORS.torso}
                d={PATHS.torso.base}
            />
            <path
                fill={AVATAR_COLORS.torsoShadow}
                opacity={0.5}
                d={PATHS.torso.shadow}
            />
            <g id="Path">
                <path fill={AVATAR_COLORS.torsoDark} d={PATHS.torso.detailLeft} />
                <path fill={AVATAR_COLORS.torsoDark} d={PATHS.torso.detailRight} />
            </g>
        </motion.g>
    );
}
