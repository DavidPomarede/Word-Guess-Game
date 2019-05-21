var wins = 0;
var losses = 0;

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

        if ((letters.indexOf(userGuess) > -1) && (lettersGuessed.indexOf(userGuess) < 0)) {

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
            }
            document.getElementById('attemptsLeft').innerHTML = guessesLeft;
            document.getElementById('guessedLetters').innerHTML = lettersGuessed + ' ';
        }

        if (correctGuess === letters.length) {
            wins++;
            document.getElementById('wins').innerHTML = 'wins: ' + wins;
            document.getElementById('message').innerHTML = 'You won! You guessed: ' + letters.join('');

            newGame();
        }

        if (guessesLeft === 0) {
            document.getElementById("message").innerHTML = 'You lost! the word was: ' + letters.join('');
            losses++;
            document.getElementById('losses').innerHTML = 'losses: ' + losses;
            newGame();
        }
    }

}

game();