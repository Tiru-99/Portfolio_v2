"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, ArrowLeft } from "lucide-react";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const phonkTracks = [
  { title: "MONTAGEM DIREÇÃO", artist: "DJ FKU", duration: "1:21", image: "/assets/phonk/direcao.jpeg" },
  { title: "VEM NO PIQUE", artist: "Hwungii,", duration: "1:45", image: "/assets/phonk/pique.jpeg" },
  { title: "A NOVINHA TA COM MEDO", artist: "MXZI", duration: "2:04", image: "/assets/phonk/medo.jpeg" },
  { title: "MENTE MÁ", artist: "Nakama", duration: "3:58", image: "/assets/phonk/mentema.jpeg" },
  { title: "GOZALO", artist: "Ariis", duration: "1:54", image: "/assets/phonk/gozalo.jpeg" },
];

const animeWatches = [
  {
    title: "One Piece",
    tags: ["Action", "Adventure", "Fantasy"],
    image: "/assets/one-piece.jpeg",
    quote: "Listen Luffy . By both experiencing victory and defeat , running away and shedding tears , a man will become a man",
    author: "Shanks"
  },
  {
    title: "Attack on Titan",
    tags: ["Action", "Dark Fantasy", "Drama"],
    image: "/assets/aot.jpeg",
    quote: "There is no truth in this world. Anyone can become a God or a Devil, all it takes is for someone to claim that to be the truth.",
    author: "Eren Kruger"
  },
  {
    title: "My Hero Academia",
    tags: ["Action", "Superhero", "Shounen"],
    image: "/assets/allmight.jpeg",
    quote:
      "If you feel yourself hitting up against your limit, remember for what cause you clench your fists... remember why you started down this path, and let that memory carry you beyond your limit",
    author: "All might"
  },
  {
    title: "Vinland Saga",
    tags: ["Seinen", "Historical", "Drama"],
    image: "/assets/thors.jpeg",
    quote: "You have no enemies , Nobody has them , Nobody in this world deserves to get hurt.",
    author: "Thors"
  },
];

export default function AboutPage() {
  return (
    <Container className="max-w-5xl">
      <motion.div
        initial="hidden"
        animate="show"
        variants={FADE_UP}
        className="pt-12 px-6 md:px-12"
      >
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-white/30 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          <span className="font-hanken text-xs uppercase tracking-widest">Go to Home</span>
        </Link>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          show: { transition: { staggerChildren: 0.1 } },
        }}
        className="px-6 md:px-12 py-12 space-y-24"
      >
        {/* Header */}
        <motion.div variants={FADE_UP} className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-instrument font-bold tracking-tight text-white">
            About <span className="italic pr-3 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">Me</span>
          </h1>
          <p className="text-white/40 text-xl font-hanken max-w-2xl">
            Engineer by day, curious builder by heart.
          </p>
        </motion.div>

        {/* What I Love Building - Side by Side */}
        <motion.section
          variants={FADE_UP}
          className="grid md:grid-cols-5 gap-12 items-start"
        >
          <div className="md:col-span-3 space-y-8">
            <h2 className="text-4xl font-instrument text-white/90">
              What I Love Building
            </h2>
            <div className="space-y-6 text-white/60 font-hanken text-lg leading-relaxed">
              <p>
                I'm passionate about{" "}
                <span className="text-white/80 font-medium">
                  backend engineering
                </span>{" "}
                — building systems that are{" "}
                <span className="text-white/80 font-semibold italic">
                  scalable
                </span>
                ,{" "}
                <span className="text-white/80 font-semibold italic">
                  reliable
                </span>
                , and{" "}
                <span className="text-white/80 font-semibold italic">
                  performant
                </span>
                . There's something deeply satisfying about designing APIs,
                optimizing database queries, and creating infrastructure that
                just works.
              </p>

              <p>
                I'm fascinated by{" "}
                <span className="text-white font-medium">
                  systems and engineering
                </span>{" "}
                at scale. From distributed systems to caching strategies, I love
                learning about what makes systems tick. Currently reading{" "}
                <span className="text-white/80 font-semibold italic">
                  "Designing Data-Intensive Applications"
                </span>{" "}
                by Martin Kleppmann to deepen my understanding of these
                fundamentals.
              </p>
            </div>

            {/* Availability Badges */}
            <div className="pt-6 flex flex-wrap gap-2 items-center">
              <span className="text-white/30 text-xs font-hanken uppercase tracking-widest mr-2">
                Status:
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium backdrop-blur-sm">
                Open to Full-time
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium backdrop-blur-sm">
                Internships
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-medium backdrop-blur-sm">
                Freelance
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium font-hanken">
                <span className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse" />
                Available Now
              </span>
            </div>
          </div>

          {/* Profile Image */}
          <div className="md:col-span-2 relative aspect-4/5 rounded-2xl overflow-hidden border border-white/10 group shadow-2xl">
            <Image
              src="/assets/coffee.jpeg"
              alt="Profile"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60" />
          </div>
        </motion.section>

        {/* Beliefs & Thoughts - Bento Grid */}
        <motion.section
          variants={FADE_UP}
          className="space-y-16 pt-24 border-t border-white/8 border-b pb-28"
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-instrument text-white/90">
              Beliefs & Thoughts
            </h2>
            <p className="text-white/40 font-hanken text-lg">
              My guiding principles in engineering and design.
            </p>
          </div>

          <div className="grid md:grid-cols-6 gap-4 auto-rows-[160px]">
            {[
              {
                title: "Systems > Goals",
                description:
                  "Focusing on the process and architecture rather than just the destination leads to more resilient outcomes.",
                span: "md:col-span-3 md:row-span-1",
                num: "01",
              },
              {
                title: "First Principles",
                description:
                  "Breaking complex problems down to their fundamental truths to build from the ground up.",
                span: "md:col-span-3 md:row-span-2",
                num: "02",
              },
              {
                title: "Simplicity",
                description:
                  "Striving for the minimum effective complexity. If it doesn't need to be there, it shouldn't be.",
                span: "md:col-span-3 md:row-span-1",
                num: "03",
              },
              {
                title: "Reliability",
                description:
                  "It isn't a feature; it's the foundation. A system that isn't dependable isn't complete.",
                span: "md:col-span-2 md:row-span-1",
                num: "04",
              },
              {
                title: "Continuous Learning",
                description:
                  "The landscape evolves daily. Stay curious, stay humble, and keep building.",
                span: "md:col-span-4 md:row-span-1",
                num: "05",
              },
            ].map((belief) => (
              <motion.div
                key={belief.title}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                }}
                className={`${belief.span} relative group hover:cursor-pointer p-8 rounded-3xl border border-white/7 border-t-white/15 bg-white/1 overflow-hidden flex flex-col justify-between transition-all`}
              >
                <div className="absolute right-6 top-6 text-5xl font-instrument font-bold text-white/2 group-hover:text-white/5 transition-colors select-none">
                  {belief.num}
                </div>
                <h3 className="text-xl font-instrument font-medium text-white/80 group-hover:text-white transition-colors">
                  {belief.title}
                </h3>
                <p className="text-white/30 text-xs font-hanken leading-relaxed group-hover:text-white/50 transition-colors">
                  {belief.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Beyond the Code - Alternating Sections */}
        <div className="space-y-28">
          <motion.div variants={FADE_UP} className="space-y-8">
            <h2 className="text-4xl font-instrument text-white/90">
              Beyond the <span className="italic p-1 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient">Code</span>
            </h2>

            {/* Shawarma */}
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-3xl font-instrument text-white/90">
                    The Search for the Perfect Wrap
                  </h3>
                  <p className="text-white/50 text-lg leading-relaxed font-hanken">
                    I take my shawarma very seriously.
                    Want to win me over or pick a meeting spot? Easy.
                    Know a legendary place? Now we’re talking.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Spice Level", value: "🌶️🌶️🌶️🌶️", sub: "Must have a kick" },
                    { label: "Garlic Sauce", value: "Legendary", sub: "The soul of the wrap" },
                    { label: "Pickles", value: "Essential", sub: "For that final crunch" },
                    { label: "Vibe", value: "Authentic", sub: "Corner shops only" },
                  ].map((stat) => (
                    <div key={stat.label} className="p-4 rounded-xl bg-white/1 border border-white/5 group/stat hover:bg-white/3 transition-colors">
                      <div className="text-[10px] uppercase tracking-widest text-white/30 font-medium mb-1">
                        {stat.label}
                      </div>
                      <div className="text-white/80 font-instrument font-medium mb-0.5">
                        {stat.value}
                      </div>
                      <div className="text-[10px] text-white/20 font-hanken group-hover/stat:text-white/40 transition-colors italic">
                        {stat.sub}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <motion.div
                  initial={{ rotate: -2 }}
                  whileHover={{ rotate: 1, scale: 1.02 }}
                  className="relative aspect-square p-4 bg-white/3 border border-white/10 rounded-lg shadow-2xl backdrop-blur-sm"
                >
                  <div className="relative h-full w-full overflow-hidden rounded-md bg-white/5">
                    <Image
                      src="/assets/shwarma.jpg"
                      alt="Shawarma"
                      fill
                      className="object-cover opacity-90 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                    />
                  </div>
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-white/5 blur-xl group-hover:bg-white/10 transition-colors" />
                  <div className="mt-6 text-center select-none">
                    <span className="font-instrument italic text-white/20 text-sm tracking-widest">
                      MEMORIES — 2025
                    </span>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-500/10 blur-3xl rounded-full" />
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/5 blur-3xl rounded-full" />
              </div>
            </div>
          </motion.div>

          {/* Anime - Featured Watches */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-instrument text-white/90">
                Featured Watches
              </h2>
              <p className="text-white/50 text-lg font-hanken max-w-2xl leading-relaxed">
                Appreciating the art of storytelling and visual direction. These
                are the narratives that left a lasting impact on how I view
                storytelling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
              {animeWatches.map((anime) => (
                <motion.div
                  key={anime.title}
                  variants={FADE_UP}
                  className="group space-y-4"
                >
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-white/5 border border-white/5 transition-colors group-hover:border-white/10 group-hover:cursor-pointer">
                    <Image
                      src={anime.image}
                      alt={anime.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />

                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
                      {anime.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[8px] uppercase tracking-widest text-white/50 font-medium px-1.5 py-0.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 px-1">
                    <h3 className="text-lg font-instrument font-semibold text-white/80 group-hover:text-white transition-colors">
                      {anime.title}
                    </h3>
                    <p className="text-white/40 text-sm font-instrument italic leading-relaxed line-clamp-3 group-hover:text-white/60 transition-colors">
                      "{anime.quote}" - {anime.author}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Phonk */}
          <motion.div variants={FADE_UP} className="space-y-12">
            <div className="grid md:grid-cols-5 gap-12">
              <div className="md:col-span-2 space-y-6">
                <h3 className="text-2xl font-instrument font-semibold text-white/80">
                  Phonk
                </h3>
                <p className="text-white/50 text-lg leading-relaxed font-hanken">
                  High-energy rhythms that keep the focus sharp during deep work
                  sessions. The dark, atmospheric beats and nostalgic samples
                  create the perfect environment for a long night of coding.
                </p>
              </div>

              <div className="md:col-span-3 space-y-1 bg-white/1 border border-white/5 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                  <span className="text-white/30 text-[10px] uppercase tracking-widest font-medium font-hanken">
                    Vibe Checklist
                  </span>
                  <span className="text-white/20 text-[10px] uppercase tracking-widest font-mono">
                    2026.Vol1
                  </span>
                </div>
                {phonkTracks.map((track, idx) => (
                  <div
                    key={track.title}
                    className="flex items-center gap-4 p-3 rounded-xl transition-all group cursor-pointer hover:bg-white/5 border border-transparent hover:border-white/5"
                  >
                    <span className="text-white/20 text-xs font-mono w-4 text-right group-hover:text-white/40">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>

                    <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-white/5">
                      <Image
                        src={track.image}
                        alt={track.title}
                        fill
                        className="object-cover  transition-all duration-500 group-hover:scale-110"
                      />
                    </div>

                    <div className="flex-1 flex flex-col min-w-0">
                      <span className="text-white/80 font-hanken text-sm font-medium truncate group-hover:text-white transition-colors">
                        {track.title}
                      </span>
                      <span className="text-white/30 font-hanken text-[10px]">
                        {track.artist}
                      </span>
                    </div>

                    <div className="hidden md:flex items-center gap-3">
                      <div className="opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                        <Play
                          size={12}
                          fill="currentColor"
                          className="text-white/60"
                        />
                      </div>
                      <span className="text-white/20 text-[10px] font-mono group-hover:text-white/40 w-10 text-right">
                        {track.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>


        {/* Final Integrated CTA */}
        <motion.section
          variants={FADE_UP}
          className="pt-24 text-center space-y-8"
        >
          <div className="flex flex-col items-center gap-6">
            <p className="text-white/40 font-hanken italic">
              Always open to discussing these ideas or building something new.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full font-semibold transition-all hover:bg-white/90 shadow-[0_0_50px_rgba(255,255,255,0.1)] active:scale-95"
            >
              <span>Get in Touch</span>
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </motion.section>
      </motion.div>

      <Footer />
    </Container>
  );
}
