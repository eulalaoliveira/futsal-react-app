import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ClubeB } from "../Infos/clubeBase";
import "../style.css";

interface AppProps {
  //code related to your props goes here
}

interface AppState {
  club: ClubeB;
}

export class Ferencvaros extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      club: new ClubeB(
        5,
        "/ferencvaros",
        "Ferencvárosi Torna Club",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Ferencv%C3%A1rosiTClog%C3%B3.png/1200px-Ferencv%C3%A1rosiTClog%C3%B3.png",
        "Hungary",
        "A",
        "Budapeste",
        1,
        62,
        "The FTC's football department, founded in 1900, has a history as the most successful club in Hungary. His nickname among fans is Fradi."
      ),
    };
  }

  render() {
    return (
      <section id="about">
        <div className="about-text">
          <h1>{this.state.club.clubName}</h1>
          <h2>{this.state.club.country}</h2>
          <p>City: {this.state.club.city}</p>
          <p>Division: {this.state.club.division}</p>
          <p>Own Awards: {this.state.club.clubAwards}</p>
          <p>Description: {this.state.club.description}</p>
          <Link to={"/club"}>
            <Button>Other Clubs</Button>
          </Link>
        </div>

        <div className="about-img">
          <img alt="club logo" src={this.state.club.imgURL} width={360} />
        </div>
      </section>
    );
  }
}
