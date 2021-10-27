import React from "react";
import { PlayerB } from "../Infos/playersBase";
import { Link } from "react-router-dom";
import "../style.css";

interface AppProps {
  //code related to your props goes here
}

interface AppState {
  player: PlayerB;
}

export class Rodrigo extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      player: new PlayerB(
        6,
        "/rodrigo",
        "Rodrigo Araújo",
        "https://www.playmakerstats.com/img/geral/674531_med_.png.png",
        "Brazil",
        37,
        "Magnus Futsal",
        "Fixed Defender",
        5,
        7,
        0,
        "One the best futsal defenders in the worlds, never leave the brasilian competion, but no needs, is incredible abilities can be seen at the international level."
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
          <img alt="ricardinho" src={this.state.player.imgURL} width={600} />
        </div>
      </section>
    );
  }
}
