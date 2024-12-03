import React from 'react'
import styles from "../styles/comments.module.css"

const Comments = ({comments}) => {
  return (
    <div className={styles.divcomments}>
        {comments.map((comment, jkd) =>(
          <div key={jkd}>
            <p><strong>{comment.username}</strong></p>
            <p>{comment.comment}</p>
          </div>
        ))}
    </div>
  )
}

export default Comments