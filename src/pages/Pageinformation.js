import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Postinformation.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CurrentUserInfo } from "../users/userInformation";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import Comments from "../components/Comments";
/**
 *
 * Pageinformation displaying and containing the informations about different posts
 * and comments.
 * functions for deleting comments, posting comments.
 * and function for ordering the comments.
 */
const Pageinformation = () => {
  const [postsData, setpostsData] = useState({});
  const [comments, setcommentData] = useState([]);
  const [comment, setcomment] = useState("");
  const [erros, setErros] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const userNow = useContext(CurrentUserInfo);

  /**
   *
   * handlechange is handeling the input value from user.
   * It handles everything in the textarea when typed in.
   */
  const handlechange = (event) => {
    setcomment(event.target.value);
  };
  /**
   * handlepostingcomment is function for posting comments.
   * It handles posting on the right id.post user want to comment on.
   * Sending the Post to the API.
   * Ordering the comments in a good way.
   */
  const handlepostingcomment = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/comments/", {
        post: id,
        comment: comment,
      });
      setcommentData((prevComments) => [data, ...prevComments]);
      setcomment("");
      setErros("")
      navigate(`/post/${id}`);
    } catch (error) {
      let commerrortext = error.response?.data;
      commerrortext.comment = "Can't be empty, try again!"
      setErros(commerrortext)
    }
  };
  /**
   * useEffect for fetching data.
   * Fetching post ID data and comment ID data.
   * Getting the post `/post/${id}` ID and the comments related to that post.
   * Getting the comments `/comments/?post=${id}` ID.
   * Navigating to `/post/${id}`
   */
  useEffect(() => {
    const gettingid = async () => {
      try {
        const { data: getPost } = await axios.get(`/post/${id}`);
        const { data: commentdata } = await axios.get(`/comments/?post=${id}`);
        setpostsData(getPost);
        setcommentData(commentdata.results);
        navigate(`/post/${id}`);
      } catch (error) {

      }
    };
    gettingid();
  }, [id]);

  /**
   * This is to check if its the owner of the post.
   */
  const ownerpost = userNow?.username === postsData.username;

  return (
    <div className={styles.carry}>
      <div className={styles.container}>
        <div className={styles.bigdiv}>
          <div className={styles.bookdiv}>
            <h2>{postsData.title}</h2>
            <p>
              <strong>{postsData.username}</strong>
            </p>
            <img
              src={postsData.image_post}
              alt={postsData.image_post}
              className={styles.pictures}
            />
            <p>
              <strong>Description</strong>
            </p>
            <p className={styles.textarea}>{postsData.description}</p>
            {ownerpost && (
              <Link to={`/post/${id}/edit`} className={styles.editbutton}>
                <i
                  className="fa-regular fa-pen-to-square"
                  aria-hidden="true"
                ></i>
              </Link>
            )}
          </div>
        </div>
      </div>
      <hr className={styles.line} />
      {userNow ? (
        <Form
          className="d-flex justify-content-center"
          onSubmit={handlepostingcomment}
        >
          <FloatingLabel
            controlId="floatingTextarea"
            className={styles.textingarea}
          >
            {erros.comment}
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              name="comment"
              type="comment"
              value={comment}
              onChange={handlechange}
            />
            
          </FloatingLabel>
          <Button
            className={styles.buttonsubmit}
            variant="outline-secondary"
            type="submit"
          >
            post
          </Button>
        </Form>
        

      ) : (
        <p className="text-center mb-4">Need to be sign in to comment</p>
      )}
      <hr className={styles.line} />
      <div>
        <Comments comments={comments} setcommentData={setcommentData} />
      </div>
    </div>
  );
};

export default Pageinformation;
