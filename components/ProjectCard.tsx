import Image from "next/image"
import { Globe, Github, ArrowRight } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  isLive: boolean
  slug?: string
}

export default function ProjectCard({
  title,
  description,
  image,
  isLive,
  slug
}: ProjectCardProps) {
  return (
    <div className="group relative max-w-sm rounded-2xl bg-white/5 border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-500 hover:-translate-y-1">

      {/* Image Area*/}
      <div className="relative h-48 w-full overflow-hidden bg-black/50">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
        />


        {/* Floating Actions (Visible on Hover) */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          {isLive && (
            <a href="#" className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors border border-white/10">
              <Globe size={14} />
            </a>
          )}
          <a href="#" className="p-2 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors border border-white/10">
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
          {["Next.js", "TypeScript", "Tailwind"].map((tech, i) => (
            <span key={tech} className="text-[10px] uppercase tracking-widest text-white/30 font-medium">
              {tech} {i < 2 && "•"}
            </span>
          ))}
        </div>

        {/* View Details Button */}
        {slug && (
          <Link
            href={`/project/${slug}`}
            className="inline-flex items-center gap-2 text-xs font-medium text-white/50 hover:text-white transition-colors group/link"
          >
            View Details
            <ArrowRight size={12} className="transition-transform group-hover/link:translate-x-1" />
          </Link>
        )}
      </div>
    </div>
  )
}
