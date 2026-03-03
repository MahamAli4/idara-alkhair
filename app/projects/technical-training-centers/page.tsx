import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TechnicalTrainingCentersPage() {
    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />

            {/* ===== HERO BANNER ===== */}
            <section className="relative mt-[100px] mx-4 md:mx-8 rounded-2xl overflow-hidden h-[250px] md:h-[350px]">
                <img
                    src="/website media/Technical Training Centers/Banner.jpg"
                    alt="Technical Training Centers"
                    className="w-full h-full object-cover"
                />

                {/* Darker Overlay for text readability */}
                {/* <div className="absolute inset-0 bg-black/40"></div> */}


                {/* Title */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white text-center tracking-tight">
                        Technical <span className="text-idara-orange">Training</span> Centers
                    </h1>
                </div>
            </section>

            {/* ===== CONTENT SECTION ===== */}
            <section className="container mx-auto px-6 md:px-12 py-16 md:py-24">
                <div className="max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
                        <span className="text-[#012060]">Skills That Create</span>
                        <br />
                        <span className="text-idara-orange italic">Independence</span>
                    </h2>
                    <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed mb-8 max-w-3xl">
                        Our Technical Training Centers equip youth with practical, job-ready skills that lead to employment and self-reliance.
                    </p>
                    <p className="text-lg md:text-xl">
                        <span className="text-idara-orange font-bold">Courses Include:-</span>
                        <span className="text-gray-700 font-medium"> Electrical & Mechanical Training · Vocational Skills · Hands-on Practical Learning</span>
                    </p>
                </div>
            </section>

            {/* ===== CREATIVE HIGHER-FIDELITY LAYOUT (EXACT MATCH) ===== */}
            <section className="container mx-auto px-6 md:px-12">
                {/* Full Width Background Image Section with Text on Right */}
                <div className="relative w-full h-[600px] md:h-[700px] lg:h-[1000px]" style={{ backgroundImage: "url('/website media/Technical Training Centers/Center Image.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>

                    {/* Overlay to ensure text readability */}
                    {/* <div className="absolute inset-0 bg-white/70 lg:bg-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-white/70 lg:to-white/95"></div> */}

                    {/* Container to align text with navbar/footer padding */}
                    <div className="relative z-30 container h-full">
                        <div className="w-full flex flex-col font-montserrat select-none text-[#012060]">
                            <span className="italic text-3xl md:text-4xl font-bold tracking-tight mt-24">We don't</span>
                            <h3 className="font-bold text-[4.5rem] md:text-[6.5rem] italic tracking-tighter leading-[0.8] mb-2 text-[#012060]">just teach</h3>

                            <div className="flex items-center gap-6 ml-16 md:ml-40 -mt-2">
                                <span className="italic text-3xl md:text-4xl font-bold tracking-tight ml-16 md:ml-64">skills,</span>
                                {/* <div className="w-10 h-10 md:w-12 md:h-12 bg-idara-cyan" style={{ clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)' }}></div> */}
                            </div>

                            <div className="relative mt-8 md:mt-9 ml-4">
                                {/* <div className="absolute -top-12 left-[10%] w-10 h-10 md:w-12 md:h-12 bg-idara-yellow" style={{ clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%)' }}></div> */}
                                <span className="italic text-3xl md:text-4xl font-bold tracking-tight ml-16 md:ml-42">We create</span>
                            </div>

                            <h3 className="font-bold text-[4.5rem] md:text-[6.5rem] italic tracking-tighter leading-[0.8] mt-5 text-[#012060]">livelihoods</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
                    <img
                        src="/website media/Technical Training Centers/Footer Image.jpg"
                        alt="Idara Al-Khair Students Group"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <Footer />
        </main>
    );
}
