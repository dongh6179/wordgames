var words = ["akali", "dog", "needle", "baseball", "partner", "manager",
"absent", "digital", "transmission", "welcome", "context", "command",
"contradiction", "dare", "owl", "preference", "respectable", "snatch",
"advance", "organ", "direction", "spectrum", "surgeon", "wheel", "generation",
"maximum", "adult", "art", "pierce", "kit", "tablet", "necklace", "incentive", "Supercalifragilisticexpialidocious"];

var wins = 0, losses = 0, numGuesses = 20, count = 0;
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
            }
        }
    }

    document.getElementById("word").innerHTML = displayMysteryWord();
    console.log(input);
    console.log(numGuesses);
    updateGame();
}

function updateGame(){
    if(!(document.getElementById("word").innerHTML.includes("_"))){
        if(numGuesses > 0){
            wins++;
        }
        else{
            losses++;
        }
    }
}

function resetGame(){
    numGuesses = 20;
    wrongGuesses = [];
    wordIndex = Math.floor(Math.random()*words.length);
    for(var i = 0; i < words[wordIndex].length; i++){
        displayWord.push(" _ ");
    }
}

function displayMysteryWord(){
    var output = "";
    for(var i = 0; i < displayWord.length; i++){
        output += displayWord[i];
    }
    return output;
}
