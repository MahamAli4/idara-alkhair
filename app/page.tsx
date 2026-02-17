import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';

const projects = [
    {
        title: 'SMS',
        fullName: 'School Management System',
        description: 'Managing student records, admissions, attendance, and academic performance.',
        image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
        title: 'VMS',
        fullName: 'Visitor Management System',
        description: 'Secure check-in process for guests, ensuring safety and tracking.',
        image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
        title: 'HDMS',
        fullName: 'Help Desk Management System',
        description: 'Centralized support ticketing system for resolving technical issues.',
        image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
        title: 'LMS',
        fullName: 'Learning Management System',
        description: 'Digital platform for delivering courses and facilitating online learning.',
        image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
        title: 'ALL',
        fullName: 'Alkhair Lingo Lab',
        description: 'Interactive language lab designed to enhance linguistic skills.',
        image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
];

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />

            <section id="projects" className="projects-section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h1 className="section-title">Our Digital Ecosystem</h1>
                    </div>

                    <div className="cards-container">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                fullName={project.fullName}
                                description={project.description}
                                image={project.image}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
