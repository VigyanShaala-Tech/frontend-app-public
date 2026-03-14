import React, { useState, useEffect } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Button, Spinner, Alert } from '@openedx/paragon';
import {
  faStar,
  faClock,
  faChartLine,
  faUsers,
  faPlayCircle,
  faAward,
  faChevronDown,
  faChevronUp,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from 'react-router-dom';

import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth'; 
import { getConfig } from '@edx/frontend-platform';
import messages from '../../message/GlobalMessage.message';
import PlaceholderImage from '../../assets/image/placeholder-image.jpeg'
import PlaceholderProfileImage from '../../assets/image/profile-placeholder.jpeg'
import { useContext } from 'react';
import { AppContext } from '@edx/frontend-platform/react';

import './CourseAbout.scss';

const tabs = ['Overview', 'Curriculum', 'Instructor', 'Reviews'];

const CourseAbout = () => {
  const { formatMessage } = useIntl();
  const { id: courseId } = useParams();
  const { authenticatedUser, config } = useContext(AppContext);

  const [course, setCourse] = useState(null);
  const [curriculum, setCurriculum] = useState(null);
  const [instructors, setInstructors] = useState([]);
  const [reviews, setReviews] = useState([]);

  const [activeTab, setActiveTab] = useState('Overview');
  const [expandedSections, setExpandedSections] = useState([]);

  const [loadingCourse, setLoadingCourse] = useState(true);
  const [errorCourse, setErrorCourse] = useState(null);

  const [loadingCurriculum, setLoadingCurriculum] = useState(false);
  const [loadingInstructors, setLoadingInstructors] = useState(false);
  const [loadingReviews, setLoadingReviews] = useState(false);

  const baseUrl = getConfig().LMS_BASE_URL;
  const httpClient = getAuthenticatedHttpClient();
  const learningBaseUrl = config.LEARNING_BASE_URL;
  const loginBaseUrl = config.LOGIN_URL;
  const catalogBaseUrl = config.CATALOG_MICROFRONTEND_URL;
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [enrollError, setEnrollError] = useState(null);
  const [isCourseWhishlisted, setIsCourseWhishlisted] = useState(false);

  // Fetch main course details once on mount
  useEffect(() => {
    const fetchCourse = async () => {
      setLoadingCourse(true);
      setErrorCourse(null);
      try {
        const res = await httpClient.get(`${baseUrl}/api/v1/catalog/courses/${courseId}/`);
        if (res.status === 200 && res.data) {
          setCourse(res.data);
          setIsCourseWhishlisted(res.data.is_wishlisted)
        }
      } catch (err) {
        console.error('Failed to fetch course:', err);
        setErrorCourse(formatMessage(messages['courseAbout.error.loadCourse']));
      } finally {
        setLoadingCourse(false);
      }
    };

    if (courseId) fetchCourse();
  }, [courseId]);

  // Lazy-load tab-specific data when tab changes
  useEffect(() => {
    if (activeTab === 'Curriculum' && !curriculum) {
      const fetchCurriculum = async () => {
        setLoadingCurriculum(true);
        try {
          const res = await httpClient.get(`${baseUrl}/api/v1/catalog/course-curriculum/${courseId}/`);
          if (res.status === 200 && res.data) {
            setCurriculum(res.data);
          }
        } catch (err) {
          console.error('Failed to fetch curriculum:', err);
        } finally {
          setLoadingCurriculum(false);
        }
      };
      fetchCurriculum();
    }

    if (activeTab === 'Instructor' && instructors.length === 0) {
      const fetchInstructors = async () => {
        setLoadingInstructors(true);
        try {
          const res = await httpClient.get(`${baseUrl}/api/v1/catalog/course-instructors/${courseId}/`);
          if (res.status === 200 && Array.isArray(res.data)) {
            setInstructors(res.data);
          }
        } catch (err) {
          console.error('Failed to fetch instructors:', err);
        } finally {
          setLoadingInstructors(false);
        }
      };
      fetchInstructors();
    }

    if (activeTab === 'Reviews' && reviews.length === 0) {
      const fetchReviews = async () => {
        setLoadingReviews(true);
        try {
          const res = await httpClient.get(`${baseUrl}/api/v1/catalog/course-reviews/${courseId}/`);
          if (res.status === 200 && Array.isArray(res.data)) {
            setReviews(res.data);
          }
        } catch (err) {
          console.error('Failed to fetch reviews:', err);
        } finally {
          setLoadingReviews(false);
        }
      };
      fetchReviews();
    }
  }, [activeTab, courseId]);

  const toggleSection = (index) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Toggle heart for a specific instructor
  const toggleCourseHeart = async () => {
    try {
      if (isCourseWhishlisted) {
        // Remove from wishlist
        const response = await httpClient.post(
          `${baseUrl}/api/v1/wishlist/remove/`,
          {
            course_id: courseId,
          }
        );

        if (response.status === 200) {
          setIsCourseWhishlisted(false);
        }
      } else {
        // Add to wishlist
        const response = await httpClient.post(
          `${baseUrl}/api/v1/wishlist/add/`,
          {
            course_id: courseId,
          }
        );

        if (response.status === 200) {
          setIsCourseWhishlisted(true);
        }
      }
    } catch (error) {
      console.error("Wishlist action failed:", error);

      // optional: redirect to login if not authenticated
      if (error.response?.status === 401 || error.response?.status === 403) {
        const nextPath = encodeURIComponent(`${catalogBaseUrl}courses/${courseId}`);
        window.location.href = `${loginBaseUrl}?next=${nextPath}`;
      }
    }
  };

  // ────────────────────────────────────────────────
  //          Enrollment Logic
  // ────────────────────────────────────────────────
  const isInvitationOnly = course?.invitation_only === true;
  const canEnrollNow = course?.can_enroll === true;
  const isAlreadyEnrolled = course?.enrollment?.is_active === true;

  const handleEnrollAction = async () => {
    // 1. Already enrolled → go to Learning MFE
    if (isAlreadyEnrolled) {
      const learningUrl = `${learningBaseUrl}/course/${courseId}`;
      window.location.href = learningUrl;
      return;
    }

    // 2. Try to enroll
    setIsEnrolling(true);
    setEnrollError(null);

    try {
      const response = await httpClient.post(
        `${baseUrl}/change_enrollment`,
        {
          course_id: courseId,
          enrollment_action: 'enroll',
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.status === 200) {
        // Redirect to dashboard
        window.location.href = `${baseUrl}/dashboard`;
      }
    } catch (err) {
      if (err.response?.status === 403 || err.response?.status === 401) {
        // Not logged in or session expired
        // const nextPath = encodeURIComponent(`/courses/${courseId}/about`);
        const nextPath = encodeURIComponent(`${catalogBaseUrl}courses/${courseId}`);

        window.location.href = `${loginBaseUrl}?next=${nextPath}`;
      } else {
        // Other errors
        setEnrollError(
          err.response?.data?.message
        );
      }
    } finally {
      setIsEnrolling(false);
    }
  };

  if (loadingCourse) {
    return (
      <div className="d-flex justify-content-center py-8">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  if (errorCourse || !course) {
    return (
      <div className="container py-5">
        <Alert variant="danger">{errorCourse}</Alert>
      </div>
    );
  }

  return (
    <div className="course-about-page">
      {/* Banner / Header */}
      <section className="py-5">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="page-mapped text-muted small mb-3">
            <Link to="/public" className="text-muted text-decoration-none">
              {formatMessage(messages['courseAbout.breadcrumb.home'])}
            </Link>
            <span className="mx-2">/</span>
            <Link to="/public/courses" className="text-muted text-decoration-none">
              {formatMessage(messages['courseAbout.breadcrumb.courses'])}
            </Link>
            <span className="mx-2">/</span>
            {course.name &&
            <span className="text-dark">{course.name}</span>
            }
          </nav>

          {/* Title & Meta */}
          {course.name &&
          <h1 className="course-heading mb-3">{course.name}</h1>
          }
          {course.short_description &&
          <p className="course-detail-paragraph text-muted lead mb-4">{course.short_description}</p>
          }

          <div className="course-reach-details d-flex flex-wrap text-muted mb-4">
            {(course.rating > 0) && (course.no_of_reviews > 0) &&
            <div className="d-flex align-items-center mr-4">
              <FontAwesomeIcon icon={faStar} className="text-warning mr-2" />
              <span className="fw-bold">{course.rating}</span>
              <span>({course.no_of_reviews} {formatMessage(messages['courseAbout.tab.reviews'])})</span>
            </div>
            }
            {course.enrollments &&
            <div className="d-flex align-items-center mr-4">
              <FontAwesomeIcon icon={faUsers} className="mr-2" />
              <span>{course.enrollments} {formatMessage(messages['courseAbout.student'])}</span>
            </div>
            }
            {course.effort &&
            <div className="d-flex align-items-center ">
              <FontAwesomeIcon icon={faClock} className="mr-2" />
              <span>{course.effort}</span>
            </div>
            }
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="main-content bg-white">
        <div className="container">
          <div className="row g-5">
            {/* Left - Tabs & Content */}
            <div className="col-lg-8">
              {/* Tabs */}
              <div className="mb-4">
                <div className="d-flex overflow-auto p-3">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      className={`btn mr-2 ${
                        activeTab === tab ? 'btn-primary fw-bold' : 'button-inactive-color'
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {formatMessage(messages[`courseAbout.tab.${tab.toLowerCase()}`])}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="tab-container container rounded">
                {activeTab === 'Overview' && (
                  <div className="pl-3 pt-4 pr-3 pb-4 ">
                    <div dangerouslySetInnerHTML={{ __html: course.overview || `
                    <p>${formatMessage(messages['common.noData'], {
                      section: formatMessage(messages['courseAbout.tab.overview']).toLowerCase(),
                      })}
                    </p>` }} />
                  </div>
                )}

                {activeTab === 'Curriculum' && (
                  <div className="p-4">
                    {loadingCurriculum ? (
                      <Spinner animation="border" variant="primary" />
                    ) : curriculum && Object.keys(curriculum).length > 0 ?  (
                      <>
                      <h3 className="mb-4">{formatMessage(messages['courseAbout.courseCurriculum'])}</h3>
                      <div className="accordion">
                        {Object.entries(curriculum).map(([moduleTitle, lessons], idx) => (
                          <div key={idx} className="accordion-item border rounded bg-white mb-2">
                            <button
                              className="accordion-button bg-white px-3 py-3 rounded w-100"
                              type="button"
                              onClick={() => toggleSection(idx)}
                            >
                              <span className="fw-bold text-align-start">{moduleTitle}</span>
                              <FontAwesomeIcon
                                icon={expandedSections.includes(idx) ? faChevronUp : faChevronDown}
                              />
                            </button>

                            {expandedSections.includes(idx) && (
                              <div className="accordion-body px-4 pb-4">
                                {lessons.map((lessonTitle, lIdx) => (
                                  <div
                                    key={lIdx}
                                    className="d-flex justify-content-between align-items-center py-2 border-bottom last:border-0"
                                  >
                                    <div className="d-flex align-items-center">
                                      <FontAwesomeIcon icon={faPlayCircle} className="text-primary mr-2" />
                                      <span>{lessonTitle}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      </>
                    ) : (
                      <p className="text-muted">{formatMessage(messages['common.noData'], {
                        section: formatMessage(messages['courseAbout.tab.curriculum']).toLowerCase(),
                      })}</p>
                    )}
                  </div>
                )}

                {activeTab === 'Instructor' && (
                  <div className="p-4">
                    {loadingInstructors ? (
                      <Spinner animation="border" variant="primary" />
                    ) : instructors.length > 0 ? (
                      instructors.map((inst, idx) => (
                        <div key={idx} className="d-flex align-items-start mb-5">
                          <img
                            src={`${baseUrl}${inst.profile_picture}` || PlaceholderProfileImage}
                            alt={inst.name}
                            className="rounded-circle instructor-image mr-4"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = PlaceholderProfileImage;
                            }}
                          />
                          <div>
                            {inst.name &&
                            <h3 className="mb-2">{inst.name}</h3>
                            }
                            {inst.designation &&
                            <p className="text-primary fw-medium mb-3">{inst.designation}</p>
                            }
                            {inst.bio &&
                            <p className="text-muted">{inst.bio}</p>
                            }
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-muted">{formatMessage(messages['common.noData'], {
                        section: formatMessage(messages['courseAbout.tab.instructor']).toLowerCase(),
                      })}</p>
                    )}
                  </div>
                )}

                {activeTab === 'Reviews' && (
                  <div className="p-4">
                    {loadingReviews ? (
                      <Spinner animation="border" variant="primary" />
                    ) : reviews.length > 0 ? (
                      <>
                      <h3 className='mb-4'>{formatMessage(messages['courseAbout.studentReviews'])}</h3>
                      <div className="space-y-5">
                        {reviews.map((review, idx) => (
                          <div key={idx} className="border-bottom pb-4 last:border-0">
                            <div className="d-flex align-items-center mb-3 mt-3">
                              <img
                                src={`${baseUrl}${review.profile_picture}` || PlaceholderProfileImage}
                                alt={review.name}
                                className="rounded-circle mr-3 review-profile-img"
                                onError={(e) => {
                                  e.currentTarget.onerror = null;
                                  e.currentTarget.src = PlaceholderProfileImage;
                                }}
                              />
                              <div>
                                {review.name &&
                                <p className="fw-bold mb-0 review-name">{review.name}</p>
                                }
                                <div className="d-flex align-items-center">
                                  <div className="d-flex mr-2">
                                    {[...Array(review.rating || 0)].map((_, i) => (
                                      <FontAwesomeIcon key={i} icon={faStar} className="text-warning" />
                                    ))}
                                  </div>
                                  {review.submitted_at &&
                                  <span className="text-muted small review-submitted-at">{review.submitted_at}</span>
                                  }
                                </div>
                              </div>
                            </div>
                            {review.comment &&
                            <p className="text-muted review-comment">{review.comment}</p>
                            }
                          </div>
                        ))}
                      </div>
                      </>
                    ) : (
                      <p className="text-muted">{formatMessage(messages['common.noData'], {
                        section: formatMessage(messages['courseAbout.tab.reviews']).toLowerCase(),
                      })}</p>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Sticky Sidebar - Enroll Card */}
            <div className="col-lg-4">
              <div className="enroll-card overflow-hidden rounded">
                <div className="card-img-top-wraper">
                  <img
                    src={course.media?.image?.large || PlaceholderImage} 
                    alt={course.name}
                    className="card-img-top"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = PlaceholderImage;
                    }}
                  />
                  <FontAwesomeIcon
                    icon={isCourseWhishlisted ? faHeart : faHeartOutline}
                    onClick={toggleCourseHeart}
                    className="heart-btn"
                  />
                </div>
                <div className="card-body p-4">
                  {isInvitationOnly ? (
                    <Alert variant="info" className="mb-4 text-center">
                      {formatMessage(messages['courseAbout.enrollment.invitationOnly'])}
                    </Alert>
                  ) : !canEnrollNow ? (
                    <Alert variant="warning" className="mb-4 text-center">
                      {formatMessage(messages['courseAbout.enrollment.closed'])}
                    </Alert>
                  ) : (
                    <>
                      <Button
                        variant="primary"
                        block
                        className="mb-4 py-3 fw-bold"
                        onClick={handleEnrollAction}
                        disabled={isEnrolling}
                      >
                        {isEnrolling ? (
                          <>
                            <Spinner animation="border" size="sm" className="mr-2" />
                            {formatMessage(messages['courseAbout.enrollment.enrolling'])}
                          </>
                        ) : isAlreadyEnrolled ? (
                          formatMessage(messages['courseAbout.enrollment.viewCourse'])
                        ) : (
                          formatMessage(messages['courseAbout.enrollment.enrollNow'])
                        )}
                      </Button>

                      {enrollError && (
                        <Alert
                          variant="danger"
                          dismissible
                          onClose={() => setEnrollError(null)}
                          className="mt-3"
                        >
                          {enrollError}
                        </Alert>
                      )}
                    </>
                  )}

                  <div className="course-card-reach d-flex flex-column text-muted small">
                    { course.effort &&
                    <div className="d-flex align-items-center mb-3">
                      <FontAwesomeIcon icon={faClock} className="text-primary mr-2" />
                      {formatMessage(messages['courseAbout.duration'], { duration: course.effort})}
                    </div>
                    }
                    { course.level &&
                    <div className="d-flex align-items-center mb-3">
                      <FontAwesomeIcon icon={faChartLine} className="text-primary mr-2" />
                      {formatMessage(messages['courseAbout.level'], { level: course.level })}
                    </div>
                    }
                    <div className="d-flex align-items-center gap-3">
                      <FontAwesomeIcon icon={faAward} className="text-primary mr-2" />
                      {formatMessage(messages['courseAbout.certificate'])}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseAbout;