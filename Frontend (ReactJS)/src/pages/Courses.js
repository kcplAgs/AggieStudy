import React, { useState } from 'react';
import useCourses from "../hooks/useCourses";
import useCourseSearch from "../hooks/useCourseSearch";
import CourseList from '../components/Courses/CourseList';
import SearchBar from '../components/Courses/SearchBar';
import Footer from '../components/Footer/Footer';
import './Courses.css';

const Courses = () => {
    const { courses, loading: coursesLoading, error: coursesError } = useCourses();
    const { query, setQuery, results, loading, error } = useCourseSearch();
    const [selectedCourseId, setSelectedCourseId] = useState(null);

    const handleCourseClick = (courseId) => {
        setSelectedCourseId(prevId => prevId === courseId ? null : courseId);
    };

    const displayedCourses = query ? results : courses;
    
    if (loading || coursesLoading) {
        return <div className="loading">Loading courses...</div>;
    }

    if (error || coursesError) {
        return <div className="error">{error || coursesError}</div>;
    }

    return (
        <div className="page-container">
            <div className="content-wrap">
                <section className="courses-container">
                    <h1 className="course-search-title">Course Search</h1>
                    <SearchBar
                        query={query}
                        setQuery={setQuery}
                    />
                    <h2 className="courses-title">Available Courses</h2>
                    <CourseList
                        courses={displayedCourses}
                        query={query}
                        selectedCourseId={selectedCourseId}
                        handleCourseClick={handleCourseClick}
                    />
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Courses;