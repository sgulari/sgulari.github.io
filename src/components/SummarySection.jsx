import React from 'react';
import './SummarySection.css';

const metrics = [
  { value: '55M+', label: 'Accounts Served' },
  { value: '10k+', label: 'TPS at Scale' },
  { value: '20+', label: 'Teams Orchestrated' },
  { value: '10+', label: 'Years Leading' },
];

const SummarySection = () => {
  return (
    <section className="summary-section container" id="about">
      <h2 className="section-title">Professional Summary</h2>
      <div className="summary-card">
        <p className="summary-text">
          Engineering Leader with 10+ years of experience leading mission-critical fintech systems at scale
          (55M+ accounts, 10k+ TPS). Specialist in modernizing banking infrastructure to cloud-native and
          real-time, and AI-ready architectures. Proven track record of orchestrating complex cross-team
          migrations (20+ teams), driving operational excellence, and coaching and mentoring engineering
          talent to deliver business value in highly regulated environments.
        </p>
        <div className="summary-metrics">
          {metrics.map((metric) => (
            <div key={metric.label} className="metric-card">
              <span className="metric-value gradient-text">{metric.value}</span>
              <span className="metric-label">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
