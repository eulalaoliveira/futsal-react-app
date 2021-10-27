import React from "react";
import { LeagueB } from "../Infos/leaguesBase";
import { Link } from "react-router-dom";
import "../style.css";

interface AppProps {
  //code related to your props goes here
}

interface AppState {
  league: LeagueB;
}

export class LNF extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      league: new LeagueB(
        1,
        "/russiaL",
        "Superliga Russa de Futsal",
        "https://www.zerozero.pt/img/logos/competicoes/4439_imgbank_d1_20200821153928.png",
        "Sunday 17h (+3 GMT)",
        "The first division futsal league of russia"
      ),
    };
  }
  render() {
    return (
      <section id="league">
        <div className="league-img league-text">
          <img
            className="logo-league-img"
            alt="league"
            src={this.state.league.imgURL}
          />
          <h2>{this.state.league.leagueName}</h2>
        </div>

        <div className="league-text">
          <a
            href="https://www.flashscore.com/futsal/russia/superliga/standings/"
            target="_blank"
            rel="noreferrer"
          >
            Check the tables live!
          </a>

          <p>{this.state.league.leagueDescrip}</p>

          <Link to={"/leagues"}>
            <button>More Leagues</button>
          </Link>
        </div>
      </section>
    );
  }
}
