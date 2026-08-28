import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import { ThemeProvider } from './theme';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <Cursor />
      <ScrollToTop />
      <ScrollProgress />
      <Nav />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
