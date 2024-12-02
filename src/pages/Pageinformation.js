import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/Postinformation.module.css";
import { Link, useParams } from "react-router-dom";
import { CurrentUserInfo } from "../users/userInformation";

const Pageinformation = () => {
  const [postsData, setpostsData] = useState({});
  const [usecomment, setcomments] = useState(null)
  const [error, setErros] = useState();
  const { id } = useParams();
  const userNow = useContext(CurrentUserInfo);

  useEffect(() => {

    // getting the post id on post
    const gettingid = async () => {
      try {
        const { data } = await axios.get(`/post/${id}`);
        setpostsData(data);
      } catch (error) {
        setErros(error.message);
      }
    };
    gettingid();
  }, [id]);

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
            {ownerpost && (<Link to="/" className={styles.editbutton}>
              <i class="fa-regular fa-pen-to-square"></i>
            </Link>)}
          </div>
        </div>
      </div>
      <hr className={styles.line} />
      <p className="text-center mb-4">Need to be sign in to comment</p>
      <hr className={styles.line} />
    </div>
  );
};

export default Pageinformation;
