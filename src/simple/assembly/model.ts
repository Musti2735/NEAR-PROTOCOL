import { context, u128, PersistentVector} from "near-sdk-as";

//create contract 
@nearBindgen
export class GetPlayer {
  sender: string;
  team:string;
  premium:boolean;
  constructor(team:string) {
    this.sender = context.sender;
    this.premium = context.attachedDeposit >= u128.from('2000000000000000000000000');
    this.team=team;
  }
}
//creat player class. It has name, club and country propeties.
@nearBindgen
export class Player {
  name: string;
  club : string;
  country : string;
  constructor(name: string, club:string, country:string) {
    this.name = name;
    this.club = club;
    this.country = country;
  }
}

export const vec = new PersistentVector<Player>("s")


