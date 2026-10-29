import outskillCertImg from '../assets/outskill-certificate.jpg';
import deloitteCertImg from '../assets/deloitte-data-analytics-certificate.jpg';
import bcgCertImg from '../assets/bcg-x-genai-certificate.jpg';
import tataCertImg from '../assets/tata-genai-analytics-certificate.jpg';

// Certificates with an image appear in the About carousel and open in its preview.
export const certificates = [
  {
    id: 'outskill-generative-ai-mastermind',
    title: 'Generative AI Mastermind',
    organisation: 'Outskill',
    issuer: 'Outskill',
    issuerDetail: 'Vaibhav Sisinty · Founder, Outskill',
    icon: 'sparkles',
    color: '#bf5af2',
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
    icon: 'magnifyingglass',
    color: '#30d158',
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
    icon: 'bubble.left',
    color: '#5e5ce6',
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
    icon: 'chart.bar',
    color: '#0a84ff',
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

// Earned, but no certificate image to preview.
export const otherCertifications = [
  { id: 'iide-digital-marketing-fundamentals', title: 'Digital Marketing Fundamentals', organisation: 'IIDE', icon: 'megaphone', color: '#ff375f' },
];

export const education = [
  { id: 'iisdt-advanced-diploma', title: 'Advanced Diploma, Software & Web Application Development', organisation: 'IISDT', period: 'Nov 2025 – Apr 2026', icon: 'chevron.left.forwardslash.chevron.right', color: '#0a84ff' },
  { id: 'bcom', title: 'Bachelor of Commerce (B.Com)', organisation: 'City College of Commerce & Business Administration, Kolkata', period: '2022 – 2025', icon: 'graduationcap', color: '#ff9f0a' },
];

// Opens a certificate in the About page carousel preview from anywhere on the page.
export const showCertificate = (id) => window.dispatchEvent(new CustomEvent('show-certificate', { detail: id }));
