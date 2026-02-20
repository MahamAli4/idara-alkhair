import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function EducationSchoolsCollegesPage() {
    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />

            {/* ===== HERO BANNER ===== */}
            <section className="relative mt-[100px] mx-4 md:mx-8 rounded-2xl overflow-hidden h-[220px] md:h-[300px]">
                <img
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2070&auto=format&fit=crop"
                    alt="Education Schools & College"
                    className="w-full h-full object-cover"
                />
                {/* Dark navy overlay */}
                <div className="absolute inset-0 bg-[#012060]/60"></div>
                {/* Title */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center tracking-tight">
                        <span className="text-idara-orange italic">Education</span> - Schools & College
                    </h1>
                </div>
            </section>

            {/* ===== CONTENT SECTION - Two Column ===== */}
            <section className="container mx-auto px-6 md:px-12 py-16 md:py-24">
                <div className="flex flex-col md:flex-row items-start gap-10 md:gap-16">
                    {/* Left - Text */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                            <span className="text-[#012060]">Educating Minds,</span>
                            <br />
                            <span className="text-idara-orange italic">Empowering Futures</span>
                        </h2>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-5 max-w-lg">
                            Education is at the heart of Idara Al-Khair's mission. We operate multiple schools and colleges that provide quality education to students from low-income backgrounds, enabling them to break the cycle of poverty.
                        </p>
                        <p className="text-gray-600 text-base italic">
                            Our institutions focus on academic excellence, character building, and life skills.
                        </p>
                    </div>

                    {/* Right - Student Image with Decorative Shapes */}
                    <div className="md:w-1/2 relative flex justify-center">
                        {/* Navy rounded rectangle - behind image */}
                        <div className="absolute right-[5%] md:right-[10%] -top-4 w-[50px] md:w-[65px] h-[130px] md:h-[170px] bg-[#012060] rounded-full z-0"></div>
                        {/* Orange circle - bottom right */}
                        <div className="absolute right-[0%] md:right-[5%] bottom-[5%] w-[50px] md:w-[60px] h-[50px] md:h-[60px] bg-idara-orange rounded-full z-0"></div>
                        {/* Cyan triangle - bottom left */}
                        <div className="absolute left-[10%] bottom-[10%] w-[40px] md:w-[50px] h-[40px] md:h-[50px] bg-idara-cyan z-0"
                            style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>

                        {/* Student Image */}
                        <div className="relative z-5 w-[280px] md:w-[350px] rounded-xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
                                alt="Student in school uniform"
                                className="w-full h-[350px] md:h-[430px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== WHAT WE PROVIDE - Yellow Section ===== */}
            <section className="relative mx-4 md:mx-8 rounded-2xl overflow-hidden bg-idara-yellow py-12 md:py-16 px-6 md:px-12">
                <div className="container mx-auto max-w-5xl">
                    {/* Heading */}
                    <h3 className="text-3xl md:text-4xl font-bold text-center mb-4">
                        <span className="text-[#012060]">What We </span>
                        <span className="text-idara-orange italic">Provide :</span>
                    </h3>
                    <p className="text-[#012060]/80 text-center text-base md:text-lg mb-10 max-w-3xl mx-auto">
                        Quality education · Trained faculty · Safe learning environments · Affordable or free schooling.
                    </p>

                    {/* Bullet Points - Two Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 mb-10 max-w-2xl mx-auto">
                        <div className="flex items-center gap-3">
                            <span className="text-idara-orange text-xl">✦</span>
                            <span className="text-[#012060] font-bold text-base md:text-lg">Compassion & Integrity</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-idara-orange text-xl">✦</span>
                            <span className="text-[#012060] font-bold text-base md:text-lg">Sustainability</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-idara-orange text-xl">✦</span>
                            <span className="text-[#012060] font-bold text-base md:text-lg">Transparency & Accountability</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-idara-orange text-xl">✦</span>
                            <span className="text-[#012060] font-bold text-base md:text-lg">Community-Driven Impact</span>
                        </div>
                    </div>

                    {/* Three Images Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="rounded-xl overflow-hidden shadow-lg border-4 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop"
                                alt="Students in classroom"
                                className="w-full h-[180px] md:h-[200px] object-cover"
                            />
                        </div>
                        <div className="rounded-xl overflow-hidden shadow-lg border-4 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2032&auto=format&fit=crop"
                                alt="Students learning together"
                                className="w-full h-[180px] md:h-[200px] object-cover"
                            />
                        </div>
                        <div className="rounded-xl overflow-hidden shadow-lg border-4 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop"
                                alt="Happy students"
                                className="w-full h-[180px] md:h-[200px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FULL-WIDTH BOTTOM IMAGE ===== */}
            <section className="relative mx-4 md:mx-8 mt-6 rounded-2xl overflow-hidden h-[220px] md:h-[320px]">
                <img
                    src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop"
                    alt="School children crowd"
                    className="w-full h-full object-cover"
                />
                {/* Subtle navy overlay at bottom for transition to footer */}
                <div className="absolute inset-0 from-[#0a2351]/40 to-transparent"></div>
            </section>

            {/* ===== FOOTER ===== */}
            <Footer />
        </main>
    );
}
