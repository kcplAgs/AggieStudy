import React, {useState} from 'react';
import useCourses from "../hooks/useCourses";
import './Courses.css';
import Resources from "./Resources";

const Courses = () => {
    const { courses, loading, error } = useCourses();
    const [selectedCourseId, setSelectedCourseId] = useState(null);

    if (loading) {
        return <div className="loading">Loading courses...</div>;
    }
    if (error) {
        return <div className="error">{error}</div>;
    }

    const handleCourseClick = (courseId) => {
        setSelectedCourseId(courseId);
    }

    return (
        <section className="courses-container">
            <h1 className="courses-title">Courses</h1>
            <ul className="courses-list">
                {courses.map(course => (
                    <li key={course.id}
                        className="course-item"
                        onClick = {() => handleCourseClick(course.id)}
                    >
                        {course.name}
                    </li>
                ))}
            </ul>
            {selectedCourseId && <Resources classId = {selectedCourseId} />}
        </section>
    );
};

export default Courses;
