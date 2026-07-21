import React, { useState, useEffect, useCallback } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import messages from '../../message/GlobalMessage.message';
import './CommunitySection.scss';

import priyankaKajalImg from '../../assets/image/Our Tribe/Priyanka Kajal.jpg';
import drNehaVarshneyImg from '../../assets/image/Our Tribe/Dr. Neha Varshney.jpg';
import swathiBisanaImg from '../../assets/image/Our Tribe/Swathi Bisana.jpg';
import shilpiMitraImg from '../../assets/image/Our Tribe/Shilpi Mitra.jpg';
import jamunaVigneshImg from '../../assets/image/Our Tribe/Jamuna Vignesh.jpg';
import atulGopalImg from '../../assets/image/Our Tribe/Atul Gopal.jpg';
import adrikaRaybarmanImg from '../../assets/image/Our Tribe/Adrika Raybarman.jpg';
import truptiArabattiImg from '../../assets/image/Our Tribe/Trupti Arabatti.jpg';


const profiles = [
  { 
    nameKey: 'home.community.profile1.name', 
    roleKey: 'home.community.profile1.role', 
    image: priyankaKajalImg,
  },
  { 
    nameKey: 'home.community.profile2.name', 
    roleKey: 'home.community.profile2.role', 
    image: drNehaVarshneyImg,
  },
  { 
    nameKey: 'home.community.profile3.name', 
    roleKey: 'home.community.profile3.role', 
    image: swathiBisanaImg,
  },
  { 
    nameKey: 'home.community.profile4.name', 
    roleKey: 'home.community.profile4.role', 
    image: shilpiMitraImg,
  },
  { 
    nameKey: 'home.community.profile5.name', 
    roleKey: 'home.community.profile5.role', 
    image: jamunaVigneshImg,
  },
  { 
    nameKey: 'home.community.profile6.name', 
    roleKey: 'home.community.profile6.role', 
    image: atulGopalImg,
  },
  { 
    nameKey: 'home.community.profile7.name', 
    roleKey: 'home.community.profile7.role', 
    image: adrikaRaybarmanImg,
  },
  { 
    nameKey: 'home.community.profile8.name', 
    roleKey: 'home.community.profile8.role', 
    image: truptiArabattiImg,
  },
];


const VISIBLE_DESKTOP = 4;
const VISIBLE_MOBILE = 2;

const CommunitySection = () => {
  const { formatMessage } = useIntl();

  const [startIndex, setStartIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const visibleCount = isMobile ? VISIBLE_MOBILE : VISIBLE_DESKTOP;

  const nextSlide = useCallback(() => {
    setStartIndex((prev) => (prev + 1) % profiles.length);
  }, []);

  const prevSlide = useCallback(() => {
    setStartIndex((prev) => (prev - 1 + profiles.length) % profiles.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const getVisibleProfiles = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(profiles[(startIndex + i) % profiles.length]);
    }
    return visible;
  };

  return (
    <section className="community-section">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">
          {/* <span className="badge bg-primary text-white mb-3">
            {formatMessage(messages['home.community.badge'])}
          </span> */}

          <h2 className="mb-3">
            {formatMessage(messages['home.community.heading'])}
          </h2>

          <p className="text-muted lead">
            {formatMessage(messages['home.community.subheading'])}
          </p>
        </div>

        {/* Community Card */}
        <div className="community-card bg-white rounded mx-auto">

          {/* Heart Icon */}
          {/* <div className="heart-wrapper">
            <FontAwesomeIcon icon={faHeart} className="text-danger" />
          </div> */}

          <h3 className="mb-4 fw-bold text-center">
            {formatMessage(messages['home.community.happyStudents'])}
          </h3>

          {/* Profile Slider */}
          <div className="community-slider">

            <button
              type="button"
              className="community-arrow left"
              onClick={prevSlide}
              aria-label={formatMessage(messages['common.carousel.previous'])}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <div className="profiles-wrapper">
              {getVisibleProfiles().map((profile, index) => (
                <div key={index} className="profile-card">

                  <img
                    src={profile.image}
                    alt={formatMessage(messages[profile.nameKey])}
                    className="profile-avatar"
                  />

                  <p className="profile-name">{formatMessage(messages[profile.nameKey])}</p>
                  <p className="profile-role">{formatMessage(messages[profile.roleKey])}</p>

                </div>
              ))}
            </div>

            <button
              type="button"
              className="community-arrow right"
              onClick={nextSlide}
              aria-label={formatMessage(messages['common.carousel.next'])}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>

          </div>

          {/* Counter */}
          <div className="members-badge">
            {formatMessage(messages['home.community.membersBadge'])}
          </div>

          <p className="community-stat text-muted">
            {formatMessage(messages['home.community.statPrefix'])}
            {' '}
            <span className="community-stat__count">15,000+</span>
            {' '}
            {formatMessage(messages['home.community.statSuffix'])}
          </p>

        </div>
      </div>
    </section>
  );
};

export default CommunitySection;