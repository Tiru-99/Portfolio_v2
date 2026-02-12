"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, Minimize2, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = ["home", "work", "projects", "blog", "contact"];

    const handleScroll = () => {
      // Detect active section
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle = (section: string) =>
    cn(
      "px-4 py-2 rounded-full text-xs font-medium transition-colors",
      "text-gray-400 hover:text-white hover:bg-white/10"
    );

  return (
    <motion.div
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed top-6 left-1/2 z-50"
    >
      <AnimatePresence mode="wait">
        {isMinimized ? (
          <motion.button
            key="minimized"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={() => setIsMinimized(false)}
            className="p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl ring-1 ring-white/5 hover:bg-white/10 transition-colors"
          >
            <Maximize2 size={16} className="text-white" />
          </motion.button>
        ) : (
          <motion.nav
            key="expanded"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="flex items-center gap-1 p-2 pl-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl ring-1 ring-white/5"
          >
            <div className="flex items-center gap-1">
              <Link href="/" className={linkStyle("home")}>
                Home
              </Link>

              <a href="/#work" className={linkStyle("experience")}>
                Work
              </a>

              <Link href="/projects" className={linkStyle("projects")}>
                Projects
              </Link>

              <a href="/blogs" className={linkStyle("blog")}>
                Blog
              </a>

              <button className="flex items-center gap-1 px-4 py-2 rounded-full text-gray-400 text-xs font-medium hover:text-white transition-colors group">
                More
                <ChevronDown
                  size={14}
                  className="group-hover:rotate-180 transition-transform"
                />
              </button>
            </div>

            <div className="pl-2 pr-1 flex items-center gap-2">
              <a
                href="/#contact"
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-all border border-white/5 hover:border-white/10 shadow-lg"
              >
                Book a Call
              </a>

              <button
                onClick={() => setIsMinimized(true)}
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Minimize navbar"
              >
                <Minimize2 size={14} />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
