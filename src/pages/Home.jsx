import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import { portfolio } from '../data/portfolio';
import ServiceCard from '../components/ServiceCard';
import PortfolioCard from '../components/PortfolioCard';
import * as Icons from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  // Select top 3 services for display on home page
  const featuredServices = services.slice(0, 3);
  
  // Select top 3 portfolio items
  const featuredPortfolio = portfolio.slice(0, 3);

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-tag">
                <span className="hero-pulse"></span>
                Available for New Projects
              </div>
              <h1 className="hero-title">
                Data-Driven <span>Digital Marketing</span> & Campaign Analytics
              </h1>
              <p className="hero-desc">
                Hi, I'm Akhil A K. I specialize in designing high-ROI advertising funnels, optimizing SEO, and building clean, responsive user interfaces backed by software engineering foundations.
              </p>
              
              <div className="hero-actions">
                <button className="btn btn-primary" onClick={() => navigate('/contact')}>
                  Let's Work Together <ArrowRight size={18} />
                </button>
                <button className="btn btn-secondary" onClick={() => navigate('/portfolio')}>
                  View Case Studies
                </button>
              </div>

              <div className="hero-stats">
                <div className="stat-item">
                  <h3>120%</h3>
                  <p>Avg. Traffic Increase</p>
                </div>
                <div className="stat-item">
                  <h3>3.5x</h3>
                  <p>Target ROAS Achieved</p>
                </div>
                <div className="stat-item">
                  <h3>100%</h3>
                  <p>Client Success Rate</p>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-shape-container">
                <div className="hero-gradient-ball"></div>
                <div className="hero-avatar-frame">
                  <div className="hero-avatar-mock">
                    <Icons.TrendingUp size={96} />
                    <span style={{ fontWeight: 600, color: 'var(--text-white)' }}>Akhil A K</span>
                    <span style={{ fontSize: '12px' }}>Marketing Operations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brief Professional Profile Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-darker)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="about-intro-grid">
            <div className="about-intro-visual slide-up">
              <div className="about-intro-badge">PROFESSIONAL PROFILE</div>
              <h2 className="about-intro-name">Akhil A K</h2>
              <p className="about-intro-role">Digital Marketing Advisory Associate</p>
              <div className="about-intro-skills-list">
                <span className="skill-tag">Google Ads</span>
                <span className="skill-tag">Meta Ads</span>
                <span className="skill-tag">SEO</span>
                <span className="skill-tag">Advanced Excel</span>
                <span className="skill-tag">React.js</span>
              </div>
            </div>

            <div>
              <span className="section-subtitle">Who I Am</span>
              <h2 className="section-title" style={{ fontSize: '32px', marginBottom: '20px' }}>
                Combining Marketing Operations with Technical Foundations
              </h2>
              <p style={{ color: 'var(--text-light)', fontSize: '15px', marginBottom: '16px', lineHeight: '1.7' }}>
                With hands-on experience as a Digital Marketing Specialist at Navabharath Technologies and a technical education in Computer Science & Engineering, I bridge the gap between marketing strategy and execution metrics.
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '32px', lineHeight: '1.7' }}>
                My professional experience ranges from executing multi-channel digital campaigns (SEO, Google/Meta Ads) and analytics reporting to building responsive frontend interfaces during internships at HAL and Huawei.
              </p>
              <button className="btn btn-secondary" onClick={() => navigate('/about')}>
                Read Full Biography
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Grid */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Services</span>
            <h2 className="section-title">Core Marketing Capabilities</h2>
            <p className="section-desc">
              Offering custom-tailored campaign planning, web performance analytics, and creative execution strategies.
            </p>
          </div>

          <div className="grid-3 mb-48">
            {featuredServices.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onClick={() => navigate('/services')} 
              />
            ))}
          </div>

          <div className="text-center">
            <button className="btn btn-secondary" onClick={() => navigate('/services')}>
              Explore All 8 Marketing Services <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Portfolio Grid */}
      <section className="section" style={{ backgroundColor: 'var(--bg-darker)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Case Studies</span>
            <h2 className="section-title">Featured Campaigns & Projects</h2>
            <p className="section-desc">
              Explore concrete examples of marketing funnels, search ad scaling, and frontend implementations.
            </p>
          </div>

          <div className="portfolio-grid mb-48">
            {featuredPortfolio.map((project) => (
              <PortfolioCard 
                key={project.id} 
                project={project} 
                onViewDetails={(proj) => navigate('/portfolio')}
              />
            ))}
          </div>

          <div className="text-center">
            <button className="btn btn-primary" onClick={() => navigate('/portfolio')}>
              Browse All Projects
            </button>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="section cta-section">
        <div className="cta-glow"></div>
        <div className="container cta-content">
          <h2 className="cta-title">Ready to Elevate Your Campaign Analytics?</h2>
          <p className="cta-desc">
            Get a comprehensive audit of your active marketing funnels, search bidding setup, and landing page responsiveness. Let's design a plan that drives growth.
          </p>
          <button className="btn btn-accent" onClick={() => navigate('/contact')}>
            Request Campaign Audit
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
