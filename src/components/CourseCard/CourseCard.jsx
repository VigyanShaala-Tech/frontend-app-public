import React from 'react';
import { Button } from '@openedx/paragon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faChartLine,
  faStar,
  faUser,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import messages from '../../message/GlobalMessage.message';
import { useIntl } from '@edx/frontend-platform/i18n';

import './CourseCard.scss';
import PlaceholderImage from '../../assets/image/placeholder-image.jpeg';

const CourseCard = ({ course, layout = 'grid' }) => {
  const { formatMessage } = useIntl();
  const isList = layout === 'list';

  const hasDisplayValue = (value) => {
    if (value === null || value === undefined) return false;
    if (typeof value === 'number') return value > 0;
    const normalized = String(value).trim().toLowerCase();
    return normalized !== '' && normalized !== '0' && normalized !== 'null' && normalized !== 'undefined';
  };

  const showRating = Number(course?.rating) > 0 && Number(course?.reviews) > 0;
  const showDurationLevel = hasDisplayValue(course.duration) || hasDisplayValue(course.level);
  const showMetaList = hasDisplayValue(course.enrollments) || showRating || hasDisplayValue(course.instructor);

  const renderDurationLevel = () => (
    <>
      {hasDisplayValue(course.duration) && (
        <span className="course-card-meta-item">
          <FontAwesomeIcon icon={faClock} className="course-card-meta-icon" />
          <span>{course.duration}</span>
        </span>
      )}
      {hasDisplayValue(course.level) && (
        <span className="course-card-meta-item">
          <FontAwesomeIcon icon={faChartLine} className="course-card-meta-icon" />
          <span>{course.level}</span>
        </span>
      )}
    </>
  );

  const renderMetaList = () => (
    <>
      {hasDisplayValue(course.enrollments) && (
        <span className="course-card-meta-item">
          <FontAwesomeIcon icon={faUsers} className="course-card-meta-icon" />
          <span>
            {course.enrollments} {formatMessage(messages['courseAbout.student'])}
          </span>
        </span>
      )}
      {showRating && (
        <span className="course-card-meta-item">
          <FontAwesomeIcon icon={faStar} className="course-card-meta-icon text-warning" />
          <span>
            {course.rating} ({course.reviews})
          </span>
        </span>
      )}
      {hasDisplayValue(course.instructor) && (
        <span className="course-card-meta-item">
          <FontAwesomeIcon icon={faUser} className="course-card-meta-icon" />
          <span>{course.instructor}</span>
        </span>
      )}
    </>
  );

  const renderAction = (listAction = false) => (
    <div className={`course-card-action${listAction ? ' course-card-action--list' : ''}`}>
      <Link to={`/public/courses/${course.id}`} className={listAction ? '' : 'd-block'}>
        <Button block variant="primary" className={listAction ? 'w-100' : undefined}>
          {formatMessage(messages['catalog.course.enroll'])}
        </Button>
      </Link>
    </div>
  );

  if (!isList) {
    return (
      <div className="course-card grid-mode rounded h-100 w-100">
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
          {hasDisplayValue(course.category) && (
            <span className="badge position-absolute">
              {course.category}
            </span>
          )}
          {course.ribbon && (
            <div className="ribbon-top-right bg-primary">
              <span className="text-white">{course.ribbon}</span>
            </div>
          )}
        </div>

        <div className="course-card-body">
          <div className="course-card-content">
            {course.title && (
              <h4 className="course-title-grid">{course.title}</h4>
            )}
            {course.description && (
              <p className="text-muted course-short-discription-grid small">
                {course.description}
              </p>
            )}
            {showDurationLevel && (
              <div className="course-card-meta">
                <div className="course-card-meta-row">
                  {renderDurationLevel()}
                </div>
              </div>
            )}
            {showMetaList && (
              <div className="course-card-meta">
                <div className="course-card-meta-list">
                  {renderMetaList()}
                </div>
              </div>
            )}
          </div>
          {renderAction()}
        </div>
      </div>
    );
  }

  return (
    <div className="course-card list-mode d-flex rounded w-100">
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
        {hasDisplayValue(course.category) && (
          <span className="badge position-absolute">
            {course.category}
          </span>
        )}
      </div>

      <div className="course-card-body">
        <div className="course-card-content">
          {course.title && (
            <h4 className="course-title-list">{course.title}</h4>
          )}
          {course.description && (
            <p className="text-muted course-short-discription-list small">
              {course.description}
            </p>
          )}
          {(showDurationLevel || showMetaList) && (
            <div className="course-card-meta course-card-meta--inline">
              <div className="course-card-meta-list">
                {renderDurationLevel()}
                {renderMetaList()}
              </div>
            </div>
          )}
        </div>
        {renderAction(true)}
      </div>
    </div>
  );
};

export default CourseCard;
