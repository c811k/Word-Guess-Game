//Creates an array that lists out all of the options (nba teams).
var computerChoices = ["lakers", "rockets", "celtics", "warriors", "knicks", "bucks", "raptors", "timberwolves", "clippers", "jazz", "spurs"];

//Creating variables
var userChoices = [];
var userAnswer = [];
var wins = 0;
var losses = 0;
var guesses = 12; 

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);

for(i = 0; i <computerGuess.length; i++) {
    userAnswer[i]= "_";
}

//This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    
    var userGuess = event.key;

    if(userChoices.includes(userGuess)) {
        return;
    }
    else {
        userChoices.push(userGuess);
    }
    

    for(i = 0; i < computerGuess.length; i++) {
        if(computerGuess[i] === userGuess) {
            userAnswer[i] = userGuess;
        }        
    }
    if(userGuess !== computerGuess) {
        guesses--;
    }
    

    console.log("User Choices: " + userChoices);
    // var letter = computerGuess.search(userGuess);
    
    // if(letter >= 0) {
    //     userAnswer[letter] = userGuess;
    // }
   
    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    console.log("Answer: " + computerGuess);
    console.log("What you have so far: " + userChoices);
    console.log("Guesses left: " + guesses);
    userAnswer.join('');
    console.log("User Answer: " + userAnswer.join(" "));

};