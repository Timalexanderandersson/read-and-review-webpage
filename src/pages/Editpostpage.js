import React, { useContext, useEffect, useState } from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import styles from "../styles/Creatingpost.module.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import created from "../styles/editpost.module.css";

const Editpostpage = () => {
  const [usepics, setPictures] = useState();
  const navigaton = useNavigate();
  const { id } = useParams();

  // delete post/with id.
  const handeldeletepost = async () => {
    try {
      await axios.delete(`/post/${id}`);
      navigaton("/");
    } catch (error) {}
  };
  // collecting posts
  const [posts, setupPost] = useState({
    title: "",
    description: "",
    image_post: "",
  });
  const { title, description, image_post } = posts;

  const handleChange = (event) => {
    setupPost({
      ...posts,
      [event.target.name]: event.target.value,
    });
  };
  // handle function for the post edit submit.
  const handlePostsubmit = async (event) => {
    event.preventDefault();
    const newData = new FormData();

    newData.append("title", title);
    newData.append("description", description);
    newData.append("image_post", image_post);

    try {
      await axios.put(`/post/${id}`, newData);
      navigaton("/explore-new");
    } catch (error) {}
  };
  // give the user a preview
  const handelingPicture = (event) => {
    const pictures = event.target.files[0];
    const collectingpic = URL.createObjectURL(pictures);
    setPictures(collectingpic);
    setupPost({
      ...posts,
      image_post: pictures,
    });
  };

  useEffect(() => {
    // getting the post id for edit
    const gettingidpost = async () => {
      try {
        const { data } = await axios.get(`/post/${id}`);
        setupPost({
          title: data.title,
          description: data.description,
          image_post: data.image_post,
        });
        setPictures(data.image_post);
      } catch (error) {}
    };
    gettingidpost();
  }, [id]);

  return (
    <div>
      <div className={styles.site}>
        <div className={styles.bigdiv}>
          <Form onSubmit={handlePostsubmit}>
            <h3 className="text-center mt-2">Change title</h3>
            <Form.Group className="mb-3">
              <Form.Control
                type="title"
                name="title"
                value={title}
                onChange={handleChange}
              />
            </Form.Group>
            <h4 className="text-center mt-2">Description</h4>
            <FloatingLabel>
              <Form.Control
                as="textarea"
                type="description"
                name="description"
                value={description}
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
                Save post
              </Button>
              <Button
                className={created.deletbutton}
                variant="danger"
                type="delete"
                onClick={handeldeletepost}
              >
                Delete post
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Editpostpage;
