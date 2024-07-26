import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useQuestion from "../../hooks/useQuestion";
import useQuestions from "../../hooks/useQuestions";
import QuestionBar from "./QuestionBar";
import GoBackButton from "../Other/GoBackButton";
import './Question.css';

const Question = () => {
    const { questionId } = useParams();
    const { question, loading, error, examId } = useQuestion(questionId);
    const { questions } = useQuestions(examId);


    const [openAnswer, setOpenAnswer] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        setSelectedAnswer(null);
        setOpenAnswer("");
        setSubmitted(false);
    }, [questionId]);

    const handleSubmit = () => {
        if(question.isOpenEnded){
            if(openAnswer === "") return;
        }
        else{
            if (selectedAnswer === null) return;
        }
        setSubmitted(true);
    };

    const isCorrect = selectedAnswer?.correct;

    if (loading) {
        return <div className="question-loading">Loading question...</div>;
    }

    if (error) {
        return <div className="question-error">{error}</div>;
    }

    if (!question) {
        return <div className="question-not-found">Question not found. You probably have the wrong question ID!</div>;
    }

    return (
        <section className="question-container">
            <h1 className="question-title">Question</h1>
            <div className="question-text">{question.question}</div>

            {question.openEnded ? (
                <div className="open-answer">
                    <textarea
                        value={openAnswer}
                        onChange={(e) => setOpenAnswer(e.target.value)}
                        disabled={submitted}
                        placeholder="Type your answer here..."
                    />
                </div>

            ): (

                <div className="answer-list">
                    {question.answers.map(answer => (
                        <button
                            key={answer.id}
                            className={`answer-item 
                                ${selectedAnswer?.id === answer.id ? 'selected' : ''} 
                                ${submitted && answer.correct ? 'correct' : ''} 
                                ${submitted && selectedAnswer?.id === answer.id && !answer.correct ? 'incorrect' : ''}`}
                            onClick={() => !submitted && setSelectedAnswer(answer)}
                            disabled={submitted}
                        >
                            {answer.answerText}
                        </button>
                    ))}
                </div>
            )}
            <button onClick={handleSubmit} className="submit-button" disabled={selectedAnswer === null || submitted}>
                Submit
            </button>
            {submitted && (
                <div onClick={() => window.location.reload()} className={`result ${isCorrect ? 'correct' : 'incorrect'}`}>
                    {isCorrect ? 'Correct! Try again!' : 'Incorrect. Try again!'}
                </div>
            )}
            <QuestionBar currentQuestion={questionId} questions={questions} examId={examId}/>
            <GoBackButton/>
        </section>
    );
};

export default Question;