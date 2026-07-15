import React, { useState } from 'react';
import { Star, User, CheckCircle } from 'lucide-react';
import { testimonials as initialTestimonials } from '../data/testimonials';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    quote: '',
    rating: 5
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

  const handleRatingChange = (rating) => {
    setFormData((prev) => ({
      ...prev,
      rating: rating
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.role.trim()) errors.role = 'Role / Designation is required';
    if (!formData.company.trim()) errors.company = 'Company is required';
    if (!formData.quote.trim()) errors.quote = 'Feedback text is required';
    else if (formData.quote.length < 15) errors.quote = 'Feedback must be at least 15 characters';
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate network latency (1.5 seconds)
    setTimeout(() => {
      const newTestimonial = {
        id: testimonials.length + 1,
        name: formData.name,
        role: formData.role,
        company: formData.company,
        rating: formData.rating,
        avatar: 'client-custom.svg',
        quote: formData.quote
      };

      // Add to local state (prepending so it displays first)
      setTestimonials([newTestimonial, ...testimonials]);
      
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form
      setFormData({
        name: '',
        role: '',
        company: '',
        quote: '',
        rating: 5
      });

      // Clear success notification after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="container section fade-in">
      <div className="section-header">
        <span className="section-subtitle">Reviews</span>
        <h2 className="section-title">Client Endorsements</h2>
        <p className="section-desc">
          Review feedback from companies and agency team partners regarding campaign execution, tracking metrics, and frontend UI results.
        </p>
      </div>

      {/* Grid of Testimonials */}
      <div className="grid-2 mb-48">
        {testimonials.map((test) => (
          <div key={test.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {/* Rating */}
            <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  fill={i < test.rating ? 'currentColor' : 'none'} 
                  color={i < test.rating ? '#fbbf24' : 'var(--text-dark)'} 
                />
              ))}
            </div>

            {/* Quote */}
            <p style={{ color: 'var(--text-white)', fontSize: '15px', fontStyle: 'italic', marginBottom: '24px', lineHeight: '1.6', flexGrow: 1 }}>
              "{test.quote}"
            </p>

            {/* Author Profile */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
              <div className="testimonial-avatar" style={{ width: '44px', height: '44px' }}>
                <User size={20} />
              </div>
              <div>
                <h4 style={{ color: 'var(--text-white)', fontSize: '15px', fontWeight: 700 }}>{test.name}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '12px' }}>
                  {test.role}, {test.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dynamic Feedback Form */}
      <div className="glass-card testimonials-form-card">
        <h3 className="form-title">Leave a Review</h3>
        <p className="form-subtitle">Have we collaborated on a campaign or development project? Submit your feedback below.</p>

        {submitSuccess && (
          <div className="submit-success-alert">
            <CheckCircle size={20} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
            Your review was successfully submitted and added to the testimonials dashboard!
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <label className="form-label" htmlFor="name">Your Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
                placeholder="e.g. Vikram Sen"
              />
              {formErrors.name && <span style={{ color: 'var(--primary)', fontSize: '11px' }}>{formErrors.name}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="role">Designation / Role *</label>
              <input
                type="text"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="form-input"
                placeholder="e.g. Product Lead"
              />
              {formErrors.role && <span style={{ color: 'var(--primary)', fontSize: '11px' }}>{formErrors.role}</span>}
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="company">Company / Organization *</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="form-input"
                placeholder="e.g. Navabharath Tech"
              />
              {formErrors.company && <span style={{ color: 'var(--primary)', fontSize: '11px' }}>{formErrors.company}</span>}
            </div>

            {/* Rating Stars Selection */}
            <div className="form-group">
              <label className="form-label">Campaign Rating</label>
              <div className="rating-select-container">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={`rating-star-btn ${formData.rating >= star ? 'active' : ''}`}
                    onClick={() => handleRatingChange(star)}
                    aria-label={`Rate ${star} Stars`}
                  >
                    <Star size={24} fill={formData.rating >= star ? 'currentColor' : 'none'} />
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group full-width">
              <label className="form-label" htmlFor="quote">Feedback Comment *</label>
              <textarea
                id="quote"
                name="quote"
                value={formData.quote}
                onChange={handleInputChange}
                className="form-textarea"
                placeholder="Share details of our campaign metrics, excel configurations, or responsive coding results..."
              />
              {formErrors.quote && <span style={{ color: 'var(--primary)', fontSize: '11px' }}>{formErrors.quote}</span>}
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting review...' : 'Submit Feedback'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Testimonials;
