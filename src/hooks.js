import { useEffect, useRef } from 'react';

const canHover = () =>
  window.matchMedia('(pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
  !document.documentElement.classList.contains('lite');

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

// One delegated pointer listener for two effects:
// - `[data-tilt]` cards lean toward the pointer (Apple TV parallax) and get a
//   specular highlight; `data-tilting` makes them track quickly while hovered.
// - `.glass` surfaces get a soft light that follows the pointer.
export function usePointerEffects() {
  useEffect(() => {
    if (!canHover()) return;
    let tilted = null;
    let lit = null;

    const leave = (el, attr) => {
      if (!el) return;
      el.removeAttribute(attr);
      if (attr === 'data-tilting') ['--rx', '--ry'].forEach((v) => el.style.removeProperty(v));
    };

    const onMove = (e) => {
      const tilt = e.target.closest?.('[data-tilt]') ?? null;
      const glass = e.target.closest?.('.glass') ?? null;
      if (tilt !== tilted) { leave(tilted, 'data-tilting'); tilted = tilt; }
      if (glass !== lit) { leave(lit, 'data-glow'); lit = glass; }

      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        tilt.setAttribute('data-tilting', '');
        tilt.style.setProperty('--rx', `${(0.5 - py) * 5}deg`);
        tilt.style.setProperty('--ry', `${(px - 0.5) * 5}deg`);
        tilt.style.setProperty('--gx', `${px * 100}%`);
        tilt.style.setProperty('--gy', `${py * 100}%`);
      }
      if (glass) {
        const r = glass.getBoundingClientRect();
        glass.setAttribute('data-glow', '');
        glass.style.setProperty('--gx', `${e.clientX - r.left}px`);
        glass.style.setProperty('--gy', `${e.clientY - r.top}px`);
      }
    };
    const onLeaveWindow = () => {
      leave(tilted, 'data-tilting');
      leave(lit, 'data-glow');
      tilted = lit = null;
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
export function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible');
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
