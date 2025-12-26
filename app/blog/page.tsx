'use client';

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const blogPosts = [
    {
        id: 1,
        category: "DESIGN TRENDS",
        date: "OCTOBER 26, 2023",
        title: "The Art of Minimalist Furniture Design",
        excerpt: "Minimalist living room that a striking powder-coated a creating the gium hane...",
        image: "/images/collection_living_room_1766719986844.png"
    },
    {
        id: 2,
        category: "DESIGN TRENDS",
        date: "OCTOBER 17, 2023",
        title: "Choosing the Right Wood for Your Home",
        excerpt: "Choosing the right wood for your home and sontrol a poorovm mous storagic to...",
        image: "/images/craftsmanship_wood_detail_1766720030393.png"
    },
    {
        id: 3,
        category: "DESIGN TRENDS",
        date: "MAY 28, 2023",
        title: "Designing Small Spaces for Large Living",
        excerpt: "Designing small spaces for large living with a livembed with balance and trhd reoro...",
        image: "/images/collection_decor_accents_1766720015873.png"
    },
    {
        id: 4,
        category: "DESIGN TRENDS",
        date: "APRIL 26, 2023",
        title: "Sustainable Furniture: More Than a Trend",
        excerpt: "Sustainable furniture: more than a trend Including uses as sustainable rustainable furniture...",
        image: "/images/collection_dining_set_1766720002133.png"
    },
    {
        id: 5,
        category: "DESIGN TRENDS",
        date: "JULY 29, 2023",
        title: "The Impact of Color in Your Home Office",
        excerpt: "The impact of color in your home office moving to porin, and insens and unafferts bonn...",
        image: "/images/collection_living_room_1766719986844.png"
    },
    {
        id: 6,
        category: "DESIGN TRENDS",
        date: "APRIL 26, 2023",
        title: "The Impact of Color in Your Home Office",
        excerpt: "The impact of color in your home office is evenning a coram softu-e tram balance...",
        image: "/images/collection_decor_accents_1766720015873.png"
    }
];

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-[#f8f8f8] text-black font-sans selection:bg-black selection:text-white">
            <Navbar />

            <main className="max-w-[1800px] mx-auto px-8 md:px-16 pt-32 pb-24">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-16"
                    >
                        <h1 className="text-5xl md:text-7xl font-sans font-medium text-black tracking-tight mb-4">
                            Blog
                        </h1>
                    </motion.div>

                    <div className="flex flex-col gap-12">
                        {blogPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col md:flex-row gap-8 items-center group cursor-pointer bg-white p-4 rounded-2xl hover:shadow-sm transition-all duration-300"
                            >
                                <div className="w-full md:w-[400px] aspect-[16/9] rounded-xl overflow-hidden shrink-0 relative">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>

                                <div className="flex flex-col flex-1 py-2 pr-4">
                                    <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-gray-500 mb-2">
                                        <span>{post.category}</span>
                                        <span>-</span>
                                        <span>{post.date}</span>
                                    </div>

                                    <h3 className="text-3xl font-bold text-black mb-3 leading-tight font-sans tracking-tight">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    <button className="bg-black text-white px-6 py-3 rounded-full text-xs font-bold hover:bg-gray-800 transition-all flex items-center gap-2 self-start group-hover:px-8">
                                        Read More
                                        <span className="material-icons text-[14px]">arrow_forward</span>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="flex justify-center mt-24">
                        <button className="bg-black text-white px-12 py-5 rounded-full text-sm font-bold hover:bg-gray-800 transition-colors tracking-wide">
                            Load More
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
