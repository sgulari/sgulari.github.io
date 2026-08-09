import React, { useState } from 'react';
import { ChevronDown, Building2, Briefcase } from 'lucide-react';
import './ExperienceSection.css';

const experiences = [
  {
    company: 'Capital One',
    title: 'Senior Manager, Software Engineering',
    period: 'July 2026 – Present',
    location: 'Wilmington, DE',
    current: true,
    bullets: [
      'Manage performance calibration and career development for 10+ direct reports; successfully coached a struggling associate from a Performance Improvement Plan to a promotion.',
      'Spearheaded the development of custom Claude AI capabilities for the team, automating technical support and driving operational efficiency for over 1,000+ internal users.',
      'Scaled the engineering squad through strategic recruiting to align hiring strategy with long-term architectural goals and business roadmaps.',
      'Facilitate technical design consensus through open dialogue and active listening; actively participate in company-wide mentorship programs to support cross-organizational talent growth.',
    ],
  },
  {
    company: 'Capital One',
    title: 'Manager, Software Engineering',
    period: 'Aug 2022 – July 2026',
    location: 'Wilmington, DE',
    bullets: [
      'Lead a squad of 8 engineers managing mission-critical backend systems serving 55M+ retail banking customers at 10k TPS, fostering a culture of collaboration, innovation, and continuous learning.',
      'Orchestrated the end-to-end cloud migration of production applications from shared to isolated AWS accounts, mitigating systemic security risks while maintaining zero downtime for 10k TPS services.',
      'Modernized banking core serving 55M+ retail accounts from batch to real-time events, cutting latency by 98% (3hrs → <3mins) to transform the customer experience.',
      'Spearheaded a cloud cost optimization initiative, re-architecting ECS and Lambda workloads to achieve 30% monthly AWS cost savings ($30k/month).',
      'Led technical response and post-incident analysis for high-severity incidents, proactively identifying root causes and implementing robust automation (e.g., Automated MQ Retry Handler) to prevent recurrence.',
      'Partnered with vendors like AWS and New Relic to resolve critical and complex production bottlenecks and validate architectural strategies.',
    ],
  },
  {
    company: 'Capital One',
    title: 'Principal Software Engineer',
    period: 'Jan 2020 – Aug 2022',
    location: 'Wilmington, DE',
    bullets: [
      'Designed and delivered the Small Business Digital Account Opening platform, modernizing legacy data stores to cloud-native microservices using Spring Boot and NodeJS.',
      "Engineered 'CloudWaze' auto-failover capability, enabling one-click regional disaster recovery (DR) and ensuring 99.99% availability during regional outages.",
      'Resolved complex production bottlenecks, utilizing New Relic to debug heap memory leaks and identifying root causes for SLO (Service Level Objective) dips.',
      'Defined resilient Infrastructure-as-Code (IaC) patterns to automate complex AWS deployments (ECS, MQ, Batch) across regions.',
      'Established proactive observability and monitoring standards using New Relic and Splunk.',
    ],
  },
  {
    company: 'Capital One',
    title: 'Associate Software Engineer → Software Engineer',
    period: 'Mar 2017 – Jan 2020',
    location: 'Wilmington, DE',
    bullets: [
      'Engineered CI/CD pipelines enabling zero-downtime Blue/Green deployments for core microservices.',
      'Developed cost-optimization tools and disaster recovery automation via serverless.',
      'Built a scalable Java Kafka-based audit logging to ensure regulatory compliance and data traceability.',
    ],
  },
  {
    company: 'Canopy One Solutions',
    title: 'Java Developer',
    period: 'Jan 2016 – Mar 2017',
    location: 'Wilmington, DE',
    bullets: [
      'Developed automated validation tools (Java Cucumber/Karate) and service health dashboards.',
    ],
  },
  {
    company: 'The Concept Team',
    title: 'Developer',
    period: 'Apr 2013 – Dec 2013',
    location: '',
    bullets: [],
  },
];

const ExperienceCard = ({ exp, index }) => {
  const [expanded, setExpanded] = useState(index === 0);

  return (
    <div className={`exp-card ${exp.current ? 'exp-card--current' : ''}`}>
      <div className="exp-timeline-dot">
        <div className={`exp-dot ${exp.current ? 'exp-dot--active' : ''}`}></div>
      </div>
      <div className="exp-card__content">
        <button
          className="exp-card__header"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          <div className="exp-card__info">
            <div className="exp-card__company">
              <Building2 size={16} />
              {exp.company}
              {exp.current && <span className="exp-badge">Current</span>}
            </div>
            <h3 className="exp-card__title">{exp.title}</h3>
            <div className="exp-card__meta">
              <span>{exp.period}</span>
              {exp.location && (
                <>
                  <span className="exp-card__sep">·</span>
                  <span>{exp.location}</span>
                </>
              )}
            </div>
          </div>
          {exp.bullets.length > 0 && (
            <ChevronDown
              size={20}
              className={`exp-card__chevron ${expanded ? 'exp-card__chevron--open' : ''}`}
            />
          )}
        </button>
        {expanded && exp.bullets.length > 0 && (
          <ul className="exp-card__bullets">
            {exp.bullets.map((bullet, i) => (
              <li key={i} className="exp-card__bullet">{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

const ExperienceSection = () => {
  return (
    <section className="experience-section container" id="experience">
      <h2 className="section-title">Experience</h2>
      <div className="experience-timeline">
        {experiences.map((exp, idx) => (
          <ExperienceCard key={idx} exp={exp} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
