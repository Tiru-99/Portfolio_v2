import type { Metadata } from "next";
import { getBlogBySlug } from "@/lib/mdx";
import { notFound } from "next/navigation";

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; 
  const url = `${baseUrl}/blog/${slug}`;
  const imageUrl = `${baseUrl}${post.coverImage}`; 

  return {
    title: `${post.title} | Aayush Tirmanwar`,
    description: post.description,

    openGraph: {
      title: post.title,
      description: post.description,
      url: url,
      siteName: "Aayush Tirmanwar",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
        },
      ],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [imageUrl],
    },
  };
}

export default function BlogLayout({ children }: Props) {
  return <>{children}</>;
}