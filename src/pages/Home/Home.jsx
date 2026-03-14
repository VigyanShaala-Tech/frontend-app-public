import React from 'react';
import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';
import ImpactNumbers from '../../components/ImpactNumbers/ImpactNumbers';
import CoursesCarousel from '../../components/CoursesCarousel/CoursesCarousel';
import Testimonials from '../../components/Testimonials/Testimonials';
import TrustedCompanies from '../../components/TrustedCompanies/TrustedCompanies';
import MeetExperts from '../../components/MeetExperts/MeetExperts';
import SuccessStory from '../../components/SuccessStory/SuccessStory';
import ExploreCategories from '../../components/ExploreCategories/ExploreCategories';
import CommunitySection from '../../components/CommunitySection/CommunitySection';

import './Home.scss';

const Home = () => {
  return (
    <div className="home-page">
      <HeroCarousel />
      <ImpactNumbers />
      <CoursesCarousel />
      <Testimonials />
      <TrustedCompanies />
      <MeetExperts />
      <SuccessStory />
      <ExploreCategories />
      <CommunitySection />
    </div>
  );
};

export default Home;