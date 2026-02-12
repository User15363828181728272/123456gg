
import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Play, Loader2 } from 'lucide-react';

const TerminalHero: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [status, setStatus] = useState<'idle' | 'running' | 'complete'>('idle');
  const scrollRef = useRef<HTMLDivElement>(null);

  const bootSequence = [
    "> xte lab init --architecture neural",
    "Initializing XTE Laboratory Environment...",
    "Loading core modules: [React, Tailwind, Gemini AI]",
    "[✓] System Kernel Verified",
    "[✓] Neural Link Handshake: OK",
    "> git clone https://github.com/defandryan/xte laboratory",
    "Cloning repository into local node... done.",
    "> npm install --silent",
    "Synchronizing node modules... [1422 packages]",
    "> npm run dev",
    "",
    "  VITE v6.0.0  ready in 482 ms",
    "",
    "  ➜  Local:   http://localhost:3000/",
    "  ➜  Network: https://www.xte.web.id/",
    "",
    "  [Tailwind] Build successful in 64ms",
    "  [System] Secured connection established",
    "  Welcome back, Architect Defandryan."
  ];

  const startBoot = async () => {
    if (status !== 'idle') return;
    setStatus('running');
    setIsTyping(true);

    for (const line of bootSequence) {
      // Slower, more deliberate typing feel
      const delay = line === "" ? 200 : Math.random() * 300 + 150;
      await new Promise(r => setTimeout(r, delay));
      setLogs(prev => [...prev, line]);
    }
    
    setIsTyping(false);
    setStatus('complete');
    // Longer pause at the end to allow reading the final success message
    setTimeout(() => onComplete(), 1500);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="w-full max-w-4xl mx-auto px-2 fade-in">
      <div className="glass-card rounded-[1.5rem] sm:rounded-[2rem] border border-zinc-800 overflow-hidden shadow-2xl scanline relative will-change-transform translate-z-0">
        {/* Terminal Header Bar */}
        <div className="bg-zinc-900/50 px-5 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/10"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/10"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/10"></div>
            </div>
            <span className="ml-3 sm:ml-4 text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-zinc-500 mono flex items-center gap-2">
              <Terminal size={12} /> xte — zsh — 80x24
            </span>
          </div>
          {status === 'running' && <Loader2 size={12} className="text-zinc-500 animate-spin" />}
        </div>

        {/* Terminal Content Area - Strictly Left Aligned */}
        <div 
          ref={scrollRef}
          className="p-6 sm:p-10 md:p-12 h-[250px] sm:h-[300px] md:h-[400px] overflow-y-auto mono text-[10px] sm:text-[11px] md:text-sm leading-relaxed scroll-smooth bg-black/70 text-left scrollbar-hide"
        >
          {logs.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <button 
                onClick={startBoot}
                className="group flex items-center gap-3 px-10 py-5 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/10"
              >
                <Play size={12} fill="currentColor" /> Initialize Dev Environment
              </button>
              <p className="text-zinc-700 mt-6 text-[9px] uppercase tracking-widest mono italic">Authorization: XTE Core Access Required</p>
            </div>
          )}

          {logs.map((log, i) => (
            <div key={i} className={`mb-1.5 ${log.startsWith('>') ? 'text-zinc-100 font-bold' : log.includes('VITE') ? 'text-green-400 font-bold' : log.includes('➜') ? 'text-blue-400 underline underline-offset-4' : 'text-zinc-500'}`}>
              {log}
            </div>
          ))}
          
          {isTyping && (
            <div className="w-1.5 h-4 sm:w-2 sm:h-5 bg-white/50 animate-pulse inline-block align-middle ml-1"></div>
          )}
        </div>

        {/* Status Bar */}
        <div className="bg-zinc-900/30 px-6 py-3 border-t border-zinc-800 flex justify-between items-center">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${status === 'running' ? 'bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]' : status === 'complete' ? 'bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]' : 'bg-zinc-800'}`}></div>
              <span className="text-[8px] font-black uppercase tracking-widest text-zinc-600 mono">Main Engine</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
              <span className="text-[8px] font-black uppercase tracking-widest text-zinc-600 mono">GPU Accel</span>
            </div>
          </div>
          <span className="text-[8px] font-black uppercase tracking-widest text-zinc-700 mono whitespace-nowrap">
            {status === 'complete' ? 'SYSTEM SECURED' : status === 'running' ? 'EXECUTING...' : 'STANDBY'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TerminalHero;
