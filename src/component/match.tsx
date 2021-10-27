import React from "react";
import { LMatchB } from "./Infos/liveMatchBase";
interface AppProps {
  //code related to your props goes here
}

interface AppState {
  matchs: LMatchB[];
}

export class LiveMatch extends React.Component {
  render() {
    return "Live Match";
  }
}
