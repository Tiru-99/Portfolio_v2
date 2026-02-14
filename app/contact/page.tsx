"use client";

import Container from "../../components/Container";
import { ShootingStars } from "../../components/ShootingStars";
import { StarField } from "../../components/StarField";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const FADE_UP_VARIANTS = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5 } },
};

const CONTACTS = [
    {
        name: "Email",
        value: "aayushtirmanwar1234@gmail.com",
        href: "mailto:aayushtirmanwar1234@gmail.com",
        icon: MdOutlineEmail,
        color: "hover:text-blue-400",
    },
    {
        name: "GitHub",
        value: "@tiru-99",
        href: "https://github.com/tiru-99",
        icon: SiGithub,
        color: "hover:text-gray-400",
    },
    {
        name: "LinkedIn",
        value: "Aayush Tirmanwar",
        href: "https://www.linkedin.com/in/aayush-tirmanwar-b81a62261/",
        icon: SiLinkedin,
        color: "hover:text-blue-600",
    },
    {
        name: "X (Twitter)",
        value: "@tiru299",
        href: "https://x.com/tiru299",
        icon: SiX,
        color: "hover:text-sky-400",
    },
];

export default function ContactPage() {
    return (
        <div className="relative min-h-screen overflow-hidden selection:bg-white/10 selection:text-white">
            <Container className="relative z-10 max-w-4xl pt-20 pb-32">
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    className="mx-auto px-12 md:px-20"
                >
                    
                    <motion.div variants={FADE_UP_VARIANTS}>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 mb-12 text-sm text-white/50 hover:text-white transition-colors group"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </Link>
                    </motion.div>

                    
                    <div className="mb-20">
                        <motion.p variants={FADE_UP_VARIANTS} className="text-xs font-hanken text-white/50 mb-2 tracking-[0.2em] uppercase">
                            REACH OUT
                        </motion.p>
                        <motion.h1 variants={FADE_UP_VARIANTS} className="text-5xl md:text-6xl text-white font-instrument mb-6 italic">
                            Let&apos;s build something <br />
                            <span className="text-white/60">extraordinary together.</span>
                        </motion.h1>
                        <motion.p variants={FADE_UP_VARIANTS} className="text-base font-hanken text-white/40 max-w-xl leading-relaxed">
                            Feel free to reach out to me on any of my socials or send an email directly.
                            I&apos;m always open to discussing new projects, creative ideas, or being part of your visions.
                        </motion.p>
                    </div>

                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {CONTACTS.map((contact, idx) => (
                            <motion.a
                                key={contact.name}
                                href={contact.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                variants={FADE_UP_VARIANTS}
                                className="group relative p-8 rounded-3xl bg-white/5 border border-white/5 overflow-hidden transition-all duration-500 hover:border-white/10 hover:bg-white/[0.07]"
                            >
                                <div className="flex justify-between items-start relative z-10">
                                    <div className="space-y-4">
                                        <contact.icon className={`w-6 h-6 text-white/50 transition-colors duration-500 group-hover:text-white group-hover:scale-110`} />
                                        <div>
                                            <h3 className="text-sm font-hanken text-white/30 uppercase tracking-widest">{contact.name}</h3>
                                            <p className="text-lg font-instrument text-white/90">{contact.value}</p>
                                        </div>
                                    </div>
                                    <ArrowUpRight size={20} className="text-white/20 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                                </div>

                                {/* Subtle Gradient Hover */}
                                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            </motion.a>
                        ))}
                    </div>

                    
                    <motion.div
                        variants={FADE_UP_VARIANTS}
                        className="mt-20 flex items-center justify-center gap-2 text-[10px] tracking-[0.3em] uppercase text-white/20 select-none"
                    >
                        <div className="h-px w-12 bg-white/10" />
                        <span>Always online, mostly building</span>
                        <div className="h-px w-12 bg-white/10" />
                    </motion.div>
                </motion.div>
            </Container>
        </div>
    );
}
