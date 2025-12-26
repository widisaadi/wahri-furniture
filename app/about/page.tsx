'use client';

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#f8f8f8] text-black font-sans selection:bg-black selection:text-white">
            <Navbar />

            <main className="max-w-[1800px] mx-auto px-8 md:px-16 pt-32 pb-24">

                {/* Header Section */}
                <div className="max-w-5xl mx-auto mb-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-7xl font-sans font-medium text-black tracking-tight mb-8"
                    >
                        Our Story
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-light">
                            Wahri Furniture was born from a simple belief: that the objects we surround ourselves with should bring calm, beauty, and function to our everyday lives.
                        </p>
                    </motion.div>
                </div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full aspect-[21/9] md:aspect-[2.5/1] rounded-2xl overflow-hidden mb-24 relative"
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/images/about_brand_story_1766718884414.png"
                        alt="Wahri Design Studio"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Content Section 1: Philosophy */}
                <div className="max-w-5xl mx-auto mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-6 block">Philosophy</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-black mb-8 leading-tight">
                                Designing for the <span className="italic text-gray-400">modern sanctuary.</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                In a world that is increasingly loud and chaotic, we strive to create furniture that grounds you. Our design language is rooted in minimalism, but not the cold, sterile kind. We believe in warm minimalism—spaces that feel open but inviting, clean but lived-in.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Every curve, joint, and material choice is intentional. We strip away the non-essential to reveal the pure form and function of the piece.
                            </p>
                        </div>
                        <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gray-100">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/collection_living_room_1766719986844.png"
                                alt="Minimalist Living Room"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Content Section 2: Craftsmanship (Reversed) */}
                <div className="max-w-5xl mx-auto mb-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gray-100 md:order-1 order-2">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/craftsmanship_wood_detail_1766720030393.png"
                                alt="Wood Detail"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="md:order-2 order-1">
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-6 block">Craftsmanship</span>
                            <h2 className="text-4xl md:text-5xl font-serif text-black mb-8 leading-tight">
                                Honoring the <span className="italic text-gray-400">material.</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                We work primarily with solid woods like Oak, Walnut, and Ash, sourced from sustainable forests. We celebrate the natural imperfections of the wood—the knots, the grain patterns—viewing them not as flaws, but as the unique fingerprint of nature.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Our craftsmen combine traditional joinery techniques with modern precision manufacturing to create pieces that are built to last for generations, not just seasons.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Values Grid */}
                <div className="max-w-6xl mx-auto mb-32 bg-white rounded-3xl p-12 md:p-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-black mb-4">Our Core Values</h2>
                        <div className="w-16 h-1 bg-black mx-auto rounded-full opacity-10"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6 text-2xl">
                                🌿
                            </div>
                            <h3 className="text-xl font-bold mb-4 font-serif">Sustainability</h3>
                            <p className="text-gray-500 leading-relaxed">
                                We are committed to responsible sourcing and production practices that minimize our environmental footprint.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6 text-2xl">
                                ⏳
                            </div>
                            <h3 className="text-xl font-bold mb-4 font-serif">Longevity</h3>
                            <p className="text-gray-500 leading-relaxed">
                                We design against obsolescence. Our furniture is made to be repaired, refinished, and loved for decades.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center mb-6 text-2xl">
                                ✨
                            </div>
                            <h3 className="text-xl font-bold mb-4 font-serif">Authenticity</h3>
                            <p className="text-gray-500 leading-relaxed">
                                Transparent pricing and honest materials. What you see is exactly what you get—solid, real, and authentic.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quote Section */}
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <blockquote className="text-3xl md:text-5xl font-serif leading-tight text-black mb-8">
                        "We don't just design furniture; we design the backdrop for life's most important moments."
                    </blockquote>
                    <div className="flex flex-col items-center gap-2">
                        <span className="font-bold text-lg">Wahri Founder</span>
                        <span className="text-gray-400 text-sm uppercase tracking-widest">Creative Director</span>
                    </div>
                </div>

            </main>
        </div>
    );
}
