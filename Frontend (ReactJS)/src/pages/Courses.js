import React from 'react';
import useCourses from "../hooks/useCourses";

const Courses = () => {

    const { courses, loading, error } = useCourses();

    if(loading){
        return <p>Loading courses...</p>;
    }
    if(error){
        return <p>{error}</p>
    }

    return (
        <div>
            <h1>Courses</h1>
            <ul>
                {courses.map(course => (
                    <li key = {course.id}>{course.name}</li>
                ))}
            </ul>
        </div>


    );

};

export default Courses;