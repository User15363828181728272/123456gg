
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, MessageSquare, Terminal, Code2, Cpu, LayoutGrid, UserCircle, Share2 } from 'lucide-react';
import { SETTINGS, DEV_SETTINGS } from '../settings';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: LayoutGrid },
    { name: 'Projects', path: '/projects', icon: Cpu },
    { name: 'Articles', path: '/artikel', icon: Terminal },
    { name: 'Sperada', path: '/dashboard', icon: Code2 },
    { name: 'Architect', path: '/owner', icon: UserCircle },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black flex flex-col overflow-x-hidden">
      {/* Top Header */}
      <nav className="fixed top-0 w-full z-[100] border-b border-white/[0.03] bg-black/40 backdrop-blur-xl h-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-full flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 md:gap-3 group">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-white rounded-xl flex items-center justify-center text-black font-black text-lg md:text-xl transition-all group-hover:rotate-12 group-hover:scale-110 shadow-[0_0_25px_rgba(255,255,255,0.3)]">
              X
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-black tracking-tighter leading-none uppercase">{SETTINGS.brandName}</span>
              <span className="text-[8px] text-zinc-500 font-bold tracking-[0.25em] uppercase hidden sm:block italic">Eng Lab v2</span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <a 
              href={DEV_SETTINGS.socials.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 md:px-6 py-2 md:py-2.5 bg-zinc-900 border border-zinc-800 text-white rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all active:scale-95 flex items-center gap-2"
            >
              <span className="hidden xs:inline">Connect</span> <Share2 size={12} />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex flex-col flex-grow">
        <main className="flex-grow pt-20 pb-28 md:pb-40">
          {children}
        </main>

        <footer className="py-20 md:py-40 border-t border-zinc-900 bg-zinc-950/20 mb-20 md:mb-0">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-black mb-8 tracking-tighter italic uppercase">{SETTINGS.brandName}<span className="text-zinc-700">.</span></h2>
              <p className="text-zinc-500 text-lg leading-relaxed max-w-md font-medium">
                X-Tech Engineering Laboratory (XTE ID). Solo infrastructure deployment and digital research node by {DEV_SETTINGS.name}.
              </p>
            </div>
            <div>
              <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-700 mb-8 mono">Archived Nodes</h3>
              <ul className="space-y-4 text-sm font-bold text-zinc-500">
                <li><Link to="/projects" className="hover:text-white transition-colors uppercase tracking-widest">Tech Archive</Link></li>
                <li><Link to="/artikel" className="hover:text-white transition-colors uppercase tracking-widest">Transmissions</Link></li>
                <li><Link to="/dashboard" className="hover:text-white transition-colors uppercase tracking-widest">Sperada Node</Link></li>
                <li><Link to="/owner" className="hover:text-white transition-colors uppercase tracking-widest">Architect Bio</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-700 mb-8 mono">Transmission</h3>
              <div className="flex gap-4">
                <a href={DEV_SETTINGS.socials.links.instagram} className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-2xl text-zinc-500 hover:text-white transition-all"><Instagram size={20} /></a>
                <a href={DEV_SETTINGS.socials.links.whatsapp} className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-2xl text-zinc-500 hover:text-white transition-all"><MessageSquare size={20} /></a>
                <a href={`mailto:${SETTINGS.contact.email}`} className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-2xl text-zinc-500 hover:text-white transition-all"><Terminal size={20} /></a>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-zinc-900/50 flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
            <p className="text-zinc-800 text-[9px] font-black uppercase tracking-[0.4em] mono">© 2025 {SETTINGS.brandName.toUpperCase()} // DESIGNED BY {DEV_SETTINGS.name.toUpperCase()}</p>
            <div className="flex items-center gap-4 bg-zinc-900/30 px-5 py-2.5 rounded-full border border-zinc-900">
               <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.6)]"></span>
               <p className="text-zinc-500 text-[9px] font-black uppercase tracking-[0.3em] mono">Neural Link Stable</p>
            </div>
          </div>
        </footer>
      </div>

      {/* FLOATING BOTTOM DOCK NAVIGATION - Optimized for smooth mobile interaction */}
      <div className="fixed bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 z-[200] w-auto max-w-[95%] px-2">
        <div className="bg-zinc-900/60 backdrop-blur-2xl border border-white/10 p-1.5 rounded-[2.5rem] flex items-center gap-0.5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] will-change-transform translate-z-0">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative flex items-center justify-center gap-2.5 px-4 md:px-8 py-3.5 md:py-4 rounded-[2rem] transition-all duration-500 group overflow-hidden ${isActive ? 'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.25)] scale-105' : 'text-zinc-500 hover:text-zinc-200 hover:bg-white/5'}`}
              >
                <item.icon size={18} strokeWidth={isActive ? 2.5 : 2} className={`transition-transform duration-500 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                {/* On mobile, only show label if active or on desktop hover */}
                <span className={`text-[9px] font-black uppercase tracking-widest transition-all duration-500 
                  ${isActive ? 'max-w-[100px] opacity-100 ml-1' : 'max-w-0 opacity-0 overflow-hidden md:group-hover:max-w-[100px] md:group-hover:opacity-100 md:group-hover:ml-1'}`}>
                  {item.name}
                </span>
                {isActive && (
                  <div className="absolute inset-0 bg-white/10 animate-pulse pointer-events-none"></div>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Layout;
