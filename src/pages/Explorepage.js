import React, { useEffect, useState } from "react";
import styles from "../styles/explore.module.css";
import axios from "axios";

const Explorepage = () => {
  const [posts, setPostinfo] = useState([])
  const [errors, setError] = useState()

  useEffect(() => {
    const GettingPosts = async () => {
      try{
        const { data } = await axios.get('/post/')
        setPostinfo(data.results)
      } catch(err){
        setError(errors)
      }
    }
    GettingPosts();
  },[])



  return (
    <div className="container d-flex justify-content-center">
      <div className={styles.centerbig}>
      <h2>Explore new reviews</h2>
        <div className={styles.colordiv}>
          {posts.map((post, jdk)=>(
            <div key={jdk} className={styles.bookdiv}>
            <h3 className="text-center">{post.title}</h3>
            <img src={post.image_post} alt={post.image_post} className={styles.pictures}/>
            <p className="text-center">{post.description}</p>

            <i className="fa-regular fa-comment mt-4"></i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorepage;
