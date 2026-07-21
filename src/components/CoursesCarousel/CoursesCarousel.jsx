import React, { useState, useRef, useEffect } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import CourseCard from '../CourseCard/CourseCard';
import messages from '../../message/GlobalMessage.message';
import { useNavigate } from 'react-router-dom';
import { fetchCatalogCourses, mapCatalogCourses } from '../../api';

import './CoursesCarousel.scss';

const CoursesCarousel = () => {
  const { formatMessage } = useIntl();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 380; // adjust based on card width + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 300);
    }
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetchCatalogCourses();

        if (response.status === 200 && response.data?.results) {
          setCourses(mapCatalogCourses(response.data.results));
        } 
      } catch (err) {
        console.error('Courses fetch failed:', err);
      }
    };

    fetchCourses();
  }, []);



  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [courses]);

  return (
    <section className="courses-carousel">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-3">
          {/* <span className="badge bg-primary text-white mb-3">
            {formatMessage(messages['home.courses.badge'])}
          </span> */}
          <h2 className="mb-2 course-carousel-header">
            {formatMessage(messages['home.courses.heading'])}
          </h2>
          <p className="text-muted lead">
            {formatMessage(messages['home.courses.subheading'])}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="position-relative">
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="d-flex overflow-auto pb-4 scrollbar-hide"
            style={{ scrollBehavior: 'smooth' }}
          >
            {courses.map((course) => (
              <div
                key={course.id}
                className="flex-shrink-0 mr-4 py-3 course-card-wrapper d-flex"
              >
                <CourseCard course={course} layout="grid" />
              </div>
            ))}
          </div>

        </div>
        {/* Navigation Arrows */}
        <div className='navigation-arrow-container'>
            <button
                type="button"
                className="carousel-arrow left btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                aria-label={formatMessage(messages['common.carousel.previous'])}
            >
                <FontAwesomeIcon icon={faChevronLeft} className="text-white" />
            </button>

            <button
                type="button"
                className="carousel-arrow right btn btn-primary rounded-circle  d-flex align-items-center justify-content-center"
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                aria-label={formatMessage(messages['common.carousel.next'])}
            >
                <FontAwesomeIcon icon={faChevronRight} className="text-white" />
            </button>
        </div>

        {/* Explore All CTA */}
        <div className="text-center mt-5 courses-carousel-cta">
          <button className="btn btn-outline-primary px-5 py-3" onClick={() => navigate('/public/courses')}>
            {formatMessage(messages['home.courses.exploreAll'])}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesCarousel;