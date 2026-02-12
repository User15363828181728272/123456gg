
import React from 'react';
import { SETTINGS } from '../settings';
import { Quote } from 'lucide-react';

const QuotesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 page-transition">
      <div className="text-center mb-20">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Kalam Sperada</h1>
        <p className="text-xl text-gray-500 font-medium">Suara hati dan pesan berkesan dari penghuni 9-E.</p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-10 space-y-10">
        {SETTINGS.students.map((student) => (
          <div key={student.id} className="break-inside-avoid glass-card p-10 rounded-[32px] hover:shadow-2xl transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-[100px] -z-10 group-hover:bg-blue-100 transition-colors"></div>
            <Quote className="text-blue-600/20 mb-6 group-hover:text-blue-600 transition-colors" size={48} />
            <p className="text-2xl text-gray-800 font-semibold mb-10 leading-relaxed italic relative z-10">
              "{student.quote}"
            </p>
            <div className="flex items-center gap-4 pt-8 border-t border-gray-100">
              <img src={student.photo} alt={student.name} className="w-12 h-12 rounded-2xl object-cover shadow-md" />
              <div>
                <p className="font-extrabold text-gray-900 text-lg leading-tight">{student.name}</p>
                <p className="text-[10px] text-blue-600 uppercase tracking-[0.2em] font-black mt-1">Absen {student.id}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuotesPage;
