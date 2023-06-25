import React from 'react';
import Arcade from '../assets/images/icon-arcade.svg';
import Advanced from '../assets/images/icon-advanced.svg';
import Pro from '../assets/images/icon-pro.svg';

function StepTwo() {
  return (
    <section className="form">
      <div className="header">
        <h2 className='title'>Select your plan</h2>
        <p className='subtitle'>
          You ahve the option to monthly or year billing.
        </p>
      </div>
      <div className='plan'>
        <ul className='plan__list'>
          <li className='plan__item'>
            <img src={Arcade} alt='Arcade' className='plan__icon' />
            <div className='plan__content'>
              <h3 className='plan__title'>Arcade</h3>
              <p className='plan__price'>$9.99</p>
            </div>
          </li>
          <li className='plan__item'>
            <img src={Advanced} alt='Advanced' className='plan__icon' />
            <div className='plan__content'>
              <h3 className='plan__title'>Advanced</h3>
              <p className='plan__price'>$19.99</p>
            </div>
          </li>
          <li className='plan__item'>
            <img src={Pro} alt='Pro' className='plan__icon' />
            <div className='plan__content'>
              <h3 className='plan__title'>Pro</h3>
              <p className='plan__price'>$39.99</p>
            </div>
          </li>
        </ul>
      </div>
      <div className='plan__btn'>
        <button className='btn btn--primary'>Monthly</button>
        <label class="switch">
          <input type="checkbox"/>
          <span class="slider round"></span>
        </label>
        <button className='btn btn--secondary'>Yearly</button>
      </div>
      <div className='nav__btn'>
        <button className='btn btn--primary'>Go Back</button>
        <button className='btn btn--secondary'>Next Step</button>
      </div>
    </section>
  )
}

export default StepTwo;
