"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { ShootingStars } from "@/components/ShootingStars";
import { StarField } from "@/components/StarField"
import BookCall from "./Booking";

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
            <div className="w-full max-w-4xl text-center z-10">
                <p className="text-gray-500 text-sm mb-6 tracking-wide uppercase">
                    If you've scrolled this far...
                </p>
                <h2 className="text-5xl md:text-4xl font-instrument text-white mb-3 tracking-tight">
                    Let's Talk
                </h2>

                <div className="flex justify-center">
                    <a
                      
                        className="group inline-flex items-center gap-4 p-2 pr-6 bg-black/40 border border-white/10 rounded-full hover:bg-white/5 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                    >
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
                            <Image
                                src="/assets/profile.jpeg"
                                alt="Profile"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <BookCall/>
                        <div className="pl-3 pr-1 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                            <ArrowRight size={16} className="text-gray-400 group-hover:text-white" />
                        </div>
                    </a>
                </div>
                
                {/*<div className="inline-flex mt-3 items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-medium">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  Open to work & freelance projects
                </div>*/}

            </div>
        </section>
    );
}
