import React from 'react';
import './Exam.css';
import useQuestions from "../../hooks/useQuestions";
import {useParams} from "react-router-dom";
import QuestionBar from "../Question/QuestionBar";

const Exam = () => {
    const { examId } = useParams();
    const { questions, loading, error } = useQuestions(examId);

    if (loading) {
        return <div className="loading">Loading questions...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    if (!questions || !questions.length) {
        return <div className="no-questions">No questions found.</div>;
    }

    return (
        <section className="questions-container">
            <QuestionBar questions={questions}/>
        </section>
    );
};

export default Exam;
