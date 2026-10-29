import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useMagnetic } from '../hooks';
import { useTheme } from '../theme-context';
import Icon from './Icon';

const links = [
  { to: '/', label: 'Work', icon: 'house' },
  { to: '/projects', label: 'Projects', icon: 'square.grid.2x2' },
  { to: '/about', label: 'About', icon: 'person' },
  { to: '/contact', label: 'Contact', icon: 'envelope' },
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
        <Icon name={dark ? 'moon.fill' : 'sun.max'} />
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
        <div className="nav-bar glass">
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

      <nav className="tabbar glass" aria-label="Primary" ref={tabsRef}>
        <span className="tabbar-pill" aria-hidden="true" />
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            viewTransition
            className={({ isActive }) => `tab${isActive ? ' active' : ''}`}
          >
            <Icon name={l.icon} />
            <span>{l.label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
}
