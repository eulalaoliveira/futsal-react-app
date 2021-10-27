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

export class Guitta extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      player: new PlayerB(
        9,
        "/guitta",
        "Guitta",
        "https://cdn-images.rtp.pt/icm/noticias/images/40/4072561c59dac1ae63ac688d48135f9d?w=860&q=90&rect=0,18,1224,671",
        "Brazil",
        34,
        "Sporting",
        "Goalkeeper",
        4,
        8,
        1,
        "For many the best futsal goalkeeper at the moment, already win all the trophys that he could wish for!"
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
