import React from 'react';
import { Link } from 'react-router-dom';

function StepFour() {
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
                <Link to="/2" className="summary__item__edit">Change</Link>
              </div>
              <p className="summary__item__price">$4.99/mo</p>
            </li>
            <div className="summary__item__divider"></div>
            <li className="summary__item">
              <p className="summary__item__add-ons">Online Service</p>
              <p className="summary__item__add-ons__price">+$1/mo</p>
            </li>
            <li className="summary__item">
              <p className="summary__item__add-ons">Larger storage</p>
              <p className="summary__item__add-ons__price">+$2/mo</p>
            </li>
          </div>
          <li className="total__item">
            <h3 className="summary__item__total">Total (per month)</h3>
            <p className="summary__item__total__price">$12/mo</p>
          </li>
        </ul>
      </div>
      <div className="nav__btn">
        <button className="btn btn--primary">Go Back</button>
        <button className="btn btn--secondary">Confirm</button>
      </div>
    </section>
  )
}

export default StepFour;
