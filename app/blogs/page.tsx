import { getAllBlogs } from '@/lib/mdx'
import BlogsPageClient from '@/components/blog/BlogsPageClient'

export default function BlogsPage() {
  const blogs = getAllBlogs()

  return <BlogsPageClient blogs={blogs} />
}
