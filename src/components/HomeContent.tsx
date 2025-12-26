'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function HomeContent() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const sections = gsap.utils.toArray<HTMLElement>('.content-section');
        const parallaxText = containerRef.current?.querySelector('.parallax-text');

        // Parallax Background Text
        if (parallaxText) {
            gsap.to(parallaxText, {
                y: 300,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 1
                }
            });
        }

        // Section Reveal Animations
        sections.forEach((section) => {
            gsap.fromTo(section.children,
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        });

        // Horizontal Marquee Animation
        const marquee = containerRef.current?.querySelector('.marquee-container');
        if (marquee) {
            gsap.to(marquee, {
                x: '-30%',
                ease: 'none',
                scrollTrigger: {
                    trigger: marquee,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                }
            });
        }
    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="flex flex-col w-full relative overflow-clip">
            {/* Parallax Background */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none z-0 select-none hidden lg:block">
                <span className="parallax-text text-[45vw] leading-none font-serif text-black whitespace-nowrap">
                    WAHRI
                </span>
            </div>

            {/* SECTION 1: Brand Philosophy (Editorial Style) */}
            <section className="content-section min-h-[90vh] flex flex-col justify-center py-24 relative z-10">
                <div className="max-w-[1800px] mx-auto px-8 md:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
                    <div>
                        <span className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-8 block">The Philosophy</span>
                        <h2 className="text-6xl md:text-8xl 2xl:text-9xl font-serif text-black leading-[0.9] mb-12">
                            Timeless forms,<br />
                            <span className="italic relative pr-6">
                                conscious
                                <span className="absolute -right-6 top-0 text-3xl text-accent-yellow">✦</span>
                            </span>
                            living.
                        </h2>
                    </div>
                    <div className="flex flex-col gap-10 lg:pt-8">
                        <p className="text-xl md:text-3xl text-gray-500 leading-relaxed font-light max-w-2xl">
                            We believe furniture is the silent backdrop to life’s most meaningful moments. It shouldn't just fill a space; it should ground it.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 border-t border-gray-200 pt-10">
                            {[
                                { title: 'Design Integrity', desc: 'Stripping away the non-essential to reveal the pure form.' },
                                { title: 'Generational Quality', desc: 'Crafted with materials that age gracefully over decades.' }
                            ].map((item, i) => (
                                <div key={i}>
                                    <h3 className="text-xl font-bold text-black mb-2 font-serif">{item.title}</h3>
                                    <p className="text-base text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Featured Collections (Staggered Grid) */}
            <section id="collections" className="content-section min-h-screen py-24 border-t border-gray-100 z-10 relative bg-white">
                <div className="max-w-[1800px] mx-auto px-8 md:px-16 w-full">
                    <div className="flex justify-between items-end mb-20">
                        <h2 className="text-5xl md:text-7xl font-serif text-black">Curated Collections</h2>
                        <a href="#" className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-gray-500 transition-colors">
                            View Catalog <span className="material-icons text-base">arrow_forward</span>
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 gap-y-16">
                        {/* Item 1: Large Feature */}
                        <div className="col-span-1 md:col-span-8 group cursor-pointer">
                            <div className="relative aspect-[16/9] overflow-hidden rounded-sm mb-6">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/collection_living_room_1766719986844.png" alt="Nordic Living Collection" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-4xl font-serif text-black mb-1 group-hover:underline decoration-1 underline-offset-4">The Nordic Modular</h3>
                                    <p className="text-gray-500 text-lg">Living Room Series</p>
                                </div>
                                <span className="text-sm font-bold border border-gray-200 px-3 py-1 rounded-full text-gray-400">12 Items</span>
                            </div>
                        </div>

                        {/* Item 2: Vertical */}
                        <div className="col-span-1 md:col-span-4 md:mt-32 group cursor-pointer">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-6">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/collection_decor_accents_1766720015873.png" alt="Home Accents" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                            </div>
                            <div>
                                <h3 className="text-4xl font-serif text-black mb-1 group-hover:underline decoration-1 underline-offset-4">Object & Form</h3>
                                <p className="text-gray-500 text-lg">Decor Accents</p>
                            </div>
                        </div>

                        {/* Item 3: Horizontal */}
                        <div className="col-span-1 md:col-span-5 group cursor-pointer">
                            <div className="relative aspect-square overflow-hidden rounded-sm mb-6">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/images/collection_dining_set_1766720002133.png" alt="Dining Collection" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                            </div>
                            <div>
                                <h3 className="text-4xl font-serif text-black mb-1 group-hover:underline decoration-1 underline-offset-4">Gathering Places</h3>
                                <p className="text-gray-500 text-lg">Dining Series</p>
                            </div>
                        </div>

                        {/* Item 4: Text Block */}
                        <div className="col-span-1 md:col-span-7 flex flex-col justify-center items-start md:pl-24">
                            <span className="text-8xl text-gray-200 font-serif opacity-30 mb-8">04</span>
                            <h3 className="text-5xl md:text-6xl font-serif text-black mb-8 leading-tight">
                                Designed for the modern<br /> sanctuary.
                            </h3>
                            <p className="text-xl text-gray-500 max-w-md mb-10">
                                Explore our full range of products designed to bring calm and beauty to your everyday rituals.
                            </p>
                            <Link href="/furniture" className="bg-black text-white px-10 py-5 rounded-full hover:bg-opacity-80 transition-all text-lg">
                                Explore All Collections
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Craftsmanship Story */}
            <section className="content-section min-h-[80vh] bg-[#f8f8f7] flex items-center py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#f0f0ee] hidden md:block"></div>
                <div className="max-w-[1800px] mx-auto px-8 md:px-16 w-full relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div className="pr-10">
                        <span className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-6 block">Artisan Process</span>
                        <h2 className="text-6xl md:text-8xl font-serif text-black mb-10">
                            Soul in the<br /><span className="italic text-gray-400">details.</span>
                        </h2>
                        <div className="space-y-10">
                            <div className="flex gap-6 items-start">
                                <span className="text-sm font-bold text-black border-b border-black pb-1 mt-1">01</span>
                                <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                                    Every joint is hand-finished, ensuring the structural integrity matches the visual beauty. We don't use shortcuts; we use time.
                                </p>
                            </div>
                            <div className="flex gap-6 items-start">
                                <span className="text-sm font-bold text-black border-b border-black pb-1 mt-1">02</span>
                                <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                                    Sourced from sustainable forests, our oak and walnut carry the unique fingerprint of nature into your home.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="aspect-[4/5] overflow-hidden rounded-lg shadow-2xl relative">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src="/images/craftsmanship_wood_detail_1766720030393.png" alt="Joinery Detail" className="absolute inset-0 w-full h-full object-cover scale-110" />

                            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-8 rounded-sm border border-white/50">
                                <span className="font-serif text-2xl italic text-black block mb-2">"Quality is not an act, it is a habit."</span>
                                <span className="text-xs uppercase tracking-widest text-gray-400">Head of Design</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Trusted By (Marquee) */}
            <section className="content-section min-h-[60vh] flex flex-col justify-center py-24 border-t border-gray-100 overflow-hidden bg-white">
                <div className="w-full">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 px-8 md:px-16 max-w-[1800px] mx-auto">
                        <div>
                            <h2 className="text-5xl md:text-7xl font-serif tracking-tight text-black mb-6">
                                Trusted Partners
                            </h2>
                            <p className="text-gray-500 text-xl leading-relaxed max-w-xl">
                                Collaborating with visionaries to create spaces that inspire.
                            </p>
                        </div>
                    </div>

                    <div className="relative w-full">
                        <div className="marquee-container flex gap-16 whitespace-nowrap">
                            {[
                                '/images/partner_logo_1_1766718897985.png',
                                '/images/partner_logo_2_1766718912777.png',
                                '/images/partner_logo_3_1766718928253.png',
                                '/images/partner_logo_4_1766718947087.png',
                                '/images/partner_logo_5_1766718960369.png',
                                '/images/partner_logo_6_v2_1766719123429.png',
                                '/images/partner_logo_7_v2_1766719215300.png',
                                '/images/partner_logo_8_v2_1766719230253.png',
                                '/images/partner_logo_9_v2_1766719243748.png',
                                '/images/partner_logo_10_v2_1766719318279.png',
                                '/images/partner_logo_1_1766718897985.png',
                                '/images/partner_logo_2_1766718912777.png',
                                '/images/partner_logo_3_1766718928253.png',
                                '/images/partner_logo_4_1766718947087.png',
                                '/images/partner_logo_5_1766718960369.png'
                            ].map((logo, i) => (
                                <div key={i} className="flex-shrink-0 w-64 md:w-80 aspect-[3/2] flex items-center justify-center p-10 grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100 bg-gray-50 rounded-lg border border-transparent hover:border-gray-200">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={logo} alt={`Partner Logo ${i + 1}`} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: CTA */}
            <section className="content-section min-h-[80vh] flex items-center py-20 border-t border-gray-100 bg-black text-white relative">
                {/* Abstract Shapes */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

                <div className="w-full max-w-[1800px] mx-auto px-8 md:px-16 flex flex-col md:flex-row gap-20 items-center relative z-10">
                    <div className="flex-1">
                        <span className="text-accent-yellow font-bold uppercase tracking-widest mb-6 block text-sm">Start Your Project</span>
                        <h2 className="text-6xl md:text-9xl font-serif mb-8 leading-none">
                            Design for<br />
                            <span className="italic text-white/50">life.</span>
                        </h2>
                        <p className="text-white/60 text-2xl leading-relaxed mb-12 max-w-lg">
                            Ready to transform your space? Our design team is here to help you select the perfect pieces.
                        </p>
                        <div className="flex gap-6 items-center">
                            <span className="text-sm font-bold opacity-50">Follow us</span>
                            <div className="flex gap-4">
                                {['Instagram', 'Pinterest', 'LinkedIn'].map((social) => (
                                    <a key={social} href="#" className="hover:text-accent-yellow transition-colors underline decoration-white/30 underline-offset-4">{social}</a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 w-full bg-white/10 backdrop-blur-md p-10 md:p-20 rounded-sm border border-white/10">
                        <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase text-white/40 tracking-wider">First Name</label>
                                    <input type="text" className="bg-transparent border-b border-white/20 py-3 focus:border-white focus:outline-none text-white transition-colors text-lg" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-xs font-bold uppercase text-white/40 tracking-wider">Last Name</label>
                                    <input type="text" className="bg-transparent border-b border-white/20 py-3 focus:border-white focus:outline-none text-white transition-colors text-lg" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-xs font-bold uppercase text-white/40 tracking-wider">Email</label>
                                <input type="email" className="bg-transparent border-b border-white/20 py-3 focus:border-white focus:outline-none text-white transition-colors text-lg" />
                            </div>

                            <button className="bg-white text-black px-12 py-6 rounded-full text-base font-bold hover:bg-accent-yellow transition-colors mt-6 self-start tracking-wide">
                                SEND REQUEST
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
