/*
GENERATE A RANDOM NUMBER FROM 1 TO 6 FOR EACH PLAYER (PC, USER)
CONFRONT RESULTS TO SET THE WINNER 
*/

// user variable
let uVar = Math.floor(Math.random() * 5 + 1);
console.log(uVar);
// pc variable
let pcVar = Math.floor(Math.random() * 5 + 1);
console.log(pcVar);
// variable to append
const results = document.getElementById('results');


document.getElementById('play').addEventListener('click',

    function() {
        if(uVar === pcVar){
            results.innerHTML = "è un pareggio!";
        }else if(uVar > pcVar){
            results.innerHTML = ("ha vinto l'utente");
        }else {
            results.innerHTML = ('ha vinto il pc!')
        }
    }
)