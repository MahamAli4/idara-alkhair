import React from 'react';

const MissionVision = () => {
    return (
        <section className="bg-gray-50">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Mission Section */}
                    <div className="relative group overflow-hidden bg-idara-orange text-white py-24 px-10 flex flex-col justify-center items-center text-center">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay transition-transform duration-700 group-hover:scale-110"></div>
                        <div className="relative z-10 max-w-lg">
                            <h2 className="text-4xl lg:text-5xl font-black mb-6">Mission</h2>
                            <p className="text-lg lg:text-xl font-medium leading-relaxed">
                                A society where every individual has access to education, healthcare, food,
                                and a dignified life.
                            </p>
                        </div>
                    </div>

                    {/* Vision Section */}
                    <div className="relative group overflow-hidden bg-[#0A1E40] text-white py-24 px-10 flex flex-col justify-center items-center text-center">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542810634-71277d95dc24?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay transition-transform duration-700 group-hover:scale-110"></div>
                        <div className="relative z-10 max-w-lg">
                            <h2 className="text-4xl lg:text-5xl font-black mb-6">Vision</h2>
                            <p className="text-lg lg:text-xl font-medium leading-relaxed">
                                To empower underprivileged communities through sustainable education, healthcare
                                services, food support, and social welfare programs while maintaining transparency and
                                accountability at every step.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
