import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Lines.module.css";
import signbox from "../styles/Signform.module.css";
import {  Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
/**
 * Contact.
 * Containing handleChange, handleSubmit useState for mail, and error for mail
 * setMailbox for data storage about the mail.
 * setShowForm for showing the message of successfully sending the mail.
 * setSendthanks containing the text for message.
 */
export const Contact = () => {
  const [sendMail, setMailbox] = useState({
    name: "",
    email_user: "",
    show_alternativ: "",
    descriptions: "",
  });
  const [sendThanks, setSendthanks] = useState("");
  const [showForm, setShowForm] = useState(true);

  const { name, email_user, show_alternativ, descriptions } = sendMail;

  const [errors, setErrors] = useState({});
  /**
   * handleChange function.
   * This function handle form input of user, updating the corresponding state.
   */
  const handleChange = (event) => {
    setMailbox({
      ...sendMail,
      [event.target.name]: event.target.value,
    });
  };
  /**
   * handleSubmit.
   * This function send API request POST to "sendmail/" for sending Mail.
   * shows message for user if its status 201 that email been sent. setShowForm(false) which show the text.
   * taking away all the value in the imput fields.
   * shows message of error if user dont fill in all fields.
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("sendmail/", sendMail);
      setMailbox({
        name: "",
        email_user: "",
        show_alternativ: "",
        descriptions: "",
      });

      setSendthanks(
        "Email sent! we'll get back to you in a short while! navigate back to"
      );
      setErrors("");
      setShowForm(false);
    } catch (err) {
      let errorforoption = err.response?.data;
      errorforoption.show_alternativ = "You need to pick category!";
      setErrors(err.response?.data);
    }
  };

  return (
    <div>
      <div className="container">
        <h2 className="d-flex justify-content-center mt-4">Contact us!</h2>
        <div className={styles.linediv}>
          <hr className={styles.hrline}></hr>
        </div>
      </div>
      <div className={`${signbox.secondone} mt-2`}>
        <div className={signbox.signbox}>
          {showForm ? (
            <Form className={signbox.formview} onSubmit={handleSubmit}>
              {errors.name}
              <Form.Group className="mb-3">
                <Form.Label className="d-flex justify-content-center mt-3">
                  Name
                </Form.Label>
                <Form.Control
                  name="name"
                  type="text"
                  placeholder="Name here"
                  value={name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                {errors.email_user}
                <Form.Label className="d-flex justify-content-center">
                  Email
                </Form.Label>
                <Form.Control
                  name="email_user"
                  type="text"
                  placeholder="Email here"
                  value={email_user}
                  onChange={handleChange}
                />
              </Form.Group>

              {errors.non_field_errors}
              {errors.show_alternativ}

              <Form.Select
                aria-label="Default select example"
                name="show_alternativ"
                value={show_alternativ}
                onChange={handleChange}
              >
                <option value="option">Choose one category</option>
                <option value="books">Books</option>
                <option value="jobs">Jobs</option>
                <option value="reviews">Reviews</option>
                <option value="other">Other</option>
              </Form.Select>
              {errors.descriptions}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Whats on your mind?</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="descriptions"
                  type="text"
                  placeholder="descriptions"
                  value={descriptions}
                  onChange={handleChange}
                />
              </Form.Group>

              <Button variant="outline-secondary" type="submit">
                Send mail!
              </Button>
              <p className={signbox.textmargin}>
                Go to back to{" "}
                <Link className={signbox.linktoacc} to="/">
                  <strong>Homepage</strong>
                </Link>
              </p>
            </Form>
          ) : (
            <>
              <h1 className={styles.goodemail}>
                {sendThanks}
                <Link to="/" className={styles.homepagebutton}>
                  <strong> Homepage!</strong>
                </Link>
              </h1>
            </>
          )}
        </div>
      </div>
      <div className={`${styles.linediv} mt-3`}>
        <hr className={styles.hrline}></hr>
      </div>
    </div>
  );
};
