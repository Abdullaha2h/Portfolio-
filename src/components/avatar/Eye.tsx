"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { useAvatarContext } from "./AvatarRoot";
import { PATHS, AVATAR_COLORS } from "./avatarConstants";

interface EyeProps {
    side: "left" | "right";
}

export function Eye({ side }: EyeProps) {
    const { mousePosition } = useAvatarContext();
    const [isClosed, setIsClosed] = useState(false);

    // Determine paths based on side
    const eyeData = side === "left" ? PATHS.eyes.left : PATHS.eyes.right;
    const pupilConfig = eyeData.pupil;

    // Calculate pupil movement
    // Limit the movement radius so pupil stays inside eye
    const maxRadius = 3;
    const damping = 0.05; // Make eye movement subtle

    const pupilX = useMemo(() => {
        // Very simple clamping/limiting logic 
        // ideally we calculate angle, but simple clamping often looks okay for avatars
        let val = mousePosition.x * damping;
        if (val > maxRadius) val = maxRadius;
        if (val < -maxRadius) val = -maxRadius;
        return val;
    }, [mousePosition.x]);

    const pupilY = useMemo(() => {
        let val = mousePosition.y * damping;
        if (val > maxRadius) val = maxRadius;
        if (val < -maxRadius) val = -maxRadius;
        return val;
    }, [mousePosition.y]);


    return (
        <g
            onMouseDown={() => setIsClosed(true)}
            onMouseUp={() => setIsClosed(false)}
            onMouseLeave={() => setIsClosed(false)} // Safety reset
            className="cursor-pointer"
        >
            {isClosed ? (
                // Closed Eye Lashes
                <g>
                    {eyeData.closed.map((d, i) => (
                        <path key={i} fill={AVATAR_COLORS.hair} d={d} />
                    ))}
                </g>
            ) : (
                // Open Eye
                <g>
                    <defs>
                        <clipPath id={`clip-${side}`}>
                            <path d={eyeData.white} />
                        </clipPath>
                    </defs>
                    <path fill={AVATAR_COLORS.white} d={eyeData.white} />
                    {/* Pupil with movement - Wrapped in Group for Clipping */}
                    <g clipPath={`url(#clip-${side})`}>
                        <motion.circle
                            cx={pupilConfig.cx}
                            cy={pupilConfig.cy}
                            r={pupilConfig.r}
                            fill="#1D1311"
                            animate={{ x: pupilX, y: pupilY }}
                            transition={{ type: "spring", stiffness: 150, damping: 15 }}
                        />
                    </g>
                </g>
            )}
        </g>
    );
}
