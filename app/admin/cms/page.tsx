'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, FileText, ChevronRight, Layout } from 'lucide-react';
import Sidebar from '@/components/admin/Sidebar';

const PAGES = [
  { id: 'medical-center', name: 'Medical Center', path: '/projects/medical-center' },
  { id: 'technical-training-centers', name: 'Technical Training', path: '/projects/technical-training-centers' },
  { id: 'food-support-program', name: 'Food Support Program', path: '/projects/food-support-program' },
  { id: 'help-a-dream', name: 'Help a Dream', path: '/projects/help-a-dream' },
  { id: 'it-institute', name: 'IT Institute', path: '/projects/it-institute' },
  { id: 'disaster-relief-program', name: 'Disaster Relief', path: '/projects/disaster-relief-program' },
  { id: 'education-schools-colleges', name: 'Education (Schools/Colleges)', path: '/projects/education-schools-colleges' },
];

export default function CMSPageManager() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPages = PAGES.filter(page => 
    page.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-4xl font-black text-[#012060] flex items-center gap-3">
                <Layout className="text-idara-orange" /> Content Management
              </h1>
              <p className="text-gray-500 mt-1 font-medium">Manage and edit your website pages in real-time.</p>
            </div>

            {/* Search Bar */}
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-idara-orange transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Search pages..." 
                className="pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl w-full md:w-80 focus:ring-4 focus:ring-idara-orange/10 focus:border-idara-orange outline-none transition-all shadow-sm font-bold text-[#012060]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Pages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPages.map((page) => (
              <Link 
                key={page.id} 
                href={`/admin/cms/${page.id}`}
                className="group bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-idara-orange/30 transition-all transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between">
                  <div className="w-14 h-14 bg-idara-orange/10 rounded-2xl flex items-center justify-center text-idara-orange group-hover:bg-idara-orange group-hover:text-white transition-all">
                    <FileText size={28} />
                  </div>
                  <ChevronRight size={24} className="text-gray-300 group-hover:text-idara-orange transition-transform group-hover:translate-x-2" />
                </div>
                <h3 className="text-2xl font-black text-[#012060] mt-6 leading-tight">{page.name}</h3>
                <p className="text-sm text-gray-400 mt-2 font-bold uppercase tracking-widest">Click to Manage Content</p>
              </Link>
            ))}
          </div>

          {filteredPages.length === 0 && (
            <div className="text-center py-24 bg-white rounded-[3rem] border-2 border-dashed border-gray-100 mt-10">
              <p className="text-gray-400 text-xl font-bold">No pages found matching "{searchTerm}"</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
