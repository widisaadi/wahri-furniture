'use client';

import Link from 'next/link';

const categories = [
    { id: '01', name: 'Sofas', icon: 'https://imgur.com/PnEgC1Y.png', active: false },
    { id: '02', name: 'Tables', icon: 'https://imgur.com/C5hT3G9.png', active: false },
    { id: '03', name: 'Storage', icon: 'https://imgur.com/XKN4inn.png', active: false },
    { id: '04', name: 'Chairs', icon: 'https://imgur.com/rhobuY8.png', active: false },
    { id: '05', name: 'Beds', icon: 'https://imgur.com/iTNlbqD.png', active: false },
    { id: '06', name: 'Stools', icon: 'https://imgur.com/E5NHqci.png', active: false },
];

export default function CategoryCarousel() {
    return (
        <div className="w-full bg-white/50 backdrop-blur-md border-t border-gray-200 mt-auto">
            <div className="max-w-[1440px] mx-auto px-8 py-6 relative">
                <button className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-400 hover:text-primary z-20 hidden md:flex">
                    <span className="material-icons text-sm">chevron_left</span>
                </button>
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center text-gray-400 hover:text-primary z-20 hidden md:flex">
                    <span className="material-icons text-sm">chevron_right</span>
                </button>
                <div className="flex overflow-x-auto gap-0 no-scrollbar snap-x snap-mandatory">
                    {categories.map((cat) => (
                        <Link
                            key={cat.id}
                            href="#"
                            className={`min-w-[160px] md:flex-1 snap-start group border-r border-gray-200 px-4 flex flex-col justify-between h-48 transition-colors relative ${cat.active
                                ? 'bg-black overflow-hidden'
                                : 'hover:bg-gray-50'
                                }`}
                        >
                            {cat.active && (
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0"></div>
                            )}

                            <div className="flex flex-col gap-1 relative z-10">
                                <span className="text-[10px] text-accent-yellow font-bold">{cat.id}</span>
                                <span className={`text-sm font-bold ${cat.active ? 'text-white' : 'text-black'}`}>
                                    {cat.name}
                                </span>
                            </div>

                            <div className={`self-center mt-auto mb-4 relative z-10 transition-transform ${cat.active ? '' : 'opacity-80 group-hover:scale-110'} w-28 h-28 flex items-center justify-center`}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    alt={`${cat.name} Icon`}
                                    className={`w-full h-full object-contain ${cat.active
                                        ? 'invert grayscale-0 filter brightness-200'
                                        : 'grayscale group-hover:grayscale-0'
                                        }`}
                                    src={cat.icon}
                                />
                            </div>

                            {cat.active && (
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-accent-yellow z-20"></div>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
