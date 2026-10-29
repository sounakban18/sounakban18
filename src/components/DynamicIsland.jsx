import { useEffect, useState } from 'react';
import photo from '../assets/sounak.jpg';

// A Dynamic Island–style Live Activity: expands once after load to show
// availability, then settles back into a compact pill. Tap to toggle.
export default function DynamicIsland() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const expand = setTimeout(() => setOpen(true), 1600);
    const collapse = setTimeout(() => setOpen(false), 6000);
    return () => {
      clearTimeout(expand);
      clearTimeout(collapse);
    };
  }, []);

  const wave = <span className="island-wave" aria-hidden="true"><i /><i /><i /><i /></span>;

  return (
    <button type="button" className="island" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
      <span className="island-compact" aria-hidden={open}>
        <span className="status-dot" />
        <span className="island-text">Available for work</span>
        {wave}
      </span>
      <span className="island-full" aria-hidden={!open}>
        <img className="island-avatar" src={photo} alt="" />
        <span className="island-lines">
          <strong>Open to new projects</strong>
          <span>Frontend &amp; UI/UX, Kolkata, IN</span>
        </span>
        {wave}
      </span>
    </button>
  );
}
