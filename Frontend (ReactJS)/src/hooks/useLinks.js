import { useState, useEffect } from 'react';
import {getLinksByClassId} from '../api/linkService';

const useLinks = (classId) => {

    // state variables, store the courses, loading status and error messages
    const [links, setLinks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    //fetch links from the api
    useEffect(() => {

        if (!classId) return;

        const fetchLinks = async () => {
            try {
                // attempt to fetch courses using getResources function
                const response = await getLinksByClassId(classId);
                setLinks(response.data);

            }

            catch (error) {
                setError('Error fetching links');
            }
            finally {
                setLoading(false);
            }
        };

        fetchLinks();
    }, [classId]);

    return { links, loading, error };
};

export default useLinks;
