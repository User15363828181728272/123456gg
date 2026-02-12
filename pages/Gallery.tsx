
import React, { useState } from 'react';
import { SETTINGS } from '../settings';
import { X, Maximize2 } from 'lucide-react';

interface GalleryPageProps {
  type: 'kelas' | 'aib' | 'kenangan';
}

const GalleryPage: React.FC<GalleryPageProps> = ({ type }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = type === 'kelas' 
    ? SETTINGS.gallery.fotoKelas 
    : type === 'aib' 
      ? SETTINGS.gallery.fotoAib 
      : SETTINGS.gallery.fotoKenangan;

  const title = type === 'kelas' ? 'Foto Bersama' : type === 'aib' ? 'Ruang Ekspresi' : 'Momen Berharga';
  const subtitle = type === 'kelas' 
    ? 'Kenangan indah bersama seluruh anggota keluarga besar 9-E.' 
    : type === 'aib' 
      ? 'Koleksi canda tawa yang tertangkap kamera. Tetap asik, jangan baper!' 
      : 'Cuplikan perjalanan kita yang akan selalu membekas di hati.';

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 page-transition">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">{title}</h1>
        <p className="text-lg text-gray-500 font-medium">{subtitle}</p>
      </div>

      <div className={`grid gap-6 ${type === 'aib' ? 'grid-cols-2 md:grid-cols-4 lg:grid-cols-5' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
        {images.map((img, i) => (
          <div 
            key={i} 
            onClick={() => setSelectedImage(img)}
            className="group relative glass-card rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl cursor-pointer transition-all p-1.5"
          >
            <div className="relative rounded-xl overflow-hidden aspect-square md:aspect-video lg:aspect-square">
                <img src={img} alt={`${title} ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <Maximize2 className="text-white" size={40} />
                </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[60] bg-white/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 animate-in fade-in zoom-in duration-300">
          <div className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-0 right-0 p-4 text-gray-900 hover:text-blue-600 transition-colors z-10"
            >
              <X size={40} strokeWidth={3} />
            </button>
            <img 
              src={selectedImage} 
              alt="Fullscreen view" 
              className="max-h-full max-w-full object-contain rounded-3xl shadow-[0_32px_64px_-12px_rgba(0,0,0,0.2)]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
