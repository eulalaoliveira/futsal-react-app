export class PlayerB {
  id: number;
  routePath: string;
  playerName: string;
  imgURL: string;
  country: string;
  age: number;
  clubName: string;
  position: string;
  internationalCompetions: number;
  nationalCompetions: number;
  playerAwards: number;
  description: string;
  constructor(
    id: number,
    routePath: string,
    playerName: string,
    imgURL: string,
    country: string,
    age: number,
    clubName: string,
    position: string,
    internationalCompetions: number,
    nationalCompetions: number,
    playerAwards: number,
    description: string
  ) {
    this.id = id;
    this.routePath = routePath;
    this.playerName = playerName;
    this.imgURL = imgURL;
    this.country = country;
    this.age = age;
    this.clubName = clubName;
    this.position = position;
    this.internationalCompetions = internationalCompetions;
    this.nationalCompetions = nationalCompetions;
    this.playerAwards = playerAwards;
    this.description = description;
  }
}
