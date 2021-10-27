import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>about us</h3>
            <p>
              The passion about sports and the influence of one of the creators
              make this site happening!
            </p>
          </div>
          <div className="box">
            <h3>Nations</h3>
            <a href="#">Portugal</a>
            <a href="#">Brasil</a>
            <a href="#">Russia</a>
            <a href="#">France</a>
          </div>
          <div className="box">
            <h3>quick links</h3>
            <Link to={"/video"}>home</Link>
            <Link to={"/news"}>news</Link>
            <Link to={"/leagues"}>leagues</Link>
            <Link to={"/club"}>clubs</Link>
            <Link to={"/player"}>players</Link>
            <Link to={"/us"}>us</Link>
            <Link to={"/form"}>form</Link>
          </div>
          <div className="box">
            <h3>follow us</h3>
            <a href="#">facebook</a>
            <a href="#">instagram</a>
            <a href="#">twitter</a>
            <a href="#">linkedin</a>
          </div>
        </div>

        <h1 className="credit">
          Created by <span> LARISSA & FILIPE </span>
        </h1>
      </section>
    );
  }
}

export default Footer;
