export class LeagueB {
  id: number;
  path: string;
  leagueName: string;
  imgURL: string;
  matchLive: string;
  leagueDescrip: string;

  constructor(
    id: number,
    path: string,
    leagueName: string,
    imgURL: string,
    matchLive: string,
    leagueDescrip: string
  ) {
    this.id = id;
    this.path = path;
    this.leagueName = leagueName;
    this.imgURL = imgURL;
    this.matchLive = matchLive;
    this.leagueDescrip = leagueDescrip;
  }
}
