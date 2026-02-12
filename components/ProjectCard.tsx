import Image from "next/image";
import { Globe, Github, ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  isLive: boolean;
  slug?: string;
  techStack: Array<string>;
  status: "completed" | "building";
}

export default function ProjectCard({
  title,
  description,
  image,
  isLive,
  slug,
  techStack,
  status,
}: ProjectCardProps) {
  console.log("The coming status is " , status); 
  return (
    <div className="group relative max-w-sm h-full rounded-2xl bg-white/5 border border-white/5 overflow-hidden hover:border-white/10 hover:cursor-pointer transition-all duration-500 hover:-translate-y-1">
      {/* Image Area*/}
      <div className="relative h-48 w-full overflow-hidden bg-black/50">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 grayscale transition-all duration-700 group-hover:grayscale-0"
        />

        {/* Floating Actions (Visible on Hover) */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          {isLive && (
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors border border-white/10"
            >
              <Globe size={14} />
            </a>
          )}
          <a
            href="#"
            className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors border border-white/10"
          >
            <Github size={14} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <h3 className="text-2xl font-instrument text-white/90 mb-2">{title}</h3>

        <p className="text-sm font-hanken text-white/40 leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        {/* Minimal Tech Stack */}
        <div className="flex flex-wrap gap-x-2 gap-y-1 mb-4">
          {techStack.map((tech, i) => (
            <span
              key={tech}
              className="text-[10px] uppercase tracking-widest text-white/30 font-medium"
            >
              {tech} {i < techStack.length - 1 && "•"}
            </span>
          ))}
        </div>

        {/* View Details Button */}
        {/* Bottom Row */}
        <div className="flex items-center justify-between mt-4">
          {slug && (
            <Link
              href={`/project/${slug}`}
              className="inline-flex items-center gap-2 text-xs font-medium text-white/50 hover:text-white transition-colors group/link"
            >
              View Details
              <ArrowRight
                size={12}
                className="transition-transform group-hover/link:translate-x-1"
              />
            </Link>
          )}

          {/* Status Badge */}
          <span
            className={`text-[10px] px-2 py-1 rounded-full font-medium uppercase tracking-wider border ${
              status === "completed"
                ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                : "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
            }`}
          >
            {status === "completed" ? "Completed" : "Building"}
          </span>
        </div>
      </div>
    </div>
  );
}
