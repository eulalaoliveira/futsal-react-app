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

export class Sporting extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      club: new ClubeB(
        3,
        "/sporting",
        "Sporting Clube de Portugal",
        "https://logodownload.org/wp-content/uploads/2019/03/sporting-clube-de-portugal-logo-escudo-1.png",
        "Portugal",
        "A",
        "Lisbon",
        1,
        52,
        "Sporting Club Futsal is one of the two largest futsal clubs in Portugal, with more than 160,000 registered members who contribute financially to the maintenance of the sport."
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
          <img alt="club logo" src={this.state.club.imgURL} width={360} />
        </div>
      </section>
    );
  }
}
