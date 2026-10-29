import { useEffect, useRef } from 'react';

const canHover = () =>
  window.matchMedia('(pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Pulls the element slightly toward the cursor within its bounds — used on
// buttons and nav links to give the interface a tactile, responsive feel.
// Uses the `translate` property so it composes with the press `scale`.
export function useMagnetic(strength = 18) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !canHover()) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      el.style.translate = `${x / strength}px ${y / strength}px`;
    };
    const onLeave = () => {
      el.style.translate = '0 0';
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [strength]);

  return ref;
}

// Apple TV-style parallax for any `[data-tilt]` element: one delegated
// listener writes the tilt angles and specular-highlight position as CSS vars.
export function usePointerTilt() {
  useEffect(() => {
    if (!canHover()) return;
    let current = null;
    const reset = (el) => ['--rx', '--ry', '--gx', '--gy'].forEach((v) => el.style.removeProperty(v));

    const onMove = (e) => {
      const el = e.target.closest?.('[data-tilt]') ?? null;
      if (el !== current) {
        if (current) reset(current);
        current = el;
      }
      if (!el) return;
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      el.style.setProperty('--rx', `${(0.5 - py) * 5}deg`);
      el.style.setProperty('--ry', `${(px - 0.5) * 5}deg`);
      el.style.setProperty('--gx', `${px * 100}%`);
      el.style.setProperty('--gy', `${py * 100}%`);
    };
    const onLeaveWindow = () => {
      if (current) reset(current);
      current = null;
    };

    document.addEventListener('pointermove', onMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onLeaveWindow);
    return () => {
      document.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeaveWindow);
    };
  }, []);
}

// IntersectionObserver-driven reveal — adds `.is-visible` once an element
// enters the viewport, used for scroll-triggered fade/slide-ins.
export function useReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      el.classList.add('is-visible');
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}
