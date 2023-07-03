import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import StepOne from './components/step_one';
import StepTwo from './components/step_two';
import StepThree from './components/step_three';
import StepFour from './components/step_four';
import StepFive from './components/step_five';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<StepOne />} />
          <Route path="/2" element={<StepTwo />} />
          <Route path="/3" element={<StepThree />} />
          <Route path="/4" element={<StepFour />} />
          <Route path="/5" element={<StepFive />} />
        </Routes>
        <div class="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.linkedin.com/in/francisco-borja-lobato/">
            Francisco J. Borja
          </a>
          .
        </div>
      </Router>
    </div>
  );
}

export default App;
