import React from "react";
import styles from "../styles/Lines.module.css";
import signbox from "../styles/Signform.module.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <div>
      <div className="container">
        <h2 className="d-flex justify-content-center mt-4">
          Register for account
        </h2>
        <div className={styles.linediv}>
          <hr className={styles.hrline}></hr>
        </div>
      </div>
      <div className={`${signbox.secondone} mt-2`}>
      <div className={signbox.signbox}>
      <Form className={signbox.formview}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label className="d-flex justify-content-center mt-3" >Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label className="d-flex justify-content-center">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label className="d-flex justify-content-center">Password again</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="outline-secondary">Create your account</Button>
      <p className={signbox.textmargin}>Already have an account? <Link className={signbox.linktoacc} to="/signin">
      <strong>Sign in here!</strong></Link></p>
    </Form>
      </div>
      </div>
      <div className={`${styles.linediv} mt-3`}>
          <hr className={styles.hrline}></hr>
        </div>
      
    </div>
  );
};
