import React from "react";
import { Link } from "react-router-dom";
import { LeagueB } from "./Infos/leaguesBase";
import "./style.css";

interface AppProps {
  //code related to your props goes here
}

interface AppState {
  leagues: LeagueB[];
}

export class League extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      leagues: [
        new LeagueB(
          1,
          "/russiaL",
          "Superliga Russa de Futsal",
          "https://www.zerozero.pt/img/logos/competicoes/4439_imgbank_d1_20200821153928.png",
          "Sunday 17h (+3 GMT)",
          "The first division futsal league of russia"
        ),
        new LeagueB(
          2,
          "/brazilL",
          "Liga Nacional de Futsal",
          "https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2018/03/LNF.png",
          "Tuesday 15h (-3 GMT)",
          "The first division futsal league of brazil"
        ),
        new LeagueB(
          3,
          "/placard",
          "Liga Placard",
          "https://www.blogdoportimonense.pt/wp-content/uploads/2021/04/imgCH620I16195T.jpg",
          "Saturday 14h (+1 GMT)",
          "The first division futsal league of portugal"
        ),
        new LeagueB(
          4,
          "/fafe",
          "Liga Futsal Copos & Petiscos",
          "https://www.zerozero.pt/img/logos/edicoes/128863_imgbank_.png",
          "First games in 22/10/21 on the Fafe multipurpose pavilion",
          "The amateur division of Fafe, stoped since 2019 because of covid and will restart this year. There is no tv transmissions for this league!"
        ),
      ],
    };
  }

  render() {
    return (
      <section className="packages" id="packages">
        <h1 className="heading">
          <span>C</span>
          <span>O</span>
          <span>M</span>
          <span>P</span>
          <span>E</span>
          <span>T</span>
          <span>I</span>
          <span>T</span>
          <span>I</span>
          <span>O</span>
          <span>N</span>
          <span>S</span>
        </h1>

        <div className="box-container">
          {this.state.leagues.map((league) => (
            <div className="box">
              <Link to={league.path}>
                <img
                  src={league.imgURL}
                  alt="League logo"
                  height={100}
                  width={100}
                />
              </Link>
              <div className="content">
                <h3>
                  <i className="fas fa-map-marker-alt"></i> {league.leagueName}{" "}
                </h3>
                <p>{league.leagueDescrip}</p>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <div className="price"> {league.matchLive} </div>
                <a href="https://multicanais.tv/tvaovivo/" className="btn">
                  Watch Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
