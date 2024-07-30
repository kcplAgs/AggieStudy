import React from "react";
import {NavLink} from "react-router-dom";
import GoBackButton from "../Utils/GoBackButton";

const ExamList = ({exams}) => {
    if (!exams || exams.length === 0) {
        return <div className="error">No exams available for this course.</div>;
    }

    return (
        <ul className="exam-list">
            {exams.map(exam => (
                <li key={exam.id} className="resource-item">
                    <NavLink to={`${exam.id}`}>
                        <h1>{exam.name}</h1>
                        <p>{exam.description}</p>
                    </NavLink>
                    <GoBackButton/>
                </li>
            ))}
        </ul>

    );

}

export default ExamList;