'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  MessageSquare, 
  PlusCircle, 
  Briefcase, 
  History, 
  ClipboardCheck, 
  Users, 
  UserCheck, 
  Calendar, 
  CheckCircle, 
  UserPlus,
  FileText, // For Pages
  Settings,
  LogOut,
  ChevronRight
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const menuItems = [
    { title: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
    { title: 'Messages', icon: MessageSquare, path: '/admin/messages' },
    { title: 'Add Job', icon: PlusCircle, path: '/admin/add-job' },
    { title: 'Recent Jobs', icon: Briefcase, path: '/admin/recent-jobs' },
    { title: 'Old Jobs', icon: History, path: '/admin/old-jobs' },
    { title: 'Job Responses', icon: ClipboardCheck, path: '/admin/job-responses' },
    { title: 'Job Applications', icon: Users, path: '/admin/job-applications' },
    { title: 'Candidates', icon: Users, path: '/admin/candidates' },
    { title: 'Interview', icon: Calendar, path: '/admin/interview' },
    { title: 'Hired', icon: UserCheck, path: '/admin/hired' },
    { title: 'Volunteers', icon: UserPlus, path: '/admin/volunteers' },
    { title: 'Content Pages', icon: FileText, path: '/admin/cms' },
  ];

  return (
    <aside className="w-80 xl:w-[350px] bg-white/80 backdrop-blur-2xl border-r border-gray-100 flex flex-col h-screen sticky top-0 shadow-[20px_0_40px_-20px_rgba(0,0,0,0.03)]">
      <div className="p-10">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-black text-[#012060] tracking-tight">Admin</h1>
          <p className="text-sm md:text-base font-black text-idara-orange uppercase tracking-[.3em] opacity-80">Workspace v2.0</p>
        </div>
      </div>

      <nav className="flex-1 px-6 space-y-1.5 overflow-y-auto pb-10">
        {menuItems.map((item) => {
          const isActive = pathname === item.path || (item.path === '/admin/cms' && pathname.startsWith('/admin/cms'));
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`w-full text-left px-5 py-4 rounded-2xl flex flex-row items-center gap-4 transition-all duration-300 relative group overflow-hidden whitespace-nowrap ${
                isActive 
                  ? "bg-[#012060] text-white shadow-[0_10px_20px_-5px_rgba(3,18,73,0.3)] translate-x-2" 
                  : "text-gray-400 hover:bg-gray-50 hover:text-[#012060]"
              }`}
            >
              <item.icon size={20} className={`transition-transform duration-500 ${isActive ? 'scale-110' : 'group-hover:rotate-12'}`} />
              <span className="font-black text-base md:text-lg tracking-tight">{item.title}</span>
              {isActive && <div className="absolute right-0 top-0 bottom-0 w-1 bg-idara-orange"></div>}
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t border-gray-50">
        <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-gray-400 hover:bg-red-50 hover:text-red-500 transition-all font-black text-base md:text-lg tracking-tight">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
