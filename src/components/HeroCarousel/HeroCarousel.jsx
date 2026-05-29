// components/HeroCarousel/HeroCarousel.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Button } from '@openedx/paragon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import hero_1 from '../../assets/image/Home-images/hero_1.jpeg';
import hero_2 from '../../assets/image/Home-images/hero_2.jpg';

import messages from '../../message/GlobalMessage.message';
import './HeroCarousel.scss';

const slides = [
  {
    id: 1,
    title: messages['home.hero.firsttitle'],
    highlight: messages['home.hero.firsthighlight'],
    description: messages['home.hero.firstdescription'],
    image: hero_1 ,
    layout: 'text-left',
  },
  {
    id: 2,
    title: messages['home.hero.secondtitle'],
    highlight: messages['home.hero.secondhighlight'],
    description: messages['home.hero.seconddescription'],
    image: hero_2,
    layout: 'text-right',
  },
  {
    id: 3,
    title: messages['home.hero.thirdtitle'],
    highlight: messages['home.hero.thirdhighlight'],
    description: messages['home.hero.thirddescription'],
    image: hero_1,
    layout: 'text-left',
  },
];

const HeroCarousel = () => {
  const { formatMessage } = useIntl();
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const updateHeroHeight = () => {
    const navbar = document.querySelector('.site-header-mobile') || document.querySelector('.site-header-desktop');
    const navbarHeight = navbar?.offsetHeight || 0;
    if (sectionRef.current) {
      sectionRef.current.style.minHeight = `calc(100vh - ${navbarHeight}px)`;
    }
  };

  useEffect(() => {
    updateHeroHeight();
    window.addEventListener('resize', updateHeroHeight);
    return () => window.removeEventListener('resize', updateHeroHeight);
  }, []);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const current = slides[currentSlide];

  return (
    <section ref={sectionRef} className="hero-carousel position-relative overflow-hidden">
      <div
        className="hero-track d-flex w-100"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="hero-slide flex-shrink-0 w-100">
            <div className="container py-4 py-md-5 py-lg-6">
              <div className="row align-items-center gy-5 gy-lg-0">
                {/* Image – always first on mobile, controlled order on desktop */}
                <div className={`col-12 col-lg-6 mb-4 mb-lg-0 hero-image-col ${slide.layout === 'text-right' ? 'order-lg-1' : 'order-lg-2'}`}>
                  <div className="hero-image-wrapper rounded shadow">
                    <img
                      src={slide.image}
                      alt={`${formatMessage(slide.title)} ${formatMessage(slide.highlight)}`}
                      className="img-fluid w-100 rounded object-cover"
                    />
                  </div>
                </div>

                {/* Text content – comes after image on mobile */}
                <div className={`col-12 col-lg-6 text-start text-lg-start ${slide.layout === 'text-right' ? 'order-lg-2' : 'order-lg-1'}`}>
                  <h1 className="hero-title mb-3 mb-md-4">
                    {formatMessage(slide.title)}
                    <span className="text-primary d-block">{formatMessage(slide.highlight)}</span>
                  </h1>

                  <p className="hero-description text-muted mb-4 mb-md-5 lead mx-auto mx-lg-0" style={{ maxWidth: '520px' }}>
                    {formatMessage(slide.description)}
                  </p>

                  <div className="hero-action-button d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start">
                    <Button className='button-margin' variant="primary" size="lg" onClick={() => navigate('/public/courses')}>
                      {formatMessage(messages['home.hero.getStarted'])}
                    </Button>
                    <Button variant="outline-primary" size="lg" onClick={() => navigate('/public/about')}>
                      {formatMessage(messages['home.hero.learnMore'])}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button type="button" className="hero-nav hero-prev position-absolute top-50 start-0 translate-middle-y" onClick={prevSlide} aria-label={formatMessage(messages['common.carousel.previous'])}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button type="button" className="hero-nav hero-next position-absolute top-50 end-0 translate-middle-y" onClick={nextSlide} aria-label={formatMessage(messages['common.carousel.next'])}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>

      {/* Indicators */}
      <div className="hero-indicators mb-3 d-flex align-items-center justify-center">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            aria-label={formatMessage(messages['common.carousel.goToSlide'], { slideNumber: i + 1 })}
            onClick={() => setCurrentSlide(i)}
            className={`rounded-circle border-0 me-2 ${i === currentSlide ? 'active bg-primary' : 'bg-white opacity-50'}`}
            style={{ width: '12px', height: '12px' }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;