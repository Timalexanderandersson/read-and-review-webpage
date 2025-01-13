import React from 'react';
import styles from "../styles/explore.module.css";
import { Link } from 'react-router-dom';

const Posts = ({posts}) => {

  return (
    <div>
        {posts.map((post, jdk)=>(
            <div key={jdk} className={styles.bookdiv}>
              <Link to={`/post/${post.id}`} className={styles.headertext}>
              <h3 >{post.title}</h3>
              </Link>
            <p className="text-center mt-2"> <strong>{post.username}</strong></p>
            <img src={post.image_post} alt={post.image_post} className={styles.pictures}/>
            <h6 className="text-center mt-2">Description</h6>
            <p className={styles.textp}>{post.description}</p>
            <Link to={`/post/${post.id}`} className={styles.headertext}>
            <i className="fa-regular fa-comment mt-2"></i>
              </Link>
            </div>
          ))}
    </div>
  )
};

export default Posts