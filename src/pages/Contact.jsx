import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) errors.name = 'Your name is required';
    
    if (!formData.email.trim()) errors.email = 'Email address is required';
    else if (!emailRegex.test(formData.email)) errors.email = 'Please enter a valid email address';
    
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    
    if (!formData.message.trim()) errors.message = 'Message text is required';
    else if (formData.message.length < 10) errors.message = 'Message must be at least 10 characters';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate network submission (1.5 seconds)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="container section fade-in">
      <div className="section-header">
        <span className="section-subtitle">Get In Touch</span>
        <h2 className="section-title">Start a Campaign Conversation</h2>
        <p className="section-desc">
          Ready to run audit checks on your Google Ads keyword bidding or build a responsive landing page? Contact me below to schedule a review.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left Side: Contact Information Panel */}
        <div className="contact-info-panel">
          <div>
            <h3 className="contact-card-title">Contact Channels</h3>
            <p className="contact-card-desc" style={{ marginBottom: '24px' }}>
              Feel free to reach out directly through direct phone, email, or connect via professional social media networks.
            </p>

            <div className="contact-methods">
              <div className="contact-method-item">
                <div className="contact-icon-box">
                  <Phone size={20} />
                </div>
                <div className="contact-method-details">
                  <h4>Phone Number</h4>
                  <p>
                    <a href="tel:+918095283531" style={{ color: 'inherit' }}>
                      +91 8095283531
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="contact-icon-box">
                  <Mail size={20} />
                </div>
                <div className="contact-method-details">
                  <h4>Email Address</h4>
                  <p>
                    <a href="mailto:akhilkamble05@gmail.com" style={{ color: 'inherit' }}>
                      akhilkamble05@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="contact-method-item">
                <div className="contact-icon-box">
                  <MapPin size={20} />
                </div>
                <div className="contact-method-details">
                  <h4>Primary Base</h4>
                  <p>Mysuru, Karnataka, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links Panel */}
          <div className="social-links-panel">
            <h4 className="social-links-title">Professional Networks</h4>
            <div className="social-links-row">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link-btn" aria-label="LinkedIn Profile">
                <LinkedinIcon size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link-btn" aria-label="Twitter Profile">
                <TwitterIcon size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link-btn" aria-label="GitHub Profile">
                <GithubIcon size={20} />
              </a>
            </div>
          </div>

          {/* Mock Interactive Map Frame */}
          <div className="contact-map-card">
            <div className="contact-mock-map">
              <MapPin size={36} />
              <div className="contact-map-label">Mysuru Region Center</div>
              <span style={{ fontSize: '11px', color: 'var(--text-dark)' }}>
                [ Custom Interactive Map Mockup ]
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Form */}
        <div className="glass-card" style={{ height: 'fit-content' }}>
          <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>Send a Message</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '32px' }}>
            Fill out the details below, and I will get back to you within 24 business hours.
          </p>

          {submitSuccess ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }} className="fade-in">
              <CheckCircle size={64} style={{ color: 'var(--accent)', marginBottom: '20px' }} />
              <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>Thank You!</h3>
              <p style={{ color: 'var(--text-light)', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px' }}>
                Your message has been successfully received. I will review your request and reach out shortly.
              </p>
              <button className="btn btn-secondary" onClick={() => setSubmitSuccess(false)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label className="form-label" htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="e.g. Vikram Sen"
                />
                {formErrors.name && <span style={{ color: 'var(--primary)', fontSize: '11px', marginTop: '4px' }}>{formErrors.name}</span>}
              </div>

              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label className="form-label" htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="e.g. name@company.com"
                />
                {formErrors.email && <span style={{ color: 'var(--primary)', fontSize: '11px', marginTop: '4px' }}>{formErrors.email}</span>}
              </div>

              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label className="form-label" htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="e.g. PPC Campaign Setup"
                />
                {formErrors.subject && <span style={{ color: 'var(--primary)', fontSize: '11px', marginTop: '4px' }}>{formErrors.subject}</span>}
              </div>

              <div className="form-group" style={{ marginBottom: '24px' }}>
                <label className="form-label" htmlFor="message">Message Text *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  style={{ minHeight: '150px' }}
                  placeholder="Describe your current marketing challenges or web development requirements..."
                />
                {formErrors.message && <span style={{ color: 'var(--primary)', fontSize: '11px', marginTop: '4px' }}>{formErrors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending Message...'
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
