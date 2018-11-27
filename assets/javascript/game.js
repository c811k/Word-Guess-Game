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

for(i = 0; i <computerGuess.length; i++) {
    userAnswer[i]= "_";
}
document.getElementById("answer").textContent = userAnswer.join(" ");

//This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    
    //
    var userGuess = event.key;
    if(userChoices.includes(userGuess)) {
        return;
    }
    else {
        userChoices.push(userGuess);
        guesses--;
    }
    
    //
    for(i = 0; i < computerGuess.length; i++) {
        if(computerGuess[i] === userGuess) {
            userAnswer[i] = userGuess;
        }        
    }

    //
    if(guesses === 0) {
        losses++;
        guesses = 12;
        userAnswer = [];
        userChoices = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        for(i = 0; i <computerGuess.length; i++) {
            userAnswer[i]= "_";
        }
    
    }
    else if (userAnswer.includes("_") === false) {
        wins++;
        guesses = 12;
        userAnswer = [];
        userChoices = [];
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        for(i = 0; i <computerGuess.length; i++) {
        userAnswer[i]= "_";
        }

    }
    document.getElementById("wins").textContent = wins;
    document.getElementById("user-choices").textContent = userChoices;
    document.getElementById("guesses").textContent = guesses;
    document.getElementById("answer").textContent = userAnswer.join(" ");

    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    console.log("Answer: " + computerGuess);
    console.log("What you have so far: " + userChoices);
    console.log("Guesses left: " + guesses);
    console.log(userAnswer.join(" "));

};