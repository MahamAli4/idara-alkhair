import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="hero-section position-relative overflow-hidden d-flex align-items-center justify-content-center text-center">
            <div className="position-absolute top-0 left-0 w-100 h-100 bg-dark opacity-50 z-0"></div>
            <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop"
                alt="Education"
                className="position-absolute top-0 left-0 w-100 h-100 object-fit-cover z--1"
            />

            <div className="container position-relative z-1">
                <div className="hero-content mx-auto p-5 rounded-4 shadow-lg text-white" style={{ backgroundColor: '#074b54', maxWidth: '800px' }}>
                    <h1 className="display-3 fw-bold mb-4">Empowering Education for Every Child</h1>
                    <p className="lead mb-0">
                        Idara Al-Khair Welfare Society has been dedicated to providing quality education and life-changing support to underprivileged communities in Karachi since 1987.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
