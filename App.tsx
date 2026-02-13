
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Structure from './pages/Structure';
import { StudentList, StudentDetail } from './pages/Students';
import GalleryPage from './pages/Gallery';
import ParentsPage from './pages/Parents';
import QuotesPage from './pages/Quotes';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/struktur" element={<Structure />} />
          <Route path="/data/siswa" element={<StudentList />} />
          <Route path="/data/siswa/:name" element={<StudentDetail />} />
          <Route path="/foto/kelas" element={<GalleryPage type="kelas" />} />
          <Route path="/foto/aib" element={<GalleryPage type="aib" />} />
          <Route path="/nama/orangtua" element={<ParentsPage />} />
          <Route path="/kenangan/kata-kata" element={<QuotesPage />} />
          <Route path="/kenangan/foto" element={<GalleryPage type="kenangan" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
