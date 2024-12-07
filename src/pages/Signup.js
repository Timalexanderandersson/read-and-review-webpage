import React, { useState } from "react";
import styles from "../styles/Lines.module.css";
import signbox from "../styles/Signform.module.css";
import { Alert, Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Signup = () => {
  const [dataForm, setdataForm] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = dataForm;
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setdataForm({
      ...dataForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", dataForm);
      navigate("/signin");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

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
          <Form className={signbox.formview} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" id="username">
              <Form.Label className="d-flex justify-content-center mt-3">
                Username
              </Form.Label>
              <Form.Control
                name="username"
                type="username"
                placeholder="Username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username}
            <Form.Group className="mb-3" controlId="formGroupPassword1">
              <Form.Label className="d-flex justify-content-center">
                Password
              </Form.Label>
              <Form.Control
                name="password1"
                type="password"
                placeholder="Password"
                value={password1}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password1}
            <Form.Group className="mb-3" controlId="formGroupPassword2">
              <Form.Label className="d-flex justify-content-center">
                Password again
              </Form.Label>
              <Form.Control
                name="password2"
                type="password"
                placeholder="Password again"
                value={password2}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password2}
            {errors.non_field_errors}
            <Button variant="outline-secondary" type="submit">
              Create your account
            </Button>
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
