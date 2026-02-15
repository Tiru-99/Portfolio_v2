import fs from 'fs';
import path from 'path';

const BLOGS_PATH = path.join(process.cwd(), 'data/blogs');

export function getBlogSlugs() {
    if (!fs.existsSync(BLOGS_PATH)) return [];
    return fs.readdirSync(BLOGS_PATH).filter((file) => /\.mdx?$/.test(file));
}

export function getBlogBySlug(slug: string) {
    const realSlug = slug.replace(/\.mdx?$/, '');
    const filePath = path.join(BLOGS_PATH, `${realSlug}.mdx`);

    if (!fs.existsSync(filePath)) {
        // Try .md if .mdx doesn't exist
        const mdPath = path.join(BLOGS_PATH, `${realSlug}.md`);
        if (!fs.existsSync(mdPath)) return null;
        return parseMDX(fs.readFileSync(mdPath, 'utf8'), realSlug);
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    return parseMDX(fileContent, realSlug);
}

export function getAllBlogs() {
    const slugs = getBlogSlugs();
    const blogs = slugs
        .map((slug) => getBlogBySlug(slug))
        .filter((blog) => blog !== null)
        .sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

    return blogs;
}

function parseMDX(content: string, slug: string) {
    const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---/;
    const match = content.match(frontmatterRegex);

    let data: Record<string, any> = {};
    let mdxContent = content;

    if (match) {
        const frontmatterBlock = match[1];
        mdxContent = content.replace(match[0], '');

        frontmatterBlock.split('\n').forEach(line => {
            const [key, ...valueArr] = line.split(':');
            if (key && valueArr.length > 0) {
                let value = valueArr.join(':').trim();
                // Remove surrounding quotes if they exist
                if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
                    value = value.slice(1, -1);
                }
                data[key.trim()] = value;
            }
        });
    }

    return {
        slug,
        content: mdxContent,
        title: data.title || slug,
        date: data.date || '',
        description: data.description || '',
        coverImage: data.coverImage || '',
        ...data
    };
}
