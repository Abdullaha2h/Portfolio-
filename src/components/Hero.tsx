"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar";
import AvatarRoot from "@/components/avatar/AvatarRoot";

export const Hero = () => {
    return (
        <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full max-w-7xl mx-auto py-12 lg:py-0">
            {/* Left Side: Hero Text */}
            <div className="flex-1 max-w-2xl text-center lg:text-left">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100 mb-2 md:b-4">
                        Muhammad Abdullah
                    </h1>
                    <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-slate-200 md:mb-6 mb-4 font-mono tracking-wide">
                        Full Stack Engineer
                    </h2>
                    <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 md:mb-12 px-4 lg:px-0">
                        Full Stack Developer with hands-on experience in building and deploying full-stack web applications.
                        Skilled in both front-end and back-end technologies with a touch of AI and RAG,
                        along with databases, to create scalable and user-friendly solutions.
                    </p>

                    {/* Navigation - Hidden on Mobile, shown on Large screens */}
                    <div className="hidden lg:flex pl-15 justify-start">
                        <Navbar />
                    </div>
                </motion.div>
            </div>

            {/* Right Side (Top on Mobile): Avatar */}
            <div className="flex-1 w-full max-w-sm lg:max-w-none flex justify-center lg:justify-end">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="w-full max-w-[300px] md:max-w-[400px]"
                >
                    <AvatarRoot />
                </motion.div>
            </div>
        </div>
    );
};
