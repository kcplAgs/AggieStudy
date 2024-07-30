import React from "react";
import ExamList from "../components/Resources/ExamList";
import useExams from "../hooks/useExams";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";


const Exams = ({}) => {

    const { classId } = useParams();

    const { exams, loading, error } = useExams(classId);

    if(loading) return ( <div className="loading">Loading exams...</div>)
    
    if(error) return ( <div className="error">Error loading exams: {error}</div>)

    return (
        <div>
            <div className="exam-list">
                <h2>Exams for class {classId}:</h2>
                <ExamList
                    exams={exams}
                />
            </div>
            <Footer/>
        </div>
    )


    
}

export default Exams;