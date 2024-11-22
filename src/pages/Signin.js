import React from "react";
import styles from "../styles/Lines.module.css";
import signbox from "../styles/Signform.module.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Signin = () => {
  return (
    <div>
    <div className="container">
      <h2 className="d-flex justify-content-center mt-4">
        Sign in to your account
      </h2>
      <div className={styles.linediv}>
        <hr className={styles.hrline}></hr>
      </div>
    </div>
    <div className={`${signbox.secondone} mt-2`}>
      <div className={signbox.signbox}>
        <Form className={signbox.formview}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className="d-flex justify-content-center mt-3">
              Username
            </Form.Label>
            <Form.Control type="email" placeholder="Username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label className="d-flex justify-content-center">
              Password
            </Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="outline-secondary">Sign in</Button>
          <p className={signbox.textmargin}>
            No account yet?{" "}
            <Link className={signbox.linktoacc} to="/Register">
              <strong>Register here</strong>
            </Link>
          </p>
        </Form>
      </div>
    </div>
    <div className={`${styles.linediv} mt-3`}>
      <hr className={styles.hrline}></hr>
    </div>
  </div>
  )
}
