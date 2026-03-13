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

const Testimonials = () => {
  const { formatMessage } = useIntl();
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % 3); // 3 testimonials

  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + 3) % 3);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  // Define testimonials with message keys instead of hardcoded strings
  const testimonials = [
    {
      id: 1,
      quoteKey: 'home.testimonials.item1.quote',
      nameKey: 'home.testimonials.item1.name',
      roleKey: 'home.testimonials.item1.role',
      avatar:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop',
    },
    {
      id: 2,
      quoteKey: 'home.testimonials.item2.quote',
      nameKey: 'home.testimonials.item2.name',
      roleKey: 'home.testimonials.item2.role',
      avatar:
        'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=100&h=100&fit=crop',
    },
    {
      id: 3,
      quoteKey: 'home.testimonials.item3.quote',
      nameKey: 'home.testimonials.item3.name',
      roleKey: 'home.testimonials.item3.role',
      avatar:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop',
    },
  ];

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
        <div className="testimonial-slider position-relative">
          <button className="nav-arrow nav-arrow-left" onClick={prev}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div className="bg-white rounded">
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
                      <div className="d-flex align-items-left">
                        <div className="quote-icon">
                          <FontAwesomeIcon icon={faQuoteLeft} />
                        </div>

                        <div className="avatar-wrapper">
                          <img
                            src={item.avatar}
                            alt={formatMessage(messages[item.nameKey])}
                          />
                        </div>
                      </div>

                      <blockquote className="d-flex flex-wrap container">
                        <p>
                          "{formatMessage(messages[item.quoteKey])}"
                        </p>
                      </blockquote>

                      <h5>{formatMessage(messages[item.nameKey])}</h5>
                      <p className="role">
                        {formatMessage(messages[item.roleKey])}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button className="nav-arrow nav-arrow-right" onClick={next}>
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