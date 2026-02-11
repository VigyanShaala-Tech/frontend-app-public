import React, { useState, useEffect } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faQuoteLeft,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import messages from '../../message/GlobalMessage.message';
import './Testimonials.scss';

const testimonials = [
  {
    id: 1,
    quote:
      'VigyanShaala completely transformed my career. The Python course gave me the skills I needed to land my dream job as a data analyst.',
    name: 'Priya Sharma',
    role: 'Data Analyst at Google',
    avatar:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop',
  },
  {
    id: 2,
    quote:
      'The quality of content and the practical approach to teaching sets VigyanShaala apart.',
    name: 'Ananya Desai',
    role: 'Software Engineer at Microsoft',
    avatar:
      'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=100&h=100&fit=crop',
  },
  {
    id: 3,
    quote:
      'As someone switching careers, I was skeptical about online learning. But the mentorship made all the difference.',
    name: 'Kavita Reddy',
    role: 'Product Manager at Amazon',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
  },
];

const Testimonials = () => {
  const { formatMessage } = useIntl();
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  const prev = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonials">
      <div className="container">
        {/* HEADER */}
        <div className="text-center mb-5">
          <span className="badge bg-primary text-white mb-3">
            {formatMessage(messages['home.testimonials.badge'])}
          </span>
          <h2>{formatMessage(messages['home.testimonials.heading'])}</h2>
          <p className="text-muted lead">
            {formatMessage(messages['home.testimonials.subheading'])}
          </p>
        </div>

        {/* SLIDER */}
        <div className="testimonial-slider">

            {/* LEFT ARROW */}
            <button className="nav-arrow nav-left" onClick={prev}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className='bg-white rounded'>

                {/* VIEWPORT */}
                <div className="testimonial-viewport">
                    <div
                    className="testimonial-track"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                    >
                    {testimonials.map((item) => (
                        <div className="testimonial-slide" key={item.id}>
                        <div className="testimonial-card">
                            <div className='d-flex align-items-left'>
                                <div className="quote-icon">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                </div>

                                <div className="avatar-wrapper">
                                    <img src={item.avatar} alt={item.name} />
                                </div>
                            </div>

                            <blockquote>
                            <p>"{item.quote}"</p>
                            </blockquote>

                            <h5>{item.name}</h5>
                            <p className="role">{item.role}</p>
                        </div>
                        </div>
                    ))}
                    </div>
                </div>

            </div>
            {/* RIGHT ARROW */}
            <button className="nav-arrow nav-right" onClick={next}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>


            {/* INDICATORS */}
            <div className="hero-indicators">
                {testimonials.map((_, i) => (
                    <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={i === currentIndex ? 'active bg-primary' : ''}
                    />
                ))}
            </div>

          
         </div>
        
      </div>
    </section>
  );
};

export default Testimonials;
