import React from "react";
import { Link } from "react-router-dom";
import { LeagueB } from "../Infos/leaguesBase";
import "../style.css";

interface AppProps {
  //code related to your props goes here
}

interface AppState {
  league: LeagueB;
}

export class LFCP extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      league: new LeagueB(
        4,
        "/fafe",
        "Liga Futsal Copos & Petiscos",
        "https://www.zerozero.pt/img/logos/edicoes/128863_imgbank_.png",
        "First games in 22/10/21 on the Fafe multipurpose pavilion",
        "The amateur division of Fafe, stoped since 2019 because of covid and will restart this year. There is no tv transmissions for this league!"
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
            href="https://www.ligasamaf.pt/liga-futsal-seniores-masculinos/"
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
