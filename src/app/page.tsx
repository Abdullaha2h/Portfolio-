"use client";

import { Background } from "@/components/Background";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { SocialLinks } from "@/components/SocialLinks";
import { Navbar } from "@/components/navbar";

import { Contact } from "@/components/Contact";

export default function Home() {
    return (
        <div className="relative min-h-screen w-full bg-[#030712] flex flex-col px-6 md:px-24 lg:px-32">
            <Background />

            {/* Mobile Navbar - Only visible on small screens */}
            <div className="lg:hidden pt-10 flex  top-10 justify-end z-50">
                <Navbar />
            </div>

            <main className="flex-1 flex flex-col items-center">
                <section id="home" className="min-h-screen flex items-center justify-center">
                    <Hero />
                </section>
                <About />
                <Projects />
                <Contact />
            </main>

            <SocialLinks />
        </div>
    );
}
