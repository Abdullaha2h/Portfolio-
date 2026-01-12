"use client";

import { motion } from "framer-motion";
import { SiReact, SiMongodb, SiNodedotjs, SiOpenai } from "react-icons/si";

const Node = ({ name, icon, position, delay, color }: { name: string, icon: React.ReactNode, position: string, delay: number, color: string }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.8 }}
        className={`absolute ${position} flex flex-col items-center gap-3 z-20 group`}
    >
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-slate-100/10 bg-slate-900/60 flex items-center justify-center backdrop-blur-xl shadow-[0_0_30px_-10px_rgba(255,255,255,0.1)] group-hover:border-slate-100/30 transition-all duration-500">
            <div style={{ color }} className="transition-transform duration-500 group-hover:scale-110">
                {icon}
            </div>
        </div>
        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-slate-300 uppercase">{name}</span>
    </motion.div>
);

const ConnectionLine = ({ d, delay }: { d: string, delay: number }) => (
    <svg viewBox="0 0 500 600" className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
        <motion.path
            d={d}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            strokeDasharray="10 10"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay, ease: "easeInOut" }}
        />
        <motion.path
            d={d}
            fill="none"
            stroke="#f8fafc"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathOffset: 0, pathLength: 0.1, opacity: 0 }}
            animate={{ pathOffset: -1 }}
            transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
            }}
            className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        />
    </svg>
);

export const MernStackDiagram = () => {
    return (
        <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-80 h-120 md:max-w-125 md:h-150 flex justify-center items-center"
        >
            {/* Gradients for lines */}
            <svg width="0" height="0" className="absolute">
                <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#61dafb" stopOpacity="1" />
                        <stop offset="50%" stopColor="#339933" stopOpacity="1" />
                        <stop offset="100%" stopColor="#47A248" stopOpacity="1" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Architecture Flow Connections */}
            <ConnectionLine d="M 250 140 L 250 260" delay={0.8} /> {/* React to Node/AI */}
            <ConnectionLine d="M 250 340 L 250 460" delay={1.2} /> {/* Node/AI to MongoDB */}

            {/* React Node (Frontend) */}
            <Node
                name="Frontend"
                icon={<SiReact className="text-4xl md:text-5xl" />}
                position="top-[8%] left-1/2 -translate-x-1/2"
                delay={0.2}
                color="#61dafb"
            />

            {/* AI + Node.js Node (Server Side) */}
            <Node
                name="AI & Server"
                icon={
                    <div className="flex flex-col items-center justify-center -space-y-1">
                        <SiOpenai className="text-3xl md:text-4xl" />
                        <SiNodedotjs className="text-xl md:text-2xl text-green-500" />
                    </div>
                }
                position="top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
                delay={0.5}
                color="#ffffff"
            />

            {/* MongoDB Node (Database) */}
            <Node
                name="Database"
                icon={<SiMongodb className="text-4xl md:text-5xl" />}
                position="bottom-[8%] left-1/2 -translate-x-1/2"
                delay={0.8}
                color="#47A248"
            />

            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none flex items-center justify-center">
                <div className="w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px]" />
                <div className="w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[120px]" />
            </div>
        </motion.div>
    );
};
