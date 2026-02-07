import React from 'react';
import { Button } from '@openedx/paragon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faChartLine,
  faStar,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import messages from '../../message/GlobalMessage.message';
import { useIntl } from '@edx/frontend-platform/i18n';

import './CourseCard.scss';

const CourseCard = ({ course, layout = 'grid' }) => {
  const { formatMessage } = useIntl();
  const isList = layout === 'list';

  // ── Grid Layout ────────────────────────────────────────────────────────────
  if (!isList) {
    return (
      <div className="course-card grid-mode rounded">
        <div className="course-image-wrapper">
          <img
            src={course.image}
            alt={course.title}
            className="course-image"
          />
          <span className="badge position-absolute">
            {course.category}
          </span>
        </div>

        <div className="p-4 d-flex flex-column h-100">
          <h4 className="mb-2 course-title">{course.title}</h4>
          <p className="text-muted small mb-3 flex-grow-1">
            {course.description}
          </p>

          <div className="d-flex flex-wrap gap-3 text-muted small mb-3">
            <div>
              <FontAwesomeIcon icon={faClock} className="me-1 mr-2" />
              {course.duration}
            </div>
            <div>
              <FontAwesomeIcon icon={faChartLine} className="me-1 mr-2 ml-4" />
              {course.level}
            </div>
          </div>
          <div className="d-flex align-items-center mb-4">
            <FontAwesomeIcon icon={faStar} className="me-1 text-warning mr-2" />
            {course.rating} ({course.reviews})
          </div>

          <div className="d-flex align-items-center mb-4">
            <FontAwesomeIcon icon={faUser} className="me-2 text-muted mr-2" />
            <span className="small">{course.instructor}</span>
          </div>

          <Link to={`/public/courses/${course.id}`} className="mt-auto">
            <Button block variant="primary">
              {formatMessage(messages['catalog.course.enroll'])}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // ── List Layout ────────────────────────────────────────────────────────────
  return (
    <div className="course-card list-mode d-flex rounded">
      <div className="course-image-wrapper">
        <img
          src={course.image}
          alt={course.title}
          className="course-image"
        />
        <span className="badge position-absolute">
          {course.category}
        </span>
      </div>

      <div className="p-4 flex-grow-1 d-flex flex-column">
        <h4 className="mb-2 course-title">{course.title}</h4>
        <p className="text-muted small mb-3 flex-grow-1">
          {course.description}
        </p>

        <div className="d-flex flex-wrap gap-3 text-muted small mb-3">
          <div>
            <FontAwesomeIcon icon={faClock} className="me-1 mr-2" />
            {course.duration}
          </div>
          <div>
            <FontAwesomeIcon icon={faChartLine} className="me-1 mr-2 ml-4" />
            {course.level}
          </div>
          <div>
            <FontAwesomeIcon icon={faStar} className="me-1 text-warning ml-4 mr-2" />
            {course.rating} ({course.reviews})
          </div>

          <div>
            <FontAwesomeIcon icon={faUser} className="me-2 text-muted ml-4 mr-2" />
            <span className="small">{course.instructor}</span>
          </div>
        </div>
        <div className="mt-auto d-flex justify-content-end">
          <Link to={`/courses/${course.id}`} >
            <Button block variant="primary" className='w-100'>
              {formatMessage(messages['catalog.course.enroll'])}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;