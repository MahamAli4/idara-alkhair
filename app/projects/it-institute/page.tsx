import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ITInstitutePage() {
    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />

            {/* ===== HERO BANNER ===== */}
            <section className="relative mt-[100px] mx-4 md:mx-8 rounded-2xl overflow-hidden h-[220px] md:h-[300px]">
                <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
                    alt="IT Institute Classroom"
                    className="w-full h-full object-cover"
                />
                {/* Cyan Overlay */}
                <div className="absolute inset-0 bg-idara-cyan/65"></div>
                {/* Title */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center tracking-tight">
                        IT <span className="text-idara-orange italic">Institute</span>
                    </h1>
                </div>
            </section>

            {/* ===== CONTENT SECTION ===== */}
            <section className="container mx-auto px-6 md:px-12 py-16 md:py-24">
                <div className="max-w-4xl">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                        <span className="text-[#012060]">Digital Skills for </span>
                        <span className="text-idara-orange italic">a Digital World</span>
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 max-w-3xl">
                        The IT Institute prepares students for modern careers by providing training in essential digital and technology-based skills.
                    </p>
                    <p className="text-base md:text-lg mb-2">
                        <span className="text-idara-orange font-semibold italic">Focus Areas :-</span>
                        <span className="text-gray-700">  Computer Literacy · IT & Software Basics · Freelancing & Digital Skills</span>
                    </p>
                    <p className="text-gray-600 text-base italic">
                        Our goal is to prepare youth for sustainable income opportunities in today's digital economy.
                    </p>
                </div>
            </section>

            {/* ===== CREATIVE IMAGE LAYOUT ===== */}
            <section className="relative container mx-auto px-6 md:px-12 pb-8 md:pb-12">
                <div className="relative max-w-4xl mx-auto">

                    {/* Decorative Shapes */}
                    {/* Navy rounded pill - top right */}
                    <div className="absolute right-0 md:right-[-20px] top-[0%] w-[40px] md:w-[55px] h-[100px] md:h-[140px] bg-[#012060] rounded-full z-10"></div>
                    {/* Small orange/yellow dot - top right near pill */}
                    <div className="absolute right-[-5px] md:right-[-10px] top-[18%] w-[18px] md:w-[22px] h-[18px] md:h-[22px] bg-idara-orange rounded-full z-10"></div>
                    {/* Orange/Yellow circle - left side */}
                    <div className="absolute -left-4 md:left-[-20px] top-[38%] w-[50px] md:w-[65px] h-[50px] md:h-[65px] bg-idara-yellow rounded-full z-10"></div>
                    {/* Cyan circle - right side */}
                    <div className="absolute -right-4 md:right-[-20px] top-[55%] w-[55px] md:w-[70px] h-[55px] md:h-[70px] bg-idara-cyan rounded-full z-10"></div>
                    {/* Orange triangle - center */}
                    <div className="absolute left-[48%] top-[52%] w-[35px] md:w-[45px] h-[35px] md:h-[45px] bg-idara-orange z-10"
                        style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>
                    {/* Cyan triangle - bottom left */}
                    <div className="absolute left-4 md:left-8 bottom-[15%] w-[40px] md:w-[50px] h-[40px] md:h-[50px] bg-idara-cyan z-10"
                        style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>

                    {/* Two side-by-side images */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-5">
                        <div className="rounded-xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=2070&auto=format&fit=crop"
                                alt="IT students in computer lab"
                                className="w-full h-[220px] md:h-[300px] object-cover"
                            />
                        </div>
                        <div className="rounded-xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop"
                                alt="Students learning digital skills"
                                className="w-full h-[220px] md:h-[300px] object-cover"
                            />
                        </div>
                    </div>

                    {/* Image 3 - Lower overlapping wider image */}
                    <div className="relative z-6 -mt-10 md:-mt-16 mx-4 md:mx-8 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                        <img
                            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
                            alt="IT training session"
                            className="w-full h-[250px] md:h-[350px] object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* ===== FULL-WIDTH BOTTOM IMAGE WITH CYAN TINT ===== */}
            <section className="relative mx-4 md:mx-8 rounded-2xl overflow-hidden h-[200px] md:h-[280px] mb-0">
                <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
                    alt="IT Institute students working"
                    className="w-full h-full object-cover"
                />
                {/* Cyan tint overlay */}
                <div className="absolute inset-0 bg-idara-cyan/60 mix-blend-multiply"></div>
            </section>

            {/* ===== FOOTER ===== */}
            <Footer />
        </main>
    );
}
