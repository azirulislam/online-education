import React from "react";
import "./Banner.css";
import Group12 from "../assets/image/Group 12.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="left-side">
        <h1>
          Getting Quality <br /> Education is now <br /> more Easy
        </h1>
        <p>
          t is a long established fact that a reader will be distracted by
          <br /> the readable content of a page when looking
        </p>
        <button className="btn-j1">Join Us Free</button>
        <button className="btn-j2">Join Us Free</button>
      </div>
      <div className="right-side">
        <img src={Group12} alt="" />
      </div>
    </div>
  );
};

export default Banner;
