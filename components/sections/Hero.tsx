"use client"
import Image from "next/image";
import Socials from "./Socials";
import { TbFileCv } from "react-icons/tb";
import { BiPaperPlane } from "react-icons/bi";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import MetalPlate from "../ui/MetalPlate";

const FADE: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  show: {
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { type: "spring", stiffness: 240, damping: 28 },
  },
};

const STAGGER = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const SKILLS = ["TypeScript", "NextJS", "PostgreSQL", "Redis", "Kafka", "Docker", "Distributed Systems"];

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="relative w-full flex flex-col items-center"
      initial="hidden"
      animate="show"
      variants={STAGGER}
    >
      {/*Banner*/}
      <motion.div
        variants={FADE}
        className="relative w-full h-50 sm:h-60 md:h-70 overflow-hidden rounded-xl"
      >
        <Image
          src="/assets/banner23.gif"
          alt="Banner"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1200px"
          priority
        />
        {/* Soft elegant gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-black/20 via-transparent to-black/20" />

        {/* Open to work */}
        <div className="absolute top-4 left-4 z-20 hover:cursor-pointer">
          <motion.div
            variants={FADE}
            className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)] animate-pulse" />
            <span className="text-[10px] font-mono text-white/60 tracking-widest uppercase">
              Open to work
            </span>
          </motion.div>
        </div>

        {/* Socials*/}
        <div className="absolute top-4 right-4 z-20">
          <motion.div
            variants={FADE}
            className="bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-2"
          >
            <Socials />
          </motion.div>
        </div>
      </motion.div>


      <div className="relative flex flex-col items-center -mt-12 sm:-mt-16 px-4 w-full text-center">
        {/* Profile Picture */}
        <motion.div
          variants={FADE}
          className="relative h-24 w-24 sm:h-32 sm:w-32 rounded-full overflow-hidden ring-4 ring-black shadow-2xl z-10"
        >
          <Image
            src="/assets/profile.jpeg"
            alt="Aayush Tirmanwar"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 96px, 128px"
            quality={90}
          />
        </motion.div>

        {/*Name*/}
        <div className="mt-4 md:mt-2">
          <motion.h1
            variants={FADE}
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight"
          >
            Aayush <span className="font-instrument italic font-normal text-white/80">Tirmanwar</span>
          </motion.h1>
          <motion.p
            variants={FADE}
            className="mt-2 text-white/40 text-xs sm:text-sm font-mono tracking-[0.2em] uppercase"
          >
            21 <span className="text-white/20 px-1">•</span> Engineer <span className="text-white/20 px-1">•</span> Builder
          </motion.p>
        </div>

        {/* Stats Section - Single Metal Plate Style */}
        <motion.div
          variants={FADE}
          className="mt-5 px-4 w-full flex justify-center"
        >
          <MetalPlate className="w-full max-w-3xl">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 py-3">
              {/* Products Shipped */}
              <div className="flex flex-col items-center gap-1">
                <div className="text-4xl sm:text-5xl font-bold font-mono tracking-tighter text-white tabular-nums">
                  5<span className="text-white/30 font-light">+</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 whitespace-nowrap">
                  Products Shipped
                </div>
              </div>

              {/* Separator */}
              <div className="hidden sm:block w-px h-10 bg-white/10" />

              {/* Years Exp */}
              <div className="flex flex-col items-center gap-1">
                <div className="text-4xl sm:text-5xl font-bold font-mono tracking-tighter text-white tabular-nums">
                  1<span className="text-white/30 font-light">+</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 whitespace-nowrap">
                  Years Exp.
                </div>
              </div>

              {/* Separator */}
              <div className="hidden sm:block w-px h-10 bg-white/10" />

              {/* Focus Areas */}
              <div className="flex flex-col items-center gap-1 w-full sm:w-auto">
                <div className="text-xl sm:text-2xl font-bold font-mono tracking-tighter text-white uppercase flex items-center gap-1.5 h-auto py-2">
                  <span>PRODUCT</span>
                  <span className="text-white/20">•</span>
                  <span>BACKEND</span>
                  <span className="text-white/20">•</span>
                  <span>INFRA</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30">
                  Focus Areas
                </div>
              </div>
            </div>
          </MetalPlate>
        </motion.div>

        {/* Bio Centered */}
        <motion.p
          variants={FADE}
          className="mt-3 text-center text-base sm:text-lg text-white/50 font-hanken leading-relaxed max-w-2xl px-1"
        >
          I build systems from zero —{" "}
          <span className="text-white/80">backend architecture</span>,{" "}
          <span className="text-white/80">full-stack apps</span>,{" "}
          and{" "}
          <span className="text-white/80">performance-critical infrastructure</span>.
          {" "}I care about{" "}
          <span className="text-white font-medium">
            shipping reliable things people actually use.
          </span>
        </motion.p>

        {/* Action Buttons Centered */}
        <motion.div
          variants={FADE}
          className="flex flex-wrap items-center justify-center gap-3 mt-4 font-hanken"
        >
          <Link
            href="/contact"
            className="
              group flex items-center gap-2
              bg-white text-black
              px-6 py-2.5 rounded-lg font-semibold text-sm
              transition-all duration-200
              hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98]
              shadow-[0_1px_30_rgba(255,255,255,0.12)]
            "
          >
            <BiPaperPlane className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            Get in touch
          </Link>
          <a
            href="https://drive.google.com/file/d/1eJ0M2V5foZrvjk5r9_B9zDffCkIjPgxZ/view"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group flex items-center gap-2
              bg-white/5 border border-white/10 text-white/80
              px-6 py-2.5 rounded-lg font-medium text-sm
              transition-all duration-200
              hover:bg-white/10 hover:text-white hover:border-white/20 hover:scale-[1.02] active:scale-[0.98]
              backdrop-blur-sm
            "
          >
            <TbFileCv className="w-4 h-4" />
            Resume
          </a>
        </motion.div>

        <motion.div
          variants={FADE}
          className="mt-10 flex flex-wrap justify-center gap-3 px-4"
        >
          {SKILLS.map((s) => (
            <div
              key={s}
              className="
                group relative flex items-center gap-2
                px-3 py-1.5 rounded-lg
                bg-white/2 border border-white/5
                transition-all duration-300 hover:bg-white/6 hover:border-white/10 hover:cursor-pointer
              "
            >
              <div className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-white/50 transition-colors" />
              <span className="text-[10px] font-mono text-white/40 group-hover:text-white/70 transition-colors uppercase tracking-widest">
                {s}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
