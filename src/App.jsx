import React, { useEffect } from 'react';

import { AppProvider } from '@edx/frontend-platform/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { FooterSlot } from '@edx/frontend-component-footer';

import { Routes, Route, BrowserRouter, useLocation, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import PageTransition from './components/animations/PageTransition';
import './components/animations/animations.scss';

import CustomHeader from './components/CustomHeader/CustomHeader'

import Home from './pages/Home/Home';
import CourseCatalog from './pages/CourseCatalog/CourseCatalog';
import CourseAbout from "./pages/CourseAbout/CourseAbout";
import Contact from './pages/Contact/Contact';
import Terms from './pages/Terms/Terms';
import Privacy from './pages/Privacy/Privacy';
import FAQ from './pages/FAQ/FAQ';
import OurStory from './pages/About/OurStory/OurStory'
import Team from './pages/About/Team/Team';
import Supporter from './pages/About/Supporters/Supporters';
import Financial from './pages/About/Financials/Financials';

const queryClient = new QueryClient();

function Layout() {
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const isMobile = params.get('mobile') === 'true';

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <div className="public-page">
      {!isMobile && <CustomHeader />}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/public" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/public/courses" element={<PageTransition><CourseCatalog /></PageTransition>} />
          <Route path="/public/courses/:id" element={<PageTransition><CourseAbout /></PageTransition>} />
          <Route path="/public/about" element={<Navigate to="/public/story" replace />} />
          <Route path="/public/story" element={<PageTransition><OurStory /></PageTransition>} />
          <Route path="/public/team" element={<PageTransition><Team /></PageTransition>} />
          <Route path="/public/supporter" element={<PageTransition><Supporter /></PageTransition>} />
          <Route path="/public/financial" element={<PageTransition><Financial /></PageTransition>} />
          <Route path="/public/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/public/terms" element={<PageTransition><Terms /></PageTransition>} />
          <Route path="/public/privacy" element={<PageTransition><Privacy /></PageTransition>} />
          <Route path="/public/faq" element={<PageTransition><FAQ /></PageTransition>} />
        </Routes>
      </AnimatePresence>

      {!isMobile && <FooterSlot />}
    </div>
  );
}

const App = () => (
  <BrowserRouter>
    <AppProvider wrapWithRouter={false}>
      <QueryClientProvider client={queryClient}>
        <Layout />
      </QueryClientProvider>
    </AppProvider>
  </BrowserRouter>
);

export default App;