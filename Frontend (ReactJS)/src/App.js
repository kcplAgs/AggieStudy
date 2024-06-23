import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Navbar from './components/Navbar/Navbar';
import About from "./components/About/About";
import Exam from "./components/Exam/Exam";

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/about" element={<About/>}/>
                <Route path="/exam/:examId" component={Exam}></Route>
            </Routes>
        </Router>
    );
};

export default App;
