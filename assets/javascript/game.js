var words = ["akali", "dog", "needle", "baseball", "partner", "manager",
"absent", "digital", "transmission", "welcome", "context", "command",
"contradiction", "dare", "owl", "preference", "respectable", "snatch",
"advance", "organ", "direction", "spectrum", "surgeon", "wheel", "generation",
"maximum", "adult", "art", "pierce", "kit", "tablet", "necklace", "incentive", "Supercalifragilisticexpialidocious"];

var wins = 0, losses = 0, numGuesses = 0, count = 0;
var wordIndex = 0;
var displayWord = [], wrongGuesses = [];
var duplicate;

resetGame();
console.log(words[wordIndex]);
document.onkeyup = function (event) {
    var input = event.key;
    var temp = new RegExp(input, "gi");
    var temp2 = words[wordIndex];
    if(temp2.search(/[a-z]|[A-Z]/) != -1){
        if(temp2.includes(input)){
            duplicate = temp2.match(temp);
            for(var i = 0; i < duplicate.length; i++){
                displayWord[temp2.indexOf(input)] = input;
                temp2 = temp2.replace(input, " ");
            }
        }
        else{
            if(document.getElementById("wrongLetters").innerHTML.includes(input.toLowerCase())){

            }
            else{
                wrongGuesses.push(input.toLowerCase());
            }
            
            document.getElementById("wrongLetters").innerHTML = "Wrong letters: " + wrongGuesses;
        }
    }


    document.getElementById("word").innerHTML = displayMysteryWord();
    console.log(input);
}

function updateGame(){

}

function resetGame(){
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
