import React from 'react';
import useCourses from "../hooks/useCourses";
import './Courses.css'; // Assuming you have a CSS file for styling

const Courses = () => {
    const { courses, loading, error } = useCourses();

    if (loading) {
        return <div className="loading">Loading courses...</div>;
    }
    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <section className="courses-container">
            <h1 className="courses-title">Courses</h1>
            <ul className="courses-list">
                {courses.map(course => (
                    <li key={course.id} className="course-item">
                        {course.name}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Courses;
