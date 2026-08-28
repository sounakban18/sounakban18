import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useMagnetic } from '../hooks';
import { useTheme } from '../theme';

const links = [
  { to: '/', label: 'Work' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const ctaRef = useMagnetic(14);

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        <NavLink to="/" className="nav-logo" data-cursor="view">
          <span className="nav-logo-mark">SB</span>
          <span className="nav-logo-text">Sounak Banerjee</span>
        </NavLink>

        <nav className="nav-links" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <Link ref={ctaRef} to="/contact" className="btn btn-secondary nav-cta" data-cursor="view">
            Let&rsquo;s talk
          </Link>
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          >
            <span aria-hidden="true">{theme === 'light' ? '◐' : '☼'}</span>
          </button>
          <button
            className={`nav-burger${open ? ' open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`nav-mobile${open ? ' open' : ''}`}>
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) => `nav-mobile-link${isActive ? ' active' : ''}`}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
        <button className="nav-mobile-theme" type="button" onClick={toggleTheme}>
          {theme === 'light' ? 'Use dark theme' : 'Use light theme'} <span aria-hidden="true">{theme === 'light' ? '◐' : '☼'}</span>
        </button>
      </div>
    </header>
  );
}
