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

  const post = getBlogBySlug(slug) as any;

  if (!post) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://aayushtirmanwar.in';
  const url = `${baseUrl}/blogs/${slug}`;
  const imageUrl = post.coverImage.startsWith('http') ? post.coverImage : `${baseUrl}${post.coverImage}`;

  return {
    title: `${post.title} | Aayush Tirmanwar`,
    description: post.description,
    keywords: post.tags || post.keywords || ["engineering", "backend", "software development"],
    authors: [{ name: "Aayush Tirmanwar" }],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: `${post.title} | Aayush Tirmanwar`,
      description: post.description,
      url: url,
      siteName: "Aayush Tirmanwar",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
      publishedTime: post.date,
      authors: ["Aayush Tirmanwar"],
    },

    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [imageUrl],
      creator: "@tiru299", 
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default function BlogLayout({ children }: Props) {
  return <>
    {children}
  </>;
}