
import React, { useState } from 'react';
import { DEV_SETTINGS } from '../settings';
import { ChevronRight, Calendar, ArrowLeft, BookOpen, Clock, Instagram, MessageSquare, Share2, Terminal } from 'lucide-react';

const Articles: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [copyStatus, setCopyStatus] = useState<string | null>(null);

  const handleShare = async (article: any) => {
    const shareData = {
      title: article.title,
      text: article.excerpt,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopyStatus("Link Copied!");
        setTimeout(() => setCopyStatus(null), 2000);
      }
    } catch (err) {
      console.error("Error sharing:", err);
    }
  };

  const selectedArticle = DEV_SETTINGS.articles.find(a => a.id === selectedId);

  if (selectedArticle) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <button 
          onClick={() => setSelectedId(null)}
          className="flex items-center gap-3 text-zinc-500 hover:text-white mb-16 font-bold uppercase tracking-widest text-[10px] transition-all bg-zinc-900/50 px-6 py-3 rounded-xl border border-zinc-800"
        >
          <ArrowLeft size={16} /> Back to Transmission Archive
        </button>
        
        <div className="flex items-center gap-4 text-zinc-600 text-xs font-black uppercase tracking-widest mb-10 mono">
          <Calendar size={14} /> {selectedArticle.date}
          <span className="w-1 h-1 bg-zinc-800 rounded-full"></span>
          <Clock size={14} /> 5 MIN READ
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-16 leading-none uppercase text-white">
          {selectedArticle.title}
        </h1>

        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-zinc-400 text-xl md:text-2xl leading-relaxed mb-12 font-medium italic">
            {selectedArticle.excerpt}
          </p>
          <div className="space-y-10 text-zinc-500 text-lg md:text-xl leading-relaxed font-medium">
            <p>
              Dalam era transformasi digital yang begitu cepat, peran Kecerdasan Buatan (AI) bukan lagi sekadar pelengkap, melainkan inti dari setiap inovasi engineering modern. Artikel ini mengupas bagaimana kita dapat mengintegrasikan neural networks ke dalam aplikasi web sehari-hari untuk menciptakan pengalaman pengguna yang lebih personal dan cerdas.
            </p>
            <div className="p-12 bg-zinc-950 border border-zinc-900 rounded-[3rem] my-16 relative overflow-hidden group">
               <Terminal className="absolute -top-4 -right-4 text-zinc-900 w-32 h-32 opacity-20" />
               <blockquote className="text-2xl md:text-3xl font-black italic text-white leading-tight tracking-tighter relative z-10">
                 "Efisiensi bukan tentang melakukan lebih sedikit, tapi tentang melakukan hal yang benar dengan cara yang paling cerdas menggunakan data."
               </blockquote>
            </div>
            <p>
              Salah satu tantangan terbesar bagi developer saat ini adalah menyeimbangkan antara performa aplikasi yang berat dan fitur AI yang kompleks. Dengan menggunakan model seperti Gemini atau GPT-4, kita dituntut untuk memiliki arsitektur backend yang sangat efisien dan frontend yang reaktif.
            </p>
          </div>
        </div>

        <div className="mt-32 pt-16 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-12">
           <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-black font-black text-2xl shadow-xl shadow-white/5">X</div>
              <div>
                <p className="font-black text-lg uppercase tracking-widest text-white italic leading-none">Lab Admin</p>
                <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.3em] mt-2 mono">Neural Link Originator</p>
              </div>
           </div>
           <button 
            onClick={() => handleShare(selectedArticle)}
            className="w-full md:w-auto flex items-center justify-center gap-4 px-12 py-5 bg-white text-black rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-zinc-200 transition-all active:scale-95 shadow-2xl"
           >
              {copyStatus || <><Share2 size={18} /> Share Transmission</>}
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-10">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 text-zinc-600 text-xs font-black uppercase tracking-[0.5em] mb-8 mono border-b border-zinc-900 pb-4">
            <BookOpen size={16} /> TRANSMISSION LOG v1
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 uppercase leading-none text-white">INTEL<br />ARCHIVES<span className="text-zinc-800">.</span></h1>
          <p className="text-zinc-500 text-xl md:text-2xl font-medium leading-relaxed italic max-w-2xl">
            Kumpulan pemikiran dan dokumentasi riset seputar AI, Engineering, dan masa depan teknologi.
          </p>
        </div>
        <div className="hidden md:block text-zinc-900 font-black text-8xl md:text-[12rem] leading-none select-none italic opacity-30">LOG</div>
      </div>

      <div className="grid grid-cols-1 gap-16 md:gap-24">
        {DEV_SETTINGS.articles.map((art) => (
          <article 
            key={art.id} 
            className="group cursor-pointer relative"
            onClick={() => setSelectedId(art.id)}
          >
            <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start">
              <div className="flex items-center gap-4 text-zinc-700 text-[11px] font-black uppercase tracking-[0.3em] md:pt-6 whitespace-nowrap mono">
                <Calendar size={16} className="text-zinc-800" /> {art.date}
              </div>
              <div className="flex-grow">
                <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter group-hover:text-zinc-300 transition-all leading-[0.9] uppercase text-white">
                  {art.title}
                </h2>
                <p className="text-zinc-500 leading-relaxed text-lg md:text-2xl font-medium mb-12 max-w-4xl italic">
                  {art.excerpt}
                </p>
                <div className="flex items-center gap-5 text-white font-black text-[11px] uppercase tracking-[0.4em] group-hover:gap-8 transition-all border-b border-zinc-900 pb-4 inline-block">
                  Read Full Transmission <ChevronRight size={20} className="text-zinc-700 group-hover:text-white transition-all" />
                </div>
              </div>
            </div>
            <div className="mt-20 h-[1px] bg-zinc-900/50 w-full group-hover:bg-zinc-700 transition-colors"></div>
          </article>
        ))}
      </div>

      <div className="mt-40 p-16 md:p-32 bg-zinc-950 border border-zinc-900 rounded-[4rem] text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent pointer-events-none"></div>
        <h3 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter uppercase text-white">STAY CONNECTED</h3>
        <p className="text-zinc-500 text-xl md:text-2xl font-medium mb-16 max-w-2xl mx-auto italic leading-relaxed">
          Jangan lewatkan rilis riset terbaru kami. Ikuti perjalanan XTE Laboratory di saluran transmisi global.
        </p>
        <div className="flex justify-center gap-8">
           <a href={DEV_SETTINGS.socials.links.instagram} className="p-8 bg-zinc-900 rounded-3xl text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all active:scale-95 border border-zinc-800 shadow-2xl"><Instagram size={32} /></a>
           <a href={DEV_SETTINGS.socials.links.whatsapp} className="p-8 bg-zinc-900 rounded-3xl text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all active:scale-95 border border-zinc-800 shadow-2xl"><MessageSquare size={32} /></a>
        </div>
      </div>
    </div>
  );
};

export default Articles;
