import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero-section position-relative bg-white pt-5 mt-5">
            <div className="hero-blob-bg"></div>
            <div className="container position-relative z-1 pt-5 mt-4">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <h1 className="hero-title mb-4">
                            Changing <span className="orange">Lives</span><br />
                            Today. Building a Better <br />
                            <span className="orange">Tomorrow.</span>
                        </h1>
                        <p className="lead text-navy opacity-75 mb-5" style={{ maxWidth: '500px', fontSize: '1.1rem' }}>
                            For over 38 years, Idara Al-Khair Welfare Society has been serving humanity with compassion, transparency, and purpose. From educating children to feeding the hungry and providing healthcare to those who cannot afford it, we stand with those who need support the most.
                        </p>
                        <button className="btn btn-navy text-white px-4 py-2 rounded-2 fw-bold" style={{ backgroundColor: '#031249' }}>
                            Help a Family Today
                        </button>
                    </div>
                    <div className="col-lg-6 position-relative text-center">
                        {/* Using a mockup collage of two images to match the reference */}
                        <div className="hero-image-container d-flex justify-content-center align-items-center">
                            <img
                                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop"
                                alt="Children in Need"
                                className="img-fluid rounded-circle"
                                style={{ width: '450px', height: '450px', objectFit: 'cover', border: '15px solid white', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
