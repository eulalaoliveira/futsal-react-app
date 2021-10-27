import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PlayerB } from "../Infos/playersBase";
import "../style.css";

interface AppProps {
  //code related to your props goes here
}

interface AppState {
  player: PlayerB;
}

export class Bayu extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      player: new PlayerB(
        5,
        "/bayu",
        "Bayu Saptaji",
        "https://www.aseanfootball.org/v3/wp-content/uploads/2019/09/Bayu-Saptaji-4.jpg",
        "Indonesia",
        29,
        "Halus FC",
        "Winger",
        0,
        0,
        0,
        "One of the best asian futsal players at the moment and one of the most popular futsal players in social media."
      ),
    };
  }

  render() {
    return (
      <section id="about">
        <div className="about-text">
          <h1>{this.state.player.position}</h1>
          <h2>{this.state.player.playerName}</h2>
          <p>Country: {this.state.player.country}</p>
          <p>Age: {this.state.player.age}</p>
          <p>Club Name: {this.state.player.clubName}</p>
          <p>
            Internacional Competitions won:{" "}
            {this.state.player.internationalCompetions}
          </p>
          <p>
            National Competitions won: {this.state.player.nationalCompetions}
          </p>
          <p>Own Awards: {this.state.player.playerAwards}</p>
          <p>Description: {this.state.player.description}</p>
          <Link to={"/player"}>
            <Button>Other Players</Button>
          </Link>
        </div>

        <div className="about-img">
          <img alt="ricardinho" src={this.state.player.imgURL} />
        </div>
      </section>
    );
  }
}
