import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useIntl } from '@edx/frontend-platform/i18n';
import {
  Form,
  Button,
  Pagination,
  Spinner,
} from '@openedx/paragon';
import { faSearch, faTimes, faTh, faList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import messages from '../../message/GlobalMessage.message';
import CourseCard from '../../components/CourseCard/CourseCard';

import './CourseCatalog.scss';
import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';

const CourseCatalog = () => {
  const { formatMessage } = useIntl();

  // Filter options from /api/v1/catalog/filters/
  const [categories, setCategories] = useState(['All Categories']);
  const [levels, setLevels] = useState(['All Levels']);
  const [subjects, setSubjects] = useState(['All Subjects']);

  // User selections
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All Categories');
  const [level, setLevel] = useState('All Levels');
  const [subject, setSubject] = useState('All Subjects');
  const [viewMode, setViewMode] = useState('grid');

  // Pagination & courses
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCourses, setTotalCourses] = useState(0);

  // UI states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchRef = useRef(null);

  // Fetch filter options once
  useEffect(() => {
    const fetchFilters = async () => {
      setError(null);
      try {
        const res = await getAuthenticatedHttpClient().get(`${getConfig().LMS_BASE_URL}/api/v1/catalog/filters/`);

        if (res.status === 200 && res.data) {
          setCategories(['All Categories', ...(res.data.categories || [])]);
          setLevels(['All Levels', ...(res.data.levels || [])]);
          setSubjects(['All Subjects', ...(res.data.subjects || [])]);
        }
      } catch (err) {
        console.error('Failed to load filter options:', err);
      }
    };
    fetchFilters();
  }, []);


  // Fetch courses for current page + filters
  const fetchCourses = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams();

      if (search.trim()) {
        params.append('search_term', search.trim());
      }
      if (category !== 'All Categories') {
        params.append('category', category);
      }
      if (level !== 'All Levels') {
        params.append('level', level);
      }
      if (subject !== 'All Subjects') {
        params.append('subject', subject);
      }
      if (currentPage > 1) {
        params.append('page', currentPage);
      }

      const response = await getAuthenticatedHttpClient().get(`${getConfig().LMS_BASE_URL}/api/v1/catalog/courses/?${params.toString()}`);

      if (response.status === 200 && response.data?.results) {
        const mappedCourses = response.data.results.map((item) => ({
          id: item.id || item.course_id,
          title: item.name,
          description: item.short_description,
          category: item.category,
          level: item.level,
          duration: item.effort,
          rating: item.rating,
          reviews: item.no_of_reviews,
          instructor: item.instructor_name,
          image: item.media?.image?.large,
          ribbon: item.ribbon,
        }));

        setCourses(mappedCourses);
        setTotalPages(response.data.pagination?.num_pages);
        setTotalCourses(response.data.pagination?.count || mappedCourses.length);
      } else {
        setCourses([]);
        setTotalPages(1);
        setTotalCourses(0);
      }
    } catch (err) {
      console.error('Courses fetch failed:', err);
      setError(
        formatMessage(messages['catalog.error.fetch'])
      );
      setCourses([]);
      setTotalPages(1);
      setTotalCourses(0);
    } finally {
      setLoading(false);
    }
  }, [search, category, level, subject, currentPage, formatMessage]);

  // Fetch when filters or page changes
  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  // Reset to page 1 when any filter/search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, level, subject]);

  useEffect(() => {
    searchRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, [currentPage]);


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
        <div className="container banner">
          <h1 className="mb-3 course-catalog-page-heading">{formatMessage(messages['catalog.title'])}</h1>
          <p className="text-muted course-catalog-page-paragraph">{formatMessage(messages['catalog.subtitle'])}</p>
        </div>
      </section>

      {/* Filters & Content */}
      <section ref={searchRef} className="pb-5 ">
        <div className="container">
          {/* Filter Bar */}
          <div className="filter-bar rounded p-4 mb-5 bg-white">
            <div className="row g-3 align-items-center">
              {/* Search */}
              <div className="search-bar col-lg-5 position-relative">
                <Form.Control
                  type="text"
                  value={search}
                  onChange={(e) => { setSearch(e.target.value);}}
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
              <div className="active-filter-container mt-4 pt-3 border-top d-flex flex-wrap gap-2 align-items-center">
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
          <p className="result-count text-muted mb-4">
            {formatMessage(messages['catalog.results.showing'], { count: totalCourses, perPage: courses.length })}
          </p>

          {/* Course Grid / List or Loading */}
          {loading ? (
            <div className="d-flex justify-content-center align-items-center py-8">
              <Spinner
                animation="border"
                variant="primary"      
                screenReaderText={formatMessage(messages['catalog.loading'])}
              />
              <span className="ms-3 sr-only">{formatMessage(messages['catalog.loading'])}</span>
            </div>
          ) : courses.length === 0 ? (
            <div className="text-center py-8 no-results rounded">
              <h4 className="text-muted mb-4">
                {formatMessage(messages['catalog.noResults.title'])}
              </h4>
              <Button variant="outline-primary" onClick={clearFilters}>
                {formatMessage(messages['catalog.noResults.action'])}
              </Button>
            </div>
          ) : viewMode === 'grid' ? (
            <div className="row g-4">
              {courses.map(course => (
                <div key={course.id} className="col-md-6 col-lg-4 mb-4">
                  <CourseCard key={course.id} course={course} layout="grid" />
                </div>
              ))}
            </div>
          ) : (
            <div className="d-flex flex-column gap-4">
              {courses.map(course => (
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
                variant="primary"
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CourseCatalog;