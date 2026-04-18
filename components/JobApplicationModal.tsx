'use client';

import React, { useState } from 'react';
import { X, Upload, CheckCircle, Smartphone, Mail, User, GraduationCap, Briefcase, MapPin, FileText, Loader2, AlertCircle } from 'lucide-react';

interface JobApplicationModalProps {
    job: any;
    isOpen: boolean;
    onClose: () => void;
}

export default function JobApplicationModal({ job, isOpen, onClose }: JobApplicationModalProps) {
    const [step, setStep] = useState(1);
    const [isUploading, setIsUploading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);



    const [formData, setFormData] = useState({
        applicantName: '',
        applicantEmail: '',
        applicantPhone: '',
        coverLetter: '',
        resumeUrl: '',
        yearsOfExperience: '',
        highestEducation: '',
        city: '',
        fieldOfInterest: ''
    });

    if (!isOpen || !job) return null;

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Size check (10MB)
        if (file.size > 10 * 1024 * 1024) {
            setError("Max file size allowed is 10MB");
            return;
        }

        setIsUploading(true);
        setError(null);

        const form = new FormData();
        form.append('file', file);

        try {
            const res = await fetch('/api/uploads', {
                method: 'POST',
                body: form
            });
            const data = await res.json();
            if (res.ok) {
                setFormData({ ...formData, resumeUrl: data.url });
            } else {
                setError(data.error || "File upload failed");
            }
        } catch (err) {
            setError("Failed to upload CV. Please try again.");
        } finally {
            setIsUploading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.resumeUrl) {
            setError("Please upload your CV/Resume to continue");
            return;
        }

        setIsSubmitting(true);
        setError(null);

        // Prep description with field of interest if it exists
        const fieldString = formData.fieldOfInterest 
            ? `Intersted In Tool: ${formData.fieldOfInterest}`
            : '';

        const submissionData = {
            ...formData,
            jobId: job.id,
            coverLetter: fieldString 
                ? `${fieldString}\n\n${formData.coverLetter}`
                : formData.coverLetter
        };

        try {
            const res = await fetch('/api/applications', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(submissionData)
            });

            if (res.ok) {
                setIsSuccess(true);
            } else {
                const data = await res.json();
                setError(data.error || "Failed to submit application");
            }
        } catch (err) {
            setError("Network error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={() => !isSubmitting && onClose()}
            ></div>

            {/* Modal Content */}
            <div className="bg-white w-full max-w-3xl rounded-[32px] overflow-hidden shadow-2xl relative z-10 animate-in zoom-in-95 slide-in-from-bottom-10 duration-500 overflow-y-auto max-h-[90vh]">
                
                {/* Header */}
                <div className="bg-[#012060] p-8 md:p-10 text-white relative">
                    <button 
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-idara-orange text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                            {job.id === 4 ? 'General Interest' : 'Applying For'}
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tight leading-tight">
                        {job.id === 4 ? 'Submit Your Resume' : job.title}
                    </h2>
                    <div className="flex flex-wrap items-center gap-6 text-blue-100/70 font-medium">
                        {job.id === 4 ? (
                            <p className="text-blue-100/60 font-bold italic">Tell us about your skills and we'll match you with a role.</p>
                        ) : (
                            <>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-idara-orange" />
                                    {job.location}
                                </div>
                                <div className="flex items-center gap-2 text-white">
                                    <Briefcase className="w-4 h-4 text-idara-orange" />
                                    {job.jobType.replace('_', ' ')}
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {!isSuccess ? (
                    <form onSubmit={handleSubmit} className="p-8 md:p-12">
                        {error && (
                            <div className="mb-8 p-4 bg-rose-50 border border-rose-100 text-rose-700 rounded-2xl flex items-center gap-3 text-sm font-bold">
                                <AlertCircle className="w-5 h-5 shrink-0" />
                                {error}
                            </div>
                        )}

                        {/* Text Input for General Applications */}
                        {job.id === 4 && (
                            <div className="mb-10 p-6 bg-blue-50/50 border-2 border-[#012060]/10 rounded-[24px]">
                                <label className="text-xs font-black text-[#012060] uppercase tracking-widest mb-3 block">
                                    Which position or field are you interested in? *
                                </label>
                                <input 
                                    type="text"
                                    required
                                    placeholder="e.g. IT Instructor, Accountant, etc."
                                    value={formData.fieldOfInterest}
                                    onChange={(e) => setFormData({...formData, fieldOfInterest: e.target.value})}
                                    className="w-full bg-white border-gray-100 border-2 rounded-xl py-4 px-6 outline-none focus:border-[#012060] transition-all font-bold text-[#012060] placeholder:text-gray-300"
                                />
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                            {/* Personal Details */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-black text-[#012060] flex items-center gap-2 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#012060]">
                                        <User className="w-4 h-4" />
                                    </div>
                                    Personal Details
                                </h3>
                                
                                <div className="space-y-4">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Full Name</label>
                                        <div className="relative">
                                            <input 
                                                type="text" required
                                                placeholder="Enter your name"
                                                value={formData.applicantName}
                                                onChange={(e) => setFormData({...formData, applicantName: e.target.value})}
                                                className="w-full bg-gray-50 border-gray-100 border-2 rounded-xl py-3 pl-4 pr-10 outline-none focus:border-[#012060] transition-all font-medium"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Email Address</label>
                                        <div className="relative">
                                            <input 
                                                type="email" required
                                                placeholder="name@example.com"
                                                value={formData.applicantEmail}
                                                onChange={(e) => setFormData({...formData, applicantEmail: e.target.value})}
                                                className="w-full bg-gray-50 border-gray-100 border-2 rounded-xl py-3 pl-4 pr-10 outline-none focus:border-[#012060] transition-all font-medium"
                                            />
                                            <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 w-4 h-4" />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Phone Number</label>
                                        <div className="relative">
                                            <input 
                                                type="tel" required
                                                placeholder="0300-0000000"
                                                value={formData.applicantPhone}
                                                onChange={(e) => setFormData({...formData, applicantPhone: e.target.value})}
                                                className="w-full bg-gray-50 border-gray-100 border-2 rounded-xl py-3 pl-4 pr-10 outline-none focus:border-[#012060] transition-all font-medium"
                                            />
                                            <Smartphone className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300 w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Qualification & Experience */}
                            <div className="space-y-6">
                                <h3 className="text-lg font-black text-[#012060] flex items-center gap-2 mb-4">
                                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#012060]">
                                        <GraduationCap className="w-4 h-4" />
                                    </div>
                                    Professional Background
                                </h3>

                                <div className="space-y-4">
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Highest Education</label>
                                        <input 
                                            type="text" required
                                            placeholder="Masters, Bachelors, etc."
                                            value={formData.highestEducation}
                                            onChange={(e) => setFormData({...formData, highestEducation: e.target.value})}
                                            className="w-full bg-gray-50 border-gray-100 border-2 rounded-xl py-3 px-4 outline-none focus:border-[#012060] transition-all font-medium"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Years of Experience</label>
                                        <input 
                                            type="number" required
                                            placeholder="Years"
                                            value={formData.yearsOfExperience}
                                            onChange={(e) => setFormData({...formData, yearsOfExperience: e.target.value})}
                                            className="w-full bg-gray-50 border-gray-100 border-2 rounded-xl py-3 px-4 outline-none focus:border-[#012060] transition-all font-medium"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-xs font-black text-gray-400 uppercase tracking-widest pl-1">City</label>
                                        <input 
                                            type="text" required
                                            placeholder="Current city"
                                            value={formData.city}
                                            onChange={(e) => setFormData({...formData, city: e.target.value})}
                                            className="w-full bg-gray-50 border-gray-100 border-2 rounded-xl py-3 px-4 outline-none focus:border-[#012060] transition-all font-medium"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CV Upload */}
                        <div className="mb-10">
                            <h3 className="text-lg font-black text-[#012060] flex items-center gap-2 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[#012060]">
                                    <FileText className="w-4 h-4" />
                                </div>
                                CV / Resume (PDF Preferred)
                            </h3>
                            
                            {formData.resumeUrl ? (
                                <div className="p-6 bg-emerald-50 border-2 border-dashed border-emerald-200 rounded-3xl flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                                            <CheckCircle className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-emerald-900 font-black">CV Uploaded Successfully</p>
                                            <p className="text-emerald-600/70 text-xs font-bold uppercase tracking-wider">File Received</p>
                                        </div>
                                    </div>
                                    <button 
                                        type="button"
                                        onClick={() => setFormData({...formData, resumeUrl: ''})}
                                        className="text-emerald-900/40 hover:text-rose-600 transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            ) : (
                                <div className="group relative">
                                    <label className="flex flex-col items-center justify-center p-12 bg-gray-50 border-2 border-dashed border-gray-100 rounded-3xl hover:bg-blue-50/50 hover:border-[#012060]/30 transition-all cursor-pointer">
                                        {isUploading ? (
                                            <>
                                                <Loader2 className="w-10 h-10 text-[#012060] animate-spin mb-4" />
                                                <p className="text-[#012060] font-black">Uploading your CV...</p>
                                            </>
                                        ) : (
                                            <>
                                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-gray-400 shadow-sm mb-4 group-hover:scale-110 group-hover:text-idara-orange transition-all duration-300">
                                                    <Upload className="w-8 h-8" />
                                                </div>
                                                <p className="text-gray-800 font-extrabold text-lg">Click to Upload CV</p>
                                                <p className="text-gray-400 text-sm font-medium">PDF or DOCX (Max 10MB)</p>
                                            </>
                                        )}
                                        <input type="file" className="hidden" accept=".pdf,.doc,.docx" onChange={handleFileUpload} disabled={isUploading} />
                                    </label>
                                </div>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit"
                            disabled={isSubmitting || isUploading}
                            className="w-full bg-[#012060] text-white py-5 rounded-2xl font-black text-xl shadow-2xl shadow-blue-900/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:hover:scale-100"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-6 h-6 animate-spin" />
                                    Submitting Application...
                                </>
                            ) : "Submit My Application"}
                        </button>
                    </form>
                ) : (
                    <div className="p-20 text-center animate-in fade-in zoom-in duration-500">
                        <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-emerald-500/10">
                            <CheckCircle className="w-12 h-12" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#012060] mb-4">
                            {job.id === 4 ? 'Submission Received!' : 'Application Received!'}
                        </h3>
                        <p className="text-gray-500 text-lg max-w-sm mx-auto mb-10 leading-relaxed">
                            {job.id === 4 ? (
                                <>Thank you for sharing your profile. Our team will review your skills and get in touch if a suitable role opens up.</>
                            ) : (
                                <>Thank you for applying for the <span className="font-black text-[#012060]">{job.title}</span> position. Our HR team will review your application soon.</>
                            )}
                        </p>
                        <button 
                            onClick={onClose}
                            className="bg-[#012060] text-white px-12 py-4 rounded-2xl font-black hover:bg-black transition-all shadow-xl shadow-blue-900/20"
                        >
                            Back to Careers
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
