import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MedicalCenterPage() {
    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />

            {/* ===== HERO BANNER ===== */}
            <section className="relative mt-[100px] mx-4 md:mx-8 rounded-2xl overflow-hidden h-[250px] md:h-[350px]">
                <img
                    src="/website media/Medical Center/banner.jpg"
                    alt="Al-Khair Medical Center"
                    className="w-full h-full object-cover"
                />
                {/* Darker Overlay for text readability */}
                {/* <div className="absolute inset-0 bg-black/40"></div> */}
                {/* Title Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center tracking-tight">
                        <span className="text-idara-orange">Medical</span> Center
                    </h1>
                </div>
            </section>

            {/* ===== CONTENT SECTION ===== */}
            <section className="container mx-auto px-6 md:px-12 py-16 md:py-24">
                <div>
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                        <span className="text-[#012060]">Healthcare for Those </span>
                        <span className="text-idara-orange font-bold">Who Cannot Afford It</span>
                    </h2>
                    <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed mb-8">
                        Our Medical Center provides accessible healthcare services to underserved communities.
                    </p>
                    <p className="text-lg md:text-xl">
                        <span className="text-idara-orange font-bold">Services Include :-</span>
                        <span className="text-gray-700 font-medium"> OPD consultations · Basic diagnostics · Affordable medicines</span>
                        <br />
                        <span className="text-gray-500 font-medium italic block">Health is not a privilege - it is a right.</span>
                    </p>
                </div>
            </section>

            {/* ===== CREATIVE HIGHER-FIDELITY LAYOUT (EXACT MATCH) ===== */}
            <section className="container mx-auto px-6 md:px-12 bg-white">
                <div className="relative w-full h-[600px] md:h-[700px] lg:h-[1000px]" style={{ backgroundImage: "url('/website media/Medical Center/Center Image.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>

                    {/* Top Section: Highlighted Quote & Main Image */}
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-16 px-4 lg:px-0">

                        {/* Decorative Branding Shapes for Top Section */}
                        <div className="absolute inset-0 pointer-events-none">
                            {/* Large Cyan triangle - Bottom Left of the entire section */}
                            {/* <div className="absolute left-0 bottom-[-10%] md:bottom-[-20%] w-[120px] md:w-[200px] h-[120px] md:h-[200px] bg-idara-cyan z-30"
                                style={{ clipPath: 'polygon(0% 100%, 100% 100%, 0% 0%)' }}></div> */}

                            {/* Large Navy Pill - Far Left edge */}
                            {/* <div className="absolute left-0 top-[15%] w-[60px] md:w-[90px] h-[220px] md:h-[300px] bg-[#001c54] rounded-full z-10 shadow-lg"></div> */}

                            {/* Large Yellow Circle - Below Navy Pill */}
                            {/* <div className="absolute left-0 top-[50%] w-[80px] md:w-[120px] h-[80px] md:h-[120px] bg-idara-yellow rounded-full z-10 shadow-lg transform -translate-x-4"></div> */}

                            {/* Cyan triangle arrows near text */}
                            {/* <div className="absolute right-[5%] top-[10%] w-8 h-8 md:w-10 md:h-10 bg-idara-cyan z-20"
                                style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}></div> */}
                        </div>

                        {/* Stylized Quote/Text Section (Top Right) */}
                        <div className="relative z-40 flex-1 w-full text-right">
                            <div className="flex flex-col font-montserrat select-none lg:scale-110 lg:origin-right">
                                <div className="flex items-center justify-end gap-4 mb-2">
                                    {/* <div className="w-8 h-8 md:w-10 md:h-10 bg-idara-cyan" style={{ clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)' }}></div> */}
                                    <span className="text-[#012060] font-black text-3xl md:text-5xl tracking-tight">"Reliable Care for</span>
                                </div>
                                <h3 className="text-idara-orange font-black text-6xl md:text-[7.5rem] italic tracking-tighter leading-[0.8] mb-4">Healthier</h3>
                                <div className="flex items-center justify-end gap-6">
                                    {/* Yellow Triangle Arrow */}
                                    {/* <div className="w-12 h-12 md:w-16 md:h-16 bg-idara-yellow" style={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%)' }}></div> */}
                                    <span className="text-[#012060] font-black text-4xl md:text-7xl tracking-tighter italic">Communities"</span>
                                    {/* Small Cyan Arrow */}
                                    {/* <div className="w-8 h-8 md:w-10 md:h-10 bg-idara-cyan" style={{ clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)' }}></div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <Footer />
        </main>
    );
}
