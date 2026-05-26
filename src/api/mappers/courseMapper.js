export const mapCatalogCourseItem = (item) => ({
  id: item.id || item.course_id,
  title: item.name,
  description: item.short_description,
  category: item.category,
  level: item.level,
  duration: item.effort,
  rating: item.rating,
  reviews: item.no_of_reviews,
  enrollments: item.enrollments,
  instructor: item.instructor_name,
  image: item.media?.image?.large,
  ribbon: item.ribbon,
});

export const mapCatalogCourses = (results) => (results || []).map(mapCatalogCourseItem);
