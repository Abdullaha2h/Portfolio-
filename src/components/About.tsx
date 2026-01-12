"use client";

import { motion } from "framer-motion";

export const About = () => {
    return (
        <section id="about" className="relative w-full max-w-4xl mx-auto py-24 px-6 md:px-12 lg:px-16">
            <div className="flex flex-col items-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100 mb-4 text-center"
                >
                    ABOUT ME
                </motion.h2>
                <div className="w-12 h-1 bg-slate-500/50 rounded-full mb-0" />
            </div>

            <div className="flex flex-col items-center">
                {/* Text Content */}
                <div className="w-full space-y-8 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                            I’m a <span className="text-slate-100 font-semibold">Web Developer and AI RAG Specialist</span> who builds fast, scalable, and user-focused digital experiences. With a strong foundation in the MERN stack and modern frameworks like React and Next.js, I create clean, responsive interfaces backed by robust, production-ready systems.
                        </p>
                        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                            Beyond traditional web development, I specialize in <span className="text-slate-100 font-semibold">AI-powered applications</span>—designing and implementing Retrieval-Augmented Generation (RAG) systems that turn raw data into intelligent, context-aware solutions. From vector databases and embeddings to seamless chatbot experiences, I bridge the gap between AI and real-world products.
                        </p>
                        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                            I’ve delivered high-impact solutions in professional environments, earning recognition for reliability, performance, and innovation. Whether it’s a landing page, a full-stack platform, or an AI-driven tool, I focus on building products that are efficient, elegant, and built to scale.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
