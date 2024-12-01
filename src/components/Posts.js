import React from 'react'
import styles from "../styles/explore.module.css"

const Posts = ({posts}) => {


  return (
    <div>
        {posts.map((post, jdk)=>(
            <div key={jdk} className={styles.bookdiv}>
            <h3 className="text-center">{post.title}</h3>
            <p className="text-center mt-2"> <strong>{post.username}</strong></p>
            <img src={post.image_post} alt={post.image_post} className={styles.pictures}/>
            <h6 className="text-center mt-2">Description</h6>
            <p className={styles.textp}>{post.description}</p>

            <i className="fa-regular fa-comment mt-2"></i>
            </div>
          ))}
    </div>
  )
}

export default Posts