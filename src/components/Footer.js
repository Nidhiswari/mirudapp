import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  return (
    <div className="footer">
      <div className="footer_row">
        <ul>
          <Link to="/" style={linkStyle}>
            <li>Home</li>
          </Link>
          <Link to="/bikes" style={linkStyle}>
            <li>Bikes</li>
          </Link>
          <Link to="/about" style={linkStyle}>
            <li>About Us</li>
          </Link>
          <Link to="/contact" style={linkStyle}>
            <li>Contact Us</li>
          </Link>
        </ul>
      
          
        
        
      </div>
      <br />
      <br />
      <p id="footer_cp_text">Copyright 2022. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;