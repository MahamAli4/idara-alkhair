import React from 'react';

const MissionVisionValues = () => {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Grayscale Background Student Photo */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1542810634-71277d95dc24?q=80&w=2070&auto=format&fit=crop"
                    alt="Students background"
                    className="w-full h-full object-cover grayscale opacity-20"
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Mission and Vision Boxes */}
                <div className="flex flex-col md:flex-row gap-0 max-w-6xl mx-auto mb-20 shadow-2xl rounded-2xl overflow-hidden">
                    {/* Mission Box (Orange) */}
                    <div className="flex-1 bg-idara-orange/90 p-10 md:p-16 text-white text-center flex flex-col justify-center items-center">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Mission</h2>
                        <p className="text-lg md:text-xl font-medium leading-relaxed max-w-md">
                            A society where every individual has access to education, healthcare, food, and a dignified life.
                        </p>
                    </div>

                    {/* Vision Box (Blue) */}
                    <div className="flex-1 bg-[#012060]/95 p-10 md:p-16 text-white text-center flex flex-col justify-center items-center">
                        <h2 className="text-4xl md:text-5xl font-black mb-6">Vision</h2>
                        <p className="text-lg md:text-xl font-medium leading-relaxed max-w-md">
                            To empower underprivileged communities through sustainable education, healthcare services, food support, and social welfare programs while maintaining transparency and accountability at every step.
                        </p>
                    </div>
                </div>

                {/* Our Values Section */}
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-[#012060] mb-12">
                        Our <span className="text-white relative inline-block">Values</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 text-left">
                        {[
                            "Compassion & Integrity",
                            "Sustainability",
                            "Transparency & Accountability",
                            "Community-Driven Impact"
                        ].map((value, index) => (
                            <div key={index} className="flex items-center space-x-4">
                                <span className="w-3 h-3 bg-[#012060] rounded-full shrink-0"></span>
                                <span className="text-xl md:text-2xl font-bold text-[#012060]">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVisionValues;
