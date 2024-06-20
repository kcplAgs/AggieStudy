import React from 'react';
import useResources from '../hooks/useResources';

const Resources = ({ classId }) => {
    const { resources, loading, error } = useResources(classId);

    if(loading){
        return <div className = "loading">Loading resources...</div>
    }

    if(error){
        return <div className = "error">{error}</div>
    }

    if(!resources.length){
        return <div className="resources-list">No resources available for this class yet.</div>
    }

    return (
        <section className="resources-container">
            <h2 className="resources-title">Resources Available:</h2>
            <ul className="resources-list">
                {resources.map(resource => (
                    <li key={resource.id} className="resource-item">
                        <div>{resource.type}</div>
                        <div>{resource.description}</div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Resources;