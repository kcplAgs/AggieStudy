import React from 'react';

import useQuestions from "../../hooks/useQuestions";
import {useParams} from "react-router-dom";

const Exam = () => {
    const {examId } = useParams();
    const { questions, loading, error } = useQuestions(examId);

    if (loading) {
        return <div className="loading">Loading questions...</div>
    }

    if (error) {
        return <div className="error">{error}</div>
    }

    if (!questions.length) {
        return <div className="no-questions">No questions found.</div>
    }

    return (
        <section className="questions-container">
            <h2 className="questions-list">Questions Available:</h2>
            <ul className="questions-list">
                {questions.map(question => (
                    <li key={question.id} className="question">
                        <h1>{question.type}</h1>
                        <p>{question.question}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Exam;