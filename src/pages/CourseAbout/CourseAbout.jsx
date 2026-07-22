import React, { useState, useEffect, useMemo } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Button, Spinner, Alert } from '@openedx/paragon';
import {
  faStar,
  faClock,
  faChartLine,
  faUsers,
  faAward,
  faChevronDown,
  faHeart,
  faPlay,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartOutline } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import ScrollReveal from '../../components/animations/ScrollReveal';
import messages from '../../message/GlobalMessage.message';
import {
  getLmsBaseUrl,
  fetchCourseById,
  fetchCourseCurriculum,
  fetchCourseInstructors,
  fetchCourseReviews,
  addToWishlist,
  removeFromWishlist,
  enrollInCourse,
} from '../../api';
import PlaceholderImage from '../../assets/image/placeholder-image.jpeg'
import PlaceholderProfileImage from '../../assets/image/profile-placeholder.jpeg'
import { useContext } from 'react';
import { AppContext } from '@edx/frontend-platform/react';

import { getYoutubeVideoId } from '../../utils/youtube';
import './CourseAbout.scss';

const COURSE_ABOUT_TABS = [
  { id: 'overview', messageKey: 'courseAbout.tab.overview' },
  { id: 'curriculum', messageKey: 'courseAbout.tab.curriculum' },
  { id: 'instructor', messageKey: 'courseAbout.tab.instructor' },
  { id: 'reviews', messageKey: 'courseAbout.tab.reviews' },
];

const getLessonDetails = (lesson) => {
  if (typeof lesson === 'string') {
    return { title: lesson, duration: null };
  }

  return {
    title: lesson?.title || lesson?.name || '',
    duration: lesson?.duration || lesson?.length || null,
  };
};

const CourseAbout = () => {
  const { formatMessage } = useIntl();
  const { id: courseId } = useParams();
  const { authenticatedUser, config } = useContext(AppContext);

  const [course, setCourse] = useState(null);
  const [curriculum, setCurriculum] = useState(null);
  const [instructors, setInstructors] = useState([]);
  const [reviews, setReviews] = useState([]);

  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState([]);

  const [loadingCourse, setLoadingCourse] = useState(true);
  const [errorCourse, setErrorCourse] = useState(null);

  const [loadingCurriculum, setLoadingCurriculum] = useState(false);
  const [loadingInstructors, setLoadingInstructors] = useState(false);
  const [loadingReviews, setLoadingReviews] = useState(false);

  const baseUrl = getLmsBaseUrl();
  const learningBaseUrl = config.LEARNING_BASE_URL;
  const loginBaseUrl = config.LOGIN_URL;
  const catalogBaseUrl = config.CATALOG_MICROFRONTEND_URL;
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [enrollError, setEnrollError] = useState(null);
  const [isCourseWhishlisted, setIsCourseWhishlisted] = useState(false);
  const [isCourseVideoOpen, setIsCourseVideoOpen] = useState(false);

  const coursePreviewVideoId = useMemo(
    () => getYoutubeVideoId(course?.media?.course_video?.uri),
    [course?.media?.course_video?.uri],
  );
  const hasDisplayValue = (value) => {
    if (value === null || value === undefined) return false;
    if (typeof value === 'number') return value > 0;
    const normalized = String(value).trim().toLowerCase();
    return normalized !== '' && normalized !== '0' && normalized !== 'null' && normalized !== 'undefined';
  };

  useEffect(() => {
    if (!isCourseVideoOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isCourseVideoOpen]);

  const closeCourseVideo = () => {
    setIsCourseVideoOpen(false);
  };

  // Fetch main course details once on mount
  useEffect(() => {
    const fetchCourse = async () => {
      setLoadingCourse(true);
      setErrorCourse(null);
      try {
        const res = await fetchCourseById(courseId);
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
    if (activeTab === 'curriculum' && !curriculum) {
      const fetchCurriculum = async () => {
        setLoadingCurriculum(true);
        try {
          const res = await fetchCourseCurriculum(courseId);
          if (res.status === 200 && res.data) {
            setCurriculum(res.data);
            setExpandedSections([0]);
          }
        } catch (err) {
          console.error('Failed to fetch curriculum:', err);
        } finally {
          setLoadingCurriculum(false);
        }
      };
      fetchCurriculum();
    }

    if (activeTab === 'instructor' && instructors.length === 0) {
      const fetchInstructors = async () => {
        setLoadingInstructors(true);
        try {
          const res = await fetchCourseInstructors(courseId);
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

    if (activeTab === 'reviews' && reviews.length === 0) {
      const fetchReviews = async () => {
        setLoadingReviews(true);
        try {
          const res = await fetchCourseReviews(courseId);
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
        const response = await removeFromWishlist(courseId);

        if (response.status === 200) {
          setIsCourseWhishlisted(false);
        }
      } else {
        // Add to wishlist
        const response = await addToWishlist(courseId);

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
      const response = await enrollInCourse(courseId);

      if (response.status === 200) {
        const { redirect_url: redirectUrl } = response.data || {};
        if (redirectUrl) {
          // e.g. the course is gated behind a cohort registration form.
          window.location.href = /^https?:\/\//i.test(redirectUrl) ? redirectUrl : `${baseUrl}${redirectUrl}`;
        } else {
          window.location.href = `${baseUrl}/dashboard`;
        }
      }
    } catch (err) {
      if (err.response?.status === 403 || err.response?.status === 401) {
        // Not logged in or session expired
        // const nextPath = encodeURIComponent(`/courses/${courseId}/about`);
        const nextPath = encodeURIComponent(`${catalogBaseUrl}courses/${courseId}`);

        window.location.href = `${loginBaseUrl}?next=${nextPath}`;
      } else {
        // Other errors
        setEnrollError(err.response?.data?.error);
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
          <ScrollReveal direction="up">
          {/* Title & Meta */}
          {course.name &&
          <h1 className="course-heading mb-3">{course.name}</h1>
          }
          {course.short_description &&
          <p className="course-detail-paragraph text-muted lead mb-4">{course.short_description}</p>
          }

          <div className="course-reach-details d-flex flex-wrap text-muted mb-4">
            {hasDisplayValue(course.rating) && hasDisplayValue(course.no_of_reviews) &&
            <div className="d-flex align-items-center mr-4">
              <FontAwesomeIcon icon={faStar} className="text-warning mr-2" />
              <span className="fw-bold">{course.rating}</span>
              <span>({course.no_of_reviews} {formatMessage(messages['courseAbout.tab.reviews'])})</span>
            </div>
            }
            {hasDisplayValue(course.enrollments) &&
            <div className="d-flex align-items-center mr-4">
              <FontAwesomeIcon icon={faUsers} className="mr-2" />
              <span>{course.enrollments} {formatMessage(messages['courseAbout.student'])}</span>
            </div>
            }
            {hasDisplayValue(course.effort) &&
            <div className="d-flex align-items-center ">
              <FontAwesomeIcon icon={faClock} className="mr-2" />
              <span>{course.effort}</span>
            </div>
            }
          </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="main-content bg-white">
        <div className="container">
          <div className="row g-5">
            {/* Left - Tabs & Content */}
            <div className="col-lg-8">
              {/* Tabs */}
              <ScrollReveal direction="up" className="mb-4">
                <div className="d-flex overflow-auto py-3 px-0">
                  {COURSE_ABOUT_TABS.map((tab) => (
                    <motion.button
                      key={tab.id}
                      type="button"
                      whileHover={{ y: -2 }}
                      className={`btn mr-2 course-about-tab-btn ${
                        activeTab === tab.id ? 'btn-primary fw-bold' : 'button-inactive-color'
                      }`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {formatMessage(messages[tab.messageKey])}
                    </motion.button>
                  ))}
                </div>
              </ScrollReveal>

              {/* Tab Content */}
              <ScrollReveal direction="up">
              <div className="tab-container rounded">
                <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  className="course-about-tab-panel"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
                >
                {activeTab === 'overview' && (
                  <div className="course-about-tab-content">
                    <div dangerouslySetInnerHTML={{ __html: course.overview || `
                    <p>
                    </p>` }} />
                  </div>
                )}

                {activeTab === 'curriculum' && (
                  <div className="course-about-tab-content">
                    {loadingCurriculum ? (
                      <Spinner animation="border" variant="primary" />
                    ) : curriculum && Object.keys(curriculum).length > 0 ? (
                      <div className="course-curriculum">
                        <h3 className="course-curriculum__title">
                          {formatMessage(messages['courseAbout.courseCurriculum'])}
                        </h3>
                        <div className="course-curriculum__accordion">
                          {Object.entries(curriculum).map(([moduleTitle, lessons], idx) => (
                            <div
                              key={idx}
                              className={`course-curriculum__item${
                                expandedSections.includes(idx) ? ' is-expanded' : ''
                              }`}
                            >
                              <button
                                className="course-curriculum__header"
                                type="button"
                                onClick={() => toggleSection(idx)}
                                aria-expanded={expandedSections.includes(idx)}
                              >
                                <span className="course-curriculum__header-title">{moduleTitle}</span>
                                <FontAwesomeIcon
                                  icon={faChevronDown}
                                  className={`course-curriculum__chevron${
                                    expandedSections.includes(idx) ? ' is-expanded' : ''
                                  }`}
                                />
                              </button>

                              {expandedSections.includes(idx) && (
                                <div className="course-curriculum__body">
                                  {lessons.map((lesson, lIdx) => {
                                    const { title, duration } = getLessonDetails(lesson);

                                    return (
                                      <div
                                        key={lIdx}
                                        className="course-curriculum__lesson"
                                      >
                                        <div className="course-curriculum__lesson-info">
                                          <span className="course-curriculum__lesson-icon" aria-hidden="true">
                                            <FontAwesomeIcon icon={faPlay} />
                                          </span>
                                          <span className="course-curriculum__lesson-title">{title}</span>
                                        </div>
                                        {duration && (
                                          <span className="course-curriculum__lesson-duration">{duration}</span>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <p className="text-muted"> </p>
                    )}
                  </div>
                )}

                {activeTab === 'instructor' && (
                  <div className="course-about-tab-content">
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
                      <p className="text-muted"> </p>
                    )}
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="course-about-tab-content">
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
                      <p className="text-muted"> </p>
                    )}
                  </div>
                )}
                </motion.div>
                </AnimatePresence>
              </div>
              </ScrollReveal>
            </div>

            {/* Sticky Sidebar - Enroll Card */}
            <ScrollReveal direction="right" className="col-lg-4">
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
                  {coursePreviewVideoId && (
                    <button
                      type="button"
                      className="course-video-play-btn"
                      onClick={() => setIsCourseVideoOpen(true)}
                      aria-label={formatMessage(messages['courseAbout.previewVideo.play'])}
                    >
                      <span className="course-video-play-btn__icon">
                        <FontAwesomeIcon icon={faPlay} className="course-video-play-btn__glyph" />
                      </span>
                    </button>
                  )}
                  <button
                    type="button"
                    className={`heart-btn ${isCourseWhishlisted ? 'heart-btn--active' : 'heart-btn--outline'}`}
                    onClick={toggleCourseHeart}
                    aria-label={
                      isCourseWhishlisted
                        ? formatMessage(messages['courseAbout.wishlist.remove'])
                        : formatMessage(messages['courseAbout.wishlist.add'])
                    }
                    aria-pressed={isCourseWhishlisted}
                  >
                    <FontAwesomeIcon
                      icon={isCourseWhishlisted ? faHeart : faHeartOutline}
                      className="heart-btn__icon"
                    />
                  </button>
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
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="mb-4"
                      >
                        <Button
                          variant="primary"
                          block
                          className="py-3 fw-bold"
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
                      </motion.div>

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
                    {hasDisplayValue(course.effort) &&
                    <div className="d-flex align-items-center mb-3">
                      <FontAwesomeIcon icon={faClock} className="text-primary mr-2" />
                      {formatMessage(messages['courseAbout.duration'], { duration: course.effort})}
                    </div>
                    }
                    {hasDisplayValue(course.level) &&
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
            </ScrollReveal>
          </div>
        </div>
      </section>
      {isCourseVideoOpen && coursePreviewVideoId && (
        <div className="course-video-open-model" onClick={closeCourseVideo}>
          <div
            className="course-video-modal-shell"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="course-video-modal-header">
              <button
                type="button"
                className="course-video-close-btn btn btn-light rounded-circle shadow"
                onClick={closeCourseVideo}
                aria-label={formatMessage(messages['common.close'])}
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <div className="course-video-modal-content">
              <div className="course-video-wrapper">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${coursePreviewVideoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3`}
                  title={formatMessage(messages['courseAbout.previewVideo.title'])}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseAbout;