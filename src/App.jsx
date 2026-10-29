import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import { ThemeProvider } from './theme';
import { usePointerEffects } from './hooks';

// New page → top; a link with a hash (e.g. /about#credentials) → that section.
// The second scroll corrects for off-screen sections that render on arrival.
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (!target) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    target.scrollIntoView();
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => target.scrollIntoView()));
    return () => cancelAnimationFrame(raf);
  }, [pathname, hash]);
  return null;
}

export default function App() {
  usePointerEffects();

  return (
    <ThemeProvider>
      <ScrollToTop />
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
