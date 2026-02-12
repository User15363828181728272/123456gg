
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import PortfolioHome from './pages/PortfolioHome';
import Articles from './pages/Articles';
import Dashboard from './pages/Dashboard';
import Structure from './pages/Structure';
import { StudentList, StudentDetail } from './pages/Students';
import GalleryPage from './pages/Gallery';
import QuotesPage from './pages/Quotes';
import ParentsPage from './pages/Parents';
import OwnerPage from './pages/Owner';
import ProjectsPage from './pages/Projects';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(hash.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname, hash]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          {/* Main XTE Routes */}
          <Route path="/" element={<PortfolioHome />} />
          <Route path="/artikel" element={<Articles />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/owner" element={<OwnerPage />} />
          
          {/* Sperada Sub-routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/struktur" element={<Structure />} />
          <Route path="/data/siswa" element={<StudentList />} />
          <Route path="/data/siswa/:name" element={<StudentDetail />} />
          <Route path="/foto/kelas" element={<GalleryPage type="kelas" />} />
          <Route path="/foto/aib" element={<GalleryPage type="aib" />} />
          <Route path="/foto/kenangan" element={<GalleryPage type="kenangan" />} />
          <Route path="/quotes" element={<QuotesPage />} />
          <Route path="/parents" element={<ParentsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
