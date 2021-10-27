/*
GENERATE A RANDOM NUMBER FROM 1 TO 6 FOR EACH PLAYER (PC, USER)
CONFRONT RESULTS TO SET THE WINNER 
*/

//variable to get elements
let pcPoint = document.getElementById('pc-points');
let uPoint = document.getElementById('u-points');
const results = document.getElementById('results');

//create click event
document.getElementById('play').addEventListener("click", varCheck);

//create function on click event
function varCheck() {
    
    //variables to randomly pick a number for each player
    let pcVar = Math.floor(Math.random() * 6 + 1);
    let uVar = Math.floor(Math.random() * 6 + 1);
    
    //print value in html
    uPoint.innerHTML = (`<h3> ${uVar} </h3>`);
    pcPoint.innerHTML = (`<h3> ${pcVar} </h3>`);
    
    //condition
    if(uVar === pcVar){
         results.innerHTML = "è un pareggio!";
     }else if(uVar > pcVar){
         results.innerHTML = ("ha vinto l'utente");
     }else {
         results.innerHTML = ('ha vinto il pc!');
     }
  }