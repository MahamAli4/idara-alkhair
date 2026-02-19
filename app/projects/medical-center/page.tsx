import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MedicalCenterPage() {
    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />

            {/* ===== HERO BANNER ===== */}
            <section className="relative mt-[100px] mx-4 md:mx-8 rounded-2xl overflow-hidden h-[220px] md:h-[300px]">
                <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070&auto=format&fit=crop"
                    alt="Al-Khair Medical Center"
                    className="w-full h-full object-cover"
                />
                {/* Bottom gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-idara-orange/90 via-idara-orange/30 to-transparent"></div>
                {/* Title */}
                <div className="absolute inset-0 flex items-end justify-center pb-8 md:pb-12">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center tracking-tight">
                        <span className="text-idara-orange italic">Medical</span> Center
                    </h1>
                </div>
            </section>

            {/* ===== CONTENT SECTION ===== */}
            <section className="container mx-auto px-6 md:px-12 py-16 md:py-24">
                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                        <span className="text-[#012060]">Healthcare for Those </span>
                        <span className="text-idara-orange italic">Who Cannot Afford It</span>
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
                        Our Medical Center provides accessible healthcare services to underserved communities.
                    </p>
                    <p className="text-base md:text-lg mb-2">
                        <span className="text-idara-orange font-semibold italic">Services Include :-</span>
                        <span className="text-gray-700"> OPD consultations · Basic diagnostics · Affordable medicines</span>
                    </p>
                    <p className="text-gray-600 text-base italic">
                        Health is not a privilege - it is a right.
                    </p>
                </div>
            </section>

            {/* ===== CREATIVE IMAGE LAYOUT ===== */}
            <section className="relative container mx-auto px-6 md:px-12 pb-32 md:pb-44">
                <div className="relative max-w-4xl mx-auto">

                    {/* Decorative Shapes */}
                    {/* Navy rounded rectangle - left side */}
                    <div className="absolute -left-4 md:left-0 top-[10%] w-[45px] md:w-[60px] h-[110px] md:h-[150px] bg-[#012060] rounded-full z-10"></div>
                    {/* Orange/Yellow circle - left side */}
                    <div className="absolute left-4 md:left-8 top-[45%] w-[50px] md:w-[65px] h-[50px] md:h-[65px] bg-idara-yellow rounded-full z-10"></div>
                    {/* Cyan triangle - top right area */}
                    <div className="absolute right-[35%] md:right-[30%] top-[18%] w-[30px] md:w-[40px] h-[30px] md:h-[40px] bg-idara-cyan z-10"
                        style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>
                    {/* Cyan triangle - right side */}
                    <div className="absolute right-[15%] top-[35%] w-[25px] md:w-[35px] h-[25px] md:h-[35px] bg-idara-cyan z-10"
                        style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>
                    {/* Orange triangle - bottom center */}
                    <div className="absolute left-[45%] bottom-[38%] w-[40px] md:w-[50px] h-[40px] md:h-[50px] bg-idara-orange z-10"
                        style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}></div>
                    {/* Small orange triangle - left bottom */}
                    <div className="absolute left-8 md:left-16 bottom-[30%] w-[35px] md:w-[45px] h-[35px] md:h-[45px] bg-idara-orange z-10"
                        style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}></div>

                    {/* Stylized Quote Text - top right */}
                    <div className="relative z-20 mb-4 md:mb-0 md:absolute md:right-0 md:top-[5%] max-w-[320px] md:max-w-[380px] text-right">
                        <p className="leading-[1.15]">
                            <span className="text-[#012060] font-black text-3xl md:text-4xl">"Reliable Care for</span>
                            <br />
                            <span className="text-idara-orange font-black text-4xl md:text-6xl italic">Healthier</span>
                            <br />
                            <span className="text-[#012060] font-black text-3xl md:text-5xl italic">Communities"</span>
                        </p>
                    </div>

                    {/* Image 1 - Main upper image (medical staff) */}
                    <div className="relative z-5 md:mr-[20%] rounded-xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?q=80&w=2070&auto=format&fit=crop"
                            alt="Medical staff at Al-Khair Medical Center"
                            className="w-full h-[300px] md:h-[420px] object-cover"
                        />
                    </div>

                    {/* Image 2 - Lower overlapping image (medical facility) */}
                    <div className="relative z-6 -mt-16 md:-mt-24 md:ml-[15%] md:mr-[5%] rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                        <img
                            src="https://images.unsplash.com/photo-1551190822-a9ce113ac100?q=80&w=2070&auto=format&fit=crop"
                            alt="Medical procedures and diagnostics"
                            className="w-full h-[250px] md:h-[350px] object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <Footer />
        </main>
    );
}
