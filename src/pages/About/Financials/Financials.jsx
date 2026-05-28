import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';

import messages from './messages';
import './Financials.scss';

const financialData = [
  {
    id: 'auditReports',
    titleMsgId: 'financial.card.audit.title',
    links: [
      { textMsgId: 'financial.link.audit.fy2024_25', url: 'https://vigyanshaala.com/wp-content/uploads/2026/02/Annual-Financial-Statement-FY-24-25.pdf' },
      { textMsgId: 'financial.link.audit.fy2023_24', url: 'https://vigyanshaala.com/wp-content/uploads/2026/02/Annual-Financial-Stmt-FY-23-24_Signed.pdf' },
      { textMsgId: 'financial.link.audit.fy2022_23', url: 'https://vigyanshaala.com/wp-content/uploads/2026/02/Annual-Financial-Report-22-23.pdf' },
      { textMsgId: 'financial.link.audit.fy2021_22', url: 'https://vigyanshaala.com/wp-content/uploads/2024/07/VigyanShaala-Audited-Accounts-FY-2021-22.pdf' },
      { textMsgId: 'financial.link.audit.fy2020_21', url: 'https://vigyanshaala.com/wp-content/uploads/2024/07/VigyanShaala-Audited-Accounts-FY-2020-21.pdf' },
      { textMsgId: 'financial.link.audit.fy2019_20', url: 'https://vigyanshaala.com/wp-content/uploads/2024/07/VigyanShaala-Audited-Accounts-FY-2019-20.pdf' },
    ],
  },
  {
    id: 'annualReports',
    titleMsgId: 'financial.card.annual.title',
    links: [
      { textMsgId: 'financial.link.annual.report2024_25', url: 'https://vigyanshaala.com/wp-content/uploads/2026/02/VigyanShaala_Annual_Report_2024-2025.pdf' },
      { textMsgId: 'financial.link.annual.report2023_24', url: 'https://vigyanshaala.com/wp-content/uploads/2025/01/VigyanShaala_Annual-Report_2023-2024.pdf' },
      { textMsgId: 'financial.link.annual.progress2019_24', url: 'https://vigyanshaala.com/wp-content/uploads/2024/07/VigyanShaala-Progress-Report-2019-2024.pdf' },
    ],
  },
];

const Financials = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="financials-page">
      {/* Header / Banner */}
      <section className="py-4">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="page-mapped text-muted small mb-4">
            <Link to="/public" className="text-muted text-decoration-none">
              {formatMessage(messages['financial.breadcrumb.home'])}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-dark">
              {formatMessage(messages['financial.breadcrumb.financial'])}
            </span>
          </nav>

          <h1 className="financials-page-heading mb-3">
            {formatMessage(messages['financial.page.title'])}
          </h1>
          <p className='text-muted lead'>
            {formatMessage(messages['financial.page.discription'])}
          </p>
        </div>
      </section>

      {/* Financial Reports Cards */}
      <section className="main-content py-5">
        <div className="container">
          <div className="financial-cards">
            {financialData.map((card) => (
              <div key={card.id} className="financial-card rounded">
                <h3>{formatMessage(messages[card.titleMsgId])}</h3>
                <ul>
                  {card.links.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className='text-dark'>
                        <FontAwesomeIcon icon={faFileAlt} className="primary mr-2" /> 
                        {formatMessage(messages[link.textMsgId])}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Financials;