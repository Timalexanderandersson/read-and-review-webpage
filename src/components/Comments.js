import React from 'react'

const Comments = ({comments}) => {
  return (
    <div>
        {comments.map((comment, jkd) =>(
           <p>{comment.comment}</p>
        ))}
    </div>
  )
}

export default Comments