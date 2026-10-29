import { useEffect, useRef } from 'react';

const layers = [
  { key: 'design', label: 'Design', title: 'Design.fig', color: '#bf5af2', rows: ['Interface systems', 'Figma · UI/UX'], depth: 18 },
  { key: 'frontend', label: 'Frontend', title: 'index.jsx', color: '#0a84ff', rows: ['HTML · CSS · React', 'Components · Responsive'], depth: 34 },
  { key: 'problems', label: 'Business problems', title: 'Notes', color: '#30d158', rows: ['Workflows · coordination', 'Practical execution'], depth: 52 },
];

// Three floating macOS windows. Pointer parallax writes `translate`, which
// composes with the idle float animation running on `transform`.
export default function SystemsStack() {
  const wrapRef = useRef(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const isFine = window.matchMedia('(pointer: fine)').matches;
    if (!isFine) return;

    const panels = el.querySelectorAll('[data-depth]');
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      panels.forEach((node) => {
        const depth = Number(node.dataset.depth);
        node.style.translate = `${px * depth}px ${py * depth}px`;
      });
    };
    const onLeave = () => {
      panels.forEach((node) => {
        node.style.translate = '0 0';
      });
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className="systems-stack" ref={wrapRef}>
      {layers.map((layer, i) => (
        <div
          key={layer.key}
          className="systems-panel"
          data-depth={layer.depth}
          style={{ zIndex: i + 1, '--i': i, '--c': layer.color }}
        >
          <div className="window-bar">
            <span className="traffic" aria-hidden="true"><i /><i /><i /></span>
            <span className="window-title">{layer.title}</span>
          </div>
          <div className="window-body">
            <div className="systems-panel-head">
              <span className="status-badge">
                <span className="status-dot" /> {layer.label}
              </span>
            </div>
            {layer.rows.map((row) => (
              <div className="systems-row" key={row}>
                {row}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
