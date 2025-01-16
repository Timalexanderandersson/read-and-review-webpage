import React, { useContext, useState } from "react";
import styles from "../styles/comments.module.css";
import { CurrentUserInfo } from "../users/userInformation";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";

/**
 * Comments shows the made comments on a specific post.
 * Showing all comments made on the post.
 * Contains username,comment, and icon for the user to delete there own comments.
 * Modal function for collecting the right comment and be able to delete it.
 * Delete function for deleting comments.
 *
 */
const Comments = ({ comments, setcommentData }) => {
  const userNow = useContext(CurrentUserInfo);
  const [show, setShowing] = useState(false);
  const [error, setError] = useState({})
  const [selectedComment, setSelectedComment] = useState(null);

  /**
   * handeldeletecomment is a function for deleting comments on posts.
   * Sending a delete request for the API for a specific comment to delete.
   * If successfully removed comment updating for the remaining comments to show.
   *
   */
  const handeldeletecomment = async (comment) => {
    try {
      await axios.delete(`/comments/${comment.id}`);
      let removcomment = comments.filter((e) => e.id !== comment.id);
      setcommentData(removcomment);
    } catch (error) {
    }
  };
  /**
   * Closing the Modal.
   */
  const handleClosing = () => {
    setShowing(false);
  };
  /**
   * Showing the Modal for deleting the comment.
   */
  const handleShowing = (comment) => {
    setShowing(true);
    setSelectedComment(comment);
  };

  return (
    <div>
      <div className={styles.divcomments}>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.divinside}>
            <p className="text-center">
              <strong>{comment.username}</strong>
            </p>
            <p className={styles.paragraphcomment}>{comment.comment}</p>
            {userNow?.username === comment.username && (
              <div className={styles.iconbutton}>
                <i
                  className="fa-solid fa-trash"
                  onClick={() => handleShowing(comment)}
                ></i>
                <Modal show={show} onHide={handleClosing}>
                  <Modal.Header closeButton>
                    <Modal.Title>Delete comment</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <strong>
                      Are you sure you want to delete the comment?
                    </strong>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="outline-secondary" onClick={handleClosing}>
                      Close
                    </Button>
                    <Button
                      variant="danger"
                      type="delete"
                      onClick={() => {
                        handeldeletecomment(selectedComment);
                        handleClosing();
                      }}
                    >
                      Delete comment
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
            )}
            <hr className={styles.hrlinebig} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
