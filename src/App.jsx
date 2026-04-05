import React from 'react';

import { AppProvider } from '@edx/frontend-platform/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { FooterSlot } from '@edx/frontend-component-footer';

import { Routes, Route, BrowserRouter, useLocation, Navigate} from 'react-router-dom';

import CustomHeader from './components/CustomHeader/CustomHeader'

import Home from './pages/Home/Home';
import CourseCatalog from './pages/CourseCatalog/CourseCatalog';
import CourseAbout from "./pages/CourseAbout/CourseAbout";
import Contact from './pages/Contact/Contact';
import Terms from './pages/Terms/Terms';
import Privacy from './pages/Privacy/Privacy';
import OurStory from './pages/About/OurStory/OurStory'
import Team from './pages/About/Team/Team';
import Supporter from './pages/About/Supporters/Supporters';
import Financial from './pages/About/Financials/Financials';

const queryClient = new QueryClient();

function Layout() {
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const isMobile = params.get("mobile") === "true";

  return (
    <div className='public-page'>
      {!isMobile && <CustomHeader />}

      <Routes>
        <Route path="/public" element={<Home />} />
        <Route path="/public/courses" element={<CourseCatalog />} />
        <Route path="/public/courses/:id" element={<CourseAbout />} />
        <Route path="/public/about" element={<Navigate to="/public/story" replace />} />
        <Route path="/public/story" element={<OurStory />} />
        <Route path="/public/team" element={<Team />} />
        <Route path="/public/supporter" element={<Supporter />} />
        <Route path="/public/financial" element={<Financial />} />
        <Route path="/public/contact" element={<Contact />} />
        <Route path="/public/terms" element={<Terms />} />
        <Route path="/public/privacy" element={<Privacy />} />
      </Routes>

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