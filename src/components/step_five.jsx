import React from 'react';
import CheckMark from '../assets/images/icon-checkmark.svg';
import ThankYou from '../assets/images/icon-thank-you.svg';
import Footer from './footer';

function StepFive() {

  setTimeout(() => {
    window.location.href = '/';
  }, 10000);

  return (
    <>
      <section className="tks">
        <div className="content">
          <div className="header">
            <img src={CheckMark} alt="Check Mark" className="check__icon" />
            <img src={ThankYou} alt="Thank You" className="tks__icon" />
          </div>
          <h2 className="check__title">Thank you!</h2>
          <p className="check__subtitle">
            Thanks for confirming your subscription! We hope you have fun using
            our platform. If you ever need support, please feel free to contact
            us at support@emgaming.com.
          </p>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default StepFive;
