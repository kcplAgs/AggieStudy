import React from 'react';
import './Exam.css';
import useQuestions from "../hooks/useQuestions";
import { useParams } from "react-router-dom";
import QuestionBar from "../components/Question/QuestionBar";
import GoBackButton from "../components/Utils/GoBackButton";

const Exam = () => {


    const { examId } = useParams();
    const { questions, loading, error } = useQuestions(examId);

    if (loading) {
        return <div className="loading">
            <div className="loading-spinner"></div>
            <p>Loading questions...</p>
        </div>;
    }

    if (error) {
        return <div className="error">
            <p>Error: {error}</p>
            <button onClick={() => window.location.reload()} className="retry-button">
                Retry
            </button>
        </div>;
    }

    if (!questions || !questions.length) {
        return <div className="no-questions">
            <p>No questions found for this exam.</p>
            <GoBackButton/>
        </div>;
    }

    return (
        <div>
            <section className="exam-container">
                <h1 className="exam-title">Exam Review</h1>
                <p className="exam-description">
                    Select a question below to begin your review. Good luck!
                </p>
                <QuestionBar
                    questions={questions}
                    examId={examId}
                />
                <GoBackButton/>
            </section>
        </div>

    );
};

export default Exam;