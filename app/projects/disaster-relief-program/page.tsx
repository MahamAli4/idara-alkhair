import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DisasterReliefProgramPage() {
    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />

            {/* ===== HERO BANNER ===== */}
            <section className="relative mt-[100px] mx-4 md:mx-8 rounded-2xl overflow-hidden h-[220px] md:h-[300px]">
                <img
                    src="https://images.unsplash.com/photo-1547683905-f686c993aae5?q=80&w=2070&auto=format&fit=crop"
                    alt="Disaster Relief Program"
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-[#012060]/55"></div>
                {/* Title */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center tracking-tight">
                        <span className="text-idara-orange font-black italic">DISASTER</span> Relief Program
                    </h1>
                </div>
            </section>

            {/* ===== CONTENT SECTION ===== */}
            <section className="container mx-auto px-6 md:px-12 py-16 md:py-24">
                <div className="max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                        <span className="text-[#012060]">Standing with </span>
                        <span className="text-idara-orange italic">Communities in Crises</span>
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 max-w-3xl">
                        During natural disasters and emergencies, Idara Al-Khair responds swiftly with relief efforts.
                    </p>
                    <p className="text-base md:text-lg">
                        <span className="text-idara-orange font-semibold italic">Our Response Includes :-</span>
                        <span className="text-gray-700"> Emergency food & supplies · Medical assistance · Rehabilitation support.</span>
                    </p>
                </div>
            </section>

            {/* ===== CREATIVE IMAGE LAYOUT ===== */}
            <section className="relative container mx-auto px-6 md:px-12 pb-8 md:pb-12">
                <div className="relative max-w-4xl mx-auto">

                    {/* Decorative Shapes */}
                    {/* Navy rounded pill - left */}
                    <div className="absolute left-0 md:left-[-10px] top-[2%] w-[40px] md:w-[55px] h-[110px] md:h-[150px] bg-[#012060] rounded-full z-10"></div>
                    {/* Orange/Yellow circle - left below pill */}
                    <div className="absolute left-4 md:left-6 top-[18%] w-[45px] md:w-[55px] h-[45px] md:h-[55px] bg-idara-orange rounded-full z-10"></div>
                    {/* Cyan triangle - right top */}
                    <div className="absolute right-[20%] top-[15%] w-[35px] md:w-[45px] h-[35px] md:h-[45px] bg-idara-cyan z-10"
                        style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>
                    {/* Orange triangle - center */}
                    <div className="absolute left-[45%] top-[45%] w-[35px] md:w-[45px] h-[35px] md:h-[45px] bg-idara-orange z-10"
                        style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>
                    {/* Orange triangle - bottom left */}
                    <div className="absolute left-[15%] bottom-[32%] w-[30px] md:w-[40px] h-[30px] md:h-[40px] bg-idara-orange z-10"
                        style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}></div>
                    {/* Small cyan triangle - top near text */}
                    <div className="absolute left-[6%] top-[0%] w-[20px] md:w-[28px] h-[20px] md:h-[28px] bg-idara-cyan z-10"
                        style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>

                    {/* Stylized Quote Text */}
                    <div className="relative z-20 mb-6 ml-12 md:ml-20 max-w-[380px] md:max-w-[480px]">
                        <p className="leading-[1.1]">
                            <span className="text-[#012060] font-black text-3xl md:text-4xl">"We </span>
                            <span className="text-idara-orange font-black text-5xl md:text-7xl italic">Stand by</span>
                            <br />
                            <span className="text-[#012060] font-medium text-xl md:text-2xl">communities when they</span>
                            <br />
                            <span className="text-idara-orange font-black text-5xl md:text-7xl italic ml-16 md:ml-24">need</span>
                            <span className="text-[#012060] font-black text-2xl md:text-3xl"> it most"</span>
                        </p>
                    </div>

                    {/* Main Image - disaster relief scene */}
                    <div className="relative z-5 rounded-xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1547683905-f686c993aae5?q=80&w=2070&auto=format&fit=crop"
                            alt="Disaster relief work"
                            className="w-full h-[300px] md:h-[400px] object-cover"
                        />
                    </div>

                    {/* Lower overlapping images */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 relative z-6 -mt-10 md:-mt-16 mx-2 md:mx-6">
                        <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop"
                                alt="Relief workers helping"
                                className="w-full h-[160px] md:h-[220px] object-cover"
                            />
                        </div>
                        <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop"
                                alt="Supply distribution"
                                className="w-full h-[160px] md:h-[220px] object-cover"
                            />
                        </div>
                        <div className="hidden md:block rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop"
                                alt="Rehabilitation support"
                                className="w-full h-[220px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <Footer />
        </main>
    );
}
