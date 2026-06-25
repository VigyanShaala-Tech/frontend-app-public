import { getHttpClient, getLmsBaseUrl } from './client';

export const enrollInCourse = (courseId) => getHttpClient().post(
  `${getLmsBaseUrl()}/api/v1/course-metadata/change-enrollment/`,
  {
    course_id: courseId,
    enrollment_action: 'enroll',
  },
  {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  },
);
