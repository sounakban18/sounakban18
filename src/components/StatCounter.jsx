import { useEffect, useRef, useState } from 'react';

export default function StatCounter({ value, suffix = '', label, duration = 1200, className, valueClassName }) {
  const [display, setDisplay] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? value : 0
  );
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  return (
    <div className={`stat ${className || ''}`} ref={ref}>
      <div className={`stat-value display-md ${valueClassName || ''}`}>
        {display}
        {suffix}
      </div>
      {label && <div className="caption">{label}</div>}
    </div>
  );
}
