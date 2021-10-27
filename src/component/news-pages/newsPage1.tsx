import React from "react";
import { Link } from "react-router-dom";
import { NewsB } from "../Infos/newsBase";
import "../style.css";

interface AppProps {
  //code related to your props goes here
}

interface AppState {
  news: NewsB;
}

export class News1 extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      news: new NewsB(
        1,
        "Portugal campeão do mundo de futsal",
        "The amazing Filipe",
        "Seleção portuguesa venceu a Argentina na final do Campeonato do Mundo (2-1). Pany Varela fez os dois golos de Portugal no jogo do adeus de Ricardinho, que regressa com o troféu`mundial e o de melhor jogador da prova. Marcelo Rebelo de Sousa vai receber a comitiva na segunda-feira.",
        "https://www.portugalresident.com/wp-content/uploads/2021/10/img_920x5192021_10_03_21_15_59_1911473.jpg"
      ),
    };
  }

  render() {
    return (
      <section id="news">
        <div className="news-text">
          <h2> &#9917; {this.state.news.title}</h2>
          <p>
            <strong>news deliver by:</strong> {this.state.news.subTitle}
          </p>
        </div>

        <div className="about-img">
          <img alt="model" src={this.state.news.imageUrl} width="60%" />
        </div>

        <div className="news-text">
          <p>{this.state.news.description}</p>
          <Link to={"/news"}>
            <button>More News</button>
          </Link>
        </div>
      </section>
    );
  }
}
