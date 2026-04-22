'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Smartphone, Wallet, CheckCircle, Heart, X, Copy, Check, Info } from 'lucide-react';
import { useState } from 'react';

export default function DonatePage() {
    // ✅ MODAL & FORM STATES
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [step, setStep] = useState(1); // 1: Select Bank & Enter Amount, 2: Final Details
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [copiedField, setCopiedField] = useState<string | null>(null);

    const [donorData, setDonorData] = useState({
        donorName: '',
        donorEmail: '',
        donorPhone: '',
        amount: '',
        donorBank: '',
        targetNgoBank: 'Meezan', // Default
        reference: ''
    });

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-quad',
            offset: 100,
        });
    }, []);

    const copyToClipboard = (text: string, fieldId: string) => {
        navigator.clipboard.writeText(text);
        setCopiedField(fieldId);
        setTimeout(() => setCopiedField(null), 2000);
    };

    const handleDonationSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch('/api/donate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(donorData),
            });

            if (res.ok) {
                setIsSuccess(true);
                // Reset after 3 seconds
                setTimeout(() => {
                    setIsModalOpen(false);
                    setIsSuccess(false);
                    setStep(1);
                    setDonorData({
                        donorName: '',
                        donorEmail: '',
                        donorPhone: '',
                        amount: '',
                        donorBank: '',
                        targetNgoBank: 'Meezan',
                        reference: ''
                    });
                }, 5000);
            }
        } catch (error) {
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const bankList = [
        "Meezan Bank", "MCB Bank", "HBL", "UBL", "Bank Alfalah", 
        "Allied Bank", "Faysal Bank", "Askari Bank", "Other"
    ];

    return (
        <main className="overflow-x-hidden bg-white">
            <Navbar />

            {/* ===== HERO BANNER ===== */}
            <section className="relative mt-[80px] w-full overflow-hidden h-[80vh]">
                <img
                    src="/website-media/donatenow/header.jpg"
                    alt="Donate Now"
                    className="w-full h-full object-cover"
                    data-aos="fade"
                />
                <div className="absolute inset-0 bg-[#012060]/10"></div>
              
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 
                        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white text-center tracking-tighter"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        Donate <span className="text-idara-orange">Now</span>
                    </h1>
                </div>
            </section>

            {/* ===== YOUR DONATION CAN CHANGE A LIFE ===== */}
            <section className="container mx-auto px-6 md:px-12 py-14 md:py-20 relative">
                {/* Decorative triangles - Animated to slide in */}
                {/* Triangle 1 */}
                <div
                    className="absolute right-6 sm:right-10 md:right-[16%] top-2 sm:top-2 md:top-[1%] w-0 h-0 z-20 rotate-15
                    border-t-30 sm:border-t-40 md:border-t-50 border-t-yellow-400
                    border-r-30 sm:border-r-40 md:border-r-50 border-r-transparent"
                    data-aos="fade-down-left"
                    data-aos-delay="400"
                ></div>

                {/* Triangle 2 */}
                <div
                    className="absolute right-4 sm:right-6 md:right-[10%] -top-8 sm:-top-9 md:-top-[14%] w-0 h-0 z-20 -rotate-90
                    border-t-40 sm:border-t-50 md:border-t-60 border-t-orange-500
                    border-r-40 sm:border-r-50 md:border-r-60 border-r-transparent"
                    data-aos="fade-down"
                    data-aos-delay="600"
                ></div>

                {/* Triangle 3 */}
                <div
                    className="absolute right-5 sm:right-8 md:right-[13%] top-8 sm:top-9 md:top-[14%] w-0 h-0 z-40 rotate-90
                    border-t-40 sm:border-t-50 md:border-t-60 border-t-cyan-500
                    border-r-40 sm:border-r-50 md:border-r-60 border-r-transparent"
                    data-aos="fade-up-left"
                    data-aos-delay="800"
                ></div>

                <div className="max-w-4xl" data-aos="fade-right">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        <span className="text-[#012060] font-semibold">Your Donation Can </span>
                        <span className="text-idara-orange font-extrabold">Change a Life Today</span>
                    </h2>
                    <p className="text-black text-base md:text-lg">
                        Every contribution you make helps provide education, food, healthcare, and emergency support to those who need it most.<br />
                        At Idara Al-Khair, we honor your trust as our greatest responsibility.
                    </p>
                </div>
            </section>

            {/* ===== WHERE YOUR DONATION GOES ===== */}
            <div className="bg-white py-6 -mt-12 relative z-20">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center" data-aos="fade-up">
                    <span className="text-[#012060]">Where Your </span>
                    <span className="text-idara-orange">Donation Goes</span>
                </h3>
            </div>

            <section className="relative overflow-hidden -mt-1">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/website-media/donatenow/backgroundimage.jpg"
                        alt=""
                        className="w-full h-full object-cover grayscale opacity-90"
                    />
                </div>

                <div className="relative z-10 container mx-auto px-6 md:px-12 py-14 md:py-20">
                    {/* Four Impact Shapes - Dropping in staggered */}
                    <div className="flex flex-wrap justify-center gap-6 md:gap-8 -mt-20 mb-13 max-w-4xl mx-auto">
                        {[
                            { text: "Educating underprivileged children", color: "bg-idara-orange" },
                            { text: "Feeding families facing hunger", color: "bg-idara-yellow" },
                            { text: "Providing medical care to the sick", color: "bg-cyan-500" },
                            { text: "Supporting disaster-affected communities", color: "bg-[#012060]" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                data-aos="fade-down"
                                data-aos-delay={i * 200}
                                className={`${item.color} w-[calc(50%-12px)] sm:w-[150px] h-[180px] md:w-[170px] md:h-[200px] rounded-b-[90px] flex items-center justify-center p-5 shadow-lg transform transition-transform hover:scale-105`}
                            >
                                <p className="text-white text-center text-sm md:text-base font-semibold leading-tight">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    <p className="text-[#012060] text-center text-base font-semibold mb-16 mt-8" data-aos="fade-up">
                        We ensure that every donation is utilized responsibly and transparently.
                    </p>

                    {/* Types of Donation */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8" data-aos="fade-up">
                        <span className="text-[#012060]">Types of </span>
                        <span className="text-idara-orange">Donation</span>
                    </h3>

                    <div className="max-w-3xl mx-auto mb-16" data-aos="fade-left">
                        <ul className="list-disc pl-6 space-y-4 text-gray-800 text-base md:text-xl">
                            <li className="font-semibold">Zakat - Eligible programs with complete Shariah compliance</li>
                            <li className="font-semibold">Sadaqah - Support any welfare initiative</li>
                            <li className="font-semibold">General Donation - Where the need is greatest</li>
                            <li className="font-semibold">Sponsor a Child / Family - Provide education, healthcare, and essentials</li>
                        </ul>
                    </div>

                    {/* How to Donate */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8" data-aos="fade-up">
                        <span className="text-[#012060]">How to </span>
                        <span className="text-idara-orange">Donate</span>
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                        {/* Bank Transfer 1 */}
                        <div 
                            className="bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all group relative overflow-x-auto"
                            data-aos="fade-right"
                            data-aos-delay="200"
                        >
                            <div className="flex items-start gap-6 relative z-10">
                                <div className="relative shrink-0">
                                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-[#012060] group-hover:bg-[#012060] group-hover:text-white transition-colors duration-300">
                                        <Smartphone className="w-8 h-8" />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-emerald-500 rounded-full border-4 border-white flex items-center justify-center">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#012060] mb-4">Bank Transfer 1</h4>
                                    <div className="space-y-2">
                                        <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Title Of Account:</p>
                                        <p className="text-[#012060] font-bold text-lg mb-4">Idara Al-Khair Welfare Society</p>
                                        
                                        <div className="grid grid-cols-1 gap-3">
                                            <div className="p-3 bg-gray-50 rounded-xl">
                                                <p className="text-gray-400 text-[11px] uppercase font-bold tracking-widest">A/C NO & Branch Code</p>
                                                <p className="text-gray-800 font-bold">0101018353 <span className="text-gray-400 mx-1">/</span> 0133</p>
                                            </div>
                                            <div className="p-3 bg-gray-50 rounded-xl">
                                                <p className="text-gray-400 text-[11px] uppercase font-bold tracking-widest">Bank Name</p>
                                                <p className="text-gray-800 font-bold">Meezan Bank Pvt. Ltd.</p>
                                            </div>
                                            <div className="p-3 bg-gray-50 rounded-xl">
                                                <p className="text-gray-400 text-[11px] uppercase font-bold tracking-widest">Swift Code</p>
                                                <p className="text-gray-800 font-bold uppercase">MEZNPKKA</p>
                                            </div>
                                            <div className="p-3 bg-gray-50 rounded-xl border border-idara-orange/20">
                                                <p className="text-idara-orange text-[11px] uppercase font-bold tracking-widest">IBAN</p>
                                                <p className="text-gray-800 font-bold text-sm tracking-tighter">PK85MEZN0001330101018353</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bank Transfer 2 */}
                        <div 
                            className="bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all group relative overflow-x-auto"
                            data-aos="fade-left"
                            data-aos-delay="400"
                        >
                            <div className="flex items-start gap-6 relative z-10">
                                <div className="relative shrink-0">
                                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-[#012060] group-hover:bg-[#012060] group-hover:text-white transition-colors duration-300">
                                        <Wallet className="w-8 h-8" />
                                    </div>
                                    <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-emerald-500 rounded-full border-4 border-white flex items-center justify-center">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#012060] mb-4">Bank Transfer 2</h4>
                                    <div className="space-y-2">
                                        <p className="text-gray-500 text-sm font-semibold uppercase tracking-wider">Title Of Account:</p>
                                        <p className="text-[#012060] font-bold text-lg mb-4">Idara Al-Khair Welfare Society</p>
                                        
                                        <div className="grid grid-cols-1 gap-3">
                                            <div className="p-3 bg-gray-50 rounded-xl">
                                                <p className="text-gray-400 text-[11px] uppercase font-bold tracking-widest">A/C NO & Branch Code</p>
                                                <p className="text-gray-800 font-bold">10008429 <span className="text-gray-400 mx-1">/</span> 0055</p>
                                            </div>
                                            <div className="p-3 bg-gray-50 rounded-xl">
                                                <p className="text-gray-400 text-[11px] uppercase font-bold tracking-widest">Bank Name</p>
                                                <p className="text-gray-800 font-bold uppercase">MCB</p>
                                            </div>
                                            <div className="p-3 bg-gray-50 rounded-xl">
                                                <p className="text-gray-400 text-[11px] uppercase font-bold tracking-widest">Swift Code</p>
                                                <p className="text-gray-800 font-bold uppercase">MUCBPKKA</p>
                                            </div>
                                            <div className="p-3 bg-gray-50 rounded-xl border border-idara-orange/20">
                                                <p className="text-idara-orange text-[11px] uppercase font-bold tracking-widest">IBAN</p>
                                                <p className="text-gray-800 font-bold text-sm tracking-tighter">PK87MUCB0005501010008429</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-[#012060] text-center text-base md:text-lg font-bold uppercase tracking-widest bg-gray-100/50 py-4 rounded-full max-w-2xl mx-auto" data-aos="fade-up">
                        Your generosity today can save a future tomorrow.
                    </p>
                </div>
            </section>

            {/* ===== FINAL CTA BUTTON ===== */}
            <section className="py-10 flex justify-center" data-aos="zoom-in-up">
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-[#012060] text-white px-14 py-4 rounded-lg font-black text-xl md:text-2xl shadow-2xl hover:scale-105 active:scale-95 transition-all tracking-tight border-2 border-[#012060]"
                >
                    Donate Now
                </button>
            </section>

            {/* ===== DONATION MODAL ===== */}
            {isModalOpen && (
                <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div 
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
                        onClick={() => !isSubmitting && setIsModalOpen(false)}
                    ></div>

                    {/* Modal Content */}
                    <div className="bg-white w-full max-w-2xl rounded-[32px] overflow-hidden shadow-2xl relative z-10 animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 overflow-y-auto max-h-[90vh]">
                        
                        {/* Header */}
                        <div className="bg-[#012060] p-8 text-white relative">
                            <button 
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-2">Donate to <span className="text-idara-orange">Idara Al-Khair</span></h2>
                            <p className="text-blue-100/80 font-medium">Your small contribution makes a big difference.</p>
                        </div>

                        {!isSuccess ? (
                            <form onSubmit={handleDonationSubmit} className="p-8">
                                {step === 1 ? (
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-100 rounded-2xl">
                                            <Info className="w-5 h-5 text-blue-600 shrink-0" />
                                            <p className="text-sm text-blue-800 font-medium">Please transfer your donation to either of our accounts below, then notify us.</p>
                                        </div>

                                        {/* NGO Bank Selection */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <button 
                                                type="button"
                                                onClick={() => setDonorData({...donorData, targetNgoBank: 'Meezan'})}
                                                className={`p-5 rounded-2xl border-2 transition-all text-left ${donorData.targetNgoBank === 'Meezan' ? 'border-[#012060] bg-blue-50' : 'border-gray-100 hover:border-gray-200'}`}
                                            >
                                                <div className="flex justify-between items-start mb-2">
                                                    <span className="font-black text-lg">Meezan Bank</span>
                                                    {donorData.targetNgoBank === 'Meezan' && <CheckCircle className="w-5 h-5 text-[#012060]" />}
                                                </div>
                                                <div className="flex items-center justify-between group">
                                                    <code className="text-sm text-gray-600 font-mono">0101018353</code>
                                                    <div 
                                                        onClick={(e) => { e.stopPropagation(); copyToClipboard('0101018353', 'meezan'); }}
                                                        className="p-1.5 hover:bg-gray-200 rounded-md transition-colors cursor-pointer"
                                                    >
                                                        {copiedField === 'meezan' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-gray-400" />}
                                                    </div>
                                                </div>
                                            </button>

                                            <button 
                                                type="button"
                                                onClick={() => setDonorData({...donorData, targetNgoBank: 'MCB'})}
                                                className={`p-5 rounded-2xl border-2 transition-all text-left ${donorData.targetNgoBank === 'MCB' ? 'border-[#012060] bg-blue-50' : 'border-gray-100 hover:border-gray-200'}`}
                                            >
                                                <div className="flex justify-between items-start mb-2">
                                                    <span className="font-black text-lg">MCB Bank</span>
                                                    {donorData.targetNgoBank === 'MCB' && <CheckCircle className="w-5 h-5 text-[#012060]" />}
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <code className="text-sm text-gray-600 font-mono">10008429</code>
                                                    <div 
                                                        onClick={(e) => { e.stopPropagation(); copyToClipboard('10008429', 'mcb'); }}
                                                        className="p-1.5 hover:bg-gray-200 rounded-md transition-colors cursor-pointer"
                                                    >
                                                        {copiedField === 'mcb' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-gray-400" />}
                                                    </div>
                                                </div>
                                            </button>
                                        </div>

                                        <div className="space-y-4 pt-2">
                                            <label className="block text-sm font-bold text-gray-700">Donation Amount (PKR)</label>
                                            <div className="relative">
                                                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-gray-400">Rs.</span>
                                                <input 
                                                    type="number"
                                                    required
                                                    value={donorData.amount}
                                                    onChange={(e) => setDonorData({...donorData, amount: e.target.value})}
                                                    placeholder="Enter amount (e.g. 1000)"
                                                    className="w-full bg-gray-50 border-gray-100 border-2 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-[#012060] transition-all font-bold text-xl"
                                                />
                                            </div>
                                        </div>

                                        <button 
                                            type="button"
                                            onClick={() => donorData.amount && setStep(2)}
                                            className="w-full bg-[#012060] text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-blue-900/20 hover:bg-black transition-all disabled:opacity-50"
                                            disabled={!donorData.amount}
                                        >
                                            Next Step →
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Your Full Name</label>
                                                <input 
                                                    type="text"
                                                    required
                                                    value={donorData.donorName}
                                                    onChange={(e) => setDonorData({...donorData, donorName: e.target.value})}
                                                    placeholder="John Doe"
                                                    className="w-full bg-gray-50 border-gray-100 border-2 rounded-xl p-3 outline-none focus:border-[#012060] transition-all"
                                                />
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Email Address</label>
                                                <input 
                                                    type="email"
                                                    required
                                                    value={donorData.donorEmail}
                                                    onChange={(e) => setDonorData({...donorData, donorEmail: e.target.value})}
                                                    placeholder="john@example.com"
                                                    className="w-full bg-gray-50 border-gray-100 border-2 rounded-xl p-3 outline-none focus:border-[#012060] transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Your Bank</label>
                                                <select 
                                                    required
                                                    value={donorData.donorBank}
                                                    onChange={(e) => setDonorData({...donorData, donorBank: e.target.value})}
                                                    className="w-full bg-gray-50 border-gray-100 border-2 rounded-xl p-3 outline-none focus:border-[#012060] transition-all"
                                                >
                                                    <option value="">Select your bank</option>
                                                    {bankList.map(b => <option key={b} value={b}>{b}</option>)}
                                                </select>
                                            </div>
                                            <div className="space-y-1.5">
                                                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Phone (Optional)</label>
                                                <input 
                                                    type="text"
                                                    value={donorData.donorPhone}
                                                    onChange={(e) => setDonorData({...donorData, donorPhone: e.target.value})}
                                                    placeholder="0300 0000000"
                                                    className="w-full bg-gray-50 border-gray-100 border-2 rounded-xl p-3 outline-none focus:border-[#012060] transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Reference / Trans-ID (Optional)</label>
                                            <input 
                                                type="text"
                                                value={donorData.reference}
                                                onChange={(e) => setDonorData({...donorData, reference: e.target.value})}
                                                placeholder="Last 4 digits or ID"
                                                className="w-full bg-gray-50 border-gray-100 border-2 rounded-xl p-3 outline-none focus:border-[#012060] transition-all"
                                            />
                                        </div>

                                        <div className="flex gap-3 pt-4">
                                            <button 
                                                type="button"
                                                onClick={() => setStep(1)}
                                                className="px-6 py-4 rounded-2xl font-bold bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all"
                                            >
                                                Back
                                            </button>
                                            <button 
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="flex-1 bg-idara-orange text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-orange-500/20 hover:brightness-110 transition-all flex items-center justify-center gap-2"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                        Processing...
                                                    </>
                                                ) : "Confirm Donation"}
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </form>
                        ) : (
                            <div className="p-16 text-center animate-in fade-in zoom-in duration-500">
                                <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-12 h-12" />
                                </div>
                                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#012060] mb-4">Mubarak!</h3>
                                <p className="text-gray-500 text-lg max-w-sm mx-auto mb-8">
                                    Thank you for your generous contribution of <span className="font-black text-[#012060]">Rs. {donorData.amount}</span>. We've received your notification and will verify it soon.
                                </p>
                                <button 
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-idara-orange text-white px-10 py-3 rounded-xl font-bold hover:brightness-110 transition-all"
                                >
                                    Close Window
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <Footer />
        </main>
    );
}