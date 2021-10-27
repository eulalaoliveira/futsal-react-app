import React from "react";
import "./style.css";
import { Clube } from "./clube";
import { League } from "./league";
import { News } from "./news";
import { Player } from "./player";
import { Video } from "./video";
import { WebDevs } from "./webpage-creators";
import FooterPage from "./footer";
import { Settings } from "./settings";

export class Home extends React.Component {
  render() {
    return (
      <>
        <div>
          <Video />
        </div>
        <div>
          <News />
        </div>
        <div>
          <League />
        </div>
        <div>
          <Clube />
        </div>
        <div>
          <Player />
        </div>
        <div>
          <WebDevs />
        </div>
        <div>
          <Settings />
        </div>
        <div>
          <FooterPage />
        </div>
      </>
    );
  }
}
