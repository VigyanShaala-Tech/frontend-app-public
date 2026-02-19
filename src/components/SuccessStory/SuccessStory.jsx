import React, { useState } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faTimes } from '@fortawesome/free-solid-svg-icons';

import messages from '../../message/GlobalMessage.message';

import './SuccessStory.scss';

const SuccessStory = () => {
  const { formatMessage } = useIntl();
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="success-story">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <span className="badge bg-primary text-white mb-3">
            {formatMessage(messages['home.success.badge'])}
          </span>
          <h2 className="mb-3">
            {formatMessage(messages['home.success.heading'])}
          </h2>
          <p className="text-muted lead mb-4">
            {formatMessage(messages['home.success.subheading'])}
          </p>
        </div>

        {/* Video Thumbnail Card */}
        <div
          className="card overflow-hidden position-relative shadow-sm rounded cursor-pointer"
          onClick={() => setIsVideoOpen(true)}
        >
          {/* Play Button Overlay */}
          <div className="play-button-overlay">
            <div className="d-flex align-items-center justify-content-center">
              <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center p-4 shadow">
                <FontAwesomeIcon icon={faPlay} className="text-white video-play-btn" size="2x" />
              </div>
            </div>
          </div>

          {/* Thumbnail Image */}
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=675&fit=crop"
            alt={formatMessage(messages['home.success.video.thumbnail.alt'])}
            className="card-img-top w-100 h-100"
          />

          {/* Text Overlay */}
          <div className="text-overlay-container">
            <h4 className="text-white mb-2">
              {formatMessage(messages['home.success.video.title'])}
            </h4>
            <p className="text-white small mb-0">
              {formatMessage(messages['home.success.video.description'])}
            </p>
          </div>
        </div>

        {/* Video Modal */}
        {isVideoOpen && (
          <div className="video-open-model">
            <div className="video-modal-content">
              <button
                type="button"
                className="video-close-btn position-fixed btn btn-light rounded-circle p-3 shadow"
                onClick={() => setIsVideoOpen(false)}
                aria-label={formatMessage(messages['common.close'])}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>

              <div className="video-wrapper">
                <video
                  controls
                  autoPlay
                  poster={formatMessage(messages['home.success.video.poster'])}
                >
                  <source src="/videos/intro.mp4" type="video/mp4" />
                  {formatMessage(messages['home.success.video.unsupported'])}
                </video>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SuccessStory;