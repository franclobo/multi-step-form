import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function StepThree() {

  const [addOns, setAddOns] = useState([]);

  const navigate = useNavigate();

  const goBack = () => {
    navigate('/2');
  };

  const goToNextStep = () => {
    const selection = JSON.parse(localStorage.getItem('selection'));
    const selectedAddOns = addOns.map((addOn) => ({
      name: addOn,
      price: getAddOnPrice(addOn, selection.cycle),
    }));

    selection.addOns = selectedAddOns;

    localStorage.setItem('selection', JSON.stringify(selection));

    navigate('/4');
  };


  const handleAddOns = (event) => {
    const addOn = event.target.value;
    const addOnsCopy = [...addOns];

    if (addOnsCopy.includes(addOn)) {
      const index = addOnsCopy.indexOf(addOn);
      addOnsCopy.splice(index, 1);
    } else {
      addOnsCopy.push(addOn);
    }

    setAddOns(addOnsCopy);
  };

  const getAddOnPrice = (addOn, price) => {
    switch (addOn) {
      case 'Online service':
        return price === 'monthly' ? 1 : 10;
      case 'Larger storage':
        return price === 'monthly' ? 2 : 20;
      case 'Customizable Profile':
        return price === 'monthly' ? 2 : 20;
      default:
        return '';
    }
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
              <input type="checkbox" id="check1" onChange={handleAddOns} value="Online service" />
              <label htmlFor="check1">
                <h2>Online service</h2>
                <p>Access to multiple games</p>
              </label>
            </div>
            <p className="add-ons__price">+$1/mo</p>
          </li>
          <li className="add-ons__item">
            <div className="check">
              <input type="checkbox" id="check2" onChange={handleAddOns} value="Larger storage" />
              <label htmlFor="check2">
                <h2>Larger storage</h2>
                <p>Extra 1TB of cloud save</p>
              </label>
            </div>
            <p className="add-ons__price">+$2/mo</p>
          </li>
          <li className="add-ons__item">
            <div className="check">
              <input type="checkbox" id="check3" onChange={handleAddOns} value="Customizable Profile" />
              <label htmlFor="check3">
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
