import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './GoBackButton.css';

const GoBackButton = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoBack = () => {
        const pathParts = location.pathname.split('/').filter(Boolean);

        switch (pathParts.length) {
            case 2: // /courses
                navigate('/');
                break;
            case 3: // /courses/:classId/exams or /courses/:classId/links
                navigate('/courses');
                break;
            case 4: // /courses/:classId/exams/:examId
                navigate(`/courses/${pathParts[1]}/exams`);
                break;
            case 6: // /courses/:classId/exams/:examId/questions/:questionId
                navigate(`/courses/${pathParts[1]}/exams/${pathParts[3]}`);
                break;
            default:
                navigate(-1); // Default to browser's back behavior
        }
    };

    return (
        <button
            className="go-back-button"
            onClick={handleGoBack}
            aria-label="Go back to previous page"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="go-back-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Go Back
        </button>
    );
};

export default GoBackButton;