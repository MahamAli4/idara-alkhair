import React from 'react';

const WhoWeAre: React.FC = () => {
    return (
        <section className="who-we-are section-padding-custom">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <img
                            src="https://images.unsplash.com/photo-1574340532515-db80a3bd96b4?q=80&w=2070&auto=format&fit=crop"
                            alt="Students raising hands"
                            className="img-fluid rounded-4 shadow-lg"
                        />
                    </div>
                    <div className="col-lg-6 ps-lg-5">
                        <h2 className="display-5 fw-bold mb-4">Who <span className="text-orange">We</span> Are?</h2>
                        <p className="mb-5 opacity-75 lead">
                            Idara Al-Khair Welfare Society is a trusted non-profit organization working across Pakistan to uplift underprivileged communities. Since 1987, our work has focused on long-term solutions rather than temporary relief; ensuring dignity, opportunity, and self-reliance for individuals and families.
                        </p>
                        <p className="mb-5 italic fw-bold text-orange">
                            "We believe charity should not only relieve pain, but also restore hope."
                        </p>

                        <div className="d-flex flex-wrap gap-3 mb-5">
                            <div className="stat-box cyan">
                                <h3>38 +</h3>
                                <p>Years<br /><small>continuous service</small></p>
                            </div>
                            <div className="stat-box orange">
                                <h3>850 K</h3>
                                <p>Individuals<br /><small>supported</small></p>
                            </div>
                            <div className="stat-box yellow">
                                <h3>6000</h3>
                                <p>Students<br /><small>currently enrolled</small></p>
                            </div>
                        </div>

                        <div className="bg-white bg-opacity-25 rounded-3 p-4 text-center">
                            <span className="h4 fw-bold">Multiple Welfare Programs</span><br />
                            <small>(operating nationwide)</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
