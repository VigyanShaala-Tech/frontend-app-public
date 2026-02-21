import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDatabase,
  faLanguage,
  faChartLine,
  faPenNib,
  faCode,
  faPalette,
  faUsers,
  faBriefcase,
} from '@fortawesome/free-solid-svg-icons';

import messages from '../../message/GlobalMessage.message';

import './ExploreCategories.scss';
import { useNavigate } from 'react-router-dom';

// Categories data with FontAwesome icons
const categories = [
  {
    name: 'Data Science',
    icon: faDatabase,
    colorClass: 'bg-primary-subtle text-primary',
  },
  {
    name: 'English',
    icon: faLanguage,
    colorClass: 'bg-success-subtle text-success',
  },
  {
    name: 'Finance',
    icon: faChartLine,
    colorClass: 'bg-warning-subtle text-warning',
  },
  {
    name: 'Content Writing',
    icon: faPenNib,
    colorClass: 'bg-danger-subtle text-danger',
  },
  {
    name: 'Development',
    icon: faCode,
    colorClass: 'bg-info-subtle text-info',
  },
  {
    name: 'Art & Design',
    icon: faPalette,
    colorClass: 'bg-purple-subtle text-purple',
  },
  {
    name: 'Management',
    icon: faUsers,
    colorClass: 'bg-teal-subtle text-teal',
  },
  {
    name: 'Business',
    icon: faBriefcase,
    colorClass: 'bg-indigo-subtle text-indigo',
  },
];

const ExploreCategories = () => {
  const { formatMessage } = useIntl();
   const navigate = useNavigate();

  return (
    <section className="explore-categories py-5">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Text Column - full width on mobile/tablet */}
          <div className="col-lg-6 explore-categories-text text-lg-left text-center text-md-left">
            <span className="badge bg-primary text-white mb-3">
              {formatMessage(messages['home.categories.badge'])}
            </span>
            <h2 className="mb-3">
              {formatMessage(messages['home.categories.heading'])}
            </h2>
            <p className="text-muted lead mb-4 mb-lg-5">
              {formatMessage(messages['home.categories.subheading'])}
            </p>
            {/* Browse All Button */}
            <div className="browse-category-btn text-center text-lg-left">
              <button className="btn btn-primary" onClick={() => navigate('/public/courses')}>
                {formatMessage(messages['home.categories.browseAll'])}
              </button>
            </div>
          </div>

          {/* Right Categories Grid */}
          <div className="col-lg-6 explore-categories-card">
            <div className="row g-4">
              {categories.map((category, idx) => (
                <div key={idx} className="col-6 col-md-3 col-lg-3 mb-3">
                  <div className="card text-center px-3 py-4 h-100">
                    <div className={`rounded border d-flex align-items-center justify-content-center w-12 h-12 mx-auto mb-3 ${category.colorClass}`}>
                      <FontAwesomeIcon icon={category.icon} size="lg" />
                    </div>
                    <h5 className="mb-0">{category.name}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;