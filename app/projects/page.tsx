import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';

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
    }
];

export default function ProjectsPage() {
    return (
        <main>
            <Navbar />
            <section className="section-padding py-5 mt-5">
                <div className="container mt-5">
                    <div className="text-center mb-5">
                        <h1 className="display-4 fw-bold">Our Projects</h1>
                        <p className="lead text-muted">Explore our digital ecosystem and welfare initiatives.</p>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {projects.map((project, index) => (
                            <div key={index} className="col-lg-4 col-md-6 d-flex justify-content-center">
                                <ProjectCard {...project} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
