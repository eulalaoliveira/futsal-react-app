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

export class Ferrao extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      player: new PlayerB(
        2,
        "/ferrao",
        "Ferrao",
        "https://s2.glbimg.com/8iePpvC4e_QvTFSUYHh1SSIJFh0=/0x0:750x468/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/v/7/9BaD7BRBaQwBI5xhjDxQ/ferrao.jpg",
        "Brazil",
        30,
        "Barcelona",
        "Target",
        1,
        7,
        3,
        "Born in Brazil and play in Spain for Barcelona, a world class player and one of the bests in the world at his position."
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
