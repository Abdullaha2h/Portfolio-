"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Linkedin, Github, Loader2 } from "lucide-react";

export const Contact = () => {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-Type": "application/json" },
            });

            const result = await res.json();
            if (!res.ok) throw new Error(result.error || "Something went wrong");

            setStatus("success");
            (e.target as HTMLFormElement).reset();
        } catch (err: any) {
            setStatus("error");
            setErrorMessage(err.message);
        }
    }

    return (
        <section id="contact" className="relative w-full max-w-4xl mx-auto py-24 px-6 md:px-12 lg:px-16">
            <div className="flex flex-col items-center mb-16 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-100 mb-4 uppercase"
                >
                    Let&apos;s work together...
                </motion.h2>
                <div className="w-12 h-1 bg-slate-500/50 rounded-full mb-8" />
                <p className="text-slate-400 max-w-2xl text-sm md:text-base leading-relaxed">
                    Feel free to Contact me by submitting the form below and I will get back to you as soon as possible.
                </p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-slate-900/40 border border-slate-100/10 p-4 md:p-6 rounded-3xl backdrop-blur-xl shadow-2xl"
            >
                <form onSubmit={handleSubmit} className="space-y-2">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-bold tracking-widest text-slate-300 uppercase ml-1 p-2">Name</label>
                        <input
                            required
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter Your Name"
                            className="w-full bg-slate-950/50 border border-slate-100/10 rounded-xl px-2 py-2 text-slate-100 placeholder:text-slate-600 outline-none focus:border-slate-100/30 transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-bold tracking-widest text-slate-300 uppercase ml-1 p-2">Email</label>
                        <input
                            required
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Your Email"
                            className="w-full bg-slate-950/50 border border-slate-100/10 rounded-xl px-2 py-2 text-slate-100 placeholder:text-slate-600 outline-none focus:border-slate-100/30 transition-all"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-xs font-bold tracking-widest text-slate-300 uppercase p-2 ml-1">Message</label>
                        <textarea
                            required
                            id="message"
                            name="message"
                            rows={2}
                            placeholder="Enter Your Message"
                            className="w-full bg-slate-950/50 border border-slate-100/10 rounded-xl px-2 py-2 text-slate-100 placeholder:text-slate-600 outline-none focus:border-slate-100/30 transition-all resize-none"
                        />
                    </div>

                    <div className="pt-4 flex flex-col items-center gap-6">
                        <button
                            disabled={status === "loading"}
                            type="submit"
                            className="w-full md:w-auto px-6 py-2 bg-slate-100 text-slate-950 rounded-xl font-bold text-lg hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {status === "loading" ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} /> Sending...
                                </>
                            ) : "Send Message"}
                        </button>

                        {status === "success" && (
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-emerald-400 font-medium">
                                Message sent successfully! I&apos;ll get back to you soon.
                            </motion.p>
                        )}

                        {status === "error" && (
                            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 font-medium">
                                {errorMessage}
                            </motion.p>
                        )}
                    </div>
                </form>
            </motion.div>

            <div className="flex justify-center gap-8 mt-16">
                <a href="https://linkedin.com/in/muhammad-abdullah-08879822a/" target="_blank" className="text-slate-500 hover:text-slate-100 transition-colors">
                    <Linkedin size={24} />
                </a>
                <a href="https://github.com/Abdullaha2h" target="_blank" className="text-slate-500 hover:text-slate-100 transition-colors">
                    <Github size={24} />
                </a>
                <a href="mailto:abdullaha2hh2a@gmail.com" className="text-slate-500 hover:text-slate-100 transition-colors">
                    <Mail size={24} />
                </a>
            </div>
        </section>
    );
};
