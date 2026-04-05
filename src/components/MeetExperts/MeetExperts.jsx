import React, { useRef, useState, useEffect } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import messages from '../../message/GlobalMessage.message';
import './MeetExperts.scss';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const experts = [
  {
    id: 1,
    nameKey: 'home.experts.expert1.name',
    subjectKey: 'home.experts.expert1.subject',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=500&fit=crop',
    linkedin: '/linkedin/expert1',
  },
  {
    id: 2,
    nameKey: 'home.experts.expert2.name',
    subjectKey: 'home.experts.expert2.subject',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop',
    linkedin: '/linkedin/expert1',
  },
  {
    id: 3,
    nameKey: 'home.experts.expert3.name',
    subjectKey: 'home.experts.expert3.subject',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop',
    linkedin: '/linkedin/expert1',
  },
  {
    id: 4,
    nameKey: 'home.experts.expert4.name',
    subjectKey: 'home.experts.expert4.subject',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
    linkedin: '/linkedin/expert1',
  },
  {
    id: 5,
    nameKey: 'home.experts.expert5.name',
    subjectKey: 'home.experts.expert5.subject',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=500&fit=crop',
    linkedin: '/linkedin/expert1',
  },
  {
    id: 6,
    nameKey: 'home.experts.expert6.name',
    subjectKey: 'home.experts.expert6.subject',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
    linkedin: '/linkedin/expert1',
  },
  {
    id: 7,
    nameKey: 'home.experts.expert7.name',
    subjectKey: 'home.experts.expert7.subject',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
    linkedin: '/linkedin/expert1',
  },
  {
    id: 8,
    nameKey: 'home.experts.expert8.name',
    subjectKey: 'home.experts.expert8.subject',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop',
    linkedin: '/linkedin/expert1',
  },
];

const MeetExperts = () => {
  const { formatMessage } = useIntl();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 250;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 300);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  return (
    <section className="meet-experts">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          {/* <span className="badge bg-primary text-white mb-3">
            {formatMessage(messages['home.experts.badge'])}
          </span> */}
          <h2 className="mb-3">
            {formatMessage(messages['home.experts.heading'])}
          </h2>
          <p className="text-muted lead">
            {formatMessage(messages['home.experts.subheading'])}
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="meet-experts-carousel">
          {/* Left Arrow */}
          <button
            className="meet-arrow left"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Scrollable Content */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="experts-scroll d-flex overflow-auto pb-4 scrollbar-hide"
          >
            {experts.map((expert) => (
              <div key={expert.id} className="expert-item flex-shrink-0">
                <div className="meet-expert-card text-center h-100">
                  <div className="expert-image-wrapper mx-auto mb-4 overflow-hidden">
                    <img
                      src={expert.image}
                      alt={formatMessage(messages[expert.nameKey])}
                      className="expert-image w-100 h-100 object-cover"
                    />
                  </div>
                  <h5 className="expert-name">
                    {formatMessage(messages[expert.nameKey])}
                  </h5>
                  <p className="text-muted small mb-0 expert-subject">
                    {formatMessage(messages[expert.subjectKey])}
                  </p>
                  <Link
                    to={expert.linkedin}
                    className="expert-linkedin text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="meet-arrow right"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MeetExperts;