import React from 'react'
import { Form, Button } from 'react-bootstrap'

function StepOne() {
  return (
    <section className="form">
      <div className="header">
        <h1 className="title">Personal Info</h1>
        <p className="subtitle">
          Please provide your, name email address, and phone number.
        </p>
      </div>
      <Form className="form_content">
        <Form.Group controlId="formBasicName">
          <Form.Label>Neme</Form.Label>
          <Form.Control type="text" placeholder="Your name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPhone">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="e.g. +123 456 7890" />
        </Form.Group>
        <Button variant="primary" type="submit" className="next_step">
          Next Step
        </Button>
      </Form>
    </section>
  );
}

export default StepOne
