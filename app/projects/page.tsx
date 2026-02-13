"use client"
import Container from "../../components/Container";
import ProjectCard from "../../components/ProjectCard";
import { projects, Project } from "../../data/projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { motion } from "framer-motion";

const FADE_UP_VARIANTS = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5 } },
};

export default function ProjectsPage() {
  return (
    <div className=" min-h-screen">
      <Container className="max-w-4xl">
        <div className="mx-auto font-hanken pb-20">
          {/* Back to Home Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 m-4 text-sm text-white/50 hover:text-white transition-colors mb-8 group px-4"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

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
            className="text-center mb-16"
          >
            <motion.p variants={FADE_UP_VARIANTS} className="text-xs font-hanken text-white/50 mb-2">PORTFOLIO</motion.p>
            <motion.h1 variants={FADE_UP_VARIANTS} className="text-center text-5xl text-white font-instrument mb-4">All Projects</motion.h1>
            <motion.p variants={FADE_UP_VARIANTS} className="text-sm font-hanken text-white/40 max-w-lg mx-auto">
              A collection of my work, ranging from web applications to AI experiments.
            </motion.p>
            <motion.div
              variants={FADE_UP_VARIANTS}
              className="mt-6 flex items-center justify-center gap-2 text-[10px] tracking-[0.2em] uppercase text-white/20 hover:cursor-pointer hover:text-white/40 transition-colors duration-500 cursor-default select-none"
            >
              <div className="h-px w-8 bg-white/10" />
              <span>More than visuals : each image reflects an emotion and intention from the journey</span>
              <div className="h-px w-8 bg-white/10" />
            </motion.div>
          </motion.div>

          <div className="max-w-3xl mx-auto px-4">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center"
            >
              {projects.map((project: Project) => (
                <motion.div
                  key={project.id}
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5 } }
                  }}
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    liveLink={project.liveUrl}
                    githubLink={project.repoUrl}
                    slug={project.slug}
                    techStack={project.techStack}
                    status={project.status}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
}
