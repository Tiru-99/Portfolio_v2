'use client'

import { useState, useEffect } from 'react'
import { Sun, Moon, ArrowLeft, Home, Eye, ThumbsUp } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import axios from 'axios'

interface BlogThemeWrapperProps {
    children: React.ReactNode
    title: string
    date: string
    slug: string
}

const FADE_UP = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } },
};

export default function BlogThemeWrapper({ children, title, date, slug }: BlogThemeWrapperProps) {
    const [isLightMode, setIsLightMode] = useState(false)
    const [views, setViews] = useState<number | null>(null)
    const [likes, setLikes] = useState<number | null>(null)
    const [hasLiked, setHasLiked] = useState(false)
    const [isLiking, setIsLiking] = useState(false)

    useEffect(() => {
        // Fetch and increment views
        const fetchViews = async () => {
            try {
                const res = await axios.get(`/api/blogs/${slug}/views`)
                setViews(res.data.views)
            } catch (err) {
                console.error("Failed to fetch views", err)
            }
        }

        // Fetch likes
        const fetchLikes = async () => {
            try {
                const res = await axios.get(`/api/blogs/${slug}/likes`)
                setLikes(res.data.likes)
                setHasLiked(res.data.hasLiked)
            } catch (err) {
                console.error("Failed to fetch likes", err)
            }
        }

        fetchViews()
        fetchLikes()
    }, [slug])

    const handleLike = async () => {
        if (isLiking || hasLiked) return
        setIsLiking(true)
        try {
            const res = await axios.post(`/api/blogs/${slug}/likes`)
            setLikes(res.data.likes)
            setHasLiked(res.data.hasLiked)
        } catch (err) {
            console.error("Failed to like post", err)
        } finally {
            setIsLiking(false)
        }
    }

    return (
        <main className={`min-h-screen transition-colors duration-500 ${isLightMode ? 'bg-[#fefefe] text-[#111] light-mode-blog' : 'bg-[#0a0a0a] text-[#eee]'}`}>
            <div className="max-w-4xl mx-auto">
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
                    className="mx-auto pt-12 pb-20 px-6 sm:px-12 font-hanken"
                >
                    {/* Navigation */}
                    <div className="sticky top-0 z-50 -mx-6 sm:-mx-12 px-6 sm:px-12 mb-8 pointer-events-none">
                        <div className={`absolute inset-0 backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_80%,transparent)] ${isLightMode ? 'bg-[#fefefe]/80' : 'bg-[#0a0a0a]/80'}`} />
                        <motion.div
                            variants={FADE_UP}
                            className="relative flex items-center justify-between py-6 pointer-events-auto"
                        >
                            <div className="flex items-center gap-2">
                                <Link
                                    href="/"
                                    className={`group flex items-center gap-0 hover:gap-2 border px-3 py-2 rounded-full transition-all duration-700 ease-in-out overflow-hidden ${isLightMode ? 'bg-black/5 border-black/10' : 'bg-white/5 border-white/10'}`}
                                >
                                    <Home size={18} className={`${isLightMode ? 'text-black/70 group-hover:text-black' : 'text-white/70 group-hover:text-white'}`} />
                                    <span className={`max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap text-sm uppercase tracking-wider font-medium transition-all duration-700 ease-in-out ${isLightMode ? 'text-black/70 group-hover:text-black' : 'text-white/70 group-hover:text-white'}`}>
                                        Home
                                    </span>
                                </Link>
                                <Link
                                    href="/blogs"
                                    className={`group flex items-center gap-0 hover:gap-2 border px-3 py-2 rounded-full transition-all duration-700 ease-in-out overflow-hidden ${isLightMode ? 'bg-black/5 border-black/10' : 'bg-white/5 border-white/10'}`}
                                >
                                    <ArrowLeft size={18} className={`${isLightMode ? 'text-black/70 group-hover:text-black' : 'text-white/70 group-hover:text-white'}`} />
                                    <span className={`max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap text-sm uppercase tracking-wider font-medium transition-all duration-700 ease-in-out ${isLightMode ? 'text-black/70 group-hover:text-black' : 'text-white/70 group-hover:text-white'}`}>
                                        Blogs
                                    </span>
                                </Link>
                            </div>

                            <button
                                onClick={() => setIsLightMode(!isLightMode)}
                                className={`p-3 rounded-full hover:cursor-pointer transition-colors ${isLightMode ? 'bg-black/5 hover:bg-black/10 text-black' : 'bg-white/5 hover:bg-white/10 text-white'}`}
                                title={isLightMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
                            >
                                {isLightMode ? <Moon size={20} /> : <Sun size={20} />}
                            </button>
                        </motion.div>
                    </div>

                    {/* Blog Header */}
                    <div className="mb-16 md:mb-2 text-center md:text-left">
                        <motion.div variants={FADE_UP} className={`text-[13px] font-mono mb-3 uppercase tracking-[0.3em] ${isLightMode ? 'text-black/40' : 'text-white/40'}`}>
                            {date}
                        </motion.div>
                        <motion.h1
                            variants={FADE_UP}
                            className={`text-5xl sm:text-7xl font-instrument italic leading-[1.1] mb-8 tracking-tight ${isLightMode ? 'text-black' : 'text-white'}`}
                        >
                            {title}
                        </motion.h1>

                        {/* Stats Section */}
                        <motion.div variants={FADE_UP} className="flex items-center gap-6 mb-12 justify-center md:justify-start">
                            <div className={`flex items-center gap-2 text-sm font-mono ${isLightMode ? 'text-black/60' : 'text-white/60'}`}>
                                <Eye size={18} className="opacity-80" />
                                <span>{views !== null ? views : '...'} views</span>
                            </div>
                            <button
                                onClick={handleLike}
                                disabled={isLiking || hasLiked}
                                className={`flex items-center gap-2 text-sm font-mono transition-all duration-300 ${isLiking ? 'opacity-50' : ''} ${hasLiked ? (isLightMode ? 'text-blue-600' : 'text-blue-400') : (isLightMode ? 'text-black/60 hover:text-blue-600 hover:cursor-pointer' : 'text-white/60 hover:text-blue-400 hover:cursor-pointer')}`}
                            >
                                <ThumbsUp size={18} fill={hasLiked ? "currentColor" : "none"} className={`transition-transform duration-300 ${hasLiked ? "scale-110" : "hover:scale-110"}`} />
                                <span>{likes !== null ? likes : '...'} likes</span>
                            </button>
                        </motion.div>
                    </div>

                    {/* Content Wrapper */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 10, filter: "blur(10px)" },
                            show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8 } },
                        }}
                        className={`blog-content font-hanken  ${isLightMode ? 'prose-light' : 'prose-dark'}`}
                    >
                        {children}
                    </motion.div>
                </motion.div>
            </div>
        </main>
    )
}
