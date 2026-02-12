
import React from 'react';
import { SETTINGS } from '../settings';
import { Image, Clock, Target, Terminal, Shield, Activity, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Sub Nodes', value: '42', icon: Activity, color: 'text-blue-500 bg-blue-500/10 border-blue-500/20' },
    { label: 'Media Index', value: '128', icon: Image, color: 'text-zinc-400 bg-zinc-400/10 border-zinc-400/20' },
    { label: 'Core Uptime', value: '100%', icon: Clock, color: 'text-green-500 bg-green-500/10 border-green-500/20' },
    { label: 'Security Class', value: 'VIP', icon: Shield, color: 'text-white bg-white/10 border-white/20' },
  ];

  const devPhoto = SETTINGS.students.find(s => s.isDev)?.photo;

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24 fade-in">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-zinc-600 text-[9px] font-black uppercase tracking-[0.4em] mb-6 mono">
            <Terminal size={12} className="text-blue-500" /> System Archive Sperada v2
          </div>
          <h1 className="fluid-8xl font-black tracking-tighter uppercase leading-none mb-6 text-white">
            PROJECT<br /><span className="text-zinc-800 tracking-[-0.05em]">MONITOR.</span>
          </h1>
          <p className="text-zinc-500 text-base sm:text-lg md:text-xl font-medium leading-relaxed italic max-w-2xl">
            Sperada digital management system core monitoring node. Designed for {SETTINGS.schoolName}.
          </p>
        </div>
        <div className="glass-card px-8 py-8 rounded-[2.5rem] flex items-center gap-8 border-zinc-800 w-full lg:w-auto bg-zinc-950/20">
          <div className="w-16 h-16 rounded-2xl bg-white text-black flex items-center justify-center shadow-lg">
            <Target size={28} />
          </div>
          <div>
            <p className="text-[9px] text-zinc-600 font-black uppercase tracking-[0.4em] mb-1 mono">System Build</p>
            <p className="text-3xl font-black tracking-tighter text-white uppercase">XTE 01</p>
          </div>
        </div>
      </div>

      {/* Grid Monitor */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
        {stats.map((stat, i) => (
          <div key={i} className={`glass-card p-8 rounded-[2rem] border-zinc-900 group hover:border-zinc-700 transition-all flex flex-col items-center sm:items-start`}>
            <div className={`w-12 h-12 rounded-xl ${stat.color} border flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
              <stat.icon size={20} />
            </div>
            <p className="text-[8px] text-zinc-600 font-black uppercase tracking-[0.3em] mb-2 mono">[{stat.label}]</p>
            <p className="text-3xl sm:text-4xl font-black tracking-tighter text-white leading-none">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
        <div className="lg:col-span-2 glass-card rounded-[3rem] p-8 sm:p-12 md:p-16 border-zinc-900 overflow-hidden relative group">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.03)_0%,_transparent_60%)]"></div>
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-12 relative z-10 text-white leading-none italic">Architect Identity</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 relative z-10">
            <div className="relative shrink-0">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-[3rem] overflow-hidden border border-zinc-800 shadow-xl">
                <img 
                  src={devPhoto} 
                  alt={SETTINGS.brandName} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1.5s]" 
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-black p-4 rounded-2xl shadow-xl">
                <Terminal size={24} strokeWidth={3} />
              </div>
            </div>
            <div className="text-center md:text-left flex-grow">
              <h3 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4 uppercase text-white leading-none italic">
                {SETTINGS.brandName}
              </h3>
              <p className="text-zinc-500 text-base sm:text-lg leading-relaxed mb-10 font-medium italic">
                Lead Architect of the Sperada Ecosystem. Designed to modernize educational archiving through logic and superior design.
              </p>
              <div className="flex justify-center md:justify-start">
                <Link to="/" className="group flex items-center gap-4 bg-white text-black px-10 py-5 rounded-xl font-black uppercase tracking-widest text-[9px] hover:scale-105 transition-all shadow-lg active:scale-95">
                  HQ Terminal <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-950 rounded-[3rem] p-8 sm:p-12 md:p-16 border border-zinc-900 flex flex-col justify-between group relative overflow-hidden min-h-[350px]">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent"></div>
          <div>
             <h2 className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-700 mb-8 mono">Lab Philosophy</h2>
             <p className="text-3xl sm:text-4xl font-black italic text-zinc-300 leading-tight tracking-tighter">
               "True engineering is the bridge between logic and pure inspiration."
             </p>
          </div>
          <div className="mt-10 pt-10 border-t border-zinc-900/50 flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white shrink-0">
              <Shield size={24} />
            </div>
            <div>
              <p className="text-[8px] text-zinc-600 font-black uppercase tracking-widest mb-1 mono">System Node</p>
              <p className="font-black uppercase tracking-[0.15em] text-[10px] text-green-500">Standalone Active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
