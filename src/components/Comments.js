import React, { useContext, useState } from "react";
import styles from "../styles/comments.module.css";
import { CurrentUserInfo } from "../users/userInformation";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

/**
 * Comments shows the made comments on a specific post.
 * Showing all comments made on the post.
 * Contains username,comment, and icon for the user to delete there own comments.
 * 
 */
const Comments = ({ comments, deletecomment}) => {
  const userNow = useContext(CurrentUserInfo);



  return (
    <div>
    <div className={styles.divcomments}>
      {comments.map((comment, jkd) => (
        <div key={jkd} className={styles.divinside}>
          <p className="text-center">
            <strong>{comment.username}</strong>
          </p>
          <p className="text-center">{comment.comment}</p>
          {userNow?.username === comment.username && (
            <div className={styles.iconbutton}>
              <i
                className="fa-solid fa-trash"
                onClick={() => deletecomment(comment)}
              ></i>
            </div>
          )}
          <hr className={styles.hrlinebig}/>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Comments;