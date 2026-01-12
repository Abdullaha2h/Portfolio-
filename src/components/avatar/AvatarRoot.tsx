"use client";

import React, { useRef, useState, createContext, useContext, useEffect } from "react";
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

export default function AvatarRoot({ className = "max-w-[550px]" }: { className?: string }) {
    const containerRef = useRef<SVGSVGElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleWindowMouseMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                // Calculate position relative to the center of the SVG
                // This allows tracking even when outside the SVG
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
            <div className={`relative w-full h-auto flex justify-center items-center ${className}`}>
                <svg
                    ref={containerRef}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    // Increased viewBox size slightly or handled via CSS overflow to prevent ear cutoff
                    // Original: 0 0 125.82 178.11
                    // Adding padding: -10 -10 145.82 198.11 (Approx)
                    viewBox="-20 -20 165 220"
                    style={{}}
                    xmlSpace="preserve"
                    // Overflow visible ensures parts moving outside (like breathing head) aren't clipped
                    className="w-full h-auto overflow-visible z-10 relative"
                >
                    <g>
                        <Torso />
                        <Neck />
                        <Head />
                    </g>
                </svg>
            </div>
        </AvatarContext.Provider>
    );
}
