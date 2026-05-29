import React, { useState, useEffect } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import messages from '../../message/GlobalMessage.message';

import './SuccessStory.scss';

const SuccessStory = () => {
  const { formatMessage } = useIntl();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const youtubeVideos = [
    "iZ2FAljBOG0",
    "DCIzWulBv7k",
    "8id00FwfiX8"
  ];

  useEffect(() => {
    if (!isVideoOpen) return;

    const handleYouTubeMessage = (event) => {
      if (event.origin !== "https://www.youtube.com") return;
      
      try {
        const data = JSON.parse(event.data);
        if (data.event === "onStateChange" && data.info === 0) {
          handleNext();
        }
      } catch (err) {}
    };

    window.addEventListener("message", handleYouTubeMessage);
    return () => window.removeEventListener("message", handleYouTubeMessage);
  }, [isVideoOpen, currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % youtubeVideos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + youtubeVideos.length) % youtubeVideos.length);
  };

  const closeModal = () => {
    setIsVideoOpen(false);
    setCurrentIndex(0);
  };

  return (
    <section className="success-story">
      <div className="container">
        <div className="text-center mb-5">
          {/* <span className="badge bg-primary text-white mb-3">
            {formatMessage(messages['home.success.badge'])}
          </span> */}
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
            {/* <p className="text-white small mb-0">
              {formatMessage(messages['home.success.video.description'])}
            </p> */}
          </div>
        </div>

        {/* Video Modal - Design kept same as your SCSS */}
        {isVideoOpen && (
          <div className="video-open-model" onClick={closeModal}>
            <div 
              className="video-modal-content" 
              onClick={e => e.stopPropagation()}
            >
              <button
                type="button"
                className="video-close-btn position-fixed btn btn-light rounded-circle p-3 shadow"
                onClick={closeModal}
                aria-label={formatMessage(messages['common.close'])}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>

              <div className="video-wrapper">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${youtubeVideos[currentIndex]}?autoplay=1&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&fs=1&cc_load_policy=0&disablekb=0`}
                  title={formatMessage(messages['home.success.video.title'])}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Navigation Buttons */}
              <div className="d-flex navigation-button justify-content-center mt-3">
                <button
                  type="button"
                  className="btn btn-outline-primary rounded-circle mr-4"
                  onClick={handlePrev}
                  aria-label={formatMessage(messages['common.carousel.previous'])}
                >
                  <FontAwesomeIcon icon={faChevronLeft} size="lg" />
                </button>

                <button
                  type="button"
                  className="btn btn-outline-primary rounded-circle"
                  onClick={handleNext}
                  aria-label={formatMessage(messages['common.carousel.next'])}
                >
                  <FontAwesomeIcon icon={faChevronRight} size="lg" />
                </button>
              </div>

              {/* Video Counter */}
              <div className="text-center text-white mt-2">
                {formatMessage(messages['home.success.video.counter'], {
                  current: currentIndex + 1,
                  total: youtubeVideos.length,
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SuccessStory;