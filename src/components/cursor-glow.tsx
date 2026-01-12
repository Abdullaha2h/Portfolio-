"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const glow = glowRef.current;
        if (!glow) return;

        const handleMouseMove = (e: MouseEvent) => {
            // Use translate3d for GPU acceleration - bypasses layout/paint steps
            // X = e.clientX - 400 (half of 800px width)
            // Y = e.clientY - 400 (half of 800px height)
            const x = e.clientX - 400;
            const y = e.clientY - 400;
            glow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div
            ref={glowRef}
            className="sun pointer-events-none fixed left-0 top-0 z-1 h-[800px] w-[800px] rounded-full will-change-transform"
            style={{
                background: "radial-gradient(circle, rgba(14, 18, 36, 0.8) 0%, transparent 70%)",
                filter: "blur(40px)",
                // Initial position off-screen
                
            }}
        />
    );
}
