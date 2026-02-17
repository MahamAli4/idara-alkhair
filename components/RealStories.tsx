import React from 'react';

const RealStories: React.FC = () => {
    return (
        <section className="real-stories section-padding-custom bg-navy overflow-hidden">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <h2 className="display-5 fw-bold text-white mb-2">Real Stories</h2>
                        <h2 className="display-5 fw-bold text-orange mb-4">Real Impact.</h2>

                        <div className="testimonial mt-5">
                            <p className="fs-5 italic mb-1">
                                "Because of Idara Al-Khair, my children are studying and dreaming again."
                            </p>
                            <p className="text-orange fw-bold small">Parent of a sponsored student.</p>
                        </div>

                        <div className="testimonial mt-4">
                            <p className="fs-5 italic mb-1">
                                "Your support reached us when we had nothing left."
                            </p>
                            <p className="text-orange fw-bold small">Disaster Relief Beneficiary</p>
                        </div>
                    </div>

                    <div className="col-lg-7 position-relative">
                        <div className="map-collage-container ps-lg-5">
                            <div className="pakistan-map-mask shadow-lg"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RealStories;
