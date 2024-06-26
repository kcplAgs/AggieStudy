import {useNavigate} from "react-router-dom";
import React from "react";
import './GoBackButton.css'

const GoBackButton = () => {
    const navigate = useNavigate();
    return (
        <button className="go-back-button" onClick={() => navigate(-1)}>
            Go Back
        </button>
    );
};

export default GoBackButton;