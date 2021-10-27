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

export class Panat extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      player: new PlayerB(
        4,
        "/panat",
        "Panat Kittipanuwong",
        "https://media.gettyimages.com/photos/panat-kittipanuwong-from-thailand-in-action-during-the-aff-futsal-picture-id633074840",
        "Thailand",
        23,
        "Chonburi Bluewave",
        "Winger",
        5,
        3,
        0,
        "A young talented player that plays in thailand, consider for many one of the futsal players to see in this new generation."
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
          <img alt="ricardinho" src={this.state.player.imgURL} width={800} />
        </div>
      </section>
    );
  }
}
