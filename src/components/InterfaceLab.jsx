import { useState } from 'react';
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

export default function InterfaceLab() {
  const [active, setActive] = useState('design');
  const current = states[active];

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
          <div className="lab-controls" role="tablist" aria-label="Design process stages">
            {Object.entries(states).map(([key, state]) => (
              <button
                type="button"
                role="tab"
                aria-selected={active === key}
                className={`lab-tab${active === key ? ' active' : ''}`}
                key={key}
                onClick={() => setActive(key)}
              >
                <span className="lab-tab-index">0{Object.keys(states).indexOf(key) + 1}</span>
                {state.label}
              </button>
            ))}
          </div>

          <div className={`lab-preview lab-${current.accent}`}>
            <div className="lab-preview-top">
              <span className="status-badge"><span className="status-dot" /> Live state</span>
              <span className="caption">{current.progress}% considered</span>
            </div>
            <div className="lab-preview-grid">
              <div className="lab-copy">
                <span className="caption">Stage / {current.label}</span>
                <h3 className="headline">{current.title}</h3>
                <p className="body-sm">{current.body}</p>
                <div className="lab-chips">
                  {current.chips.map((chip) => <span className="skill-pill mono" key={chip}>{chip}</span>)}
                </div>
              </div>
              <div className="lab-signal" aria-hidden="true">
                <div className="lab-orbit orbit-one" />
                <div className="lab-orbit orbit-two" />
                <div className="lab-orbit orbit-three" />
                <span className="lab-signal-core">{String(current.progress).padStart(2, '0')}</span>
              </div>
            </div>
            <div className="lab-progress" aria-hidden="true"><span style={{ width: `${current.progress}%` }} /></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
