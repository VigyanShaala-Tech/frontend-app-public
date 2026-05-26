import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';

export const getLmsBaseUrl = () => getConfig().LMS_BASE_URL;

export const getHttpClient = () => getAuthenticatedHttpClient();
