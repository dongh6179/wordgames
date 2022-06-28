var words = ["akali", "dog", "needle", "baseball", "partner", "manager",
"absent", "digital", "transmission", "welcome", "context", "command",
"contradiction", "dare", "owl", "preference", "respectable", "snatch",
"advance", "organ", "direction", "spectrum", "surgeon", "wheel", "generation",
"maximum", "adult", "art", "pierce", "kit", "tablet", "necklace", "incentive", "Supercalifragilisticexpialidocious"];

var wins = 0, losses = 0, numGuesses = 0, count = 0;
var temp = 0;
var cookie = 0;
var displayWord = "";

document.onkeyup = function (event) {
    var input = event.key;
    console.log(input);
    if(cookie == 0){
        temp = Math.floor(Math.random()*words.length);
        cookie = 1;
        for(var i = 0; i < words[temp].length; i++){
            displayWord+= " _ ";
        }
        document.getElementById("word").innerHTML = displayWord;
    }

}

function updateGame(){

}

function resetGame(){

}