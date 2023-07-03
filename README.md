# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

| Desktop version | Mobile version |
|---|---|
| ![imagen](https://github.com/franclobo/multi-step-form/assets/58642949/801d6143-deba-48ab-8254-123868da274d) | ![imagen](https://github.com/franclobo/multi-step-form/assets/58642949/53d6d451-861d-416d-8211-ee76c01a71b9) |
| ![imagen](https://github.com/franclobo/multi-step-form/assets/58642949/8148e9ca-17da-44dd-a470-9f1834f2d99e) | ![imagen](https://github.com/franclobo/multi-step-form/assets/58642949/74acde3d-96f4-478b-9cb8-085a65faa2ef) |
| ![imagen](https://github.com/franclobo/multi-step-form/assets/58642949/cb91fc63-6b04-4bc5-a9e5-0a1e771c929b) | ![imagen](https://github.com/franclobo/multi-step-form/assets/58642949/ce417022-dea7-4704-9175-3ce1aa5e37d7) |
| ![imagen](https://github.com/franclobo/multi-step-form/assets/58642949/11a92765-12a9-4934-a2a3-8d068aaf846c) | ![imagen](https://github.com/franclobo/multi-step-form/assets/58642949/ee824790-a000-4cdf-b5ff-d23ca16a7f3a) |
| ![imagen](https://github.com/franclobo/multi-step-form/assets/58642949/1bb0dbab-a26e-401a-9fc2-640dd40e2f87) | ![imagen](https://github.com/franclobo/multi-step-form/assets/58642949/a0aa6afe-8fc1-45f5-af54-89d94c4b3f2b) |
 






### Links

- Solution URL: [Multi Step Form](https://your-solution-url.com)
- Live Site URL: [Multi Step Form](https://github.com/franclobo/multi-step-form)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [React Bootstrap](https://react-bootstrap.netlify.app/) - CSS framework


### What I learned

I learn how to use some Ract Hooks like useNavigate, to navigate between pages, and useLocation, to get the current location. Also, I learn how to use the useState hook to manage the state of the form and the useEffect hook to update the state of the form when the user changes the location.

```js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Navbar() {

  const [step, setStep] = useState(1);
  const location = useLocation();

  useEffect(() => {
    const currentPage =
      location.pathname === "/"
        ? 1
        : parseInt(location.pathname.replace("/", ""));
    if (currentPage !== step) {
      setStep(currentPage);
    }
  }, [location.pathname, step]);

  return (
    <div className="navbar">
      <ul className="list">
        <li className="item">
          <h1 className={`number ${step === 1 ? "active" : ""}`}>1</h1>
          <div className="line">
            <p className="step">STEP 1</p>
            <h2 className="action">YOUR INFO</h2>
          </div>
        </li>
        <li className="item">
          <h1 className={`number ${step === 2 ? "active" : ""}`}>2</h1>
          <div className="line">
            <p className="step">STEP 2</p>
            <h2 className="action">SELECT PLAN</h2>
          </div>
        </li>
        <li className="item">
          <h1 className={`number ${step === 3 ? "active" : ""}`}>3</h1>
          <div className="line">
            <p className="step">STEP 3</p>
            <h2 className="action">ADD - ONS</h2>
          </div>
        </li>
        <li className="item">
          <h1 className={`number ${step === 4 || step === 5 ? "active" : ""}`}>4</h1>
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
```

### Continued development

I want to fix some calculation bugs with the add-ons and the summary page. Also, I want to add some animations to the form.

### Useful resources

- [React hooks](https://react.dev/reference/react) - This helped me to understand how to use the hooks in React and figure out how to use them in my project.

## Author

- Website - [Portfolio](https://borja-lobato-francisco-potfolio.netlify.app/)
- Frontend Mentor - [@franclobo](https://www.frontendmentor.io/profile/franclobo)
- Twitter - [@Pancho2788](https://twitter.com/Pancho2788)

## Acknowledgments

I want to acknowledge to Frontend Mentor team. I'm really grateful for the opportunity to learn and improve my skills. I'm looking forward to the next challenge.
