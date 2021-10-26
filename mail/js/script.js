/*
ASK USER EMAIL,
CHECK IF IN LIST OF APPROVED USERS
PRINT MESSAGE TO SHOW IF APPROVED OR NOT
*/

// array
const mailingList = ["pincopanco@doe.it", "pancopinco@doe.it", "pincopanco@doe.com", "pancopinco@doe.com",];
console.log("Queste sono le mail accettate: " + mailingList);
// variable of user input
let uMail = prompt("Qual è la tua email?");
// variable validity
const valid = document.getElementById('positive');
const invalid = document.getElementById('negative');

// create condition
// if(mailingList.includes(uMail)){
//     valid.append("la tua mail è presente!");
//     console.log(uMail + "ok");
// }else {
//     invalid.append("Mi spiace, ma non sei stato invitato!");
// }

//create cycle to get also array position if true
let x = false;

for(let i = 0; i < mailingList.length; i++) {
    if(uMail === mailingList[i]){
        console.log(`${uMail} trovata in posizione: ${i}`)
        x = true;
    }
}

if(x === true){
    valid.append("la tua mail è presente!");
}else {
    invalid.append("Mi spiace, ma non sei stato invitato!");
}