import React from "react";
import {NavLink} from "react-router-dom";
import './ExamList.css'

const ExamList = ({exams}) => {
    if (!exams || exams.length === 0) {
        return <div className="error">No exams available for this course.</div>;
    }



    return (
        <ul className="exam-list">
            {exams.map(exam => (
                <li key={exam.id} className="exam-list-item">
                    <NavLink to={`${exam.id}`}>
                        <h1>{exam.name}</h1>
                        <p>{exam.description}</p>
                    </NavLink>
                </li>
            ))}
        </ul>

    );

}

export default ExamList;