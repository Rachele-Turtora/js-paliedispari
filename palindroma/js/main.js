"use strict";

// Asking the user a word
const word = prompt("Inserisci una parola");

// Checking if the word is a palindrome
function palindroma(myWord){
    const reverseWord = myWord.split('').reverse().join(''); // trasformo la stringa in array, lo inverto e lo ritrasformo in stringa
    if (reverseWord == myWord){
        return `${myWord} è palindroma`;
    } else {
        return `${myWord} non è palindroma`;
    }
}

// Printing the answer
console.log(palindroma(word));