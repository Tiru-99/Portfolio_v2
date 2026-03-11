"use client"
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { MdOutlineEmail } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/tiru-99",
    icon: SiGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aayush-tirmanwar-b81a62261/",
    icon: SiLinkedin,
  },
  {
    name: "X",
    href: "https://x.com/tiru299",
    icon: SiX,
  },
  {
    name: "Email",
    href: "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsttFtppvfLSjCnFjRqdGQdDhVpDXcfcjgDftMKTpkbTcJGsmTTwFrJRvfMzsZWnBhPjsXDQ",
    icon: MdOutlineEmail,
  }
];

export default function Socials({ vertical = false }: { vertical?: boolean }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={`flex ${vertical ? 'flex-col' : 'flex-row'} items-center gap-5 text-white/70`}>
      {SOCIAL_LINKS.map((link, i) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="relative group flex items-center justify-center"
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          aria-label={link.name}
        >
          <link.icon className="w-5 h-5 group-hover:text-white transition-colors duration-200" />

          <AnimatePresence>
            {hoveredIndex === i && (
              <motion.span
                initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 5, filter: "blur(4px)" }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-8 px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-mono text-white/40 pointer-events-none whitespace-nowrap z-50 backdrop-blur-sm"
              >
                {link.name}
              </motion.span>
            )}
          </AnimatePresence>
        </a>
      ))}
    </div>
  )
}