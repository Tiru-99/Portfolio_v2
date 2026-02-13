"use client";

import { notFound } from "next/navigation";
import Container from "../../../components/Container";
import { projects, Project } from "../../../data/projects";
import Image from "next/image";
import { ArrowLeft, ExternalLink, Github, Home } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

interface PageProps {
    params: Promise<{ slug: string }>;
}

const FADE_UP = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } },
};

export default function ProjectDetailPage({ params }: PageProps) {
    const { slug } = React.use(params);
    const lowerCaseSlug = slug.toLowerCase();
    const project = projects.find((p: Project) => p.slug === lowerCaseSlug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen">
            <Container className="max-w-3xl">
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
                    className="mx-auto pt-12 pb-20 px-12 font-hanken"
                >
                    {/* Navigation */}
                    <motion.div variants={FADE_UP} className="flex items-center gap-2 mb-12">
                        <Link
                            href="/"
                            className="group flex items-center gap-0 hover:gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-2 rounded-full transition-all duration-700 ease-in-out overflow-hidden"
                        >
                            <Home size={18} className="text-white/70 group-hover:text-white transition-colors" />
                            <span className="max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap text-sm text-white/70 group-hover:text-white transition-all duration-700 ease-in-out uppercase tracking-wider font-medium">
                                Back to Home
                            </span>
                        </Link>
                        <Link
                            href="/projects"
                            className="group flex items-center gap-0 hover:gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-2 rounded-full transition-all duration-700 ease-in-out overflow-hidden"
                        >
                            <ArrowLeft size={18} className="text-white/70 group-hover:text-white transition-colors" />
                            <span className="max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap text-sm text-white/70 group-hover:text-white transition-all duration-700 ease-in-out uppercase tracking-wider font-medium">
                                Back to Projects
                            </span>
                        </Link>
                    </motion.div>

                    {/* Project Header with Tech Stack */}
                    <div className="mb-8">
                        <motion.h1 variants={FADE_UP} className="text-5xl font-instrument text-white mb-6">{project.title}</motion.h1>

                        {/* Tech Stack Badges */}
                        <motion.div variants={FADE_UP} className="flex flex-wrap gap-2 mb-6">
                            {project.techStack.map((tech: string) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 rounded-md bg-white/10 border border-white/20 text-xs text-white/80 font-medium"
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>

                        {/* External Links */}
                        <motion.div variants={FADE_UP} className="flex gap-3 mb-8">
                            { project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                                >
                                    <ExternalLink size={16} />
                                    <span>Live Demo</span>
                                </a>
                            )}

                            {project.repoUrl && (
                                <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                                >
                                    <Github size={16} />
                                    <span>View Source</span>
                                </a>
                            )}

                            {/* ✅ Demo Video Link */}
                            {project.demoUrl && (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                                >
                                    <ExternalLink size={16} />
                                    <span>Watch Demo</span>
                                </a>
                            )}
                        </motion.div>
                    </div>

                    {/* Project Image */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, scale: 0.98, filter: "blur(8px)" },
                            show: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.8 } },
                        }}
                        className="relative w-full aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 mb-12 border border-white/10"
                    >
                        <Image
                            src={project.productImage}
                            alt={project.title}
                            fill
                            className="object-contain"
                        />
                    </motion.div>

                    {/* Description */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 10, filter: "blur(10px)" },
                            show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8 } },
                        }}
                        className="mb-12"
                    >
                        <p className="text-base text-white/60 font-hanken leading-relaxed">
                            {project.fullDescription || project.description}
                        </p>
                    </motion.div>

                    {/* Features */}
                    {project.features && project.features.length > 0 && (
                        <motion.div variants={FADE_UP} className="mb-12">
                            <h2 className="text-xl font-instrument text-white mb-4">Key Features</h2>
                            <ul className="space-y-2">
                                {project.features.map((feature: string, index: number) => (
                                    <li
                                        key={index}
                                        className="text-white/60 text-sm font-hanken flex items-start gap-3"
                                    >
                                        <span className="text-white/40 mt-1">•</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </motion.div>
            </Container>
        </div>
    );
}
