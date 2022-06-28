var words = ["akali", "dog", "needle", "baseball", "partner", "manager",
"absent", "digital", "transmission", "welcome", "context", "command",
"contradiction", "dare", "owl", "preference", "respectable", "snatch",
"advance", "organ", "direction", "spectrum", "surgeon", "wheel", "generation",
"maximum", "adult", "art", "pierce", "kit", "tablet", "necklace", "incentive", "Supercalifragilisticexpialidocious"];

var wins = 0, losses = 0, numGuesses = 0, count = 0;
var wordIndex = 0;
var displayWord = "";

resetGame();

document.onkeyup = function (event) {
    var input = event.key;
    document.getElementById("word").innerHTML = displayWord;
}

function updateGame(){

}

function resetGame(){
    wordIndex = Math.floor(Math.random()*words.length);
    for(var i = 0; i < words[wordIndex].length; i++){
        displayWord+= "_ ";
    }
}