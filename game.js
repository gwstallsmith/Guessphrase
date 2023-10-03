let CATEGORY_MAP = [["Sports", 0], ["Countries", 1], ["Food", 2]];

let CATEGORIES = [["Baseball", "Football", "Bowling"],
                  ["United States of America", "France", "China"],
                  ["Hamburger", "Rice", "Omelet"]
                 ];


let MAX_SCORE = 7;


class Timer {
    constructor(seconds) {
        this.seconds_ = seconds;
        this.playingRound_ = false;
    }

    startTimer() {
        if(this.seconds_ > 0) {
            this.seconds_--;
            console.log("timer" + this.seconds_);
        } else {
            clearInterval(interval);
        }
    }

    stopTimer() {
        if(this.seconds_ > 0) {
            this.seconds_++
            console.log("timer" + this.seconds_);
        } else {
            clearInterval(interval);
        }
    }
}

let GameTimer = new Timer(90);
let interval = setInterval(GameTimer.startTimer(), 1000);

class GameManager {
    constructor(mode) {
        this.mode_ = mode;
        this.teamOneScore_ = 0;
        this.teamTwoScore_ = 0;

        this.playingRound_ = false;

        this.category_
        this.categoryItr_ = 0;

        this.categoryArray_;

    }


    getTeamOneScore() { return this.teamOneScore_; }
    
    getTeamTwoScore() { return this.teamTwoScore_; }


    nextButton() {
        if(this.mode_ == "Select") {
            document.getElementById("textBar").innerHTML = CATEGORY_MAP[this.categoryItr_][0];
            this.categoryItr_ = (this.categoryItr_ + 1) % CATEGORY_MAP.length;
        } else if (this.mode_ == "Round") {
            document.getElementById("textBar").innerHTML = this.categoryArray_[Math.floor(Math.random() * this.categoryArray_.length)];
            
        }
    }

    goStopButton() {
        let selectText;
        if(this.mode_ == "Select") {
            selectText = document.getElementById("textBar").innerHTML;
            if(selectText == "Select Category") {
                alert("Please Select a Category");
            } else {
                this.category_ = selectText;

                this.categoryArray_ = CATEGORIES[CATEGORY_MAP.find((element)=>{ return element[0] == selectText;})[1]];
                
                this.mode_ = "Round"
                GameTimer.startTimer();
                document.getElementById("textBar").innerHTML = CATEGORY_MAP[this.categoryItr_][0];
                this.categoryItr_ = (this.categoryItr_ + 1) % CATEGORY_MAP.length;
    
            }    
        } else if (this.mode_ == "Round") {
            document.getElementById("textBar").innerHTML = "||"
            

            this.mode_ = "Select";
        }
    }



}


function timer(timerLength = 5000) {
    timeLeft = timerLength;
}



function reset() {
    GameMan = new GameManager("Select");
    document.getElementById("textBar").innerHTML = "Select Category";

}
let GameMan;
function main() {
    GameMan = new GameManager("Select");

}
function setPayload() {
    document.body.style.overflow='hidden';
}