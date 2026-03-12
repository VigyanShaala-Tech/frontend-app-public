import React, { useState, useEffect, useCallback } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import messages from '../../message/GlobalMessage.message';
import './CommunitySection.scss';

const profiles = [
  { name: 'Aarav Patel', role: 'Data Analyst', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop' },
  { name: 'Diya Sharma', role: 'Research Mentor', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop' },
  { name: 'Ishaan Kumar', role: 'ML Engineer', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&h=120&fit=crop' },
  { name: 'Ananya Reddy', role: 'Biotech Researcher', image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=120&h=120&fit=crop' },
  { name: 'Vivaan Singh', role: 'Data Scientist', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop' },
  { name: 'Kavya Nair', role: 'AI Researcher', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop' },
  { name: 'Arjun Mehta', role: 'Product Manager', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop' },
  { name: 'Priya Desai', role: 'UX Designer', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop' },
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
          <span className="badge bg-primary text-white mb-3">
            {formatMessage(messages['home.community.badge'])}
          </span>

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
          <div className="heart-wrapper">
            <FontAwesomeIcon icon={faHeart} className="text-danger" />
          </div>

          <h3 className="mb-4 fw-bold text-center">
            {formatMessage(messages['home.community.happyStudents'])}
          </h3>

          {/* Profile Slider */}
          <div className="community-slider">

            <button className="community-arrow left" onClick={prevSlide}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <div className="profiles-wrapper">
              {getVisibleProfiles().map((profile, index) => (
                <div key={index} className="profile-card">

                  <img
                    src={profile.image}
                    alt={profile.name}
                    className="profile-avatar"
                  />

                  <p className="profile-name">{profile.name}</p>
                  <p className="profile-role">{profile.role}</p>

                </div>
              ))}
            </div>

            <button className="community-arrow right" onClick={nextSlide}>
              <FontAwesomeIcon icon={faChevronRight} />
            </button>

          </div>

          {/* Counter */}
          <div className="members-badge">
            25,000+ members
          </div>

          <p className="community-stat text-muted">
            {formatMessage(messages['home.community.stat'])}
          </p>

        </div>
      </div>
    </section>
  );
};

export default CommunitySection;