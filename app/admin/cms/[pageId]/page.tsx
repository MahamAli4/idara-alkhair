'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Save, ArrowLeft, Loader2, Image as ImageIcon, Type, Palette, List, Quote, CheckCircle2, LayoutDashboard } from 'lucide-react';
import Sidebar from '@/components/admin/Sidebar';

// Debounce helper function
function useDebounce(value: any, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);
        return () => clearTimeout(handler);
    }, [value, delay]);
    return debouncedValue;
}

export default function PageEditor() {
    const { pageId } = useParams();
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [savingKey, setSavingKey] = useState<string | null>(null);
    const [uploading, setUploading] = useState<string | null>(null);
    const [formData, setFormData] = useState<Record<string, string>>({});

    const defaults: Record<string, string> = {
        'hero-title': 'Medical Center',
        'hero-image': '/website-media/medicalcenter/banner.jpg',
        'accent-color': '#f05a28',
        'content-heading-black': 'Healthcare for Those',
        'content-heading-orange': 'Who Cannot Afford It',
        'content-description': 'Our Medical Center provides accessible healthcare services to underserved communities.',
        'content-quote': 'Health is not a privilege - it is a right.',
        'services-list': 'OPD consultations - Basic diagnostics - Affordable medicines',
        'middle-image': '/images/medicalcenter.png'
    };

    useEffect(() => {
        fetchContent();
    }, [pageId]);

    const fetchContent = async () => {
        try {
            const res = await fetch(`/api/admin/content?pageName=${pageId}`);
            if (!res.ok) throw new Error('API Error');

            const text = await res.text();
            let data = [];
            try {
                data = text ? JSON.parse(text) : [];
            } catch (parseErr) {
                console.error('JSON Parse Error:', parseErr);
                data = [];
            }

            const newFormData: Record<string, string> = { ...defaults };
            if (Array.isArray(data)) {
                data.forEach((item: any) => {
                    newFormData[item.key] = item.value;
                });
            }
            setFormData(newFormData);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching content:', err);
            setFormData({ ...defaults });
            setLoading(false);
        }
    };

    const handleFileUpload = async (key: string, file: File) => {
        setUploading(key);
        const uploadData = new FormData();
        uploadData.append('file', file);

        try {
            const res = await fetch('/api/admin/upload', {
                method: 'POST',
                body: uploadData,
            });
            const data = await res.json();
            if (data.url) {
                setFormData(prev => ({ ...prev, [key]: data.url }));
                await handleUpdate(key, data.url, 'IMAGE');
            }
        } catch (err) {
            console.error('Upload failed:', err);
        } finally {
            setUploading(null);
        }
    };

    const handleUpdate = async (key: string, value: string, type: string) => {
        setSavingKey(key);
        try {
            const res = await fetch('/api/admin/content', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ pageName: pageId, key, value, type }),
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => ({ error: 'Unknown server error' }));
                console.error('Save failed details:', errorData);
                throw new Error(errorData.error || 'Save failed');
            }

            console.log(`Successfully saved: ${key}`);
        } catch (err) {
            console.error('Update failed:', err);
        } finally {
            setTimeout(() => setSavingKey(null), 1000);
        }
    };

    // Helper for text inputs to handle local state then save
    const onTextChange = (key: string, value: string, type: string = 'TEXT') => {
        setFormData(prev => ({ ...prev, [key]: value }));
        // We'll use a manual timeout or just the blur for now, but better to debounce
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <Loader2 className="w-12 h-12 animate-spin text-idara-orange" />
            </div>
        );
    }

    return (
        <div className="flex min-h-screen bg-[#f8fafc]">
            <Sidebar />
            <main className="flex-1 lg:ml-64 transition-all duration-300">
                <div className="p-8 lg:p-12 max-w-7xl mx-auto">

                    {/* Header Area */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                        <div>
                            <div className="flex items-center gap-2 text-gray-400 mb-2">
                                <button onClick={() => router.push('/admin/cms')} className="hover:text-idara-orange transition-colors flex items-center gap-1">
                                    <ArrowLeft size={14} /> Content Pages
                                </button>
                                <span>/</span>
                                <span className="text-gray-900 font-bold capitalize">{pageId?.toString().replace(/-/g, ' ')}</span>
                            </div>
                            <h1 className="text-5xl font-black text-[#012060] tracking-tight">Page Editor</h1>
                        </div>

                        <div className="flex gap-4">
                            <button onClick={() => window.open(`/projects/${pageId}`, '_blank')} className="px-8 py-4 bg-white text-[#012060] rounded-2xl font-black border-2 border-gray-100 hover:border-idara-orange transition-all shadow-sm active:scale-95">
                                View Live Page
                            </button>
                            <button onClick={fetchContent} className="px-8 py-4 bg-idara-orange text-white rounded-2xl font-black hover:bg-[#d94d1e] transition-all shadow-lg shadow-idara-orange/20 active:scale-95 flex items-center gap-2">
                                <Save size={20} /> Force Sync
                            </button>
                        </div>
                    </div>

                    {/* Floating Saving Indicator */}
                    {savingKey && (
                        <div className="fixed bottom-10 right-10 bg-[#012060] text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-pulse z-50">
                            <CheckCircle2 size={18} className="text-emerald-400" />
                            <span className="font-bold">Saving: {savingKey.replace(/-/g, ' ')}...</span>
                        </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                        {/* --- LEFT COLUMN: EDITORS --- */}
                        <div className="lg:col-span-2 space-y-8">

                            {/* SECTION: HERO */}
                            <section className="bg-white rounded-4xl p-10 shadow-2xl shadow-gray-200/50 border border-gray-100">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-3 bg-idara-orange/10 rounded-2xl text-idara-orange">
                                        <LayoutDashboard size={24} />
                                    </div>
                                    <h2 className="text-2xl font-black text-[#012060] tracking-tight">Hero Section</h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-3">
                                        <label className="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center justify-between">
                                            Hero Main Title
                                        </label>
                                        <textarea
                                            className="w-full p-6 bg-gray-50 border-2 border-transparent rounded-4xl focus:border-idara-orange focus:bg-white outline-none transition-all h-32 font-bold text-lg text-[#012060] shadow-inner"
                                            value={formData['hero-title'] || ''}
                                            onChange={(e) => onTextChange('hero-title', e.target.value)}
                                            onBlur={(e) => handleUpdate('hero-title', e.target.value, 'TEXT')}
                                            placeholder="Enter main title..."
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center justify-between">
                                            Hero Banner Image URL
                                        </label>
                                        <div className="flex gap-4">
                                            <input
                                                type="text"
                                                className="flex-1 p-6 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-idara-orange focus:bg-white outline-none transition-all font-bold text-[#012060] shadow-inner"
                                                value={formData['hero-image'] || ''}
                                                onChange={(e) => onTextChange('hero-image', e.target.value, 'IMAGE')}
                                                onBlur={(e) => handleUpdate('hero-image', e.target.value, 'IMAGE')}
                                            />
                                            <label className="flex items-center justify-center bg-[#012060] text-white px-8 rounded-2xl font-black cursor-pointer hover:bg-idara-orange transition-all shadow-lg active:scale-95">
                                                <ImageIcon className="mr-2" size={20} />
                                                Upload
                                                <input
                                                    type="file"
                                                    className="hidden"
                                                    accept="image/*"
                                                    onChange={(e) => e.target.files?.[0] && handleFileUpload('hero-image', e.target.files[0])}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION: MAIN CONTENT */}
                            <section className="bg-white rounded-4xl p-10 shadow-2xl shadow-gray-200/50 border border-gray-100">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-3 bg-[#012060]/5 rounded-2xl text-[#012060]">
                                        <Type size={24} />
                                    </div>
                                    <h2 className="text-2xl font-black text-[#012060] tracking-tight">Main Content</h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <label className="text-sm font-black text-gray-400 uppercase tracking-widest">Heading (Black)</label>
                                            <input
                                                className="w-full p-6 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-idara-orange focus:bg-white outline-none transition-all font-bold text-[#012060] shadow-inner"
                                                value={formData['content-heading-black'] || ''}
                                                onChange={(e) => onTextChange('content-heading-black', e.target.value)}
                                                onBlur={(e) => handleUpdate('content-heading-black', e.target.value, 'TEXT')}
                                            />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-sm font-black uppercase tracking-widest text-idara-orange">Heading (Orange)</label>
                                            <input
                                                className="w-full p-6 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-idara-orange focus:bg-white outline-none transition-all font-bold text-idara-orange shadow-inner"
                                                value={formData['content-heading-orange'] || ''}
                                                onChange={(e) => onTextChange('content-heading-orange', e.target.value)}
                                                onBlur={(e) => handleUpdate('content-heading-orange', e.target.value, 'TEXT')}
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-sm font-black text-gray-400 uppercase tracking-widest">Main Description</label>
                                        <textarea
                                            className="w-full p-6 bg-gray-50 border-2 border-transparent rounded-4xl focus:border-idara-orange focus:bg-white outline-none transition-all h-40 font-bold text-[#012060] leading-relaxed shadow-inner"
                                            value={formData['content-description'] || ''}
                                            onChange={(e) => onTextChange('content-description', e.target.value)}
                                            onBlur={(e) => handleUpdate('content-description', e.target.value, 'TEXT')}
                                        />
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center gap-2"><List size={14} /> Services List</label>
                                        <input
                                            className="w-full p-6 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-idara-orange focus:bg-white outline-none transition-all font-bold text-[#012060] shadow-inner"
                                            value={formData['services-list'] || ''}
                                            onChange={(e) => onTextChange('services-list', e.target.value)}
                                            onBlur={(e) => handleUpdate('services-list', e.target.value, 'TEXT')}
                                        />
                                    </div>
                                </div>
                            </section>

                            {/* SECTION: MEDIA */}
                            <section className="bg-white rounded-4xl p-10 shadow-2xl shadow-gray-200/50 border border-gray-100">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className="p-3 bg-emerald-50 rounded-2xl text-emerald-600">
                                        <ImageIcon size={24} />
                                    </div>
                                    <h2 className="text-2xl font-black text-[#012060] tracking-tight">Page Media</h2>
                                </div>

                                <div className="space-y-8">
                                    <div className="space-y-3">
                                        <label className="text-sm font-black text-gray-400 uppercase tracking-widest flex items-center justify-between">
                                            Middle Content Image URL
                                        </label>
                                        <div className="flex gap-4">
                                            <input
                                                type="text"
                                                className="flex-1 p-6 bg-gray-50 border-2 border-transparent rounded-2xl focus:border-idara-orange focus:bg-white outline-none transition-all font-bold text-[#012060] shadow-inner"
                                                value={formData['middle-image'] || ''}
                                                onChange={(e) => onTextChange('middle-image', e.target.value, 'IMAGE')}
                                                onBlur={(e) => handleUpdate('middle-image', e.target.value, 'IMAGE')}
                                            />
                                            <label className="flex items-center justify-center bg-[#012060] text-white px-8 rounded-2xl font-black cursor-pointer hover:bg-idara-orange transition-all shadow-lg active:scale-95">
                                                <ImageIcon className="mr-2" size={20} />
                                                Upload
                                                <input
                                                    type="file"
                                                    className="hidden"
                                                    accept="image/*"
                                                    onChange={(e) => e.target.files?.[0] && handleFileUpload('middle-image', e.target.files[0])}
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* --- RIGHT COLUMN: PREVIEWS & COLORS --- */}
                        <div className="space-y-8">
                            <section className="bg-white rounded-4xl p-10 shadow-2xl shadow-gray-200/50 border border-gray-100">
                                <h2 className="text-xl font-black text-[#012060] mb-6 flex items-center gap-2">
                                    <Palette size={20} className="text-idara-orange" /> Visual Style
                                </h2>
                                <div className="flex items-center gap-6 p-4 bg-gray-50 rounded-4xl border-2 border-gray-100 shadow-inner">
                                    <input
                                        type="color"
                                        className="w-20 h-20 rounded-2xl border-none cursor-pointer"
                                        value={formData['accent-color'] || '#f05a28'}
                                        onChange={(e) => {
                                            const val = e.target.value;
                                            setFormData(prev => ({ ...prev, 'accent-color': val }));
                                            handleUpdate('accent-color', val, 'COLOR');
                                        }}
                                    />
                                    <div>
                                        <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Theme Color</p>
                                        <p className="font-mono font-bold text-[#012060]">{formData['accent-color'] || '#f05a28'}</p>
                                    </div>
                                </div>
                            </section>

                            <section className="bg-white rounded-4xl p-10 shadow-2xl shadow-gray-200/50 border border-gray-100 sticky top-10">
                                <h2 className="text-xl font-black text-[#012060] mb-6 flex items-center gap-2">
                                    <ImageIcon size={20} className="text-idara-orange" /> Live Preview
                                </h2>
                                <div className="space-y-6">
                                    {/* Text Preview */}
                                    <div className="p-6 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 space-y-4">
                                        <div>
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Hero Title Preview</p>
                                            <p className="text-xl font-black text-[#012060] leading-tight line-clamp-2">
                                                <span style={{ color: formData['accent-color'] }}>{formData['hero-title']?.split(' ')[0]}</span> {formData['hero-title']?.split(' ').slice(1).join(' ')}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-2">Main Heading Preview</p>
                                            <p className="text-sm font-bold text-[#012060]">
                                                {formData['content-heading-black']} <span className="text-idara-orange">{formData['content-heading-orange']}</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Hero Image</p>
                                        <div className="aspect-video rounded-3xl overflow-hidden bg-gray-100 border-4 border-white shadow-xl">
                                            <img src={formData['hero-image']} className="w-full h-full object-cover" onError={(e: any) => e.target.src = 'https://via.placeholder.com/400x225?text=Invalid+Image+URL'} />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Middle Content</p>
                                        <div className="aspect-video rounded-3xl overflow-hidden bg-gray-100 border-4 border-white shadow-xl">
                                            <img src={formData['middle-image']} className="w-full h-full object-cover" onError={(e: any) => e.target.src = 'https://via.placeholder.com/400x225?text=Invalid+Image+URL'} />
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-10 p-6 bg-[#012060] rounded-3xl text-white">
                                    <div className="flex items-center gap-3 mb-2">
                                        <CheckCircle2 size={18} className="text-emerald-400" />
                                        <span className="font-black text-sm uppercase tracking-widest">Auto-Save Status</span>
                                    </div>
                                    <p className="text-xs text-blue-200 font-medium leading-relaxed">Changes save when you click outside or stop typing.</p>
                                </div>
                            </section>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
