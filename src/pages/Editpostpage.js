import React, { useContext, useEffect, useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
import styles from "../styles/Creatingpost.module.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import created from "../styles/editpost.module.css";
/**
 * Editpostpage for edit the post.
 * This is for editing an already made post.
 * User can change title, description, and upload new image_post.
 * User can choose the option to delete the post.
 * Modal for delete post. if user want to delete post they get 2 chances.
 */
const Editpostpage = () => {
  const [usepics, setPictures] = useState();
  const navigaton = useNavigate();
  const { id } = useParams();

  const [show, setShowing] = useState(false);

  const handleClosing = () => setShowing(false);
  const handleShowing = () => setShowing(true);

  /**
   * handeldeletepost function for delete the post.
   * Function send a API request to Delete the post.
   * If successfully deleted, user will get redirected to Homepage.
   */
  const handeldeletepost = async () => {
    try {
      await axios.delete(`/post/${id}`);
      navigaton("/");
    } catch (error) {}
  };
  /**
   * Holding the information about current posts.
   */
  const [posts, setupPost] = useState({
    title: "",
    description: "",
    image_post: "",
  });
  const { title, description, image_post } = posts;
  /**
   * handleChange function.
   * This function handle form input of user, updating the corresponding state.
   */
  const handleChange = (event) => {
    setupPost({
      ...posts,
      [event.target.name]: event.target.value,
    });
  };

  /**
   * handelingPicture function for showing the picture.
   * It generates a preview for the user to see the picture on the website.
   * Showing the current picture on the post.
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
  /**
   * handlePostsubmit function for submit.
   * This handles the current data of the post. title, description, image_post.
   * API request PUT to change the updated input made by user.
   */
  const handlePostsubmit = async (event) => {
    event.preventDefault();
    const newData = new FormData();

    newData.append("title", title);
    newData.append("description", description);
    if (image_post?.name) {
      newData.append("image_post", image_post);
    }

    try {
      await axios.put(`/post/${id}`, newData);
      navigaton("/explore-new");
    } catch (error) {}
  };

  /**
   * useEffect for getting the id post.
   * Making an API request to get the /post/${id}, to get the wanted post.
   * Collecting data for title, description, image_post.
   */
  useEffect(() => {
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
                variant="danger"
                className={styles.deletebutton}
                onClick={handleShowing}
              >
                Delete
              </Button>
              <Modal show={show} onHide={handleClosing}>
                <Modal.Header closeButton>
                  <Modal.Title>Delete post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Are you sure you want to delete the post?
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="outline-secondary" onClick={handleClosing}>
                    Close
                  </Button>
                  <Button
                    className={created.deletbutton}
                    variant="danger"
                    type="delete"
                    onClick={handeldeletepost}
                  >
                    Delete post
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Editpostpage;
