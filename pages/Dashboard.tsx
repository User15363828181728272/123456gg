
import React from 'react';
import { SETTINGS } from '../settings';
import { Users, Image, MessageSquare, Award, Clock, ArrowRight } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Total Siswa', value: SETTINGS.students.length, icon: Users, color: 'bg-blue-600 shadow-blue-100' },
    { label: 'Foto Kelas', value: SETTINGS.gallery.fotoKelas.length, icon: Image, color: 'bg-sky-500 shadow-sky-100' },
    { label: 'Koleksi Aib', value: SETTINGS.gallery.fotoAib.length, icon: Clock, color: 'bg-slate-700 shadow-slate-100' },
    { label: 'Kenangan', value: SETTINGS.gallery.fotoKenangan.length, icon: Award, color: 'bg-blue-400 shadow-blue-50' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 page-transition">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-14 gap-6">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Dashboard Kelas</h1>
          <p className="text-lg text-gray-500 font-medium">Informasi terkini tentang Sperada {SETTINGS.className}</p>
        </div>
        <div className="glass-card px-6 py-3 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
            <Clock size={22} />
          </div>
          <div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Tahun Ajaran</p>
            <p className="text-lg font-bold text-gray-900 leading-none mt-1">{SETTINGS.academicYear}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {stats.map((stat, i) => (
          <div key={i} className="glass-card p-8 rounded-3xl flex items-center gap-6 hover:scale-[1.02] transition-transform">
            <div className={`w-14 h-14 rounded-2xl ${stat.color} text-white flex items-center justify-center shadow-xl`}>
              <stat.icon size={28} />
            </div>
            <div>
              <p className="text-sm text-gray-400 font-bold uppercase tracking-wider">{stat.label}</p>
              <p className="text-3xl font-extrabold text-gray-900 mt-1">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 glass-card rounded-[32px] p-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
             Profil Developer
          </h2>
          <div className="flex flex-col sm:flex-row items-center gap-10">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-500 rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative p-1 bg-white rounded-full shadow-lg border border-gray-100">
                <img 
                  src={SETTINGS.students.find(s => s.isDev)?.photo} 
                  alt="Dev" 
                  className="w-36 h-36 rounded-full object-cover" 
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-3 rounded-2xl shadow-xl border-4 border-white">
                <Award size={24} />
              </div>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
                {SETTINGS.developer.name} 
                <span className="ml-3 inline-flex items-center px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-full">VIP DEVELOPER</span>
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed mb-6 font-medium">
                Pencipta platform digital Sperada 9-E. Berdedikasi dalam membangun UI/UX yang elegan dan fungsional.
              </p>
              <a href={SETTINGS.developer.url} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-600 transition-all shadow-lg">
                Website Developer <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 rounded-[32px] p-10 text-white shadow-2xl shadow-blue-100 flex flex-col justify-between overflow-hidden relative">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <h2 className="text-xl font-black uppercase tracking-widest mb-6 opacity-70">Motto Kelas</h2>
            <p className="text-2xl font-semibold italic leading-relaxed">
              "Bersama Kita Kuat, Bercanda Kita Hebat. Sperada 9-E Bukan Sekadar Kelas, Tapi Keluarga."
            </p>
          </div>
          <div className="mt-12 flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-md">
              <Users size={24} />
            </div>
            <span className="font-bold text-lg">9-E Sperada Family</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
