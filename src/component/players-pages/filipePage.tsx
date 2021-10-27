import React from "react";
import { PlayerB } from "../Infos/playersBase";
import playerImg from "../images/Filipe.png";
import { Link } from "react-router-dom";
import "../style.css";

interface AppProps {
  //code related to your props goes here
}

interface AppState {
  player: PlayerB;
}

export class Filipe extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      player: new PlayerB(
        8,
        "/filipe",
        "Filipe",
        playerImg,
        "Portugal",
        22,
        "Vila Nova de Sande",
        "Winger",
        0,
        0,
        0,
        "Play until is 18 years with CSCDRVNS in the Braga Futsal Federation, stoped 4 years and now return to the same club trying for the first time playing in a seniour level."
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
            <button>More players</button>
          </Link>
        </div>

        <div className="about-img">
          <img alt="ricardinho" src={this.state.player.imgURL} />
        </div>
      </section>
    );
  }
}
