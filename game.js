let CATEGORY_MAP = [
                    ["Sports", 0],
                    ["Countries", 1],
                    ["Food / Drinks", 2],
                    ["Movies", 3],
                    ["Songs", 4],
                    ["Animals", 5],
                    ["Plants", 6],
                    ["Jobs", 7],
                    ["Brands", 8],
                    ["Celebrities", 9]
                   ];

                   // After dark
                   // Sex
                   // Drugs
                   // Crimes
let CATEGORIES = [
                  ["Baseball", "Football", "Bowling", "Dance", "Skateboarding", "Archery", "Snowboarding", "Snow Skiing", "Water Skiing", "Surfing", "Cricket", "Softball", "Cycling", "Hiking", "Rock Climbing", "Ice Climbing", "BMX", "Polo", "Wresting", "Boxing", "Fencing", "Golf", "Disc Golf", "Gymnastics", "Curling", "Ice Skating", "Roller Blading", "Hurdles", "Skeet Shooting", "Paintball", "Arm Wrestling", "Powerlifting", "Fishing", "Swimming", "Scuba Diving", "Diving", "Chess Boxing", "Horse Racing", "Nascar Racing", "F1 Racing", "Hunting", "Bull Riding", "Racket Ball", "Hand Ball", "Basketball", "Rugby", "Hockey", "Discus Throw", "Shot Put", "Football (Soccer)", "Bad Minton", "Tennis", "Pickleball", "Ping Pong", "Roller Skating", "Dodge Ball"],
                  ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Democratic Republic of The Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "French Guiana", "Gabon", "Republic of The Gambia", "Georgia", "Germany", "Ghana", "Great Britain", "Greece", "Grenada", "Guadeloupe", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Israel", "Italy", "Ivory Coast (Cote d'Ivoire)", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "North Korea", "South Korea", "Kosovo", "Kuwait", "Kyrgyz Republic (Kyrgyzstan)", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar/Burma", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovak Republic (Slovakia)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor Leste", "Togo", "Trinidad & Tobago", "Tunisia", "Türkiye (Turkey)", "Turkmenistan", "Turks & Caicos Islands", "Uganda", "Ukraine", "United Arab Emirates", "United States of America (USA)", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"],
                  ["Asparagus", "Apples", "Avacado", "Almond", "Arugala", "Artichoke", "Applesauce", "Apple juice", "Avocado", "Bacon", "Black Beans", "Bagels", "Baked Beans", "BBQ", "Bison", "Beer", "Bisque", "Bread", "Broccoli", "Buritto", "Babaganoosh", "Cabbage", "Cake", "Carrots", "Celery", "Cheese", "Chicken", "Catfish", "Chips", "Chocolate", "Chowder", "Clams", "Coffee", "Cookies", "Corn", "Cupcakes", "Crab", "Curry", "Cereal", "Chimichanga", "Dates", "Duck", "Dumplings", "Donuts", "Eggs", "Enchilada", "Eggrolls", "English Muffins", "Edimame", "Fajita", "Falafel", "Salmon", "Tuna", "fondu", "French Toast", "Garlic", "Ginger", "Gnocchi", "Goose", "Granola", "Grapes", "Green Beans", "Guacamole", "Gumbo", "Grits", "Graham Crackers", "Ham", "Hamburger", "Honey", "Hash Browns", "Hot Dogs", "Hummus", "Ice Cream", "Jambalaya", "Jelly / Jam", "Jerky", "Jalapeño", "Kale", "Kabobs", "Ketchup", "Kiwi", "Lobster", "Lamb", "Lasagna", "Meatballs", "Milk", "Milkshake", "Noodles", "Pizza", "Pepperoni", "Pancakes", "Quesadilla", "Quiche", "Reuben", "Spinach", "Spaghetti", "Tater Tots", "Toast", "Venison", "Waffles", "Yogurt", "Ziti", "Zucchini"],
                  ["The Wizard of Oz"],
                  ["What is Love"],
                  ["Dog"],
                  ["Tree"],
                  ["Plumber"],
                  ["Nike"],
                  ["Johnny Depp"]
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

    tick() {
        this.tock_.pause();
        this.tock_.currentTime = 0;
        this.tick_.play();
    }
    tock() {
        this.tick_.pause();
        this.tick_.currentTime = 0;
        this.tock_.play();
    }    

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

let GameTimer = new Timer(60);

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
        this.categoryArray_ = null;

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