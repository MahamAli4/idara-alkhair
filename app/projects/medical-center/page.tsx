import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MedicalCenterPage() {
    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />

            {/* ===== HERO BANNER ===== */}
            <section className="relative mt-25 overflow-hidden h-62.5 md:h-87.5">
                <img
                    src="/website media/Medical Center/banner.jpg"
                    alt="Al-Khair Medical Center"
                    className="w-full h-full object-cover "
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
            <section className="container px-6 md:px-12 py-16 md:py-24">
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
                        <span className="text-gray-700 font-medium italic block">Health is not a privilege - it is a right.</span>
                    </p>
                </div>
            </section>

            {/* ===== CREATIVE HIGHER-FIDELITY LAYOUT (EXACT MATCH) ===== */}
            <section className="relative w-full h-[30vh] sm:h-[50vh] lg:h-screen bg-cover bg-center bg-no-repeat">

                {/* Image */}
                <img
                    src="/website media/Medical Center/Center-Image.png"
                    alt="Medical Center"
                    className="w-full h-full object-cover object-top "
                />

                {/* Text Overlay */}
                <div className="absolute top-[2%] right-6 sm:right-5 md:right-8 lg:right-12 xl:right-20 2xl:right-37 text-right md:px--22 sm:px-22  lg:pe-2 xl:px-30 2xl:px-22">

                    <p className="text-xs sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-blue-900 leading-tight font-semibold">
                        "Reliable Care for
                    </p>

                    <p className="text-xl sm:text-3xl md:text-5xl lg:text-7xl xl:text-8xl 2xl:text-8xl font-bold text-yellow-500 leading-tight">
                        Healthier
                    </p>

                    <p className="text-xs sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-blue-900 leading-tight font-semibold">
                        Communities”
                    </p>

                </div>
            </section>






            {/* =============2nd img============ */}
            <section className="w-full">
                <img
                    src="/website media/Medical Center/Footer.jpg"
                    alt="Medical Center"
                    className="w-full h-auto object-cover"
                />
            </section>




            {/* ===== FOOTER ===== */}
            <Footer />
        </main>
    );
}