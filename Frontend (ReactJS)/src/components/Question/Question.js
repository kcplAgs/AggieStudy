import React, { useState } from "react";
import useQuestions from "../../hooks/useQuestions";
import { useParams } from "react-router-dom";
import useQuestion from "../../hooks/useQuestion";
import QuestionBar from "./QuestionBar";
import './Question.css';

const Question = () => {
    const { questionId } = useParams();
    const { question, loading, error } = useQuestion(questionId);
    const examId = question?.exam?.id;
    const { questions } = useQuestions(examId);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    const {questionId} = useParams();
    const {question, loading, error, examId } = useQuestion(questionId);
    const {questions} = useQuestions(examId)

    const handleSubmit = () => {
        if (selectedAnswer === null) return;
        setSubmitted(true);
    };

    const isCorrect = selectedAnswer?.correct;

    if (loading) {
        return <div className="loading">Loading question...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    if (!question) {
        return <div className="no-question">Question not found. Do you have the correct question ID?</div>;
    }

    return (
        <section className="question-container">
            <h1 className="question-title">Question {question.id}</h1>
            <div className="question-text">{question.question}</div>
            <div className="answer-list">
                {question.answers.map(answer => (
                    <div 
                        key={answer.id} 
                        className={`answer-item 
                            ${selectedAnswer?.id === answer.id ? 'selected' : ''} 
                            ${submitted && answer.correct ? 'correct' : ''} 
                            ${submitted && selectedAnswer?.id === answer.id && !answer.correct ? 'incorrect' : ''}`} 
                        onClick={() => !submitted && setSelectedAnswer(answer)}
                    >
                        {answer.answerText}
                    </div>
                ))}
            </div>
            <button onClick={handleSubmit} className="submit-button">Submit</button>
            {submitted && (
                <div className={`result ${isCorrect ? 'correct' : 'incorrect'}`}>
                    {isCorrect ? 'Correct!' : 'Incorrect!'}
                </div>
            )}
            <QuestionBar questions={questions} />
        </section>
    );
};

export default Question;
