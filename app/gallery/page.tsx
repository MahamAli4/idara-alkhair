import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GalleryHero from '@/components/GalleryHero';
import GalleryGrid from '@/components/GalleryGrid';

export const metadata = {
    title: 'Gallery | Idara Al-Khair Welfare Society',
    description: 'Explore glimpses of Idara Al-Khair Welfare Society activities, schools, medical centers, and community projects through our gallery.',
};

export default function GalleryPage() {
    return (
        <main className="overflow-x-hidden">
            <Navbar />
            <GalleryHero />
            <GalleryGrid />
            <Footer />
        </main>
    );
}
