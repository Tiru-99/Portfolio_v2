"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, Minimize2, Maximize2, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar only after scrolling a bit
      setIsVisible(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkStyle = () =>
    cn(
      "px-4 py-2 rounded-full text-xs font-medium transition-colors",
      "text-gray-400 hover:text-white hover:bg-white/5"
    );

  const mobileLinkStyle = () =>
    cn(
      "px-6 py-4 rounded-2xl text-lg font-medium transition-all w-full flex justify-between items-center group",
      "text-gray-400 hover:text-white hover:bg-white/5"
    );

  const navLinks = [
    { name: "Home", href: "/", id: "home" },
    { name: "Work", href: "/#work", id: "experience" },
    { name: "Projects", href: "/projects", id: "projects" },
    { name: "Blog", href: "/blogs", id: "blog" },
    { name: "About", href: "/about", id: "about" },
    { name: "Contact", href: "/contact", id: "contact_page" },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    const isHomePage = window.location.pathname === "/";
    const isAnchor = href.startsWith("/#") || href === "/";

    setIsMobileMenuOpen(false);

    if (isHomePage && isAnchor && window.lenis) {
      e.preventDefault();
      const target = href === "/" ? 0 : href.replace("/", "");
      window.lenis.scrollTo(target, {
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-full h-32 backdrop-blur-md z-40 pointer-events-none mask-[linear-gradient(to_bottom,black_0%,black_30%,transparent_100%)]"
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          x: "-50%",
          opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed top-6 left-1/2 z-50 w-fit max-w-[95vw]"
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
              className="flex items-center gap-1 p-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl ring-1 ring-white/5"
            >
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link key={link.id} href={link.href} className={linkStyle()} onClick={(e) => handleNavClick(e, link.href)}>
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Toggle */}
              <div className="flex md:hidden items-center px-2">
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="p-2 rounded-full text-white/70 hover:text-white transition-colors"
                >
                  <Menu size={20} />
                </button>
                <Link href="/" className="ml-2 font-instrument italic text-white/90 text-sm tracking-tight pr-4">
                  Portfolio
                </Link>
              </div>

              <div className="flex items-center gap-2 border-l border-white/10 pl-2 pr-1">
                <a
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, "/#contact")}
                  className="hidden md:block px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-all border border-white/5 hover:border-white/10 shadow-lg whitespace-nowrap"
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 bg-black/60 backdrop-blur-md md:hidden"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute bottom-0 left-0 w-full bg-[#0A0A0A] border-t border-white/10 rounded-t-[32px] p-8 pb-12 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="font-instrument italic text-2xl text-white">Menu</div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={mobileLinkStyle()}
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/5 flex flex-col gap-4">
                <a
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, "/#contact")}
                  className="w-full py-4 rounded-2xl bg-white text-black text-center font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Book a Call
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
