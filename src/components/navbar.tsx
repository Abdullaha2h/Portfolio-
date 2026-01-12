"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { id: "home", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "CONTACT" },
];

export function Navbar() {
    const [activeTab, setActiveTab] = useState("home");

    return (
        <nav className="flex flex-col lg:flex-col lg:gap-6 relative z-10">
            <div className="flex flex-col lg:gap-4 gap-2 lg:gap-6 items-end lg:items-start">
                {NAV_ITEMS.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        className="group flex flex-row lg:flex-row items-center gap-2 lg:gap-4 text-left outline-none cursor-pointer"
                    >
                        <div className="relative flex h-px items-center">
                            {/* The Line Segment - Hidden or shortened on mobile */}
                            <motion.div
                                initial={false}
                                animate={{
                                    width: activeTab === item.id ? (window?.innerWidth < 1024 ? 20 : 80) : (window?.innerWidth < 1024 ? 8 : 32),
                                    backgroundColor: activeTab === item.id ? "#f8fafc" : "#64748b",
                                    boxShadow: activeTab === item.id
                                        ? "0 0 8px 2px rgba(248, 250, 252, 0.3)"
                                        : "0 0 0px 0px rgba(0,0,0,0)",
                                }}
                                whileHover={{
                                    width: window?.innerWidth < 1024 ? 20 : 80,
                                    backgroundColor: "#f8fafc",
                                    boxShadow: "0 0 8px 2px rgba(248, 250, 252, 0.3)",
                                }}
                                className="h-px transition-colors duration-300 relative"
                            >
                                {activeTab === item.id && (
                                    <motion.div
                                        layoutId="arrow-glow"
                                        className="absolute right-0 -top-1 h-3 w-3 rounded-full bg-slate-100/20 blur-sm"
                                    />
                                )}
                            </motion.div>
                        </div>
                        <span
                            className={cn(
                                "text-[10px] lg:text-xs font-bold tracking-[0.1em] lg:tracking-[0.2em] transition-colors duration-300",
                                activeTab === item.id
                                    ? "text-slate-100"
                                    : "text-slate-500 group-hover:text-slate-100"
                            )}
                        >
                            {item.label}
                        </span>
                    </button>
                ))}
            </div>
        </nav>
    );
}
