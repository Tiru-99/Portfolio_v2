import Image from "next/image";
import { Globe, Github, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  liveLink?: string;
  githubLink?: string;
  slug?: string;
  techStack: Array<string>;
  status: "completed" | "building";
}

const CHILD_VARIANTS = {
  hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5 } },
};

export default function ProjectCard({
  title,
  description,
  image,
  liveLink,
  githubLink,
  slug,
  techStack,
  status,
}: ProjectCardProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className="group relative max-w-sm h-full rounded-2xl bg-white/5 border border-white/5 overflow-hidden hover:border-white/10 hover:cursor-pointer transition-all duration-500 hover:-translate-y-1"
    >
      {/* image */}
      <div className="relative h-48 w-full overflow-hidden bg-black/50">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 grayscale transition-all duration-700 group-hover:grayscale-0"
        />

        {/* Floating Actions */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Globe size={14} />
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Github size={14} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <motion.h3 variants={CHILD_VARIANTS} className="text-2xl font-instrument text-white/90 mb-2">{title}</motion.h3>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
            show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } },
          }}
          className="text-sm font-hanken text-white/40 leading-relaxed mb-6 line-clamp-3"
        >
          {description}
        </motion.p>

        {/* Minimal Tech Stack */}
        <motion.div variants={CHILD_VARIANTS} className="flex flex-wrap gap-x-2 gap-y-1 mb-4">
          {techStack.map((tech, i) => (
            <span
              key={tech}
              className="text-[10px] uppercase tracking-widest text-white/30 font-medium"
            >
              {tech} {i < techStack.length - 1 && "•"}
            </span>
          ))}
        </motion.div>

        {/* View Details Button */}
        {/* Bottom Row */}
        <motion.div variants={CHILD_VARIANTS} className="flex items-center justify-between mt-4">
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
          <div className={cn(
            "flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider border backdrop-blur-md transition-all duration-300",
            status === "completed"
              ? "bg-emerald-500/5 text-emerald-400/90 border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.05)]"
              : "bg-amber-500/5 text-amber-400/90 border-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.05)]"
          )}>
            <span className={cn(
              "w-1 h-1 rounded-full",
              status === "completed" ? "bg-emerald-400" : "bg-amber-400 animate-pulse"
            )} />
            {status === "completed" ? "Completed" : "Building"}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
