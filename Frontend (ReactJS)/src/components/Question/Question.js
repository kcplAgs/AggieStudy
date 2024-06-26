import React from "react";
import useQuestions from "../../hooks/useQuestions";
import {useParams} from "react-router-dom";
import useQuestion from "../../hooks/useQuestion";
import QuestionBar from "./QuestionBar";

const Question = () => {

    const {questionId} = useParams();
    const {question, loading, error, examId } = useQuestion(questionId);

    const {questions} = useQuestions(examId)

    if(loading){
        return <div className="loading">Loading question...</div>;
    }

    if(error){
        return <div className="error">{error}</div>;
    }

    if(!question){
        return <div className="no-question">Question not found. Do you have the correct question ID?</div>;
    }

    return (
        <section>
            <h1>Question {question.id}</h1>
            <div>{question.question}</div>
            <ul>
                {question.answers.map(answer => (
                    <li key={answer.id}>
                        {answer.answerText}
                    </li>
                ))}
            </ul>
            <QuestionBar questions={questions}/>
        </section>

    );


}

export default Question;