
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SETTINGS } from '../settings';
import { Award, ChevronRight, MessageSquare, Heart } from 'lucide-react';

export const StudentList: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 page-transition">
      <div className="mb-14 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Keluarga 9-E</h1>
        <p className="text-lg text-gray-500 font-medium">Banyak wajah, satu rasa, satu Sperada.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {SETTINGS.students.map((student) => (
          <Link 
            key={student.id} 
            to={`/data/siswa/${student.name.toLowerCase()}`}
            className="group glass-card rounded-[32px] overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <img 
                src={student.photo} 
                alt={student.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              {student.isDev && (
                <div className="absolute top-5 right-5 bg-blue-600 text-white p-2.5 rounded-2xl shadow-xl border-2 border-white">
                  <Award size={18} />
                </div>
              )}
            </div>
            <div className="p-8 flex justify-between items-center bg-white/50 backdrop-blur-sm">
              <div>
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Absen {student.id}</p>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{student.name}</h3>
              </div>
              <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export const StudentDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const student = SETTINGS.students.find(s => s.name.toLowerCase() === name?.toLowerCase());

  if (!student) {
    return (
      <div className="flex flex-col items-center justify-center py-32 px-4 text-center page-transition">
        <h2 className="text-4xl font-black text-gray-900 mb-6">Siswa Tidak Ditemukan</h2>
        <p className="text-lg text-gray-500 mb-10 font-medium">Maaf, nama "{name}" tidak terdaftar dalam basis data kami.</p>
        <Link to="/data/siswa" className="px-10 py-4 bg-blue-600 text-white rounded-2xl font-bold shadow-xl shadow-blue-100">Kembali ke Daftar</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-20 page-transition">
      <div className="glass-card rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-2xl">
        <div className="md:w-5/12 aspect-[4/5] md:aspect-auto">
          <img src={student.photo} alt={student.name} className="w-full h-full object-cover" />
        </div>
        <div className="md:w-7/12 p-10 md:p-20 flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-8">
            <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">Absen {student.id}</span>
            {student.isDev && <span className="bg-slate-900 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-1"><Award size={14} /> Developer</span>}
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-10 tracking-tight leading-tight">{student.name}</h1>
          
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-3 text-blue-600 mb-4">
                <Heart size={20} />
                <h3 className="text-xs font-black uppercase tracking-[0.2em]">Nama Orang Tua</h3>
              </div>
              <p className="text-2xl text-gray-800 font-bold">{student.parent}</p>
            </div>

            <div>
              <div className="flex items-center gap-3 text-blue-600 mb-4">
                <MessageSquare size={20} />
                <h3 className="text-xs font-black uppercase tracking-[0.2em]">Kutipan Kenangan</h3>
              </div>
              <blockquote className="text-3xl font-medium italic text-gray-700 leading-relaxed">
                "{student.quote}"
              </blockquote>
            </div>

            <div className="pt-10 border-t border-gray-100">
               <Link to="/data/siswa" className="px-10 py-5 bg-white border border-gray-100 text-gray-600 rounded-2xl font-bold hover:bg-gray-50 transition-all shadow-sm">Jelajahi Siswa Lain</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
