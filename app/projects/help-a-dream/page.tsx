import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function HelpADreamPage() {
    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />

            {/* ===== HERO BANNER ===== */}
            <section className="relative mt-[100px] mx-4 md:mx-8 rounded-2xl overflow-hidden h-[220px] md:h-[300px]">
                <img
                    src="https://images.unsplash.com/photo-1497015434107-578bb7967919?q=80&w=2070&auto=format&fit=crop"
                    alt="Help a Dream"
                    className="w-full h-full object-cover"
                />
                {/* Dark Navy Overlay */}
                <div className="absolute inset-0 bg-[#012060]/50"></div>
                {/* Title */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white text-center tracking-tight">
                        HELP A <span className="text-idara-orange italic">DREAM</span>
                    </h1>
                </div>
            </section>

            {/* ===== CONTENT SECTION - Elegant Two Column ===== */}
            <section className="container mx-auto px-6 md:px-12 py-16 md:py-24">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-black leading-[1.1] mb-8 text-[#012060]">
                            One Gift, <br />
                            <span className="text-idara-orange italic">Endless Possibilities.</span>
                        </h2>
                        <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                            The "Help a Dream" initiative is designed to provide specific financial assistance to students with exceptional potential but limited resources. By sponsoring a dream, you are providing a pathway for a child to achieve their highest aspirations.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-idara-orange shrink-0"></div>
                                <p className="text-gray-700 font-medium">Focused scholarship programs for higher education.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-idara-cyan shrink-0"></div>
                                <p className="text-gray-700 font-medium">Mentorship matching with industry professionals.</p>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="mt-1 w-5 h-5 rounded-full bg-idara-navy shrink-0"></div>
                                <p className="text-gray-700 font-medium">Support for creative and extracurricular excellence.</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 relative">
                        {/* Creative Background Elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-idara-orange/10 rounded-full blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-idara-cyan/10 rounded-full blur-3xl"></div>

                        {/* Image Frame */}
                        <div className="relative z-10 rounded-3xl overflow-hidden border-8 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
                            <img
                                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop"
                                alt="Child dreaming"
                                className="w-full h-auto aspect-4/5 object-cover"
                            />
                            {/* Overlay Badge */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-xl">
                                <p className="text-[#012060] font-bold text-lg md:text-xl">
                                    "Your small contribution can build a bright career."
                                </p>
                            </div>
                        </div>

                        {/* Accent Shapes */}
                        <div className="absolute top-1/4 -left-8 w-16 h-16 bg-idara-orange rounded-full z-20 flex items-center justify-center text-white text-2xl animate-bounce">
                            ✦
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-idara-navy rounded-2xl rotate-12 z-0"></div>
                    </div>
                </div>
            </section>

            {/* ===== HOW IT WORKS - Modern Grid ===== */}
            <section className="bg-gray-50 py-20 px-6 md:px-12">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl md:text-4xl font-black text-[#012060] mb-4">How You Can <span className="text-idara-orange italic">Help</span></h3>
                        <div className="w-24 h-1.5 bg-idara-orange mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Step 1 */}
                        <div className="bg-white p-8 rounded-[40px] shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                            <div className="w-16 h-16 bg-idara-orange/10 rounded-2xl flex items-center justify-center text-idara-orange text-3xl font-black mb-6 group-hover:bg-idara-orange group-hover:text-white transition-colors">
                                01
                            </div>
                            <h4 className="text-xl font-bold text-[#012060] mb-4">Select a Dream</h4>
                            <p className="text-gray-600">Choose a student profile or a specific project that resonates with your values and vision.</p>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white p-8 rounded-[40px] shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                            <div className="w-16 h-16 bg-idara-cyan/10 rounded-2xl flex items-center justify-center text-idara-cyan text-3xl font-black mb-6 group-hover:bg-idara-cyan group-hover:text-white transition-colors">
                                02
                            </div>
                            <h4 className="text-xl font-bold text-[#012060] mb-4">Make a Pledge</h4>
                            <p className="text-gray-600">Support with a one-time gift or a monthly commitment to cover tuition, books, and supplies.</p>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white p-8 rounded-[40px] shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                            <div className="w-16 h-16 bg-idara-navy/10 rounded-2xl flex items-center justify-center text-idara-navy text-3xl font-black mb-6 group-hover:bg-idara-navy group-hover:text-white transition-colors">
                                03
                            </div>
                            <h4 className="text-xl font-bold text-[#012060] mb-4">Watch them Shine</h4>
                            <p className="text-gray-600">Receive regular updates on the student's progress and the impact of your support on their life.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CALL TO ACTION ===== */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-idara-navy z-0"></div>
                {/* Abstract Shapes */}
                <div className="absolute top-0 right-0 w-[500px] h-full bg-idara-orange rounded-l-[100px] opacity-10 skew-x-12"></div>

                <div className="container mx-auto relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
                        Ready to <span className="text-idara-orange italic">Transform</span> a Life?
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                        Your kindness is the bridge between a dream and its realization. Join us today.
                    </p>
                    <button className="bg-idara-orange text-white px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform shadow-2xl shadow-idara-orange/20">
                        Sponsor a Dream Now
                    </button>
                </div>
            </section>

            <Footer />
        </main>
    );
}
