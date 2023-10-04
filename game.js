let CATEGORY_MAP = [["Sports", 0], ["Countries", 1], ["Food", 2]];

let CATEGORIES = [["Baseball", "Football", "Bowling"],
                  ["United States of America", "France", "China"],
                  ["Hamburger", "Rice", "Omelet"]
                 ];


let MAX_SCORE = 7;




class Timer {
    constructor(seconds) {
        this.timerStart_ = seconds;
        this.seconds_ = seconds;
        this.intervalId_ = null;

        this.tick_ = new Audio("assets/sounds/tick.mp3");
        this.tock_ = new Audio("assets/sounds/tock.mp3");
        this.alarm_ = new Audio("assets/sounds/alarm.mp3");
    }

    getSeconds() { return this.seconds_ }

    tick() { this.tick_.play(); }
    tock() { this.tock_.play(); }    

    tickTock() {
        if(this.seconds_ % 2) {
            document.getElementById("textBar").style = "border-color:rgb(255,0,132)";
            this.tock()
        } else {
            document.getElementById("textBar").style = "border-color:rgb(0,180,140)";
            this.tick()
        }
    }

    updateCountdown() {
        if(this.seconds_ > 0) {
            this.seconds_--;


            this.tickTock();
            console.log(this.seconds_);

            
        } else {
            clearInterval(this.intervalId_);
            document.getElementById("textBar").style = "border-color:rgb(70,120,160)"
            this.alarm_.play();
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

    reset() {
        this.intervalId_ = null;
        this.seconds_ = this.timerStart_;
        GameMan.stopRound();
    }
}

let GameTimer = new Timer(5);

class GameManager {
    constructor(mode) {
        this.mode_ = mode;
        this.teamOneScore_ = 0;
        this.teamTwoScore_ = 0;

        this.playingRound_ = false;

        this.category_
        this.categoryItr_ = 0;

        this.categoryArray_;

        this.hooray_ = new Audio("assets/sounds/hooray.mp3");

    }

    reset() {
        this.mode_ = "Select";
        this.teamOneScore_ = 0;
        this.teamTwoScore_ = 0;

        this.getTeamOneScore();
        this.getTeamTwoScore();
        

        this.category_ = null;
        this.catgoryItr_ = 0;
        this.categoryArray = null;

        document.getElementById("textBar").innerHTML = "Select Category";

    }


    getTeamOneScore() {
        document.getElementById("pointsTeamOne").innerHTML = this.teamOneScore_;
        return this.teamOneScore_;
    }
    
    getTeamTwoScore() {
        document.getElementById("pointsTeamTwo").innerHTML = this.teamTwoScore_;
        return this.teamTwoScore_;
    }

    addPointTeamOne() {
        ++this.teamOneScore_;
        document.getElementById("pointsTeamOne").innerHTML = this.teamOneScore_;
        this.checkWin();
    }

    addPointTeamTwo() {
        ++this.teamTwoScore_;
        document.getElementById("pointsTeamTwo").innerHTML = this.teamTwoScore_;
        this.checkWin();
    }


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
                document.getElementById("textBar").innerHTML = "SELECT CATEGORY"
            } else {
                if(!this.categoryArray_) {
                    this.category_ = selectText;
                    this.categoryArray_ = CATEGORIES[CATEGORY_MAP.find((element)=>{ return element[0] == selectText; })[1]];
                }
                this.startRound();
                
    
            }    

        } else if (this.mode_ == "Round") {

            this.stopRound();

        }
    }

    startRound() {
        if(GameTimer.getSeconds() == 0) {
            GameTimer.reset();
        }


        GameTimer.start();
        GameTimer.tickTock();

        document.getElementById("textBar").innerHTML = this.categoryArray_[Math.floor(Math.random() * this.categoryArray_.length)];                
        this.mode_ = "Round"

        document.getElementById("nextButton").disabled = false;

    }
    
    stopRound() {
        if(GameTimer.getSeconds() == 0) {
            GameTimer.reset();
            this.startRound();
        } else {

            GameTimer.stop();
            GameTimer.tock();
            document.getElementById("textBar").innerHTML = "| |"
            document.getElementById("textBar").style = "border-color:rgb(70,120,160);"

            document.getElementById("nextButton").disabled = true;
            this.mode_ = "Select";
        } 
    }

    checkWin() {
        if(this.teamOneScore_ >= MAX_SCORE) {
            document.getElementById("textBar").innerHTML = "CONGRATS TEAM ONE!"
        }
        if(this.teamTwoScore_ >= MAX_SCORE) {

        }
        if(this.teamOneScore_ >= MAX_SCORE || this.teamTwoScore_ >= MAX_SCORE) {
            this.hooray_.play();
            this.reset();
        }
    }

}




let GameMan;
function main() {
    GameMan = new GameManager("Select");

}
function setPayload() {
    document.body.style.overflow='hidden';
}