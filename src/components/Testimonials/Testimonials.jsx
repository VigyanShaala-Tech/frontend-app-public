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

import Gauri from "../../assets/image/Testimonials-images/Gauri_Patti.jpg"
import Diksha from "../../assets/image/Testimonials-images/Diksha_Nagarkoti.jpg"
import Nikita from "../../assets/image/Testimonials-images/Nikita_Tiwari.jpg"
import Garima  from "../../assets/image/Testimonials-images/Garima.jpg"
import Abha from "../../assets/image/Testimonials-images/Abha_Barge.jpg"
import Himani from "../../assets/image/Testimonials-images/Himani_Upadhyay.jpg"

const Testimonials = () => {
  const { formatMessage } = useIntl();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Define testimonials with message keys instead of hardcoded strings
  const testimonials = [
    {
      id: 1,
      quoteKey: 'home.testimonials.item1.quote',
      nameKey: 'home.testimonials.item1.name',
      roleKey: 'home.testimonials.item1.role',
      avatar: Gauri,
    },
    {
      id: 2,
      quoteKey: 'home.testimonials.item2.quote',
      nameKey: 'home.testimonials.item2.name',
      roleKey: 'home.testimonials.item2.role',
      avatar: Diksha,
    },
    {
      id: 3,
      quoteKey: 'home.testimonials.item3.quote',
      nameKey: 'home.testimonials.item3.name',
      roleKey: 'home.testimonials.item3.role',
      avatar: Nikita,
    },
    {
      id: 4,
      quoteKey: 'home.testimonials.item4.quote',
      nameKey: 'home.testimonials.item4.name',
      roleKey: 'home.testimonials.item4.role',
      avatar: Garima,
    },
    {
      id: 5,
      quoteKey: 'home.testimonials.item5.quote',
      nameKey: 'home.testimonials.item5.name',
      roleKey: 'home.testimonials.item5.role',
      avatar: Abha,
    },
    {
      id: 6,
      quoteKey: 'home.testimonials.item6.quote',
      nameKey: 'home.testimonials.item6.name',
      roleKey: 'home.testimonials.item6.role',
      avatar: Himani,
    },
  ];
  const total = testimonials.length;

  const next = () =>
    setCurrentIndex((prev) => (prev + 1) % total);

  const prev = () =>
    setCurrentIndex((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [total]);

  

  return (
    <section className="testimonials">
      <div className="container">
        {/* HEADER */}
        <div className="text-center mb-5">
          {/* <span className="badge bg-primary text-white mb-3">
            {formatMessage(messages['home.testimonials.badge'])}
          </span> */}
          <h2>{formatMessage(messages['home.testimonials.heading'])}</h2>
          <p className="text-muted lead">
            {formatMessage(messages['home.testimonials.subheading'])}
          </p>
        </div>

        {/* SLIDER */}
        <div className="testimonial-slider position-relative">
          <button
            type="button"
            className="nav-arrow nav-arrow-left"
            onClick={prev}
            aria-label={formatMessage(messages['common.carousel.previous'])}
          >
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
                        <div className="quote-icon text-primary">
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
                      <p className="role text-primary">
                        {formatMessage(messages[item.roleKey])}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="nav-arrow nav-arrow-right"
            onClick={next}
            aria-label={formatMessage(messages['common.carousel.next'])}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>

          {/* INDICATORS */}
          <div className="hero-indicators">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={i === currentIndex ? 'active bg-primary' : ''}
                aria-label={formatMessage(messages['common.carousel.goToSlide'], { slideNumber: i + 1 })}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;