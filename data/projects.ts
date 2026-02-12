export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  productImage: string;
  isLive: boolean;
  techStack: string[];
  demoUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  fullDescription?: string;
  architecture?: string[];
  features?: string[];
  status: "completed" | "building";
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "tutorr",
    title: "Tutorr",
    description:
      "A marketplace platform for students and tutors with concurrency-safe scheduling, real-time booking infrastructure across global timezones like cal.com, and international payments.",
    image: "/assets/projects/dragon.png",
    productImage: "/assets/projects/tutorr.png",
    isLive: true,
    status: "completed",
    techStack: [
      "NextJS",
      "Express",
      "Typescript",
      "Turborepo",
      "Redis",
      "BullMQ",
      "Razorpay",
      "AWS",
    ],
    demoUrl:
      "https://drive.google.com/file/d/1aQhSzbVgnIfhWbJ5geHcsjI4z0hYmig-/view",
    liveUrl: "https://tutorr.app",
    repoUrl: "https://github.com/Tiru-99/Tutorr",
    fullDescription:
      "Tutorr is a scalable tutor-student marketplace inspired by cal.com-style scheduling infrastructure. It ensures concurrency-safe bookings using transactional logic and background workers. The system supports international payments, queue-based processing, and real-time booking status updates.",
    architecture: [
      "Frontend: Next.js (App Router)",
      "Backend: Express + TypeScript",
      "Monorepo: Turborepo",
      "Queue Processing: BullMQ + Redis",
      "Database: PostgreSQL",
      "Payments: Razorpay",
      "Deployment: AWS (EC2, S3)",
    ],
    features: [
      "Concurrency-safe booking system",
      "Real-time availability updates",
      "Queue-based background workers",
      "International payment integration",
      "Tutor scheduling dashboard",
      "Secure authentication & role-based access",
    ],
  },

  {
    id: "2",
    slug: "minderr",
    title: "Minderr",
    description:
      "Platform for people who forget things — timely nudges, intelligent reminders, and structured task execution before deadlines.",
    image: "/assets/projects/vagabond.jpeg",
    productImage: "/assets/projects/minderr.png",
    isLive: true,
    status: "completed",
    techStack: ["NextJS", "Prisma", "PostgreSQL", "Inngest", "Bun", "Docker"],
    demoUrl:
      "https://drive.google.com/file/d/1N98ZjE6Xyay3BXv0hhgZpuFMvbZWm9pD/view?usp=sharing",
    liveUrl: "https://minderr.app",
    repoUrl: "https://github.com/username/minderr",
    fullDescription:
      "Minderr is a productivity-first reminder platform designed to reduce deadline anxiety. It leverages event-driven workflows using Inngest to trigger intelligent reminder sequences, ensuring tasks are completed before due time.",
    architecture: [
      "Frontend: Next.js",
      "Backend Runtime: Bun",
      "Database ORM: Prisma",
      "Database: PostgreSQL",
      "Background Workflows: Inngest",
      "Containerization: Docker",
    ],
    features: [
      "Event-driven reminder engine",
      "Smart deadline nudges",
      "Task categorization & tagging",
      "Recurring reminders",
      "Real-time status updates",
      "Minimal distraction-focused UI",
    ],
  },

  {
    id: "3",
    slug: "tawk",
    title: "Tawk",
    description:
      "A communication platform with video and audio conferencing built from scratch with scalable chat using Apache Kafka and Redis Pub/Sub.",
    image: "/assets/projects/samurai.png",
    productImage: "/assets/projects/tawk.png",
    isLive: true,
    status: "completed",
    techStack: [
      "NextJS",
      "Express",
      "Typescript",
      "Kafka",
      "Redis Pub/Sub",
      "Prisma",
      "PostgreSQL",
      "AWS S3",
    ],
    demoUrl:
      "https://drive.google.com/file/d/1GnlFghmKmGhmp8UjTPJxNuJf398RzEYS/view?usp=sharing",
    liveUrl: "https://tawk.chat",
    repoUrl: "https://github.com/username/tawk",
    fullDescription:
      "Tawk is a real-time communication platform featuring scalable chat architecture powered by Apache Kafka and Redis Pub/Sub. It supports voice and video conferencing, persistent chat history, and horizontal scaling for large concurrent sessions.",
    architecture: [
      "Frontend: Next.js",
      "Backend: Express + TypeScript",
      "Real-time Messaging: Apache Kafka",
      "Pub/Sub Layer: Redis",
      "Database: PostgreSQL + Prisma",
      "Media Handling: WebRTC",
      "Storage: AWS S3",
    ],
    features: [
      "Scalable distributed chat system",
      "Voice & video conferencing",
      "Group messaging",
      "File sharing",
      "Message persistence",
      "Event-driven architecture",
    ],
  },

  {
    id: "4",
    slug: "feedsage",
    title: "Feedsage",
    description:
      "Platform to take control of your YouTube feed — filter distractions, remove noise, and prioritize high-value content.",
    image: "/assets/projects/guy.jpeg",
    productImage: "/assets/projects/feedsage.png",
    isLive: false,
    status: "building",
    techStack: [
      "NextJS",
      "Gemini",
      "Hono",
      "Bun",
      "Typescript",
      "Drizzle",
      "Postgres",
      "Redis",
    ],
    repoUrl: "https://github.com/username/feedsage",
    fullDescription:
      "Feedsage is an AI-powered content filtering system that analyzes YouTube video metadata and transcripts to filter distracting or low-value content. It prioritizes educational and productivity-focused content using AI scoring mechanisms.",
    architecture: [
      "Frontend: Next.js",
      "Backend: Hono + Bun",
      "Database ORM: Drizzle",
      "Database: PostgreSQL",
      "Caching: Redis",
      "AI Processing: Google Gemini API",
    ],
    features: [
      "AI-based content scoring",
      "Custom keyword filtering",
      "Productivity-focused feed ranking",
      "Low-quality content suppression",
      "User preference learning",
    ],
  },
  {
    id: "5",
    slug: "cpp-search-engine",
    title: "Search Engine (C++)",
    description:
      "A search engine built from scratch in C++ implementing custom indexing, inverted indexes, and ranking algorithms.",
    image: "/assets/projects/tanjiro.jpeg",
    productImage: "/assets/projects/tanjiro.png",
    isLive: false,
    status:"completed",
    techStack: [
      "C++",
      "Inverted Index",
      "Best matching-25",
      "Document parsing and indexing",
      "File I/O",
    ],
    repoUrl: "https://github.com/Tiru-99/cpp-search-engine",
    fullDescription:
      "A low-level search engine implementation written in C++ that builds an inverted index from raw documents, supports keyword-based retrieval, and ranks results using TF-IDF scoring. Designed with performance in mind using optimized data structures and multithreading.",
    architecture: [
      "Language: C++ (STL)",
      "Indexing: Inverted Index",
      "Ranking: Best Matching 25 scoring",
      "Concurrency: Multithreaded indexing",
      "Storage: File-based document persistence",
    ],
    features: [
      "Custom inverted index implementation",
      "Efficient tokenization & parsing",
      "Best matching 25 ranking system",
      "Fast keyword retrieval",
      "Multithreaded document indexing",
    ],
  },

  {
    id: "6",
    slug: "distributed-search-platform",
    title: "Real-Time Distributed Search Platform",
    description:
      "A production-style distributed search system using Debezium CDC, Apache Kafka streaming, and Elasticsearch for near real-time indexing.",
    image: "/assets/projects/soldier.jpeg",
    productImage: "/assets/projects/soldier.jpeg",
    isLive: false,
    status:"completed",
    techStack: [
      "TypeScript",
      "PostgreSQL",
      "Debezium",
      "Kafka",
      "Elasticsearch",
      "Docker",
    ],
    repoUrl: "https://github.com/Tiru-99/scalable-search",
    fullDescription:
      "A real-time distributed search platform built using Change Data Capture (CDC). Database changes in PostgreSQL are captured via Debezium and streamed into Apache Kafka. A TypeScript-based consumer service processes events and indexes documents into Elasticsearch, enabling scalable, near real-time search capabilities.",
    architecture: [
      "Source Database: PostgreSQL",
      "Change Data Capture: Debezium",
      "Message Broker: Apache Kafka",
      "Backend Consumer: TypeScript (Node.js)",
      "Search Engine: Elasticsearch",
      "Containerization: Docker Compose",
    ],
    features: [
      "Real-time database change streaming",
      "Event-driven indexing architecture",
      "Scalable Kafka consumer groups",
      "Near real-time Elasticsearch indexing",
      "Loose coupling between database and search layer",
      "Production-style distributed pipeline design",
    ],
  },
  {
    id: "7",
    slug: "postgres-replication",
    title: "PostgreSQL Streaming Replication",
    description:
      "Dockerized PostgreSQL master-slave streaming replication setup for high availability and fault tolerance.",
    image: "/assets/projects/thorfinn.jpeg",
    productImage: "/assets/projects/thorfinn.jpeg",
    isLive: false,
    status:"completed",
    techStack: [
      "PostgreSQL",
      "Docker",
      "Docker Compose",
      "Streaming Replication",
      "Linux",
    ],
    repoUrl: "https://github.com/Tiru-99/postgres-replication",
    fullDescription:
      "A Docker Compose-based infrastructure template that sets up PostgreSQL streaming replication between a primary (master) and replica (slave). Designed for high availability, failover experimentation, and understanding WAL-based replication internals.",
    architecture: [
      "Primary DB: PostgreSQL Master",
      "Replica DB: PostgreSQL Standby",
      "Replication: WAL Streaming",
      "Containerization: Docker Compose",
      "Networking: Internal Docker network",
    ],
    features: [
      "WAL-based streaming replication",
      "Master-slave failover testing",
      "Hot standby read replica",
      "Automated Dockerized setup",
      "Production-style replication topology",
    ],
  },
];
