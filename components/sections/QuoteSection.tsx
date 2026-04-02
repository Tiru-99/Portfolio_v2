"use client";

import { motion } from "framer-motion";

export default function QuoteSection() {
    return (
        <section className="relative py-32 px-6 overflow-hidden flex flex-col items-center justify-center">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-32 bg-yellow-500/5 blur-[80px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="relative max-w-3xl w-full"
            >
                {/* Decorative Brackets / Frame */}
                <div className="absolute -top-12 -left-4 sm:-left-8 text-6xl sm:text-8xl font-instrument text-white/20 select-none pointer-events-none">
                    &ldquo;
                </div>
                <div className="absolute -bottom-12 -right-4 sm:-right-8 text-6xl sm:text-8xl font-instrument text-white/20 select-none pointer-events-none">
                    &rdquo;
                </div>

                <div className="relative z-10 flex flex-col items-center">
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
                        className="w-12 h-px bg-linear-to-r from-transparent via-orange-500/40 to-transparent mb-10"
                    />

                    <h2 className="font-instrument text-3xl sm:text-4xl md:text-5xl text-white/90 leading-tight italic text-center tracking-tight">
                        &ldquo;Obsession with outcomes is weakness. You have a right to action, never to its fruit.&rdquo;
                    </h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
                        className="w-12 h-px bg-linear-to-r from-transparent via-orange-500/40 to-transparent mt-10 mb-6"
                    />

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.4em] text-white/30">
                            Bhagavad Gita 2.47
                        </span>
                        
                        {/* Sanskirt text for extra "cool" factor - Transliteration */}
                        <span className="font-instrument italic text-sm text-white/10 tracking-widest mt-1">
                            Karmaṇyēvādhikārastē mā phalēṣu kadācana
                        </span>
                    </motion.div>
                </div>

                {/* Subtle light streak */}
                <motion.div
                    animate={{
                        left: ["-100%", "200%"],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute top-0 bottom-0 w-64 bg-linear-to-r from-transparent via-white/2 to-transparent -skew-x-12 pointer-events-none"
                />
            </motion.div>
        </section>
    );
}
