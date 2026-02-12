"use client"
import Container from "../../components/Container";
import ProjectCard from "../../components/ProjectCard";
import { projects, Project } from "../../data/projects";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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

          <div className="text-center mb-16">
            <p className="text-xs font-hanken text-white/50 mb-2">PORTFOLIO</p>
            <h1 className="text-center text-5xl text-white font-instrument mb-4">All Projects</h1>
            <p className="text-sm font-hanken text-white/40 max-w-lg mx-auto">
              A collection of my work, ranging from web applications to mobile apps and AI experiments.
            </p>
          </div>

          <div className="max-w-3xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
              {projects.map((project: Project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  isLive={project.isLive}
                  slug={project.slug}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
