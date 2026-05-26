import { getHttpClient, getLmsBaseUrl } from './client';

const catalogUrl = (path) => `${getLmsBaseUrl()}/api/v1/catalog${path}`;

export const fetchCatalogFilters = () => getHttpClient().get(catalogUrl('/filters/'));

export const fetchCatalogCourses = (params = {}) => {
  const searchParams = new URLSearchParams();

  if (params.search_term) {
    searchParams.append('search_term', params.search_term);
  }
  if (params.category) {
    searchParams.append('category', params.category);
  }
  if (params.level) {
    searchParams.append('level', params.level);
  }
  if (params.subject) {
    searchParams.append('subject', params.subject);
  }
  if (params.page && params.page > 1) {
    searchParams.append('page', params.page);
  }

  const query = searchParams.toString();
  const url = query ? `${catalogUrl('/courses/')}?${query}` : catalogUrl('/courses/');

  return getHttpClient().get(url);
};

export const fetchCourseById = (courseId) => getHttpClient().get(catalogUrl(`/courses/${courseId}/`));

export const fetchCourseCurriculum = (courseId) => getHttpClient().get(catalogUrl(`/course-curriculum/${courseId}/`));

export const fetchCourseInstructors = (courseId) => getHttpClient().get(catalogUrl(`/course-instructors/${courseId}/`));

export const fetchCourseReviews = (courseId) => getHttpClient().get(catalogUrl(`/course-reviews/${courseId}/`));

export const fetchCategories = () => getHttpClient().get(catalogUrl('/categories/'));
