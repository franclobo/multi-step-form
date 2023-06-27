import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function StepThree() {

  const [addOns, setAddOns] = useState([]);

  const navigate = useNavigate();

  const handleAddOnsSelect = (event) => {
    const { checked, id } = event.target;
    const selectAddOn = {
      id,
      price: checked ? calculatePrice(id) : 0,
    };

    if (checked) {
      setAddOns((prevAddOns) => [...prevAddOns, selectAddOn]);
    } else {
      setAddOns((prevAddOns) => prevAddOns.filter((addOn) => addOn.id !== selectAddOn.id));
    }
  };

  const goBack = () => {
    navigate('/2');
  };

  const goToNextStep = () => {
    const selection = {
      plan: 'Arcade',
      price: 4.99,
      addOns: addOns,
    };

    localStorage.setItem('selection', JSON.stringify(selection));

    navigate('/4');
  };

  const calculatePrice = (addOnId) => {
    if (addOnId === "check1") {
      const selectedCycle = "Monthly";
      const selectedPlan = "Arcade";

      // Obtener la selección del paso 2 del localStorage
      const selection = JSON.parse(localStorage.getItem("selection"));
      const selectedCycleFromStepTwo = selection.cycle;
      const selectedPlanFromStepTwo = selection.plan;

      if (
        selectedCycleFromStepTwo === "Monthly" &&
        selectedPlanFromStepTwo === "Arcade"
      ) {
        return "$1";
      } else if (
        selectedCycleFromStepTwo === "Yearly" &&
        selectedPlanFromStepTwo === "Arcade"
      ) {
        return "$" + 1 * 12;
      }
    }

    // Por defecto, retornar 0
    return 0;
  };


  return (
    <section className="form">
      <div className="header">
        <h2 className="title">Pick add-ons</h2>
        <p className="subtitle">
          Add-ons help enhance your gamming experience.
        </p>
      </div>
      <div className="add-ons">
        <ul className="add-ons__list">
          <li className="add-ons__item">
            <div className="check">
              <input type="checkbox" id="check1" />
              <label htmlFor="check1">
                <h2>Online service</h2>
                <p>Access to multiple games</p>
              </label>
            </div>
            <p className="add-ons__price">+$1/mo</p>
          </li>
          <li className="add-ons__item">
            <div className="check">
              <input type="checkbox" id="check1" />
              <label htmlFor="check1">
                <h2>Larger storage</h2>
                <p>Extra 1TB of cloud save</p>
              </label>
            </div>
            <p className="add-ons__price">+$2/mo</p>
          </li>
          <li className="add-ons__item">
            <div className="check">
              <input type="checkbox" id="check1" />
              <label htmlFor="check1">
                <h2>Customizable Profile</h2>
                <p>Custom theme on your profile</p>
              </label>
            </div>
            <p className="add-ons__price">+$2/mo</p>
          </li>
        </ul>
      </div>
      <div className="nav__btn">
        <Button variant="light" className="btn btn--prev" onClick={goBack}>
          Go Back
        </Button>
        <Button variant="primary" className="btn btn--next" onClick={goToNextStep}>
          Next Step
        </Button>
      </div>
    </section>
  );
}

export default StepThree;
