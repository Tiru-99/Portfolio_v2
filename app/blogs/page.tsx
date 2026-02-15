import { getAllBlogs } from '@/lib/mdx'
import BlogsList from '@/components/BlogsList'
import Container from '@/components/Container'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
// Keeping the header simple for SR and SEO, animations in client component
export default function BlogsPage() {
  const blogs = getAllBlogs()

  return (
    <div className="min-h-screen">
      <Container className="max-w-4xl">
        <div className="mx-auto font-hanken pb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 m-4 text-sm text-white/50 hover:text-white transition-colors mb-8 group px-4"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="text-center mb-16">
            <p className="text-xs font-hanken text-white/50 mb-2">WRITING</p>
            <h1 className="text-center text-5xl text-white font-instrument mb-4 italic">Thoughts & Journals</h1>
            <p className="text-sm font-hanken text-white/40 max-w-lg mx-auto">
              A collection of technical articles, engineering journals, and personal reflections on software development.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-[10px] tracking-[0.2em] uppercase text-white/20 cursor-default select-none">
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
