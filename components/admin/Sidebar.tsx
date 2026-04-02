'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  BookOpen, 
  Heart, 
  Users, 
  Settings, 
  LogOut,
  ChevronRight
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const pathname = usePathname();

  const menuItems = [
    { title: 'Dashboard', icon: LayoutDashboard, path: '/admin' },
    { title: 'Projects', icon: BookOpen, path: '/admin/projects' },
    { title: 'Success Stories', icon: Heart, path: '/admin/stories' },
    { title: 'Donations', icon: Users, path: '/admin/donations' },
    { title: 'Settings', icon: Settings, path: '/admin/settings' },
  ];

  return (
    <aside className="w-64 bg-[#012060] text-white min-h-screen flex flex-col shadow-xl">
      <div className="p-8">
        <h1 className="text-2xl font-black tracking-tight text-white flex items-center gap-2">
          <span className="text-idara-orange">IDARA</span> DASH
        </h1>
        <p className="text-xs text-blue-300 font-medium uppercase tracking-widest mt-1">Admin Portal</p>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group ${
                isActive 
                  ? 'bg-idara-cyan text-white shadow-lg' 
                  : 'hover:bg-white/5 text-blue-100 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} className={`${isActive ? 'text-white' : 'text-blue-300 group-hover:text-idara-orange'} transition-colors`} />
                <span className="font-semibold">{item.title}</span>
              </div>
              {isActive && <ChevronRight size={16} />}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto border-t border-white/10">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-300 hover:bg-red-500/10 hover:text-red-400 transition-colors font-semibold">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
