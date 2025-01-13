import React, { useEffect, useState } from "react";
import frontpicture from "../assets/My-front-picture.jpeg";
import pic from "../styles/Homepage.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import Homepageposts from "./Homepageposts";

const Homepage = () => {
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

  return (
    <div className={pic.bigdiv}>
      <div>
        <div>
          <img
            src={frontpicture}
            className={pic.frontpicture}
            alt={frontpicture}
          ></img>
          <div className="container"></div>
          <div className={pic.readtext}>
            <p className="text-center">
              Welcome to <strong>Read and review</strong>A website for book
              lovers who love to share and to get the thougths of recently read
              book, or discover books that you have not read yet. you can post
              reviews, and connect with others on the site!
            </p>
            
            <div className={pic.bookboxdiv}>
              <h2 className={pic.headertext}>New book reviews</h2>
              <Homepageposts posts={currentPost} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
