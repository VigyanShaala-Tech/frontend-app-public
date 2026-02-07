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
    <section className="success-story py-5">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <span className="badge bg-primary text-white mb-3">
            Success Stories
          </span>
          <h2 className="mb-3">
            {formatMessage(messages['home.success.heading'])}
          </h2>
          <p className="text-muted lead mb-4">
            {formatMessage(messages['home.success.subheading'])}
          </p>
        </div>

        {/* Video Thumbnail Card */}
        <div className="card overflow-hidden position-relative shadow-sm rounded cursor-pointer" onClick={() => setIsVideoOpen(true)}>
          {/* Play Button Overlay */}
          <div className="position-absolute top-50 start-50 translate-middle z-10">
            <div className="d-flex align-items-center justify-content-center">
              <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center p-4 shadow">
                <FontAwesomeIcon icon={faPlay} className="text-white" size="2x" />
              </div>
            </div>
          </div>

          {/* Thumbnail Image */}
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=675&fit=crop"
            alt="Success Story Video Thumbnail"
            className="card-img-top w-100"
            style={{ height: '450px', objectFit: 'cover' }}
          />

          {/* Text Overlay */}
          <div className="position-absolute bottom-0 start-0 end-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
            <h4 className="text-white mb-2">
              From Beginner to Data Scientist
            </h4>
            <p className="text-white small mb-0">
              Watch how Priya transformed her career in just 6 months with VigyanShaala's comprehensive data science program
            </p>
          </div>
        </div>

        {/* Fullscreen Video Modal */}
        {isVideoOpen && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 bg-dark d-flex align-items-center justify-content-center z-50"
            style={{ backgroundColor: 'rgba(0,0,0,0.9)' }}
            onClick={() => setIsVideoOpen(false)}
          >
            <div className="position-relative w-100 h-100 p-4" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <button
                type="button"
                className="position-absolute top-0 end-0 m-4 btn btn-light rounded-circle p-3 shadow"
                onClick={() => setIsVideoOpen(false)}
                aria-label="Close video"
              >
                <FontAwesomeIcon icon={faTimes} size="lg" />
              </button>

              {/* Video Placeholder (replace src with real YouTube/Vimeo embed or video file) */}
              <div className="w-100 h-100 d-flex align-items-center justify-content-center bg-black rounded">
                <div className="text-center text-white">
                  <FontAwesomeIcon icon={faPlay} size="5x" className="mb-4 text-primary" />
                  <p className="h4">Video Player Placeholder</p>
                  <p className="small text-muted">
                    Embed your video here (YouTube, Vimeo, or self-hosted)
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SuccessStory;