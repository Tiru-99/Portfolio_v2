import ProjectCard from "./ProjectCard"
import Link from "next/link"
import { motion } from "framer-motion"
export default function Projects() {
  return (
    <>
      <div id="projects" className="mx-auto mt-12 font-hanken scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xs font-hanken text-white/50">FEATURED</p>
          <h1 className="text-center text-4xl text-white font-instrument">Projects</h1>
        </motion.div>

        <div className="max-w-3xl mx-auto mt-4 p-4">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.25,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center"
          >
            {[
              {
                title: "Tutorr",
                description: "A marketplace platform for students and tutors to schedule bookings , with cal.com like scheduling infra with concurrency safe bookings with international payments and checkout integrated ",
                image: "/assets/projects/dragon.png",
                liveLink: "https://tutorr-web.vercel.app/",
                githubLink: "https://github.com/Tiru-99/Tutorr",
                techStack: ["NextJS", "Express", "Typescript", "Turborepo", "Redis", "BullMq", "Razorpay", "AWS"],
                slug: "tutorr",
                status: "completed" as const
              },
              {
                title: "Minderr",
                description: "Platform for people who forget things like me , to constantly nudge timely reminders to get the tasks done before deadline.",
                image: "/assets/projects/vagabond.jpeg",
                liveLink: "https://minderapp.online/",
                githubLink: "https://github.com/tiru-99/minder",
                techStack: ["NextJS", "Prisma", "PostgreSQL", "Inngest", "Bun", "Docker"],
                slug: "minderr",
                status: "completed" as const
              },
              {
                title: "Tawk",
                description: "A communication platform with video and audio conferencing made from scratch with scalable chat using apache kafka and redis pub/sub",
                image: "/assets/projects/samurai.png",
                liveLink: "https://tawk-two.vercel.app/",
                githubLink: "https://github.com/tiru-99/Tawk",
                techStack: ["NextJS", "Express", "Typescript", "Kafka", "Redis Pub/Sub", "Primsa", "PostgreSQL", "AWS S3"],
                slug: "tawk",
                status: "completed" as const
              },
              {
                title: "Feedsage",
                description: "Platform to take control of your own youtube feed to filter bs and distracting videos to increase productivity.",
                image: "/assets/projects/guy.jpeg",
                githubLink: "https://github.com/Tiru-99/Feedsage-2.0",
                techStack: ["NextJS", "Gemini", "Hono & Bun", "Typescript", "Drizzle", "Postgres", "Redis"],
                slug: "feedsage",
                status: "building" as const
              }
            ].map((p, i) => (
              <motion.div
                key={p.slug}
                variants={{
                  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
                  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 260, damping: 20 } }
                }}
              >
                <ProjectCard {...p} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="/projects"
              className="
                group mt-6 mx-auto
                flex items-center gap-2
                text-xs font-medium
                text-neutral-300
                transition-colors duration-300
                hover:text-white
              "
            >
              <span>See all projects</span>

              <span
                className="
                  inline-flex items-center justify-center
                  text-xs
                  px-2 py-0.5
                  rounded-full
                  border border-white/20
                  text-neutral-300
                  transition-all duration-300
                  group-hover:border-white/40
                  group-hover:bg-white/10
                  group-hover:text-white
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  )
}