import React, { useEffect, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import styles from "../styles/Creatingpost.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/**
 * Createpostpage function is for creating post.
 * Handle the form input title , description, image_post.
 */
const Createpostpage = () => {
  const [usepics, setPictures] = useState();
  const navigaton = useNavigate();
  const [errors, setErrors] = useState({});

  const [posts, setupPost] = useState({
    titel: "",
    description: "",
    image_post: "",
  });
  const { titel, description, image_post } = posts;
/**
 * handleChange function.
 * This function handle form input, adding it with the users input.
 */
  const handleChange = (event) => {
    setupPost({
      ...posts,
      [event.target.name]: event.target.value,
    });

    setErrors("")
  };
/**
 * handlePostsubmit function for posting a review.
 * Making request to the API to post.
 * If successful POST of review user get navigated to the explore new page.
 */
  const handlePostsubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/post/", posts);
      navigaton("/explore-new");
    } catch (error) {

        let costumedescription = error.response?.data;
        costumedescription.description = "You have to fill in a description."
     
        let costumtitle = error.response?.data;
        costumtitle.title = "You have to give it a title."
        setErrors(costumtitle, costumedescription);

    }
  };
/**
 * handelingPicture function for picture.
 * This function shows the picture as a preview when creating the POST.
 *  
 */
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
        {errors.title}
          <Form onSubmit={handlePostsubmit}>
            <h3 className="text-center mt-2">Add title</h3>
            <Form.Group className="mb-3">
            {errors.non_field_errors}
              <Form.Control type="title" name="title" onChange={handleChange} />
            </Form.Group>
            <h4 className="text-center mt-2">Description</h4>
            {errors.description}
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
