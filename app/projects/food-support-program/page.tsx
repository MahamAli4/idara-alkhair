import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function FoodSupportProgramPage() {
    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />

            {/* ===== HERO BANNER ===== */}
            <section className="relative mt-[100px] mx-4 md:mx-8 rounded-2xl overflow-hidden h-[220px] md:h-[300px]">
                <img
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
                    alt="Food Support Program"
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-[#012060]/50"></div>
                {/* Title */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center tracking-tight">
                        Food <span className="text-idara-orange italic">Support</span> Program
                    </h1>
                </div>
            </section>

            {/* ===== CONTENT SECTION WITH YELLOW CURVE ===== */}
            <section className="relative overflow-hidden">
                {/* Yellow curved background shape */}
                <div className="absolute top-0 left-0 right-0 h-[350px] md:h-[300px]">
                    <svg viewBox="0 0 1440 400" className="w-full h-full" preserveAspectRatio="none">
                        <path
                            d="M0,0 L0,200 Q360,380 720,250 Q1080,120 1440,280 L1440,0 Z"
                            fill="#FFB300"
                        />
                    </svg>
                </div>

                <div className="relative z-10 container mx-auto px-6 md:px-12 pt-12 pb-8 md:pt-16 md:pb-12">
                    <div className="max-w-4xl">
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                            <span className="text-[#012060]">Fighting Hunger </span>
                            <span className="text-white italic font-black">with Dignity</span>
                        </h2>
                        <p className="text-[#012060]/90 text-base md:text-lg leading-relaxed mb-5 max-w-3xl">
                            No family should sleep hungry. Our Food Support Program provides daily meals, monthly ration distributions, and seasonal food drives to families facing food insecurity.
                        </p>
                        <p className="text-base md:text-lg">
                            <span className="text-idara-orange font-semibold italic">Program Highlights :-</span>
                            <span className="text-[#012060]/80"> Daily meals for students & staff · Monthly ration packs · Ramadan & emergency food drives</span>
                        </p>
                    </div>
                </div>
            </section>

            {/* ===== CREATIVE IMAGE LAYOUT ===== */}
            <section className="relative container mx-auto px-6 md:px-12 pb-8 md:pb-12">
                <div className="relative max-w-4xl mx-auto">

                    {/* Decorative Shapes */}
                    {/* Navy rounded pill - right */}
                    <div className="absolute -right-4 md:right-[-20px] top-[20%] w-[45px] md:w-[60px] h-[110px] md:h-[150px] bg-[#012060] rounded-full z-10"></div>
                    {/* Orange/Yellow circle - right below pill */}
                    <div className="absolute -right-2 md:right-[-10px] top-[45%] w-[50px] md:w-[65px] h-[50px] md:h-[65px] bg-idara-orange rounded-full z-10"></div>
                    {/* Cyan triangle - center right */}
                    <div className="absolute right-[30%] top-[25%] w-[30px] md:w-[40px] h-[30px] md:h-[40px] bg-idara-cyan z-10"
                        style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>
                    {/* Orange triangle - center */}
                    <div className="absolute left-[50%] top-[55%] w-[35px] md:w-[45px] h-[35px] md:h-[45px] bg-idara-orange z-10"
                        style={{ clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}></div>
                    {/* Orange triangle - bottom left */}
                    <div className="absolute left-8 md:left-12 bottom-[35%] w-[35px] md:w-[45px] h-[35px] md:h-[45px] bg-idara-orange z-10"
                        style={{ clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}></div>
                    {/* Cyan circle - bottom right */}
                    <div className="absolute right-[10%] bottom-[25%] w-[40px] md:w-[50px] h-[40px] md:h-[50px] bg-idara-cyan rounded-full z-10"></div>

                    {/* Yellow swoosh / curve shape behind main image */}
                    <div className="absolute top-[-5%] right-[5%] w-[70%] h-[60%] z-0">
                        <svg viewBox="0 0 600 400" className="w-full h-full" preserveAspectRatio="none">
                            <path
                                d="M600,0 Q400,50 350,200 Q300,350 100,400 L600,400 Z"
                                fill="#FFB300"
                            />
                        </svg>
                    </div>

                    {/* Stylized Quote Text */}
                    <div className="relative z-20 mb-6 max-w-[340px] md:max-w-[400px]">
                        <p className="leading-[1.1]">
                            <span className="text-idara-orange font-black text-3xl md:text-4xl">"Your support</span>
                            <br />
                            <span className="text-white font-black text-5xl md:text-7xl" style={{ WebkitTextStroke: '2px #012060', paintOrder: 'stroke fill' }}>ensures</span>
                            <br />
                            <span className="text-[#012060] italic text-xl md:text-2xl font-medium">no plate remain</span>
                            <br />
                            <span className="text-[#012060] font-black text-5xl md:text-7xl italic">empty"</span>
                        </p>
                    </div>

                    {/* Main Image - B&W style child */}
                    <div className="relative z-5 md:ml-[15%] rounded-xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
                            alt="Child smiling - food support"
                            className="w-full h-[300px] md:h-[420px] object-cover grayscale"
                        />
                    </div>

                    {/* Lower overlapping food distribution images */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-6 -mt-12 md:-mt-20">
                        <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop"
                                alt="Food distribution to families"
                                className="w-full h-[200px] md:h-[260px] object-cover"
                            />
                        </div>
                        <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop"
                                alt="Community food drive"
                                className="w-full h-[200px] md:h-[260px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FOOTER ===== */}
            <Footer />
        </main>
    );
}
