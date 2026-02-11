import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';

import messages from '../../message/GlobalMessage.message';

import './MeetExperts.scss';

// Experts data (same as your lovable code)
const experts = [
  {
    id: 1,
    name: 'Dr. Priya Sharma',
    subject: 'Python & Data Science',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=500&fit=crop',
  },
  {
    id: 2,
    name: 'Prof. Rajesh Kumar',
    subject: 'Machine Learning',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop',
  },
  {
    id: 3,
    name: 'Dr. Ananya Desai',
    subject: 'Business Strategy',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=500&fit=crop',
  },
  {
    id: 4,
    name: 'Vikram Mehta',
    subject: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop',
  },
  {
    id: 5,
    name: 'Dr. Kavita Reddy',
    subject: 'Finance & Analytics',
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=500&fit=crop',
  },
  {
    id: 6,
    name: 'Arjun Nair',
    subject: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
  },
  {
    id: 7,
    name: 'Sneha Gupta',
    subject: 'Content Writing',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
  },
  {
    id: 8,
    name: 'Rohan Patel',
    subject: 'Web Development',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop',
  },
];

const MeetExperts = () => {
  const { formatMessage } = useIntl();

  return (
    <section className="meet-experts">
      <div className="container">
        {/* Heading Section */}
        <div className="text-center mb-5">
          <span className="badge bg-primary text-white mb-3">
            Our Instructors
          </span>
          <h2 className="mb-3">
            {formatMessage(messages['home.experts.heading'])}
          </h2>
          <p className="text-muted lead">
            {formatMessage(messages['home.experts.subheading'])}
          </p>
        </div>

        {/* Experts Grid */}
        <div className="expert-grid-container row g-4">
          {experts.map((expert) => (
            <div key={expert.id}>
              <div className="text-center p-4  h-100 meet-expert-card">
                {/* Image Container - Egg/Oval shape like your lovable code */}
                <div className="expert-image-wrapper mx-auto mb-4 overflow-hidden">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="expert-image w-100 h-100 object-cover"
                  />
                </div>

                {/* Name & Subject */}
                <h5 className="expert-name">
                  {expert.name}
                </h5>
                <p className="text-muted small mb-0 expert-subject">
                  {expert.subject}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetExperts;