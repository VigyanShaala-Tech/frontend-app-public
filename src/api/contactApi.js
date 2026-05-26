import { getHttpClient, getLmsBaseUrl } from './client';

export const submitContactForm = (payload) => getHttpClient().post(
  `${getLmsBaseUrl()}/api/v1/contact-us/`,
  payload,
  {
    headers: { 'Content-Type': 'application/json' },
  },
);
