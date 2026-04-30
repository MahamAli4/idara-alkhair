import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WhoWeAre from '@/components/WhoWeAre';
import StatsSection from '@/components/StatsSection';
import WhatWeDo from '@/components/WhatWeDo';
import ProjectCards from '@/components/ProjectCards';
import DonorsCarousel from '@/components/DonorsCarousel';
import RealStories from '@/components/RealStories';
import TestimonialsSection from '@/components/TestimonialsSection';
import HowToHelp from '@/components/HowToHelp';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <WhoWeAre />
            <StatsSection />
            <WhatWeDo />
            <ProjectCards />
            <DonorsCarousel />
            <RealStories />
            <TestimonialsSection />
            <HowToHelp />
            <Footer />
        </main>
    );
}
