export interface Project {
    id: string;
    slug: string;
    title: string;
    description: string;
    image: string;
    isLive: boolean;
    techStack: string[];
    liveUrl?: string;
    repoUrl?: string;
    fullDescription?: string;
    architecture?: string[];
    features?: string[];
}

export const projects: Project[] = [
    {
        id: "1",
        slug: "tutorr",
        title: "Tutorr",
        description: "A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools.",
        image: "/assets/profile.jpeg",
        isLive: true,
        techStack: ["Next.js", "TypeScript", "Tailwind", "Supabase", "OpenAI"],
        liveUrl: "https://tutorr.app",
        repoUrl: "https://github.com/username/tutorr",
        fullDescription: "Tutorr is an all-in-one study platform designed to help students learn more effectively. It combines traditional study methods like notes and flashcards with modern AI tools to create a personalized learning experience.",
        architecture: [
            "Frontend: Next.js 14 (App Router)",
            "Styling: Tailwind CSS",
            "Database: Supabase (PostgreSQL)",
            "Auth: Clerk",
            "AI: OpenAI GPT-4 API"
        ],
        features: [
            "AI-powered study guides",
            "Collaborative note-taking",
            "Real-time quizzes",
            "Progress tracking",
            "Flashcard generation"
        ]
    },
    {
        id: "2",
        slug: "minderr",
        title: "Minderr",
        description: "A mindful productivity app that helps you focus on what matters most with task management and wellness tracking.",
        image: "/assets/profile.jpeg",
        isLive: true,
        techStack: ["React Native", "Expo", "Firebase"],
        liveUrl: "https://minderr.app",
        repoUrl: "https://github.com/username/minderr",
        fullDescription: "Minderr helps users maintain a healthy work-life balance by integrating mindfulness exercises into their daily productivity routine.",
        architecture: [
            "Mobile: React Native with Expo",
            "Backend: Firebase Functions",
            "Database: Firestore",
            "State Management: MobX"
        ],
        features: [
            "Daily mood tracking",
            "Focus timer with ambient sounds",
            "Task prioritization matrix",
            "Wellness analytics"
        ]
    },
    {
        id: "3",
        slug: "tawk",
        title: "Tawk",
        description: "Real-time chat application featuring voice and video calls, file sharing, and end-to-end encryption.",
        image: "/assets/profile.jpeg",
        isLive: true,
        techStack: ["React", "Node.js", "Socket.io", "WebRTC"],
        liveUrl: "https://tawk.chat",
        repoUrl: "https://github.com/username/tawk",
        fullDescription: "Tawk connects people instantly with secure, high-quality voice and video calls, along with a robust chat system.",
        architecture: [
            "Frontend: React.js",
            "Backend: Node.js / Express",
            "Real-time: Socket.io",
            "Media: WebRTC"
        ],
        features: [
            "HD Video Calls",
            "Group chats",
            "File sharing (up to 50MB)",
            "End-to-end encryption"
        ]
    },
    {
        id: "4",
        slug: "feedsage",
        title: "Feedsage",
        description: "An AI-curated news aggregator that delivers personalized content summaries based on user interests.",
        image: "/assets/profile.jpeg",
        isLive: false,
        techStack: ["Vue.js", "Python", "FastAPI", "NLP"],
        repoUrl: "https://github.com/username/feedsage",
        fullDescription: "Feedsage cuts through the noise of modern media by delivering concise, AI-generated summaries of news that matters to you.",
        architecture: [
            "Frontend: Vue 3",
            "Backend: FastAPI (Python)",
            "ML Core: HuggingFace Transformers",
            "Scraping: Scrapy"
        ],
        features: [
            "Personalized news feed",
            "Audio summaries",
            "Keyword blocking",
            "Weekly digests"
        ]
    }
];
