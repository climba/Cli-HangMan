// Require the necessary files and packages
var Word = require('./word.js');
var inquirer = require('inquirer');
var randomWords = require('random-words');
var random = require('lodash.random');


var rando = randomWords({exactly:30, wordsPerString:1, formatter: (word, index)=> {
  return index === 0 ? word.slice(0,1).toLowerCase().concat(word.slice(1)) : word;
}})

// console.log(rando);

// Array to hold all the possible words to guess
// var guessWords = [ 'Inside','Crack','Mainly','Pleasant','Outside','Equipment','Government','Came','Underline','May','Nine','Enter','Love','Happily','Difference','Describe','Experience','Itself','Enough','Smooth','Trace','Writer','Identity','Any','Yesterday','Military','Consonant','Shadow','Somebody','Brick' ]

// Get the number of words in the array
var arrLength = rando.length;

console.log(arrLength);

// Math function to get length of array and times it by a random number
var wordToGuess = rando[Math.floor(Math.random() * rando.length)];

console.log(wordToGuess);



// Use random number to pick the word


// Once word is selected loop through it and count how many letters are in that word



// Print out the correct number of underscores according to the words length