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
          <div className="contact-channels">
            <a href="mailto:itssounakbanerjee@gmail.com" className="contact-channel" data-cursor="view">
              <span className="caption">Email</span>
              <span className="body-sm">itssounakbanerjee@gmail.com</span>
            </a>
            <a href="tel:+919007114605" className="contact-channel" data-cursor="view">
              <span className="caption">Phone</span>
              <span className="body-sm">+91 90071 14605</span>
            </a>
            <a
              href="https://linkedin.com/in/sounak-banerjee-a5292b183/"
              target="_blank"
              rel="noreferrer"
              className="contact-channel"
              data-cursor="view"
            >
              <span className="caption">LinkedIn</span>
              <span className="body-sm">/in/sounak-banerjee-a5292b183</span>
            </a>
            <a href="#" className="contact-channel">
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
              This opens your email client at itssounakbanerjee@gmail.com.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
