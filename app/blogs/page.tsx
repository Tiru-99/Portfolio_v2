"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Container from "@/components/Container"
import Link from "next/link"

export default function Home() {
  return (
    <Container className="max-w-5xl">
      <section className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
        
        {/* Soft Background Glow */}
        <div className="absolute w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl opacity-40" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-instrument text-5xl md:text-7xl italic text-white mb-6"
        >
          Cumming Soon...
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 max-w-md mb-10"
        >
          I’m building something exciting here. Stay tuned 👀
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all border border-white/10 hover:border-white/20 backdrop-blur-md"
          >
            <ArrowLeft size={16} />
            Go to Home
          </Link>
        </motion.div>

      </section>
    </Container>
  )
}
