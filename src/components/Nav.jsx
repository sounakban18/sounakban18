import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useMagnetic } from '../hooks';
import { useTheme } from '../theme-context';

const icon = (paths) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {paths}
  </svg>
);

const links = [
  { to: '/', label: 'Work', icon: icon(<path d="M3.5 10.5 12 3.5l8.5 7V19a1.5 1.5 0 0 1-1.5 1.5h-4v-6h-6v6H5A1.5 1.5 0 0 1 3.5 19z" />) },
  { to: '/projects', label: 'Projects', icon: icon(<><rect x="3.5" y="3.5" width="7" height="7" rx="2" /><rect x="13.5" y="3.5" width="7" height="7" rx="2" /><rect x="3.5" y="13.5" width="7" height="7" rx="2" /><rect x="13.5" y="13.5" width="7" height="7" rx="2" /></>) },
  { to: '/about', label: 'About', icon: icon(<><circle cx="12" cy="8" r="4" /><path d="M4.5 20.5c0-4 3.4-6.5 7.5-6.5s7.5 2.5 7.5 6.5" /></>) },
  { to: '/contact', label: 'Contact', icon: icon(<><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7.5 8 5.5 8-5.5" /></>) },
];

// Slides a pill under whichever child link is `.active` — SwiftUI's
// matchedGeometryEffect, done with two CSS variables.
function useActivePill(ref, pathname) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const place = () => {
      const active = el.querySelector('.active');
      el.style.setProperty('--pill-x', `${active?.offsetLeft ?? 0}px`);
      el.style.setProperty('--pill-w', `${active?.offsetWidth ?? 0}px`);
    };
    place();
    const raf = requestAnimationFrame(() => { el.dataset.ready = ''; });
    const observer = new ResizeObserver(place);
    observer.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [ref, pathname]);
}

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const dark = theme === 'dark';

  // The new theme washes in as a circle growing from the switch.
  const toggle = (e) => {
    const next = dark ? 'light' : 'dark';
    const root = document.documentElement;
    if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTheme(next);
      return;
    }
    const r = e.currentTarget.getBoundingClientRect();
    root.style.setProperty('--vt-x', `${r.left + r.width / 2}px`);
    root.style.setProperty('--vt-y', `${r.top + r.height / 2}px`);
    root.classList.add('theme-vt');
    const transition = document.startViewTransition(() => {
      root.dataset.theme = next;
      root.style.colorScheme = next;
      flushSync(() => setTheme(next));
    });
    transition.finished.finally(() => root.classList.remove('theme-vt'));
  };

  return (
    <button type="button" role="switch" aria-checked={dark} aria-label="Dark mode" className="theme-switch" onClick={toggle}>
      <span className="theme-switch-knob" aria-hidden="true">
        {dark
          ? <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 14.6A8.5 8.5 0 0 1 9.4 3.5a8.5 8.5 0 1 0 11.1 11.1z" /></svg>
          : <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><circle cx="12" cy="12" r="4.2" fill="currentColor" stroke="none" /><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" /></svg>}
      </span>
    </button>
  );
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const linksRef = useRef(null);
  const tabsRef = useRef(null);
  const ctaRef = useMagnetic(14);
  useActivePill(linksRef, pathname);
  useActivePill(tabsRef, pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-bar">
          <NavLink to="/" className="nav-logo" viewTransition>
            <span className="nav-logo-mark" aria-hidden="true">SB</span>
            <span className="nav-logo-text">Sounak Banerjee</span>
          </NavLink>

          <nav className="nav-links" aria-label="Primary" ref={linksRef}>
            <span className="nav-pill" aria-hidden="true" />
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                viewTransition
                className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <ThemeSwitch />
            <Link ref={ctaRef} to="/contact" className="btn btn-primary nav-cta" viewTransition>
              Let&rsquo;s talk
            </Link>
          </div>
        </div>
      </header>

      <nav className="tabbar" aria-label="Primary" ref={tabsRef}>
        <span className="tabbar-pill" aria-hidden="true" />
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            viewTransition
            className={({ isActive }) => `tab${isActive ? ' active' : ''}`}
          >
            {l.icon}
            <span>{l.label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
}
