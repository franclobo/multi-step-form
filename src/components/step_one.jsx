import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';

function StepOne() {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/2');
  };

  return (
    <>
      <section className="form">
        <div className="content">
          <div className="header">
            <h1 className="title">Personal Info</h1>
            <p className="subtitle">
              Please provide your, name email address, and phone number.
            </p>
          </div>
          <Form className="form_content" onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your name" required />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="e.g. +123 456 7890"
                required
              />
            </Form.Group>
          </Form>
        </div>
        <div className="form_footer">
          <Button
            variant="primary"
            type="submit"
            className="next_step"
            onClick={handleSubmit}
          >
            Next Step
          </Button>
          <Footer />
        </div>
      </section>
    </>
  );
}

export default StepOne;
