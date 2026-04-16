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

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center mt-[80px] md:mt-[100px] overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/website-media/about-us/topbanner.jpg" 
                        alt="Idara Al-Khair Campus"
                        className="w-full h-full object-cover object-center"
                    />
                </div>
                
                {/* Gradient Overlay left-to-right (Blue to transparent) */}
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-idara-navy via-idara-navy/80 to-transparent"></div>

                {/* Content */}
                <div className="container mx-auto px-4 relative z-10 w-full flex justify-center items-center h-full">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight text-center">
                        Privacy <span className="text-idara-orange">Policy</span>
                    </h1>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-12">
                    
                    {/* Left Column Data (approx 55%) */}
                    <div className="w-full lg:w-[55%] flex flex-col gap-10">
                        {/* Introduction */}
                        <div>
                            <h2 className="text-xl md:text-2xl lg:text-[26px] font-bold text-idara-orange mb-4">Introduction:</h2>
                            <p className="text-gray-800 leading-[1.7] mb-5">
                                Idara Al-Khair Welfare Society is committed to protecting and respecting your privacy. 
                                This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal 
                                information when you visit our website or engage with our services.
                            </p>
                            <p className="text-gray-800 leading-[1.7]">
                                By accessing or using our website, you agree to the terms of this Privacy Policy.
                            </p>
                        </div>

                        {/* Information We Collect */}
                        <div>
                            <h2 className="text-xl md:text-2xl lg:text-[26px] font-bold text-idara-orange mb-4">Information We Collect:</h2>
                            <p className="text-gray-800 leading-[1.7] mb-2">
                                We may collect and process the following types of personal data:
                            </p>
                            <ul className="list-none text-gray-800 leading-[1.7] flex flex-col gap-1">
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
                            <p className="text-gray-800 leading-[1.7] mb-2">
                                We process your personal data for the following purposes:
                            </p>
                            <ul className="list-none text-gray-800 leading-[1.7] flex flex-col gap-1">
                                <li className="flex items-start"><span className="mr-2 inline-block">-</span><span>To process donations and maintain financial records</span></li>
                                <li className="flex items-start"><span className="mr-2 inline-block">-</span><span>To communicate updates, campaigns, and organizational activities</span></li>
                                <li className="flex items-start"><span className="mr-2 inline-block">-</span><span>To respond to inquiries and provide support</span></li>
                                <li className="flex items-start"><span className="mr-2 inline-block">-</span><span>To improve website functionality and user experience</span></li>
                                <li className="flex items-start"><span className="mr-2 inline-block">-</span><span>To comply with applicable legal and regulatory obligation</span></li>
                            </ul>
                        </div>

                        {/* Data Sharing and Disclosure */}
                        <div>
                            <h2 className="text-xl md:text-2xl lg:text-[26px] font-bold text-idara-orange mb-4">Data Sharing and Disclosure:</h2>
                            <p className="text-gray-800 leading-[1.7] mb-2">
                                We do not sell, trade, or rent your personal information. However, we may share your data with:
                            </p>
                            <ul className="list-none text-gray-800 leading-[1.7] flex flex-col gap-1">
                                <li className="flex items-start">
                                    <span className="mr-2 inline-block">-</span>
                                    <span>Trusted third-party service providers (e.g., payment processors, IT services)</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2 inline-block">-</span>
                                    <span>Legal or regulatory authorities, where required by law.</span>
                                </li>
                            </ul>
                            <p className="text-gray-800 leading-[1.7] mt-4">
                                All third parties are obligated to protect your data and use it only for specified purposes.
                            </p>
                        </div>

                        {/* Third-Party Links */}
                        <div className="relative">
                            <h2 className="text-xl md:text-2xl lg:text-[26px] font-bold text-idara-orange mb-4">Third-Party Links:</h2>
                            <p className="text-gray-800 leading-[1.7] relative z-10 bg-white">
                                Our website may contain links to external websites. We are not responsible for the privacy practices 
                                or content of such third-party sites.
                            </p>
                        </div>

                        {/* Contact Section */}
                        <div className="pt-2">
                            <h2 className="text-xl md:text-2xl lg:text-[26px] font-bold text-idara-orange mb-4">Contact Information:</h2>
                            <p className="text-gray-800 leading-[1.7] mb-6 max-w-3xl">
                                If you have any questions or concerns regarding this Privacy Policy or our data practices, 
                                please contact us via our official website or email.
                            </p>

                            <p className="text-gray-900 font-medium leading-[1.7]">
                                We are committed to transparency, accountability, and ethical handling of all donor information.
                            </p>
                        </div>
                        
                    </div>

                    {/* Right Column (approx 45%) */}
                    <div className="w-full lg:w-[45%] flex flex-col gap-10">
                        
                        {/* Right Column Graphic */}
                        {/* Using order-first on mobile to put image on top, it stays on right for desktop */}
                        <div className="w-full flex justify-center items-center py-5 lg:py-0 order-first lg:order-none">
                            {/* Circle container */}
                            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] lg:w-[450px] lg:h-[450px] xl:w-[550px] xl:h-[550px] shrink-0">
                                
                                {/* Main Circular Image */}
                                <div className="w-full h-full">
                                    <img 
                                        src="/website-media/privacypolicy/PrivacyPolicybaby.png" 
                                        alt="Commitment to Transparency"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Legal Basis for Processing */}
                        <div>
                            <h2 className="text-xl md:text-2xl lg:text-[26px] font-bold text-idara-orange mb-4">Legal Basis for Processing:</h2>
                            <p className="text-gray-800 leading-[1.7] mb-2">
                                Where applicable, we rely on the following legal grounds:
                            </p>
                            <ul className="list-none text-gray-800 leading-[1.7] flex flex-col gap-1">
                                <li className="flex items-start"><span className="mr-2 inline-block">-</span><span>Your consent</span></li>
                                <li className="flex items-start"><span className="mr-2 inline-block">-</span><span>Performance of a transaction (e.g., donation processing)</span></li>
                                <li className="flex items-start"><span className="mr-2 inline-block">-</span><span>Compliance with legal obligations</span></li>
                                <li className="flex items-start"><span className="mr-2 inline-block">-</span><span>Legitimate interests in operating and improving our services</span></li>
                            </ul>
                        </div>

                        {/* Your Rights */}
                        <div>
                            <h2 className="text-xl md:text-2xl lg:text-[26px] font-bold text-idara-orange mb-4">Your Rights:</h2>
                            <p className="text-gray-800 leading-[1.7] mb-2">
                                Subject to applicable laws, you may have the right to:
                            </p>
                            <ul className="list-none text-gray-800 leading-[1.7] flex flex-col gap-1 mb-4">
                                <li className="flex items-start"><span className="mr-2 inline-block">-</span><span>Access your personal data</span></li>
                                <li className="flex items-start"><span className="mr-2 inline-block">-</span><span>Request correction or deletion</span></li>
                                <li className="flex items-start"><span className="mr-2 inline-block">-</span><span>Withdraw consent at any time</span></li>
                                <li className="flex items-start"><span className="mr-2 inline-block">-</span><span>Object to or restrict certain processing activities</span></li>
                            </ul>
                            <p className="text-gray-800 leading-[1.7]">
                                To exercise these rights, please contact us using the details below.
                            </p>
                        </div>

                        {/* Updates to This Policy */}
                        <div>
                            <h2 className="text-xl md:text-2xl lg:text-[26px] font-bold text-idara-orange mb-4">Updates to This Policy:</h2>
                            <p className="text-gray-800 leading-[1.7]">
                                We reserve the right to update this Privacy Policy at any time. Changes will be posted 
                                on this page with an updated effective date.
                            </p>
                        </div>
                        
                    </div>
                </div>

            </section>

            <Footer />
        </main>
    );
}
