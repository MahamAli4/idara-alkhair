import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function EducationSchoolsCollegesPage() {
    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />

            {/* ===== HERO BANNER ===== */}
            <section className="relative mt-25 overflow-hidden h-62.5 md:h-87.5">
                <img
                    src="/website media/Education School & College/Banner.jpg"
                    alt="Education Schools & College"
                    className="w-full h-full object-cover"
                />
                {/* Dark navy overlay */}
                <div className="absolute inset-0 "></div>
                {/* Title */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-white text-center tracking-tight">
                        <span className="text-idara-orange ">Education</span> - Schools & College
                    </h1>
                </div>
            </section>

            {/* ===== CONTENT SECTION - Two Column ===== */}
            <section className="container mx-auto px-5 md:px-8 py-8 md:py-20">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

                    {/* Left - Text */}
                    <div className="md:w-1/2">
                        <h2 className="text-4xl md:text-5xl  leading-tight mb-6">
                            <span className="text-[#012060]  font-semibold ">Educating Minds,</span>
                            <br />
                            <span className="text-idara-orange lg:text-5xl font-bold">Empowering Futures</span>
                        </h2>

                        <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-5">
                            Education is at the heart of Idara Al-Khair's mission. We operate multiple
                            schools and colleges that provide quality education to students from
                            low-income backgrounds, enabling them to break the cycle of poverty.
                        </p>

                        <p className="text-gray-800 text-base md:text-lg leading-relaxed">
                            Our institutions focus on academic excellence, character building,
                            and life skills.
                        </p>
                    </div>

                    {/* Right - Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src="/website media/Education School & College/Boy-image.png"
                            alt="Student in school uniform"
                            className="w-full max-w-87.5 h-auto object-contain drop-shadow-xl"
                        />
                    </div>

                </div>
            </section>
            {/* ===== WHAT WE PROVIDE - Yellow Section ===== */}
            <section className="relative bg-linear-to-b from-yellow-400 to-yellow-300 py-12 md:py-16 overflow-hidden">

                <div className="container mx-auto px-6">

                    {/* Heading */}
                    <h3 className="text-3xl md:text-5xl font-bold text-center mb-4">
                        <span className="text-[#012060]  font-semibold">What We </span>
                        <span className="text-white">Provide :</span>
                    </h3>

                    <p className="text-white text-center text-sm md:text-lg mb-10 max-w-3xl mx-auto">
                        Quality education · Trained faculty · Safe learning environments ·
                        Affordable or free schooling.
                    </p>

                    {/* Bullet Points */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4 max-w-3xl mx-auto mb-12">

                        <p className="text-[#012060] font-semibold text-base md:text-lg">
                            • Compassion & Integrity
                        </p>

                        <p className="text-[#012060] font-semibold text-base md:text-lg">
                            • Sustainability
                        </p>

                        <p className="text-[#012060] font-semibold text-base md:text-lg">
                            • Transparency & Accountability
                        </p>

                        <p className="text-[#012060] font-semibold text-base md:text-lg">
                            • Community-Driven Impact
                        </p>

                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                        <div className="overflow-hidden border-4 border-white shadow-lg">
                            <img
                                src="/website media/Education School & College/Image 01.jpeg"
                                alt="Students in classroom"
                                className="w-full h-45 md:h-50 object-cover"
                            />
                        </div>

                        <div className="overflow-hidden border-4 border-white shadow-lg">
                            <img
                                src="/website media/Education School & College/Image 02.jpeg"
                                alt="Students learning together"
                                className="w-full h-45 md:h-50 object-cover"
                            />
                        </div>

                        <div className="overflow-hidden border-4 border-white shadow-lg">
                            <img
                                src="/website media/Education School & College/Image 03.jpg"
                                alt="Happy students"
                                className="w-full h-45 md:h-50 object-cover"
                            />
                        </div>

                    </div>

                </div>

            </section>

            {/* ===== FULL-WIDTH BOTTOM IMAGE ===== */}
            <section className="w-full">
                <img
                    src="/website media/Education School & College/Footer.jpg"
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
