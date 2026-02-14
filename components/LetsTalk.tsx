"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ShootingStars } from "@/components/ShootingStars";
import { StarField } from "@/components/StarField"
import BookCall from "./Booking";
import { motion } from "framer-motion";

export default function LetsTalk() {
    return (
        <section id="contact" className="relative flex justify-center items-center py-16 px-4 overflow-hidden">
            <StarField count={150} className="z-0" />
            <ShootingStars
                starColor="#ffffff"
                trailColor="#ffffff"
                minSpeed={4}
                maxSpeed={10}
                minDelay={1500}
                maxDelay={3500}
                starWidth={20}
                starHeight={1}
                className="absolute inset-0 -z-10"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-4xl text-center z-10"
            >
                <p className="text-gray-500 text-sm mb-6 tracking-wide uppercase">
                    If you've scrolled this far...
                </p>
                <h2 className="text-5xl md:text-4xl font-instrument text-white mb-3 tracking-tight">
                    Let's Talk
                </h2>

                <div className="flex justify-center">
                        <BookCall />
                </div>
            </motion.div>

            {/*<div className="inline-flex mt-3 items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-medium">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  Open to work & freelance projects
                </div>*/}

        </section>
    );
}
