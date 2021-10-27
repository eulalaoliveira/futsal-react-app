import React from "react";

export class Settings extends React.Component {
  render() {
    return (
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>M</span>
          <span>E</span>
          <span>S</span>
          <span>S</span>
          <span>A</span>
          <span>G</span>
          <span>E</span>
          <br />
          <br />
          <span>U</span>
          <span>S</span>
        </h1>

        <div className="row">
          <div className="image">
            <img src={require("./images/bola.png")} alt="" />
          </div>
          <form action="">
            <div className="inputBox">
              <input type="text" placeholder="name" />
              <input type="email" placeholder="email" />
            </div>
            <div className="inputBox">
              <input type="number" placeholder="number" />
              <input type="text" placeholder="subject" />
            </div>
            <textarea
              placeholder="message"
              name=""
              id=""
              cols={30}
              rows={10}
            ></textarea>
            <input type="submit" className="btn" value="send message" />
          </form>
        </div>
      </section>
    );
  }
}
