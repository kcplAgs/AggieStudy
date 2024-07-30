import React from "react";

const SubmitButton = ({ handleSubmit, disabled }) => {
    return (
        <button onClick={handleSubmit} className="submit-button" disabled={disabled}>
            Submit
        </button>
    );
};

export default SubmitButton;