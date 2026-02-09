import Image from "next/image";
import Socials from "./Socials";
import { TbFileCv } from "react-icons/tb";
import { BiPaperPlane } from "react-icons/bi";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiBun,
  SiCplusplus, 
  SiAmazon , 
  SiPostgresql,
} from "react-icons/si";

export default function Hero() {
  return (
    <section className="max-w-3xl mx-auto px-4 pb-12">
      {/* Banner */}
      <div
        className="
          relative
          w-full
          aspect-[16/9]
          max-h-[18rem]
          rounded-2xl
          overflow-hidden
          shadow-2xl
        "
      >
        <Image
          src="/assets/banner16.jpeg"
          alt="Banner"
          fill
          className="object-cover"
          quality={100}
          priority
          unoptimized={false}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/30 to-black/60" />
      </div>

      {/* Profile + content */}
      <div className="relative flex flex-col items-begin -mt-8 md:-mt-16 px-4">
        {/* Profile Image */}
        <div className="relative md:w-32 md:h-32 h-28 w-28 rounded-full overflow-hidden ring-4 ring-black shadow-xl">
          <Image
            src="/assets/profile.jpeg"
            alt="Profile"
            fill
            className="object-cover"
            quality={100}
          />
        </div>

        {/* Text */}
        <h1 className="mt-5 text-3xl md:text-5xl font-bold tracking-tight text-white">
          Hi — I'm Aayush Tirmanwar
        </h1>
        <p className="mt-1 font-hanken text-base text-white/70 font-medium">
          21 · Builder · Engineer
        </p>

        <Socials />
        {/* Divider */}
        <div className="w-16 h-1 bg-linear-to-r from-transparent via-white/30 to-transparent my-4" />

        {/* Bio */}
        <div className="max-w-2xl">
          {/*<p className="text-white/40 text-lg leading-[2.5] font-hanken">
            I build scalable backends and systems using
            <TechPill
              label="TypeScript"
              icon={<SiTypescript className="text-[#3B82F6]" />}
            />
            and
            <TechPill
              label="C++"
              icon={<SiCplusplus className="text-pink-500" />}
            />
            , with a strong focus on <span className="text-white">performance, correctness, and reliability</span>.
            I work extensively with
            <TechPill
              label="AWS"
              icon={<SiAmazon className="text-[#FF9900]" />}
            />
            and
            <TechPill
              label="PostgreSQL"
              icon={<SiPostgresql className="text-[#06B6D4]" />}
            />
            , and can also ship complete <span className="text-white">full-stack applications</span> using
            <TechPill
              label="React"
              icon={<SiReact className="text-[#61DAFB]" />}
            />
            and
            <TechPill
              label="Next.js"
              icon={<SiNextdotjs className="text-white" />}
            />
            .
          </p>*/}
          <p className="text-white/50 text-lg leading-relaxed font-hanken">
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

        </div>
      </div>
      <div className="flex px-4 gap-4 mt-6 font-hanken">
        <button
          className="
            btn-surface btn-primary
            px-4 py-2 rounded-md
            text-white font-semibold
            transition duration-300 ease-in-out
            hover:!bg-white/3 hover:cursor-pointer
            inline-flex items-center gap-2
          "
        >
          <TbFileCv className="w-4 h-4 text-white/80" />
          <span>Resume / CV</span>
        </button>

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
      </div>
    </section>
  );
}

import { ReactNode } from "react";

function TechPill({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <span
      className="
        inline-flex items-center gap-1.5 shadow-[var(--badge-inner-shadow)]
        px-2 py-1 mx-1
        rounded-md
        bg-white/12
        border border-dashed border-white/50
        text-sm text-white/90
        align-middle font-hanken
        hover:bg-white/10 transition
        whitespace-nowrap
      "
    >
      <span className="text-[15px]">{icon}</span>
      {label}
    </span>
  );
}
