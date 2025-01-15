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
 *
 */
const Comments = ({ comments, deletecomment }) => {
  const userNow = useContext(CurrentUserInfo);
  const [show, setShowing] = useState(false);

  const handleClosing = () => setShowing(false);
  const handleShowing = () => setShowing(true);

  return (
    <div>
      <div className={styles.divcomments}>
        {comments.map((comment, jkd) => (
          <div key={jkd} className={styles.divinside}>
            <p className="text-center">
              <strong>{comment.username}</strong>
            </p>
            <p className={styles.paragraphcomment}>{comment.comment}</p>
            {userNow?.username === comment.username && (
              <div className={styles.iconbutton}>
                <i className="fa-solid fa-trash" onClick={handleShowing}></i>
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
                        deletecomment(comment);
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
