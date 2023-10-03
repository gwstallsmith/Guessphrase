let CATEGORY_MAP = [["Sports", 0], ["Countries", 1], ["Food", 2]];

let CATEGORIES = [["Baseball", "Football", "Bowling"],
                  ["United States of America", "France", "China"],
                  ["Hamburger", "Rice", "Omelet"]
                 ];


let MAX_SCORE = 7;

let GM


class GameManager {
    constructor(mode) {
        this.mode_ = mode;
        this.teamOneScore_ = 0;
        this.teamTwoScore_ = 0;

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
                this.mode_ = "Round";
                this.nextButton();

                timer();
                // Start timer

            }    
        } else if (this.mode_ == "Round") {
    
        }
    }



}

function timer(timerLength = 5000) {
    timeLeft = timerLength;
}



function reset() {
    GM = new GameManager("Select");
    document.getElementById("textBar").innerHTML = "Select Category";

}

function main() {
    document.body.style.overflow='hidden';
    GM = new GameManager("Select");

}