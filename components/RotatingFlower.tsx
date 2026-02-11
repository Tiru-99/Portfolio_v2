"use client"

import Image from "next/image"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

export default function RotatingFlower() {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Lightly smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    mass: 0.5,
  })

  // Controlled, calm rotation
  const rotate = useTransform(smoothProgress, [0, 1], [0, 180])

  return (
    <div ref={ref} className="absolute inset-0 flex items-center justify-center">
      <motion.div
        style={{ rotate }}
        className="w-64 h-64 md:w-80 md:h-100 will-change-transform"
      >
        <Image
          src="/assets/metallic-flower.png"
          alt="Metallic Flower"
          fill
          className="object-contain"
          priority
        />
      </motion.div>
    </div>
  )
}