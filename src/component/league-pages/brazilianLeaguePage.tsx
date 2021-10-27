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

export class SLR extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      league: new LeagueB(
        2,
        "/brazilL",
        "Liga Nacional de Futsal",
        "https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2018/03/LNF.png",
        "Tuesday 15h (-3 GMT)",
        "The first division futsal league of brazil"
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
            href="https://www.flashscore.com/futsal/brazil/lnf/"
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
