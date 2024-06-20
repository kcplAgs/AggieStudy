// src/hooks/useCourseSearch.js
import { useState, useEffect, useRef } from 'react';
import { searchCourses } from '../api/courseService';

const useCourseSearch = (initialQuery = '') => {
    const [query, setQuery] = useState(initialQuery);
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const debounceTimeout = useRef(null);

    const handleSearch = async (searchQuery) => {
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
    };

    useEffect(() => {
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        debounceTimeout.current = setTimeout(() => {
            if (query) {
                handleSearch(query);
            }
        }, 125); // Adjust the debounce delay as needed

        return () => clearTimeout(debounceTimeout.current);
    }, [query]);

    return {
        query,
        setQuery,
        results,
        loading,
        error,
    };
};

export default useCourseSearch;
