"use client";

import { Background } from "@/components/Background";
import { Hero } from "@/components/Hero";
import { SocialLinks } from "@/components/SocialLinks";
import { Navbar } from "@/components/navbar";

export default function Home() {
    return (
        <div className="relative min-h-screen w-full bg-[#030712] flex flex-col px-6 md:px-24 lg:px-32">
            <Background />

            {/* Mobile Navbar - Only visible on small screens */}
            <div className="lg:hidden fixed top-6 right-6 z-50">
                <Navbar />
            </div>

            <main className="flex-1 flex flex-col justify-center items-center py-12 lg:py-0">
                <Hero />
            </main>

            <SocialLinks />
        </div>
    );
}
