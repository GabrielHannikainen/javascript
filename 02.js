/*
Gabriel Hännikäinen
20.10.2026
Ülesanne 2
*/

// kellaaeg

let tund = 10;
let min = 30;
let sek = 45;

console.log(`Kell on ${tund}:${min}:${sek}`);

// tsitaat

let tsitaat = "Tarkus on kogemuse tütar";
console.log(tsitaat + " - Leonardo da Vinci");

//mallid
let ees = "Gabriel"
let taga = "Hännikäinen"

console.log(`minu nimi on ${ees.substring(0, 1)} ${taga.substring(0, 1)}`);

//perenime pikkus

let perenimi = "Hännikäinen" , eesnimi = "Gabriel";
console.log(`${perenimi.length} ${eesnimi.length}`);

// eposti muutmine

let epost = "Gabriel@hkhk.ee"
console.log(`${epost.replace("hkhk.ee", "gmail.com")}`);

// andmerida analüüs
let andmerida = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175"
let osad = andmerida.split(",");
console.log(`${osad[5]} , ${osad[3]} sugu: ${osad[4]}`);
