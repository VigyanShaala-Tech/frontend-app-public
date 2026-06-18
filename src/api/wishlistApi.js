import { getHttpClient, getLmsBaseUrl } from './client';

export const addToWishlist = (courseId) => getHttpClient().post(`${getLmsBaseUrl()}/api/v1/wishlist/add/`, {
  course_id: courseId,
});

export const removeFromWishlist = (courseId) => getHttpClient().post(`${getLmsBaseUrl()}/api/v1/wishlist/remove/`, {
  course_id: courseId,
});
