var words = ["galaxy", "stars", "andromeda", "milkyway", "jupiter", "interstellar",
"absent", "solarsystem", "asteroid", "neptune", "mars", "earth",
"mercury", "venus", "pluto", "uranus", "saturn", "sun",
"dwarf", "comet", "planet", "rocket", "quasar", "alien", "apollo",
"neutron", "satellite", "lightyear", "parsec", "astronomy"];

var wins = 0, losses = 0, numGuesses = 20, count = 0, starNum = 1;
var wordIndex = 0;
var displayWord = [], wrongGuesses = [];
var duplicate;

resetGame();
console.log(words[wordIndex]);
document.getElementById("word").innerHTML = displayMysteryWord();

document.onkeyup = function (event) {
    var input = event.key;
    var regExp = new RegExp(input, "gi");
    var placeholder = words[wordIndex];
    if(placeholder.search(/[a-z]|[A-Z]/) != -1){
        if(placeholder.includes(input)){
            duplicate = placeholder.match(regExp);
            for(var i = 0; i < duplicate.length; i++){
                displayWord[placeholder.indexOf(input)] = input;
                placeholder = placeholder.replace(input, " ");
            }
        }
        else{
            if(document.getElementById("wrongLetters").innerHTML.includes(input.toLowerCase(),14)){

            }
            else{
                numGuesses--;
                wrongGuesses.push(input.toLowerCase());
                document.getElementById("wrongLetters").innerHTML = "Wrong letters: " + wrongGuesses;
                var temp = "star" + starNum;
                document.getElementById(temp).style.visibility = "hidden";
                starNum++;
                alert("A star slowly grows colder until it is devoid of all light...")
            }
        }
    }

    updateGame();
}

function updateGame(){
    document.getElementById("word").innerHTML = displayMysteryWord();
    setTimeout
    if(numGuesses <= 0){
        losses++
        resetGame();
    }
    if(!(document.getElementById("word").innerHTML.includes("_"))){
        if(numGuesses > 0){
            wins++;
            resetGame();
        }
    }
    document.getElementById("word").innerHTML = displayMysteryWord();
    document.getElementById("Wins").innerHTML = "Wins: " + wins;
    document.getElementById("Losses").innerHTML = "Losses: " + losses;
    document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + numGuesses;
}

function resetGame(){
    numGuesses = 10;
    wrongGuesses = [], displayWord = [];
    document.getElementById("wrongLetters").innerHTML = "Wrong letters: " + wrongGuesses;
    wordIndex = Math.floor(Math.random()*words.length);
    for(var i = 0; i < words[wordIndex].length; i++){
        displayWord.push(" _ ");
    }
    for(var i = 1; i <= 10; i++){
        var temp = "star" + i;
        document.getElementById(temp).style.visibility = "visible";
    }
    starNum = 1;
}

function displayMysteryWord(){
    var output = "";
    for(var i = 0; i < displayWord.length; i++){
        output += displayWord[i];
    }
    return output;
}
