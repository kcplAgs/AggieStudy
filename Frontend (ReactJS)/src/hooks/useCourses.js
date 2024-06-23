import { useState, useEffect } from 'react';
import { getCourses } from '../api/courseService';

const useCourses = () => {

    // state variables, store the courses, loading status and error messages
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    //fetch courses from the api
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                // attempt to fetch courses using getcourses function
                const response = await getCourses();
                setCourses(response.data);
            }
            catch (error) {
                setError('Error fetching courses');
            }
            finally {
                setLoading(false);
            }
        };

        fetchCourses();
    }, []);

    return { courses, loading, error };
};

export default useCourses;
