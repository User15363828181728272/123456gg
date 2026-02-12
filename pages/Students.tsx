
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SETTINGS } from '../settings';
import { Award, ChevronRight, MessageSquare, Heart, ArrowLeft, ArrowRight, User, Terminal } from 'lucide-react';

export const StudentList: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 fade-in">
      <div className="mb-20 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-6">
          <Terminal size={12} /> Database: Entity Records
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase leading-none">System Entities</h1>
        <p className="text-zinc-500 text-xl font-medium max-w-2xl italic">Exploring the data nodes captured within the Sperada Digital System. Architected by Defandryan.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {SETTINGS.students.map((student) => (
          <Link 
            key={student.id} 
            to={`/data/siswa/${student.name.toLowerCase().replace(/\s+/g, '-')}`}
            className="group glass-card rounded-[40px] overflow-hidden transition-all duration-500 hover:scale-[1.02]"
          >
            <div className="aspect-[3/4] overflow-hidden relative">
              <img 
                src={student.photo} 
                alt={student.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
              {student.isDev && (
                <div className="absolute top-6 right-6 bg-white text-black p-3 rounded-2xl shadow-2xl">
                  <Terminal size={20} strokeWidth={3} />
                </div>
              )}
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-[10px] text-zinc-400 font-black uppercase tracking-[0.2em] mb-2">Entity ID: {String(student.id).padStart(3, '0')}</p>
                <h3 className="text-2xl font-black text-white leading-tight group-hover:text-zinc-300 transition-colors">{student.name}</h3>
              </div>
            </div>
          </Link>
        ))}
        
        {/* Empty Node for Single Developer Emphasis */}
        <div className="group glass-card rounded-[40px] border-dashed border-zinc-800 p-10 flex flex-col items-center justify-center text-center opacity-50">
           <User size={32} className="text-zinc-700 mb-4" />
           <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600">Standalone System</p>
           <p className="text-xs font-medium text-zinc-700 mt-2">No other developers found in this node.</p>
        </div>
      </div>
    </div>
  );
};

export const StudentDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  
  const student = SETTINGS.students.find(
    s => s.name.toLowerCase().replace(/\s+/g, '-') === name?.toLowerCase()
  );

  if (!student) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 text-center fade-in">
        <h2 className="text-6xl font-black text-white mb-8 tracking-tighter uppercase">Entity Missing</h2>
        <p className="text-xl text-zinc-500 mb-12 max-w-md italic">This data node is not indexed in the system database.</p>
        <Link to="/data/siswa" className="px-10 py-5 bg-white text-black rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-105 transition-all">Back to Database</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 md:py-40 fade-in">
      <div className="flex flex-col lg:flex-row gap-16 md:gap-24 items-center">
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-[4/5] rounded-[60px] overflow-hidden border border-zinc-900 bg-zinc-950">
            <img 
              src={student.photo} 
              alt={student.name} 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s]" 
            />
          </div>
          {student.isDev && (
            <div className="absolute -top-6 -right-6 bg-white text-black p-6 rounded-[32px] shadow-2xl flex items-center gap-4">
               <Terminal size={32} strokeWidth={3} />
               <span className="font-black uppercase tracking-widest text-[10px]">Lead Architect</span>
            </div>
          )}
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <Link to="/data/siswa" className="flex items-center gap-3 text-zinc-600 hover:text-white mb-12 font-black uppercase tracking-widest text-[10px] transition-all">
            <ArrowLeft size={16} /> Back to Entities
          </Link>
          
          <div className="inline-block px-5 py-2 bg-zinc-950 border border-zinc-800 rounded-full text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] mb-10">
            Data Node: {student.name}
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-12 tracking-tighter leading-none uppercase">{student.name}</h1>
          
          <div className="space-y-16">
            <div className="group">
              <div className="flex items-center gap-4 text-zinc-700 mb-6 group-hover:text-white transition-colors">
                <Heart size={20} />
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em]">Source Origin</h3>
              </div>
              <p className="text-3xl text-zinc-300 font-bold tracking-tight">{student.parent}</p>
            </div>

            <div className="group">
              <div className="flex items-center gap-4 text-zinc-700 mb-6 group-hover:text-white transition-colors">
                <MessageSquare size={20} />
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em]">Kalam / Quote</h3>
              </div>
              <blockquote className="text-3xl md:text-4xl font-medium italic text-white leading-tight tracking-tight max-w-xl">
                "{student.quote}"
              </blockquote>
            </div>

            <div className="pt-20 border-t border-zinc-900">
               <div className="p-10 bg-zinc-950 rounded-[40px] border border-zinc-900">
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-600 mb-4">Architect Notes</p>
                  <p className="text-zinc-500 italic font-medium">This entity is part of the Sperada Digital System project developed solo by Defandryan at XTE Lab.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
