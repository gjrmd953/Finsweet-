import React from 'react'
import "./banner.css";
import banner from "../../assets/banner.jpg";


function Banner() {
  return (
    <div className="banner"
  style={{ backgroundImage: `url(${banner})` }}>
       <div className="container">
        <div className="banner">
          <h4>
            Welcome to our CHURCH
          </h4>
          <h2>
            Become a part of our community
          </h2>
          <a>
            Learn more
          </a>
          <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do.</p>
        </div>
       </div>
    </div>
  )
}

export default Banner