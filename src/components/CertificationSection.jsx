import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import Icon from './Icon';
import { certificates } from '../data/certificates';

function CertificateCard({
  certificate,
  position,
  isActive,
  isVisible,
  onSelect,
  onPreview,
}) {
  return (
    <article
      className={`cert-card cert-slide cert-slide--${position}`}
      aria-hidden={!isVisible}
      inert={!isVisible}
      role={!isActive && isVisible ? 'group' : undefined}
      tabIndex={!isActive && isVisible ? 0 : undefined}
      aria-label={!isActive && isVisible ? `${certificate.title}. Press Enter or Space to centre this certificate.` : undefined}
      onClick={!isActive && isVisible ? onSelect : undefined}
      onKeyDown={!isActive && isVisible ? (event) => {
        if (event.target === event.currentTarget && (event.key === 'Enter' || event.key === ' ')) {
          event.preventDefault();
          onSelect();
        }
      } : undefined}
    >
      <div className="cert-media-frame">
        <img
          src={certificate.image}
          alt={certificate.alt}
          className="cert-thumbnail"
          loading={isActive ? 'eager' : 'lazy'}
          draggable="false"
        />
      </div>

      <div className="cert-card-content">
        <div className="cert-tag-row">
          <span className="cert-provider-tag mono">{certificate.organisation}</span>
          <span className="cert-issuer mono">Issued by {certificate.issuer}</span>
        </div>

        <h3 className="cert-title">{certificate.title}</h3>
        {certificate.completionDate ? (
          <time className="cert-date body-sm" dateTime={certificate.dateTime}>
            {certificate.completionDate}
          </time>
        ) : (
          <p className="cert-date body-sm">Completion date not shown on certificate</p>
        )}
        <p className="cert-desc body-sm">{certificate.summary || certificate.tasks.join(' · ')}</p>

        <button
          type="button"
          className="btn btn-secondary cert-preview-button"
          aria-haspopup="dialog"
          aria-label={`Preview certificate: ${certificate.title} from ${certificate.organisation}`}
          onClick={(event) => {
            event.stopPropagation();
            onPreview(event.currentTarget);
          }}
          tabIndex={isVisible ? 0 : -1}
        >
          Preview certificate
          <Icon name="arrow.up.right" />
        </button>
      </div>
    </article>
  );
}

export default function CertificationSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isClosingPreview, setIsClosingPreview] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [canAutoplayWhileFocused, setCanAutoplayWhileFocused] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isPageVisible, setIsPageVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sectionRef = useRef(null);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);
  const touchStartRef = useRef(null);
  const modalCloseTimerRef = useRef(null);
  const isAutoplayPaused = isPaused
    || isHovered
    || (isFocused && !canAutoplayWhileFocused)
    || Boolean(selectedCertificate)
    || !isInView
    || !isPageVisible
    || prefersReducedMotion;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting && entry.intersectionRatio >= 0.15);
    }, { threshold: [0, 0.15] });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateVisibility = () => setIsPageVisible(document.visibilityState === 'visible');
    updateVisibility();
    document.addEventListener('visibilitychange', updateVisibility);
    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);
    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (isAutoplayPaused) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % certificates.length);
    }, 4600);
    return () => window.clearInterval(timer);
  }, [isAutoplayPaused]);

  // Credentials elsewhere on the page call showCertificate(id) to open one here.
  useEffect(() => {
    const onShow = (event) => {
      const index = certificates.findIndex((c) => c.id === event.detail);
      if (index < 0) return;
      setIsPaused(true);
      setActiveIndex(index);
      triggerRef.current = document.activeElement;
      setSelectedCertificate(certificates[index]);
    };
    window.addEventListener('show-certificate', onShow);
    return () => window.removeEventListener('show-certificate', onShow);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!selectedCertificate || !dialog) return undefined;

    const previousOverflow = document.body.style.overflow;
    setIsClosingPreview(false);
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    return () => {
      if (modalCloseTimerRef.current !== null) {
        window.clearTimeout(modalCloseTimerRef.current);
        modalCloseTimerRef.current = null;
      }
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
      triggerRef.current?.focus();
    };
  }, [selectedCertificate]);

  const pauseForInteraction = () => {
    setIsPaused(true);
    setCanAutoplayWhileFocused(false);
  };

  const navigate = (direction) => {
    pauseForInteraction();
    setActiveIndex((current) => (current + direction + certificates.length) % certificates.length);
  };

  const selectCertificate = (index) => {
    pauseForInteraction();
    setActiveIndex(index);
  };

  const closePreview = () => {
    if (!dialogRef.current?.open || modalCloseTimerRef.current !== null) return;
    setIsClosingPreview(true);
    modalCloseTimerRef.current = window.setTimeout(() => {
      dialogRef.current?.close();
      modalCloseTimerRef.current = null;
      setSelectedCertificate(null);
    }, 160);
  };

  const previousCertificate = certificates[(activeIndex - 1 + certificates.length) % certificates.length];
  const nextCertificate = certificates[(activeIndex + 1) % certificates.length];

  return (
    <section className="section certification-section" id="certifications" ref={sectionRef}>
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Certifications</span>
          <h2 className="display-md">Learning that moves into practice.</h2>
          <p className="body-lg">
            Selected certifications that support my work across AI-assisted development, digital systems and practical product building.
          </p>
        </Reveal>

        <div
          className={`cert-carousel${prefersReducedMotion ? ' cert-carousel--reduced-motion' : ''}`}
          role="region"
          aria-roledescription="carousel"
          aria-label="Certificates"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocusCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsFocused(true);
              setCanAutoplayWhileFocused(false);
            }
          }}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setIsFocused(false);
              setCanAutoplayWhileFocused(false);
            } else {
              setCanAutoplayWhileFocused(false);
            }
          }}
          onKeyDown={(event) => {
            if (event.key === 'ArrowLeft') {
              event.preventDefault();
              navigate(-1);
            } else if (event.key === 'ArrowRight') {
              event.preventDefault();
              navigate(1);
            }
          }}
          onPointerDown={(event) => {
            if (event.pointerType === 'touch') {
              touchStartRef.current = { x: event.clientX, y: event.clientY };
            }
          }}
          onPointerUp={(event) => {
            const start = touchStartRef.current;
            touchStartRef.current = null;
            if (!start || Math.abs(event.clientX - start.x) < 45) return;
            if (Math.abs(event.clientX - start.x) > Math.abs(event.clientY - start.y)) {
              navigate(event.clientX < start.x ? 1 : -1);
            }
          }}
          onPointerCancel={() => {
            touchStartRef.current = null;
          }}
        >
          <div className="cert-carousel-stage" aria-live="off">
            {certificates.map((certificate, index) => {
              const distance = (index - activeIndex + certificates.length) % certificates.length;
              const offset = distance > certificates.length / 2 ? distance - certificates.length : distance;
              const isActive = offset === 0;
              const isVisible = Math.abs(offset) <= 1;
              const position = isActive
                ? 'active'
                : !isVisible
                  ? 'hidden'
                  : offset < 0
                    ? 'previous'
                    : 'next';

              return (
                <div
                  className={`cert-slide-slot cert-slide-slot--${position}`}
                  key={certificate.id}
                  style={{ '--slide-offset': offset }}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <CertificateCard
                    certificate={certificate}
                    position={position}
                    isActive={isActive}
                    isVisible={isVisible}
                    onSelect={() => selectCertificate(index)}
                    onPreview={(trigger) => {
                      triggerRef.current = trigger;
                      setSelectedCertificate(certificate);
                    }}
                  />
                </div>
              );
            })}
          </div>

          <div className="cert-carousel-controls" role="group" aria-label="Certificate carousel controls">
            <button
              type="button"
              className="cert-carousel-button"
              aria-label={`Previous certificate: ${previousCertificate.title}`}
              onClick={() => navigate(-1)}
            >
              <Icon name="chevron.left" />
            </button>
            <span
              className="cert-carousel-count"
              aria-live={isAutoplayPaused ? 'polite' : 'off'}
              aria-label={`Certificate ${activeIndex + 1} of ${certificates.length}`}
            >
              {String(activeIndex + 1).padStart(2, '0')}
              <span aria-hidden="true"> / </span>
              {String(certificates.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              className="cert-carousel-button"
              aria-label={`Next certificate: ${nextCertificate.title}`}
              onClick={() => navigate(1)}
            >
              <Icon name="chevron.right" />
            </button>
            <span className="cert-carousel-control-divider" aria-hidden="true" />
            <button
              type="button"
              className="cert-carousel-toggle"
              aria-label={
                prefersReducedMotion
                  ? 'Automatic rotation disabled by reduced-motion preference'
                  : isPaused
                    ? 'Resume automatic certificate rotation'
                    : 'Pause automatic certificate rotation'
              }
              aria-pressed={isPaused}
              onClick={() => {
                setIsPaused((paused) => !paused);
                setCanAutoplayWhileFocused(isPaused);
              }}
              disabled={prefersReducedMotion}
            >
              <Icon name={isPaused ? 'play.fill' : 'pause.fill'} />
              <span>{prefersReducedMotion ? 'Auto off' : isPaused ? 'Resume' : 'Pause'}</span>
            </button>
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className={`cert-modal-dialog${isClosingPreview ? ' cert-modal-dialog--closing' : ''}`}
        aria-labelledby="cert-modal-heading"
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            event.preventDefault();
            closePreview();
          }
        }}
        onCancel={(event) => {
          event.preventDefault();
          closePreview();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closePreview();
        }}
      >
        {selectedCertificate && (
          <div className={`cert-modal-surface${isClosingPreview ? ' cert-modal-surface--closing' : ''}`}>
            <div className="cert-modal-bar">
              <div>
                <span className="eyebrow">{selectedCertificate.organisation} · {selectedCertificate.issuer}</span>
                <h2 className="cert-modal-heading" id="cert-modal-heading">
                  {selectedCertificate.title}
                </h2>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                className="cert-modal-close"
                onClick={closePreview}
                aria-label="Close certificate preview"
              >
                <Icon name="xmark" />
              </button>
            </div>

            <div className="cert-modal-body">
              <div className="cert-modal-image-wrap">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.alt}
                  className="cert-modal-image"
                  loading="eager"
                />
              </div>
              <div className="cert-modal-details">
                <p className="body-sm">
                  <strong>{selectedCertificate.organisation}</strong>
                  {' · Issued by '}
                  <strong>{selectedCertificate.issuerDetail || selectedCertificate.issuer}</strong>
                  {selectedCertificate.completionDate && ` · ${selectedCertificate.completionDate}`}
                </p>
                {selectedCertificate.details?.map((detail) => (
                  <p className="body-sm" key={detail}>{detail}</p>
                ))}
                {selectedCertificate.tasks && (
                  <>
                    <p className="caption">Practical tasks</p>
                    <ul className="cert-task-list">
                      {selectedCertificate.tasks.map((task) => <li className="body-sm" key={task}>{task}</li>)}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
