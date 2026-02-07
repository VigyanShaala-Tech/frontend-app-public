import React, { useState } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Button } from '@openedx/paragon';
import {
  faStar,
  faClock,
  faChartLine,
  faUsers,
  faPlayCircle,
  faFileAlt,
  faAward,
  faCheckCircle,
  faChevronDown,
  faChevronUp,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useParams } from 'react-router-dom';

import messages from '../../message/GlobalMessage.message';

import './CourseAbout.scss';

// Dummy course data (replace with real API later)
const courseData = {
  id: 1,
  title: 'Complete Python Bootcamp: From Zero to Hero',
  description: 'Master Python programming with this comprehensive bootcamp. Learn Python like a professional by building real-world projects and applications.',
  rating: 4.9,
  review: 2340,
  students: 15680,
  instructor: {
    name: 'Dr. Sarah Johnson',
    title: 'Senior Data Scientist',
    bio: 'Dr. Sarah Johnson is a renowned data scientist with over 15 years of experience in Python programming and machine learning. She has worked at leading tech companies and has trained thousands of students worldwide.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
  },
  duration: '40 hours',
  level: 'Beginner to Advanced',
  lastUpdated: 'January 2024',
  language: 'English',
  image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800',
  features: [
    '40+ hours of video content',
    'Lifetime access',
    'Certificate of completion',
    '100+ coding exercises',
    '15 real-world projects',
    'Downloadable resources',
  ],
  curriculum: [
    {
      title: 'Introduction to Python',
      lessons: [
        { title: 'Welcome to the Course', duration: '5:00' },
        { title: 'Installing Python', duration: '12:30' },
        { title: 'Your First Python Program', duration: '15:00' },
      ],
    },
    {
      title: 'Python Fundamentals',
      lessons: [
        { title: 'Variables and Data Types', duration: '20:00' },
        { title: 'Operators and Expressions', duration: '18:00' },
        { title: 'Control Flow Statements', duration: '25:00' },
      ],
    },
    {
      title: 'Data Structures',
      lessons: [
        { title: 'Lists and Tuples', duration: '30:00' },
        { title: 'Dictionaries and Sets', duration: '25:00' },
        { title: 'Working with Strings', duration: '20:00' },
      ],
    },
  ],
  reviews: [
    {
      name: 'Rahul M.',
      rating: 5,
      comment: 'Excellent course! The instructor explains complex concepts in a simple way.',
      date: '2 weeks ago',
    },
    {
      name: 'Priya S.',
      rating: 5,
      comment: 'Best Python course I have taken. Highly recommended for beginners.',
      date: '1 month ago',
    },
  ],
};

const tabs = ['Overview', 'Curriculum', 'Instructor', 'Reviews'];

const CourseAbout = () => {
  const { formatMessage } = useIntl();
  const { id } = useParams(); // course ID from URL

  const [activeTab, setActiveTab] = useState('Overview');
  const [expandedSections, setExpandedSections] = useState([0]);

  const toggleSection = (index) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="course-about-page">
      {/* Banner / Header Section */}
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
            <span className="text-dark">{courseData.title}</span>
          </nav>

          {/* Title & Meta */}
          <h1 className="course-heading mb-3">{courseData.title}</h1>
          <p className="course-detail-paragraph text-muted lead mb-4">{courseData.description}</p>

          <div className="course-reach-details d-flex flex-wrap text-muted mb-4">
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faStar} className="text-warning mr-2" />
              <span className="fw-bold">{courseData.rating}</span>
              <span>{courseData.review} reviews</span>
            </div>
            <div className="d-flex align-items-center ml-4">
              <FontAwesomeIcon icon={faUsers} className='mr-2'/>
              <span>{courseData.students.toLocaleString()} students</span>
            </div>
            <div className="d-flex align-items-center ml-4">
              <FontAwesomeIcon icon={faClock} className='mr-2'/>
              <span>{courseData.duration}</span>
            </div>
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
                <div className="d-flex flex-wrap ">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      className={`btn mr-2 ${
                        activeTab === tab
                          ? 'btn-primary text-primary fw-bold'
                          : 'button-inactive-color'
                      }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {formatMessage(messages[`courseAbout.tab.${tab.toLowerCase()}`])}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
                <div className='tab-container container rounded'>
                    {activeTab === 'Overview' && (
                        <div className="pl-3 pt-4 pr-3 pb-4 ">
                        <h3 className="mb-4">{formatMessage(messages['courseAbout.whatYouWillLearn'])}</h3>
                        <div className="row g-3 mb-5">
                            {courseData.features.map((feature, idx) => (
                            <div key={idx} className="col-md-6">
                                <div className="d-flex align-items-start">
                                <FontAwesomeIcon icon={faCheckCircle} className="text-primary mt-1 mr-2" />
                                <span>{feature}</span>
                                </div>
                            </div>
                            ))}
                        </div>

                        <h3 className="mb-4">{formatMessage(messages['courseAbout.courseDescription'])}</h3>
                        <p className="text-muted">
                            This comprehensive Python bootcamp will take you from beginner to advanced level.
                            You'll learn Python programming through hands-on projects and real-world applications.
                            Whether you want to become a data scientist, web developer, or automation engineer,
                            this course provides the foundation you need.
                        </p>
                        </div>
                    )}

                    {activeTab === 'Curriculum' && (
                        <div className="p-4">
                        <h3 className="mb-4">{formatMessage(messages['courseAbout.courseCurriculum'])}</h3>
                        <div className="accordion">
                            {courseData.curriculum.map((section, idx) => (
                            <div key={idx} className="accordion-item border rounded bg-white mb-2">
                                <button
                                    className="accordion-button bg-white px-4 py-3 rounded w-100"
                                    type="button"
                                    onClick={() => toggleSection(idx)}
                                >
                                    <span className="fw-bold">{section.title}</span>
                                    <FontAwesomeIcon icon={expandedSections.includes(idx) ? faChevronUp : faChevronDown} />
                                </button>

                                {expandedSections.includes(idx) && (
                                <div className="accordion-body px-4 pb-4">
                                    {section.lessons.map((lesson, lIdx) => (
                                    <div
                                        key={lIdx}
                                        className="d-flex justify-content-between align-items-center py-2 border-bottom last:border-0"
                                    >
                                        <div className="d-flex align-items-center">
                                        <FontAwesomeIcon icon={faPlayCircle} className="text-primary mr-2" />
                                        <span>{lesson.title}</span>
                                        </div>
                                        <span className="text-muted small">{lesson.duration}</span>
                                    </div>
                                    ))}
                                </div>
                                )}
                            </div>
                            ))}
                        </div>
                        </div>
                    )}

                    {activeTab === 'Instructor' && (
                        <div className="p-4">
                        <div className="d-flex align-items-start">
                            <img
                                src={courseData.instructor.avatar}
                                alt={courseData.instructor.name}
                                className="rounded-circle instructor-image mr-4"
                            />
                            <div className="">
                                <h3 className="mb-2">{courseData.instructor.name}</h3>
                                <p className="text-primary fw-medium mb-3">{courseData.instructor.title}</p>
                                <p className="text-muted">{courseData.instructor.bio}</p>
                            </div>
                        </div>
                        </div>
                    )}

                    {activeTab === 'Reviews' && (
                        <div className="p-4">
                        <h3>{formatMessage(messages['courseAbout.studentReviews'])}</h3>
                        <div className="space-y-5">
                            {courseData.reviews.map((review, idx) => (
                            <div key={idx} className="border-bottom pb-4 last:border-0">
                                <div className="d-flex align-items-center mb-3 mt-3">
                                    <FontAwesomeIcon icon={faUser} className="text-primary ml-3 mr-4" />
                                    <div>
                                        <p className="fw-bold mb-0">{review.name}</p>
                                        <div className="d-flex align-items-center">
                                        <div className="d-flex mr-2">
                                            {[...Array(review.rating)].map((_, i) => (
                                            <FontAwesomeIcon key={i} icon={faStar} className="text-warning" />
                                            ))}
                                        </div>
                                        <span className="text-muted small">{review.date}</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-muted">{review.comment}</p>
                            </div>
                            ))}
                        </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Sticky Sidebar - Enroll Card */}
            <div className="col-lg-4">
              <div className="enroll-card overflow-hidden rounded">
                <img
                  src={courseData.image}
                  alt={courseData.title}
                  className="card-img-top"
                />
                <div className="card-body p-4">
                  <Button variant="primary" block className="mb-4 py-3">
                    {formatMessage(messages['courseAbout.enrollNow'])}
                  </Button>

                  <div className="course-card-reach d-flex flex-column text-muted small">
                    <div className="d-flex align-items-center mb-3">
                      <FontAwesomeIcon icon={faClock} className="text-primary mr-2" />
                      {formatMessage(messages['courseAbout.duration'], { duration: courseData.duration })}
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <FontAwesomeIcon icon={faChartLine} className="text-primary mr-2" />
                      {formatMessage(messages['courseAbout.level'], { level: courseData.level })}
                    </div>
                    <div className="d-flex align-items-center mb-3">
                      <FontAwesomeIcon icon={faFileAlt} className="text-primary mr-2" />
                      {formatMessage(messages['courseAbout.exercises'])}
                    </div>
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