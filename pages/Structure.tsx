
import React from 'react';
import { SETTINGS } from '../settings';
import { User, Shield, Star, Heart, PenTool, Wallet } from 'lucide-react';

const Structure: React.FC = () => {
  const { structure } = SETTINGS;

  return (
    <div className="max-w-5xl mx-auto px-4 py-20 page-transition">
      <div className="text-center mb-20">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">Struktur Organisasi</h1>
        <p className="text-lg text-gray-500 font-medium">Nahkoda yang memandu perjalanan Sperada {SETTINGS.className}.</p>
      </div>

      <div className="flex flex-col items-center gap-14">
        {/* Wali Kelas */}
        <OfficialCard 
          official={structure.waliKelas} 
          icon={<Heart size={28} className="text-blue-600" />} 
          color="border-blue-600"
          large
        />

        <div className="w-[1px] h-16 bg-gradient-to-b from-gray-200 to-transparent"></div>

        {/* Ketua & Wakil */}
        <div className="grid md:grid-cols-2 gap-10 w-full max-w-4xl">
          <OfficialCard 
            official={structure.ketuaKelas} 
            icon={<Shield size={28} className="text-blue-500" />} 
            color="border-blue-500"
          />
          <OfficialCard 
            official={structure.wakilKetua} 
            icon={<Star size={28} className="text-sky-500" />} 
            color="border-sky-500"
          />
        </div>

        <div className="w-[1px] h-16 bg-gradient-to-b from-gray-200 to-transparent"></div>

        {/* Bendahara & Sekretaris */}
        <div className="grid md:grid-cols-2 gap-10 w-full max-w-4xl">
          <OfficialCard 
            official={structure.sekretaris} 
            icon={<PenTool size={28} className="text-slate-700" />} 
            color="border-slate-700"
          />
          <OfficialCard 
            official={structure.bendahara} 
            icon={<Wallet size={28} className="text-blue-400" />} 
            color="border-blue-400"
          />
        </div>
      </div>
    </div>
  );
};

const OfficialCard: React.FC<{ official: { name: string, role: string }, icon: React.ReactNode, color: string, large?: boolean }> = ({ official, icon, color, large }) => (
  <div className={`glass-card rounded-3xl border-t-8 ${color} p-10 flex flex-col items-center text-center transition-all hover:-translate-y-2 hover:shadow-2xl ${large ? 'w-full max-w-lg shadow-xl' : 'flex-1'}`}>
    <div className="w-20 h-20 rounded-2xl bg-gray-50 flex items-center justify-center mb-6 shadow-sm">
      {icon}
    </div>
    <h3 className="text-xs font-black text-blue-600 uppercase tracking-[0.2em] mb-3">{official.role}</h3>
    <p className={`text-gray-900 font-extrabold ${large ? 'text-3xl' : 'text-2xl'} tracking-tight`}>{official.name}</p>
  </div>
);

export default Structure;
