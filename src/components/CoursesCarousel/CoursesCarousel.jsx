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


import './CoursesCarousel.scss';

const courses = [
  {
    id: 1,
    title: 'Complete Python Bootcamp',
    description: 'Master Python programming from scratch with hands-on projects and real-world applications.',
    rating: 4.9,
    reviews: 2340,
    instructor: 'Dr. Sarah Johnson',
    category: 'Development',
    duration: '42 hours',
    level: 'Beginner to Advanced',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800',
  },
  {
    id: 2,
    title: 'Data Science Fundamentals',
    description: 'Learn data analysis, visualization, and machine learning concepts with practical exercises.',
    rating: 4.8,
    reviews: 1890,
    instructor: 'Prof. Michael Chen',
    category: 'Data Science',
    duration: '50 hours',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
  },
  {
    id: 3,
    title: 'Business Communication',
    description: 'Enhance your professional communication skills for the modern workplace.',
    rating: 4.7,
    reviews: 1560,
    instructor: 'Dr. Emily Roberts',
    category: 'Business',
    duration: '25 hours',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800',
  },
  {
    id: 4,
    title: 'UI/UX Design Mastery',
    description: 'Create stunning user interfaces and seamless user experiences from concept to prototype.',
    rating: 4.9,
    reviews: 2100,
    instructor: 'Alex Thompson',
    category: 'Design',
    duration: '45 hours',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
  },
  {
    id: 5,
    title: 'Financial Literacy 101',
    description: 'Build a strong foundation in personal finance and investment strategies.',
    rating: 4.6,
    reviews: 980,
    instructor: 'James Wilson',
    category: 'Finance',
    duration: '20 hours',
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800',
  },
  {
    id: 6,
    title: 'Content Marketing Strategy',
    description: 'Learn to create compelling content that drives engagement and conversions.',
    rating: 4.8,
    reviews: 1340,
    instructor: 'Lisa Anderson',
    category: 'Marketing',
    duration: '35 hours',
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800',
  },
];

const CoursesCarousel = () => {
  const { formatMessage } = useIntl();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const navigate = useNavigate();


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
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  return (
    <section className="courses-carousel py-5">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <span className="badge bg-primary text-white mb-3">
            Featured Courses
          </span>
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
                className="flex-shrink-0 mr-4 py-3 course-card-wrapper"
              >
                <CourseCard course={course} layout="grid" />
              </div>
            ))}
          </div>

        </div>
        {/* Navigation Arrows */}
        <div className='navigation-arrow-container'>
            <button
                className="carousel-arrow left btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
            >
                <FontAwesomeIcon icon={faChevronLeft} className="text-white" />
            </button>

            <button
                className="carousel-arrow right btn btn-primary rounded-circle  d-flex align-items-center justify-content-center"
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
            >
                <FontAwesomeIcon icon={faChevronRight} className="text-white" />
            </button>
        </div>

        {/* Explore All CTA */}
        <div className="text-center mt-5">
          <button className="btn btn-outline-primary px-5 py-3" onClick={() => navigate('/public/courses')}>
            {formatMessage(messages['home.courses.exploreAll'])}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesCarousel;