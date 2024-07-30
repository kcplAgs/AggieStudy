import {useState, useEffect} from "react";
import {getQuestionById} from "../api/mcQuestionService";

const useQuestion = (questionId) => {

    const [question, setQuestion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [examId, setExamId] = useState(null);


    useEffect(() => {
        const fetchQuestion = async () => {

            if(!questionId) return;

            try{
                const response = await getQuestionById(questionId);
                setQuestion(response.data);
                setExamId(response.data.exam_id);
            }
            catch(error){
                setError('Error fetching question');
            }
            finally{
                setLoading(false);
            }
        };

        fetchQuestion();
    }, [questionId]);
    return {question, loading, error, examId};
};

export default useQuestion;