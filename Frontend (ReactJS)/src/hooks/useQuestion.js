import {useState, useEffect} from "react";
import {getQuestionById} from "../api/questionService";

const useQuestion = (questionId) => {

    const [question, setQuestion] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchQuestion = async () => {

            if(!questionId) return;

            try{
                const response = await getQuestionById(questionId);
                setQuestion(response);
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
    return {question, loading, error};
};

export default useQuestion;