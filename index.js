// Require the necessary files and packages
var Word = require('./word.js');
var inquirer = require('inquirer');



// Array to hold all the possible words to guess
// var guessWords = [ 'Inside','Crack','Mainly','Pleasant','Outside','Equipment','Government','Came','Underline','May','Nine','Enter','Love','Happily','Difference','Describe','Experience','Itself','Enough','Smooth','Trace','Writer','Identity','Any','Yesterday','Military','Consonant','Shadow','Somebody','Brick' ]
var guessWords = [ 'Inside' ]

// Global Variables

var wordToGuess;
var guesses = 0;
var wins = 0;
var attemptedGuesses = [];
var word;

console.log("Welcome to the game!");

function initGame() {
  guesses = 15;
  wordToGuess = guessWords[Math.floor(Math.random() * guessWords.length)];
  word = new Word(wordToGuess);

}

// Function to generate a random word and create a new word object per each round
function resetGame() {
  wordToGuess = guessWords[Math.floor(Math.random() * guessWords.length)].toLowerCase();
  word = new Word(wordToGuess);
  word.printToScreen();
}

initGame(); // Initialize game
word.printToScreen();

function game() {
  if (guesses > 0) {
    inquirer
      .prompt([
        {
          type: "input",
          name: "guess",
          message: "Guess a letter:"
        }
      ]).then(function(res) {
        if (attemptedGuesses.indexOf(res.game) === -1) {
          attemptedGuesses.push(res.guess);

          if (wordToGuess.indexOf(res.guess) === -1) {
            guesses--;
          }

         // Pass the user's guess to the object to check whether it exists in the word
         word.guess(res.guess);
         console.log("Guesses remaining: " + guesses + "\n");
       } else {
         // If user picks the same letter twice, do not decrement the guesses but just alert the user to guess again.
         console.log("You already guessed that letter. Try again!");
       }

       var response = word.printToScreen().trim().toLowerCase(); // Prep the word to compare with the original word
       var trimmedString = response.split(" ");
       
       // Checks whether the user has guessed the entire word
       if ( trimmedString.toString() === wordToGuess.split("").toString()) {
         wins++; // Increment the wins counter and log to the screen
         console.log("CORRECT!" + " WINS: " + wins);
         console.log("Next word!\n");
         
         resetGame();  // Starts the next round by picking a new random word and creating a new word object
         guessedLetters = []; // Empty out the guessed letters array
       }

       game(); // Recursively call the game() function
   }); 
 } else {
   // Else, game is over!
   console.log("Game over!");

   // Ask whether the user would like to play again
   inquirer
     .prompt([{
       type: "confirm",
       name: "startAgain",
       message: "Would you like to play again?"
     }])
     .then(function(res) {
       if (res.startAgain) {
        initGame();  // Prep a new game if the user selects 'yes'

         // Re-declare variables 
         guessedLetters = [];
         wins = 0;
         word = new Word(wordToGuess);
         word.printToScreen();

         game(); 
       }
       else {
         return; 
       }
     });
 }
}

game(); 