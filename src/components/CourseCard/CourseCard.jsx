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
import PlaceholderImage from '../../assets/image/placeholder-image.jpeg';

const CourseCard = ({ course, layout = 'grid' }) => {
  const { formatMessage } = useIntl();
  const isList = layout === 'list';

  // ── Grid Layout ────────────────────────────────────────────────────────────
  if (!isList) {
    return (
      <div className="course-card grid-mode rounded">
        <div className="course-image-wrapper">
          <img
            src={course.image || PlaceholderImage} 
            alt={course.title}
            className="course-image"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = PlaceholderImage;
            }}
          />
          {course.category && 
          <span className="badge position-absolute">
            {course.category}
          </span>
          }
        </div>

        <div className="p-4 d-flex flex-column h-100">
          <div className="course-card-content-container-grid">
            {course.title &&
            <h4 className="mb-2 course-title-grid">{course.title}</h4>
            }
            {course.description &&
            <p className="text-muted course-short-discription-grid small mb-3 flex-grow-1">
              {course.description}
            </p>
            }

            <div className="d-flex flex-wrap gap-3 text-muted small mb-3">
              {course.duration &&
              <div className='mr-4'>
                <FontAwesomeIcon icon={faClock} className="me-1 mr-2" />
                {course.duration}
              </div>
              }
              {course.level &&
              <div>
                <FontAwesomeIcon icon={faChartLine} className="me-1 mr-2" />
                {course.level}
              </div>
              }
            </div>
            {course.rating && course.reviews &&
            <div className="d-flex align-items-center mb-4">
              <FontAwesomeIcon icon={faStar} className="me-1 text-warning mr-2" />
              {course.rating} ({course.reviews})
            </div>
            }
            {course.instructor &&
            <div className="d-flex align-items-center mb-4">
              <FontAwesomeIcon icon={faUser} className="me-2 text-muted mr-2" />
              <span className="small">{course.instructor}</span>
            </div>
            }
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
          src={course.image || PlaceholderImage}
          alt={course.title}
          className="course-image"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = PlaceholderImage;
          }}
        />
        <span className="badge position-absolute">
          {course.category}
        </span>
      </div>

      <div className="p-4 flex-grow-1 d-flex flex-column">
        {course.title && 
        <h4 className="mb-2 course-title-list">{course.title}</h4>
        }
        {course.description &&
        <p className="text-muted course-short-discription-list small mb-3 flex-grow-1">
          {course.description}
        </p>
        }

        <div className="d-flex flex-wrap gap-3 text-muted small mb-3">
          {course.duration &&
          <div className='mr-4'>
            <FontAwesomeIcon icon={faClock} className="me-1 mr-2" />
            {course.duration}
          </div>
          }
          {course.level &&
          <div className='mr-4'>
            <FontAwesomeIcon icon={faChartLine} className="me-1 mr-2 " />
            {course.level}
          </div>
          }
          {course.rating && course.reviews &&
          <div className=' mr-4'>
            <FontAwesomeIcon icon={faStar} className="me-1 text-warning mr-2" />
            {course.rating} ({course.reviews})
          </div>
          }
          {course.instructor &&
          <div>
            <FontAwesomeIcon icon={faUser} className="me-2 text-muted mr-2" />
            <span className="small">{course.instructor}</span>
          </div>
          }
        </div>
        <div className="mt-auto d-flex justify-content-end">
          <Link to={`/public/courses/${course.id}`} >
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