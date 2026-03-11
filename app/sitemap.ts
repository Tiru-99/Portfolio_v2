import { MetadataRoute } from 'next';
import { getAllBlogs } from '@/lib/mdx';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://aayushtirmanwar.in';

    
    const blogs = getAllBlogs();
    const blogUrls = blogs.map((post) => ({
        url: `${baseUrl}/blogs/${post.slug}`,
        lastModified: new Date(post.date || new Date()),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    
    const routes = ['', '/about', '/blogs', '/projects', '/contact'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }));

    return [...routes, ...blogUrls];
}
