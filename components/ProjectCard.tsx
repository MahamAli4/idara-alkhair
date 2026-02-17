import React from 'react';

interface ProjectCardProps {
    title: string;
    fullName: string;
    description: string;
    image: string;
    link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, fullName, description, image, link = '#' }) => {
    return (
        <div className="card-wrapper">
            <a href={link} className="card-link">
                <div className="box shadow-lg rounded overflow-hidden">
                    <div className="figure h-100">
                        <img src={image} alt={title} className="w-100 h-100 object-fit-cover" />
                    </div>
                    <div className="caption text-white p-4">
                        <div className="about">
                            <h2 className="h4 fw-bold text-uppercase">{title}</h2>
                            <small className="d-block mb-3 fw-semibold">{fullName}</small>
                            <p className="small mb-3">{description}</p>
                            <span className="btn btn-sm btn-light rounded-pill px-3">Click Here</span>
                        </div>
                    </div>
                </div>
            </a>
            <h5 className="card-label mt-3 fw-bold text-uppercase text-secondary small">{fullName}</h5>
        </div>
    );
};

export default ProjectCard;
