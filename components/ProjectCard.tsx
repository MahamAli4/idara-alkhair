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
        <div className="w-full max-w-[350px] group flex flex-col mb-6">
            <a href={link} className="block relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#012060]/90 via-[#012060]/40 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90"></div>
                
                {/* Text Content overlaying the image */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20 text-white">
                    <h2 className="text-3xl font-black uppercase tracking-tight mb-1 group-hover:text-idara-orange transition-colors">{title}</h2>
                    <p className="text-sm font-semibold opacity-90 mb-3 uppercase tracking-wider">{fullName}</p>
                    
                    {/* Hidden description that slides up on hover */}
                    <div className="h-0 overflow-hidden opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 ease-in-out">
                         <p className="text-sm leading-relaxed mb-4">{description}</p>
                         <span className="inline-block bg-white text-[#012060] text-xs font-bold uppercase tracking-widest py-2 px-5 rounded-full hover:bg-idara-orange hover:text-white transition-colors">
                             Click Here
                         </span>
                    </div>
                </div>
            </a>
            
            {/* Label below the card */}
            <h5 className="mt-4 font-bold uppercase text-gray-500 text-xs text-center tracking-widest">{fullName}</h5>
        </div>
    );
};

export default ProjectCard;
