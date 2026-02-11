"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { RefObject, useRef, useState, useEffect } from "react";

const techIcons = [
  "/assets/tech/TypeScript.svg",
  "/assets/tech/Appwrite.svg",
  "/assets/tech/Postman.svg",
  "/assets/tech/PostgresSQL.svg",
  "/assets/tech/GitHub.png",
  "/assets/tech/AWS.png",
  "/assets/tech/Express.png",
  "/assets/tech/React.svg",
  "/assets/tech/Bun.svg",
  "/assets/tech/nextjs.png",
  "/assets/tech/Redis.svg",
  "/assets/tech/kafka.png",
  "/assets/tech/bash.png",
  "/assets/tech/C++ (CPlusPlus).svg",
  "/assets/tech/Docker.svg",
  "/assets/tech/Elastic Search.svg",
  "/assets/tech/Git.svg",
  "/assets/tech/GitHub Actions.svg",
  "/assets/tech/Grafana.svg",
  "/assets/tech/Kubernetes.svg",
  "/assets/tech/Linux.svg",
  "/assets/tech/MongoDB.svg",
  "/assets/tech/Prometheus.svg",
  "/assets/tech/Python.svg",
  "/assets/tech/debeziumio-icon (1).svg",
];

// 🔥 Your customized scatter offsets (with toppling)
const scatterOffsets = [
  { x: -340, y: -75, rotate: -50, rotateX: 60 },
  { x: -260, y: -60, rotate: -40, rotateX: 50 },
  { x: -180, y: -45, rotate: -30, rotateX: 40 },
  { x: -100, y: -30, rotate: -20, rotateX: 30 },
  { x: -20, y: -15, rotate: -10, rotateX: 20 },
  { x: 20, y: -15, rotate: 10, rotateX: 20 },
  { x: 100, y: -30, rotate: 20, rotateX: 30 },
  { x: 180, y: -45, rotate: 30, rotateX: 40 },
  { x: 260, y: -60, rotate: 40, rotateX: 50 },
  { x: 340, y: -75, rotate: 50, rotateX: 60 },


  { x: -340, y: -75, rotate: -50, rotateX: 60 },
  { x: -260, y: -60, rotate: -40, rotateX: 50 },
  { x: -180, y: -45, rotate: -30, rotateX: 40 },
  { x: -100, y: -30, rotate: -20, rotateX: 30 },
  { x: -20, y: -15, rotate: -10, rotateX: 20 },
  { x: 20, y: -15, rotate: 10, rotateX: 20 },
  { x: 100, y: -30, rotate: 20, rotateX: 30 },
  { x: 180, y: -45, rotate: 30, rotateX: 40 },
  { x: 260, y: -60, rotate: 40, rotateX: 50 },
  { x: 340, y: -75, rotate: 50, rotateX: 60 },


  { x: -90, y: -45, rotate: -25, rotateX: 30 },
  { x: -45, y: -30, rotate: -15, rotateX: 15 },
  { x: 0, y: -15, rotate: 0, rotateX: 0 },
  { x: 45, y: -30, rotate: 15, rotateX: -15 },
  { x: 90, y: -45, rotate: 25, rotateX: -30 },
];

export default function TechIcons({ scrollTarget }: { scrollTarget: RefObject<HTMLDivElement | null> }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // md breakpoint
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start 120%", "start 20%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 15,
    mass: 2,
    restDelta: 0.001
  });

  return (
    <div className="flex justify-center max-w-xl mt-4">
      <div
        ref={containerRef}
        className="flex flex-wrap justify-center gap-2 max-w-full relative"
      >
        {techIcons.map((src, index) => {
          const scatter = scatterOffsets[index];

          // Only apply animations on larger screens
          const x = useTransform(
            smoothProgress,
            [0, 1],
            isLargeScreen ? [scatter.x * 2 * (1 - index * 0.015), 0] : [0, 0]
          );

          const y = useTransform(smoothProgress, [0, 1], isLargeScreen ? [scatter.y * 2.5, 0] : [0, 0]);
          const rotate = useTransform(smoothProgress, [0, 1], isLargeScreen ? [scatter.rotate * 2, 0] : [0, 0]);
          const rotateX = useTransform(smoothProgress, [0, 1], isLargeScreen ? [scatter.rotateX * 3.5, 0] : [0, 0]);


          return (
            <motion.div
              key={src}
              style={{ x, y, rotate, rotateX, transformPerspective: isLargeScreen ? 800 : undefined }}
              className="
                rounded-xl
                bg-[#232323]
                border border-white/8
                border-t-white/20
                p-2
              "
            >
              <img
                src={src}
                alt=""
                className="w-8 h-8"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
