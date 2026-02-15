'use client'

import { motion } from 'framer-motion'
import BlogCard from '@/components/BlogCard'

interface BlogsListProps {
    blogs: any[]
}

const FADE_UP_VARIANTS = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5 } },
};

export default function BlogsList({ blogs }: BlogsListProps) {
    return (
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
                {blogs.map((blog) => (
                    <motion.div
                        key={blog.slug}
                        variants={{
                            hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                            show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5 } }
                        }}
                    >
                        <BlogCard
                            title={blog.title}
                            description={blog.description}
                            date={blog.date}
                            slug={blog.slug}
                            coverImage={blog.coverImage}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}
