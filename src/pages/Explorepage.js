import React, { useEffect, useState } from "react";
import styles from "../styles/explore.module.css";
import axios from "axios";
import Posts from "../components/Posts";
import Paginationfile from "../components/Paginationfile";
/**
 * Explorepage function for posts list.
 * Fetches the post from the API and showing them on the website.
 * pageNow is set at 1.
 * postEachpage set to 4 posts per site. pagination.
 */
const Explorepage = () => {
  const [posts, setPostinfo] = useState([]);
  const [errors, setError] = useState();
  // Current page tracker.
  const [pageNow, setpageNow] = useState(1);
  // Max posts is put to (4) post per site.
  const [postEachpage] = useState(4);
/**
 * useEffect for getting the posts for explore new page.
 * Making an API request to GET the "/post/" to list all posts on the explore new page.
 * It collects all posts and updates the state
 */
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
  /**
   * Counting for paginations.
   * So user can see 4 posts per page in the explore new page.
   * paginate Updates current page state.
   */
  const lastpostcount = pageNow * postEachpage;
  const firstpostcount = lastpostcount - postEachpage;
  const currentPost = posts.slice(firstpostcount, lastpostcount);

  const paginate = (pageNumber) => setpageNow(pageNumber);

  return (
    <div className={styles.bigdivcontain}>
      <div className={styles.centerbig}>
        <h2 className="text-center">Explore new reviews</h2>
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
