import React, { useRef, useState, useEffect } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import messages from '../../message/GlobalMessage.message';
import './MeetExperts.scss';

import prachiMittalImg from '../../assets/image/Our Expert/Prachi Mittal.jpg';
import seshaManuguriImg from '../../assets/image/Our Expert/Dr. Sesha Manuguri-.jpg';
import nikitaHariImg from '../../assets/image/Our Expert/Dr. Nikita Hari.jpg';
import shailendraFuloriaImg from '../../assets/image/Our Expert/Dr. Shailendra Fuloria.png';
import rajRamanathaImg from '../../assets/image/Our Expert/Raj Ramanatha.jpg';
import amolKelkarImg from '../../assets/image/Our Expert/Amol Kelkar.jpg';
import prathaJhawarImg from '../../assets/image/Our Expert/Pratha Jhawar.png';
import kavitaKaushikImg from '../../assets/image/Our Expert/Kavita Kaushik.jpg';
import geetanjaliSethiImg from '../../assets/image/Our Expert/Dr. Geetanjali Sethi.jpg';
import guratinderKaurImg from '../../assets/image/Our Expert/Guratinder Kaur.jpg';
import ruchaKapareImg from '../../assets/image/Our Expert/Rucha Kapare.jpg';
import jaishriSanwalBhattImg from '../../assets/image/Our Expert/Jaishri Sanwal Bhatt.jpg';
import bhavanaYerrumreddyImg from '../../assets/image/Our Expert/Bhavana Yerrumreddy.jpg';
import neemaNairImg from '../../assets/image/Our Expert/Neema Nair.jpg';
const experts = [
  {
    id: 1,
    nameKey: 'home.experts.expert1.name',
    subjectKey: 'home.experts.expert1.subject',
    image: prachiMittalImg,
    linkedin: 'https://www.linkedin.com/in/prachmatic/',
  },
  {
    id: 2,
    nameKey: 'home.experts.expert2.name',
    subjectKey: 'home.experts.expert2.subject',
    image: seshaManuguriImg,
    linkedin: 'https://www.linkedin.com/in/sesha-manuguri/',
  },
  {
    id: 3,
    nameKey: 'home.experts.expert3.name',
    subjectKey: 'home.experts.expert3.subject',
    image: nikitaHariImg,
    linkedin: 'https://www.linkedin.com/in/nikitahari/',
  },
  {
    id: 4,
    nameKey: 'home.experts.expert4.name',
    subjectKey: 'home.experts.expert4.subject',
    image: shailendraFuloriaImg,
    linkedin: 'https://www.linkedin.com/in/sfuloria/',
  },
  {
    id: 5,
    nameKey: 'home.experts.expert5.name',
    subjectKey: 'home.experts.expert5.subject',
    image: rajRamanathaImg,
    linkedin: 'https://www.linkedin.com/in/rajramanatha/',
  },
  {
    id: 6,
    nameKey: 'home.experts.expert6.name',
    subjectKey: 'home.experts.expert6.subject',
    image: amolKelkarImg,
    linkedin: 'https://www.linkedin.com/in/amolkelkar/',
  },
  {
    id: 7,
    nameKey: 'home.experts.expert7.name',
    subjectKey: 'home.experts.expert7.subject',
    image: prathaJhawarImg,
    linkedin: 'https://www.linkedin.com/in/pratha-jhawar/',
  },
  {
    id: 8,
    nameKey: 'home.experts.expert8.name',
    subjectKey: 'home.experts.expert8.subject',
    image: kavitaKaushikImg,
    linkedin: 'https://www.linkedin.com/in/kavita-kaushik-53a663a/',
  },
  {
    id: 9,
    nameKey: 'home.experts.expert9.name',
    subjectKey: 'home.experts.expert9.subject',
    image: geetanjaliSethiImg,
    linkedin: 'https://www.linkedin.com/in/geetanjali-sethi-a7b201aa/',
  },
  {
    id: 10,
    nameKey: 'home.experts.expert10.name',
    subjectKey: 'home.experts.expert10.subject',
    image: guratinderKaurImg,
    linkedin: 'https://www.linkedin.com/in/guratinder-kaur-089611a0/',
  },
  {
    id: 11,
    nameKey: 'home.experts.expert11.name',
    subjectKey: 'home.experts.expert11.subject',
    image: ruchaKapareImg,
    linkedin: 'https://www.linkedin.com/in/ruchakapare/',
  },
  {
    id: 12,
    nameKey: 'home.experts.expert12.name',
    subjectKey: 'home.experts.expert12.subject',
    image: jaishriSanwalBhattImg,
    linkedin: 'https://www.linkedin.com/in/jaishri-sanwal-bhatt-046399323/',
  },
  {
    id: 13,
    nameKey: 'home.experts.expert13.name',
    subjectKey: 'home.experts.expert13.subject',
    image: bhavanaYerrumreddyImg,
    linkedin: 'https://www.linkedin.com/in/byerrumreddy/',
  },
  {
    id: 14,
    nameKey: 'home.experts.expert14.name',
    subjectKey: 'home.experts.expert14.subject',
    image: neemaNairImg,
    linkedin: 'https://www.linkedin.com/in/neema-nair/',
  }
];

const MeetExperts = () => {
  const { formatMessage } = useIntl();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 250;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
      setTimeout(checkScroll, 300);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  return (
    <section className="meet-experts">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          {/* <span className="badge bg-primary text-white mb-3">
            {formatMessage(messages['home.experts.badge'])}
          </span> */}
          <h2 className="mb-3">
            {formatMessage(messages['home.experts.heading'])}
          </h2>
          <p className="text-muted lead">
            {formatMessage(messages['home.experts.subheading'])}
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="meet-experts-carousel">
          {/* Left Arrow */}
          <button
            type="button"
            className="meet-arrow left"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            aria-label={formatMessage(messages['common.carousel.previous'])}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          {/* Scrollable Content */}
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="experts-scroll d-flex overflow-auto pb-4 scrollbar-hide"
          >
            {experts.map((expert) => (
              <div key={expert.id} className="expert-item flex-shrink-0">
                <div className="meet-expert-card text-center h-100">
                  <div className="expert-image-wrapper mx-auto mb-4 overflow-hidden">
                    <img
                      src={expert.image}
                      alt={formatMessage(messages[expert.nameKey])}
                      className="expert-image w-100 h-100 object-cover"
                    />
                  </div>
                  <h5 className="expert-name">
                    {formatMessage(messages[expert.nameKey])}
                  </h5>
                  <p className="text-muted small mb-0 expert-subject">
                    {formatMessage(messages[expert.subjectKey])}
                  </p>
                  <a
                    href={expert.linkedin}
                    className="expert-linkedin text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            type="button"
            className="meet-arrow right"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            aria-label={formatMessage(messages['common.carousel.next'])}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default MeetExperts;
