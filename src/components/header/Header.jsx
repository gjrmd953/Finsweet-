import React from 'react';
import "./header.css";
import Log from "../../assets/logo.png"

const Header = () => {
  return (
    <div id='menubar'>
      <div className="container">
        <div className="main">
          <div className="logo">
            <img src={Log} alt="" />
          </div>
          <div className="menu">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Sermon</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="btn">
            <a href="#">Contact us</a>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Header