import React from "react";
import {NavLink} from "react-router-dom";

const QuestionBar = ({ questions }) => {
    return (
        <div className="question-bar">
            {questions.map((question, index)=> (
                <li>
                    <NavLink
                        key={question.id}
                        to={`/questions/${question.id}`}
                        activeClassName="active-link"
                        className="question-link"
                    >
                        Q{index + 1}
                    </NavLink>
                </li>
            ))}
        </div>
    )
}

export default QuestionBar