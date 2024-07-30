import React from "react";
import CourseItem from "./CourseItem";
import './CourseList.css'

const CourseList = ({ courses, query, selectedCourseId, handleCourseClick }) => {
    if(courses.length === 0){
        return <div className="error">No courses to display.</div>
    }

    return (
        <ul className="courses-list">
            {courses.map(course => (
                <CourseItem
                    key={course.id}
                    course={course}
                    query={query}
                    isSelected={selectedCourseId === course.id}
                    onClick={() => handleCourseClick(course.id)}
                />
            ))}
        </ul>
    )
}

export default CourseList;