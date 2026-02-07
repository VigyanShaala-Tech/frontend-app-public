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

  return (
    <section className="explore-categories">
      <div className="container d-flex flex-direction-column ">
        {/* Heading Section */}
        <div className="explore-categories-text text-left my-auto">
        <span className="badge bg-primary text-white mb-3">
            {formatMessage(messages['home.categories.badge'])}
        </span>
        <h2 className="mb-3">
            {formatMessage(messages['home.categories.heading'])}
        </h2>
        <p className="text-muted text-align-left lead">
            {formatMessage(messages['home.categories.subheading'])}
        </p>
        {/* Browse All Button */}
        <div className="text-left mt-5">
            <button className="btn btn-primary">
                {formatMessage(messages['home.categories.browseAll'])}
            </button>
        </div>
        </div>

        {/* Categories Grid */}
        <div className="explore-categories-card row g-4">
            {categories.map((category, idx) => (
                <div key={idx} className="col-6 col-md-4 col-lg-3 mb-3">
                    <div className="card text-center px-4 py-5 border-0">
                        <div className={`rounded border d-flex align-items-center justify-content-center w-12 h-12 mx-auto mb-4 ${category.colorClass}`}>
                            <FontAwesomeIcon icon={category.icon} size="lg" />
                        </div>
                        <h5 className="mb-0">{category.name}</h5>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default ExploreCategories;