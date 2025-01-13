import React, { useEffect, useState } from "react";
import styles from "../styles/explore.module.css";
import axios from "axios";
import Posts from "../components/Posts";
import Paginationfile from "../components/Paginationfile";

const Explorepage = () => {
  const [posts, setPostinfo] = useState([]);
  const [errors, setError] = useState();
  const [pageNow, setpageNow] = useState(1);
  const [postEachpage] = useState(4);

  useEffect(() => {
    const GettingPosts = async () => {
      try {
        const { data } = await axios.get("/post/");
        setPostinfo(data.results);
      } catch (err) {
        setError(errors);
      }
    };
    GettingPosts();
  }, []);
  const lastpostcount = pageNow * postEachpage;
  const firstpostcount = lastpostcount - postEachpage;
  const currentPost = posts.slice(firstpostcount, lastpostcount);

  const paginate = (pageNumber) => setpageNow(pageNumber);

  return (
    <div className={styles.bigdivcontain}>
      <div className={styles.centerbig}>
        <h2>Explore new reviews</h2>
        <div className={styles.colordiv}>
          <Posts posts={currentPost} />
          <Paginationfile
            postEachpage={postEachpage}
            totalPost={posts.length}
            paginate={paginate}
            className={styles.pagination}
          />
        </div>
      </div>
    </div>
  );
};

export default Explorepage;
