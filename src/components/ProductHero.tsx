'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import InquiryForm from './InquiryForm';

export default function ProductHero() {
    const router = useRouter();
    const [showInquiry, setShowInquiry] = useState(false);

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="max-w-[1800px] mx-auto px-8 md:px-16 w-full mb-16">
            <motion.div
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
                <motion.div variants={fadeInUp} className="lg:col-span-5 flex flex-col justify-center space-y-8 z-10">
                    <div>
                        <h1 className="text-7xl md:text-9xl font-light tracking-tighter text-black leading-none mb-6">
                            Ginger
                        </h1>
                        <p className="text-gray-500 text-base leading-relaxed max-w-md">
                            Experience the perfect balance of sculptural design and everyday comfort. The Ginger Chair redefines modern living.
                        </p>
                    </div>
                    <div className="pt-4">
                        <button
                            onClick={() => router.push('/furniture')}
                            className="group bg-black text-white px-8 py-4 rounded-full flex items-center gap-4 hover:scale-105 transition-transform duration-300 shadow-lg"
                        >
                            <span className="font-medium text-sm tracking-wide">Lihat Katalog</span>
                            <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center group-hover:bg-primary transition-colors">
                                <span className="material-icons text-sm text-white group-hover:text-white">arrow_forward</span>
                            </div>
                        </button>
                    </div>
                    <div className="flex gap-8 pt-8 border-t border-gray-200 mt-8">
                        <div className="flex flex-col gap-1">
                            <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Style</span>
                            <span className="text-sm font-medium text-black">Sculptural Design</span>
                        </div>
                        <div className="w-px h-10 bg-gray-200"></div>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Usage</span>
                            <span className="text-sm font-medium text-black">Everyday Comfort</span>
                        </div>
                        <div className="w-px h-10 bg-gray-200"></div>
                        <div className="flex flex-col gap-1">
                            <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Quality</span>
                            <span className="text-sm font-medium text-black">Built to Last</span>
                        </div>
                    </div>
                </motion.div>
                <motion.div variants={fadeInUp} className="lg:col-span-4 relative flex justify-center items-center h-[500px] md:h-[600px]">
                    <div className="absolute bottom-10 w-4/5 h-12 bg-black/10 blur-xl rounded-[100%]"></div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/images/chair-main.png"
                        alt="Orange minimalist chair"
                        className="relative z-10 h-full w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 ease-out"
                        style={{ maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)' }}
                    />
                </motion.div>
                <motion.div variants={fadeInUp} className="lg:col-span-3 flex flex-col gap-6 mt-8 lg:mt-0">
                    <div className="bg-surface-light p-2 rounded-xl shadow-sm border border-gray-100">
                        <div className="relative aspect-square overflow-hidden rounded-lg mb-4">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/images/chair-context.jpg"
                                alt="Chair in living room context"
                                className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                        </div>
                        <div className="px-2 pb-2">
                            <p className="text-xs text-gray-500 leading-relaxed">
                                The neutral-toned seat is upholstered in a soft-textured fabric that balances the bold frame with understated comfort.
                            </p>
                        </div>
                    </div>
                </motion.div>
                <AnimatePresence>
                    {showInquiry && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                            onClick={() => setShowInquiry(false)}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                                className="bg-white p-8 rounded-3xl shadow-2xl max-w-lg w-full relative border border-gray-100"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button
                                    onClick={() => setShowInquiry(false)}
                                    className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
                                >
                                    <span className="material-icons">close</span>
                                </button>
                                <InquiryForm
                                    productId="ginger-chair-01"
                                    productName="Ginger Chair"
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
