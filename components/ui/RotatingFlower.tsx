"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const MotionImage = motion(Image);

export default function FlowerSection() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 10%"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

  const smoothRotate = useSpring(rotate, {
    stiffness: 40,
    damping: 20,
    mass: 1,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className="relative w-[300px] h-[300px] overflow-hidden">
      <MotionImage
        src="/assets/metallic-flower.png"
        alt="Metallic Flower"
        fill
        priority
        style={{ rotate: smoothRotate }}
        className="object-contain translate-y-[40%] origin-center"
      />

      <div className="absolute z-10 bottom-0 left-0 right-0 h-full bg-gradient-to-t from-[#0a0a0a]/95 via-[#0a0a0a]/30 to-transparent" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 text-[13px] text-neutral-400 font-hanken tracking-wider">
        MYSKILLS
      </div>
    </div>
  );
}
