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

export class SlaviaPraga extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      club: new ClubeB(
        6,
        "/slaviaP",
        "Sportovní Klub Slavia Praha",
        "https://www.iol.pt/multimedia/oratvi/multimedia/imagem/id/13294560/",
        "Czech Republic",
        "A",
        "Prague",
        5,
        33,
        "It was founded on May 31, 1892, making it one of the oldest Czech football clubs. Its main rival is Sparta Praga. The classic, considered the biggest rivalry in the country, is known as Derbie S."
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
