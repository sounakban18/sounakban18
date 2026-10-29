import { useState } from 'react';
import Reveal from '../components/Reveal';
import Icon from '../components/Icon';
import { useMagnetic } from '../hooks';

const channels = [
  { label: 'Email', value: 'itssounakbanerjee@gmail.com', href: 'mailto:itssounakbanerjee@gmail.com', icon: 'envelope', color: '#0a84ff' },
  { label: 'Phone', value: '+91 90071 14605', href: 'tel:+919007114605', icon: 'phone', color: '#30d158' },
  { label: 'LinkedIn', value: '/in/sounak-banerjee-a5292b183', href: 'https://linkedin.com/in/sounak-banerjee-a5292b183/', external: true, icon: 'link', color: '#0a66c2' },
  { label: 'Location', value: 'Kolkata, West Bengal, IN', icon: 'mappin', color: '#ff453a' },
];

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const btnRef = useMagnetic(14);

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get('name') ?? '');
    const email = String(formData.get('email') ?? '');
    const message = String(formData.get('message') ?? '');
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:itssounakbanerjee@gmail.com?subject=${subject}&body=${body}`;
    setStatus('sent');
  };

  return (
    <section className="section page-head-section">
      <div className="container contact-grid">
        <Reveal className="contact-copy">
          <span className="eyebrow">Contact</span>
          <h1 className="display-lg">Let&rsquo;s build something useful.</h1>
          <p className="body-lg">
            Open to frontend design and UI/UX work — especially where the
            brief goes beyond the screen into brand, product, or business context.
          </p>
          <ul className="contact-channels">
            {channels.map((c) => {
              const body = (
                <>
                  <span className="icon-tile" style={{ '--c': c.color }}><Icon name={c.icon} /></span>
                  <span className="contact-channel-text">
                    <span className="caption">{c.label}</span>
                    <span className="body-sm">{c.value}</span>
                  </span>
                </>
              );
              return (
                <li key={c.label}>
                  {c.href
                    ? <a href={c.href} className="contact-channel" {...(c.external && { target: '_blank', rel: 'noreferrer' })}>{body}</a>
                    : <div className="contact-channel">{body}</div>}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={100} className="contact-form-wrap">
          <form className="contact-form card" onSubmit={onSubmit}>
            <label className="field">
              <span className="caption">Name</span>
              <input name="name" type="text" autoComplete="name" required placeholder="Your name" />
            </label>
            <label className="field">
              <span className="caption">Email</span>
              <input name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
            </label>
            <label className="field">
              <span className="caption">Message</span>
              <textarea name="message" rows="5" required placeholder="What are you building?" />
            </label>
            <button ref={btnRef} type="submit" className="btn btn-primary">
              {status === 'sent' ? 'Opening your mail client…' : 'Send message'}
            </button>
            <p className="caption form-note">
              This opens your email client at itssounakbanerjee@gmail.com.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
