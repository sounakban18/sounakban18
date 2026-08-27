import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer hairline-top">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="nav-logo-mark">SB</span>
          <p className="body-sm">
            Sounak Banerjee — UI/UX design &amp; frontend build, Kolkata.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <p className="caption">Site</p>
            <Link to="/projects" className="footer-link">Projects</Link>
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>
          <div>
            <p className="caption">Elsewhere</p>
            <a className="footer-link" href="mailto:hello@example.com">Email</a>
            <a className="footer-link" href="#" data-cursor="view">LinkedIn</a>
            <a className="footer-link" href="#" data-cursor="view">Dribbble</a>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="caption footer-note">© {new Date().getFullYear()} Sounak Banerjee. Built by hand, not templated.</p>
      </div>
    </footer>
  );
}
