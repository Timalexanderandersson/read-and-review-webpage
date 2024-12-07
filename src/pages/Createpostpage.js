import React, { useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import styles from "../styles/Creatingpost.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Createpostpage = () => {
  const [usepics, setPictures] = useState();
  const navigaton = useNavigate();

  const [posts, setupPost] = useState({
    titel: "",
    description: "",
    image_post: "",
  });
  const { titel, description, image_post } = posts;

  const handleChange = (event) => {
    setupPost({
      ...posts,
      [event.target.name]: event.target.value,
    });
  };

  const handlePostsubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/post/", posts);
      navigaton("/explore-new");
    } catch (error) {}
  };

  const handelingPicture = (event) => {
    const pictures = event.target.files[0];
    const collectingpic = URL.createObjectURL(pictures);
    setPictures(collectingpic);
    setupPost({
      ...posts,
      image_post: pictures,
    });
  };

  return (
    <div>
      <div className={styles.site}>
        <div className={styles.bigdiv}>
          <Form onSubmit={handlePostsubmit}>
            <h3 className="text-center mt-2">Add title</h3>
            <Form.Group className="mb-3">
              <Form.Control type="title" name="title" onChange={handleChange} />
            </Form.Group>
            <h4 className="text-center mt-2">Description</h4>
            <FloatingLabel>
              <Form.Control
                as="textarea"
                type="description"
                name="description"
                onChange={handleChange}
              />
            </FloatingLabel>
            <Form.Control
              type="file"
              variant="outline-secondary"
              accept="images/*"
              name="image_post"
              onChange={handelingPicture}
            />
            {
              <div className="d-flex justify-content-center mt-2">
                <img
                  src={usepics}
                  alt={usepics}
                  className={styles.picturediv}
                />
              </div>
            }
            <div className="d-flex justify-content-center mb-3">
              <Button
                className="mr-5"
                variant="outline-secondary"
                type="submit"
              >
                Create post
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Createpostpage;
