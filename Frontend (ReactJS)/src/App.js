import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Navbar from './components/Navbar';
import About from "./pages/About";
import Resources from "./pages/Resources";
import ResourceDetail from "./components/ResourceDetail"

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/about" element={<About/>}/>
                <Route path="/resources/:classId" component={Resources}></Route>
                <Route path="/resources/:resources" component={ResourceDetail}></Route>
            </Routes>
        </Router>
    );
};

export default App;
