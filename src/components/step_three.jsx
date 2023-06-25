import React from 'react';

function StepThree() {
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
              <label for="check1">
                <h2>Online service</h2>
                <p>Access to multiple games</p>
              </label>
            </div>
            <p className="add-ons__price">+$1/mo</p>
          </li>
          <li className="add-ons__item">
            <div className="check">
              <input type="checkbox" id="check1" />
              <label for="check1">
                <h2>Larger storage</h2>
                <p>Extra 1TB of cloud save</p>
              </label>
            </div>
            <p className="add-ons__price">+$2/mo</p>
          </li>
          <li className="add-ons__item">
            <div className="check">
              <input type="checkbox" id="check1" />
              <label for="check1">
                <h2>Customizable Profile</h2>
                <p>Custom theme on your profile</p>
              </label>
            </div>
            <p className="add-ons__price">+$2/mo</p>
          </li>
        </ul>
      </div>
      <div className="nav__btn">
        <button className="btn btn--primary">Go Back</button>
        <button className="btn btn--secondary">Next Step</button>
      </div>
    </section>
  );
}

export default StepThree;
