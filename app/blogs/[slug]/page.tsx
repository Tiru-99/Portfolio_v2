import { getBlogBySlug } from '@/lib/mdx';
import { mdxComponents } from '@/components/blog/Mdx-components';
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'
import BlogPageClient from '@/components/blog/BlogPageClient'
import { getHeadings } from '@/lib/getHeadings'

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getBlogBySlug(slug)

  if (!post) {
    notFound()
  }

  const headings = getHeadings(post.content);

  return (
    <BlogPageClient post={post} slug={slug} headings={headings}>
      <MDXRemote
        source={post.content}
        components={mdxComponents}
        options={{
          mdxOptions: {
            rehypePlugins: [rehypeHighlight],
          },
        }}
      />
    </BlogPageClient>
  )
}
