import React from 'react';

const AboutGallery = () => {
    return (
        <section className="py-20 lg:py-32">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Image 1: Tall */}
                    <div className="lg:row-span-2 overflow-hidden rounded-2xl group">
                        <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" alt="Children Studying" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>

                    {/* Image 2: Wide */}
                    <div className="lg:col-span-2 overflow-hidden rounded-2xl group">
                        <img src="https://images.unsplash.com/photo-1542810634-71277d95dc24?q=80&w=2070&auto=format&fit=crop" alt="Classroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>

                    {/* Image 3: Standard */}
                    <div className="overflow-hidden rounded-2xl group">
                        <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" alt="Smiling Student" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>

                    {/* Image 4: Standard */}
                    <div className="overflow-hidden rounded-2xl group">
                        <img src="https://images.unsplash.com/photo-1596404780654-a6273414995f?q=80&w=1974&auto=format&fit=crop" alt="Group of Kids" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>

                    {/* Image 5: Wide */}
                    <div className="lg:col-span-2 overflow-hidden rounded-2xl group">
                        <img src="https://images.unsplash.com/photo-1602484898145-21788220808a?q=80&w=2070&auto=format&fit=crop" alt="Community Support" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutGallery;
