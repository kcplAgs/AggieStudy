import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Courses from './pages/Courses';
import Home from "./pages/Home";


function App() {
  return (
      <Router>
          <div classname = "App">
              <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/courses" element={<Courses />} />
              </Routes>
          </div>
      </Router>
  );
}

export default App;
