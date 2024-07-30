import React from "react";
import useLinks from "../hooks/useExams";
import { useParams } from "react-router-dom";
import LinkList from "../components/Resources/LinkList";


const Links = ({}) => {

    const { classId } = useParams();

    const { links, loading, error } = useLinks(classId);


    if(loading) return ( <div className="loading">Loading resources...</div>)
    
    if(error) return ( <div className="error">Error loading resources: {error}</div>)

    return (
        <div className="exam-list">
            <h2>Resources for class {classId}:</h2>
            <LinkList
                links={links}
            />
        </div>
    )
}

export default Links;