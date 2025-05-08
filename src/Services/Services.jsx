import React from "react";
import "./Services.css";
import group18 from "../assets/image/Group 18.png";
import group19 from "../assets/image/Group 19.png";
import group20 from "../assets/image/Group 20.png";
import group24 from "../assets/image/Group 24.png";
import group36 from "../assets/image/Group 36.png";

const Services = () => {
  return (
    <div>
      <div className="heading">
        <h1>Benefits of online Education </h1>
        <p>
          It is a long established fact that a reader will be distracted by{" "}
          <br /> the readable content of a page when looking{" "}
        </p>
      </div>
      <div className="services">
        <div>
          <img src={group18} alt="" />
          <h3>One on One Monitor</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
        </div>
        <div>
          <img src={group19} alt="" />
          <h3>24/7 Mentor</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
        </div>
        <div>
          <img src={group20} alt="" />
          <h3>Whiteboard</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
        </div>
        <div>
          <img src={group24} alt="" />
          <h3>Affordable Price</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
        </div>
      </div>
      <div className="ser-banner">
        <div>
          <img src={group36} alt="" />
        </div>
        <div className="ban-right">
          <h1>
            We are Always Ensure <br /> Best Course for your <br /> learning
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and It <br />{" "}
            typesetting industry. Lorem Ipsum has been the{" "}
          </p>
          <button className="ban-btn">Join Us Free</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
