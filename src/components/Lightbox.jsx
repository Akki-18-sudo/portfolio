import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

const Lightbox = ({ item, onClose, onPrev, onNext }) => {
  // Listen for Esc and arrow keys
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose} aria-label="Close Lightbox">
        <X size={24} />
      </button>

      <button 
        className="lightbox-nav-btn prev" 
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous Image"
      >
        <ChevronLeft size={28} />
      </button>

      <div className="lightbox-content-wrapper" onClick={(e) => e.stopPropagation()}>
        {/* Placeholder for Gallery Image */}
        <div className="lightbox-image-placeholder">
          <ImageIcon size={64} style={{ color: 'var(--primary)', opacity: 0.8 }} />
          <span style={{ fontSize: '13px', color: 'var(--text-dark)' }}>
            [ Placeholder: {item.title} Image Asset ]
          </span>
        </div>

        <div className="lightbox-caption">
          <h3 className="lightbox-title">{item.title}</h3>
          <p className="lightbox-desc">{item.category} • Client: {item.client}</p>
        </div>
      </div>

      <button 
        className="lightbox-nav-btn next" 
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next Image"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};

export default Lightbox;
