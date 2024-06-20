import React, { useState, useEffect, useRef } from 'react';
import './CourseSearch.css';
import { searchCourses } from '../api/courseService';

const CourseSearch = () => {
    const [query, setQuery] = useState('');
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

    const highlightQuery = (name) => {
        const parts = name.split(new RegExp(`(${query})`, 'gi'));
        return <span>{parts.map((part, i) => part.toLowerCase() === query.toLowerCase() ? <b key={i}>{part}</b> : part)}</span>;
    };

    return (
        <section className="course-search-container">
            <h1 className="course-search-title">Course Search</h1>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => setQuery(e.target.value)} 
                placeholder="Search for courses..." 
                className="course-search-input"
            />
            {loading && <div className="loading">Loading...</div>}
            {error && <div className="error">{error}</div>}
            {!loading && results.length === 0 && query && <div className="no-results">No results found</div>}
            <ul className="course-search-results">
                {results.map(result => (
                    <li key={result.id} className="course-search-item">
                        {highlightQuery(result.name)}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default CourseSearch;
