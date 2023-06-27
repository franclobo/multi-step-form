import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Navbar() {

  const [step, setStep] = useState(1);
  const location = useLocation();

  useEffect(() => {
    const currentPage =
      location.pathname === "/"
        ? 1
        : parseInt(location.pathname.replace("/", ""));
    if (currentPage !== step) {
      setStep(currentPage);
    }
  }, [location.pathname, step]);

  return (
    <div className="navbar">
      <ul className="list">
        <li className="item">
          <h1 className={`number ${step === 1 ? "active" : ""}`}>1</h1>
          <div className="line">
            <p className="step">STEP 1</p>
            <h2 className="action">YOUR INFO</h2>
          </div>
        </li>
        <li className="item">
          <h1 className={`number ${step === 2 ? "active" : ""}`}>2</h1>
          <div className="line">
            <p className="step">STEP 2</p>
            <h2 className="action">SELECT PLAN</h2>
          </div>
        </li>
        <li className="item">
          <h1 className={`number ${step === 3 ? "active" : ""}`}>3</h1>
          <div className="line">
            <p className="step">STEP 3</p>
            <h2 className="action">ADD - ONS</h2>
          </div>
        </li>
        <li className="item">
          <h1 className={`number ${step === 4 || step === 5 ? "active" : ""}`}>4</h1>
          <div className="line">
            <p className="step">STEP 4</p>
            <h2 className="action">SUMMARY</h2>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Navbar
