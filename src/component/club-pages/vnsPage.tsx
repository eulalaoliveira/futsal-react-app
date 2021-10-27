import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ClubeB } from "../Infos/clubeBase";
import "../style.css";

interface AppProps {
  //code related to your props goes here
}

interface AppState {
  club: ClubeB;
}

export class VNS extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      club: new ClubeB(
        8,
        "/vns",
        "CSCDR Vila Nova de Sande",
        "http://2.bp.blogspot.com/-UarhGWkMhc8/UsaH6HlxoaI/AAAAAAAACCs/OEsGWOMO5ss/s1600/simblo%255B1%255D.png",
        "Portugal",
        "Futsal amateur division of Fafe",
        "Guimarães",
        0,
        0,
        "Founded in 1979 playing always in lower divisions of the AF Braga and never had a seniour team, disbanded in 2017 and resurrect this year to try to achieve glory in amateur divisions!"
      ),
    };
  }

  render() {
    return (
      <section id="about">
        <div className="about-text">
          <h1>{this.state.club.clubName}</h1>
          <h2>{this.state.club.country}</h2>
          <p>City: {this.state.club.city}</p>
          <p>Division: {this.state.club.division}</p>
          <p>Own Awards: {this.state.club.clubAwards}</p>
          <p>Description: {this.state.club.description}</p>
          <Link to={"/club"}>
            <Button>Other Clubs</Button>
          </Link>
        </div>

        <div className="about-img">
          <img alt="club logo" src={this.state.club.imgURL} width={280} />
        </div>
      </section>
    );
  }
}
