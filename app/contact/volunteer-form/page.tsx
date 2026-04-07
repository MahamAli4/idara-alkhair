'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function VolunteerFormPage() {
    const [formData, setFormData] = useState({
        yourFirstName: '',
        yourLastName: '',
        yourEmail: '',
        volunteerFirstName: '',
        volunteerLastName: '',
        volunteerEmail: '',
        volunteerAge: '',
    });

    const [availability, setAvailability] = useState<string[]>([]);
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleAvailabilityChange = (item: string) => {
        setAvailability(prev => 
            prev.includes(item) ? prev.filter(a => a !== item) : [...prev, item]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        try {
            const response = await fetch('/api/volunteers', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    applicantName: `${formData.yourFirstName} ${formData.yourLastName}`.trim(),
                    applicantEmail: formData.yourEmail,
                    volunteerName: `${formData.volunteerFirstName} ${formData.volunteerLastName}`.trim(),
                    volunteerEmail: formData.volunteerEmail,
                    volunteerAge: formData.volunteerAge,
                    availability: availability,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitted(true);
                // Reset form
                setFormData({
                    yourFirstName: '',
                    yourLastName: '',
                    yourEmail: '',
                    volunteerFirstName: '',
                    volunteerLastName: '',
                    volunteerEmail: '',
                    volunteerAge: '',
                });
                setAvailability([]);
            } else {
                setError(data.error || 'Failed to submit application');
            }
        } catch (err: any) {
            setError('Submission failed. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            {/* ===== HERO SECTION ===== */}
            <section className="relative mt-28.75 h-[80vh] overflow-hidden">
                <img
                    src="/website-media/application-volunteerform/bannerimage.jpg"
                    alt="Volunteering Students"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter">
                        <span className="text-idara-orange">APPLICATION</span> / VOLUNTEER FORM
                    </h1>
                </div>
            </section>

            {/* ===== BE PART OF THE CHANGE SECTION ===== */}
            <section className="container mx-auto px-6 py-16 lg:py-24 relative">
                <div className="max-w-4xl relative z-10">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 transition-all duration-300">
                        <span className="text-idara-navy">Be Part of the </span>
                        <span className="text-idara-orange">Change</span>
                    </h2>
                    <div className="space-y-6">
                        <p className="text-gray-700 text-lg md:text-xl lg:text-2xl font-medium leading-relaxed max-w-3xl">
                            Join Idara Al-Khair as a volunteer and contribute your time, skills, and passion toward meaningful causes.
                        </p>
                        <p className="text-gray-700 text-lg md:text-xl lg:text-2xl font-medium italic opacity-80">
                            Every helping hand matters.
                        </p>
                    </div>
                </div>

                {/* Geometric decorative elements code remains same but I'll skip it for brevity or keep if exact matches are needed */}
                <div className="absolute top-0 right-0 lg:right-10 w-48 h-48 lg:w-64 lg:h-64 pointer-events-none opacity-90 hidden md:block">
                    <div className="relative w-full h-full">
                        <div className="absolute top-[10%] left-[10%] w-[45%] h-[45%] bg-idara-orange" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)' }}></div>
                        <div className="absolute bottom-[10%] left-[10%] w-[45%] h-[45%] bg-idara-cyan" style={{ clipPath: 'polygon(0% 0%, 100% 100%, 0% 100%)' }}></div>
                        <div className="absolute top-1/2 -translate-y-1/2 right-[10%] w-[45%] h-[45%] bg-idara-yellow" style={{ clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)' }}></div>
                    </div>
                </div>
            </section>

            {/* ===== VOLUNTEER FORM SECTION ===== */}
            <section className="container mx-auto px-6 pb-24">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-4xl lg:text-5xl font-bold text-[#002060] text-center mb-20 tracking-normal">
                        Volunteer form
                    </h3>

                    {submitted ? (
                        <div className="bg-emerald-50 border border-emerald-100 p-12 rounded-3xl text-center space-y-6 animate-in fade-in zoom-in duration-500">
                            <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto text-white shadow-lg">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </div>
                            <h4 className="text-3xl font-bold text-emerald-800">Application Submitted!</h4>
                            <p className="text-emerald-700 text-lg">Thank you for your interest. We will contact you soon.</p>
                            <button 
                                onClick={() => setSubmitted(false)}
                                className="px-8 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors"
                            >
                                Send Another
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-12">
                            {error && (
                                <div className="p-4 bg-rose-50 border border-rose-100 text-rose-700 rounded-xl font-semibold">
                                    ❌ {error}
                                </div>
                            )}

                            <div className="space-y-3">
                                <label className="text-base font-bold text-[#002060] block px-1">Your name</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="yourFirstName"
                                        value={formData.yourFirstName}
                                        onChange={handleInputChange}
                                        placeholder="First"
                                        required
                                        className="w-full px-5 py-4 rounded-sm border border-gray-200 bg-white focus:border-idara-orange outline-none transition-all text-sm"
                                    />
                                    <input
                                        type="text"
                                        name="yourLastName"
                                        value={formData.yourLastName}
                                        onChange={handleInputChange}
                                        placeholder="Last"
                                        required
                                        className="w-full px-5 py-4 rounded-sm border border-gray-200 bg-white focus:border-idara-orange outline-none transition-all text-sm"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-base font-bold text-idara-navy block px-1">Your email address</label>
                                <input
                                    type="email"
                                    name="yourEmail"
                                    value={formData.yourEmail}
                                    onChange={handleInputChange}
                                    placeholder="Email Address"
                                    required
                                    className="w-full px-5 py-4 rounded-sm border border-gray-200 bg-white focus:border-idara-orange outline-none transition-all text-sm"
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="text-base font-bold text-idara-navy block px-1">The volunteer name</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="volunteerFirstName"
                                        value={formData.volunteerFirstName}
                                        onChange={handleInputChange}
                                        placeholder="First"
                                        required
                                        className="w-full px-5 py-4 rounded-sm border border-gray-200 bg-white focus:border-idara-orange outline-none transition-all text-sm"
                                    />
                                    <input
                                        type="text"
                                        name="volunteerLastName"
                                        value={formData.volunteerLastName}
                                        onChange={handleInputChange}
                                        placeholder="Last"
                                        required
                                        className="w-full px-5 py-4 rounded-sm border border-gray-200 bg-white focus:border-idara-orange outline-none transition-all text-sm"
                                    />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-base font-bold text-idara-navy block px-1">The volunteer email address</label>
                                <input
                                    type="email"
                                    name="volunteerEmail"
                                    value={formData.volunteerEmail}
                                    onChange={handleInputChange}
                                    placeholder="Email Address"
                                    required
                                    className="w-full px-5 py-4 rounded-sm border border-gray-200 bg-white focus:border-idara-orange outline-none transition-all text-sm"
                                />
                            </div>

                            <div className="space-y-3">
                                <label className="text-base font-bold text-idara-navy block px-1">The volunteer age</label>
                                <input
                                    type="text"
                                    name="volunteerAge"
                                    value={formData.volunteerAge}
                                    onChange={handleInputChange}
                                    placeholder="Age"
                                    required
                                    className="w-full px-5 py-4 rounded-sm border border-gray-200 bg-white focus:border-idara-orange outline-none transition-all text-sm"
                                />
                            </div>

                            <div className="space-y-6 pt-4">
                                <label className="text-base font-bold text-[#002060] block px-1">Availability</label>
                                <div className="space-y-3">
                                    {['Weekends', '1 day a week', '2 days a week', '4th any day'].map((item) => (
                                        <label key={item} className="flex items-center gap-4 p-4 border border-gray-200 rounded-sm cursor-pointer hover:bg-gray-50 transition-all bg-white group">
                                            <div className="relative flex items-center justify-center">
                                                <input 
                                                    type="checkbox" 
                                                    checked={availability.includes(item)}
                                                    onChange={() => handleAvailabilityChange(item)}
                                                    className="peer w-5 h-5 appearance-none border border-gray-300 rounded-sm checked:bg-[#002060] checked:border-[#002060] transition-all cursor-pointer" 
                                                />
                                                <svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                            </div>
                                            <span className="text-sm font-semibold text-gray-700 group-hover:text-[#002060] transition-colors">{item}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="flex justify-end pt-8">
                                <button 
                                    type="submit" 
                                    disabled={submitting}
                                    className={`bg-[#002060] text-white px-16 py-3.5 rounded-sm font-bold text-lg hover:bg-[#001c54] transition-all shadow-lg active:scale-[0.98] ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    {submitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}