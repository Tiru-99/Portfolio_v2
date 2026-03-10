"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Crosshair } from "lucide-react"

export default function TableOfContents({ headings, isLightMode }: { headings: any, isLightMode: boolean }) {
  const [activeId, setActiveId] = useState("")
  const isManualScroll = useRef(false)

  useEffect(() => {
    const elements = document.querySelectorAll("h1, h2, h3")

    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScroll.current) return

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-100px 0px -70% 0px"
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleLinkClick = (id: string) => {
    setActiveId(id)
    isManualScroll.current = true

    setTimeout(() => {
      isManualScroll.current = false
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className={`px-3 text-xs font-bold uppercase tracking-[0.2em] transition-colors ${isLightMode ? "text-black/60" : "text-white/40"
        }`}>
        Table of Contents
      </div>

      <nav className="space-y-0.5">
        {headings.map((h1: any, index: number) => (
          <div key={h1.id} className="relative">
            <a
              href={`#${h1.id}`}
              onClick={() => handleLinkClick(h1.id)}
              className={`flex items-center gap-3 py-2 px-3 rounded-lg transition-all duration-300 relative z-10 ${activeId === h1.id
                  ? (isLightMode ? "text-black font-bold" : "text-white font-bold")
                  : isLightMode
                    ? "text-black/60 hover:text-black hover:bg-black/[0.03]"
                    : "text-white/50 hover:text-white hover:bg-white/[0.03]"
                }`}
            >
              <span className={`text-[10px] font-mono opacity-40 w-4 ${activeId === h1.id ? 'opacity-100 text-blue-500' : ''}`}>
                {activeId === h1.id ? <Crosshair size={10} /> : (index + 1).toString().padStart(2, '0')}
              </span>
              <span className="text-[13px] truncate">{h1.text}</span>

              {activeId === h1.id && (
                <motion.div
                  layoutId="toc-active-bg"
                  className={`absolute inset-0 rounded-lg -z-10 ${isLightMode ? "bg-black/[0.05]" : "bg-white/[0.07]"
                    }`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>

            {h1.children && h1.children.length > 0 && (
              <div className={`ml-7 mt-0.5 space-y-0.5 border-l ${isLightMode ? 'border-black/5' : 'border-white/5'}`}>
                {h1.children.map((h2: any) => (
                  <a
                    key={h2.id}
                    href={`#${h2.id}`}
                    onClick={() => handleLinkClick(h2.id)}
                    className={`block py-1.5 pl-4 text-[12px] truncate transition-all duration-300 relative ${activeId === h2.id
                        ? (isLightMode ? "text-black/80 font-bold" : "text-white/90 font-bold")
                        : isLightMode
                          ? "text-black/50 hover:text-black"
                          : "text-white/40 hover:text-white"
                      }`}
                  >
                    {activeId === h2.id && (
                      <motion.div
                        layoutId="toc-active-dot"
                        className="absolute left-[-1.5px] top-1/2 -translate-y-1/2 w-[3px] h-[3px] rounded-full bg-blue-500"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {h2.text}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  )
}