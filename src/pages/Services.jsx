import React from 'react';
import { services } from '../data/services';
import * as Icons from 'lucide-react';

const Services = () => {
  const workflowSteps = [
    {
      num: "01",
      title: "Strategy & Audit",
      desc: "Auditing current setups, keywords, search volume, and competitor ad configurations to build a structured marketing roadmap."
    },
    {
      num: "02",
      title: "Creative Execution",
      desc: "Designing conversion-focused ad creatives in Canva and editing promotion reels in CapCut while developing fast landing pages."
    },
    {
      num: "03",
      title: "Campaign Operations",
      desc: "Configuring pixel tracking (GTM), setting up bidding keywords, structuring target audiences, and launching campaign budgets."
    },
    {
      num: "04",
      title: "Data Analytics & ROAS",
      desc: "Compiling campaign statistics using Advanced Excel, extracting channel ROAS, and executing budget updates to lower conversions cost."
    }
  ];

  return (
    <div className="container section fade-in">
      <div className="section-header">
        <span className="section-subtitle">What I Offer</span>
        <h2 className="section-title">Comprehensive Digital Services</h2>
        <p className="section-desc">
          High-performance search engine positioning, social advertisement execution, content assembly, and interface engineering.
        </p>
      </div>

      {/* Services Detailed List */}
      <div className="services-list-grid">
        {services.map((service) => {
          // Resolve icon from Lucide-React
          const IconComponent = Icons[service.icon] || Icons.HelpCircle;

          return (
            <div key={service.id} className="services-list-item">
              <div className="services-list-left">
                <div className="services-list-icon">
                  <IconComponent size={32} />
                </div>
                <h3 className="services-list-title">{service.title}</h3>
              </div>

              <div className="services-list-right">
                <p className="services-list-desc">{service.longDescription}</p>
                
                <div className="services-features-grid">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="service-feature-item" style={{ fontSize: '14px' }}>
                      <Icons.CheckCircle2 size={16} style={{ color: 'var(--accent)' }} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Workflow Section */}
      <div className="workflow-section">
        <h3 className="workflow-title">My Marketing & Analytics Workflow</h3>
        
        <div className="workflow-steps-grid">
          {workflowSteps.map((step, idx) => (
            <div key={idx} className="workflow-step">
              <div className="workflow-num">{step.num}</div>
              <h4 className="workflow-step-title">{step.title}</h4>
              <p className="workflow-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
