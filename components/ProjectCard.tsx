import Image from "next/image"
import { Globe, Github } from "lucide-react"



interface ProjectCardProps {
  title: string
  description: string
  image: string
  isLive: boolean 
}

export default function ProjectCard({
  title,
  description,
  image, 
  isLive
}: ProjectCardProps) {
  return (
    <div className="group max-w-sm rounded-2xl bg-neutral-900/80 border border-white/10 overflow-hidden shadow-lg hover:border-white/20 transition">
      
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        
        {/* Title + Actions */}
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <div className="flex gap-3 text-neutral-400">
            <Globe size={18} className="hover:text-white cursor-pointer" />
            {isLive && <Github size={18} className="hover:text-white cursor-pointer" />}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-neutral-400 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex items-center gap-3 text-neutral-300">
          <span className="h-8 w-8 rounded-full bg-black flex items-center justify-center text-sm font-semibold">
            N
          </span>
          <span className="text-blue-500 font-semibold">TS</span>
          <span className="text-cyan-400">⚛</span>
          <span className="text-green-500">▲</span>
          <span className="text-emerald-500">🍃</span>
          <span className="text-sky-400">〰</span>
        </div>

        {/* Footer */}
        {/*<div className="flex items-center justify-between pt-3">
          <div className="flex items-center gap-2 text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            End to End Built
          </div>

          <button className="text-sm text-neutral-300 hover:text-white transition flex items-center gap-1">
            View Details <span>→</span>
          </button>
        </div>*/}
      </div>
    </div>
  )
}
