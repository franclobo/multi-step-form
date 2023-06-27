import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Arcade from '../assets/images/icon-arcade.svg';
import Advanced from '../assets/images/icon-advanced.svg';
import Pro from '../assets/images/icon-pro.svg';

function StepTwo() {

  const [selectedPlan, setSelectedPlan] = useState('Arcade');
  const [selectedBilling, setSelectedBilling] = useState('Monthly');

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleBillingSelect = (event) => {
    const cycle = event.target.checked ? 'Yearly' : 'Monthly';
    setSelectedBilling(cycle);
  };

  const navigate = useNavigate();

  const goToNextStep = () => {
    const selectedPrice =
      selectedBilling === "Monthly"
        ? getPrice(selectedPlan, "monthly")
        : getPrice(selectedPlan, "yearly");
    const selectedCycle = selectedBilling === "Monthly" ? "Monthly" : "Yearly";

    const selection = {
      plan: selectedPlan,
      price: selectedPrice,
      cycle: selectedCycle,
    };

    // Guardar la selección en localStorage
    localStorage.setItem("selection", JSON.stringify(selection));

    navigate("/3");
  };


  const goToPreviousStep = () => {
    navigate('/');
  };

  const getPrice = (plan, cycle) => {
    switch (plan) {
      case "Arcade":
        return cycle === "monthly" ? "$4.99" : "$49.99";
      case "Advanced":
        return cycle === "monthly" ? "$9.99" : "$99.99";
      case "Pro":
        return cycle === "monthly" ? "$19.99" : "$199.99";
      default:
        return "";
    }
  };

  return (
    <section className="form">
      <div className="header">
        <h2 className="title">Select your plan</h2>
        <p className="subtitle">
          You ahve the option to monthly or year billing.
        </p>
      </div>
      <div className="plan">
        <ul className="plan__list">
          <li
            className={`plan__item ${
              selectedPlan === "Arcade" ? "selected" : ""
            }`}
            onClick={() => handlePlanSelect("Arcade")}
          >
            <img src={Arcade} alt="Arcade" className="plan__icon" />
            <div className="plan__content">
              <h3 className="plan__title">Arcade</h3>
              {selectedBilling === "Monthly" ? (
                <p className="plan__price monthly">$4.99</p>
              ) : (
                <p className="plan__price yearly">$49.99</p>
              )}
            </div>
          </li>
          <li
            className={`plan__item ${
              selectedPlan === "Advanced" ? "selected" : ""
            }`}
            onClick={() => handlePlanSelect("Advanced")}
          >
            <img src={Advanced} alt="Advanced" className="plan__icon" />
            <div className="plan__content">
              <h3 className="plan__title">Advanced</h3>
              {selectedBilling === "Monthly" ? (
                <p className="plan__price monthly">$9.99</p>
              ) : (
                <p className="plan__price yearly">$99.99</p>
              )}
            </div>
          </li>
          <li
            className={`plan__item ${selectedPlan === "Pro" ? "selected" : ""}`}
            onClick={() => handlePlanSelect("Pro")}
          >
            <img src={Pro} alt="Pro" className="plan__icon" />
            <div className="plan__content">
              <h3 className="plan__title">Pro</h3>
              {selectedBilling === "Monthly" ? (
                <p className="plan__price monthly">$19.99</p>
              ) : (
                <p className="plan__price yearly">$199.99</p>
              )}
            </div>
          </li>
        </ul>
      </div>
      <div className="plan__btn">
        <button
          className={`btn btn--primary ${
            selectedBilling === "Monthly" ? "selected" : ""
          }`}
          onClick={() => setSelectedBilling("Monthly")}
        >
          Monthly
        </button>
        <label className="switch">
          <input type="checkbox" onChange={handleBillingSelect} />
          <span
            className={`slider round ${
              selectedBilling === "Yearly" ? "Monthly" : ""
            }`}
          ></span>
        </label>
        <button
          className={`btn btn--primary ${
            selectedBilling === "Yearly" ? "selected" : ""
          }`}
          onClick={() => setSelectedBilling("Yearly")}
        >
          Yearly
        </button>
      </div>
      <div className="nav__btn">
        <Button variant="light" className="btn btn--prev" onClick={goToPreviousStep}>
          Go Back
        </Button>
        <Button variant="primary" className="btn btn--next" onClick={goToNextStep}>
          Next Step
        </Button>
      </div>
    </section>
  );
}

export default StepTwo;
