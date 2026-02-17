import React from 'react';

const HowToHelp: React.FC = () => {
    const helpOptions = [
        {
            title: "Donate",
            image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop",
            btnText: "Donate"
        },
        {
            title: "Sponsor a Child",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop",
            btnText: "Sponsor a Child"
        },
        {
            title: "Volunteer",
            image: "https://images.unsplash.com/photo-1559027615-cd9d7a9bbc52?q=80&w=2070&auto=format&fit=crop",
            btnText: "Volunteer"
        }
    ];

    return (
        <section className="how-to-help section-padding-custom bg-white">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-3">How You Can <span className="text-orange">Help?</span></h2>
                    <p className="lead text-muted">Your support can change lives, immediately and forever.</p>
                </div>

                <div className="row g-4 mt-4">
                    {helpOptions.map((option, index) => (
                        <div key={index} className="col-lg-4">
                            <div className="help-card card border-0">
                                <img src={option.image} alt={option.title} />
                                <div className="help-card-overlay shadow-sm">
                                    <button className="btn btn-help">{option.btnText}</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowToHelp;
