import React from "react";
import { Link } from "react-router-dom";
import { NewsB } from "./Infos/newsBase";
import "./style.css";

interface AppProps {
  //code related to your props goes here
}

interface AppState {
  news: NewsB[];
}

export class News extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      news: [
        new NewsB(
          1,
          "Portugal campeão do mundo de futsal",
          "news deliver by: The amazing Filipe",
          "Seleção portuguesa venceu a Argentina na final do Campeonato do Mundo (2-1). Pany Varela fez os dois golos de Portugal no jogo do adeus de Ricardinho, que regressa com o troféu`mundial e o de melhor jogador da prova. Marcelo Rebelo de Sousa vai receber a comitiva na segunda-feira.",
          "https://www.portugalresident.com/wp-content/uploads/2021/10/img_920x5192021_10_03_21_15_59_1911473.jpg"
        ),
      ],
    };
  }
  render() {
    return (
      <section className="book" id="book">
        <h1 className="heading">
          <span>N</span>
          <span>E</span>
          <span>W</span>
          <span>S</span>
        </h1>

        <div className="row">
          {this.state.news.map((news) => (
            <>
              <div className="image">
                <img src={news.imageUrl} alt="all the news you want" />
              </div>
              <form action="">
                <div className="inputBox">
                  <h3>{news.title}</h3>
                  <h1>{news.description}</h1>
                </div>

                <Link to={"/news1"}>
                  <input type="submit" className="btn" value="Read More" />
                </Link>
              </form>
            </>
          ))}
        </div>
      </section>
    );
  }
}
