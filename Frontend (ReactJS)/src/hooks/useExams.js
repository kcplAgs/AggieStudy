import { useState, useEffect } from 'react';
import {getExamsByClassId} from '../api/examService';

const useExams = (classId) => {

    // state variables, store the courses, loading status and error messages
    const [exams, setExams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    //fetch courses from the api
    useEffect(() => {

        if (!classId) return;

        const fetchExams = async () => {
            try {
                // attempt to fetch courses using getResources function
                const response = await getExamsByClassId(classId);
                setExams(response.data);

            }

            catch (error) {
                setError('Error fetching exams');
            }
            finally {
                setLoading(false);
            }
        };

        fetchExams();
    }, [classId]);

    return { exams, loading, error };
};

export default useExams;
