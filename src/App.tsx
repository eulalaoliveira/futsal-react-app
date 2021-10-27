import React from "react";
import "./component/style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//components
import { Clube } from "./component/clube";
import { League } from "./component/league";
import { LiveMatch } from "./component/match";
import { News } from "./component/news";
import { Player } from "./component/player";
import { WebDevs } from "./component/webpage-creators";
import FooterPage from "./component/footer";
import { Home } from "./component/homePage";
import { MyOwnNavbar } from "./component/navbar";
import { Settings } from "./component/settings";
import { Video } from "./component/video";
//players pages
import { Ricardinho } from "./component/players-pages/ricardinhoPage";
import { Falcao } from "./component/players-pages/falcaoPage";
import { Filipe } from "./component/players-pages/filipePage";
import { Rodrigo } from "./component/players-pages/rodrigoPage";
import { Bayu } from "./component/players-pages/bayuPage";
import { Ferrao } from "./component/players-pages/ferraoPage";
import { Panat } from "./component/players-pages/panatPage";
import { Tayebi } from "./component/players-pages/tayebiPage";
import { Guitta } from "./component/players-pages/guittaPage";
import { Zicky } from "./component/players-pages/zickyPage";
import { Varela } from "./component/players-pages/panyPage";
import { Lozano } from "./component/players-pages/lozanoPage";
//leagues pages
import { LFCP } from "./component/league-pages/bestLeaguePage";
import { SLR } from "./component/league-pages/brazilianLeaguePage";
import { Placard } from "./component/league-pages/portugueseLeaguePage";
import { LNF } from "./component/league-pages/russiaLeaguePage";
//news pages
import { News1 } from "./component/news-pages/newsPage1";
//clubs pages
import { Boca } from "./component/club-pages/bocajuniorsPage";
import { Corinthians } from "./component/club-pages/corinthiansPage";
import { Sporting } from "./component/club-pages/sportingPage";
import { Benfica } from "./component/club-pages/benficaPage";
import { Ferencvaros } from "./component/club-pages/ferencvarosPage";
import { SlaviaPraga } from "./component/club-pages/slaviaPage";
import { AEK } from "./component/club-pages/aekPage";
import { VNS } from "./component/club-pages/vnsPage";

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MyOwnNavbar />
        <div>
          <Switch>
            {/* normal page route*/}
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/video">
              <Video />
              <FooterPage />
            </Route>
            <Route exact path="/club">
              <Clube />
              <FooterPage />
            </Route>
            <Route exact path="/leagues">
              <League />
              <FooterPage />
            </Route>
            <Route exact path="/live-match">
              <LiveMatch />
              <FooterPage />
            </Route>
            <Route exact path="/player">
              <Player />
              <FooterPage />
            </Route>
            <Route exact path="/news">
              <News />
              <FooterPage />
            </Route>
            <Route exact path="/us">
              <WebDevs />
              <FooterPage />
            </Route>
            <Route exact path="/form">
              <Settings />
              <FooterPage />
            </Route>
            <Route exact path="/footer">
              <FooterPage />
            </Route>
            {/* players routes*/}
            <Route exact path="/ricardinho">
              <Ricardinho />
              <FooterPage />
            </Route>
            <Route exact path="/falcao">
              <Falcao />
              <FooterPage />
            </Route>
            <Route exact path="/filipe">
              <Filipe />
              <FooterPage />
            </Route>
            <Route exact path="/rodrigo">
              <Rodrigo />
              <FooterPage />
            </Route>
            <Route exact path="/bayu">
              <Bayu />
              <FooterPage />
            </Route>
            <Route exact path="/ferrao">
              <Ferrao />
              <FooterPage />
            </Route>
            <Route exact path="/panat">
              <Panat />
              <FooterPage />
            </Route>
            <Route exact path="/tayebi">
              <Tayebi />
              <FooterPage />
            </Route>
            <Route exact path="/guitta">
              <Guitta />
              <FooterPage />
            </Route>
            <Route exact path="/zicky">
              <Zicky />
              <FooterPage />
            </Route>
            <Route exact path="/varela">
              <Varela />
              <FooterPage />
            </Route>
            <Route exact path="/lozano">
              <Lozano />
              <FooterPage />
            </Route>
            {/* news routes*/}
            <Route exact path="/news1">
              <News1 />
              <FooterPage />
            </Route>
            {/* leagues routes*/}
            <Route exact path="/fafe">
              <LFCP />
              <FooterPage />
            </Route>
            <Route exact path="/russiaL">
              <SLR />
              <FooterPage />
            </Route>
            <Route exact path="/placard">
              <Placard />
              <FooterPage />
            </Route>
            <Route exact path="/brazilL">
              <LNF />
              <FooterPage />
            </Route>
            {/* clubs routes*/}
            <Route exact path="/bocaJ">
              <Boca />
              <FooterPage />
            </Route>
            <Route exact path="/corinthians">
              <Corinthians />
              <FooterPage />
            </Route>
            <Route exact path="/sporting">
              <Sporting />
              <FooterPage />
            </Route>
            <Route exact path="/benfica">
              <Benfica />
              <FooterPage />
            </Route>
            <Route exact path="/ferencvaros">
              <Ferencvaros />
              <FooterPage />
            </Route>
            <Route exact path="/slaviaP">
              <SlaviaPraga />
              <FooterPage />
            </Route>
            <Route exact path="/aek">
              <AEK />
              <FooterPage />
            </Route>
            <Route exact path="/vns">
              <VNS />
              <FooterPage />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
