import React from "react";
import Resources from "../Resources/Resources";

const CourseItem = ({ course, query, isSelected, onClick }) => {
    
    const highlightQuery = (text) => {
        if (!query) return text;
        const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const parts = text.split(new RegExp(`(${escapedQuery})`, 'gi'));
        return <span>{parts.map((part, i) =>
            part.toLowerCase() === query.toLowerCase() ? <b key={i}>{part}</b> : part
        )}</span>;
    };

    return (
        <li>
            <div className="course-item" onClick={onClick}>
                {highlightQuery(`${course.id} (${course.name})`)}
            </div>
            <div className={`resources-dropdown ${isSelected ? 'expanded' : ''}`}>
                <Resources classId={course.id} />
            </div>
        </li>
    )

}

export default CourseItem;