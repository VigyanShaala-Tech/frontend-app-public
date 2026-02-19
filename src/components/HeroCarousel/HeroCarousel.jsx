import React, { useState, useEffect, useRef } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Button } from '@openedx/paragon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

import messages from '../../message/GlobalMessage.message';
import './HeroCarousel.scss';

const slides = [
  {
    id: 1,
    title: messages['home.hero.firsttitle'],
    highlight: messages['home.hero.firsthighlight'],
    description: messages['home.hero.firstdescription'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400',
    layout: 'text-left',
  },
  {
    id: 2,
    title: messages['home.hero.secondtitle'],
    highlight: messages['home.hero.secondhighlight'],
    description: messages['home.hero.seconddescription'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400',
    layout: 'text-right',
  },
];

const HeroCarousel = () => {
  const { formatMessage } = useIntl();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('next');
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  /** 🔹 Dynamically set hero height = viewport - navbar height */
  const updateHeroHeight = () => {
    const navbar =
      document.querySelector('.site-header-mobile') ||
      document.querySelector('.site-header-desktop');

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

  /** 🔹 Auto slide */
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection('next');
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setDirection('prev');
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setDirection('next');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const current = slides[currentSlide];

  return (
    <section ref={sectionRef} className="hero-carousel">
    <div
        className="hero-track"
        style={{
        transform: `translateX(-${currentSlide * 100}%)`,
        }}
    >
        {slides.map((slide, index) => (
        <div className="hero-slide" key={slide.id}>
            <div className="container hero-container">
            <div className="row align-items-center w-100 gy-5 hero-row">
                {/* TEXT */}
                <div
                className={`col-lg-6 ${
                    slide.layout === 'text-right' ? 'order-lg-2' : ''
                }`}
                >
                <h1 className="hero-title">
                    <div>{formatMessage(slide.title)}</div>
                    <span className="text-primary">
                    {formatMessage(slide.highlight)}
                    </span>
                </h1>

                <p className="hero-description text-muted">
                    {formatMessage(slide.description)}
                </p>

                <div className="hero-action-button d-flex gap-3">
                    <Button size="lg mr-4" onClick={() => navigate('/public/courses')}>
                    {formatMessage(messages['home.hero.getStarted'])}
                    </Button>
                    <Button variant="outline-primary" size="lg" onClick={() => navigate('/public/about')}>
                    {formatMessage(messages['home.hero.learnMore'])}
                    </Button>
                </div>
                </div>

                {/* IMAGE (desktop only) */}
                <div
                className={`col-lg-6 hero-image-col ${
                    slide.layout === 'text-right' ? 'order-lg-1' : ''
                }`}
                >
                <img src={slide.image} className="img-fluid rounded" />
                </div>
            </div>
            </div>
        </div>
        ))}
    </div>

    {/* NAV */}
    <button className="hero-nav hero-prev" onClick={prevSlide}>
        <FontAwesomeIcon icon={faChevronLeft} />
    </button>
    <button className="hero-nav hero-next" onClick={nextSlide}>
        <FontAwesomeIcon icon={faChevronRight} />
    </button>

    {/* INDICATORS */}
    <div className="hero-indicators">
        {slides.map((_, i) => (
        <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={i === currentSlide ? 'active bg-primary' : 'bg-secondary'}
        />
        ))}
    </div>
    </section>

  );
};

export default HeroCarousel;
