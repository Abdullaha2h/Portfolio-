"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const PROJECTS = [
    {
        id: "pixelpanda",
        title: "Pixel Panda Store",
        description: "Pixel Panda is a premium digital assets marketplace designed with a high-end, glassy aesthetic and fluid mascot animations. Built with Next.js 15, it offers a seamless experience for creators and collectors to explore iconic digital items.",
        features: [
            "Organic Mascot Animations: Custom triple-layered CSS animations.",
            "Glassy Design System: Backdrop blurs, vibrant gradients, and premium typography.",
            "Interactive Cart Sidebar: Seamless real-time side drawer.",
            "Admin Dashboard: Comprehensive management interface for asset control."
        ],
        image: "/PixelPanda.png",
        liveLink: "https://pixelpandapro.vercel.app/",
        tech: ["Next.js 15", "Tailwind CSS", "Framer Motion", "Shadcn UI"]
    },
    {
        id: "aiden",
        title: "AIDEN Medical Assistant",
        description: "Responsive frontend for the AIDEN Medical Bot, built using Next.js (App Router), TypeScript, and Tailwind CSS with shadcn. This UI allows users to chat with the medical assistant powered by a retrieval-augmented generation (RAG) backend.",
        image: "/AIDEN.png",
        liveLink: "http://aidenpro.vercel.app/",
        tech: ["Next.js", "TypeScript", "Tailwind CSS", "AI/RAG"]
    },
    {
        id: "pixelpouch",
        title: "PixelPouch Store",
        description: "PixelPouch is a modern e-commerce platform specializing in selling high-quality bags. Built with Node.js, it includes structured routes, secure authentication, and an efficient design for a seamless shopping experience.",
        image: "/PixelPouch.png",
        liveLink: "https://github.com/Abdullaha2h/PixelPouch-Store/tree/master",
        tech: ["Node.js", "Express", "EJS/React", "MongoDB"]
    },
    {
        id: "ems",
        title: "Employee Management System",
        description: "The Employee Management System (EMS) is a web-based application built using React. It provides a simple interface for managing employees and their tasks. The application uses local storage to persist data and supports user authentication for both employees and admins.",
        image: "/EMP.png",
        liveLink: "https://abdullaha2h.github.io/Employee-Management-System/",
        tech: ["React", "Local Storage", "Auth", "Tailwind"]
    }
];

export const Projects = () => {
    return (
        <section id="projects" className="relative w-full max-w-7xl mx-auto py-24 px-6 md:px-24 lg:px-32">
            <div className="flex flex-col items-center mb-20">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100 mb-4 text-center uppercase"
                >
                    PROJECTS
                </motion.h2>
                <div className="w-12 h-1 bg-slate-500/50 rounded-full mb-8" />
                <p className="text-slate-400 text-center max-w-2xl text-sm md:text-base leading-relaxed">
                    Here you will find some of the personal and clients projects that I created.
                </p>
            </div>

            <div className="space-y-32">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-20 items-center`}
                    >
                        {/* Project Image / Mockup */}
                        <div className="flex-1 w-full max-w-2xl group">
                            <div className="relative rounded-2xl overflow-hidden border border-slate-100/10 bg-slate-900/40 p-2 md:p-4 backdrop-blur-sm shadow-2xl transition-all duration-500 group-hover:border-slate-100/20 group-hover:bg-slate-900/60">
                                {/* Browser/Laptop Mockup Header */}
                                <div className="flex gap-1.5 mb-2 px-2">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/50" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/50" />
                                </div>

                                <div className="relative aspect-video rounded-lg overflow-hidden border border-white/5 bg-slate-950">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 scale-90 group-hover:scale-97"
                                    />
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-6 py-3 bg-slate-100 text-slate-950 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                                        >
                                            View Project <ExternalLink size={18} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Project Info */}
                        <div className="flex-1 space-y-6 text-center lg:text-left">
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-100 flex items-center gap-3 justify-center lg:justify-start">
                                {project.title}
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-500 hover:text-slate-100 transition-colors"
                                >
                                    <ExternalLink size={24} />
                                </a>
                            </h3>

                            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                                {project.description}
                            </p>

                            {project.features && (
                                <ul className="space-y-2 text-left inline-block lg:block">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="text-slate-500 text-sm flex gap-2">
                                            <span className="text-slate-100">▹</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="px-3 py-1 bg-slate-100/5 border border-slate-100/10 rounded-full text-[10px] md:text-xs font-bold tracking-widest text-slate-300 uppercase"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
