"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { PATHS, AVATAR_COLORS } from "./avatarConstants";
import { Blush } from "./Blush";
import { FaceFeatures } from "./FaceFeatures";
export function Head() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.g
            id="Head"
            initial={{ y: 0 }}
            animate={{
                y: [0, -2, 0]
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                delay: 0.5
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="cursor-pointer"
        >
            <path id="Hiar_Back" fill={AVATAR_COLORS.hair} d={PATHS.head.hairBack} />

            {/* Face Shape */}
            <g id="Face">
                <g>
                    <path fill={AVATAR_COLORS.skinMedium} d={PATHS.head.face.shadow} />
                </g>
                <path fill={AVATAR_COLORS.skinBase} d={PATHS.head.face.base} />
            </g>

            {/* Hair Front - Rendered BEHIND ears to allow ears to sit on top */}
            <path id="Hair_Front" fill={AVATAR_COLORS.hair} d={PATHS.head.hairFront} />

            {/* Ears - Rendered ON TOP of Hair Front to ensure visibility of base */}
            <g id="Ears">
                {/* Left Ear */}
                <g>
                    <path fill={AVATAR_COLORS.skinLight} d={PATHS.head.earLeft.base} />
                    <path fill={AVATAR_COLORS.skinShadow} d={PATHS.head.earLeft.detail} />
                </g>
                {/* Right Ear */}
                <g>
                    <path fill={AVATAR_COLORS.skinLight} d={PATHS.head.earRight.base} />
                    <path fill={AVATAR_COLORS.skinShadow} d={PATHS.head.earRight.detail} />
                </g>
            </g>

            {/* Features on top of face (Eyes, Glasses, etc) */}
            <FaceFeatures isHovered={isHovered} />
            <Blush isVisible={isHovered} />

        </motion.g>
    );
}
