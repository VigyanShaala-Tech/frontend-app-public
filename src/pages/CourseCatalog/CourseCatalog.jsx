import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
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
import CustomSearchDropdown from '../../components/CustomSearchDropdown/CustomSearchDropdown';

import './CourseCatalog.scss';
import { fetchCatalogFilters, fetchCatalogCourses, mapCatalogCourses } from '../../api';

const ALL_FILTER_VALUE = '';

const CourseCatalog = () => {
  const { formatMessage } = useIntl();
  const allCategoriesLabel = formatMessage(messages['catalog.filter.allCategories']);
  const allLevelsLabel = formatMessage(messages['catalog.filter.allLevels']);
  const allSubjectsLabel = formatMessage(messages['catalog.filter.allSubjects']);
  const allSortByLabel = formatMessage(messages['catalog.filter.sortBy']);

  const [apiCategories, setApiCategories] = useState([]);
  const [apiLevels, setApiLevels] = useState([]);
  const [apiSubjects, setApiSubjects] = useState([]);
  const [apiSortBy, setApiSortBy] = useState([]);

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState(ALL_FILTER_VALUE);
  const [level, setLevel] = useState(ALL_FILTER_VALUE);
  const [subject, setSubject] = useState(ALL_FILTER_VALUE);
  const [sortBy, setSortBy] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCourses, setTotalCourses] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchRef = useRef(null);

  const categoryOptions = useMemo(() => [
    { value: ALL_FILTER_VALUE, label: allCategoriesLabel },
    ...apiCategories.map((item) => ({ value: item, label: item })),
  ], [apiCategories, allCategoriesLabel]);

  const levelOptions = useMemo(() => [
    { value: ALL_FILTER_VALUE, label: allLevelsLabel },
    ...apiLevels.map((item) => ({ value: item, label: item })),
  ], [apiLevels, allLevelsLabel]);

  const subjectOptions = useMemo(() => [
    { value: ALL_FILTER_VALUE, label: allSubjectsLabel },
    ...apiSubjects.map((item) => ({ value: item, label: item })),
  ], [apiSubjects, allSubjectsLabel]);

  const sortOptions = useMemo(() => [
    { value: ALL_FILTER_VALUE, label: allSortByLabel },
    ...apiSortBy.map((item) => ({ value: item, label: item })),
  ], [apiSortBy, allSortByLabel]);

  const getFilterLabel = (options, selectedValue) => (
    options.find((option) => option.value === selectedValue)?.label || selectedValue
  );

  useEffect(() => {
    const loadFilters = async () => {
      setError(null);
      try {
        const res = await fetchCatalogFilters();

        if (res.status === 200 && res.data) {
          setApiCategories(res.data.categories || []);
          setApiLevels(res.data.levels || []);
          setApiSubjects(res.data.subjects || []);
          setApiSortBy(res.data.sortby || res.data.sort_by || []);
        }
      } catch (err) {
        console.error('Failed to load filter options:', err);
      }
    };

    loadFilters();
  }, []);

  const fetchCourses = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetchCatalogCourses({
        search_term: search.trim() || undefined,
        category: category || undefined,
        level: level || undefined,
        subject: subject || undefined,
        sort: sortBy || undefined,
        page: currentPage,
      });

      if (response.status === 200 && response.data?.results) {
        const mappedCourses = mapCatalogCourses(response.data.results);

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
      setError(formatMessage(messages['catalog.error.fetch']));
      setCourses([]);
      setTotalPages(1);
      setTotalCourses(0);
    } finally {
      setLoading(false);
    }
  }, [search, category, level, subject, sortBy, currentPage, formatMessage]);

  useEffect(() => {
    fetchCourses();
  }, [fetchCourses]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, level, subject, sortBy]);

  useEffect(() => {
    searchRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [currentPage]);

  const clearFilters = () => {
    setSearch('');
    setCategory(ALL_FILTER_VALUE);
    setLevel(ALL_FILTER_VALUE);
    setSubject(ALL_FILTER_VALUE);
    setSortBy('');
    setCurrentPage(1);
  };

  const activeFilters = [
    category && {
      label: getFilterLabel(categoryOptions, category),
      onClear: () => { setCategory(ALL_FILTER_VALUE); setCurrentPage(1); },
    },
    level && {
      label: getFilterLabel(levelOptions, level),
      onClear: () => { setLevel(ALL_FILTER_VALUE); setCurrentPage(1); },
    },
    subject && {
      label: getFilterLabel(subjectOptions, subject),
      onClear: () => { setSubject(ALL_FILTER_VALUE); setCurrentPage(1); },
    },
    sortBy && {
      label: getFilterLabel(sortOptions, sortBy),
      onClear: () => { setSortBy(''); setCurrentPage(1); },
    },
  ].filter(Boolean);

  return (
    <div className="course-catalog-page">
      <section className="py-5 text-center">
        <div className="container banner">
          <h1 className="mb-3 course-catalog-page-heading">{formatMessage(messages['catalog.title'])}</h1>
          <p className="text-muted course-catalog-page-paragraph">{formatMessage(messages['catalog.subtitle'])}</p>
        </div>
      </section>

      <section ref={searchRef} className="course-catalog-container">
        <div className="container">
          <div className="filter-bar rounded bg-white">
            <div className="catalog-filter-row">
              <div className="search-bar position-relative">
                <Form.Control
                  type="text"
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); }}
                  placeholder={formatMessage(messages['catalog.search.placeholder'])}
                  className="ps-5 catalog-search-input"
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="search-icon text-muted"
                />
              </div>

              <div className="catalog-filters-group">
                <div className="filter-dropdown">
                  <CustomSearchDropdown
                    id="catalog-category-dropdown"
                    options={categoryOptions}
                    value={category}
                    onChange={(selected) => { setCategory(selected); setCurrentPage(1); }}
                  />
                </div>

                <div className="filter-dropdown">
                  <CustomSearchDropdown
                    id="catalog-level-dropdown"
                    options={levelOptions}
                    value={level}
                    onChange={(selected) => { setLevel(selected); setCurrentPage(1); }}
                  />
                </div>

                <div className="filter-dropdown">
                  <CustomSearchDropdown
                    id="catalog-subject-dropdown"
                    options={subjectOptions}
                    value={subject}
                    onChange={(selected) => { setSubject(selected); setCurrentPage(1); }}
                  />
                </div>

                <div className="filter-dropdown filter-dropdown--sort">
                  <CustomSearchDropdown
                    id="catalog-sort-dropdown"
                    options={sortOptions}
                    value={sortBy}
                    onChange={(selected) => { setSortBy(selected); setCurrentPage(1); }}
                  />
                </div>
              </div>

              <div className="catalog-view-toggle">
                <div className="btn-group">
                  <Button
                    variant={viewMode === 'grid' ? 'primary' : 'outline-primary'}
                    onClick={() => setViewMode('grid')}
                    title={formatMessage(messages['catalog.view.grid'])}
                    className="border catalog-view-btn"
                  >
                    <FontAwesomeIcon icon={faTh} />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'primary' : 'outline-primary'}
                    onClick={() => setViewMode('list')}
                    title={formatMessage(messages['catalog.view.list'])}
                    className="border catalog-view-btn"
                  >
                    <FontAwesomeIcon icon={faList} />
                  </Button>
                </div>
              </div>
            </div>

            {activeFilters.length > 0 && (
              <div className="active-filter-container mt-4 pt-3 border-top d-flex flex-wrap gap-2 align-items-center">
                <span className="text-muted small me-2">
                  {formatMessage(messages['catalog.activeFilters.label'])}
                </span>
                {activeFilters.map((f) => (
                  <span key={f.label} className="badge bg-light text-dark border m-2">
                    {f.label}
                    <button
                      type="button"
                      className="close-filter-btn p-0 border-0 bg-transparent ms-2"
                      onClick={f.onClear}
                      aria-label={formatMessage(messages['catalog.clearAll.label'])}
                    >
                      <FontAwesomeIcon icon={faTimes} size="sm" className="text-muted ml-1" />
                    </button>
                  </span>
                ))}
                <button
                  type="button"
                  className="btn btn-link btn-sm text-muted ms-2 p-0"
                  onClick={clearFilters}
                >
                  {formatMessage(messages['catalog.clearAll.label'])}
                </button>
              </div>
            )}
          </div>

          <p className="result-count text-muted mb-4">
            {formatMessage(messages['catalog.results.showing'], { count: totalCourses, perPage: courses.length })}
          </p>

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
            <div className="course-catalog-grid">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} layout="grid" />
              ))}
            </div>
          ) : (
            <div className="course-catalog-list">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course} layout="list" />
              ))}
            </div>
          )}

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
