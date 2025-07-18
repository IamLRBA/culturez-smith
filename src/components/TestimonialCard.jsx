import React, { useState } from 'react';
import './TestimonialCard.css';

const TestimonialCard = ({ testimonial }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      className={`testimonial-card ${isExpanded ? 'expanded' : ''}`}
      style={{ scrollSnapAlign: 'start' }}
      onClick={toggleExpand}
    >
      <div className="testimonial-image">
        <img src={testimonial.image} alt={testimonial.name} />
      </div>
      <div className="testimonial-content">
        <h4>{testimonial.name}</h4>
        <p className="testimonial-role">{testimonial.role}</p>
        {isExpanded && (
          <p className="testimonial-text">"{testimonial.text}"</p>
        )}
        {!isExpanded && (
          <div className="read-more">Click to read testimonial</div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;