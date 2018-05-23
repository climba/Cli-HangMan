// Get the letter object
var Letter = require("./letter.js");

// Construct the word
var Word = function(word) {
  var lettersInWord = []; // Holds all the letters in the word
  var string = "";

  for (var i = 0 ; i < word.length; i++) {
    var newLetter = new Letter(word[i]); // Create a new object for the specific letter in the word
    lettersInWord.push(newLetter); // Push the object to the empty array
  }

  this.printToScreen = function() {
    string = "";
    for (var i = 0; i < lettersInWord.length; i++) {
      string += lettersInWord[i].printLetter() + " ";
    }
    console.log(string);
    return string;
  }

    // Function to check whether the guessed letter matches an underlying character; if so, reveal it
    this.guess = function(char) {
      for (var i=0; i < lettersInWord.length; i++) {
        lettersInWord[i].checker(char);
      }
    }

}

// Export the object to be used by other files
module.exports = Word;