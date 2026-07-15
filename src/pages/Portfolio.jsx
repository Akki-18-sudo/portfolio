import React, { useState } from 'react';
import { X, TrendingUp, Cpu, Award } from 'lucide-react';
import { portfolio } from '../data/portfolio';
import PortfolioCard from '../components/PortfolioCard';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  // Derive unique categories from portfolio items
  // Combining 'Meta Ads' and 'Google Ads' under 'Paid Ads' for cleaner navigation if needed,
  // but keeping standard mapping to match service tabs
  const filters = ['All', 'SEO', 'Meta Ads', 'Google Ads', 'Social Media Marketing', 'Website Development', 'Graphic Design', 'Video Editing'];

  const filteredProjects = activeFilter === 'All'
    ? portfolio
    : portfolio.filter(project => project.category.toLowerCase() === activeFilter.toLowerCase());

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  // Render modal icon based on project category
  const renderModalIcon = (category) => {
    switch (category.toLowerCase()) {
      case 'seo':
        return <TrendingUp size={48} style={{ color: 'var(--primary)' }} />;
      case 'meta ads':
      case 'google ads':
        return <Cpu size={48} style={{ color: 'var(--secondary)' }} />;
      default:
        return <Award size={48} style={{ color: 'var(--accent)' }} />;
    }
  };

  return (
    <div className="container section fade-in">
      <div className="section-header">
        <span className="section-subtitle">Case Studies</span>
        <h2 className="section-title">My Marketing & Tech Portfolio</h2>
        <p className="section-desc">
          Browse through digital campaigns and web development projects. Filter by specialization to review CTR, CPC, and conversion improvements.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="filter-tabs-container">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-tab-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              onViewDetails={handleOpenDetails}
            />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '60px 24px', color: 'var(--text-muted)' }}>
          <p>No projects found in this category. More case studies coming soon!</p>
        </div>
      )}

      {/* Case Study Details Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={handleCloseDetails}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleCloseDetails} aria-label="Close Modal">
              <X size={20} />
            </button>

            {/* Mock Header Visual */}
            <div className="modal-banner" style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, var(--bg-darker) 100%)' }}>
              {renderModalIcon(selectedProject.category)}
            </div>

            <div className="modal-body">
              <div className="modal-header-info">
                <div>
                  <span className="badge" style={{ marginBottom: '8px' }}>{selectedProject.category}</span>
                  <h2 className="modal-title">{selectedProject.title}</h2>
                </div>
              </div>

              {/* Meta Grid */}
              <div className="modal-meta-grid">
                <div className="modal-meta-item">
                  <span className="modal-meta-label">Client Name</span>
                  <span className="modal-meta-val">{selectedProject.client}</span>
                </div>
                <div className="modal-meta-item">
                  <span className="modal-meta-label">Scope / Service</span>
                  <span className="modal-meta-val">{selectedProject.category}</span>
                </div>
                <div className="modal-meta-item">
                  <span className="modal-meta-label">Technologies Used</span>
                  <span className="modal-meta-val" style={{ fontSize: '13px', display: 'block', marginTop: '4px' }}>
                    {selectedProject.technologies.join(', ')}
                  </span>
                </div>
              </div>

              {/* Description */}
              <h3 className="modal-desc-title">Case Study Details</h3>
              <p className="modal-desc">{selectedProject.description}</p>

              {/* Metrics Section */}
              <div className="modal-metrics-section">
                <h4 className="modal-metrics-title">Campaign Growth & Results</h4>
                <div className="modal-metrics-grid">
                  {Object.entries(selectedProject.metrics).map(([label, value]) => (
                    <div key={label} className="modal-metric-item">
                      <div className="modal-metric-val">{value}</div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', marginTop: '4px' }}>
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
