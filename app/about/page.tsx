import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutHero from '@/components/AboutHero';
import AboutIntro from '@/components/AboutIntro';
import MissionVision from '@/components/MissionVision';

export default function AboutPage() {
    return (
        <main className="overflow-x-hidden">
            <Navbar />
            <AboutHero />
            <AboutIntro />
            <MissionVision />
            <Footer />
        </main>
    );
}
