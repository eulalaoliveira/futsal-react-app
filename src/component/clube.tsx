import React from "react";
import { Link } from "react-router-dom";
import { ClubeB } from "./Infos/clubeBase";
import "./style.css";

interface AppProps {
  //code related to your props goes here
}

interface AppState {
  clubs: ClubeB[];
}

export class Clube extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      clubs: [
        new ClubeB(
          1,
          "/bocaJ",
          "Club Atlético Boca Juniors",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Boca_Juniors_logo18.svg/1200px-Boca_Juniors_logo18.svg.png",
          "Argentina",
          "A",
          "Buenos Aires",
          1,
          13,
          "It is one of the most successful of this sport in Argentina. Being the second club with the most titles, and the only one that played every season in the 1st Division."
        ),
        new ClubeB(
          2,
          "/corinthians",
          "Sport Club Corinthians Paulista",
          "https://upload.wikimedia.org/wikipedia/pt/b/b4/Corinthians_simbolo.png",
          "Brazil",
          "A",
          "São Paulo",
          5,
          31,
          "Sport Club Corinthians Paulista's futsal department was created in the 1950s, being one of the pioneer clubs in this modality in the State of São Paulo."
        ),
        new ClubeB(
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
        new ClubeB(
          4,
          "/benfica",
          "Sport Lisboa e Benfica",
          "https://upload.wikimedia.org/wikipedia/en/thumb/a/a2/SL_Benfica_logo.svg/1200px-SL_Benfica_logo.svg.png",
          "Portugal",
          "A",
          "Lisbon",
          1,
          27,
          "Since its creation, it has never positioned itself below second place in the regular phase of the National Championship. Benfica were the first Portuguese team to become European champions by winning the UEFA Futsal Cup in the 2009-10 season."
        ),
        new ClubeB(
          5,
          "/ferencvaros",
          "Ferencvárosi Torna Club",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Ferencv%C3%A1rosiTClog%C3%B3.png/1200px-Ferencv%C3%A1rosiTClog%C3%B3.png",
          "Hungary",
          "A",
          "Budapeste",
          1,
          62,
          "The FTC's football department, founded in 1900, has a history as the most successful club in Hungary. His nickname among fans is Fradi."
        ),
        new ClubeB(
          6,
          "/slaviaP",
          "Sportovní Klub Slavia Praha",
          "https://www.iol.pt/multimedia/oratvi/multimedia/imagem/id/13294560/",
          "Czech Republic",
          "A",
          "Prague",
          5,
          33,
          "It was founded on May 31, 1892, making it one of the oldest Czech football clubs. Its main rival is Sparta Praga. The classic, considered the biggest rivalry in the country, is known as Derbie S."
        ),
        new ClubeB(
          7,
          "/aek",
          "AEK Futsal Club",
          "https://logoeps.com/wp-content/uploads/2013/07/aek-fc-vector-logo.png",
          "Greece",
          "A",
          "Athens",
          2,
          8,
          "AEK won the first title since the establishment of the department of Futsal at 3 June 2018, after beating 1–0 Olympiada Agia Paraskevi at the 2017–18 Hellenic Cup final."
        ),
        new ClubeB(
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
      ],
    };
  }

  render() {
    return (
      <section className="services" id="services">
        <h1 className="heading">
          <span>C</span>
          <span>L</span>
          <span>U</span>
          <span>B</span>
          <span>S</span>
        </h1>

        <div className="box-container">
          {this.state.clubs.map((club) => (
            <div className="box">
              <i className="fas fa-hotel"></i>
              <Link to={club.path}>
                <img src={club.imgURL} alt="Club logo" width="200" />
              </Link>
              <h3>{club.clubName}</h3>
              <p>{club.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
