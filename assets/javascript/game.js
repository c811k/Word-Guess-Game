//Creates an array that lists out all of the options (nba teams).
var computerChoices = ["lakers", "cavaliers", "celtics", "mavericks", "knicks", "hawks", "bucks", "raptors", "timberwolves", "nets", "bulls", "jazz", "spurs"];

//Creating variables
var userChoices = [];
var userAnswer = [];
var wins = 0;
var losses = 0;
var guesses = 12; 
var sound = new Audio("assets/sounds/nba.mp3");


// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

for(i = 0; i <computerGuess.length; i++) {
    userAnswer[i]= "_";
}

document.getElementById("answer").textContent = userAnswer.join(" ");


//This function is run whenever the user presses a key.
document.onkeyup = function(event) {
    sound.play();
    //
    var userGuess = event.key;
    if(userChoices.includes(userGuess)) {
        return;
    }
    else if(computerGuess.includes(userGuess)) {
        for(i = 0; i < computerGuess.length; i++) {
            if(computerGuess[i] === userGuess) {
                userAnswer[i] = userGuess;
            }        
        }
    }
    else {
        userChoices.push(userGuess);
        guesses--;
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

        if (computerGuess === "lakers") {
            document.getElementById("picture").src = 'assets/images/lakers.jpg';
        }
        else if (computerGuess === "cavaliers") {
            document.getElementById("picture").src = 'assets/images/cavaliers.jpg';
        }
        else if (computerGuess === "celtics") {
            document.getElementById("picture").src = 'assets/images/celtics.jpg';
        }        
        else if (computerGuess === "mavericks") {
            document.getElementById("picture").src = 'assets/images/mavericks.jpg';
        }        
        else if (computerGuess === "knicks") {
            document.getElementById("picture").src = 'assets/images/knicks.jpg';
        }        
        else if (computerGuess === "hawks") {
            document.getElementById("picture").src = 'assets/images/hawks.jpg';
        }
        else if (computerGuess === "bucks") {
            document.getElementById("picture").src = 'assets/images/bucks.jpg';
        }        
        else if (computerGuess === "raptors") {
            document.getElementById("picture").src = 'assets/images/raptors.jpg';
        }        
        else if (computerGuess === "timberwolves") {
            document.getElementById("picture").src = 'assets/images/timberwolves.jpg';
        }        
        else if (computerGuess === "nets") {
            document.getElementById("picture").src = 'assets/images/nets.jpg';
        }
        else if (computerGuess === "jazz") {
            document.getElementById("picture").src = 'assets/images/jazz.jpg';
        }                
        else if (computerGuess === "bulls") {
            document.getElementById("picture").src = 'assets/images/bulls.jpg';
        }
        else if (computerGuess === "spurs") {
            document.getElementById("picture").src = 'assets/images/spurs.jpg';
        }                                     
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        for(i = 0; i <computerGuess.length; i++) {
        userAnswer[i]= "_";
        }

    }
    document.getElementById("wins").textContent = wins;
    document.getElementById("user-choices").textContent = userChoices.join(" ");
    document.getElementById("guesses").textContent = guesses;
    document.getElementById("answer").textContent = userAnswer.join(" ");

    console.log("Wins: " + wins);
    console.log("Losses: " + losses);
    console.log("Answer: " + computerGuess);
    console.log("What you have so far: " + userChoices);
    console.log("Guesses left: " + guesses);
    console.log(userAnswer.join(" "));

};