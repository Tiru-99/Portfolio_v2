'use client'

import { useState } from 'react'
import TableOfContents from './TableOfContents'
import BlogThemeWrapper from './BlogThemeWrapper'
import Image from 'next/image'
import BlogNavbar from './BlogNavbar'
import { performThemeTransition } from '@/lib/theme-utils'

interface BlogPageClientProps {
    post: any
    slug: string
    headings: any
    children: React.ReactNode
}

export default function BlogPageClient({ post, slug, headings, children }: BlogPageClientProps) {
    const [isLightMode, setIsLightMode] = useState(false)

    const handleThemeToggle = (event: React.MouseEvent) => {
        performThemeTransition(event, isLightMode, () => setIsLightMode(!isLightMode));
    }

    return (
        <div className={`transition-colors duration-500 min-h-screen ${isLightMode ? 'bg-[#FDFBF7] text-[#111]' : 'bg-[#0a0a0a] text-[#eee]'}`}>
            <div className="max-w-full mx-auto px-6 sm:px-12">
                <BlogNavbar isLightMode={isLightMode} setIsLightMode={handleThemeToggle as any} />

                <div className="flex flex-col lg:flex-row gap-6">
                    {/* TOC Sidebar */}
                    <aside className="hidden lg:block w-72 shrink-0 sticky top-32 h-fit pt-4">
                        <TableOfContents headings={headings} isLightMode={isLightMode} />
                    </aside>

                    {/* Blog Content */}
                    <main className="flex-1 max-w-full">
                        <BlogThemeWrapper
                            title={post.title}
                            date={post.date}
                            slug={slug}
                            isLightMode={isLightMode}
                        >
                            {post.coverImage && (
                                <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-12 border border-white/10">
                                    <Image
                                        src={post.coverImage}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            )}
                            {children}
                        </BlogThemeWrapper>
                    </main>
                </div>
            </div>
        </div>
    )
}
