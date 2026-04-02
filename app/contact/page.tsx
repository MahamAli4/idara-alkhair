
'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, Loader2 } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    useEffect(() => {
        AOS.init({ 
            duration: 800,
            easing: 'ease-in-out', 
            once: true,
            mirror: false
        });
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(null);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setStatus({ type: 'success', text: 'Thank you! Your message has been sent successfully.' });
            setName('');
            setEmail('');
            setMessage('');
        } catch (err: any) {
            setStatus({ type: 'error', text: err.message || 'Something went wrong. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            {/* ===== HERO SECTION ===== */}
             <section className="relative mt-29.5 w-full overflow-hidden h-55 md:h-80">
                <img
                    src="/website-media/contactus/bannerimage.jpg"
                    alt="IT Lab"
                    className="absolute inset-0 w-full h-full object-cover"
                />
              <div className="absolute inset-0 bg-[#012060]/10"></div>

                <div 
                    className="absolute inset-0 flex items-center justify-center px-4"
                    data-aos="zoom-in"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-4xl font-bold text-white text-center tracking-tighter">
                        CONTACT <span className="text-idara-orange">US</span>
                    </h1>
                </div>
            </section>

            {/* ===== LET'S CONNECT SECTION ===== */}
            <section className="container mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row gap-16 lg:items-start">

                    {/* Left SIDE: TEXT */}
                    <div className="w-full lg:w-1/2" data-aos="fade-right">
                        <div className="max-w-md">
                            <h2 className="text-4xl md:text-5xl font-black text-idara-navy mb-8">
                                Let's <span className="text-idara-orange uppercase">Connect</span>
                            </h2>
                            <p className="text-gray-700 text-lg font-medium mb-12">
                                Whether you want to donate, volunteer, or partner with us, we'd love to hear from you.
                            </p>

                            <h2 className="text-4xl md:text-5xl font-black text-idara-navy mb-8">
                                Contact <span className="text-idara-orange uppercase">Information</span>
                            </h2>
                            <p className="text-gray-700 text-lg font-medium">
                                Whether you want to donate, volunteer, or partner with us, we'd love to hear from you.
                            </p>
                        </div>
                    </div>

                    {/* Right SIDE: FORM */}
                    <div className="w-full lg:w-1/2 relative" data-aos="fade-left" data-aos-delay={150}>
                        {/* Decorative Shapes */}
                        <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-idara-orange z-0" style={{ clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)' }}></div>
                        <div className="absolute -top-10 -right-4 w-24 h-24 bg-idara-cyan z-0 shadow-lg" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}></div>

                        <div className="relative z-10 bg-gray-100 p-8 md:p-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100">
                            {status && (
                                <div className={`mb-6 p-4 rounded-lg text-sm font-bold ${status.type === 'success' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'}`}>
                                    {status.text}
                                </div>
                            )}

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 gap-2">
                                    <div className="flex items-center gap-4">
                                        <label className="text-sm font-bold text-idara-navy min-w-15">Name :</label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            disabled={isSubmitting}
                                            placeholder="Type your name here..."
                                            className="flex-1 bg-white border border-gray-200 px-4 py-3 rounded outline-none text-sm italic focus:border-idara-orange transition-colors"
                                        />
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <label className="text-sm font-bold text-idara-navy min-w-15">Email :</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                            disabled={isSubmitting}
                                            placeholder="Enter your email..."
                                            className="flex-1 bg-white border border-gray-200 px-4 py-3 rounded outline-none text-sm italic focus:border-idara-orange transition-colors"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-idara-navy block">What can we help you with?</label>
                                    <textarea
                                        rows={8}
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                        disabled={isSubmitting}
                                        placeholder="Enter your message..."
                                        className="w-full bg-white border border-gray-200 px-4 py-3 rounded outline-none text-sm italic resize-none focus:border-idara-orange transition-colors"
                                    ></textarea>
                                </div>
                                <div className="flex justify-end">
                                    <button 
                                        type="submit" 
                                        disabled={isSubmitting}
                                        className="bg-[#012060] text-white px-8 py-2 rounded font-bold uppercase text-xs shadow-md transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                    >
                                        {isSubmitting && <Loader2 className="w-3 h-3 animate-spin" />}
                                        {isSubmitting ? 'Submitting...' : 'Submit'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CONTACT INFO CARDS SECTION ===== */}
            <section className="bg-gray-200 py-20 mt-15 px-6">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Phone Card */}
                        <div className="text-center group" data-aos="fade-up">
                            <div className="w-24 h-24 bg-idara-cyan rounded-full flex items-center -mt-31 justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 transition-transform">
                                <Phone className="text-white w-10 h-10" />
                            </div>
                            <h3 className="text-4xl font-black  text-idara-navy mb-4 uppercase">Phone</h3>
                            <p className="text-lg font-medium text-gray-700">0300-2992469</p>
                            <p className="text-lg font-medium text-gray-700">03002112609</p>
                        </div>

                        {/* Email Card */}
                        <div className="text-center group" data-aos="fade-up" data-aos-delay={100}>
                            <div className="w-24 h-24 bg-idara-orange rounded-full flex -mt-31 items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 transition-transform">
                                <Mail className="text-white w-10 h-10" />
                            </div>
                            <h3 className="text-4xl font-black text-idara-navy mb-4 uppercase">Email</h3>
                            <p className="text-lg font-medium text-gray-700">idaraalkhair@gmail.com</p>
                            <p className="text-lg font-medium text-gray-700">idaraalkhair@hotmail.com</p>
                        </div>

                        {/* Address Card */}
                        <div className="text-center group" data-aos="fade-up" data-aos-delay={200}>
                            <div className="w-24 h-24 bg-[#ffc20e] rounded-full flex -mt-31 items-center justify-center mx-auto mb-6 shadow-lg transform group-hover:scale-110 transition-transform">
                                <MapPin className="text-white w-10 h-10" />
                            </div>
                            <h3 className="text-4xl font-black text-idara-navy mb-4 uppercase">Address</h3>
                            <p className="text-lg font-medium text-gray-700">R - 510/15, Federal-B Area,</p>
                            <p className="text-lg font-medium text-gray-700">Karachi.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}