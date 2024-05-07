"use strict";

// Asking the user
const userChoice = prompt("Scegli pari o dispari");
const userNumber = prompt("Scegli un numero da 1 a 5");

// Generating random computer number
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
const computerNumber = getRndInteger(1, 6);

// Adding the numbers
const sum = Number(userNumber) + Number(computerNumber);

// Checking if the sum is even or odd
function evenOdd(mySum){
    if (mySum % 2 == 0){
        return "pari";
    } else {
        return "dispari";
    }
}

console.log("Hai scelto: ", userChoice);
console.log("Il tuo numero è: ", userNumber);
console.log("Il numero del computer è: ", computerNumber);
console.log("La somma è: ", sum);

// Declaring the winner
if (userChoice == evenOdd(sum)){
    console.log("Hai vinto!");
} else {
    console.log("Ha vinto il computer!");
}
