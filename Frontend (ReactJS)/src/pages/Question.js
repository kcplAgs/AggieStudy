import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useQuestion from "../hooks/useQuestion";
import useQuestions from "../hooks/useQuestions";
import QuestionBar from "../components/Question/QuestionBar";
import GoBackButton from "../components/Utils/GoBackButton";
import parseAndRenderMath from "../components/Utils/MathParser";
import './Question.css';
import SubmitButton from "../components/Question/SubmitButton";
import MCQAnswers from "../components/Question/MCQAnswers";
import ResultDisplay from "../components/Question/ResultDisplay";
import OpenEndedAnswer from "../components/Question/OpenEndedAnswer";
import Footer from "../components/Footer/Footer";

const Question = () => {
    const { courseId, examId, questionId } = useParams();
    const { question, loading, error } = useQuestion(questionId);
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
        <div>
            <section className="question-container">
                <h1 className="question-title">Question</h1>
                <div className="question-text">
                    {parseAndRenderMath(question.question)}
                </div>

                {question.openEnded ? (
                    <OpenEndedAnswer 
                        openAnswer={openAnswer} 
                        setOpenAnswer={setOpenAnswer} 
                        submitted={submitted} 
                    />

                ): (
                    <MCQAnswers
                        answers={question.answers} 
                        selectedAnswer={selectedAnswer} 
                        setSelectedAnswer={setSelectedAnswer} 
                        submitted={submitted} 
                    />
                )}

                <SubmitButton 
                    handleSubmit={handleSubmit} 
                    disabled={(question.openEnded ? openAnswer === "" : selectedAnswer === null) || submitted} 
                />

                <ResultDisplay
                    submitted={submitted} 
                    openEnded={question.openEnded}
                    isCorrect={selectedAnswer?.correct} 
                    setSubmitted={setSubmitted} 
                    setSelectedAnswer={setSelectedAnswer} 
                    answers={question.answers} 
                />
            

                <QuestionBar 
                    currentQuestion={questionId} 
                    questions={questions} 
                    examId={examId}
                    courseId={courseId}
                />
                <GoBackButton/>
            </section>
        </div>
    );
};

export default Question;