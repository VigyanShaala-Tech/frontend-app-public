import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import messages from '../../message/GlobalMessage.message';
import './TrustedCompanies.scss';

const companies = [
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_(2012).svg' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
  { name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' },
  { name: 'Spotify', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg' },
  { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.svg' },
];

const TrustedCompanies = () => {
  const { formatMessage } = useIntl();

  // Duplicate companies array to create seamless scrolling
  const scrollingCompanies = [...companies, ...companies];

  return (
    <section className="trusted-companies">
      <div className="container">
        <h2 className="text-center mb-4">{formatMessage(messages['home.trusted.heading'])}</h2>
        <p className="text-center text-muted mb-5">
          {formatMessage(messages['home.trusted.subheading'])}
        </p>

        <div className="companies-wrapper">
          <div className="companies-track py-2">
            {scrollingCompanies.map((company, idx) => (
              <div key={idx} className="company-item">
                <div className="card text-center p-3 rounded">
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="img-fluid mx-auto"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;
