
import React from 'react';
import { SETTINGS } from '../settings';
import { Heart } from 'lucide-react';

const ParentsPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 page-transition">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">Pilar Pendukung</h1>
        <p className="text-lg text-gray-500 font-medium">Penghormatan tertinggi untuk orang tua wali murid Sperada 9-E.</p>
      </div>

      <div className="glass-card rounded-[32px] shadow-2xl overflow-hidden">
        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
            <thead>
                <tr className="bg-slate-50/50">
                <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">No</th>
                <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Nama Siswa</th>
                <th className="px-8 py-6 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Nama Orang Tua / Wali</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
                {SETTINGS.students.map((student, idx) => (
                <tr key={student.id} className="hover:bg-blue-50/30 transition-colors group">
                    <td className="px-8 py-6 text-gray-400 font-black text-sm">{String(idx + 1).padStart(2, '0')}</td>
                    <td className="px-8 py-6 text-gray-900 font-extrabold text-lg group-hover:text-blue-600 transition-colors">{student.name}</td>
                    <td className="px-8 py-6 text-gray-600 flex items-center gap-3">
                    <Heart size={16} className="text-blue-200 group-hover:text-blue-600 transition-colors" fill="currentColor" />
                    <span className="font-bold text-lg">{student.parent}</span>
                    </td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default ParentsPage;
