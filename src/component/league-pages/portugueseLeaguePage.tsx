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

export class Placard extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      league: new LeagueB(
        3,
        "/placard",
        "Liga Placard",
        "https://www.blogdoportimonense.pt/wp-content/uploads/2021/04/imgCH620I16195T.jpg",
        "Saturday 14h (+1 GMT)",
        "The first division futsal league of portugal"
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
            href="https://www.flashscore.com/futsal/portugal/liga-placard/standings/"
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
