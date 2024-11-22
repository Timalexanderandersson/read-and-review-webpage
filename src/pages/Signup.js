import React, { useState } from "react";
import styles from "../styles/Lines.module.css";
import signbox from "../styles/Signform.module.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Signup = () => {

  const [dataForm, setdataForm] = useState({
    username:'',
    password:'',
    password2:'',
  })
  const {username, password, password2} = setdataForm();

  const handleChange = (event) => {
    setdataForm({
      ...dataForm,
      [event.target.name]: event.target.value
    })
  }

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
              <Form.Label className="d-flex justify-content-center mt-3">
                Username
              </Form.Label>
              <Form.Control 
              name="username"
              type="email" 
              placeholder="Username"
              value={username}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label className="d-flex justify-content-center">
                Password
              </Form.Label>
              <Form.Control 
              name="password"
              type="password" 
              placeholder="Password"
              value={password} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label className="d-flex justify-content-center">
                Password again
              </Form.Label>
              <Form.Control 
              name="password2"
              type="password" 
              placeholder="Password again"
              value={password2}/>
            </Form.Group>
            <Button variant="outline-secondary">Create your account</Button>
            <p className={signbox.textmargin}>
              Already have an account?{" "}
              <Link className={signbox.linktoacc} to="/signin">
                <strong>Sign in here!</strong>
              </Link>
            </p>
          </Form>
        </div>
      </div>
      <div className={`${styles.linediv} mt-3`}>
        <hr className={styles.hrline}></hr>
      </div>
    </div>
  );
};
