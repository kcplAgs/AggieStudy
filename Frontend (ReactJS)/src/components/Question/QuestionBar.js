import React from "react";
import { NavLink } from "react-router-dom";
import './QuestionBar.css';

const QuestionBar = ({ questions }) => {
    return (
        <div className="question-bar">
            {questions.map((question, index) => (
                <NavLink
                    key={question.id}
                    to={`/questions/${question.id}`}
                    activeClassName="active-link"
                    className="question-link"
                >
                    Q{index + 1}
                </NavLink>
            ))}
        </div>
    );
};

export default QuestionBar;
