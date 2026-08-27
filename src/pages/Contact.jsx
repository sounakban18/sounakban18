import { useState } from 'react';
import Reveal from '../components/Reveal';
import { useMagnetic } from '../hooks';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const btnRef = useMagnetic(14);

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
    setStatus('sent');
  };

  return (
    <section className="section page-head-section">
      <div className="container contact-grid">
        <Reveal className="contact-copy">
          <span className="eyebrow">Contact</span>
          <h1 className="display-lg">Let&rsquo;s build something.</h1>
          <p className="body-lg">
            Open to design and frontend work, systems/tooling projects, or a
            conversation about how Morfiizo runs its two brands.
          </p>
          <div className="contact-channels">
            <a href="mailto:hello@example.com" className="contact-channel" data-cursor="view">
              <span className="caption">Email</span>
              <span className="body-sm">hello@example.com <em>— replace with your address</em></span>
            </a>
            <a href="#" className="contact-channel" data-cursor="view">
              <span className="caption">LinkedIn</span>
              <span className="body-sm">/in/your-handle <em>— add your link</em></span>
            </a>
            <a href="#" className="contact-channel" data-cursor="view">
              <span className="caption">Location</span>
              <span className="body-sm">Kolkata, West Bengal, IN</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={100} className="contact-form-wrap">
          <form className="contact-form card" onSubmit={onSubmit}>
            <label className="field">
              <span className="caption">Name</span>
              <input name="name" type="text" required placeholder="Your name" />
            </label>
            <label className="field">
              <span className="caption">Email</span>
              <input name="email" type="email" required placeholder="you@company.com" />
            </label>
            <label className="field">
              <span className="caption">Message</span>
              <textarea name="message" rows="5" required placeholder="What are you building?" />
            </label>
            <button ref={btnRef} type="submit" className="btn btn-primary" data-cursor="view">
              {status === 'sent' ? 'Opening your mail client…' : 'Send message'}
            </button>
            <p className="caption form-note">
              This opens your email client — swap in a form backend (e.g. Formspree) later if you want it handled in-page.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
