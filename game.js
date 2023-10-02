let CATEGORIES = ["Fun and Games", "Countries", "Food"];

let FUN_AND_GAMES = ["Baseball", "Football", "Bowling"];
let COUNTRIES = ["United States of America", "France", "China"];

let MAX_SCORE = 7;

let GM


class GameManager {
    constructor(mode) {
        this.mode_ = mode;
        this.teamOneScore_ = 0;
        this.teamTwoScore_ = 0;

        this.categoryItr_ = 0;
    }

    getTeamOneScore() { return this.teamOneScore_; }
    
    getTeamTwoScore() { return this.teamTwoScore_; }


    nextButton() {
        if(this.mode_ == "Select") {
            document.getElementById("textBar").innerHTML = CATEGORIES[this.categoryItr_];
            this.categoryItr_ = (this.categoryItr_ + 1) % CATEGORIES.length;
        } else if (this.mode_ == "Round") {
    
        }
    }

    goStopButton() {
        if(this.mode_ == "Select") {
            document.getElementById("textBar").innerHTML;
    
            
        } else if (this.mode_ == "Round") {
    
        }
    }
}


function playRound() {
    while(TEAM_ONE_SCORE < MAX_SCORE || TEAM_TWO_SCORE < MAX_SCORE) {



    }
}


function reset() {
    GM = new GameManager("Select");
    document.getElementById("textBar").innerHTML = "Select Category";

}

function main() {
    GM = new GameManager("Select");

}