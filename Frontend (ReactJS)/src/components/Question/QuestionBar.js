import React from "react";
import { NavLink, useParams } from "react-router-dom";
import './QuestionBar.css';

const QuestionBar = ({ currentQuestion, questions, examId }) => {
    const { classId } = useParams();
    
    return (
        <div className="question-bar">
            {questions.map((question, index) => (
                <NavLink
                    key={question.id}
                    to={`/courses/${classId}/exams/${examId}/questions/${question.id}`}
                    className={question.id === currentQuestion ? "question-link-active" : "question-link"}
                >
                    Q{index + 1}
                </NavLink>
            ))}
        </div>
    );
};

export default QuestionBar;