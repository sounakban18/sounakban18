import { Fragment, useRef, useState } from 'react';

const text = (label, fill = '#fff', size = 10) => (
  <svg viewBox="0 0 24 24">
    <text x="12" y="12" dy="0.35em" textAnchor="middle" fill={fill} fontSize={size} fontWeight="800" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace">{label}</text>
  </svg>
);

const stroke = (paths, color = '#fff') => (
  <svg viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths}</svg>
);

const apps = [
  { name: 'Figma', g: 'linear-gradient(160deg, #d77cff, #5e5ce6)', running: true, glyph: stroke(<><path d="M12 3.5 5.5 10l3 9.5h7l3-9.5z" /><path d="M12 3.5v6" /><circle cx="12" cy="11.5" r="1.8" /></>) },
  { name: 'HTML', g: 'linear-gradient(160deg, #ffb340, #ff453a)', glyph: text('</>', '#fff', 8.5) },
  { name: 'CSS', g: 'linear-gradient(160deg, #70d7ff, #0a84ff)', glyph: text('{ }', '#fff', 10) },
  { name: 'JavaScript', g: 'linear-gradient(160deg, #ffe680, #ffc600)', glyph: text('JS', '#1d1d1f', 10) },
  { name: 'React', g: 'linear-gradient(160deg, #3a3a3c, #1c1c1e)', running: true, glyph: stroke(<><ellipse cx="12" cy="12" rx="9" ry="3.6" /><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" /><circle cx="12" cy="12" r="1.6" fill="#64d2ff" /></>, '#64d2ff') },
  { name: 'Shopify', g: 'linear-gradient(160deg, #5ee07a, #1f9d43)', glyph: stroke(<><path d="M5.5 8.5h13l-1 11.5h-11z" /><path d="M9 8.5V7a3 3 0 0 1 6 0v1.5" /></>) },
  { name: 'AI tools', g: 'conic-gradient(from 210deg, #0a84ff, #bf5af2, #ff375f, #ff9f0a, #0a84ff)', running: true, separated: true, glyph: <svg viewBox="0 0 24 24" fill="#fff"><path d="M11 3.5c.6 4.4 2.6 6.4 7 7-4.4.6-6.4 2.6-7 7-.6-4.4-2.6-6.4-7-7 4.4-.6 6.4-2.6 7-7z" /><path d="M18.5 3c.25 1.6.9 2.25 2.5 2.5-1.6.25-2.25.9-2.5 2.5-.25-1.6-.9-2.25-2.5-2.5 1.6-.25 2.25-.9 2.5-2.5z" /></svg> },
];

// The macOS Dock: icons magnify around the pointer and bounce when clicked.
export default function Dock() {
  const ref = useRef(null);
  const centers = useRef([]);
  const [launching, setLaunching] = useState(null);

  const items = () => [...ref.current.querySelectorAll('.dock-item')];
  const magnify = (e) => e.pointerType === 'mouse' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const onEnter = (e) => {
    if (!magnify(e)) return;
    centers.current = items().map((el) => {
      const r = el.getBoundingClientRect();
      return r.left + r.width / 2;
    });
  };
  const onMove = (e) => {
    if (!magnify(e)) return;
    items().forEach((el, i) => {
      const d = Math.min(Math.abs(e.clientX - centers.current[i]) / 150, 1);
      el.style.setProperty('--s', (1 + 0.55 * Math.cos((d * Math.PI) / 2)).toFixed(3));
    });
  };
  const onLeave = () => items().forEach((el) => el.style.removeProperty('--s'));

  return (
    <div className="dock-wrap">
      <ul className="dock glass" ref={ref} aria-label="Tools I work with" onPointerEnter={onEnter} onPointerMove={onMove} onPointerLeave={onLeave}>
        {apps.map((app) => (
          <Fragment key={app.name}>
            {app.separated && <li className="dock-sep" aria-hidden="true" />}
            <li
              className={`dock-item${launching === app.name ? ' is-launching' : ''}`}
              onClick={() => setLaunching(app.name)}
              onAnimationEnd={() => setLaunching(null)}
            >
              <span className="dock-icon" style={{ '--g': app.g }} aria-hidden="true">{app.glyph}</span>
              <span className="dock-label">{app.name}</span>
              {app.running && <span className="dock-dot" aria-hidden="true" />}
            </li>
          </Fragment>
        ))}
      </ul>
    </div>
  );
}
