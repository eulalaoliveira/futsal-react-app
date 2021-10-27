/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";

export class Video extends React.Component {
  render() {
    return (
      <section className="home" id="home">
        <div className="content">
          <h3>All About Futsal</h3>
          <p>discorver everything in one place</p>
          <a href="#" className="btn">
            Download the APP
          </a>
        </div>

        <div className="video-container">
          <video
            src={require("./images/video/AmazingFutsalSkills.mov").default}
            id="video-slider"
            loop
            autoPlay
            muted
          ></video>
        </div>
      </section>
    );
  }
}
