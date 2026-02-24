import type { Metadata } from "next";
import { getBlogBySlug } from '@/lib/mdx'
import { notFound } from "next/navigation";
type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params ; 
  console.log("The slug is " , slug); 
  const post = getBlogBySlug(slug);
  
  if(!post){
    notFound(); 
  }

  return {
    title: `${post.title} | Aayush Tirmanwar`,
    description: post.description,
  };
}

export default function BlogLayout({ children }: Props) {
  return <>{children}</>;
}