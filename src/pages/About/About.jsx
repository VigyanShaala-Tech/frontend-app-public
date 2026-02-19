import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Button } from '@openedx/paragon';
import {
  faUsers,
  faAward,
  faBookOpen,
  faGlobe,
  faBullseye,
  faHeart,
  faChartLine,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import messages from '../../message/GlobalMessage.message';

import './About.scss';

// Dummy stats & features (hardcoded for now)
const stats = [
  { number: '25K+', label: messages['about.stats.students'], icon: faUsers },
  { number: '100+', label: messages['about.stats.instructors'], icon: faAward },
  { number: '500+', label: messages['about.stats.courses'], icon: faBookOpen },
  { number: '50+', label: messages['about.stats.countries'], icon: faGlobe },
];

const features = [
  {
    icon: faBullseye,
    title: messages['about.features.expertLed'],
    description: messages['about.features.expertLedDesc'],
  },
  {
    icon: faHeart,
    title: messages['about.features.studentCentric'],
    description: messages['about.features.studentCentricDesc'],
  },
  {
    icon: faChartLine,
    title: messages['about.features.careerGrowth'],
    description: messages['about.features.careerGrowthDesc'],
  },
  {
    icon: faStar,
    title: messages['about.features.qualityContent'],
    description: messages['about.features.qualityContentDesc'],
  },
];

const About = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="about-page">
      {/* Banner / Hero Section */}
      <section className="py-6">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="page-mapped text-muted small mb-3">
            <Link to="/public" className="text-muted text-decoration-none">
              {formatMessage(messages['about.breadcrumb.home'])}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-dark">{formatMessage(messages['about.breadcrumb.about'])}</span>
          </nav>

          {/* Title & Subtitle */}
          <h1 className="about-page-header mb-3">{formatMessage(messages['about.title'])}</h1>
          <p className="lead text-muted">{formatMessage(messages['about.subtitle'])}</p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-5 mb-6">
        <div className="container">
          <div className="row g-5 align-items-stretch">
            {/* Image Column */}
            <div className="col-lg-5 mr-3 d-flex">
                <div className="image-wrapper w-100">
                <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
                    alt="Our Team"
                    className="about-image"
                />
                </div>
            </div>

            {/* Text Column */}
            <div className="col-lg-6 py-5">
                <span className="badge bg-light text-primary mb-3">
                {formatMessage(messages['about.whoWeAre.badge'])}
                </span>
                <h2 className="select-headeing mb-4">
                {formatMessage(messages['about.whoWeAre.heading'])}
                </h2>
                <p className="text-muted mb-4">
                {formatMessage(messages['about.whoWeAre.description1'])}
                </p>
                <p className="text-muted mb-4">
                {formatMessage(messages['about.whoWeAre.description2'])}
                </p>
                <Link to="/public/courses">
                <Button variant="primary">
                    {formatMessage(messages['about.whoWeAre.exploreButton'])}
                </Button>
                </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-6">
        <div className="container">
          <div className="row g-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <div className="card text-center p-5 rounded">
                  <div className="mb-4">
                    <FontAwesomeIcon icon={stat.icon} size="2x" className="text-primary" />
                  </div>
                  <h2 className="fw-bold mb-1">{stat.number}</h2>
                  <p className="text-muted mb-0">{formatMessage(stat.label)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Features Section */}
      <section className="py-6">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge bg-light text-white mb-3">
              {formatMessage(messages['about.features.badge'])}
            </span>
            <h2 className="mb-3">{formatMessage(messages['about.features.heading'])}</h2>
            <p className="text-muted lead">
              {formatMessage(messages['about.features.subheading'])}
            </p>
          </div>

          <div className="row g-4">
            {features.map((feature, idx) => (
              <div key={idx} className="col-md-6 col-lg-3">
                <div className="card text-center p-4 rounded">
                  <div className="mb-4">
                    <FontAwesomeIcon icon={feature.icon} className="text-primary" size="lg" />
                  </div>
                  <h4 className="mb-3">{formatMessage(feature.title)}</h4>
                  <p className="text-muted small">
                    {formatMessage(feature.description)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-6">
        <div className="container">
          <div className="row g-5">
            {/* Mission */}
            <div className="col-lg-6">
              <div className="card p-5 rounded h-100">
                <div className="mb-4">
                  <div className="rounded-circle bg-primary-subtle d-inline-flex align-items-center justify-content-center w-12 h-12">
                    <FontAwesomeIcon icon={faBullseye} className="text-primary" size="lg" />
                  </div>
                </div>
                <h3 className="mb-3">{formatMessage(messages['about.mission.heading'])}</h3>
                <p>
                  {formatMessage(messages['about.mission.text'])}
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="col-lg-6">
              <div className="card p-5 rounded h-100">
                <div className="mb-4">
                  <div className="rounded-circle bg-primary-subtle d-inline-flex align-items-center justify-content-center w-12 h-12">
                    <FontAwesomeIcon icon={faGlobe} className="text-primary" size="lg" />
                  </div>
                </div>
                <h3 className="mb-3">{formatMessage(messages['about.vision.heading'])}</h3>
                <p>
                  {formatMessage(messages['about.vision.text'])}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;