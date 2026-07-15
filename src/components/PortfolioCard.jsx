import React from 'react';
import { TrendingUp, Cpu, Award } from 'lucide-react';

const PortfolioCard = ({ project, onViewDetails }) => {
  // Select a suitable icon based on category for the mockup placeholder
  const renderCategoryIcon = () => {
    switch (project.category.toLowerCase()) {
      case 'seo':
        return <TrendingUp size={44} />;
      case 'meta ads':
      case 'google ads':
        return <Cpu size={44} />;
      default:
        return <Award size={44} />;
    }
  };

  return (
    <div className="portfolio-card">
      <div className="portfolio-image-wrapper">
        <span className="portfolio-category-badge">{project.category}</span>
        
        {/* Placeholder Graphic representation */}
        <div className="portfolio-mock-svg">
          {renderCategoryIcon()}
        </div>
      </div>

      <div className="portfolio-info">
        <span className="portfolio-client">Client: {project.client}</span>
        <h3 className="portfolio-title">{project.title}</h3>
        <p className="portfolio-desc">{project.shortDescription}</p>

        <div className="portfolio-tech-tags">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <span key={idx} className="portfolio-tag">{tech}</span>
          ))}
          {project.technologies.length > 3 && (
            <span className="portfolio-tag">+{project.technologies.length - 3} more</span>
          )}
        </div>

        {/* Metrics Preview */}
        <div className="portfolio-metrics-preview">
          {Object.entries(project.metrics).slice(0, 2).map(([key, value]) => (
            <div key={key} className="metric-badge">
              <span className="metric-value">{value}</span>
              <span className="metric-label">{key}</span>
            </div>
          ))}
        </div>

        <button 
          className="portfolio-more-btn" 
          onClick={() => onViewDetails(project)}
        >
          View Case Study
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;
