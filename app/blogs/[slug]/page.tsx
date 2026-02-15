import { getBlogBySlug } from '@/lib/mdx'
import { notFound } from 'next/navigation'
import BlogThemeWrapper from '@/components/BlogThemeWrapper'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { components } from '@/components/MDXComponents'
import Image from 'next/image'
import rehypeHighlight from 'rehype-highlight'

interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params
    const post = getBlogBySlug(slug)

    if (!post) {
        notFound()
    }

    return (
        <BlogThemeWrapper title={post.title} date={post.date} slug={slug}>
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
            <MDXRemote
                source={post.content}
                components={components}
                options={{
                    mdxOptions: {
                        rehypePlugins: [rehypeHighlight],
                    },
                }}
            />
        </BlogThemeWrapper>
    )
}
