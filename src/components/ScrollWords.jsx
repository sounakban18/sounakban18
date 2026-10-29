import { useEffect, useRef } from 'react';

// Words brighten one after another as the paragraph scrolls through the
// viewport. Scroll progress lands in --p; each word's opacity is derived in CSS.
export default function ScrollWords({ text, className = '' }) {
  const ref = useRef(null);
  const words = text.split(' ');

  useEffect(() => {
    const el = ref.current;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.setProperty('--p', 1);
      return;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh * 0.8 - r.top) / (r.height + vh * 0.6);
      el.style.setProperty('--p', Math.min(Math.max(p, 0), 1).toFixed(3));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <p ref={ref} className={`scroll-words ${className}`} style={{ '--n': words.length }}>
      {words.map((word, i) => (
        <span key={i} style={{ '--i': i }}>{word} </span>
      ))}
    </p>
  );
}
