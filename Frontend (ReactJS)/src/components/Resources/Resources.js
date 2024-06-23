import React, {useState} from 'react';
import useLinks from '../../hooks/useLinks';
import useExams from "../../hooks/useExams";
import {NavLink} from "react-router-dom";

const Resources = ({ classId }) => {
    const { links, loadingLinks, errorLinks } = useLinks(classId);
    const { exams, loadingExams, errorExams } = useExams(classId);

    if(loadingExams || loadingLinks){
        return <div className = "loading">Loading resources...</div>
    }

    if(errorLinks){
        return <div className = "error-links">{errorLinks}</div>
    }

    if(errorExams){
        return <div className = "error-exams">{errorExams}</div>
    }

    if(!links.length && !exams.length){ // && exams.length && slides.length
        return <div className="resource-list">No resources available for this class yet.</div>
    }


    return (
        <section className="resources-container">
            <h2 className="resources-title">Resources Available:</h2>
            <ul className="resources-list">
                {links.map(link => (
                    <li key={link.id} className="resource-item">
                        <NavLink to={`${link.url}`}>
                            <h1>{link.type}</h1>
                            <p>{link.description}</p>
                        </NavLink>
                    </li>
                ))}
                {exams.map(exam => (
                    <li key={exam.id} className="resource-item">
                        <NavLink to={`/exam/${exam.id}`}>
                            <h1>{exam.type}</h1>
                            <p>{exam.description}</p>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Resources;