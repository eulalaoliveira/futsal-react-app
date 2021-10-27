export class ClubeB {
  id: number;
  path: string;
  clubName: string;
  imgURL: string;
  country: string;
  division: string;
  city: string;
  rankingPosition: number;
  clubAwards: number;
  description: string;
  constructor(
    id: number,
    path: string,
    clubName: string,
    imgURL: string,
    country: string,
    division: string,
    city: string,
    rankingPosition: number,
    clubAwards: number,
    description: string
  ) {
    this.id = id;
    this.path = path;
    this.clubName = clubName;
    this.imgURL = imgURL;
    this.country = country;
    this.division = division;
    this.city = city;
    this.rankingPosition = rankingPosition;
    this.clubAwards = clubAwards;
    this.description = description;
  }
}
