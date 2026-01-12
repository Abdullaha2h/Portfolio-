"use client";

import { PATHS, AVATAR_COLORS } from "./avatarConstants";

import { motion } from "framer-motion";
import { Eye } from "./Eye";
export function FaceFeatures({ isHovered }: { isHovered: boolean }) {
    return (
        <>
            {/* Hair Front moved to Head.tsx for better layering */}

            {/* Eyes */}
            <Eye side="left" />
            <Eye side="right" />

            {/* Glasses */}
            <g id="Glasses">
                <g>
                    <ellipse
                        className="opacity-25"
                        fill={AVATAR_COLORS.glassLens}
                        cx={PATHS.glasses.leftLens.cx}
                        cy={PATHS.glasses.leftLens.cy}
                        rx={PATHS.glasses.leftLens.rx}
                        ry={PATHS.glasses.leftLens.ry}
                    />
                    {/* Replaced complex path with simple stroked circle for perfect roundness */}
                    <circle
                        cx={PATHS.glasses.leftLens.cx}
                        cy={PATHS.glasses.leftLens.cy}
                        r={PATHS.glasses.leftLens.rx}
                        stroke={AVATAR_COLORS.glassFrame}
                        strokeWidth="2.08"
                        fill="none"
                    />
                </g>
                <g>
                    <ellipse
                        className="opacity-25"
                        fill={AVATAR_COLORS.glassLens}
                        cx={PATHS.glasses.rightLens.cx}
                        cy={PATHS.glasses.rightLens.cy}
                        rx={PATHS.glasses.rightLens.rx}
                        ry={PATHS.glasses.rightLens.ry}
                    />
                    {/* Replaced complex path with simple stroked circle for perfect roundness */}
                    <circle
                        cx={PATHS.glasses.rightLens.cx}
                        cy={PATHS.glasses.rightLens.cy}
                        r={PATHS.glasses.rightLens.rx}
                        stroke={AVATAR_COLORS.glassFrame}
                        strokeWidth="2.08"
                        fill="none"
                    />
                </g>
                <g>
                    {/* Bridge */}
                    <rect x="59.98" y="70.04" fill={AVATAR_COLORS.glassFrame} width="8.31" height="2.08" />
                </g>
            </g>

            {/* Eyebrows */}
            <motion.path
                id="Eyebrow_R"
                fill={AVATAR_COLORS.eyebrow}
                d={PATHS.eyes.right.eyebrow}
                animate={{ y: isHovered ? -2 : 0 }}
            />
            <motion.path
                id="Eyebrow_L"
                fill={AVATAR_COLORS.eyebrow}
                d={PATHS.eyes.left.eyebrow}
                animate={{ y: isHovered ? -2 : 0 }}
            />

            {/* Lips */}
            <g id="Lips">
                <path fill={AVATAR_COLORS.lipsDark} d={PATHS.lips.shadow} />
                <path fill={AVATAR_COLORS.lipsLight} d={PATHS.lips.highlight} />
            </g>
        </>
    );
}
