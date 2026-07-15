import React from 'react';
import { User, Award, BookOpen, Volume2 } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      role: "Digital Marketing Specialist",
      org: "Navabharath Technologies",
      date: "Jan 2026 – Present",
      type: "job",
      bullets: [
        "Executed digital marketing campaigns across SEO, social media, email marketing, Google Ads, and Meta Ads.",
        "Analyzed campaign performance using Advanced Excel (VLOOKUP, XLOOKUP, Pivot Tables) and Google Analytics to generate actionable reports.",
        "Monitored campaign KPIs, identified optimization opportunities, and supported data-driven marketing decisions.",
        "Designed marketing creatives using Canva and CapCut while maintaining brand consistency.",
        "Coordinated campaign execution with cross-functional teams, ensuring timely delivery and quality standards.",
        "Prepared marketing dashboards and performance reports for campaign tracking and business insights."
      ]
    },
    {
      role: "Frontend Development Intern",
      org: "Hindustan Aeronautics Limited (HAL)",
      date: "Feb 2025 – Apr 2025",
      type: "internship",
      bullets: [
        "Developed responsive web interfaces using HTML, CSS, and JavaScript.",
        "Collaborated with cross-functional teams to deliver project milestones within deadlines.",
        "Performed testing, debugging, documentation, and data validation with strong attention to detail."
      ]
    },
    {
      role: "Frontend Associate (Intern)",
      org: "Huawei",
      date: "Aug 2023 – Oct 2023",
      type: "internship",
      bullets: [
        "Developed responsive UI components using HTML, CSS, JavaScript, and React.",
        "Contributed to an Employee Database and Payroll Management System.",
        "Improved application usability through UI enhancements and bug fixes."
      ]
    }
  ];

  const skillGroups = [
    {
      category: "Marketing Operations & Execution",
      skills: [
        "Marketing Operations",
        "Campaign Management & Execution",
        "Campaign Optimization",
        "Client Relationship Management",
        "Project Coordination & Administrative Support",
        "Stakeholder & Deadline Management"
      ]
    },
    {
      category: "Analytics & Data Analysis",
      skills: [
        "Google Analytics (GA4)",
        "Google Ads & Meta Ads",
        "Campaign Analytics & Performance Reporting",
        "Marketing Data Analysis & Interpretation",
        "Data-Driven Decision Making",
        "Attention to Detail & Quality Assurance"
      ]
    },
    {
      category: "Tools & Creative Design",
      skills: [
        "Advanced Excel (VLOOKUP, XLOOKUP, Pivot Tables)",
        "SEO, Social Media Marketing & Email Marketing",
        "Marketing Reporting & Dashboard Preparation",
        "Canva, CapCut & Graphic Design"
      ]
    },
    {
      category: "Frontend Development & Execution",
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "HTML5 & CSS3",
        "Responsive UI Components",
        "Testing & Debugging",
        "Cross-functional Collaboration"
      ]
    }
  ];

  return (
    <div className="container section fade-in">
      <div className="section-header">
        <span className="section-subtitle">About Me</span>
        <h2 className="section-title">My Professional Journey</h2>
        <p className="section-desc">
          Merging digital marketing strategies with code to deliver outstanding web performance and measurable campaign results.
        </p>
      </div>

      <div className="about-grid">
        {/* Left Side: Summary Card */}
        <div className="about-left">
          <div className="about-portrait-card">
            <div className="about-portrait-mock">
              <User size={56} />
            </div>
            
            <h3 style={{ fontSize: '24px', marginBottom: '4px' }}>Akhil A K</h3>
            <p style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '14px', marginBottom: '24px' }}>
              Digital Marketing Advisory Associate
            </p>

            <ul className="about-meta-list">
              <li className="about-meta-item">
                <span className="about-meta-label">Location</span>
                <span className="about-meta-val">Mysuru, Karnataka</span>
              </li>
              <li className="about-meta-item">
                <span className="about-meta-label">Experience</span>
                <span className="about-meta-val">2+ Years Combined</span>
              </li>
              <li className="about-meta-item">
                <span className="about-meta-label">Languages</span>
                <span className="about-meta-val">English (Professional Proficiency), Hindi, Kannada</span>
              </li>
            </ul>
          </div>

          <div className="about-download-section">
            <div className="glass-card" style={{ padding: '24px' }}>
              <h4 style={{ fontSize: '16px', color: 'var(--text-white)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={18} style={{ color: 'var(--primary)' }} /> Certifications
              </h4>
              <ul style={{ paddingLeft: '16px', fontSize: '14px', color: 'var(--text-light)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li><strong>Basics of Java</strong> – Pentagon Space</li>
                <li><strong>Google Analytics Certification</strong></li>
                <li><strong>Google Ads Certification</strong></li>
              </ul>
            </div>

            <div className="glass-card" style={{ padding: '24px' }}>
              <h4 style={{ fontSize: '16px', color: 'var(--text-white)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BookOpen size={18} style={{ color: 'var(--primary)' }} /> Education
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
                <div>
                  <strong style={{ color: 'var(--text-white)' }}>B.E. – Computer Science & Engineering</strong>
                  <p style={{ color: 'var(--text-muted)' }}>Bapuji Institute of Engineering and Technology (VTU), Davanagere | 2021 – 2024 (CGPA: 7.0/10)</p>
                </div>
                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '10px' }}>
                  <strong style={{ color: 'var(--text-white)' }}>Diploma – Computer Science & Engineering</strong>
                  <p style={{ color: 'var(--text-muted)' }}>D.R.R. Polytechnic, Davanagere | 2019 – 2021 (70%)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Resume Biography and Skills */}
        <div className="about-right">
          <div>
            <h3 className="about-title">Professional Summary</h3>
            <p className="about-bio-text">
              Analytical and performance-driven Marketing Operations professional with experience in digital marketing, campaign management, marketing analytics, and reporting. Demonstrated expertise in Advanced Excel, Google Analytics, Google Ads, Meta Ads, SEO, and social media marketing, with a strong focus on campaign optimization and business insights.
            </p>
            <p className="about-bio-text">
              Recognized for effective stakeholder communication, attention to detail, and the ability to manage multiple priorities while consistently delivering measurable results in dynamic business environments. Supported by a solid software engineering foundation from frontend development internships, I bridge the gap between marketing execution metrics and technical systems integration.
            </p>
          </div>

          <div className="about-skills-section">
            <h3 className="about-title" style={{ marginBottom: '8px' }}>Skills & Expertise</h3>
            {skillGroups.map((group, index) => (
              <div key={index} className="skills-category">
                <span className="skills-category-title">{group.category}</span>
                <div className="skills-grid">
                  {group.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card" style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '18px', color: 'var(--text-white)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Volume2 size={20} style={{ color: 'var(--primary)' }} /> Achievements
            </h3>
            <ul style={{ paddingLeft: '20px', fontSize: '14px', color: 'var(--text-light)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Represented the college as a VTU Cricket Player Captain.</li>
              <li>Volunteered in organizing college cultural events and sports activities.</li>
              <li>Coordinated and managed a college-level cricket tournament.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="timeline-section">
        <h3 className="timeline-title">Professional Experience</h3>
        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${exp.type === 'internship' ? 'internship' : ''}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h4 className="timeline-role">{exp.role}</h4>
                    <span className="timeline-org">{exp.org}</span>
                  </div>
                  <span className="timeline-date">{exp.date}</span>
                </div>
                <ul className="timeline-desc">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="timeline-bullet">
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
