'use client'

import { useState } from 'react'
import BlogsList from '@/components/BlogsList'
import Container from '@/components/Container'
import BlogNavbar from '@/components/BlogNavbar'
import { performThemeTransition } from '@/lib/theme-utils'

interface BlogsPageClientProps {
    blogs: any[]
}

export default function BlogsPageClient({ blogs }: BlogsPageClientProps) {
    const [isLightMode, setIsLightMode] = useState(false)

    const handleThemeToggle = (event: React.MouseEvent) => {
        performThemeTransition(event, isLightMode, () => setIsLightMode(!isLightMode));
    }

    return (
        <div className={`transition-colors duration-500 min-h-screen ${isLightMode ? 'bg-[#FDFBF7] text-[#111]' : 'bg-[#0a0a0a] text-[#eee]'}`}>
            <Container className="max-w-4xl min-h-screen">
                <div className="mx-auto font-hanken pb-20 px-6 sm:px-12">
                    <BlogNavbar isLightMode={isLightMode} setIsLightMode={handleThemeToggle as any} />

                    <div className="text-center mb-16 pt-12">
                        <p className={`text-xs font-hanken mb-2 tracking-[0.2em] ${isLightMode ? 'text-black/50' : 'text-white/50'}`}>WRITING</p>
                        <h1 className={`text-center text-5xl font-instrument mb-4 italic ${isLightMode ? 'text-black' : 'text-white'}`}>Thoughts & Journals</h1>
                        <p className={`text-sm font-hanken max-w-lg mx-auto ${isLightMode ? 'text-black/60' : 'text-white/40'}`}>
                            A collection of technical articles, engineering journals, and personal reflections on software development.
                        </p>
                        <div className={`mt-6 flex items-center justify-center gap-2 text-[10px] tracking-[0.2em] uppercase cursor-default select-none ${isLightMode ? 'text-black/20' : 'text-white/20'}`}>
                            <div className={`h-px w-8 ${isLightMode ? 'bg-black/10' : 'bg-white/10'}`} />
                            <span>Deep dives into the architecture of scalable systems</span>
                            <div className={`h-px w-8 ${isLightMode ? 'bg-black/10' : 'bg-white/10'}`} />
                        </div>
                    </div>

                    <BlogsList blogs={blogs} isLightMode={isLightMode} />
                </div>
            </Container>
        </div>
    )
}
