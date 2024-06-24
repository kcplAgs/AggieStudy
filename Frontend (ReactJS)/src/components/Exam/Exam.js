import React, { useState } from 'react';
import './Exam.css';
import useQuestions from "../../hooks/useQuestions";
import { useParams } from "react-router-dom";

const Exam = () => {
    const { examId } = useParams();
    const { questions, loading, error } = useQuestions(examId);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [validationResult, setValidationResult] = useState(null);

    const handleRadioChange = (questionId, answerId) => {
        setSelectedAnswers(prevSelected => ({
            ...prevSelected,
            [questionId]: answerId
        }));
    };

    const handleSubmit = () => {
        const result = questions.map(question => {
            const selectedAnswerId = selectedAnswers[question.id];
            const selectedAnswer = question.answers.find(answer => answer.id === selectedAnswerId);
            return {
                questionId: question.id,
                isCorrect: selectedAnswer ? selectedAnswer.correct : false
            };
        });
        setValidationResult(result);
    };

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
            <h2 className="questions-header">Questions Available:</h2>
            {questions.map(question => (
                <div key={question.id} className="question">
                    <h3>{question.question}</h3>
                    <div className="answers-container">
                        <h4>Possible Answers:</h4>
                        {question.answers && question.answers.map(answer => (
                            <div key={answer.id} className="answer">
                                <label>
                                    <input
                                        type="radio"
                                        name={`question-${question.id}`}
                                        checked={selectedAnswers[question.id] === answer.id}
                                        onChange={() => handleRadioChange(question.id, answer.id)}
                                    />
                                    {answer.answerText}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

            ))}
            <button>Submit bro onClick = {handleSubmit}</button>

        </section>
    );
};

export default Exam;
