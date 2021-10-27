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

export class AEK extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      club: new ClubeB(
        7,
        "/aek",
        "AEK Futsal Club",
        "https://logoeps.com/wp-content/uploads/2013/07/aek-fc-vector-logo.png",
        "Greece",
        "A",
        "Athens",
        2,
        8,
        "AEK won the first title since the establishment of the department of Futsal at 3 June 2018, after beating 1–0 Olympiada Agia Paraskevi at the 2017–18 Hellenic Cup final."
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
