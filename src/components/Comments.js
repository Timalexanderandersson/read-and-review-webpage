import React, { useContext, useState } from 'react'
import styles from "../styles/comments.module.css"
import { CurrentUserInfo } from '../users/userInformation';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Comments = ({comments }) => {
  const userNow = useContext(CurrentUserInfo);
  const { id } = useParams();
  const navigate = useNavigate()
 
     // delete post/with id.
     const handeldeletecomment = async (comment) => {
      try {
        await axios.delete(`/comments/${comment.id}`)
        window.location.reload()
        navigate(`/post/${id}`)
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <div className={styles.divcomments}>
      {comments.map((comment, jkd) =>(
          <div key={jkd} className={styles.divinside}> 
          <p className={styles.username}><strong>{comment.username}</strong></p>
          <p className='mr-3'>{comment.comment}</p>
          { userNow?.username === comment.username && (
            <div className={styles.iconbutton}>
            <i className="fa-solid fa-trash" onClick={() =>handeldeletecomment(comment)}></i>
            </div>
          )}
          </div>

      ))}
    </div>
  )
}

export default Comments