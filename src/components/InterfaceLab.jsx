import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

const states = {
  discover: {
    label: 'Discover',
    title: 'Find the signal before the surface.',
    body: 'Start with the person, the constraint, and the business question behind the brief.',
    chips: ['User need', 'Market context', 'Content model'],
    progress: 28,
    accent: 'signal',
  },
  design: {
    label: 'Design',
    title: 'Make the next decision obvious.',
    body: 'Turn the signal into a system: hierarchy, interaction, and a visual language that can hold up in use.',
    chips: ['Flow', 'Hierarchy', 'Components'],
    progress: 64,
    accent: 'structure',
  },
  ship: {
    label: 'Ship',
    title: 'Carry the idea into the real world.',
    body: 'Build, test, and coordinate the details that let a good experience survive beyond the presentation.',
    chips: ['Frontend', 'Responsive QA', 'Iteration'],
    progress: 92,
    accent: 'launch',
  },
};
const keys = Object.keys(states);

// Counts the ring readout from its last value to the new one.
function useCountTo(target) {
  const [value, setValue] = useState(target);
  const from = useRef(target);

  useEffect(() => {
    const start = performance.now();
    const origin = from.current;
    let raf;
    const tick = (now) => {
      const t = Math.min((now - start) / 700, 1);
      const v = Math.round(origin + (target - origin) * (1 - Math.pow(1 - t, 3)));
      from.current = v;
      setValue(v);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);

  return value;
}

export default function InterfaceLab() {
  const [active, setActive] = useState('design');
  const current = states[active];
  const index = keys.indexOf(active);
  const count = useCountTo(current.progress);

  return (
    <section className="section interface-lab">
      <div className="container">
        <div className="interface-lab-head">
          <Reveal>
            <span className="eyebrow">Interface lab</span>
            <h2 className="display-md">A design process you can move through.</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="body-lg">A small working model of how I connect business context to a shipped digital experience.</p>
          </Reveal>
        </div>

        <Reveal delay={140} className="lab-shell">
          <div className="window-bar">
            <span className="traffic" aria-hidden="true"><i /><i /><i /></span>
            <span className="window-title">Process — {current.label}</span>
          </div>

          <div className="lab-nav" role="tablist" aria-label="Design process stages" style={{ '--idx': index }}>
            <span className="lab-nav-thumb" aria-hidden="true" />
            {keys.map((key, i) => (
              <button
                type="button"
                role="tab"
                aria-selected={active === key}
                className={`lab-nav-item${active === key ? ' active' : ''}`}
                key={key}
                onClick={() => setActive(key)}
              >
                <span className="lab-nav-index">{i + 1}</span>
                <span className="lab-nav-label">{states[key].label}</span>
              </button>
            ))}
          </div>

          <div className={`lab-content lab-${current.accent}`} role="tabpanel">
            <div className="lab-content-inner">
              <div className="lab-content-top">
                <span className="status-badge"><span className="status-dot" /> Live state</span>
                <span className="caption">Stage {index + 1} of {keys.length}</span>
              </div>
              <div className="lab-content-grid">
                <div className="lab-content-copy" key={active}>
                  <span className="caption">{current.label}</span>
                  <h3 className="headline">{current.title}</h3>
                  <p className="body-lg">{current.body}</p>
                  <div className="lab-chips">
                    {current.chips.map((chip) => <span className="skill-pill" key={chip}>{chip}</span>)}
                  </div>
                </div>
                <div className="lab-ring" aria-hidden="true">
                  <svg viewBox="0 0 120 120">
                    <defs>
                      <linearGradient id="labRingGrad" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" />
                        <stop offset="100%" />
                      </linearGradient>
                    </defs>
                    <circle className="lab-ring-track" cx="60" cy="60" r="50" pathLength="100" />
                    <circle className="lab-ring-value" cx="60" cy="60" r="50" pathLength="100" style={{ strokeDashoffset: 100 - current.progress }} />
                  </svg>
                  <div className="lab-ring-label">
                    <strong>{count}%</strong>
                    <span>considered</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
