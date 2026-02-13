"use client"
import Image from "next/image";
import Socials from "./Socials";
import { TbFileCv } from "react-icons/tb";
import { BiPaperPlane } from "react-icons/bi";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const FADE_UP_ANIMATION_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 10, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 260, damping: 20 } },
};

export default function Hero() {
  return (
    <motion.div
      id="home"
      className="px-4"
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="relative w-full aspect-video max-h-72 rounded-sm overflow-hidden shadow-2xl bg-black"
      >
        <Image
          src="/assets/banner23.gif"
          alt="Banner"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/30 to-black/60" />
      </motion.div>


      
      <div className="relative flex flex-col items-center -mt-8 md:-mt-16 px-4">
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="relative md:w-32 md:h-32 h-28 w-28 rounded-full overflow-hidden ring-4 ring-black shadow-xl"
        >
          <Image
            src="/assets/profile.jpeg"
            alt="Profile"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 112px, 128px"
            priority
            quality={90}
          />
        </motion.div>

      
        <motion.h1
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-5 text-3xl md:text-4xl font-bold tracking-tight text-white text-center"
        >
          Hi — I'm <span className="font-instrument italic tracking-normal font-bold">Aayush Tirmanwar</span>
        </motion.h1>

        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-1 font-hanken text-base text-white/70 font-medium"
        >
          21 · Builder · Engineer
        </motion.p>

        <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
          <Socials />
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="w-16 h-1 bg-linear-to-r from-transparent via-white/30 to-transparent my-4"
        />

        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="max-w-2xl"
        >
          <p className="text-white/50 text-lg leading-relaxed font-hanken text-center">
            <span className="text-white font-medium">
              I build systems from zero
            </span>
            . Whether it’s{" "}
            <span className="text-white">backend services</span>,{" "}
            <span className="text-white">full-stack applications</span>, or{" "}
            <span className="text-white">performance-critical components</span>,
            I work across the{" "}
            <span className="text-white">entire development lifecycle</span>.
            From{" "}
            <span className="text-white">system design</span> and{" "}
            <span className="text-white">data modeling</span> to{" "}
            <span className="text-white">frontend integration</span>,{" "}
            <span className="text-white">deployment</span>, and{" "}
            <span className="text-white">real-world usage</span>,
            I care less about technology debates and more about{" "}
            <span className="text-white font-semibold">
              delivering reliable systems and products that people actually use.
            </span>
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="flex justify-center px-4 gap-4 mt-6 font-hanken"
      >
        <Link
          href="https://drive.google.com/file/d/1eJ0M2V5foZrvjk5r9_B9zDffCkIjPgxZ/view"
          className="
            btn-surface btn-primary
            px-4 py-2 rounded-md
            text-white font-semibold
            transition duration-300 ease-in-out
            hover:bg-white/3! hover:cursor-pointer
            inline-flex items-center gap-2
          "
        >
          <TbFileCv className="w-4 h-4 text-white/80" />
          <span>Resume / CV</span>
        </Link>

        <button
          className="
              bg-white
              text-black
              px-4 py-2 rounded-md
              inline-flex items-center gap-2
              transition duration-300 ease-in-out
              hover:cursor-pointer hover:bg-white/80
            "
        >
          <BiPaperPlane className="w-4 h-4 text-black/80 " />
          <span>Get in touch</span>
        </button>
      </motion.div>
    </motion.div>
  );
}
