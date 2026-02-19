import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DonatePage() {
    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />

            {/* ===== HERO BANNER ===== */}
            <section className="relative mt-[100px] mx-4 md:mx-8 rounded-2xl overflow-hidden h-[220px] md:h-[300px]">
                <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
                    alt="Donate Now"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#012060]/55"></div>
                {/* Decorative triangles - right side */}
                <div className="absolute right-[15%] top-[20%] w-[40px] md:w-[55px] h-[40px] md:h-[55px] bg-idara-orange z-10"
                    style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>
                <div className="absolute right-[10%] top-[35%] w-[30px] md:w-[40px] h-[30px] md:h-[40px] bg-idara-orange z-10"
                    style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center tracking-tight">
                        Donate <span className="text-idara-orange italic">Now</span>
                    </h1>
                </div>
            </section>

            {/* ===== YOUR DONATION CAN CHANGE A LIFE ===== */}
            <section className="container mx-auto px-6 md:px-12 py-14 md:py-20 relative">
                {/* Decorative shapes - right side */}
                <div className="absolute right-8 md:right-16 top-8 w-[35px] md:w-[50px] h-[35px] md:h-[50px] bg-idara-cyan z-0"
                    style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>
                <div className="absolute right-4 md:right-10 top-16 w-[25px] md:w-[35px] h-[25px] md:h-[35px] bg-idara-orange z-0"
                    style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>

                <div className="max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                        <span className="text-[#012060]">Your Donation Can </span>
                        <span className="text-idara-orange italic">Change a a Life Today</span>
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl">
                        Every contribution you make helps provide education, food, healthcare, and emergency support to those who need it most. At Idara Al-Khair, we honor your trust as our greatest responsibility.
                    </p>
                </div>
            </section>

            {/* ===== WHERE YOUR DONATION GOES — with grayscale background ===== */}
            <section className="relative overflow-hidden">
                {/* Grayscale background image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=80&w=2070&auto=format&fit=crop"
                        alt=""
                        className="w-full h-full object-cover grayscale opacity-15"
                    />
                </div>

                <div className="relative z-10 container mx-auto px-6 md:px-12 py-14 md:py-20">
                    {/* Section Heading */}
                    <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        <span className="text-[#012060]">Where Your </span>
                        <span className="text-idara-orange italic">Donation Goes</span>
                    </h3>

                    {/* Four Impact Circles */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 max-w-3xl mx-auto">
                        {[
                            { text: "Educating underprivileged children", color: "bg-[#012060]" },
                            { text: "Feeding families facing hunger", color: "bg-idara-yellow" },
                            { text: "Providing medical care to the sick", color: "bg-idara-orange" },
                            { text: "Supporting disaster-affected communities", color: "bg-[#012060]" },
                        ].map((item, i) => (
                            <div key={i} className={`${item.color} w-[140px] h-[140px] md:w-[160px] md:h-[160px] rounded-full flex items-center justify-center p-4 shadow-lg`}>
                                <p className="text-white text-center text-sm md:text-base font-semibold leading-tight">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="text-gray-600 text-center text-base italic mb-16">
                        We ensure that every donation is utilized responsibly and transparently.
                    </p>

                    {/* Types of Donation */}
                    <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        <span className="text-[#012060]">Types of </span>
                        <span className="text-idara-orange italic">Donation</span>
                    </h3>

                    <div className="max-w-2xl mx-auto mb-16">
                        <ul className="space-y-4">
                            {[
                                { label: "Zakat", desc: "Eligible programs with complete Shariah compliance" },
                                { label: "Sadaqah", desc: "Support any welfare initiative" },
                                { label: "General Donation", desc: "Where the need is greatest" },
                                { label: "Sponsor a Child / Family", desc: "Provide education, healthcare, and essentials" },
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4 text-base md:text-lg text-gray-800">
                                    <span className="text-idara-orange mt-1 text-lg">•</span>
                                    <span>
                                        <strong>{item.label}</strong> - {item.desc}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* How to Donate */}
                    <h3 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        <span className="text-[#012060]">How to </span>
                        <span className="text-idara-orange italic">Donate</span>
                    </h3>

                    <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-8">
                        <button className="bg-idara-orange text-white px-8 md:px-10 py-3 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-[#d65d20] transition-all">
                            Bank Transfer
                        </button>
                        <button className="bg-[#012060] text-white px-8 md:px-10 py-3 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-[#01184a] transition-all">
                            Online
                        </button>
                        <button className="bg-idara-orange text-white px-8 md:px-10 py-3 rounded-full font-bold text-base md:text-lg shadow-lg hover:bg-[#d65d20] transition-all">
                            Direct Deposit
                        </button>
                    </div>

                    <p className="text-gray-700 text-center text-base md:text-lg font-medium italic">
                        Your generosity today can save a future tomorrow.
                    </p>
                </div>
            </section>

            {/* ===== FINAL CTA BUTTON ===== */}
            <section className="py-10 flex justify-center">
                <button className="bg-[#012060] text-white px-14 py-4 rounded-lg font-black text-xl md:text-2xl shadow-2xl hover:bg-[#01184a] transition-all tracking-tight border-2 border-[#012060]">
                    Donate Now
                </button>
            </section>

            {/* ===== FOOTER ===== */}
            <Footer />
        </main>
    );
}
