// src/App.jsx  (recommended - cleanest & follows Open edX conventions)

import React from 'react';

import { AppProvider } from '@edx/frontend-platform/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Header from '@edx/frontend-component-header';
import { FooterSlot } from '@edx/frontend-component-footer';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import ExamplePage from './example/ExamplePage';
// import { MenuItem } from '@openedx/paragon';

const MenuItem = [
    {
        type: 'item',
        href: `/public`,
        content: 'Home',
    },
    {
        type: 'item',
        href: `/public/courses`,
        content: 'Courses',
    },
    {
        type: 'item',
        href: `/public/about`,
        content: 'About-Us',
    },
    {
        type: 'item',
        href: `/public/contact`,
        content: 'Contact-Us',
    },
];


const queryClient = new QueryClient();

const App = () => (
    <BrowserRouter>
        <AppProvider wrapWithRouter={false}>
            <QueryClientProvider client={queryClient}>
                <div className="d-flex flex-column min-dvh-100">
                    <Header mainMenuItems={MenuItem}/>
                    <main className="d-flex flex-column flex-grow-1">
                        <Routes>
                            <Route path="/public" element={<ExamplePage />} />
                        </Routes>
                    </main>
                    <FooterSlot />
                </div>
            </QueryClientProvider>
        </AppProvider>
  </BrowserRouter>
);

export default App;