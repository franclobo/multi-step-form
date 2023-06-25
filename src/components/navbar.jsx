import React from 'react'

function Navbar() {
  return (
    <div className="navbar">
      <ul className="list">
        <li className="item">
          <h1 className="number">1</h1>
          <div className="line">
            <p className="step">STEP 1</p>
            <h2 className="action">YOUR INFO</h2>
          </div>
        </li>
        <li className="item">
          <h1 className="number">2</h1>
          <div className="line">
            <p className="step">STEP 2</p>
            <h2 className="action">SELECT PLAN</h2>
          </div>
        </li>
        <li className="item">
          <h1 className="number">3</h1>
          <div className="line">
            <p className="step">STEP 3</p>
            <h2 className="action">ADD - ONS</h2>
          </div>
        </li>
        <li className="item">
          <h1 className="number">4</h1>
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
