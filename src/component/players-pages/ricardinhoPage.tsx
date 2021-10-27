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

export class Ricardinho extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      player: new PlayerB(
        1,
        "/ricardinho",
        "Ricardinho",
        "https://static.globalnoticias.pt/oj/image.jpg?brand=OJ&type=generate&guid=f3c662f0-3ffb-4dac-817e-60a61ea43d67&w=768&h=512&t=20210822145749",
        "Portugal",
        36,
        "No club at the moment",
        "Winger",
        9,
        31,
        8,
        "Consider for the most, the best futsal player ever winning more than 5 times the best futsal player award!"
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
