import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';
import outskillCertImg from '../assets/outskill-certificate.png';
import deloitteCertImg from '../assets/deloitte-data-analytics-certificate.png';
import bcgCertImg from '../assets/bcg-x-genai-certificate.png';
import tataCertImg from '../assets/tata-genai-analytics-certificate.png';

const certificates = [
  {
    id: 'outskill-generative-ai-mastermind',
    title: 'Generative AI Mastermind',
    organisation: 'Outskill',
    issuer: 'Outskill',
    issuerDetail: 'Vaibhav Sisinty · Founder, Outskill',
    image: outskillCertImg,
    alt: 'Generative AI Mastermind certificate of completion awarded to Sounak Banerjee by Outskill',
    summary: 'Generative AI tools · Prompt engineering · Agentic workflows',
    details: [
      'Advanced programme covering generative AI tools, prompt engineering, agentic workflows, and practical applications in digital design, automation, and modern web product development.',
      'Focus: Prompt Engineering · Workflow Automation',
    ],
  },
  {
    id: 'deloitte-data-analytics-job-simulation',
    title: 'Data Analytics Job Simulation',
    organisation: 'Deloitte',
    issuer: 'Forage',
    completionDate: 'September 23, 2026',
    dateTime: '2026-09-23',
    image: deloitteCertImg,
    alt: 'Deloitte Data Analytics Job Simulation certificate of completion awarded to Sounak Banerjee through Forage',
    summary: 'Data analysis · Forensic technology',
    tasks: ['Data analysis', 'Forensic technology'],
  },
  {
    id: 'bcg-x-genai-job-simulation',
    title: 'GenAI Job Simulation',
    organisation: 'BCG X',
    issuer: 'Forage',
    completionDate: 'September 24, 2026',
    dateTime: '2026-09-24',
    image: bcgCertImg,
    alt: 'BCG X GenAI Job Simulation certificate of completion awarded to Sounak Banerjee through Forage',
    summary: 'Data analysis · AI-powered financial chatbot',
    tasks: ['Data extraction and initial analysis', 'Developing an AI-powered financial chatbot'],
  },
  {
    id: 'tata-genai-powered-data-analytics-job-simulation',
    title: 'GenAI Powered Data Analytics Job Simulation',
    organisation: 'Tata',
    issuer: 'Forage',
    completionDate: 'October 12, 2026',
    dateTime: '2026-10-12',
    image: tataCertImg,
    alt: 'Tata GenAI Powered Data Analytics Job Simulation certificate of completion awarded to Sounak Banerjee through Forage',
    summary: 'Data analytics · AI-assisted risk and collections strategy',
    tasks: [
      'Exploratory data analysis and risk profiling',
      'Predicting delinquency with AI',
      'Business reporting and data storytelling for collections strategy',
      'Implementing an AI-driven collections strategy',
    ],
  },
];

export default function CertificationSection() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!selectedCertificate || !dialog) return undefined;

    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
      triggerRef.current?.focus();
    };
  }, [selectedCertificate]);

  const closePreview = () => {
    if (dialogRef.current?.open) dialogRef.current.close();
    setSelectedCertificate(null);
  };

  return (
    <section className="section certification-section" id="certifications">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">CERTIFICATIONS</span>
          <h2 className="display-md">Learning that moves into practice.</h2>
          <p className="body-lg">
            Selected certifications that support my work across AI-assisted development, digital systems and practical product building.
          </p>
        </Reveal>

        <div className="cert-gallery">
          {certificates.map((certificate, index) => (
            <Reveal
              key={certificate.id}
              delay={Math.min(index * 70, 210)}
              className="cert-gallery-item"
            >
              <article className="cert-card">
                <div className="cert-media-frame">
                  <img
                    src={certificate.image}
                    alt={certificate.alt}
                    className="cert-thumbnail"
                    loading="lazy"
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
                      triggerRef.current = event.currentTarget;
                      setSelectedCertificate(certificate);
                    }}
                  >
                    Preview Certificate
                    <span aria-hidden="true">↗</span>
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <dialog
        ref={dialogRef}
        className="cert-modal-dialog"
        aria-labelledby="cert-modal-heading"
        onCancel={(event) => {
          event.preventDefault();
          closePreview();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closePreview();
        }}
      >
        {selectedCertificate && (
          <div className="cert-modal-surface">
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
                <span aria-hidden="true">✕</span>
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
