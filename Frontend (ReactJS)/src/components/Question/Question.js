import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useQuestion from "../../hooks/useQuestion";
import useQuestions from "../../hooks/useQuestions";
import QuestionBar from "./QuestionBar";
import GoBackButton from "../Utils/GoBackButton";
import parseAndRenderMath from "../Utils/MathParser";
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
        if(question.openEnded){
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
            <div className="question-text">
                {parseAndRenderMath(question.question)}
            </div>

            {question.openEnded ? (
                //todo: split open ended/mcq their own components
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
                            {parseAndRenderMath(answer.answerText)}
                        </button>
                    ))}
                </div>
            )}
            <button onClick={handleSubmit} className="submit-button" disabled={(selectedAnswer === null && openAnswer === "") || submitted}>
                Submit
            </button>

            {(submitted && !question.openEnded) && (
                <div 
                    onClick={() => {
                        setSubmitted(false);
                        setSelectedAnswer(null);
                    }} 
                    className={`result ${isCorrect ? 'correct' : 'incorrect'}`}>
                    {isCorrect ? 'Correct! Try again!' : 'Incorrect. Try again!'}
                </div>
            )}

            {(submitted && question.openEnded) && (
                question.answers.map(answer => (
                    <div className="open-question-answer">{parseAndRenderMath(answer.answerText)}</div>
                ))
            )}
            <QuestionBar currentQuestion={questionId} questions={questions} examId={examId}/>
            <GoBackButton/>
        </section>
    );
};

export default Question;