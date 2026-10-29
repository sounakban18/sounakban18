// A small SF Symbols–style icon set: 24px grid, 1.8 stroke, round caps.
// Names follow SF Symbols so they read naturally next to Apple UI.
const icons = {
  'arrow.up.right': <path d="M7 17 17 7M8.5 7H17v8.5" />,
  'arrow.right': <path d="M5 12h14M13 6l6 6-6 6" />,
  'chevron.left': <path d="m14.5 5.5-6.5 6.5 6.5 6.5" />,
  'chevron.right': <path d="m9.5 5.5 6.5 6.5-6.5 6.5" />,
  xmark: <path d="M6.5 6.5l11 11M17.5 6.5l-11 11" />,
  'play.fill': <path d="M8 5.6v12.8a1 1 0 0 0 1.52.85l10.2-6.4a1 1 0 0 0 0-1.7L9.52 4.75A1 1 0 0 0 8 5.6z" />,
  'pause.fill': <><rect x="6.5" y="5" width="4" height="14" rx="1.2" /><rect x="13.5" y="5" width="4" height="14" rx="1.2" /></>,
  house: <path d="M3.5 10.5 12 3.5l8.5 7V19a1.5 1.5 0 0 1-1.5 1.5h-4v-6h-6v6H5A1.5 1.5 0 0 1 3.5 19z" />,
  'square.grid.2x2': <><rect x="3.5" y="3.5" width="7" height="7" rx="2" /><rect x="13.5" y="3.5" width="7" height="7" rx="2" /><rect x="3.5" y="13.5" width="7" height="7" rx="2" /><rect x="13.5" y="13.5" width="7" height="7" rx="2" /></>,
  person: <><circle cx="12" cy="8" r="4" /><path d="M4.5 20.5c0-4 3.4-6.5 7.5-6.5s7.5 2.5 7.5 6.5" /></>,
  envelope: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7.5 8 5.5 8-5.5" /></>,
  phone: <path d="M6.6 3.5h2.6l1.6 4.4-2 1.4a11 11 0 0 0 5.9 5.9l1.4-2 4.4 1.6v2.6a2.1 2.1 0 0 1-2.3 2.1A16.5 16.5 0 0 1 4.5 5.8a2.1 2.1 0 0 1 2.1-2.3z" />,
  link: <><path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1" /><path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1" /></>,
  mappin: <><path d="M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></>,
  graduationcap: <><path d="M2.5 9 12 4.5 21.5 9 12 13.5z" /><path d="M6.5 11.2v4.3c0 1.6 2.5 3 5.5 3s5.5-1.4 5.5-3v-4.3M21.5 9v5" /></>,
  'chevron.left.forwardslash.chevron.right': <path d="m8 7-5 5 5 5M16 7l5 5-5 5M13.5 4.5l-3 15" />,
  sparkles: <><path d="M11 3.5c.6 4.4 2.6 6.4 7 7-4.4.6-6.4 2.6-7 7-.6-4.4-2.6-6.4-7-7 4.4-.6 6.4-2.6 7-7z" /><path d="M18.5 3c.25 1.6.9 2.25 2.5 2.5-1.6.25-2.25.9-2.5 2.5-.25-1.6-.9-2.25-2.5-2.5 1.6-.25 2.25-.9 2.5-2.5z" /></>,
  'chart.bar': <path d="M3.5 20.5h17M6.5 17v-5M11 17V7M15.5 17v-8M20 17V4.5" />,
  magnifyingglass: <><circle cx="10.5" cy="10.5" r="6" /><path d="m15 15 5.5 5.5" /></>,
  'bubble.left': <path d="M5 4.5h14A1.5 1.5 0 0 1 20.5 6v9a1.5 1.5 0 0 1-1.5 1.5H10l-5 4v-4A1.5 1.5 0 0 1 3.5 15V6A1.5 1.5 0 0 1 5 4.5z" />,
  megaphone: <><path d="M4 10v4h3l8 4.5v-13L7 10z" /><path d="M18.5 9a4 4 0 0 1 0 6" /></>,
  scope: <><circle cx="12" cy="12" r="7.5" /><circle cx="12" cy="12" r="2.5" /><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3" /></>,
  rosette: <><circle cx="12" cy="9" r="5.5" /><path d="M8.6 13.4 7 20.5l5-2.5 5 2.5-1.6-7.1" /></>,
  cube: <><path d="M12 3 4 7.5v9L12 21l8-4.5v-9z" /><path d="M4 7.5 12 12l8-4.5M12 12v9" /></>,
  'doc.text': <><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v4h4M10 12h5M10 16h5" /></>,
  storefront: <><path d="M4 9.5h16l-1.2-5H5.2z" /><path d="M5 9.5V20h14V9.5M10 20v-5h4v5" /></>,
  'sun.max': <><circle cx="12" cy="12" r="4.2" fill="currentColor" stroke="none" /><path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" /></>,
  'moon.fill': <path d="M20.5 14.6A8.5 8.5 0 0 1 9.4 3.5a8.5 8.5 0 1 0 11.1 11.1z" />,
};

const filled = new Set(['play.fill', 'pause.fill', 'moon.fill', 'sparkles']);

export default function Icon({ name, className = '' }) {
  const solid = filled.has(name);
  return (
    <svg
      className={`icon ${className}`}
      viewBox="0 0 24 24"
      fill={solid ? 'currentColor' : 'none'}
      stroke={solid ? 'none' : 'currentColor'}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}
