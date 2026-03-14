import React, { useState, useEffect } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';
import { getConfig } from '@edx/frontend-platform';
import { Spinner } from '@openedx/paragon';

import messages from '../../message/GlobalMessage.message';
import { useNavigate } from 'react-router-dom';

import './ExploreCategories.scss';

const ExploreCategories = () => {
  const { formatMessage } = useIntl();
  const navigate = useNavigate();

  // State for API-fetched categories
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getAuthenticatedHttpClient().get(
          `${getConfig().LMS_BASE_URL}/api/v1/catalog/categories/`
        );

        if (response.status === 200 && Array.isArray(response.data)) {
          // Map API data to component format
          const mapped = response.data.map(item => ({
            name: item.name,
            image: item.image, // full URL from API
          }));
          setCategories(mapped);
        }
      } catch (err) {
        console.error('Failed to fetch categories:', err);
        setError(formatMessage(messages['common.error.loadData']));
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <section className="explore-categories">
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
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden"><Spinner animation="border" size="sm"/></span>
                </div>
              </div>
            ) : error ? (
              <div className="alert alert-danger text-center">{error}</div>
            ) : (
              <div className="row g-4">
                {categories.map((category, idx) => (
                  <div key={idx} className="col-6 col-md-3 col-lg-3 mb-3">
                    <div className="card text-center px-3 py-4 h-100">
                      <div className="rounded d-flex align-items-center justify-content-center w-12 h-12 mx-auto mb-3 overflow-hidden">
                        <img
                          src={category.image}
                          alt={category.name}
                          className="w-100 h-100 object-cover"
                        />
                      </div>
                      <h5 className="mb-0">{category.name}</h5>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;