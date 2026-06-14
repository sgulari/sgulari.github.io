import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
  {
    quote: "Sainath is a brilliant engineering leader. His ability to architect zero-downtime migrations at scale is unparalleled.",
    name: "Colleague",
    title: "Senior Engineer, Capital One"
  },
  {
    quote: "He transformed our batch systems into real-time streaming architectures. A true visionary in cloud modernization.",
    name: "Product Manager",
    title: "Capital One"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section container">
      <h2 className="section-title">Testimonials</h2>
      <div className="testimonials-grid">
        {testimonials.map((test, idx) => (
          <motion.div 
            key={idx} 
            className="testimonial-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
          >
            <Quote size={30} className="quote-icon" />
            <p className="testimonial-quote">"{test.quote}"</p>
            <div className="testimonial-author">
              <h4>{test.name}</h4>
              <p>{test.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
