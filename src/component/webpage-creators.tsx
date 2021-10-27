import React from "react";
import "./style.css";

export class WebDevs extends React.Component {
  render() {
    return (
      <section className="review" id="review">
        <h1 className="heading">
          <span>P</span>
          <span>A</span>
          <span>G</span>
          <span>E</span>
          <br />
          <span>C</span>
          <span>R</span>
          <span>E</span>
          <span>A</span>
          <span>T</span>
          <span>O</span>
          <span>R</span>
          <span>S</span>
        </h1>

        <div className="swiper-container review-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="box">
                <img
                  src={require("./images/larissa.png").default}
                  alt="Larissa"
                />
                <h3>Larissa</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  adipisci quisquam sunt nesciunt fugiat odit minus illum
                  asperiores dolorum enim sint quod ipsam distinctio molestias
                  consectetur ducimus beatae, reprehenderit exercitationem!
                </p>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="box">
                <img
                  src={require("./images/Filipe.jpg").default}
                  alt="Filipe"
                />
                <h3>Filipe</h3>
                <p>
                  One of the creatours of this site, his passion about futsal is
                  very high and he also plays in a seniour level on a team of
                  futsal. The love for the sport make him do this website!
                </p>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WebDevs;
