import React, { useEffect, useRef, useState } from 'react';
import "./ImpactNumbers.scss"
import { useIntl } from '@edx/frontend-platform/i18n';

import messages from '../../message/GlobalMessage.message';

const stats = [
  { number: 300,  suffix: '+', messageKey: 'home.impact.globalMentors' },
  { number: 15000, suffix: '+', messageKey: 'home.impact.learners', format: true },
  { number: 50,    suffix: '+', messageKey: 'home.impact.masterclasses' },
  { number: 150,   suffix: '+', messageKey: 'home.impact.globalSpeakers' },
];

const CountUp = ({ target, suffix, format = false }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const duration = 1800;
          const steps = 50;
          const stepValue = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += stepValue;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const display = format ? count.toLocaleString() : count;

  return <span ref={ref}>{display}{suffix}</span>;
};

const ImpactNumbers = () => {
  const { formatMessage } = useIntl();
  return (
    <section className="impact-numbers py-5 py-md-6 text-center">
      <div className="container">
        <div className="row">
          {stats.map((stat, idx) => (
            <div key={idx} className="col-6 col-md-3 mb-3 mt-3">
              <h3 className="fw-bold mb-1 mb-md-3">
                <CountUp target={stat.number} suffix={stat.suffix} format={stat.format} />
              </h3>
              <p className="mb-0">
                {formatMessage(messages[stat.messageKey])}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactNumbers;