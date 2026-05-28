import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { useIntl } from '@edx/frontend-platform/i18n';
import { Link } from 'react-router-dom';
import "./OurStory.scss";
import messages from './messages';

import banner from '../../../assets/image/Story-images/2021-our-story-300x200.jpg'
import timeline_1 from "../../../assets/image/Story-images/timeline-1-300x200.jpg"
import timeline_2 from '../../../assets/image/Story-images/timeline-2-300x169.jpg';
import timeline_3 from '../../../assets/image/Story-images/timeline-3-300x201.jpg';
import timeline_4 from '../../../assets/image/Story-images/timeline-4-300x200.jpg';
import timeline_5 from '../../../assets/image/Story-images/2020-our-story-300x200.jpg';
import timeline_6 from '../../../assets/image/Story-images/2021-our-story-300x200.jpg';

const timelineData = [
  { id: 0, year: "2015", image: timeline_1 },
  { id: 1, year: "2016-17", image: timeline_2 },
  { id: 2, year: "2018", image: timeline_3 },
  { id: 3, year: "2019", image: timeline_4 },
  { id: 4, year: "2020", image: timeline_5 },
  { id: 5, year: "2021", image: timeline_6 },
];

const OurStory = () => {
  const { formatMessage } = useIntl();
  const timelineRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [iconPositions, setIconPositions] = useState([]);
  const [lineTop, setLineTop] = useState(250);
  const [lineHeight, setLineHeight] = useState(1000);

  const handleScroll = () => {
    if (!timelineRef.current) return;

    const viewportMiddle = window.innerHeight / 2;

    const items = timelineRef.current.querySelectorAll('.story-timeline-item');
    if (!items.length) return;

    const positions = [];

    const firstItemTop = items[0].getBoundingClientRect().top + window.scrollY;
    const lastItemTop = items[items.length - 1].getBoundingClientRect().top + window.scrollY;

    const scrollMiddle = window.scrollY + viewportMiddle;

    let progressValue = 0;

    if (scrollMiddle >= firstItemTop) {
        progressValue = ((scrollMiddle - firstItemTop) / (lastItemTop - firstItemTop)) * 100;
        progressValue = Math.max(0, Math.min(100, progressValue));
    }

    setProgress(progressValue);

    let currentActive = -1;

    items.forEach((item, idx) => {
        const rect = item.getBoundingClientRect();
        const itemMiddle = rect.top + rect.height / 2 + window.scrollY;

        positions.push(itemMiddle - firstItemTop);

        if (Math.abs(scrollMiddle - itemMiddle) < viewportMiddle * 0.4) {
        currentActive = idx;
        }
    });

    setIconPositions(positions);
    setActiveIndex(currentActive);
    if (positions.length) {
        const firstIconY = positions[0];
        const lastIconY = positions[positions.length - 1];

        setLineTop(firstIconY);
        setLineHeight(lastIconY - firstIconY);
    }
    };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="story-page">
      <section className="py-5">
        <div className="container">

          <nav className="breadcrumb text-muted small mb-4">
            <Link to="/public" className="text-muted text-decoration-none">
              {formatMessage(messages['story.breadcrumb.home'])}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-dark">
              {formatMessage(messages['story.breadcrumb.story'])}
            </span>
          </nav>

          <h1 className="team-page-heading ">
            {formatMessage(messages['story.page.title'])}
          </h1>

          <div className="story-vision-mission">
            <h2 className="story-section-subtitle">
              {formatMessage(messages['story.vision.title'])}
            </h2>
            <p className="story-paragraph">
              {formatMessage(messages['story.vision.text'])}
            </p>

            <h2 className="story-section-subtitle">
              {formatMessage(messages['story.mission.title'])}
            </h2>
            <p className="story-paragraph">
              {formatMessage(messages['story.mission.text'])}
            </p>
          </div>

          <div className="story-hero">
            <div className="story-hero-text">
              <p className="story-paragraph">
                {formatMessage(messages['story.hero.text'])}
              </p>
            </div>
            <div className="story-hero-image">
              <img
                src={banner}
                alt={formatMessage(messages['story.hero.image.alt'])}
                className="story-hero-img"
              />
            </div>
          </div>

          <p className="story-paragraph story-conclusion">
            {formatMessage(messages['story.hero.conclusion'])}
          </p>

          {/* ───── Timeline ───── */}
          <div className="story-timeline" ref={timelineRef}>
            <div className="story-timeline-line " style={{
                top: `${lineTop}px`,
                height: `${lineHeight}px`,
              }}>
              <div
                className="story-timeline-progress bg-primary"
                style={{ height: `${progress}%` }}
              />
            </div>

            <div className="story-timeline-icons">
              {timelineData.map((_, idx) => (
                <div
                  key={idx}
                  className={`story-timeline-icon ${activeIndex >= idx ? 'active bg-primary text-white' : ''}`}
                  style={{ top: `${iconPositions[idx]}px` }}
                >
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </div>
              ))}
            </div>

            <div className="story-timeline-items">
              {timelineData.map((item, idx) => (
                <div
                  key={idx}
                  className={`story-timeline-item py-5 ${idx % 2 === 0 ? 'even' : 'odd'}`}
                >
                  <div className="story-timeline-content">
                    <h3 className="text-year">{item.year}</h3>
                    {formatMessage(messages[`story.timeline.${idx}`])}
                  </div>
                  <div className="story-timeline-image-wrapper">
                    <img
                      src={item.image}
                      alt={formatMessage(messages['story.timeline.image.alt'], { number: idx + 1 })}
                      className="story-timeline-img"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="story-paragraph story-footer-text">
            {formatMessage(messages['story.footer.text'])}
          </p>

        </div>
      </section>
    </div>
  );
};

export default OurStory;