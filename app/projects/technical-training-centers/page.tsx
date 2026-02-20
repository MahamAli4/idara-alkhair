import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TechnicalTrainingCentersPage() {
    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />

            {/* ===== HERO BANNER ===== */}
            <section className="relative mt-[100px] mx-4 md:mx-8 rounded-2xl overflow-hidden h-[220px] md:h-[300px]">
                <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop"
                    alt="Technical Training Centers"
                    className="w-full h-full object-cover"
                />
                {/* Teal Overlay */}
                <div className="absolute inset-0 bg-idara-cyan/70"></div>
                {/* Title */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center tracking-tight">
                        Technical <span className="text-idara-orange">Training</span> Centers
                    </h1>
                </div>
            </section>

            {/* ===== CONTENT SECTION ===== */}
            <section className="container mx-auto px-6 md:px-12 py-16 md:py-24">
                <div className="max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                        <span className="text-[#012060]">Skills That Create</span>
                        <br />
                        <span className="text-idara-orange">Independence</span>
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 max-w-2xl">
                        Our Technical Training Centers equip youth with practical, job-ready skills that lead to employment and self-reliance.
                    </p>
                    <p className="text-base md:text-lg">
                        <span className="text-idara-orange font-semibold italic">Courses Include:</span>
                        <span className="text-gray-700"> Electrical & Mechanical Training · Vocational Skills · Hands-on Practical Learning</span>
                    </p>
                </div>
            </section>

            {/* ===== CREATIVE IMAGE LAYOUT ===== */}
            <section className="relative container mx-auto px-6 md:px-12 pb-32 md:pb-44">
                <div className="relative max-w-4xl mx-auto">

                    {/* Decorative Shapes */}
                    {/* Navy rounded rectangle - top right */}
                    <div className="absolute -right-4 md:right-8 top-[15%] w-[50px] md:w-[70px] h-[120px] md:h-[160px] bg-[#012060] rounded-full z-10"></div>
                    {/* Orange circle - right side */}
                    <div className="absolute -right-2 md:right-12 top-[50%] w-[50px] md:w-[65px] h-[50px] md:h-[65px] bg-idara-orange rounded-full z-10"></div>
                    {/* Small cyan triangle - left */}
                    <div className="absolute left-0 md:left-8 bottom-[35%] w-[40px] md:w-[55px] h-[40px] md:h-[55px] bg-idara-cyan z-10"
                        style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}></div>
                    {/* Small cyan triangle near text */}
                    <div className="absolute left-[55%] md:left-[45%] top-[22%] w-[25px] md:w-[35px] h-[25px] md:h-[35px] bg-idara-cyan z-10"
                        style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>
                    {/* Orange triangle - bottom left area */}
                    <div className="absolute left-4 md:left-16 top-[55%] w-[35px] md:w-[45px] h-[35px] md:h-[45px] bg-idara-orange z-10"
                        style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}></div>
                    {/* Cyan exclamation mark dot */}
                    <div className="absolute left-[30%] top-[40%] w-[10px] h-[10px] bg-idara-cyan rounded-full z-10"></div>
                    <div className="absolute left-[30%] top-[42%] w-[10px] h-[35px] bg-idara-cyan rounded-full z-10"></div>

                    {/* Stylized Text Overlay */}
                    <div className="relative z-20 mb-4 md:mb-0 md:absolute md:left-0 md:top-[8%] max-w-[320px] md:max-w-[380px]">
                        <p className="text-[#012060] leading-[1.15]">
                            <span className="italic text-xl md:text-2xl font-medium">We don't</span>
                            <br />
                            <span className="font-black text-4xl md:text-6xl italic">just teach</span>
                            <br />
                            <span className="italic text-xl md:text-2xl font-medium ml-24 md:ml-32">skills,</span>
                            <br />
                            <span className="italic text-xl md:text-2xl font-medium ml-8 md:ml-12">We create</span>
                            <br />
                            <span className="font-black text-4xl md:text-6xl italic">livelihoods</span>
                        </p>
                    </div>

                    {/* Image 1 - Main upper image */}
                    <div className="relative z-5 md:ml-[25%] rounded-xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop"
                            alt="Students working on technical training"
                            className="w-full h-[280px] md:h-[380px] object-cover"
                        />
                    </div>

                    {/* Image 2 - Lower overlapping image */}
                    <div className="relative z-6 -mt-16 md:-mt-24 md:ml-[10%] md:mr-[15%] rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                        <img
                            src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2070&auto=format&fit=crop"
                            alt="Hands-on practical learning"
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
