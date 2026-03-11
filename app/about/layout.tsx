import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Me | Aayush Tirmanwar",
    description: "Learn more about Aayush Tirmanwar, a Backend Engineer passionate about building scalable systems, real-time architectures, and high-performance applications.",
    alternates: {
        canonical: "https://aayushtirmanwar.in/about",
    },
    openGraph: {
        title: "About Me | Aayush Tirmanwar",
        description: "Backend Engineer specialized in Node.js, TypeScript, PostgreSQL, Redis, and Kafka.",
        url: "https://aayushtirmanwar.in/about",
        siteName: "Aayush Tirmanwar Portfolio",
        images: [
            {
                url: "https://aayushtirmanwar.in/assets/coffee.jpeg", 
                width: 1200,
                height: 630,
                alt: "Aayush Tirmanwar Portfolio",
            },
        ],
        type: "profile",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Me | Aayush Tirmanwar",
        description: "Backend Engineer specialized in Node.js, TypeScript, PostgreSQL, Redis, and Kafka.",
        images: ["https://aayushtirmanwar.in/assets/coffee.jpeg"],
        creator: "@tiru299",
    },
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
