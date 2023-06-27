import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function StepFour() {
  const selection = JSON.parse(localStorage.getItem('selection'));
  const addOns = selection.addOns;

  return (
    <section className="form">
      <div className="header">
        <h2 className="title">Finishing up</h2>
        <p className="subtitle">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="summary">
        <ul className="summary__list">
          <div className="summary__items">
            <li className="summary__item">
              <div className="summary__item__info">
                <h3 className="summary__item__title">Arcade (Monthly)</h3>
                <Link to="/2" className="summary__item__edit">
                  Change
                </Link>
              </div>
              <p className="summary__item__price">$4.99/mo</p>
            </li>
            <div className="summary__item__divider"></div>
            {addOns.map((addOn) => (
              <li className="summary__item" key={addOn.id}>
                <p className="summary__item__add-ons">Online Service</p>
                <p className="summary__item__add-ons__price">
                  {addOn.price}/mo
                </p>
              </li>
            ))}
          </div>
          <li className="total__item">
            <h3 className="summary__item__total">Total (per month)</h3>
            <p className="summary__item__total__price">$12/mo</p>
          </li>
        </ul>
      </div>
      <div className="nav__btn">
        <Button variant="light" className="btn btn--prev">
          Go Back
        </Button>
        <Button variant="primary" className="btn btn--next">
          Confirm
        </Button>
      </div>
    </section>
  );
}

export default StepFour;
