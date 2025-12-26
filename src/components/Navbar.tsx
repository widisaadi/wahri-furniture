'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, User, ShoppingBag, X, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const pathname = usePathname();
    const { cartItems, removeFromCart, isCartOpen, openCart, closeCart, cartCount } = useCart();

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Furniture', href: '/furniture' },
        { name: 'Blog', href: '/blog' },
        { name: 'About', href: '/about' },
    ];

    const totalPrice = cartItems.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0);

    return (
        <>
            <nav className="w-full py-6 px-8 md:px-16 flex items-center justify-between bg-transparent relative z-20">
                <Link href="/" className="flex items-center gap-1 group">
                    <span className="text-2xl font-bold font-sans tracking-tight text-black group-hover:text-primary transition-colors">Wahri Furniture</span>
                    <span className="w-2 h-2 rounded-full bg-primary mt-1"></span>
                </Link>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`transition-colors ${pathname === item.href ? 'text-black font-semibold' : 'hover:text-primary text-gray-500'}`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
                <div className="flex items-center gap-6 text-gray-600">
                    <button className="hover:text-black transition-colors">
                        <Search className="w-5 h-5" strokeWidth={2} />
                    </button>
                    <button className="hover:text-black transition-colors">
                        <User className="w-5 h-5" strokeWidth={2} />
                    </button>
                    <button
                        className="relative hover:text-black transition-colors flex items-center"
                        onClick={openCart}
                    >
                        <ShoppingBag className="w-5 h-5" strokeWidth={2} />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-[#fbbf24] text-black text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                                {cartCount}
                            </span>
                        )}
                    </button>
                </div>
            </nav>

            {/* Cart Drawer Overlay */}
            <AnimatePresence>
                {isCartOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={closeCart}
                            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-full md:w-[400px] bg-white z-50 shadow-2xl flex flex-col"
                        >
                            <div className="p-6 flex items-center justify-between border-b border-gray-100">
                                <h2 className="text-xl font-bold font-serif">Your Cart ({cartCount})</h2>
                                <button onClick={closeCart} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-6 scrollbar-thin">
                                {cartItems.length === 0 ? (
                                    <div className="h-full flex flex-col items-center justify-center text-gray-500 space-y-4">
                                        <ShoppingBag className="w-12 h-12 opacity-20" />
                                        <p>Your cart is empty.</p>
                                        <button
                                            onClick={closeCart}
                                            className="text-black underline font-bold"
                                        >
                                            Start Shopping
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex flex-col gap-6">
                                        {cartItems.map((item) => (
                                            <div key={item.id} className="flex gap-4">
                                                <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex-1 flex flex-col justify-between">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h3 className="font-bold text-sm">{item.name}</h3>
                                                            <p className="text-xs text-gray-500 line-clamp-1">{item.description}</p>
                                                        </div>
                                                        <button
                                                            onClick={() => removeFromCart(item.id)}
                                                            className="text-gray-400 hover:text-red-500 transition-colors"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </button>
                                                    </div>
                                                    <div className="flex justify-between items-center mt-2">
                                                        <div className="flex items-center gap-2 bg-gray-50 rounded-full px-2 py-1">
                                                            <span className="text-xs font-bold px-1">{item.quantity}</span>
                                                        </div>
                                                        <span className="font-bold text-sm">${(parseFloat(item.price) * item.quantity).toFixed(2)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="p-6 border-t border-gray-100 bg-gray-50">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-gray-500">Subtotal</span>
                                    <span className="text-xl font-bold font-serif">${totalPrice.toFixed(2)}</span>
                                </div>
                                <button className="w-full bg-black text-white py-4 rounded-full font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                                    Checkout Now
                                    <span className="w-1 h-1 bg-white rounded-full"></span>
                                    ${totalPrice.toFixed(2)}
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
