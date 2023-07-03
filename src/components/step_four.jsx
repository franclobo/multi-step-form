import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function StepFour() {
  const selection = JSON.parse(localStorage.getItem('selection'));
  const plan = selection.plan;
  const price = selection.price;
  const cycle = selection.cycle;
  const addOnsPrices = selection.addOns.map((addOn) => addOn.price);
  const addOns = selection.addOns;

  const total = addOnsPrices.reduce((a, b) => a + b, price);

  const navigate = useNavigate();

  const goBack = () => {
    navigate('/3');
  };

  const confirmBtn = () => {
    navigate('/5');
  };

  return (
    <section className="form">
      <div className="content">
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
                  {cycle === "Monthly" ? (
                    <p className="summary__item__plan">{plan} Plan</p>
                  ) : (
                    <p className="summary__item__plan">{plan} Plan</p>
                  )}
                  <Link to="/2" className="summary__item__edit">
                    Change
                  </Link>
                </div>
                {cycle === "Monthly" ? (
                  <p className="summary__item__price">${price}/mo</p>
                ) : (
                  <p className="summary__item__price">${price}/yr</p>
                )}
              </li>
              <div className="summary__item__divider"></div>
              {addOns.map((addOn) => (
                <li className="summary__item" key={addOn.id}>
                  <p className="summary__item__add-ons">{addOn.name}</p>
                  {cycle === "Monthly" ? (
                    <p className="summary__item__price">${addOn.price}/mo</p>
                  ) : (
                    <p className="summary__item__price">${addOn.price}/yr</p>
                  )}
                </li>
              ))}
            </div>
            <li className="total__item">
              <h3 className="summary__item__total">Total ({cycle})</h3>
              <p className="summary__item__total__price">
                ${total}/{cycle === "Monthly" ? "mo" : "yr"}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav__btn">
        <Button variant="light" className="btn btn--prev" onClick={goBack}>
          Go Back
        </Button>
        <Button variant="primary" className="btn btn--next" onClick={confirmBtn}>
          Confirm
        </Button>
      </div>
    </section>
  );
}

export default StepFour;
