import React, { useState } from 'react';
import { Search, Image as ImageIcon } from 'lucide-react';
import Lightbox from '../components/Lightbox';

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Minimal Product Showcase Banner",
      category: "Ad Creatives",
      client: "Elite Fashion",
      desc: "Vibrant high-contrast product advertisement designed in Canva."
    },
    {
      id: 2,
      title: "Instagram Story Engagement Templates",
      category: "Social Media Graphics",
      client: "GoOrganic Foods",
      desc: "Cohesive aesthetic layouts centered around healthy lifestyle themes."
    },
    {
      id: 3,
      title: "Google Display Ad Leaderboards",
      category: "Ad Creatives",
      client: "SyncFlow Solutions",
      desc: "Standardized ad formats optimized for high visibility and high CTR."
    },
    {
      id: 4,
      title: "HR Portal Dashboard UI Layout",
      category: "UI/UX Mockups",
      client: "Huawei Internship",
      desc: "Clean desktop dashboard mockups showing tables and payroll stats."
    },
    {
      id: 5,
      title: "Fitness Promo Story Banner Package",
      category: "Social Media Graphics",
      client: "FitnessZone Gym",
      desc: "High energy sports and fitness layout series."
    },
    {
      id: 6,
      title: "Lead Generation Landing Page Mockup",
      category: "UI/UX Mockups",
      client: "Apex Realty Group",
      desc: "User conversion landing flow design mockups."
    },
    {
      id: 7,
      title: "Black Friday Meta Ad Grid",
      category: "Ad Creatives",
      client: "Elite Fashion",
      desc: "Sleek dark themed retail advertisement assets."
    },
    {
      id: 8,
      title: "Crop Prediction Result Dashboard Wireframe",
      category: "UI/UX Mockups",
      client: "College Project",
      desc: "Intuitive interactive recommendations UI wireframe."
    }
  ];

  const categories = ['All', 'Ad Creatives', 'Social Media Graphics', 'UI/UX Mockups'];

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category.toLowerCase() === activeFilter.toLowerCase());

  const handleOpenLightbox = (item) => {
    // Find index in the filtered items to enable seamless navigation
    const idx = filteredItems.findIndex(i => i.id === item.id);
    setLightboxIndex(idx);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
  };

  return (
    <div className="container section fade-in">
      <div className="section-header">
        <span className="section-subtitle">Visual Assets</span>
        <h2 className="section-title">Creative Gallery</h2>
        <p className="section-desc">
          Browse through marketing flyers, ad banners, and interface layouts designed with Canva, CapCut and coding frameworks. Click any asset to expand.
        </p>
      </div>

      {/* Categories filter */}
      <div className="filter-tabs-container">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-tab-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of gallery items */}
      <div className="gallery-grid">
        {filteredItems.map((item) => (
          <div 
            key={item.id} 
            className="gallery-card"
            onClick={() => handleOpenLightbox(item)}
          >
            {/* SVG Placeholder representation for visual image */}
            <div className="gallery-mock-svg">
              <ImageIcon size={44} />
            </div>

            <div className="gallery-overlay">
              <Search size={24} />
              <h4 className="gallery-overlay-title">{item.title}</h4>
              <span className="gallery-overlay-cat">{item.category}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          item={filteredItems[lightboxIndex]}
          onClose={handleCloseLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
};

export default Gallery;
