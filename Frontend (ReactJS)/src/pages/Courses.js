// src/components/Courses.js
import React, { useState } from 'react';
import useCourses from "../hooks/useCourses";
import useCourseSearch from "../hooks/useCourseSearch";
import './Courses.css';
import '../components/CourseSearch.css';
import Resources from "./Resources";

const Courses = () => {
    const { courses, loading: coursesLoading, error: coursesError } = useCourses();
    const { query, setQuery, results, loading, error } = useCourseSearch();
    const [selectedCourseId, setSelectedCourseId] = useState(null);

    const handleCourseClick = (courseId) => {
        setSelectedCourseId(courseId);
    };

    const highlightQuery = (name) => {
        const parts = name.split(new RegExp(`(${query})`, 'gi'));
        return <span>{parts.map((part, i) => part.toLowerCase() === query.toLowerCase() ? <b key={i}>{part}</b> : part)}</span>;
    };

    const displayedCourses = query ? results : courses;

    return (
        <section className="courses-container">
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
            {coursesLoading ? (
                <div className="loading">Loading courses...</div>
            ) : coursesError ? (
                <div className="error">{coursesError}</div>
            ) : (
                <>
                    <h1 className="courses-title">Courses</h1>
                    <ul className="courses-list">
                        {displayedCourses.map(course => (
                            <li key={course.id}
                                className="course-item"
                                onClick={() => handleCourseClick(course.id)}
                            >
                                {query ? highlightQuery(course.name) : course.name}
                            </li>
                        ))}
                    </ul>
                    {selectedCourseId && <Resources classId={selectedCourseId} />}
                </>
            )}
        </section>
    );
};

export default Courses;
