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
        this.intervalId_ = null
    }

    updateCountdown() {
        if(this.seconds_ > 0) {
            this.seconds_--;

            console.log(this.seconds_);

        } else {
            clearInterval(this.intervalId_);
        }
    }

    start() {
        if(this.intervalId_ === null) {
            this.intervalId_ = setInterval(() => this.updateCountdown(), 1000);
        }
    }

    stop() {
        if(this.intervalId_ !== null) {
            clearInterval(this.intervalId_)
            this.intervalId_ = null
        }
    }
}

let GameTimer = new Timer(90);

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

    reset() {
        this.mode_ = "Select";
        this.teamOneScore_ = 0;
        this.teamTwoScore_ = 0;

        this.playingRound_ = false;
        this.category_ = null;
        this.catgoryItr_ = 0;
        this.categoryArray = null;

        document.getElementById("textBar").innerHTML = "Select Category";

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
                if(!this.categoryArray_) {
                    this.category_ = selectText;
                    this.categoryArray_ = CATEGORIES[CATEGORY_MAP.find((element)=>{ return element[0] == selectText; })[1]];
                }
                this.startRound();
                
                document.getElementById("textBar").innerHTML = this.categoryArray_[Math.floor(Math.random() * this.categoryArray_.length)];
                
                this.mode_ = "Round"
    
            }    

        } else if (this.mode_ == "Round") {
            document.getElementById("textBar").innerHTML = "| |"
            

            this.stopRound();

            this.mode_ = "Select";
        }
    }

    startRound() {
        this.playingRound_ = true;
        GameTimer.start();
        document.getElementById("nextButton").disabled = false;

    }
    
    stopRound() {
        this.playingRound_ = false;
        GameTimer.stop();
        document.getElementById("nextButton").disabled = true;
    }

}




let GameMan;
function main() {
    GameMan = new GameManager("Select");

}
function setPayload() {
    document.body.style.overflow='hidden';
}