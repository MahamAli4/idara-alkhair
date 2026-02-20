import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import AboutIntro from '@/components/AboutIntro';
import MissionVision from '@/components/MissionVision';
import OurValues from '@/components/OurValues';
import AboutGallery from '@/components/AboutGallery';

export default function AboutPage() {
    return (
        <main className="overflow-x-hidden">
            <Navbar />
            <AboutHero />
            <AboutIntro />
            <MissionVision />
            {/* OurValues is now merged into MissionVision as per reference image */}
            <AboutGallery />
            <Footer />
        </main>
    );
}
