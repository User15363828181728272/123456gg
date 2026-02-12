
import React from 'react';
import { SETTINGS } from '../settings';
import { ArrowUpRight, Cpu, ArrowRight, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 fade-in">
      <div className="mb-24">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-zinc-950 border border-zinc-800 rounded-full text-zinc-500 text-[10px] font-black uppercase tracking-[0.5em] mb-10 mono">
           Archive Volume 01
        </div>
        <h1 className="text-6xl md:text-9xl font-black text-white mb-10 tracking-tighter leading-none uppercase">
          PROJECT<br />ARCHIVE<span className="text-zinc-800">.</span>
        </h1>
        <p className="text-zinc-500 text-xl md:text-2xl font-medium max-w-3xl italic leading-relaxed">
          Katalog sistem yang telah dideploy dan unit riset teknis di bawah X-Tech Engineering Laboratory.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {SETTINGS.projects.map((proj) => (
          <div key={proj.title} className="group relative">
            <div className="glass-card rounded-[4rem] overflow-hidden border-zinc-900 p-3 h-full flex flex-col shadow-2xl hover:border-zinc-700 transition-all duration-700">
              <div className="aspect-[16/10] rounded-[3.5rem] overflow-hidden relative">
                <img 
                  src={proj.image} 
                  alt={proj.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s]" 
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-700 backdrop-blur-sm flex items-center justify-center">
                   <div className="flex items-center gap-3 bg-white text-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] transform translate-y-6 group-hover:translate-y-0 transition-all">
                     View Node Details <ArrowUpRight size={16} />
                   </div>
                </div>
                <div className="absolute top-8 right-8 flex gap-2">
                   <span className="px-4 py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-xl text-[8px] font-black uppercase tracking-widest text-white">v1.0.4</span>
                </div>
              </div>
              <div className="p-10 sm:p-14">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center text-zinc-500">
                    {proj.isInternal ? <Shield size={16} /> : <Globe size={16} />}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 mono">{proj.isInternal ? 'INTERNAL SYSTEM' : 'EXTERNAL NETWORK'}</span>
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 group-hover:translate-x-2 transition-all tracking-tighter uppercase text-white leading-tight">{proj.title}</h3>
                <p className="text-zinc-500 leading-relaxed text-lg sm:text-xl font-medium mb-12 italic">{proj.desc}</p>
                
                {proj.isInternal ? (
                  <Link to={proj.url} className="inline-flex items-center gap-4 text-white font-black text-[11px] uppercase tracking-[0.5em] hover:opacity-70 transition-all border-b-2 border-zinc-900 pb-2">
                    Initialize Transmission <ArrowRight size={18} className="text-zinc-700" />
                  </Link>
                ) : (
                  <a href={proj.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 text-white font-black text-[11px] uppercase tracking-[0.5em] hover:opacity-70 transition-all border-b-2 border-zinc-900 pb-2">
                    Open Channel <ArrowRight size={18} className="text-zinc-700" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10">
        {[
          { label: 'Lines Of Code', val: '250K+' },
          { label: 'Neural Nodes', val: '12' },
          { label: 'Success Rate', val: '100%' },
          { label: 'Archived Proj', val: '04' },
        ].map((stat, i) => (
          <div key={i} className="glass-card p-10 rounded-[2.5rem] border-zinc-900 text-center">
            <p className="text-[9px] text-zinc-700 font-black uppercase tracking-[0.3em] mb-3 mono">[{stat.label}]</p>
            <p className="text-3xl md:text-4xl font-black text-white">{stat.val}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
