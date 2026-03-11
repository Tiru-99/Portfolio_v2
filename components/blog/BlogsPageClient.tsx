'use client'

import BlogsList from '@/components/blog/BlogsList'
import Container from '@/components/ui/Container'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface BlogsPageClientProps {
    blogs: any[]
}

export default function BlogsPageClient({ blogs }: BlogsPageClientProps) {
    // Always dark mode on listing page for simplicity, as theme toggle is removed
    const isLightMode = false

    return (
        <div className="bg-[#0a0a0a] text-[#eee] min-h-screen">
            <Container className="max-w-4xl min-h-screen">
                <div className="mx-auto font-hanken pb-20 px-6 sm:px-2">
                    <Link
                        href="/"
                        className="flex items-center gap-2 m-4 text-sm text-white/50 hover:text-white transition-colors mb-8 group px-4"
                    >
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    <div className="text-center mb-16">
                        <p className="text-xs font-hanken mb-2 tracking-[0.2em] text-white/50">WRITING</p>
                        <h1 className="text-center text-5xl font-instrument mb-4 italic text-white">Thoughts & Journals</h1>
                        <p className="text-sm font-hanken max-w-lg mx-auto text-white/40">
                            A collection of technical articles, engineering journals, and personal reflections on software development.
                        </p>
                        <div className="mt-6 flex items-center justify-center gap-2 text-[10px] tracking-[0.2em] uppercase cursor-default select-none text-white/20">
                            <div className="h-px w-8 bg-white/10" />
                            <span>Deep dives into the architecture of scalable systems</span>
                            <div className="h-px w-8 bg-white/10" />
                        </div>
                    </div>

                    <BlogsList blogs={blogs} />
                </div>
            </Container>
        </div>
    )
}
