import React from 'react';
import { GraduationCap } from 'lucide-react';
import './EducationSection.css';

const degrees = [
  {
    degree: 'M.S., Electrical Engineering',
    school: 'Texas A&M University, Kingsville',
  },
  {
    degree: 'B.Tech, Electronics and Communications Engineering',
    school: 'JNTU Hyderabad',
  },
];

const EducationSection = () => {
  return (
    <section className="education-section container" id="education">
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        {degrees.map((d, idx) => (
          <div key={idx} className="education-card">
            <div className="education-icon">
              <GraduationCap size={28} />
            </div>
            <div>
              <h3 className="education-degree">{d.degree}</h3>
              <p className="education-school">{d.school}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
