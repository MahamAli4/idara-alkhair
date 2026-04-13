import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';

const projects = [
    {
        title: 'SMS',
        fullName: 'School Management System',
        description: 'Managing student records, admissions, attendance, and academic performance.',
        image: '/website-media/itinstitute/image01.jpg'
    },
    {
        title: 'VMS',
        fullName: 'Visitor Management System',
        description: 'Secure check-in process for guests, ensuring safety and tracking.',
        image: '/website-media/itinstitute/image02.jpg'
    },
    {
        title: 'HDMS',
        fullName: 'Help Desk Management System',
        description: 'Centralized support ticketing system for resolving technical issues.',
        image: '/website-media/itinstitute/image03.jpg'
    }
];

export default function ProjectsPage() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />
            <section className="py-20 mt-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-idara-navy tracking-tight mb-4">
                            Our <span className="text-idara-orange">Projects</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 font-medium">
                            Explore our digital ecosystem and welfare initiatives.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
