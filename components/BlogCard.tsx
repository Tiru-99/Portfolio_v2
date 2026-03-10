'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface BlogCardProps {
    title: string
    description: string
    date: string
    slug: string
    coverImage?: string
    isLightMode?: boolean
}

const CHILD_VARIANTS = {
    hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5 } },
};

export default function BlogCard({ title, description, date, slug, coverImage, isLightMode = false }: BlogCardProps) {
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
            className={`group relative max-w-sm h-full rounded-2xl border transition-all duration-500 hover:-translate-y-1 ${isLightMode ? 'bg-black/5 border-black/5 hover:border-black/10' : 'bg-white/5 border-white/5 hover:border-white/10'}`}
        >
            {/* cover image */}
            <div className={`relative h-48 w-full overflow-hidden ${isLightMode ? 'bg-black/5' : 'bg-black/50'}`}>
                {coverImage ? (
                    <Image
                        src={coverImage}
                        alt={title}
                        fill
                        className={`object-cover transition-all duration-700 group-hover:scale-105 ${isLightMode ? 'opacity-90 group-hover:opacity-100' : 'opacity-80 group-hover:opacity-100 grayscale group-hover:grayscale-0'}`}
                    />
                ) : (
                    <div className="w-full h-full bg-linear-to-br from-blue-500/20 to-purple-500/20" />
                )}
            </div>

            {/* content */}
            <div className="p-6 relative">
                <motion.div variants={CHILD_VARIANTS} className="flex items-center gap-2 mb-2">
                    <span className={`text-[10px] uppercase tracking-widest font-medium font-mono ${isLightMode ? 'text-black/40' : 'text-white/30'}`}>
                        {date}
                    </span>
                </motion.div>

                <motion.h3 variants={CHILD_VARIANTS} className={`text-2xl font-instrument mb-2 truncate ${isLightMode ? 'text-black' : 'text-white/90'}`}>
                    {title}
                </motion.h3>

                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
                        show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } },
                    }}
                    className={`text-sm font-hanken leading-relaxed mb-6 line-clamp-2 ${isLightMode ? 'text-black/60' : 'text-white/40'}`}
                >
                    {description}
                </motion.p>

                {/* View Post Button */}
                <motion.div variants={CHILD_VARIANTS} className="flex items-center justify-between mt-4">
                    <Link
                        href={`/blogs/${slug}`}
                        className={`inline-flex items-center gap-2 text-xs font-medium transition-colors group/link ${isLightMode ? 'text-black/50 hover:text-black' : 'text-white/50 hover:text-white'}`}
                    >
                        Read Full Post
                        <ArrowRight
                            size={12}
                            className="transition-transform group-hover/link:translate-x-1"
                        />
                    </Link>

                    <div className={`px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider backdrop-blur-md border ${isLightMode ? 'border-black/10 bg-black/5 text-black/60' : 'border-white/5 bg-white/5 text-white/40'}`}>
                        Article
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}
