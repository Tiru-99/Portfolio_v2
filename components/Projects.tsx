import ProjectCard from "./ProjectCard"
export default function Projects() {
  return (
    <>
      <div id="projects" className="mx-auto mt-12 font-hanken scroll-mt-24">
        <div className="text-center">
          <p className="text-xs font-hanken text-white/50">FEATURED</p>
          <h1 className="text-center text-4xl text-white font-instrument">Projects</h1>
        </div>

        <div className="max-w-3xl mx-auto mt-4 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center">
            <ProjectCard
              title="Tutorr"
              description="A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools."
              image="/assets/profile.jpeg"
              isLive={true}
            />
            <ProjectCard
              title="Minderr"
              description="A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools."
              image="/assets/profile.jpeg"
              isLive={true}
            />
            <ProjectCard
              title="Tawk"
              description="A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools."
              image="/assets/profile.jpeg"
              isLive={true}
            />
            <ProjectCard
              title="Feedsage"
              description="A comprehensive study platform with notes, flashcards, quizzes, AI chatbot, and interactive learning tools."
              image="/assets/profile.jpeg"
              isLive={false}
            />
          </div>

          <button
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
          </button>
        </div>
      </div>
    </>
  )
}