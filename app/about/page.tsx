import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
    return (
        <main>
            <Navbar />
            <section className="section-padding py-5 mt-5">
                <div className="container mt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h1 className="display-4 fw-bold mb-4">About Idara Al-Khair</h1>
                            <p className="lead mb-4">
                                Founded in 1987, Idara Al-Khair has been a beacon of hope for thousands of children in Karachi.
                                Our mission is to break the cycle of poverty through quality education and sustainable community support.
                            </p>
                            <button className="btn btn-primary rounded-pill px-4">Our History</button>
                        </div>
                        <div className="col-lg-6">
                            <img
                                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
                                alt="About us"
                                className="img-fluid rounded-4 shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
