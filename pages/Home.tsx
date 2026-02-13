
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Image, ShieldCheck, ArrowRight, Heart, Info } from 'lucide-react';
import { SETTINGS } from '../settings';

const Home: React.FC = () => {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-sky-50 rounded-full blur-3xl opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-8">
                <Heart size={14} fill="currentColor" />
                <span>Memories of 9-E Sperada</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-8">
                Official Web <span className="text-blue-600">Sperada {SETTINGS.className}</span>
              </h1>
              <p className="text-xl text-gray-500 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Satu wadah untuk ribuan kenangan. Jelajahi profil teman-teman dan simpan setiap momen berharga kita di UPT SMPN 18 GRESIK.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <Link to="/dashboard" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3">
                  Eksplorasi Kelas <ArrowRight size={20} />
                </Link>
                <Link to="/foto/kelas" className="px-10 py-5 bg-white border border-gray-100 text-gray-600 rounded-2xl font-bold hover:bg-gray-50 transition-all flex items-center justify-center gap-2 shadow-sm">
                  Galeri Foto
                </Link>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-sky-100 rounded-3xl blur-2xl opacity-40 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl glass-card p-2">
                 <img 
                  src={SETTINGS.schoolPhoto} 
                  alt="School Photo" 
                  className="rounded-2xl object-cover w-full aspect-video lg:aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">Kategori Konten</h2>
            <p className="text-lg text-gray-500 font-medium">Semua data dan dokumentasi tersusun rapi untukmu.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard 
              to="/struktur"
              icon={<Users className="text-blue-600" size={32} />}
              title="Struktur Kelas"
              desc="Kenali jajaran pengurus kelas yang berdedikasi tinggi."
            />
            <FeatureCard 
              to="/data/siswa"
              icon={<Info className="text-sky-600" size={32} />}
              title="Database Siswa"
              desc="Daftar lengkap anggota keluarga besar 9-E beserta profilnya."
            />
            <FeatureCard 
              to="/foto/aib"
              icon={<ShieldCheck className="text-slate-700" size={32} />}
              title="Ruang Ekspresi"
              desc="Koleksi foto spontan dan lucu untuk pencair suasana."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard: React.FC<{ to: string, icon: React.ReactNode, title: string, desc: string }> = ({ to, icon, title, desc }) => (
  <Link to={to} className="group p-10 glass-card rounded-3xl hover:-translate-y-3 transition-all duration-500">
    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{title}</h3>
    <p className="text-gray-500 leading-relaxed font-medium mb-8">{desc}</p>
    <div className="flex items-center text-blue-600 font-bold gap-2">
      Lihat Selengkapnya <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
    </div>
  </Link>
);

export default Home;
