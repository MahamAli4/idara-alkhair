import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import WhatWeDo from '@/components/WhatWeDo';
import RealStories from '@/components/RealStories';
import HowToHelp from '@/components/HowToHelp';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <WhoWeAre />
            <WhatWeDo />
            <RealStories />
            <HowToHelp />
            <Footer />
        </main>
    );
}
