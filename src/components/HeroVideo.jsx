import { useEffect, useRef, useState } from 'react';

/**
 * Ambient background loop for the hero.
 *
 * Drop your real clip in as:
 *   src/assets/hero-loop.mp4   (required)
 *   src/assets/hero-loop.webm  (optional, smaller/faster if you have it)
 *
 * Then pass them in:
 *   import heroMp4 from '../assets/hero-loop.mp4';
 *   <HeroVideo mp4={heroMp4} />
 *
 * When no clip is provided, this renders a soft animated atmosphere in the
 * same spot so the layout remains visually complete.
 */
export default function HeroVideo({ mp4, webm, poster }) {
  const videoRef = useRef(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (!mp4 && !webm) return;
    const el = videoRef.current;
    if (!el || reduced) return;
    el.play().catch(() => {
      /* autoplay can be blocked — silently fall back to the poster frame */
    });
  }, [mp4, webm, reduced]);

  const hasSource = Boolean(mp4 || webm);

  return (
    <div className="hero-video-wrap">
      {hasSource && !reduced ? (
        <video
          ref={videoRef}
          className="hero-video"
          muted
          loop
          playsInline
          autoPlay
          poster={poster}
          aria-hidden="true"
        >
          {webm && <source src={webm} type="video/webm" />}
          {mp4 && <source src={mp4} type="video/mp4" />}
        </video>
      ) : (
        <div className="hero-video-atmosphere" aria-hidden="true">
          <span className="hero-video-orb orb-a" />
          <span className="hero-video-orb orb-b" />
          <span className="hero-video-orb orb-c" />
        </div>
      )}
      <div className="hero-video-grain" />
      <div className="hero-video-overlay" />
    </div>
  );
}
