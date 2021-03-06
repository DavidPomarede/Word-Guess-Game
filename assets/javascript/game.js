var wins = 0;
var losses = 0;
var list1 = [];
var list2 = [];

document.body.style.backgroundImage = "url('assets/images/otr1.jpg')";

var audio1 = new Audio('assets/sounds/otr.mp3');
var audio2 = new Audio('assets/sounds/guess.mp3');
var audio3 = new Audio('assets/sounds/losses.mp3');
var audio4 = new Audio('assets/sounds/miss.mp3');
var audio5 = new Audio('assets/sounds/wins.mp3');

var newGame = function () {
    game();
}

function clearArray1() {
    return list1 = [];
}
function clearArray2() {
    return list2 = [];
}


var game = function () {

    var words = ["old", "town", "road", "horse", "cyrus", "lilnasx", "tractor", "attached", "ride", ]
    var randWord = words[Math.floor(Math.random() * words.length)];
    var letters = randWord.split('');
    var currentWord1 = [];
    var lettersGuessed = [];
    var guessesLeft = 10;
    var letterCount = letters.length;
    var hangCount = [];

    function hangMan() {
        hangCount++;
        var hangmanTally = "hangman" + hangCount;
        document.getElementById(hangmanTally).setAttribute("class", "visibleClass");
    }

// I kept trying to replace this function with a "for" loop, but it ended up screwing things up
// so I kept hangManReset function as follows:

    function hangManReset() {
        hangCount = [];
        document.getElementById("hangman1").setAttribute("class", "invisibleClass");
        document.getElementById("hangman2").setAttribute("class", "invisibleClass");
        document.getElementById("hangman3").setAttribute("class", "invisibleClass");
        document.getElementById("hangman4").setAttribute("class", "invisibleClass");
        document.getElementById("hangman5").setAttribute("class", "invisibleClass");
        document.getElementById("hangman6").setAttribute("class", "invisibleClass");
        document.getElementById("hangman7").setAttribute("class", "invisibleClass");
        document.getElementById("hangman8").setAttribute("class", "invisibleClass");
        document.getElementById("hangman9").setAttribute("class", "invisibleClass");
        document.getElementById("hangman10").setAttribute("class", "invisibleClass");
    }

    for (var k = 0; k < randWord.length; k++) {

        currentWord1.push('_ ');

        document.getElementById('currentWord').innerHTML = currentWord1.join(' ');

    }

    document.getElementById('attemptsLeft').innerHTML = guessesLeft;

    document.onkeyup = function (event) {

        var userGuess = event.key;

        if (letters.indexOf(userGuess) > -1) {

            for (var i = 0; i < letterCount; i++) {
                if (letters[i] === userGuess) {
                    currentWord1[i] = userGuess;
                    guessesLeft--;
                    document.getElementById('currentWord').innerHTML = currentWord1.join(' ');
                    document.getElementById('attemptsLeft').innerHTML = guessesLeft;
                    audio2.play();
                    hangMan();
                }
            }

        } else {
            if (lettersGuessed.indexOf(userGuess) == -1) {
                lettersGuessed.push(userGuess);
                guessesLeft--;
                audio4.play();
                list1.push(userGuess + " ");
                for (l = 0; l < list1.length; l++) {
                    list2[l] = list1[l].toUpperCase();
                }
                document.getElementById('attemptsLeft').innerHTML = guessesLeft;
                document.getElementById('guessedLetters').innerHTML = list2.join(' ');
                document.getElementById('guessedLetters').style.visibility='visible';
                hangMan();
            }

        }

        if (guessesLeft === 0) {
            hangManReset();
            document.getElementById("message").innerHTML = 'You lost! the word was: ' + letters.join('');
            losses++;
            document.getElementById('losses').innerHTML = 'losses: ' + losses;
            document.getElementById('guessedLetters').style.visibility='hidden';
            audio3.play();
            clearArray1();
            clearArray2();

            newGame();
        }

        if (currentWord1.join('') == randWord) {
            hangManReset();
            wins++;
            document.getElementById('wins').innerHTML = 'wins: ' + wins;
            document.getElementById('message').innerHTML = 'You won! You guessed: ' + letters.join('');
            document.getElementById('guessedLetters').style.visibility='hidden';
            audio1.play();
            clearArray1();
            clearArray2();

            newGame();
            
        }
        console.log(currentWord1.join(''));
        console.log(randWord.split());
    }
}

game();