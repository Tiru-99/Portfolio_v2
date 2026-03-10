'use client'

import { motion } from 'framer-motion'
import { Home, ArrowLeft, Moon, Sun } from 'lucide-react'
import Link from 'next/link'

const FADE_UP = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } },
};

interface BlogNavbarProps {
    isLightMode: boolean
    setIsLightMode: (val: boolean) => void
}

export default function BlogNavbar({ isLightMode, setIsLightMode }: BlogNavbarProps) {
    return (
        <div className="sticky top-0 z-50 -mx-6 sm:-mx-12 px-6 sm:px-12 mb-8 pointer-events-none">
            <div className={`absolute inset-0 backdrop-blur-md mask-[linear-gradient(to_bottom,black_80%,transparent)] ${isLightMode ? 'bg-[#fefefe]/80' : 'bg-[#0a0a0a]/80'}`} />
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
    )
}