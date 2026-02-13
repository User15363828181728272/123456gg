
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Grid, Users, Image, MessageSquare, Info, ShieldCheck, ExternalLink } from 'lucide-react';
import { SETTINGS } from '../settings';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Beranda', path: '/', icon: Home },
    { name: 'Dashboard', path: '/dashboard', icon: Grid },
    { name: 'Struktur', path: '/struktur', icon: Users },
    { name: 'Siswa', path: '/data/siswa', icon: Info },
    { name: 'Foto Kelas', path: '/foto/kelas', icon: Image },
    { name: 'Foto Aib', path: '/foto/aib', icon: ShieldCheck },
    { name: 'Orang Tua', path: '/nama/orangtua', icon: Users },
    { name: 'Kata-kata', path: '/kenangan/kata-kata', icon: MessageSquare },
    { name: 'Kenangan', path: '/kenangan/foto', icon: Image },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 nav-glass border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center gap-3">
              <img src={SETTINGS.classLogo} alt="Logo" className="h-10 w-10 rounded-full object-cover border-2 border-blue-500 shadow-sm" />
              <div className="flex flex-col">
                <span className="font-bold text-gray-900 leading-tight">Sperada {SETTINGS.className}</span>
                <span className="text-[10px] text-gray-400 font-bold tracking-wider uppercase">{SETTINGS.schoolName}</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive(link.path)
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-500 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-500 hover:text-blue-600 hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-2xl animate-in slide-in-from-top duration-300">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl text-base font-bold transition-colors ${
                    isActive(link.path)
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <link.icon size={20} className={isActive(link.path) ? 'text-blue-600' : 'text-gray-400'} />
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-16 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <img src={SETTINGS.schoolLogo} alt="School Logo" className="h-12 w-auto" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight">{SETTINGS.schoolName}</h3>
                  <p className="text-sm text-gray-400 font-medium tracking-wide uppercase">{SETTINGS.academicYear}</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                Wadah digital kebanggaan kelas {SETTINGS.className} Sperada. Tempat menyimpan setiap tawa, perjuangan, dan cerita kita bersama.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Akses Cepat</h4>
              <ul className="space-y-4 text-sm font-medium text-gray-500">
                <li><Link to="/dashboard" className="hover:text-blue-600 transition-colors">Dashboard</Link></li>
                <li><Link to="/struktur" className="hover:text-blue-600 transition-colors">Struktur Organisasi</Link></li>
                <li><Link to="/data/siswa" className="hover:text-blue-600 transition-colors">Daftar Siswa</Link></li>
                <li><Link to="/foto/kelas" className="hover:text-blue-600 transition-colors">Galeri Foto</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Tautan Luar</h4>
              <ul className="space-y-4 text-sm font-medium text-gray-500">
                <li><a href={SETTINGS.externalLinks.school} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600"><ExternalLink size={14} /> Website Sekolah</a></li>
                <li><a href={SETTINGS.externalLinks.xte} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600"><ExternalLink size={14} /> Official Owner</a></li>
                <li><a href={SETTINGS.externalLinks.depstore} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600"><ExternalLink size={14} /> Depstore ID</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} {SETTINGS.className} Sperada Family.</p>
            <p className="font-medium">Crafted with ❤️ by <a href={SETTINGS.developer.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{SETTINGS.developer.name}</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
