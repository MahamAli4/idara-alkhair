'use client';

import React from 'react';

const RealStories: React.FC = () => {
    // Unique photo IDs for a more diverse collage
    const photoIds = [
        '1488521787991-ed7bbaae773c', '1503676260728-1c00da094a0b', '1542810634-71277d95dc24',
        '1596404780654-a6273414995f', '1602484898145-21788220808a', '1543269865-cbf427effbad',
        '1526666923127-b2970f64b422', '1509062522246-3755977927d7', '1516627145497-ae6968895b74',
        '1576762664200-f73609c1f76d', '1531482615713-2afd69097998', '1529390077048-c17356bc052b',
        '1551836022-d5d8b5c9d107', '1522202176988-66273c2fd55f', '1544367567-0f2fcb009e0b',
        '1504384308090-c894fdcc538d', '1501503060485-99d63c0c1673', '1507537362145-59f3d93603e0'
    ];

    return (
        <section className="bg-[#012060] overflow-hidden relative min-h-[700px] flex items-center">

            {/* Background Grid Pattern - Faded background collage */}
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none">
                <div className="grid grid-cols-8 md:grid-cols-12 h-full w-full">
                    {[...Array(96)].map((_, i) => (
                        <div key={i} className="border-[0.5px] border-white/10 w-full h-full">
                            <img
                                src={`https://images.unsplash.com/photo-${photoIds[i % photoIds.length]}?q=80&w=300&auto=format&fit=crop`}
                                className="w-full h-full object-cover grayscale"
                                alt=""
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center">

                    {/* Left SIDE: CONTENT */}
                    <div className="w-full lg:w-1/2">
                        <div className="max-w-2xl">
                            <h2 className="text-2xl md:text-5xl lg:text-7xl font-black text-white  uppercase tracking-tighter">
                                Real Stories
                            </h2>
                            <h2 className="text-2xl md:text-5xl lg:text-7xl font-black text-idara-orange leading-[0.85] uppercase tracking-tighter mb-12">
                                Real Impact.
                            </h2>

                            <div>
                                <div className="relative pl-10 border-l-4 border-idara-orange py-4">
                                    <p className="text-1xl md:text-2xl lg:text-3xl text-white font-light italic leading-tight mb-4 opacity-95">
                                        "Because of Idara Al-Khair, my children are studying and dreaming again."
                                    </p>
                                    <p className="text-idara-orange font-bold text-sm md:text-base uppercase tracking-[0.3em]">
                                        Parent of a sponsored student.
                                    </p>
                                </div>

                                <div className="relative pl-10 border-l-4 border-idara-orange py-4">
                                    <p className="text-1xl md:text-2xl lg:text-3xl text-white font-light italic leading-tight mb-4 opacity-95">
                                        "Your support reached us when we had nothing left."
                                    </p>
                                    <p className="text-idara-orange font-bold text-sm md:text-base uppercase tracking-[0.3em]">
                                        Disaster Relief Beneficiary
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right SIDE: LARGE MAP (Ensuring it's BIG) */}
                    <div className="w-full lg:w-1/2 flex justify-center items-center">
                        <div className="relative w-full max-w-[1000px] flex items-center justify-center">

                            {/* Huge Blue Glow behind map */}
                            <div className="absolute inset-0 bg-blue-500/15 blur-[150px] rounded-full"></div>

                            {/* The SVG Container with proper sizing */}
                            <svg
                                viewBox="0 0 744.09 1052.4"
                                className="w-full h-full drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <defs>
                                    <mask id="final-pakistan-mask">
                                        <g transform="matrix(4.0814 0 0 4.0814 -1159.2 -1863.5)">
                                            <path fill="white" d="m356.34 596.66c-0.0245-1.8164-0.59716-2.25-2.9714-2.25-3.3108 0-3.9728-0.68715-4.284-4.4471-0.15144-1.8298-0.93327-2.8055-2.579-3.2185-1.613-0.40484-2.219-1.1384-1.9116-2.3138 0.24754-0.9466-0.42923-2.801-1.5039-4.1208s-1.6634-1.8372-1.3082-1.1497c0.45144 0.87381-0.35006 1.2673-2.6632 1.3074-4.5215 0.0784-12.089 0.88879-12.543 1.3432-0.2045 0.2045-2.4253-0.2462-4.9352-1.0016-2.5099-0.75536-5.0624-1.065-5.6722-0.68807-0.60988 0.37693-3.5812 0.64479-6.6029 0.59525-3.0217-0.0495-6.5204 0.30016-7.7749 0.7771-1.9011 0.72278-2.2808 0.53567-2.2808-1.1238 0-4.4663 2.4963-10.042 4.75-10.61 1.2375-0.31167 2.25-0.96789 2.25-1.4583 0-0.49037 1.7519-0.89159 3.893-0.89159 3.9952 0 5.107-1.1063 5.107-5.0818 0-1.2344-0.69435-1.9182-1.9477-1.9182-1.6366 0-1.996-0.81579-2.25-5.106-0.28125-4.751-0.56708-5.2551-4.1114-7.25-2.7596-1.5532-4.5588-3.7004-6.5302-7.7927l-2.7211-5.6488 5.0302 2.1198c7.957 3.3532 27.842 3.6322 36.954 0.51848 3.752-1.2822 3.9411-1.555 4.3282-6.2438 0.462-5.5963 3.2818-8.831 6.9262-7.9455 2.6895 0.65346 6.3222-0.41447 6.3222-1.8586 0-2.3761 3.2201-3.5381 6.7785-2.446 2.9716 0.91201 3.6439 0.79595 4.8364-0.83493 0.76178-1.0418 1.3851-2.866 1.3851-4.0538 0-4.2693 2.0585-7.9548 5.2827-9.4581 3.4751-1.6202 3.8309-4.0517 1.0486-7.1654-1.3686-1.5316-1.1614-1.6215 2.5807-1.1196 4.6014 0.61718 7.5002-1.0308 6.7641-3.8454-0.25459-0.97356 0.61413-3.2299 1.9305-5.0141 2.7444-3.7198 2.9785-6.2102 0.94928-10.1-1.4044-2.6922-1.3433-2.8055 3.1941-5.9274 3.8914-2.6774 5.9853-3.3174 13.188-4.0309 10.704-1.0604 14.47-1.001 14.895 0.23469 0.18334 0.53254 1.1655 0.96826 2.1826 0.96826 1.8034 0 3.5875 3.2146 2.6373 4.7521-1.0289 1.6647 2.1401 3.9392 8.256 5.9255 6.1692 2.0037 6.319 2.1297 4 3.3654-1.3251 0.70606-2.8814 1.9238-3.4585 2.7061-1.6356 2.2172-11.67 5.3137-13.174 4.0654-0.68803-0.57102-1.8769-0.79803-2.6418-0.50448-0.76498 0.29355-1.8512 0.0734-2.4139-0.48929-0.57578-0.57578-2.3748-0.72611-4.1151-0.34388-2.7893 0.61263-3.0683 1.0141-2.8488 4.0992 0.18916 2.6593 0.68815 3.4272 2.2433 3.4524 1.7321 0.0281 1.7835 0.15893 0.38385 0.97679-1.0898 0.63684-1.4642 1.8481-1.1495 3.7196 0.7109 4.2277 2.6198 8.2752 3.9028 8.2752 0.6319 0 1.4079 0.675 1.7245 1.5 0.31658 0.825 1.4632 1.5 2.548 1.5 3.4361 0 3.2995 1.8858-0.24382 3.3663-3.0865 1.2896-3.4051 1.7992-3.3133 5.2994 0.073 2.7826-0.66597 4.8788-2.6255 7.4478-1.4998 1.9664-2.727 4.29-2.727 5.1635 0 0.87353-0.90062 1.8741-2.0014 2.2234-1.1443 0.36317-2.8943 2.7108-4.0863 5.4818-1.4466 3.3628-2.9668 5.2119-4.9654 6.0397-1.5842 0.65621-3.1855 2.1572-3.5584 3.3356-1.2244 3.869-3.8367 6.5786-6.3885 6.6263-1.375 0.0257-3.175 0.47805-4 1.0052-1.0994 0.7025-1.9665 0.36456-3.2466-1.2653l-1.7466-2.2238-4.465 5c-2.4557 2.75-4.4823 5.9225-4.5034 7.05-0.047 2.507 1.757 4.45 4.1317 4.45 1.4171 0 1.7262 0.74567 1.55 3.7395-0.17373 2.9516 0.21945 3.9348 1.8662 4.6666 2.4234 1.077 5.6577 7.88 5.2164 10.972-0.23275 1.6312-1.1116 2.1882-3.8027 2.4101-6.1439 0.50667-11.017 0.42393-13.628-0.23138-2.0123-0.50505-2.649-0.21428-3.0719 1.4028-0.2934 1.122-1.3586 2.0399-2.3671 2.0399s-2.2924 0.7875-2.853 1.75c-0.91029 1.5629-1.0225 1.5094-1.0497-0.5z" />
                                        </g>
                                    </mask>
                                </defs>

                                {/* COLLAGE CONTENT */}
                                <foreignObject mask="url(#final-pakistan-mask)" width="944.09" height="1252.4">
                                    <div className="w-full h-full grid grid-cols-12 md:grid-cols-16 gap-[1px] bg-white/5">
                                        {[...Array(256)].map((_, i) => (
                                            <div key={i} className="aspect-square w-full h-full">
                                                <img
                                                    src={`https://images.unsplash.com/photo-${photoIds[i % photoIds.length]}?q=80&w=200&auto=format&fit=crop`}
                                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                                                    alt=""
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </foreignObject>
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default RealStories;
