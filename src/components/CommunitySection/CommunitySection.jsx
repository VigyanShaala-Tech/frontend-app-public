import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import messages from '../../message/GlobalMessage.message';

import './CommunitySection.scss';

// Avatars (same as your lovable code)
const avatars = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=60&h=60&fit=crop',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=60&h=60&fit=crop',
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=60&h=60&fit=crop',
];

const CommunitySection = () => {
  const { formatMessage } = useIntl();

  return (
    <section className="community-section">
      <div className="container">
        {/* Heading Section */}
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
        <div className="community-card mx-auto rounded overflow-hidden">
          <div className="card-body text-center position-relative">
            {/* Heart Icon */}
            <div className="heart-wrapper rounded-circle bg-light mx-auto mb-4 d-flex align-items-center justify-content-center">
              <FontAwesomeIcon icon={faHeart} className="text-danger" size="2x" />
            </div>

            {/* Happy Students Heading - now from messages */}
            <h3 className="mb-2 fw-bold">
              {formatMessage(messages['home.community.happyStudents'])}
            </h3>

            {/* Overlapping Avatars */}
            <div className="avatars-container d-flex justify-content-center mb-4">
              {avatars.map((avatar, index) => (
                <div
                  key={index}
                  className="avatar-item rounded-circle overflow-hidden border border-white shadow-sm"
                  style={{ zIndex: avatars.length - index }}
                >
                  <img
                    src={avatar}
                    alt={`Student ${index + 1}`}
                    className="w-100 h-100 object-cover"
                  />
                </div>
              ))}

              {/* +25k Badge - kept as is (not translatable number) */}
              <div className="avatar-plus rounded-circle bg-primary d-flex align-items-center justify-content-center text-white fw-bold border border-white shadow-sm">
                {formatMessage(messages['home.community.avatarPlus'])}
              </div>
            </div>

            {/* Stats Text - from message file */}
            <p className="text-muted mb-0">
              {formatMessage(messages['home.community.stat'])}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;