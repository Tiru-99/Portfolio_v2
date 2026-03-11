"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MetalPlateProps {
    children: ReactNode;
    className?: string;
}

export default function MetalPlate({ children, className = "" }: MetalPlateProps) {
    return (
        <div className={`relative ${className} group`}>
            {/* ── Machined Edge Bevel (Outer) ── */}
            <div className="absolute -inset-px rounded-[13px] bg-linear-to-b from-white/20 via-white/5 to-black/40 pointer-events-none" />

            {/* ── Main Hardware Body (Sleek Titanium / Space Black) ── */}
            <div className="relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden backdrop-blur-3xl px-12 py-4 shadow-[0_30px_60px_-12px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.05)]">

                {/* Micro-Precision Grid (Ultra Subtle) */}
                <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(circle, #fff 0.5px, transparent 0.5px)', backgroundSize: '12px 12px' }} />

                {/* Sleek Textures */}
                <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-150 contrast-150" />
                <div className="absolute inset-0 bg-linear-to-b from-white/3 to-transparent pointer-events-none" />

                {/* Razor-Thin Precision Light Beam */}
                <motion.div
                    animate={{
                        left: ["-100%", "200%"],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        repeatDelay: 1.0,
                        ease: [0.4, 0, 0.2, 1],
                    }}
                    className="absolute top-0 bottom-0 w-32 bg-linear-to-r from-transparent via-white/15 to-transparent -skew-x-45 pointer-events-none blur-md"
                />

                {/* Polished Precision Screws (3D Realism) */}
                {[
                    "top-3 left-3",
                    "top-3 right-3",
                    "bottom-3 left-3",
                    "bottom-3 right-3"
                ].map((pos) => (
                    <div key={pos} className={`absolute ${pos} w-2 h-2 rounded-full flex items-center justify-center`}>
                        {/* The screw head with polished metal highlight */}
                        <div className="w-full h-full rounded-full bg-linear-to-br from-white/40 via-[#333] to-black shadow-[0.5px_0.5px_1px_rgba(0,0,0,0.8),inset_-0.5px_-0.5px_0.5px_rgba(255,255,255,0.1)] border border-white/5" />
                        {/* The sharp screw slot */}
                        <div className="absolute w-[60%] h-[0.5px] bg-black/90 rotate-45" />
                    </div>
                ))}

                {/* Inner Border Reflection (The "Chamfer") */}
                <div className="absolute inset-0 border border-white/3 rounded-xl pointer-events-none" />

                {/* Content Container */}
                <div className="relative z-10 flex flex-col items-center gap-1">
                    {children}
                </div>
            </div>

            {/* ── Floor Glow ── */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-2/3 h-10 bg-black/60 blur-3xl pointer-events-none -z-10" />
        </div>
    );
}
