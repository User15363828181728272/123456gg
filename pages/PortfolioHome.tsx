
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SETTINGS } from '../settings';
import { Terminal, Shield, ArrowRight, LayoutGrid } from 'lucide-react';
import TerminalHero from '../components/TerminalHero';

const PortfolioHome: React.FC = () => {
  const [isDeployed, setIsDeployed] = useState(false);

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-6 md:py-10 overflow-hidden px-4">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)] -z-10"></div>
      
      {!isDeployed ? (
        <div className="w-full flex flex-col items-center fade-in text-center max-w-4xl">
           <div className="mb-10 md:mb-16">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-900/50 border border-zinc-800 rounded-full text-zinc-500 text-[8px] font-black uppercase tracking-[0.4em] mb-6 md:mb-8 mono animate-pulse">
               <Shield size={10} /> Initializing Boot Sequence
             </div>
             <h1 className="fluid-5xl font-black tracking-tighter mb-4 text-gradient uppercase italic leading-none">
               {SETTINGS.brandName}<span className="text-zinc-800">.</span>Lab
             </h1>
             <p className="text-zinc-600 mono text-[8px] sm:text-xs max-w-xl mx-auto uppercase tracking-[0.4em] font-bold opacity-50">
               Secured Environment // Access Level: Architect
             </p>
           </div>
           <TerminalHero onComplete={() => setIsDeployed(true)} />
        </div>
      ) : (
        <div className="flex flex-col items-center text-center fade-in max-w-4xl mx-auto w-full">
           <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center text-black mb-10 md:mb-12 shadow-[0_0_60px_rgba(255,255,255,0.3)] animate-bounce">
              <span className="font-black text-3xl md:text-4xl italic">X</span>
           </div>
           <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-6 md:mb-8 leading-none text-white uppercase italic">
             XTE<span className="text-zinc-800">.</span>
           </h1>
           <p className="text-base md:text-2xl text-zinc-500 font-medium max-w-xl leading-relaxed mb-12 md:mb-16 italic tracking-tight px-4">
             Neural architecture is now operational. Arsitektur sistem digital {SETTINGS.brandName} siap untuk dieksplorasi.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 w-full max-w-xs sm:max-w-none">
              <Link 
                to="/projects" 
                className="group px-8 md:px-12 py-5 md:py-6 bg-white text-black rounded-[1.5rem] md:rounded-3xl font-black uppercase tracking-widest text-[10px] md:text-[11px] hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-4 active:scale-95"
              >
                Access Archive <ArrowRight size={18} />
              </Link>
              <Link 
                to="/dashboard" 
                className="px-8 md:px-12 py-5 md:py-6 bg-zinc-900 border border-zinc-800 text-white rounded-[1.5rem] md:rounded-3xl font-black uppercase tracking-widest text-[10px] md:text-[11px] hover:bg-zinc-800 transition-all flex items-center justify-center gap-4 active:scale-95"
              >
                <LayoutGrid size={18} /> Main Dashboard
              </Link>
           </div>
           <div className="mt-16 md:mt-20 flex flex-col items-center gap-4">
              <p className="text-[8px] text-zinc-700 font-black uppercase tracking-[0.5em] mono">Connection: Encrypted</p>
              <div className="w-px h-12 md:h-16 bg-gradient-to-b from-zinc-800 to-transparent"></div>
           </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioHome;
