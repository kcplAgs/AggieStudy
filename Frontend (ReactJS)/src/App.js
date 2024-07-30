import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Courses from './pages/Courses';
import Navbar from './components/Navbar/Navbar';
import About from "./components/About/About";
import Exam from "./components/Exam/Exam";
import Question from "./pages/Question"
import MathJaxWrapper from './components/Utils/KaTeXWrapper';
import KaTeXWrapper from './components/Utils/KaTeXWrapper';

const App = () => {
    return (
        <KaTeXWrapper>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/about" element={<About/>}/>
                    <Route path="/courses/:examId" element={<Exam/>}></Route>
                    <Route path="/courses/:examId/questions/:questionId" element={<Question/>}></Route>
                </Routes>
            </Router>
        </KaTeXWrapper>
    );
};

export default App;
