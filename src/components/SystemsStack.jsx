import { useEffect, useRef } from 'react';

const layers = [
  { key: 'design', label: 'Design', rows: ['Interface systems', 'Figma · UI/UX'], depth: 18 },
  { key: 'frontend', label: 'Frontend', rows: ['HTML · CSS · React', 'Components · Responsive'], depth: 34 },
  { key: 'problems', label: 'Business problems', rows: ['Workflows · coordination', 'Practical execution'], depth: 52 },
];

export default function SystemsStack() {
  const wrapRef = useRef(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const isFine = window.matchMedia('(pointer: fine)').matches;
    if (!isFine) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      el.querySelectorAll('[data-depth]').forEach((node) => {
        const depth = Number(node.dataset.depth);
        node.style.transform = `translate3d(${px * depth}px, ${py * depth}px, 0)`;
      });
    };
    const onLeave = () => {
      el.querySelectorAll('[data-depth]').forEach((node) => {
        node.style.transform = 'translate3d(0, 0, 0)';
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
          style={{ zIndex: i + 1, '--i': i }}
        >
          <div className="systems-panel-head">
            <span className="status-badge">
              <span className="status-dot" /> {layer.label}
            </span>
          </div>
          {layer.rows.map((row) => (
            <div className="systems-row mono" key={row}>
              {row}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
