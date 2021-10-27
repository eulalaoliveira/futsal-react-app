/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { PlayerB } from "./Infos/playersBase";
import { Link } from "react-router-dom";
import "./style.css";
import playerImg from "./images/Filipe.png";
import axios from "axios";

interface AppProps {
  //code related to your props goes here
}

interface AppState {
  players: PlayerB[];
}

export class Player extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      players: [
        new PlayerB(
          1,
          "/ricardinho",
          "Ricardinho",
          "https://static.globalnoticias.pt/oj/image.jpg?brand=OJ&type=generate&guid=f3c662f0-3ffb-4dac-817e-60a61ea43d67&w=768&h=512&t=20210822145749",
          "Portugal",
          36,
          "No club at the moment",
          "Winger",
          9,
          31,
          8,
          "Consider for the most, the best futsal player ever winning more than 5 times the best futsal player award!"
        ),
        new PlayerB(
          2,
          "/ferrao",
          "Ferrao",
          "https://s2.glbimg.com/8iePpvC4e_QvTFSUYHh1SSIJFh0=/0x0:750x468/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/v/7/9BaD7BRBaQwBI5xhjDxQ/ferrao.jpg",
          "Brazil",
          30,
          "Barcelona",
          "Target",
          1,
          7,
          3,
          "Born in Brazil and play in Spain for Barcelona, a world class player and one of the bests in the world at his position."
        ),
        new PlayerB(
          3,
          "/falcao",
          "Falcao",
          "https://www.revistasuplementacao.com.br/_client/materia/5d235fbacc9b2.jpg",
          "Brazil",
          44,
          "Retired from futsal",
          "Winger",
          14,
          21,
          5,
          "For most the best player ever in futsal, adored by everyone and despite not leaving brazil in the international level he show everyone the world class player that he is."
        ),
        new PlayerB(
          4,
          "/panat",
          "Panat Kittipanuwong",
          "https://media.gettyimages.com/photos/panat-kittipanuwong-from-thailand-in-action-during-the-aff-futsal-picture-id633074840",
          "Thailand",
          23,
          "Chonburi Bluewave",
          "Winger",
          5,
          3,
          0,
          "A young talented player that plays in thailand, consider for many one of the futsal players to see in this new generation."
        ),
        new PlayerB(
          5,
          "/bayu",
          "Bayu Saptaji",
          "https://www.aseanfootball.org/v3/wp-content/uploads/2019/09/Bayu-Saptaji-4.jpg",
          "Indonesia",
          29,
          "Halus FC",
          "Winger",
          0,
          0,
          0,
          "One of the best asian futsal players at the moment and one of the most popular futsal players in social media."
        ),
        new PlayerB(
          6,
          "/rodrigo",
          "Rodrigo Araújo",
          "https://www.playmakerstats.com/img/geral/674531_med_.png.png",
          "Brazil",
          37,
          "Magnus Futsal",
          "Fixed Defender",
          5,
          7,
          0,
          "One the best futsal defenders in the worlds, never leave the brasilian competion, but no needs, is incredible abilities can be seen at the international level."
        ),
        new PlayerB(
          7,
          "/tayebi",
          "Houssen Tayebi",
          "https://media.slbenfica.pt/-/media/benficadp/images/departamento-de-comunicacao/2020/modalidades-de-pavilhao/futsal/masculino/jogadores/tayebi/novas/janeiro/12/tayebi-benfica-1-new.jpg?h=725&w=1208&v=637460501920000000&hash=F7CCC465E83E9C7F672AEEB2070BD671",
          "Iran",
          33,
          "Benfica",
          "Winger & Target",
          2,
          14,
          0,
          "Probably the best iran futsal player ever, playing in one of the most competitive clubs in europe."
        ),
        new PlayerB(
          8,
          "/filipe",
          "Filipe",
          playerImg,
          "Portugal",
          22,
          "Vila Nova de Sande",
          "Winger",
          0,
          0,
          0,
          "Play until is 18 years with CSCDRVNS in the Braga Futsal Federation, stoped 4 years and now return to the same club trying for the first time playing in a seniour level."
        ),
        new PlayerB(
          9,
          "guitta",
          "Guitta",
          "https://cdn-images.rtp.pt/icm/noticias/images/40/4072561c59dac1ae63ac688d48135f9d?w=860&q=90&rect=0,18,1224,671",
          "Brazil",
          34,
          "Sporting",
          "Goalkeeper",
          4,
          8,
          1,
          "For many the best futsal goalkeeper at the moment, already win all the trophys that he could wish for!"
        ),
        new PlayerB(
          10,
          "/zicky",
          "Zikcy Té",
          "https://cdn.record.pt/images/2021-05/img_920x518$2021_05_03_21_19_25_1845685.jpg",
          "Born in Guiné, Portuguese internacional",
          20,
          "Sporting",
          "Target",
          2,
          4,
          0,
          "Consider in the last UEFA Futsal Champions the best youngster, one of the most promissing players of all times. With is age already an international player and playing a lot of games as an essencial player!"
        ),
        new PlayerB(
          11,
          "/varela",
          "Panny Varela",
          "https://www.iol.pt/multimedia/oratvi/multimedia/imagem/id/6159f8dd0cf241cadce11d36/1024",
          "Born in Cabo Verde, Portuguese internacional",
          32,
          "Sporting",
          "winger",
          5,
          18,
          0,
          "If portugal wins the world futsal cup they need to congrat this player, the top scorer for portugal and one of the best in the world!"
        ),
        new PlayerB(
          12,
          "/lozano",
          "Sergio Lozano",
          "https://as01.epimg.net/masdeporte/imagenes/2021/01/16/polideportivo/1610810211_805491_1610810356_noticia_normal_recorte1.jpg",
          "Spain",
          32,
          "Barcelona",
          "winger",
          4,
          16,
          1,
          "In the top ten of the best football players of all time!"
        ),
      ],
    };
    const headers = {
      "Content-Type": "application/json",
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "a276bcbfef6421e225210e1f11e7d26d",
    };

    axios
      .get("https://v3.football.api-sports.io/players?id=276&season=2021", {
        headers: headers,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <section className="gallery" id="gallery">
        <h1 className="heading">
          <span>P</span>
          <span>L</span>
          <span>A</span>
          <span>Y</span>
          <span>E</span>
          <span>R</span>
          <span>S</span>
        </h1>

        <div className="box-container">
          {this.state.players.map((player) => (
            <Link to={player.routePath}>
              <div className="box">
                <img src={player.imgURL} alt="Ricardinho" />
                <div className="content">
                  <h3>{player.playerName}</h3>
                  <p>{player.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
  }
}
