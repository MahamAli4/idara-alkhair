'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ShopPage() {
    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />

            {/* ===== HERO BANNER ===== */}
            <section className="relative mt-[100px] mx-4 md:mx-8 rounded-2xl overflow-hidden h-[250px] md:h-[350px]">
                <img
                    src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop"
                    alt="Idara Shop"
                    className="w-full h-full object-cover"
                />
                {/* Vibrant Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-r from-[#012060]/80 to-transparent"></div>
                {/* Title and Breadcrumb-like title */}
                <div className="absolute inset-0 flex flex-col items-start justify-center px-10 md:px-20">
                    <span className="text-idara-orange font-bold tracking-widest uppercase mb-2">Social Enterprise</span>
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                        IDARA <span className="italic font-light">SHOP</span>
                    </h1>
                    <p className="text-white/80 mt-4 max-w-md font-medium">
                        Every purchase you make directly supports the education and welfare of children at Idara Al-Khair.
                    </p>
                </div>
            </section>

            {/* ===== MISSION STATEMENT ===== */}
            <section className="py-12 px-6 md:px-12 bg-idara-orange text-white text-center">
                <div className="container mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold italic">
                        "Shop with a Purpose, Wear with Pride, Give with Love."
                    </h2>
                </div>
            </section>

            {/* ===== PRODUCT HIGHLIGHTS ===== */}
            <section className="container mx-auto px-6 md:px-12 py-20">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h3 className="text-idara-navy text-4xl md:text-5xl font-black mb-2">Our <span className="text-idara-orange italic">Favorites</span></h3>
                        <p className="text-gray-500 font-medium">Hand-picked collection of items made by our beneficiaries.</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-6 py-2 rounded-full border-2 border-idara-navy text-idara-navy font-bold hover:bg-idara-navy hover:text-white transition-all">
                            Filter
                        </button>
                        <button className="px-6 py-2 rounded-full bg-idara-navy text-white font-bold hover:opacity-90 transition-all">
                            Latest
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Product 1 */}
                    <div className="group">
                        <div className="relative aspect-3/4 rounded-[30px] overflow-hidden bg-gray-100 mb-6 transition-transform group-hover:-translate-y-2">
                            <img
                                src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=2000&auto=format&fit=crop"
                                alt="Handmade Tote Bag"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-idara-navy font-bold text-sm">
                                $25.00
                            </div>
                            <div className="absolute inset-0 bg-idara-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button className="bg-white text-idara-navy px-8 py-3 rounded-full font-black text-sm uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-idara-navy">Artisan Tote Bag</h4>
                        <p className="text-gray-500 italic">Crafted by Technical Center</p>
                    </div>

                    {/* Product 2 */}
                    <div className="group">
                        <div className="relative aspect-3/4 rounded-[30px] overflow-hidden bg-gray-100 mb-6 transition-transform group-hover:-translate-y-2">
                            <img
                                src="https://images.unsplash.com/photo-1596462502278-27bfad450516?q=80&w=2000&auto=format&fit=crop"
                                alt="Eco Notebook"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-idara-navy font-bold text-sm">
                                $12.00
                            </div>
                            <div className="absolute inset-0 bg-idara-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button className="bg-white text-idara-navy px-8 py-3 rounded-full font-black text-sm uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-idara-navy">Eco Diary</h4>
                        <p className="text-gray-500 italic">Handmade Paper</p>
                    </div>

                    {/* Product 3 */}
                    <div className="group">
                        <div className="relative aspect-3/4 rounded-[30px] overflow-hidden bg-gray-100 mb-6 transition-transform group-hover:-translate-y-2">
                            <img
                                src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=2000&auto=format&fit=crop"
                                alt="Support Tee"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-idara-navy font-bold text-sm">
                                $30.00
                            </div>
                            <div className="absolute inset-0 bg-idara-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button className="bg-white text-idara-navy px-8 py-3 rounded-full font-black text-sm uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-idara-navy">Official Logo Tee</h4>
                        <p className="text-gray-500 italic">Premium Cotton</p>
                    </div>

                    {/* Product 4 */}
                    <div className="group">
                        <div className="relative aspect-3/4 rounded-[30px] overflow-hidden bg-gray-100 mb-6 transition-transform group-hover:-translate-y-2">
                            <img
                                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2000&auto=format&fit=crop"
                                alt="Impact Watch"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-idara-navy font-bold text-sm">
                                $45.00
                            </div>
                            <div className="absolute inset-0 bg-idara-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <button className="bg-white text-idara-navy px-8 py-3 rounded-full font-black text-sm uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                        <h4 className="text-xl font-bold text-idara-navy">Impact Watch</h4>
                        <p className="text-gray-500 italic">Limited Edition</p>
                    </div>
                </div>
            </section>

            {/* ===== SOCIAL PROOF / QUOTE ===== */}
            <section className="bg-idara-navy py-10 overflow-hidden">
                <div className="flex whitespace-nowrap animate-marquee">
                    {[...Array(10)].map((_, i) => (
                        <span key={i} className="text-white text-5xl md:text-8xl font-black italic opacity-20 mx-10">
                            SHOP TO SUPPORT EDUCATION •
                        </span>
                    ))}
                </div>
            </section>

            <Footer />

            <style jsx>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    display: flex;
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </main>
    );
}
