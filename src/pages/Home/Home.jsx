import React from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';

import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import TrustedCompanies from '../../components/TrustedCompanies/TrustedCompanies';
import ExploreCategories from '../../components/ExploreCategories/ExploreCategories';
import CoursesCarousel from '../../components/CoursesCarousel/CoursesCarousel';
import SuccessStory from '../../components/SuccessStory/SuccessStory';
import MeetExperts from '../../components/MeetExperts/MeetExperts';
import CommunitySection from '../../components/CommunitySection/CommunitySection';
import Testimonials from '../../components/Testimonials/Testimonials';

import './Home.scss';

const Home = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="home-page">
      <HeroCarousel />
      <TrustedCompanies />
      <ExploreCategories />
      <CoursesCarousel />
      <SuccessStory />
      <MeetExperts />
      <CommunitySection />
      <Testimonials />
    </div>
  );
};

export default Home;