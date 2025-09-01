"use client";

import Image from "next/image";
import {motion} from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/sideview_portrait_creative_shot.jpg"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
            </div>

            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1, ease: [0.22, 1, 0.36, 1]}}
                >
                    <motion.h1
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                        className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 tracking-tighter"
                    >
                        <span className="gradient-text">OPULON</span>
                    </motion.h1>
                    
                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.4}}
                        className="text-xl md:text-2xl text-white/80 mb-8 font-light"
                    >
                        Premium Automotive Excellence
                    </motion.p>

                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8, delay: 0.6}}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <button className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all transform hover:scale-105">
                            Explore Collection
                        </button>
                        <button className="px-8 py-4 glass rounded-full font-medium hover:bg-white/10 transition-all">
                            Book Test Drive
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
