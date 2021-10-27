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

export class Boca extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      club: new ClubeB(
        1,
        "/bocaJ",
        "Club Atlético Boca Juniors",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Boca_Juniors_logo18.svg/1200px-Boca_Juniors_logo18.svg.png",
        "Argentina",
        "A",
        "Buenos Aires",
        1,
        13,
        "It is one of the most successful of this sport in Argentina. Being the second club with the most titles, and the only one that played every season in the 1st Division."
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
