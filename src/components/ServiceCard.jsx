import React from 'react';
import * as Icons from 'lucide-react';

const ServiceCard = ({ service, onClick }) => {
  // Dynamically resolve icon from Lucide-React
  const IconComponent = Icons[service.icon] || Icons.HelpCircle;

  return (
    <div className="glass-card service-card" onClick={onClick}>
      <div className="service-icon-wrapper">
        <IconComponent size={28} />
      </div>
      <h3 className="service-card-title">{service.title}</h3>
      <p className="service-card-desc">{service.shortDescription}</p>
      
      <ul className="service-features-list">
        {service.features.slice(0, 3).map((feature, idx) => (
          <li key={idx} className="service-feature-item">
            <Icons.CheckCircle2 size={14} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
