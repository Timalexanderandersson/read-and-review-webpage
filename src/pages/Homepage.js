import React from "react";
import frontpicture from "../assets/My-front-picture.jpeg"
import pic from "../styles/Homepage.module.css"


const Homepage = () => {
  

  return (
  
    <div className={pic.bigdiv}>
    <div >
    <div>
        <img src={frontpicture} className={pic.frontpicture}></img>
    <div className="container">
    </div>
    <div className={pic.readtext}>
        <p className="text-center mt-3">Welcome to <strong>Read and review</strong>
           A website for book lovers who love to share and to get the thougths of recently read book,
           or discover books that you have not read yet.
           you can post reviews, and connect with others on the site!
           </p>
           <div>
           <hr className={pic.hrfrontline}></hr>
           </div>
           <div className={pic.bookboxdiv}>
            <h2>New book reviews</h2>
            <div className={pic.ratingdiv}>

            </div>
           </div>
    </div>
  </div>
  </div>
  </div>
  )
}

export default Homepage