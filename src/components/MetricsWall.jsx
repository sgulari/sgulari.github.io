import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './MetricsWall.css';

const metrics = [
  { value: 55, suffix: "M+", label: "Retail Accounts" },
  { value: 10, suffix: "k+", label: "TPS Processed" },
  { value: 20, suffix: "+", label: "Teams Migrated" },
  { value: 30, suffix: "k", prefix: "$", label: "Monthly AWS Savings" }
];

const MetricsWall = () => {
  return (
    <section className="metrics-wall">
      <div className="container metrics-grid">
        {metrics.map((metric, idx) => (
          <div key={idx} className="metric-card">
            <h3 className="metric-value">
              <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                {({ isVisible }) => (
                  <div style={{ height: '60px' }}>
                    {isVisible ? (
                      <CountUp start={0} end={metric.value} duration={2} suffix={metric.suffix} prefix={metric.prefix || ""} />
                    ) : null}
                  </div>
                )}
              </VisibilitySensor>
            </h3>
            <p className="metric-label">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MetricsWall;
