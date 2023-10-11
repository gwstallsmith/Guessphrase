let CATEGORY_MAP = [
                    ["Sports", 0],
                    ["Countries", 1],
                    ["Foodstuff", 2],
                    ["Movies", 3],
                    ["Songs", 4],
                    ["Animals", 5],
                    ["Plants (WIP)", 6],
                    ["Jobs (WIP)", 7],
                    ["Brands (WIP)", 8],
                    ["Celebrities (WIP)", 9],

                    ["Sex (WIP)", 10],
                    ["Drugs (WIP)", 11],
                    ["Crimes (WIP)", 12]
                   ];

                   // After dark
                   // Sex
                   // Drugs
                   // Crimes

let CATEGORIES = [
                  ["Baseball", "Football", "Bowling", "Dance", "Skateboarding", "Archery", "Snowboarding", "Snow Skiing", "Water Skiing", "Surfing", "Cricket", "Softball", "Cycling", "Hiking", "Rock Climbing", "Ice Climbing", "BMX", "Polo", "Wresting", "Boxing", "Fencing", "Golf", "Disc Golf", "Gymnastics", "Curling", "Ice Skating", "Roller Blading", "Hurdles", "Skeet Shooting", "Paintball", "Arm Wrestling", "Powerlifting", "Fishing", "Swimming", "Scuba Diving", "Diving", "Chess Boxing", "Horse Racing", "Nascar Racing", "F1 Racing", "Hunting", "Bull Riding", "Racket Ball", "Hand Ball", "Basketball", "Rugby", "Hockey", "Discus Throw", "Shot Put", "Football (Soccer)", "Bad Minton", "Tennis", "Pickleball", "Ping Pong", "Roller Skating", "Dodge Ball"],
                  ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Democratic Republic of The Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "French Guiana", "Gabon", "Republic of The Gambia", "Georgia", "Germany", "Ghana", "Great Britain", "Greece", "Grenada", "Guadeloupe", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Israel", "Italy", "Ivory Coast (Cote d'Ivoire)", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "North Korea", "South Korea", "Kosovo", "Kuwait", "Kyrgyz Republic (Kyrgyzstan)", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar/Burma", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovak Republic (Slovakia)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor Leste", "Togo", "Trinidad & Tobago", "Tunisia", "Türkiye (Turkey)", "Turkmenistan", "Turks & Caicos Islands", "Uganda", "Ukraine", "United Arab Emirates", "United States of America (USA)", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"],
                  ["Asparagus", "Apples", "Avacado", "Almond", "Arugala", "Artichoke", "Applesauce", "Apple juice", "Avocado", "Bacon", "Black Beans", "Bagels", "Baked Beans", "BBQ", "Bison", "Beer", "Bisque", "Bread", "Broccoli", "Buritto", "Babaganoosh", "Cabbage", "Cake", "Carrots", "Celery", "Cheese", "Chicken", "Catfish", "Chips", "Chocolate", "Chowder", "Clams", "Coffee", "Cookies", "Corn", "Cupcakes", "Crab", "Curry", "Cereal", "Chimichanga", "Dates", "Duck", "Dumplings", "Donuts", "Eggs", "Enchilada", "Eggrolls", "English Muffins", "Edimame", "Fajita", "Falafel", "Salmon", "Tuna", "fondu", "French Toast", "Garlic", "Ginger", "Gnocchi", "Goose", "Granola", "Grapes", "Green Beans", "Guacamole", "Gumbo", "Grits", "Graham Crackers", "Ham", "Hamburger", "Honey", "Hash Browns", "Hot Dogs", "Hummus", "Ice Cream", "Jambalaya", "Jelly / Jam", "Jerky", "Jalapeño", "Kale", "Kabobs", "Ketchup", "Kiwi", "Lobster", "Lamb", "Lasagna", "Meatballs", "Milk", "Milkshake", "Noodles", "Pizza", "Pepperoni", "Pancakes", "Quesadilla", "Quiche", "Reuben", "Spinach", "Spaghetti", "Tater Tots", "Toast", "Venison", "Waffles", "Yogurt", "Ziti", "Zucchini", "Water", "Milk", "Tea", "Coffee", "Soda", "Orange juice", "Energy drink", "Milkshake", "Smoothie", "Hot Cocoa", "Apple Cider", "Bubble tea"],
                  ["The Shawshank Redemption", "The Godfather", "The Dark Knight", "The Godfather Part II", "12 Angry Men", "Schindler's List", "The Lord of the Rings: The Fellowship of the Ring", "The Lord of the Rings: The Return of the King", "The Lord of the Rings: The Two Towers", "Pulp Fiction", "The Good, the Bad and the Ugly", "Forrest Gump", "Fight Club", "Inception", "Star Wars: Episode IV - A New Hope", "Star Wars: Episode V - The Empire Strikes Back", "Star Wars: Episode VI - Return of the Jedi", "The Matrix", "Goodfellas", "One Flew Over the Cuckoo's Nest", "Se7en", "Spider-Man: Across the Spider-Verse", "It's a Wonderful Life", "Intersetllar", "The Silence of the Lambs", "Saving Private Ryan", "City of God", "Life Is Beautiful", "The Green Mile", "Terminator", "Terminator 2: Judgment Day", "Back to the Future", "Spirited Away", "The Pianist", "Pyscho", "Parasite", "Gladiator", "The Lion King", "Léon: The Professional", "American History X", "The Departed", "Whiplash", "The Prestige", "Grave of the Fireflies", "The Usual Suspects", "Oppenheimer", "Harakiri", "Casablanca", "The Intouchables", "Modern Times", "Cinema Paradiso", "Once Upon a Time in the West", "Rear Window", "Alien", "Aliens", "City Lights", "Apocalypse Now", "Memento", "Django Unchained", "Raiders of the Lost Ark", "WALL·E", "The Lives of Others", "Sunset Blvd.", "Paths of Glory", "Avengers: Infinity War", "The Shining", "The Great Dictator", "Witness fo the Prosecution", "Spider-Man: Into the Spider-Verse", "Inglourious Basterds", "The Dark Knight Rises", "American Beauty", "Oldboy", "Coco", "Amadeus", "Toy Story", "Das Boot", "Braveheart", "Avengers: Endgame", "Joker", "Princess Mononoke", "Good Will Hunting", "Once Upon a Time in America", "Your Name.", "Idiots", "High and Low", "Singin' in the Rain", "Capernaum", "Requiem for a Dream", "Toy Story 3", "Come and See", "Eternal Sunshine of the Spotless Mind", "2001: A Space Odyssey", "The Hunt", "Reservoir Dogs", "Ikiru", "Lawrence of Arabia", "M", "The Apartment", "North by Northwest", "Vertigo", "Double Indemnity", "Scarface", "Full Metal Jacket", "A Clockwork Orange", "Incendies", "Heat", "Up", "Hamilton", "To Kill a Mockingbird", "Indiana Jones and the Last Crusade", "Metropolis", "Die Hard", "12 Years a Slave", "Lincoln", "Oldboy", "Memento", "Pan's Labyrinth", "There Will Be Blood", "La Vie En Rose", "Slumdog Millionaire", "The King's Speech", "The Departed", "Gravity", "Shaun of the Dead", "A Beautiful Mind", "Downfall", "Babel", "Letters from Iwo Jima", "Chicago", "King Kong", "Brokeback Mountain", "Gladiator", "The Incredibles", "Unbreakable", "Batman Begins", "Tropic Thunder", "Crouching Tiger, Hidden Dragon", "Shutter Island", "Captain Phillips", "The Thin Red Line", "Paranormal Activity", "Scream", "Friday, the 13th", "Thelma & Louise", "Jurassic Park", "The Big Lebowski", "Boogie Nights", "Titanic", "Saving Private Ryan", "Fargo", "Boyz n the Hood"],
                  ["Smells Like Teen Spirit", "ImagineWater", "One", "Billie Jean", "Bohemian Rhapsody", "Hey Jude", "Like A Rolling Stone", "I Can't Get No Satisfaction", "God Save The Queen", "Sweet Child O'Mine", "London Calling", "Waterloo Sunset", "Hotel California", "Your Song", "Stairway To Heaven", "The Twist", "Live Forever", "I Will Always Love You", "Life On Mars?", "Heartbreak Hotel", "Over The Rainbow", "What's Goin' On ", "Born To Run", "Be My Baby", "Creep", "Bridge Over Troubled Water", "Respect", "Family Affair", "Dancing Queen", "Good Vibrations", "Purple Haze", "Yesterday", "Jonny B Good", "No Woman No Cry ", "Hallelujah", "Every Breath You Take", "A Day In The Life", "Stand By Me", "Papa's Got A Brand New Bag", "Gimme Shelter", "What'd I Say", "Sultans Of Swing", "God Only Knows", "You've Lost That Lovin' Feeling", "My Generation", "Dancing In The Street", "When Doves Cry", "A Change Is Gonna Come", "River Deep Mountain High", "Best Of My Love", "Stronger", "Baby Love", "Truth Hurts", "Without You", "Where Is My Mind?", "So What", "Welcome to the Jungle", "Old Town Road", "Cannonball", "House of Balloons", "Cranes in the Sky", "A Milli", "Buddy Holly", "Bad Romance", "Just a Friend", "Oye Como Va", "Back That Azz Up", "Our Lips Are Sealed", "Rhythm Nation", "Move On Up", "The House of the Rising Sun", "Come as You Are", "Never Too Much", "Get Lucky", "Help Me", "No Ordinary Love", "Loser", "Livin' on a Prayer", "Summertime Sadness ", "White Rabbit", "Bam Bam", "Africa ", "Bad and Boujee", "Powderfinger", "(Don't Fear) The Reaper", "Tyrone", "Help!", "In Da Club", "Sugar, We're Goin Down", "If I Ain't Got You", "La Vida Es un Carnaval", "Passionate Kisses", "Call Me Maybe", "Limelight", "Under Pressure", "Sign of the Times", "Rapper's Delight", "Super Bass", "Mannish Boy", "Flava in Ya Ear (Remix)", "California Dreamin'", "Fantasy", "Green Onions", "Uptown Funk", "Alive", "Enjoy the Silence", "Gloria", "Buffalo Stance", "Heavy Metal Drummer", "Everlong", "Free Bird", "Amor Prohibido", "Rock and Roll All Nite", "Lovely Day", "Ain't Nobobdy", "Go Your Own Way", "Station to Station", "You Make Me Feel (Mighty Real)", "Hungry Like the Wolf", "Bring the Noise", "Alison", "Grace", "Say It Loud (I'm Black and I'm Proud)", "Fix You", "Springsteen", "Enter Sandman", "Brass in Pocket", "Party Up (Up in Here)", "Personality Crisis", "Lola", "I'm Coming Out", "I Like It", "Redbone", "Paper Bag", "Typical Girls", "Radiation Vibe", "Mr. Brightside", "Pictures of You", "Mama Tried", "Up on the Roof", "Be Thankful for What You Got", "Hotline Bling", "I Can't Make You Love Me", "Bennie and the Jets", "Peggy Sue", "Just What I Needed", "Black Hole Sun", "Thinkin Bout You", "Da Doo Ron Ron", "God Save the Queen", "Box of Rain", "Could You Be Loved", "Merry Go Round", "The Harder They Come", "Little Red Corvette", "Killing Me Softly With His Song", "Because the Night", "Blank Space", "Surrender", "Don't Leave Me This Way", "Rock With You", "Sweet Dreams (Are Made of This)", "It Was a Good Day", "Angel From Montgomery", "Time of the Season", "Virginia Plain", "Heartbreak Hotel", "Dynamite", "It's Too Late", "Iron Man", "What a Fool Believes", "Promised land", "I'm a Believer", "1999", "Paranoid", "Believe", "She's Gone", "Ripple", "Papa Was a Rollin' Stone", "Umbrella", "Please Mr. Postman", "Big Poppa", "Safaera", "Under the Bridge", "Real Love", "Portions for Foxes", "Lust for Life", "All I Have to Do is Dream", "After the Gold Rush", "California Love", "Hound Dog", "Visions of Johanna", "Leader of the Pack", "Hotel California", "Light My Fire", "Ain't No Sunshine", "Divorce Song", "Crazy", "Chain of Fools", "Every Breath You Take", "No Scrubs", "Wish You Were Here", "Night Moves", "Good Times", "Tangled Up in Blue", "Bridge Over Troubled Water", "September", "Blitzkrieg Bop", "Jolene", "One", "Stairway to Heaven", "Running Up That Hill", "The Message", "Y.M.C.A.", "The Weight", "Work It", "Like a Prayer", "Good Vibrations", "I Feel Love", "Walk on By", "Gasolina", "Doo Wop (That Thing)", "Idioteque", "Tiny Dancer", "Paper Planes", "Alright", "Billie Jean", "My Girl", "All Along the Watchtower", "Ms. Jackson", "So Fresh, So Clean", "Seven Nation Army", "Tutti-Frutti", "Juicy", "Hypnotize", "Royals", "Team", "Nuthin' But a 'G' Thang", "Once in a Lifetime", "Born to Run", "Runaway", "A Day in the Life", "Heroes", "Imagine", "Purple Rain", "Bohemian Rhapsody", "Crazy in Love", "I Want to Hold Your Hand", "Gimme Shelter", "Superstition", "Hey Ya!", "Dreams", "What's Going On", "Smells Like Teen Spirit", "Come As You Are", "Fight the Power"],                  ["Lion", "Tiger", "Leopard", "Cheetah", "Elephant", "Giraffe", "Rhinoceros", "Gorilla", "Chimpanzee", "Wolf", "Bear", "Panda", "Kangaroo", "Koala", "Zebra", "Hippopotamus", "Crocodile", "Alligator", "Cheetah", "Bison", "Eagle", "Hawk", "Sparrow", "Robin", "Parrot", "Penguin", "Flamingo", "Peacock", "Owl", "Hummingbird", "Crow", "Seagull", "Swan", "Toucan", "Pelican", "Pigeon", "Blue Jay", "Woodpecker", "Falcon", "Vulture", "Lion", "Elephant", "Tiger", "Giraffe", "Zebra", "Cheetah", "Panda", "Kangaroo", "Koala", "Gorilla", "Hippopotamus", "Rhinoceros", "Polar bear", "Grizzly bear", "Chimpanzee", "Dolphin", "Whale", "Bat", "Squirrel", "Rabbit", "Dolphin", "Shark", "Octopus", "Jellyfish", "Seahorse", "Clownfish", "Sea turtle", "Stingray", "Starfish", "Crab", "Lobster", "Squid", "Sea otter", "Humpback whale", "Hammerhead shark", "Blue whale", "Sea lion", "Manatee", "Swordfish", "Coral", "Cow", "Horse", "Pig", "Sheep", "Goat", "Chicken", "Duck", "Turkey", "Rabbit", "Donkey", "Goose", "Llama", "Alpaca", "Goat", "Sheep", "Piglet", "Dog", "Cat", "Rabbit", "Guinea pig", "Hamster", "Parrot,", "Fish", "Turtle", "Ferret", "Gerbil", "Hedgehog", "Hermit crab", "Sugar glider", "Miniature pig", "Rabbit", "Hamster", "Goldfish", "Horse", "Bee", "Butterfly", "Mosquito", "Ladybug", "Grasshopper", "Dragonfly", "Cricket", "Beetle", "Moth", "Firefly", "Praying mantis", "Caterpillar", "Housefly", "Flea", "Tick", "Cockroach", "Wasp", "Hornet", "Aphid", "Cow", "Horse", "Pig", "Sheep", "Goat", "Chicken", "Duck", "Turkey", "Rabbit", "Donkey", "Goose", "Llama", "Alpaca", "Dog", "Piglet", "Calf", "Foal", "Colt", "Lizard", "Snake", "Turtle", "Crocodile", "Komodo Dragon", "Chameleon", "Gharial", "Tuatara", "Horned Toad", "Tegu", "Salmon", "Tuna", "Goldfish", "Clownfish", "Catfish", "Angelfish", "Swordfish", "Guppy", "Piranha", "Trout"],
                  ["Tree"],
                  ["Plumber"],
                  ["Nike"],
                  ["Johnny Depp"]
                 ];

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


class GameManager {
    constructor() {
        this.mode_ = "Select";
        this.teamOneScore_ = 0;
        this.teamTwoScore_ = 0;

        this.category_ = null;
        this.categoryItr_ = 0;

        this.categoryArray_ = null;

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
        document.getElementById("nextButton").disabled = false;

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
        console.log(this.mode_)
        if(this.mode_ == "Select") {
            document.getElementById("textBar").innerHTML = CATEGORY_MAP[this.categoryItr_][0];
            let nsfwOffset = nsfw ? 0 : 3
            this.categoryItr_ = (this.categoryItr_ + 1) % (CATEGORY_MAP.length - nsfwOffset);
        } else if (this.mode_ == "Round") {
            document.getElementById("textBar").innerHTML = this.categoryArray_[Math.floor(Math.random() * this.categoryArray_.length)];
        }
    }

    goStopButton() {
        let selectText;
        if(this.mode_ == "Select") {
            selectText = document.getElementById("textBar").innerHTML;
            console.log(selectText);
            if(selectText == "Select Category") {
                document.getElementById("textBar").innerHTML = "SELECT CATEGORY"
            } else {
                if(!this.categoryArray_) {
                    this.category_ = selectText;

                    console.log(this.category_);
                    console.log(CATEGORY_MAP.find((element)=>{ return element[0] == selectText; })[1])

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
            document.getElementById("textBar").innerHTML = "CONGRATS TEAM TWO!"
        }
        if(this.teamOneScore_ >= MAX_SCORE || this.teamTwoScore_ >= MAX_SCORE) {
            this.hooray_.play();
            this.reset();
            setTimeout(function() {
                document.getElementById("textBar").innerHTML = "Select Category";
            }, 5000)
        }
    }

}

let MAX_SCORE = 7;
let TIMER_LENGTH = 60;


let GameMan;
let GameTimer;

function main() {
    GameMan = new GameManager();
    GameTimer = new Timer(TIMER_LENGTH);
}

function setPayload() {
    document.body.style.overflow='hidden';
    document.getElementById('settings').style = "display:none;"
    document.getElementById('howToPlay').style = "display:none;"

    document.getElementById("light").disabled = false;
    document.getElementById("dark").disabled = true;

}

let openSettings = false;
function settings() {
    openHTP = false;
    openSettings = !openSettings;
    if(openSettings) {
        document.getElementById('game').style = "display:none;"
        document.getElementById('howToPlay').style = "display:none;"
        document.getElementById('settings').style = "display:block;"
    } else {
        document.getElementById('game').style = "display:block;"
        document.getElementById('howToPlay').style = "display:none;"
        document.getElementById('settings').style = "display:none;"
    }
    checkSettings();
    main();

}

let openHTP = false;
function howToPlay() {
    openSettings = false;
    openHTP = !openHTP;
    if(openHTP) {
        document.getElementById('game').style = "display:none;"
        document.getElementById('howToPlay').style = "display:block;"
        document.getElementById('settings').style = "display:none;"
    } else {
        document.getElementById('game').style = "display:block;"
        document.getElementById('howToPlay').style = "display:none;"
        document.getElementById('settings').style = "display:none;"
    }
}
let nsfw = false;
function checkSettings() {
    nsfw = document.getElementById('nsfw').checked;
    let timerLength = parseInt(document.getElementById('timerLength').value);
    let maxScore = parseInt(document.getElementById('maxScore').value);

    if(nsfw) {
        document.getElementById("light").disabled = true;
        document.getElementById("dark").disabled = false;
        document.getElementById("title").innerHTML = "Guessphrase After Dark"

    } else {
        document.getElementById("light").disabled = false;
        document.getElementById("dark").disabled = true;
        document.getElementById("title").innerHTML = "Guessphrase"

    }



    if(timerLength) {
        TIMER_LENGTH = timerLength;
    }
    if(maxScore) {
        MAX_SCORE = maxScore;
    }
}

