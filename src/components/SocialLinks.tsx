"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const SOCIAL_LINKS = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/muhammad-abdullah-08879822a/", name: "LinkedIn" },
    { icon: Github, href: "https://github.com/Abdullaha2h", name: "GitHub" },
    { icon: Mail, href: "mailto:abdullaha2hh2a@gmail.com", name: "Email" },
];

export const SocialLinks = () => {
    return (
        <footer className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-20">
            <div className="flex gap-6">
                {SOCIAL_LINKS.map((social, index) => (
                    <motion.a
                        key={social.name}
                        href={social.href}
                        target={social.name !== "Email" ? "_blank" : undefined}
                        rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        whileHover={{
                            scale: 1.2,
                            rotate: 5,
                            color: "#f8fafc"
                        }}
                        transition={{
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 300
                        }}
                        className="text-slate-500 transition-colors duration-300"
                        aria-label={social.name}
                    >
                        <motion.div
                            animate={{
                                y: [0, -4, 0],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.5
                            }}
                        >
                            <social.icon size={22} strokeWidth={1.5} />
                        </motion.div>
                    </motion.a>
                ))}
            </div>
        </footer>
    );
};
