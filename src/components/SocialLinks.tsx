"use client";

import { Github, Linkedin, Instagram } from "lucide-react";

const SOCIAL_LINKS = [
    { icon: Linkedin, href: "#", name: "LinkedIn" },
    { icon: Github, href: "#", name: "GitHub" },
    { icon: Instagram, href: "#", name: "Instagram" },
];

export const SocialLinks = () => {
    return (
        <footer className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-20">
            <div className="flex gap-6">
                {SOCIAL_LINKS.map((social) => (
                    <a
                        key={social.name}
                        href={social.href}
                        className="text-slate-500 hover:text-slate-100 transition-all duration-300 hover:scale-110"
                        aria-label={social.name}
                    >
                        <social.icon size={22} strokeWidth={1.5} />
                    </a>
                ))}
            </div>
        </footer>
    );
};
