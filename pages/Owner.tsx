
import React from 'react';
import { SETTINGS, DEV_SETTINGS } from '../settings';
import { Terminal, Shield, Cpu, Code2, Instagram, MessageSquare, ArrowRight } from 'lucide-react';

const OwnerPage: React.FC = () => {
  const devPhoto = SETTINGS.students.find(s => s.isDev)?.photo;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-32 fade-in overflow-x-hidden">
      <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center mb-24 md:mb-32">
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-[4/5] rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-zinc-800 shadow-2xl relative group">
            <img 
              src={devPhoto} 
              alt={DEV_SETTINGS.name} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] scale-110 group-hover:scale-100 will-change-transform" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
          </div>
          <div className="absolute -bottom-6 -right-2 md:-bottom-10 md:-right-12 bg-white text-black p-6 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-2xl max-w-[180px] md:max-w-xs will-change-transform">
            <Terminal size={32} strokeWidth={3} className="mb-4 md:mb-6" />
            <p className="text-[8px] md:text-sm font-black uppercase tracking-[0.3em] mb-1 md:mb-2 mono">Access Level</p>
            <p className="text-xl md:text-3xl font-black tracking-tighter uppercase italic leading-none">Lead Architect</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 pt-10 lg:pt-0">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-zinc-950 border border-zinc-800 rounded-full text-zinc-500 text-[9px] font-black uppercase tracking-[0.5em] mb-8 md:mb-12 mono">
             Profile: {DEV_SETTINGS.name.toUpperCase()}
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 md:mb-8 tracking-tighter leading-none uppercase">
            {DEV_SETTINGS.name}<span className="text-zinc-800">.</span>
          </h1>
          <div className="flex flex-wrap gap-2.5 mb-10 md:mb-12">
            {DEV_SETTINGS.roles.map((role, idx) => (
              <span key={idx} className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-[9px] font-black uppercase tracking-widest text-zinc-400">
                {role}
              </span>
            ))}
          </div>
          <p className="text-lg md:text-2xl text-zinc-500 font-medium leading-relaxed italic mb-10 md:mb-12 px-1">
            "Fokus pada pengembangan ekosistem digital yang bersih, efisien, dan memiliki dampak visual yang kuat. Setiap baris kode adalah pernyataan logika."
          </p>
          <div className="flex gap-4 md:gap-6">
            <a href={DEV_SETTINGS.socials.links.instagram} className="flex items-center gap-4 bg-zinc-900 p-5 md:p-6 rounded-2xl md:rounded-3xl border border-zinc-800 hover:bg-white hover:text-black transition-all active:scale-95">
              <Instagram size={22} />
            </a>
            <a href={DEV_SETTINGS.socials.links.whatsapp} className="flex items-center gap-4 bg-zinc-900 p-5 md:p-6 rounded-2xl md:rounded-3xl border border-zinc-800 hover:bg-white hover:text-black transition-all active:scale-95">
              <MessageSquare size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Tech Stack Section - Mobile Responsive Grid */}
      <section className="py-20 md:py-24 border-t border-zinc-900">
        <h2 className="text-3xl md:text-6xl font-black tracking-tighter uppercase mb-12 md:mb-16 text-white text-center italic leading-tight">Neural Core Stack</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SETTINGS.techStack.map((tech, i) => (
            <div key={i} className="glass-card p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-zinc-900 group hover:border-zinc-700 transition-all text-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-zinc-900 rounded-2xl md:rounded-3xl flex items-center justify-center border border-zinc-800 text-zinc-500 group-hover:bg-white group-hover:text-black transition-all mx-auto mb-6 md:mb-8 shadow-xl">
                {i % 2 === 0 ? <Cpu size={28} /> : <Code2 size={28} />}
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter mb-2 italic">{tech.name}</h3>
              <p className="text-[8px] text-zinc-700 font-black uppercase tracking-[0.4em] mono">Active Module</p>
            </div>
          ))}
        </div>
      </section>

      {/* Manifest Section */}
      <div className="mt-24 md:mt-32 p-10 md:p-24 bg-zinc-950 rounded-[3rem] md:rounded-[4rem] border border-zinc-900 text-center relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.02)_0%,_transparent_50%)] pointer-events-none"></div>
        <Shield size={48} className="mx-auto text-zinc-800 mb-8 md:mb-12 opacity-50" />
        <h3 className="text-2xl md:text-5xl font-black mb-10 md:mb-12 tracking-tighter uppercase text-white leading-tight italic px-2">Membangun Masa Depan<br />Satu Proyek Sekaligus.</h3>
        <p className="text-zinc-500 text-base md:text-xl font-medium mb-12 md:mb-16 max-w-2xl mx-auto italic leading-relaxed px-2">
          X-Tech Engineering bukan hanya tentang layanan, ini adalah tentang riset berkelanjutan dalam interaksi manusia dan mesin.
        </p>
        <button className="w-full md:w-auto px-10 md:px-12 py-5 bg-white text-black rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all active:scale-95 shadow-2xl">
          Unduh Portofolio PDF
        </button>
      </div>
    </div>
  );
};

export default OwnerPage;
