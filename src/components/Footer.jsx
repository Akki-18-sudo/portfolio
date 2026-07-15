import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const LinkedinIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const GithubIcon = ({ size = 20 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'var(--bg-darker)', borderTop: '1px solid var(--border-color)', padding: '56px 24px 24px 24px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr 1fr', gap: '48px', marginBottom: '40px' }}>
        {/* Bio column */}
        <div>
          <div className="logo-container" style={{ marginBottom: '16px' }}>
            <span className="logo-text">AKHIL A K</span>
            <span className="logo-dot"></span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px', maxWidth: '340px' }}>
            Digital Marketing Advisory Associate. Specializing in Marketing Operations, campaign management, and analytics reporting, backed by software engineering foundations.
          </p>
          <div className="social-links-row">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link-btn" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link-btn" aria-label="Twitter">
              <TwitterIcon size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link-btn" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 style={{ fontSize: '15px', color: 'var(--text-white)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '20px' }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
            <li><Link to="/" style={{ color: 'var(--text-muted)' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>Home</Link></li>
            <li><Link to="/about" style={{ color: 'var(--text-muted)' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>About Me</Link></li>
            <li><Link to="/services" style={{ color: 'var(--text-muted)' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>Services</Link></li>
            <li><Link to="/portfolio" style={{ color: 'var(--text-muted)' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>Portfolio</Link></li>
            <li><Link to="/gallery" style={{ color: 'var(--text-muted)' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>Creative Gallery</Link></li>
            <li><Link to="/videos" style={{ color: 'var(--text-muted)' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>Video Gallery</Link></li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h4 style={{ fontSize: '15px', color: 'var(--text-white)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '20px' }}>
            Contact Info
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <MapPin size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
              <span style={{ color: 'var(--text-light)' }}>Mysuru, Karnataka, India</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Phone size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
              <a href="tel:+918095283531" style={{ color: 'var(--text-light)' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-light)'}>
                +91 8095283531
              </a>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Mail size={18} style={{ color: 'var(--primary)', flexShrink: 0 }} />
              <a href="mailto:akhilkamble05@gmail.com" style={{ color: 'var(--text-light)' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-light)'}>
                akhilkamble05@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container" style={{ borderTop: '1px solid var(--border-color)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', fontSize: '13px', color: 'var(--text-dark)' }}>
        <p>&copy; {currentYear} Akhil A K. All rights reserved.</p>
        <p>Built with React.js</p>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          footer .container {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}} />
    </footer>
  );
};

export default Footer;
