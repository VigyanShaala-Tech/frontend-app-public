import React, { useState } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import {
  Form,
  Button,
  Pagination,
} from '@openedx/paragon';
import { faSearch, faTimes, faTh, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import messages from '../../message/GlobalMessage.message';
import CourseCard from '../../components/CourseCard/CourseCard';

import './CourseCatalog.scss';

// Dummy data (20 courses)
const categories = [
  'All Categories',
  'Data Science',
  'Development',
  'Business',
  'Design',
  'Marketing',
  'Finance',
];

const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

const subjects = [
  'All Subjects',
  'Python',
  'JavaScript',
  'React',
  'Machine Learning',
  'UI/UX',
  'Data Analysis',
  'Digital Marketing',
  'Project Management',
  'Communication',
];

const mockCourses = [
  { id: 1, title: 'Complete Python Bootcamp', description: 'Master Python from scratch with real projects.', category: 'Development', level: 'Beginner', subject: 'Python', duration: '42 hours', rating: 4.8, reviews: 2140, instructor: 'Dr. Sarah Johnson', image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800' },
  { id: 2, title: 'Data Science Fundamentals', description: 'Learn data analysis, visualization, ML basics.', category: 'Data Science', level: 'Intermediate', subject: 'Data Analysis', duration: '50 hours', rating: 4.7, reviews: 1890, instructor: 'Prof. Michael Chen', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800' },
  { id: 3, title: 'Business Communication Mastery', description: 'Improve professional communication skills.', category: 'Business', level: 'Beginner', subject: 'Communication', duration: '25 hours', rating: 4.6, reviews: 1560, instructor: 'Dr. Emily Roberts', image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800' },
  { id: 4, title: 'UI/UX Design Mastery', description: 'Create stunning interfaces and experiences.', category: 'Design', level: 'Intermediate', subject: 'UI/UX', duration: '45 hours', rating: 4.9, reviews: 2100, instructor: 'Alex Thompson', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800' },
  { id: 5, title: 'Financial Literacy 101', description: 'Build strong personal finance foundations.', category: 'Finance', level: 'Beginner', subject: 'Finance', duration: '20 hours', rating: 4.5, reviews: 980, instructor: 'James Wilson', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800' },
  { id: 6, title: 'Digital Marketing Strategy', description: 'Master modern digital marketing.', category: 'Marketing', level: 'Intermediate', subject: 'Digital Marketing', duration: '35 hours', rating: 4.8, reviews: 1340, instructor: 'Lisa Anderson', image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=800' },
  { id: 7, title: 'React Development Bootcamp', description: 'Build modern web apps with React.', category: 'Development', level: 'Intermediate', subject: 'React', duration: '55 hours', rating: 4.9, reviews: 2560, instructor: 'David Kim', image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800' },
  { id: 8, title: 'Machine Learning A-Z', description: 'Complete ML course with Python & R.', category: 'Data Science', level: 'Advanced', subject: 'Machine Learning', duration: '60 hours', rating: 4.8, reviews: 3200, instructor: 'Prof. Michael Chen', image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800' },
  { id: 9, title: 'Project Management Professional', description: 'Master PM methodologies.', category: 'Business', level: 'Intermediate', subject: 'Project Management', duration: '30 hours', rating: 4.7, reviews: 1120, instructor: 'Dr. Emily Roberts', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800' },
  { id: 10, title: 'Advanced JavaScript Deep Dive', description: 'Modern JS features & design patterns.', category: 'Development', level: 'Advanced', subject: 'JavaScript', duration: '40 hours', rating: 4.9, reviews: 1850, instructor: 'Sarah Johnson', image: 'https://images.unsplash.com/photo-1627398243573-3688c1a90de4?w=800' },
  { id: 11, title: 'Introduction to Finance', description: 'Basic financial concepts & markets.', category: 'Finance', level: 'Beginner', subject: 'Finance', duration: '28 hours', rating: 4.6, reviews: 920, instructor: 'James Wilson', image: 'https://images.unsplash.com/photo-1460925895917-afdb5d372e4d?w=800' },
  { id: 12, title: 'Graphic Design Essentials', description: 'Fundamentals using Adobe tools.', category: 'Design', level: 'Beginner', subject: 'Design', duration: '35 hours', rating: 4.7, reviews: 1420, instructor: 'Alex Thompson', image: 'https://images.unsplash.com/photo-1618005182385-5338c06392d0?w=800' },
  { id: 13, title: 'Marketing Analytics', description: 'Data-driven marketing decisions.', category: 'Marketing', level: 'Intermediate', subject: 'Digital Marketing', duration: '45 hours', rating: 4.8, reviews: 1680, instructor: 'Lisa Anderson', image: 'https://images.unsplash.com/photo-1460925895917-afdb5d372e4d?w=800' },
  { id: 14, title: 'Leadership in Business', description: 'Modern workplace leadership skills.', category: 'Business', level: 'Advanced', subject: 'Business', duration: '38 hours', rating: 4.7, reviews: 1240, instructor: 'Dr. Emily Roberts', image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800' },
  { id: 15, title: 'Deep Learning Specialization', description: 'Neural networks & deep learning.', category: 'Data Science', level: 'Advanced', subject: 'Machine Learning', duration: '65 hours', rating: 4.9, reviews: 2800, instructor: 'Prof. Michael Chen', image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800' },
  { id: 16, title: 'Full Stack Web Development', description: 'Frontend + backend with modern stacks.', category: 'Development', level: 'Intermediate', subject: 'JavaScript', duration: '60 hours', rating: 4.8, reviews: 1950, instructor: 'David Kim', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800' },
  { id: 17, title: 'Investment Strategies', description: 'Build & manage investment portfolios.', category: 'Finance', level: 'Intermediate', subject: 'Finance', duration: '32 hours', rating: 4.6, reviews: 1100, instructor: 'James Wilson', image: 'https://images.unsplash.com/photo-1570549717489-92f4fe77b282?w=800' },
  { id: 18, title: 'Product Design Principles', description: 'Ideation to prototyping in product design.', category: 'Design', level: 'Beginner', subject: 'UI/UX', duration: '40 hours', rating: 4.7, reviews: 1350, instructor: 'Alex Thompson', image: 'https://images.unsplash.com/photo-1507238691740-187a5b1bbd74?w=800' },
  { id: 19, title: 'Social Media Marketing', description: 'Grow business on social platforms.', category: 'Marketing', level: 'Beginner', subject: 'Digital Marketing', duration: '30 hours', rating: 4.5, reviews: 1020, instructor: 'Lisa Anderson', image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800' },
  { id: 20, title: 'Entrepreneurship Essentials', description: 'Start and scale your own business.', category: 'Business', level: 'Beginner', subject: 'Business', duration: '45 hours', rating: 4.8, reviews: 1480, instructor: 'Dr. Emily Roberts', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800' },
];

const COURSES_PER_PAGE = 6;

const CourseCatalog = () => {
  const { formatMessage } = useIntl();

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All Categories');
  const [level, setLevel] = useState('All Levels');
  const [subject, setSubject] = useState('All Subjects');
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCourses = mockCourses.filter((course) => {
    const matchSearch = !search ||
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.instructor.toLowerCase().includes(search.toLowerCase());

    return (
      matchSearch &&
      (category === 'All Categories' || course.category === category) &&
      (level === 'All Levels' || course.level === level) &&
      (subject === 'All Subjects' || course.subject === subject)
    );
  });

  const totalPages = Math.ceil(filteredCourses.length / COURSES_PER_PAGE);
  const paginatedCourses = filteredCourses.slice(
    (currentPage - 1) * COURSES_PER_PAGE,
    currentPage * COURSES_PER_PAGE
  );

  const clearFilters = () => {
    setSearch('');
    setCategory('All Categories');
    setLevel('All Levels');
    setSubject('All Subjects');
    setCurrentPage(1);
  };

  const activeFilters = [
    category !== 'All Categories' && {
      label: category,
      onClear: () => { setCategory('All Categories'); setCurrentPage(1); },
    },
    level !== 'All Levels' && {
      label: level,
      onClear: () => { setLevel('All Levels'); setCurrentPage(1); },
    },
    subject !== 'All Subjects' && {
      label: subject,
      onClear: () => { setSubject('All Subjects'); setCurrentPage(1); },
    },
  ].filter(Boolean);

  return (
    <div className="course-catalog-page">
      {/* Hero */}
      <section className="py-5 text-center">
        <div className="container">
          <h1 className="mb-3">{formatMessage(messages['catalog.title'])}</h1>
          <p className="lead text-muted">{formatMessage(messages['catalog.subtitle'])}</p>
        </div>
      </section>

      {/* Filters & Content */}
      <section className="pb-5 ">
        <div className="container">
          {/* Filter Bar */}
          <div className="filter-bar border rounded p-4 mb-5 bg-white">
            <div className="row g-3 align-items-center">
              {/* Search */}
              <div className="search-bar col-lg-5 position-relative">
                <Form.Control
                  type="text"
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
                  placeholder={formatMessage(messages['catalog.search.placeholder'])}
                  className="ps-5"
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="search-icon text-muted"
                />
              </div>

              {/* Dropdown Filters */}
              <div className="col-lg-5 filter-container">
                <div className="d-flex flex-wrap gap-3">
                  <Form.Group className="flex-grow-1 filter-dropdown">
                    <Form.Control
                      as="select"
                      value={category}
                      onChange={(e) => { setCategory(e.target.value); setCurrentPage(1); }}
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>
                          {cat === 'All Categories' ? formatMessage(messages['catalog.filter.allCategories']) : cat}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group className="flex-grow-1 filter-dropdown">
                    <Form.Control
                      as="select"
                      value={level}
                      onChange={(e) => { setLevel(e.target.value); setCurrentPage(1); }}
                    >
                      {levels.map(lv => (
                        <option key={lv} value={lv}>
                          {lv === 'All Levels' ? formatMessage(messages['catalog.filter.allLevels']) : lv}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>

                  <Form.Group className="flex-grow-1 filter-dropdown">
                    <Form.Control
                      as="select"
                      value={subject}
                      onChange={(e) => { setSubject(e.target.value); setCurrentPage(1); }}
                    >
                      {subjects.map(sub => (
                        <option key={sub} value={sub}>
                          {sub === 'All Subjects' ? formatMessage(messages['catalog.filter.allSubjects']) : sub}
                        </option>
                      ))}
                    </Form.Control>
                  </Form.Group>
                </div>
              </div>

              {/* View Toggle */}
              <div className="col-lg-2 d-flex justify-content-end">
                <div className="btn-group">
                    <Button
                        variant={viewMode === 'grid' ? 'primary' : 'outline-primary'}
                        onClick={() => setViewMode('grid')}
                        title={formatMessage(messages['catalog.view.grid'])} // tooltip on hover
                        className='border'
                    >
                    <FontAwesomeIcon icon={faTh} />
                    </Button>
                    <Button
                        variant={viewMode === 'list' ? 'primary' : 'outline-primary'}
                        onClick={() => setViewMode('list')}
                        title={formatMessage(messages['catalog.view.list'])} // tooltip on hover
                        className='border'
                    >
                    <FontAwesomeIcon icon={faList} />
                    </Button>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            {activeFilters.length > 0 && (
              <div className="mt-4 pt-3 border-top d-flex flex-wrap gap-2 align-items-center">
                <span className="text-muted small me-2">
                  {formatMessage(messages['catalog.activeFilters.label'])}
                </span>
                {activeFilters.map((f, idx) => (
                  <span key={idx} className="badge bg-light text-dark border m-2">
                    {f.label}
                    <button
                        type="button"
                        className="close-filter-btn p-0 border-0 bg-transparent ms-2"
                        onClick={f.onClear}
                        aria-label="remove filter" 
                    >
                        <FontAwesomeIcon icon={faTimes} size="sm" className="text-muted ml-1" />
                    </button>
                  </span>
                ))}
                <button
                  className="btn btn-link btn-sm text-muted ms-2 p-0"
                  onClick={clearFilters}
                >
                  {formatMessage(messages['catalog.clearAll.label'])}
                </button>
              </div>
            )}
          </div>

          {/* Results count */}
          <p className="text-muted mb-4">
            {formatMessage(messages['catalog.results.showing'], { count: filteredCourses.length, perPage: COURSES_PER_PAGE })}
          </p>

          {/* Course Grid / List */}
          {viewMode === 'grid' ? (
            <div className="row g-4">
              {paginatedCourses.map(course => (
                <div key={course.id} className="col-md-6 col-lg-4 mb-4">
                  <CourseCard course={course} layout="grid" />
                </div>
              ))}
            </div>
          ) : (
            <div className="d-flex flex-column gap-4">
              {paginatedCourses.map(course => (
                <div key={course.id} className="mb-4">
                    <CourseCard key={course.id} course={course} layout="list" />
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="d-flex justify-content-center mt-5">
              <Pagination
                paginationLabel="Course catalog pagination"
                pageCount={totalPages}
                currentPage={currentPage}
                onPageSelect={setCurrentPage}
                variant="secondary"
              />
            </div>
          )}

          {/* No Results */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-8 no-results rounded">
              <h4 className="text-muted mb-4">
                {formatMessage(messages['catalog.noResults.title'])}
              </h4>
              <Button variant="outline-primary" onClick={clearFilters}>
                {formatMessage(messages['catalog.noResults.action'])}
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CourseCatalog;