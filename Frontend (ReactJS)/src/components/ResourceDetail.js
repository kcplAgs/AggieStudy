import React from 'react';
import { useParams } from 'react-router-dom';
import useIndividualResource from "../hooks/useResources";

const ResourceDetail = () => {
    const { resourceId } = useParams();
    const { resource, loading, error } = useIndividualResource(resourceId);

    if (loading) {
        return <div className="loading">Loading resource...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    if (!resource) {
        return <div className="no-resource">Resource not found.</div>;
    }

    return (
        <section className="resource-detail-container">
            <h2 className="resource-title">{resource.type}</h2>
            <p className="resource-description">{resource.description}</p>
            <a href={resource.url} target="_blank" rel="noopener noreferrer">View Resource</a>
        </section>
    );
};

export default ResourceDetail;