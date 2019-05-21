var wins = 0;
var losses = 0;
var list1 = [];
var list2 = [];


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
                }
            }
        } else {
            if (lettersGuessed.indexOf(userGuess) == -1) {
                lettersGuessed.push(userGuess);
                guessesLeft--;
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
            document.getElementById('losses').innerHTML = 'losses: ' + losses;
            newGame();
        }

        if (correctGuess === letters.length) {
            wins++;
            document.getElementById('wins').innerHTML = 'wins: ' + wins;
            document.getElementById('message').innerHTML = 'You won! You guessed: ' + letters.join('');

            newGame();
        }
    }

}

game();