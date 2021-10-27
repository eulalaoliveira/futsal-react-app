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

export class Tayebi extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      player: new PlayerB(
        7,
        "/tayebi",
        "Houssen Tayebi",
        "https://media.slbenfica.pt/-/media/benficadp/images/departamento-de-comunicacao/2020/modalidades-de-pavilhao/futsal/masculino/jogadores/tayebi/novas/janeiro/12/tayebi-benfica-1-new.jpg?h=725&w=1208&v=637460501920000000&hash=F7CCC465E83E9C7F672AEEB2070BD671",
        "Iran",
        33,
        "Benfica",
        "Winger & Target",
        2,
        14,
        0,
        "Probably the best iran futsal player ever, playing in one of the most competitive clubs in europe."
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
