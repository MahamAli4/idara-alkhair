import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Privacy Policy | Idara Al-Khair Welfare Society',
    description: 'Privacy Policy for Idara Al-Khair Welfare Society, outlining how we collect, use, and safeguard personal information.',
};

export default function PrivacyPolicyPage() {
    return (
        <main className="overflow-x-hidden font-montserrat text-gray-800">
            <Navbar />

            {/* Hero Section - Same as Screenshot */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-center mt-[80px] md:mt-[100px] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/website-media/privacypolicy/123.jpg" 
                        alt="Privacy Policy Banner"
                        className="w-full h-full object-cover object-top"
                    />
                </div>
                
                {/* Solid to Transparent Blue Shade (Matching Screenshot) */}
                <div className="absolute inset-0 z-10 bg-linear-to-r from-[#012060] via-[#012060]/70 to-transparent"></div>

                {/* Content */}
                <div className="container mx-auto px-4 relative z-20 w-full flex justify-center items-center h-full">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter text-center drop-shadow-lg">
                        Privacy <span className="text-idara-orange">Policy</span>
                    </h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="container mx-auto px-4 py-16 md:py-24 bg-white">
                
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-12">
                    
                    {/* Left Column Data (approx 55%) */}
                    <div className="w-full lg:w-[55%] flex flex-col gap-10">
                        {/* Introduction */}
                        <div>
                            <h2 className="text-xl md:text-2xl lg:text-[26px] font-bold text-idara-orange mb-4">Introduction:</h2>
                            <p className="text-gray-800 leading-[1.7] mb-5 font-medium">
                                Idara Al-Khair Welfare Society is committed to protecting and respecting your privacy. 
                                This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal 
                                information when you visit our website or engage with our services.
                            </p>
                            <p className="text-gray-800 leading-[1.7] font-medium">
                                By accessing or using our website, you agree to the terms of this Privacy Policy.
                            </p>
                        </div>

                        {/* Information We Collect */}
                        <div>
                            <h2 className="text-xl md:text-2xl lg:text-[26px] font-bold text-idara-orange mb-4">Information We Collect:</h2>
                            <p className="text-gray-800 leading-[1.7] mb-2 font-medium">
                                We may collect and process the following types of personal data:
                            </p>
                            <ul className="list-none text-gray-800 leading-[1.7] flex flex-col gap-1 font-medium">
                                <li className="flex items-start">
                                    <span className="mr-2 inline-block">-</span> 
                                    <span>Personal Identification Information: Name, email address, phone number, and mailing address.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 inline-block">-</span> 
                                    <span>Donation Information: Transaction details (excluding full banking or card information)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 inline-block">-</span> 
                                    <span>Technical Data: IP address, browser type, device information, and usage data</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 inline-block">-</span> 
                                    <span>User-Submitted Data: Information provided through contact forms, volunteer applications, or other submissions</span>
                                </li>
                            </ul>
                        </div>

                        {/* Purpose of Data Processing */}
                        <div>
                            <h2 className="text-xl md:text-2xl lg:text-[26px] font-bold text-idara-orange mb-4">Purpose of Data Processing:</h2>
                            <p className="text-gray-800 leading-[1.7] mb-2 font-medium">
                                We process your personal data for the following purposes:
                            </p>
                            <ul className="list-none text-gray-800 leading-[1.7] flex flex-col gap-1 font-medium">
                                <li className="flex items-start"><span className="mr-2 inline-block">-</span><span>To process donations and maintain financial records</span></li>
                                <li className="flex items-start"><span className="mr-2 inline-block">-</span><span>To communicate updates, campaigns, and organizational activities</span></li>
                                <li className="flex items-start"><span className="mr-2 inline-block">-</span><span>To respond to inquiries and provide support</span></li>
                                <li className="flex items-start"><span className="mr-2 inline-block">-</span><span>To improve website functionality and user experience</span></li>
                                <li className="flex items-start"><span className="mr-2 inline-block">-</span><span>To comply with applicable legal and regulatory obligation</span></li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column (approx 45%) */}
                    <div className="w-full lg:w-[45%] flex flex-col gap-10">
                        <div className="w-full flex justify-center lg:justify-start items-center py-5 lg:py-0 order-first lg:order-0 lg:-ml-16">
                            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px] shrink-0">
                                <div className="w-full h-full">
                                    <img 
                                        src="/website-media/privacypolicy/PrivacyPolicybaby.png" 
                                        alt="Commitment to Transparency"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Your Rights */}
                        <div>
                            <h2 className="text-xl md:text-2xl lg:text-[26px] font-bold text-idara-orange mb-4">Your Rights:</h2>
                            <p className="text-gray-800 leading-[1.7] mb-2 font-medium">
                                Subject to applicable laws, you may have the right to:
                            </p>
                            <ul className="list-none text-gray-800 leading-[1.7] flex flex-col gap-1 mb-4 font-medium">
                                <li className="flex items-start"><span className="mr-2 inline-block">-</span><span>Access your personal data</span></li>
                                <li className="flex items-start"><span className="mr-2 inline-block">-</span><span>Request correction or deletion</span></li>
                                <li className="flex items-start"><span className="mr-2 inline-block">-</span><span>Withdraw consent at any time</span></li>
                                <li className="flex items-start"><span className="mr-2 inline-block">-</span><span>Object to or restrict certain processing activities</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </section>

            <Footer />
        </main>
    );
}
