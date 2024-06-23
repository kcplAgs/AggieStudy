import React, { useState } from 'react';
import useCourses from "../../hooks/useCourses";
import useCourseSearch from "../../hooks/useCourseSearch";
import './Courses.css';
import './CourseSearch.css';
import Resources from "../Resources/Resources";

const Courses = () => {
    const { courses, loading: coursesLoading, error: coursesError } = useCourses();
    const { query, setQuery, results, loading, error } = useCourseSearch();
    const [selectedCourseId, setSelectedCourseId] = useState(null);

    const handleCourseClick = (courseId) => {
        setSelectedCourseId(courseId);
    };

    const highlightQuery = (text) => {
        const parts = text.split(new RegExp(`(${query})`, 'gi'));
        return <span>{parts.map((part, i) => part.toLowerCase() === query.toLowerCase() ? <b key={i}>{part}</b> : part)}</span>;
    };

    const displayedCourses = query ? results : courses;

    if (loading || coursesLoading) {
        return <div className="loading">Loading classes...</div>
    }

    if (error || coursesError) {
        return <div className="error">{error || coursesError}</div>
    }

    if (!courses.length) {
        return <div className="resources-list">No courses found.</div>
    }

    return (
        <section className="courses-container">
            <h1 className="course-search-title">Course Search</h1>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for courses..."
                className="course-search-input"
                autoFocus // Ensure the input is focused
            />
            <h1 className="courses-title">Courses</h1>
            <ul className="courses-list">
                {displayedCourses.map(course => (
                    <li key={course.id}
                        className="course-item"
                        onClick={() => handleCourseClick(course.id)}
                    >
                        {highlightQuery(`${course.id} (${course.name})`)}
                    </li>
                ))}
            </ul>
            {selectedCourseId && <Resources classId={selectedCourseId} />}
        </section>
    );
};

export default Courses;