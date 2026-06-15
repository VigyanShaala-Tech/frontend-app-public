import 'core-js/stable';
import 'regenerator-runtime/runtime';

import {
  APP_INIT_ERROR, APP_READY, subscribe, initialize,
} from '@edx/frontend-platform';
import { ErrorPage } from '@edx/frontend-platform/react';
import { createRoot } from 'react-dom/client';

import App from './App';
import messages from './i18n';

import './index.scss';

document.documentElement.classList.add('custom-page-scroll');
document.body.classList.add('custom-page-scroll');

const container = document.getElementById('root');

const root = createRoot(container);
subscribe(APP_READY, () => {
  root.render(<App />);
});

subscribe(APP_INIT_ERROR, (error) => {
  root.render(<ErrorPage message={error.message} />);
});

initialize({
  messages,
});