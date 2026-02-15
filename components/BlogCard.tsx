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
}

const CHILD_VARIANTS = {
    hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5 } },
};

export default function BlogCard({ title, description, date, slug, coverImage }: BlogCardProps) {
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
            {/* cover image */}
            <div className="relative h-48 w-full overflow-hidden bg-black/50">
                {coverImage ? (
                    <Image
                        src={coverImage}
                        alt={title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 grayscale transition-all duration-700 group-hover:grayscale-0"
                    />
                ) : (
                    <div className="w-full h-full bg-linear-to-br from-blue-500/20 to-purple-500/20" />
                )}
            </div>

            {/* content */}
            <div className="p-6 relative">
                <motion.div variants={CHILD_VARIANTS} className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] uppercase tracking-widest text-white/30 font-medium font-mono">
                        {date}
                    </span>
                </motion.div>

                <motion.h3 variants={CHILD_VARIANTS} className="text-2xl font-instrument text-white/90 mb-2 truncate">
                    {title}
                </motion.h3>

                <motion.p
                    variants={{
                        hidden: { opacity: 0, y: 10, filter: "blur(8px)" },
                        show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } },
                    }}
                    className="text-sm font-hanken text-white/40 leading-relaxed mb-6 line-clamp-2"
                >
                    {description}
                </motion.p>

                {/* View Post Button */}
                <motion.div variants={CHILD_VARIANTS} className="flex items-center justify-between mt-4">
                    <Link
                        href={`/blogs/${slug}`}
                        className="inline-flex items-center gap-2 text-xs font-medium text-white/50 hover:text-white transition-colors group/link"
                    >
                        Read Full Post
                        <ArrowRight
                            size={12}
                            className="transition-transform group-hover/link:translate-x-1"
                        />
                    </Link>

                    <div className="px-2.5 py-1 rounded-full text-[10px] font-medium uppercase tracking-wider border border-white/5 bg-white/5 text-white/40 backdrop-blur-md">
                        Article
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}
