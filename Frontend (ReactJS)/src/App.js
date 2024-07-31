import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Navbar from './components/Navbar/Navbar';
import About from "./pages/About";
import Exam from "./pages/Exam";
import Exams from "./pages/Exams"
import Question from "./pages/Question"
import KaTeXWrapper from './components/Utils/KaTeXWrapper';
import Links from './pages/Links';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <KaTeXWrapper>
            <Router>
                <Navbar />
                <div className="content-wrapper">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/about" element={<About/>}/>
                        <Route path="/courses/:classId/exams" element={<Exams/>}/>
                        <Route path="/courses/:classId/links" element={<Links/>}/>
                        <Route path="/courses/:classId/exams/:examId" element={<Exam/>}/>
                        <Route path="/courses/:classId/exams/:examId/questions/:questionId" element={<Question/>}/>
                    </Routes>
                </div>
                <Footer/>
            </Router>
        </KaTeXWrapper>
    );
};

export default App;