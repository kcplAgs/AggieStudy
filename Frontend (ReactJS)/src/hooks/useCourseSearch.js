// src/hooks/useCourseSearch.js
import { useState, useEffect, useCallback } from 'react';
import { searchCourses } from '../api/courseService';
import { debounce } from 'lodash'; // Make sure to install lodash

const useCourseSearch = (initialQuery = '') => {
    const [query, setQuery] = useState(initialQuery);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const debouncedSearch = useCallback(
        debounce(async (searchQuery) => {
            setLoading(true);
            setError('');
            try {
                const response = await searchCourses(searchQuery.toLowerCase());
                setResults(response.data);
            } catch (err) {
                setError('Error fetching courses');
            } finally {
                setLoading(false);
            }
        }, 300),
        []
    );

    useEffect(() => {
        if (query) {
            debouncedSearch(query);
        } else {
            setResults([]);
        }
    }, [query, debouncedSearch]);

    return { query, setQuery, results, loading, error };
};

export default useCourseSearch;