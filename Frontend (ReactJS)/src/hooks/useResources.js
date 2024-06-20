import { useState, useEffect } from 'react';
import {getResourceByClassId, getResources, getResourcesByClassId} from '../api/resourceService';

const useResources = (classId) => {

    // state variables, store the courses, loading status and error messages
    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    //fetch courses from the api
    useEffect(() => {

        if (!classId) return;

        const fetchResources = async () => {
            try {
                // attempt to fetch courses using getResources function
                const response = await getResourcesByClassId(classId);
                setResources(response.data);

            }

            catch (error) {
                setError('Error fetching resources');
            }
            finally {
                setLoading(false);
            }
        };

        fetchResources();
    }, [classId]);

    return { resources, loading, error };
};

export default useResources;
