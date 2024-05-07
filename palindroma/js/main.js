"use strict";

// Asking the user a word
const word = prompt("Inserisci una parola");

// Checking if the word is a palindrome
function palindroma(myWord){

    // Checking if the string is a phrase and converting to lowercase
    let wordToCheck;
    if (myWord.length > 1){
        wordToCheck = myWord.split(" ").join("").toLowerCase();
    } else {
        wordToCheck = myWord.toLowerCase();
    }

    const reverseWord = wordToCheck.split('').reverse().join(''); // trasformo la stringa in array, lo inverto e lo ritrasformo in stringa
    if (reverseWord == wordToCheck){
        return `"${myWord}" è palindroma`;
    } else {
        return `"${myWord}" non è palindroma`;
    }
}

// Printing the answer if the word is not a number
if (isNaN(Number(word))){
    console.log(palindroma(word));
} else {
    console.log("Inserisci una stringa, non un numero");
}