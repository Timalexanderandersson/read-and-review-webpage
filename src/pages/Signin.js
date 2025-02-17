import React, { useContext, useState } from "react";
import styles from "../styles/Lines.module.css";
import signbox from "../styles/Signform.module.css";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SetCurrentUserInfo } from "../users/userInformation";
/**
 * Signin.
 * Containing sign in function for user.
 * setUpUser for data storage about user.
 * Manage the form input.
 * Navigation for user.
 */
export const Signin = () => {
  const setUpUser = useContext(SetCurrentUserInfo);

  const [signInForm, setsigninForm] = useState({
    username: "",
    password: "",
  });

  const { username, password } = signInForm;

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  /**
   * handleChange function.
   * This function handle form input of user, updating the corresponding state.
   */
  const handleChange = (event) => {
    setsigninForm({
      ...signInForm,
      [event.target.name]: event.target.value,
    });
  };  
  /**
   * handleSubmit.
   * This function send API request POST to "/dj-rest-auth/login/" for login.
   * setUpUser storing the user.
   * If user gets access to account, user get navigated to explore new page.
   * localStorage save the user and keep them logged in to webpage.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInForm);
      setUpUser(data.user);
      localStorage.setItem("currentUser", JSON.stringify(data));
      navigate("/explore-new");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

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
          <Form className={signbox.formview} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
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
            <Form.Group className="mb-3">
              <Form.Label className="d-flex justify-content-center">
                Password
              </Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password}
            {errors.non_field_errors}
            <Button variant="outline-secondary" type="submit">
              Sign in
            </Button>
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
  );
};
