import { context, logging, u128, RNG} from 'near-sdk-core';
import { GetPlayer, vec, Player} from './model';

export function getPlayer(team:string): void {
  const price = new GetPlayer(team); // Creating a new selection with our team parameter
  assert(
    context.attachedDeposit >= u128.from("2000000000000000000000000"), //Creating a warning for attached deposit
    "YOU HAVE TO ATTACH MINUMUM 2 NEAR"
  );
  // condition statements according to the selected team
  if (team=="LIVERPOOL"){
    let itemLiv = liverpool[rand] 
    logging.log("You have selected Liverpool ! ")
    vec.push(itemLiv);  // write the given value at the given key to account (contract) storage
    logging.log(`Seleceted item added storage : ${itemLiv.name} from ${itemLiv.club}`) //show the selected item to user
  }
  else if (team=="PSG"){
    let itemPSG = paris[rand]
    logging.log("You have selected PSG")
    vec.push(itemPSG);  
    logging.log(`Seleceted item added storage : ${itemPSG.name} from ${itemPSG.club}`) 
  }
  else if (team=="MANU"){ 
    let itemManu = manchester[rand]
    logging.log("You have selected Manchester United")
    vec.push(itemManu);  
    logging.log(`Seleceted item added storage : ${itemManu.name} from ${itemManu.club}`) 
  }
  else {
    logging.log("You must select only 'PSG','MANU','LIVERPOOL' !")
  }
}

// create player
 export let messi = new Player("Messi", "PSG", "Argentina")
 export let neymar = new Player("Neymar", "PSG", "Brasil")
 export let verrati = new Player("Verrati", "PSG", "France")
 export let ronaldo = new Player("Ronaldo", "MANU", "Portagal")
 export let pogba = new Player("Pogba","MANU","France")
 export let matic = new Player("Matic","MANU", "Srbia")
 export let salah = new Player("Salah", "LIVERPOOL", "Egypt")
 export let mane = new Player("Mane", "LIVERPOOL", "Senegal")
 export let firmino = new Player("Firminı", "LIVERPOOL", "Brasil")

 // create team
 export let liverpool = [salah, mane, firmino]
 export let manchester = [ronaldo, pogba, matic]
 export let paris = [messi, neymar, verrati]
 
  // using the randomNum() function for random number
 function randomNum(): u32 {
   const rng = new RNG<u32>(1, 3);
   const roll = rng.next();
   return roll
 }
 let rand = randomNum();

 // read the given key from account (contract) storage


 
 