"use strict";

// Asking the user a word
const word = prompt("Inserisci una parola");

// Printing the answer
if (isPalindroma(word)){
    console.log(`"${word}" è palindroma`);
} else {
    console.log(`"${word}" non è palindroma`);
}

isPalindroma(word)

// Checking if the word is a palindrome
function isPalindroma(myWord){

    if (myWord.length === 0) return false;
    if (myWord.length === 1) return true;

    // Checking if the string is a phrase and converting to lowercase
    let wordToCheck;
    if (myWord.length > 1){
        wordToCheck = myWord.split(" ").join("").toLowerCase();
    } else {
        wordToCheck = myWord.toLowerCase();
    }

    /*let reverseWord = "";
    for (let i = myWord.length - 1; i >= 0; i--){
        reverseWord += myWord[i];
    }*/

    let start = 0;
    let end = wordToCheck.length - 1;

    while(start < end){
        if (wordToCheck[start] !== wordToCheck[end]){
            return false;
        }
        start++;
        end--;
    }
    return true
}

