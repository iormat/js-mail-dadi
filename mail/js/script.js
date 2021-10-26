/*
ASK USER EMAIL,
CHECK IF IN LIST OF APPROVED USERS
PRINT MESSAGE TO SHOW IF APPROVED OR NOT
*/

// array
const mailingList = ["pincopanco@doe.it", "pancopinco@doe.it", "pincopanco@doe.com", "pancopinco@doe.com",];
// variable of user input
let uMail = prompt("Qual è la tua email?");
// variable validity
const valid = document.getElementById('positive');
const invalid = document.getElementById('negative');

// create condition
if(mailingList.includes(uMail)){
    valid.append("la tua mail è presente!");
    console.log(uMail + "ok");
}else {
    valid.append("Mi spiace, ma non sei stato invitato!");
}