var wins = 0;
var losses = 0;
var list1 = [];
var list2 = [];
var audio1 = new Audio('assets/sounds/otr.mp3');
var audio2 = new Audio('assets/sounds/guess.mp3');
var audio3 = new Audio('assets/sounds/losses.mp3');
var audio4 = new Audio('assets/sounds/miss.mp3');
var audio5 = new Audio('assets/sounds/wins.mp3');

var newGame = function () {
    game();
}


var game = function () {


    var words = ["old", "town", "road", "horse", "cyrus", "nasx", "tractor"]
    var randWord = words[Math.floor(Math.random() * words.length)];
    var letters = randWord.split('');
    var currentWord = [];
    var lettersGuessed = [];
    var guessesLeft = 10;
    var letterCount = letters.length;
    var correctGuess = 0;


    for (var i = 0; i < randWord.length; i++) {

        currentWord.push('_ ');

        document.getElementById('currentWord').innerHTML = currentWord.join('');

    }

    document.onkeyup = function (event) {

        var userGuess = event.key;

        if (letters.indexOf(userGuess) > -1) {

            for (var i = 0; i < letterCount; i++) {
                if (letters[i] === userGuess) {
                    currentWord[i] = userGuess;
                    document.getElementById('currentWord').innerHTML = currentWord.join('');
                    correctGuess++;
                    audio2.play();
                }
            }
        } else {
            if (lettersGuessed.indexOf(userGuess) == -1) {
                lettersGuessed.push(userGuess);
                guessesLeft--;
                audio4.play();
                list1.push(userGuess + " ");
                for (j = 0; j < list1.length; j++) {
                    list2[j] = list1[j].toUpperCase();
                }
            }
            document.getElementById('attemptsLeft').innerHTML = guessesLeft;
            document.getElementById('guessedLetters').innerHTML = list2.join("");
        }

        if (guessesLeft === 0) {
            document.getElementById("message").innerHTML = 'You lost! the word was: ' + letters.join('');
            losses++;
            audio3.play();
            document.getElementById('losses').innerHTML = 'losses: ' + losses;
            newGame();
        }

        if (correctGuess === letters.length) {
            wins++;
            document.getElementById('wins').innerHTML = 'wins: ' + wins;
            document.getElementById('message').innerHTML = 'You won! You guessed: ' + letters.join('');
            audio1.play();
            newGame();
        }
    }

}

game();