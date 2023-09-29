let CATEGORIES = ["Fun and Games", "Countries", "Food"];

let FUN_AND_GAMES = ["Baseball", "Football", "Bowling"];
let COUNTRIES = ["United States of America", "France", "China"];

let MAX_SCORE = 7;

let TEAM_ONE_SCORE = 0;
let TEAM_TWO_SCORE = 0;

let MODE = "Select";

let categoryItr = 0;


function nextButton() {
    if(MODE == "Select") {
        document.getElementById("textBar").innerHTML = CATEGORIES[categoryItr];
        categoryItr = (categoryItr + 1) % CATEGORIES.length;
    } else if (MODE == "Round") {

    }
}

function goStopButton() {
    if(MODE == "Select") {
        document.getElementById("textBar").innerHTML;

        
    } else if (MODE == "Round") {

    }
}

function playRound() {
    while(TEAM_ONE_SCORE < MAX_SCORE || TEAM_TWO_SCORE < MAX_SCORE) {



    }
}


function reset() {
    TEAM_ONE_SCORE = 0;
    TEAM_TWO_SCORE = 0;
    MODE = "Select";
    document.getElementById("textBar").innerHTML = "Select Category";

}

function main() {



    //playRound();


    reset();

}