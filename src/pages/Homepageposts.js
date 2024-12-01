import React from "react";
import pic from "../styles/Homepage.module.css";
import { Link } from "react-router-dom";


const Homepageposts = ({ posts }) => {
  return (
    <div>
      <div className={pic.ratingdiv}>
        {posts.map((post, dxk) => (
          <div key={dxk} className={pic.divforbook}>
            <img
              src={post.image_post}
              className={pic.postpictures}
              alt={post.title}
            />
            <Link to={`/post/${post.id}`} className={pic.titlename}>
              <h3>{post.title}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepageposts;