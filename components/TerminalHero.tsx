
import React, { useState, useEffect, useRef } from 'react';
import { Terminal, ChevronRight, Play, Loader2, CheckCircle2 } from 'lucide-react';

const TerminalHero: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [status, setStatus] = useState<'idle' | 'running' | 'complete'>('idle');
  const scrollRef = useRef<HTMLDivElement>(null);

  const bootSequence = [
    "> xte --version",
    "XTE Lab Core v2.5.0-beta initialized.",
    "> git clone https://github.com/defandryan/xte-laboratory.git",
    "Cloning into 'xte laboratory'...",
    "remote: Counting objects: 100% (1042/1042), done.",
    "Receiving objects: 100% (1042/1042), 4.21 MiB, done.",
    "> npm install",
    "added 1422 packages...",
    "> npm run dev",
    "",
    "  VITE v5.0.0 ready in 422 ms",
    "",
    "  ➜ Local: http://localhost:5173/",
    "",
    "  event - compiled successfully",
    "  Status: Secured Connection",
    "  Welcome, Architect XTE ID."
  ];

  const startBoot = async () => {
    if (status !== 'idle') return;
    setStatus('running');
    setIsTyping(true);

    for (const line of bootSequence) {
      await new Promise(r => setTimeout(r, Math.random() * 80 + 30));
      setLogs(prev => [...prev, line]);
    }
    
    setIsTyping(false);
    setStatus('complete');
    setTimeout(() => onComplete(), 600);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="w-full max-w-4xl mx-auto fade-in">
      <div className="glass-card rounded-[1.5rem] sm:rounded-[2rem] border border-zinc-800 overflow-hidden shadow-2xl scanline relative">
        <div className="bg-zinc-900/50 px-5 sm:px-6 py-3 sm:py-4 flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2 h-2 rounded-full bg-red-500/30"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500/30"></div>
              <div className="w-2 h-2 rounded-full bg-green-500/30"></div>
            </div>
            <span className="ml-3 sm:ml-4 text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-zinc-600 mono flex items-center gap-2">
              <Terminal size={10} /> xte — 80x24
            </span>
          </div>
          {status === 'running' && <Loader2 size={12} className="text-zinc-500 animate-spin" />}
        </div>

        <div 
          ref={scrollRef}
          className="p-5 sm:p-8 md:p-10 h-[250px] sm:h-[300px] md:h-[400px] overflow-y-auto mono text-[8px] sm:text-[10px] md:text-xs leading-relaxed scroll-smooth bg-black/60"
        >
          {logs.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <button 
                onClick={startBoot}
                className="group flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-white text-black rounded-xl sm:rounded-2xl font-black uppercase tracking-widest text-[9px] transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-white/10"
              >
                <Play size={10} fill="currentColor" /> Initialize Environment
              </button>
              <p className="text-zinc-700 mt-6 text-[8px] uppercase tracking-widest mono italic">Authorization Level: Lead Architect Required</p>
            </div>
          )}

          {logs.map((log, i) => (
            <div key={i} className={`mb-1 ${log.startsWith('>') ? 'text-zinc-100 font-bold' : 'text-zinc-500'}`}>
              {log}
            </div>
          ))}
          
          {isTyping && (
            <div className="w-1 h-3 sm:w-1.5 sm:h-4 bg-white/40 animate-pulse inline-block align-middle ml-1"></div>
          )}
        </div>

        <div className="bg-zinc-900/30 px-5 sm:px-6 py-2.5 border-t border-zinc-800 flex justify-between items-center">
          <div className="flex gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <div className={`w-1.5 h-1.5 rounded-full ${status === 'running' ? 'bg-blue-500 animate-pulse' : status === 'complete' ? 'bg-green-500' : 'bg-zinc-800'}`}></div>
              <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-widest text-zinc-600 mono">CPU</span>
            </div>
          </div>
          <span className="text-[7px] sm:text-[8px] font-black uppercase tracking-widest text-zinc-700 mono whitespace-nowrap">STATUS: SECURED</span>
        </div>
      </div>
    </div>
  );
};

export default TerminalHero;
