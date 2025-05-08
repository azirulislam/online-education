import React from "react";
import "./Footer.css";
import group1 from "../assets/image/Group 1.png";
import group from "../assets/image/Group.png";
import vector2 from "../assets/image/vector2.png";

const Fotter = () => {
  return (
    <div className="footer">
      <div className="social">
        <img src={group1} alt="" />
        <p>Follow on social service</p>
      </div>
      <div className="s-icon">
        <img className="icon-img" src={vector2} alt="" />
        <img src={group} alt="" />
      </div>
      <div className="contact">
        <div>
          <h3>Links</h3>
          <p>Home</p>
          <p>Help center</p>
          <p>Service</p>
        </div>
        <div>
          <h3>Resource</h3>
          <p>About Us</p>
          <p>Carrier</p>
          <p>Legal Notice</p>
        </div>
        <div>
          <h3>Contacts</h3>
          <p>192. New York</p>
          <p>Support</p>
          <p>+1125156363</p>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright 2020@ all right</p>
      </div>
    </div>
  );
};

export default Fotter;
