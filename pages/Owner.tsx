
import React from 'react';
import { SETTINGS, DEV_SETTINGS } from '../settings';
import { Terminal, Shield, Cpu, Code2, Instagram, MessageSquare, ArrowRight } from 'lucide-react';

const OwnerPage: React.FC = () => {
  const devPhoto = SETTINGS.students.find(s => s.isDev)?.photo;

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 fade-in">
      <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border border-zinc-800 shadow-2xl relative group">
            <img 
              src={devPhoto} 
              alt={DEV_SETTINGS.name} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] scale-110 group-hover:scale-100" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
          </div>
          <div className="absolute -bottom-10 -right-6 md:-right-12 bg-white text-black p-8 md:p-12 rounded-[3rem] shadow-2xl max-w-xs">
            <Terminal size={40} strokeWidth={3} className="mb-6" />
            <p className="text-sm font-black uppercase tracking-[0.3em] mb-2 mono">Access Level</p>
            <p className="text-3xl font-black tracking-tighter uppercase italic leading-none">Lead Architect</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-zinc-950 border border-zinc-800 rounded-full text-zinc-500 text-[10px] font-black uppercase tracking-[0.5em] mb-12 mono">
             Profile Identifier: {DEV_SETTINGS.name.toUpperCase()}
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none uppercase">
            {DEV_SETTINGS.name}<span className="text-zinc-800">.</span>
          </h1>
          <div className="flex flex-wrap gap-3 mb-12">
            {DEV_SETTINGS.roles.map((role, idx) => (
              <span key={idx} className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-[10px] font-black uppercase tracking-widest text-zinc-400">
                {role}
              </span>
            ))}
          </div>
          <p className="text-xl md:text-2xl text-zinc-500 font-medium leading-relaxed italic mb-12">
            "Fokus pada pengembangan ekosistem digital yang bersih, efisien, dan memiliki dampak visual yang kuat. Setiap baris kode adalah pernyataan logika."
          </p>
          <div className="flex gap-6">
            <a href={DEV_SETTINGS.socials.links.instagram} className="flex items-center gap-4 bg-zinc-900 p-6 rounded-3xl border border-zinc-800 hover:bg-white hover:text-black transition-all">
              <Instagram size={24} />
            </a>
            <a href={DEV_SETTINGS.socials.links.whatsapp} className="flex items-center gap-4 bg-zinc-900 p-6 rounded-3xl border border-zinc-800 hover:bg-white hover:text-black transition-all">
              <MessageSquare size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Tech Stack Section - Cleaned up (No Percentages) */}
      <section className="py-24 border-t border-zinc-900">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-16 text-white text-center italic">Neural Core Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SETTINGS.techStack.map((tech, i) => (
            <div key={i} className="glass-card p-10 rounded-[3rem] border-zinc-900 group hover:border-zinc-700 transition-all text-center">
              <div className="w-20 h-20 bg-zinc-900 rounded-3xl flex items-center justify-center border border-zinc-800 text-zinc-500 group-hover:bg-white group-hover:text-black transition-all mx-auto mb-8 shadow-xl">
                {i % 2 === 0 ? <Cpu size={32} /> : <Code2 size={32} />}
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-2 italic">{tech.name}</h3>
              <p className="text-[9px] text-zinc-700 font-black uppercase tracking-[0.4em] mono">Active Module</p>
            </div>
          ))}
        </div>
      </section>

      {/* Manifest Section */}
      <div className="mt-32 p-12 md:p-24 bg-zinc-950 rounded-[4rem] border border-zinc-900 text-center relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.02)_0%,_transparent_50%)]"></div>
        <Shield size={64} className="mx-auto text-zinc-800 mb-12 opacity-50" />
        <h3 className="text-3xl md:text-5xl font-black mb-12 tracking-tighter uppercase text-white leading-tight">Membangun Masa Depan<br />Satu Proyek Sekaligus.</h3>
        <p className="text-zinc-500 text-lg md:text-xl font-medium mb-16 max-w-2xl mx-auto italic leading-relaxed">
          X-Tech Engineering bukan hanya tentang layanan, ini adalah tentang riset berkelanjutan dalam interaksi manusia dan mesin.
        </p>
        <button className="px-12 py-5 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all active:scale-95 shadow-2xl">
          Unduh Portofolio PDF
        </button>
      </div>
    </div>
  );
};

export default OwnerPage;
