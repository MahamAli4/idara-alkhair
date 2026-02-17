import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <main>
            <Navbar />
            <section className="section-padding py-5 mt-5">
                <div className="container mt-5">
                    <div className="text-center mb-5">
                        <h1 className="display-4 fw-bold">Contact Us</h1>
                        <p className="lead text-muted">We'd love to hear from you. Get in touch with our team.</p>
                    </div>

                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="bg-white p-5 rounded-4 shadow-sm border">
                                <h3 className="mb-4">Send us a Message</h3>
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Full Name</label>
                                        <input type="text" className="form-control" placeholder="Your Name" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email Address</label>
                                        <input type="email" className="form-control" placeholder="name@example.com" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Message</label>
                                        <textarea className="form-control" rows={4} placeholder="How can we help?"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100 py-3 rounded-pill fw-bold">Send Message</button>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="ps-lg-5">
                                <h3 className="mb-4">Contact Information</h3>
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-center gap-3 mb-4">
                                        <div className="bg-primary bg-opacity-10 p-3 rounded-circle text-primary">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h5 className="mb-0">Head Office</h5>
                                            <p className="text-muted mb-0">R-510/15 Federal B Area, Karachi</p>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center gap-3 mb-4">
                                        <div className="bg-primary bg-opacity-10 p-3 rounded-circle text-primary">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h5 className="mb-0">Phone</h5>
                                            <p className="text-muted mb-0">+92 300 211 2609</p>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center gap-3 mb-4">
                                        <div className="bg-primary bg-opacity-10 p-3 rounded-circle text-primary">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h5 className="mb-0">Email</h5>
                                            <p className="text-muted mb-0">info@idaraalkhair.com</p>
                                        </div>
                                    </li>
                                </ul>

                                <div className="mt-5 rounded-4 overflow-hidden shadow-sm border" style={{ height: '300px' }}>
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14480.000000000000!2d67.00000000000000!3d24.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e!2sKarachi!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}
