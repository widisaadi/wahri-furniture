'use client';

import Navbar from "@/components/Navbar";
import { useCart } from "@/context/CartContext";
import { motion } from "framer-motion";

const products = [
    {
        id: 1,
        name: "Aura Sofa",
        description: "Aura Aura sofa features a striking powder-coated.",
        price: "160",
        image: "/images/collection_living_room_1766719986844.png" // Reusing appropriate existing asset
    },
    {
        id: 2,
        name: "Kobe Table",
        description: "Kobe Table resorted by creating the gium hone.",
        price: "350",
        image: "/images/collection_dining_set_1766720002133.png" // Reusing appropriate existing asset
    },
    {
        id: 3,
        name: "Storage",
        description: "Ilinear storage plante with five emeorteor and and...",
        price: "290",
        image: "/images/collection_decor_accents_1766720015873.png" // Reusing appropriate existing asset
    },
    {
        id: 4,
        name: "Ginger Chair",
        description: "The Ginger Chair features a striking powder-coated steel.",
        price: "299",
        image: "/images/collection_decor_accents_1766720015873.png" // placeholder
    },
    {
        id: 5,
        name: "Hombing",
        description: "The neutral-toned seat with a soft-featured fabric.",
        price: "299",
        image: "/images/collection_dining_set_1766720002133.png" // placeholder
    },
    {
        id: 6,
        name: "Kobe Chair",
        description: "Comforquined colors stanse with evkid ameni.mar.",
        price: "189",
        image: "/images/collection_living_room_1766719986844.png" // placeholder
    },
    {
        id: 7,
        name: "Desk Table",
        description: "The neutral-toned seat it is ucciamared in sing the ra...",
        price: "299",
        image: "/images/collection_dining_set_1766720002133.png" // placeholder
    },
    {
        id: 8,
        name: "New Bed",
        description: "A Imunastic itable bedss and frem vucilc with ballanse...",
        price: "250",
        image: "/images/collection_living_room_1766719986844.png" // placeholder
    },
    {
        id: 9,
        name: "Hunt Stools",
        description: "The neutral-toned seat is unfioler, soft-textured u...",
        price: "299",
        image: "/images/collection_decor_accents_1766720015873.png" // placeholder
    },
    {
        id: 10,
        name: "Outdoor",
        description: "The outdoor seat is allt-texure o-sam that balances.",
        price: "399",
        image: "/images/collection_dining_set_1766720002133.png" // placeholder
    },
    {
        id: 11,
        name: "Aura Sofa",
        description: "Aura Aura sofa features a striking powder-coated.",
        price: "160",
        image: "/images/collection_living_room_1766719986844.png" // placeholder
    },
    {
        id: 12,
        name: "Kobe Table",
        description: "Kobe Table resorted by creating the gium hone.",
        price: "350",
        image: "/images/collection_dining_set_1766720002133.png" // placeholder
    }
];

export default function FurniturePage() {
    const { addToCart } = useCart();
    return (
        <div className="min-h-screen bg-[#f8f8f8] text-black font-sans selection:bg-black selection:text-white">
            <Navbar />

            <main className="max-w-[1800px] mx-auto px-8 md:px-16 pt-32 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h1 className="text-6xl md:text-8xl font-serif text-black tracking-tight mb-4">
                        Furniture Catalog
                    </h1>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group flex flex-col"
                        >
                            <div className="aspect-square bg-gray-50 rounded-lg mb-6 overflow-hidden relative">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-black mb-2">{product.name}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                                    {product.description}
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-auto">
                                <span className="text-lg font-bold text-black">${product.price}</span>
                                <button
                                    onClick={() => addToCart(product)}
                                    className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors"
                                >
                                    Buy
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
}
