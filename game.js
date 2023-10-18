const CATEGORY_MAP = [
                    ["Sports", 0],
                    ["Countries", 1],
                    ["Foodstuff", 2],
                    ["Movies", 3],
                    ["Songs", 4],
                    ["Animals", 5],
                    ["Plants", 6],
                    ["Occupations", 7],
                    ["Brands", 8],
                    ["Celebrities", 9],
                    ["Minecraft", 10],

                    
                    ["Sex", 11],
                    ["Drugs", 12],
                    ["Crimes", 13]
                   ];


const CATEGORIES = [
                  ["Baseball", "Football", "Bowling", "Dance", "Skateboarding", "Archery", "Snowboarding", "Snow Skiing", "Water Skiing", "Surfing", "Cricket", "Softball", "Cycling", "Hiking", "Rock Climbing", "Ice Climbing", "BMX", "Polo", "Wresting", "Boxing", "Fencing", "Golf", "Disc Golf", "Gymnastics", "Curling", "Ice Skating", "Roller Blading", "Hurdles", "Skeet Shooting", "Paintball", "Arm Wrestling", "Powerlifting", "Fishing", "Swimming", "Scuba Diving", "Diving", "Chess Boxing", "Horse Racing", "Nascar Racing", "F1 Racing", "Hunting", "Bull Riding", "Racket Ball", "Hand Ball", "Basketball", "Rugby", "Hockey", "Discus Throw", "Shot Put", "Football (Soccer)", "Bad Minton", "Tennis", "Pickleball", "Ping Pong", "Roller Skating", "Dodge Ball"],
                  ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua & Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia & Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Democratic Republic of The Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "French Guiana", "Gabon", "Republic of The Gambia", "Georgia", "Germany", "Ghana", "Great Britain", "Greece", "Grenada", "Guadeloupe", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Israel", "Italy", "Ivory Coast (Cote d'Ivoire)", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "North Korea", "South Korea", "Kosovo", "Kuwait", "Kyrgyz Republic (Kyrgyzstan)", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar/Burma", "Namibia", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovak Republic (Slovakia)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand", "Timor Leste", "Togo", "Trinidad & Tobago", "Tunisia", "Türkiye (Turkey)", "Turkmenistan", "Turks & Caicos Islands", "Uganda", "Ukraine", "United Arab Emirates", "United States of America (USA)", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"],
                  ["Asparagus", "Apples", "Avacado", "Almond", "Arugala", "Artichoke", "Applesauce", "Apple juice", "Avocado", "Bacon", "Black Beans", "Bagels", "Baked Beans", "BBQ", "Bison", "Beer", "Bisque", "Bread", "Broccoli", "Buritto", "Babaganoosh", "Cabbage", "Cake", "Carrots", "Celery", "Cheese", "Chicken", "Catfish", "Chips", "Chocolate", "Chowder", "Clams", "Coffee", "Cookies", "Corn", "Cupcakes", "Crab", "Curry", "Cereal", "Chimichanga", "Dates", "Duck", "Dumplings", "Donuts", "Eggs", "Enchilada", "Eggrolls", "English Muffins", "Edimame", "Fajita", "Falafel", "Salmon", "Tuna", "fondu", "French Toast", "Garlic", "Ginger", "Gnocchi", "Goose", "Granola", "Grapes", "Green Beans", "Guacamole", "Gumbo", "Grits", "Graham Crackers", "Ham", "Hamburger", "Honey", "Hash Browns", "Hot Dogs", "Hummus", "Ice Cream", "Jambalaya", "Jelly / Jam", "Jerky", "Jalapeño", "Kale", "Kabobs", "Ketchup", "Kiwi", "Lobster", "Lamb", "Lasagna", "Meatballs", "Milk", "Milkshake", "Noodles", "Pizza", "Pepperoni", "Pancakes", "Quesadilla", "Quiche", "Reuben", "Spinach", "Spaghetti", "Tater Tots", "Toast", "Venison", "Waffles", "Yogurt", "Ziti", "Zucchini", "Water", "Milk", "Tea", "Coffee", "Soda", "Orange juice", "Energy drink", "Milkshake", "Smoothie", "Hot Cocoa", "Apple Cider", "Bubble tea"],
                  ["The Shawshank Redemption", "The Godfather", "The Dark Knight", "The Godfather Part II", "12 Angry Men", "Schindler's List", "The Lord of the Rings: The Fellowship of the Ring", "The Lord of the Rings: The Return of the King", "The Lord of the Rings: The Two Towers", "Pulp Fiction", "The Good, the Bad and the Ugly", "Forrest Gump", "Fight Club", "Inception", "Star Wars: Episode IV - A New Hope", "Star Wars: Episode V - The Empire Strikes Back", "Star Wars: Episode VI - Return of the Jedi", "The Matrix", "Goodfellas", "One Flew Over the Cuckoo's Nest", "Se7en", "Spider-Man: Across the Spider-Verse", "It's a Wonderful Life", "Intersetllar", "The Silence of the Lambs", "Saving Private Ryan", "City of God", "Life Is Beautiful", "The Green Mile", "Terminator", "Terminator 2: Judgment Day", "Back to the Future", "Spirited Away", "The Pianist", "Pyscho", "Parasite", "Gladiator", "The Lion King", "Léon: The Professional", "American History X", "The Departed", "Whiplash", "The Prestige", "Grave of the Fireflies", "The Usual Suspects", "Oppenheimer", "Harakiri", "Casablanca", "The Intouchables", "Modern Times", "Cinema Paradiso", "Once Upon a Time in the West", "Rear Window", "Alien", "Aliens", "City Lights", "Apocalypse Now", "Memento", "Django Unchained", "Raiders of the Lost Ark", "WALL·E", "The Lives of Others", "Sunset Blvd.", "Paths of Glory", "Avengers: Infinity War", "The Shining", "The Great Dictator", "Witness fo the Prosecution", "Spider-Man: Into the Spider-Verse", "Inglourious Basterds", "The Dark Knight Rises", "American Beauty", "Oldboy", "Coco", "Amadeus", "Toy Story", "Das Boot", "Braveheart", "Avengers: Endgame", "Joker", "Princess Mononoke", "Good Will Hunting", "Once Upon a Time in America", "Your Name.", "Idiots", "High and Low", "Singin' in the Rain", "Capernaum", "Requiem for a Dream", "Toy Story 3", "Come and See", "Eternal Sunshine of the Spotless Mind", "2001: A Space Odyssey", "The Hunt", "Reservoir Dogs", "Ikiru", "Lawrence of Arabia", "M", "The Apartment", "North by Northwest", "Vertigo", "Double Indemnity", "Scarface", "Full Metal Jacket", "A Clockwork Orange", "Incendies", "Heat", "Up", "Hamilton", "To Kill a Mockingbird", "Indiana Jones and the Last Crusade", "Metropolis", "Die Hard", "12 Years a Slave", "Lincoln", "Oldboy", "Memento", "Pan's Labyrinth", "There Will Be Blood", "La Vie En Rose", "Slumdog Millionaire", "The King's Speech", "The Departed", "Gravity", "Shaun of the Dead", "A Beautiful Mind", "Downfall", "Babel", "Letters from Iwo Jima", "Chicago", "King Kong", "Brokeback Mountain", "Gladiator", "The Incredibles", "Unbreakable", "Batman Begins", "Tropic Thunder", "Crouching Tiger, Hidden Dragon", "Shutter Island", "Captain Phillips", "The Thin Red Line", "Paranormal Activity", "Scream", "Friday, the 13th", "Thelma & Louise", "Jurassic Park", "The Big Lebowski", "Boogie Nights", "Titanic", "Saving Private Ryan", "Fargo", "Boyz n the Hood"],
                  ["Smells Like Teen Spirit", "ImagineWater", "One", "Billie Jean", "Bohemian Rhapsody", "Hey Jude", "Like A Rolling Stone", "I Can't Get No Satisfaction", "God Save The Queen", "Sweet Child O'Mine", "London Calling", "Waterloo Sunset", "Hotel California", "Your Song", "Stairway To Heaven", "The Twist", "Live Forever", "I Will Always Love You", "Life On Mars?", "Heartbreak Hotel", "Over The Rainbow", "What's Goin' On ", "Born To Run", "Be My Baby", "Creep", "Bridge Over Troubled Water", "Respect", "Family Affair", "Dancing Queen", "Good Vibrations", "Purple Haze", "Yesterday", "Jonny B Good", "No Woman No Cry ", "Hallelujah", "Every Breath You Take", "A Day In The Life", "Stand By Me", "Papa's Got A Brand New Bag", "Gimme Shelter", "What'd I Say", "Sultans Of Swing", "God Only Knows", "You've Lost That Lovin' Feeling", "My Generation", "Dancing In The Street", "When Doves Cry", "A Change Is Gonna Come", "River Deep Mountain High", "Best Of My Love", "Stronger", "Baby Love", "Truth Hurts", "Without You", "Where Is My Mind?", "So What", "Welcome to the Jungle", "Old Town Road", "Cannonball", "House of Balloons", "Cranes in the Sky", "A Milli", "Buddy Holly", "Bad Romance", "Just a Friend", "Oye Como Va", "Back That Azz Up", "Our Lips Are Sealed", "Rhythm Nation", "Move On Up", "The House of the Rising Sun", "Come as You Are", "Never Too Much", "Get Lucky", "Help Me", "No Ordinary Love", "Loser", "Livin' on a Prayer", "Summertime Sadness ", "White Rabbit", "Bam Bam", "Africa ", "Bad and Boujee", "Powderfinger", "(Don't Fear) The Reaper", "Tyrone", "Help!", "In Da Club", "Sugar, We're Goin Down", "If I Ain't Got You", "La Vida Es un Carnaval", "Passionate Kisses", "Call Me Maybe", "Limelight", "Under Pressure", "Sign of the Times", "Rapper's Delight", "Super Bass", "Mannish Boy", "Flava in Ya Ear (Remix)", "California Dreamin'", "Fantasy", "Green Onions", "Uptown Funk", "Alive", "Enjoy the Silence", "Gloria", "Buffalo Stance", "Heavy Metal Drummer", "Everlong", "Free Bird", "Amor Prohibido", "Rock and Roll All Nite", "Lovely Day", "Ain't Nobobdy", "Go Your Own Way", "Station to Station", "You Make Me Feel (Mighty Real)", "Hungry Like the Wolf", "Bring the Noise", "Alison", "Grace", "Say It Loud (I'm Black and I'm Proud)", "Fix You", "Springsteen", "Enter Sandman", "Brass in Pocket", "Party Up (Up in Here)", "Personality Crisis", "Lola", "I'm Coming Out", "I Like It", "Redbone", "Paper Bag", "Typical Girls", "Radiation Vibe", "Mr. Brightside", "Pictures of You", "Mama Tried", "Up on the Roof", "Be Thankful for What You Got", "Hotline Bling", "I Can't Make You Love Me", "Bennie and the Jets", "Peggy Sue", "Just What I Needed", "Black Hole Sun", "Thinkin Bout You", "Da Doo Ron Ron", "God Save the Queen", "Box of Rain", "Could You Be Loved", "Merry Go Round", "The Harder They Come", "Little Red Corvette", "Killing Me Softly With His Song", "Because the Night", "Blank Space", "Surrender", "Don't Leave Me This Way", "Rock With You", "Sweet Dreams (Are Made of This)", "It Was a Good Day", "Angel From Montgomery", "Time of the Season", "Virginia Plain", "Heartbreak Hotel", "Dynamite", "It's Too Late", "Iron Man", "What a Fool Believes", "Promised land", "I'm a Believer", "1999", "Paranoid", "Believe", "She's Gone", "Ripple", "Papa Was a Rollin' Stone", "Umbrella", "Please Mr. Postman", "Big Poppa", "Safaera", "Under the Bridge", "Real Love", "Portions for Foxes", "Lust for Life", "All I Have to Do is Dream", "After the Gold Rush", "California Love", "Hound Dog", "Visions of Johanna", "Leader of the Pack", "Hotel California", "Light My Fire", "Ain't No Sunshine", "Divorce Song", "Crazy", "Chain of Fools", "Every Breath You Take", "No Scrubs", "Wish You Were Here", "Night Moves", "Good Times", "Tangled Up in Blue", "Bridge Over Troubled Water", "September", "Blitzkrieg Bop", "Jolene", "One", "Stairway to Heaven", "Running Up That Hill", "The Message", "Y.M.C.A.", "The Weight", "Work It", "Like a Prayer", "Good Vibrations", "I Feel Love", "Walk on By", "Gasolina", "Doo Wop (That Thing)", "Idioteque", "Tiny Dancer", "Paper Planes", "Alright", "Billie Jean", "My Girl", "All Along the Watchtower", "Ms. Jackson", "So Fresh, So Clean", "Seven Nation Army", "Tutti-Frutti", "Juicy", "Hypnotize", "Royals", "Team", "Nuthin' But a 'G' Thang", "Once in a Lifetime", "Born to Run", "Runaway", "A Day in the Life", "Heroes", "Imagine", "Purple Rain", "Bohemian Rhapsody", "Crazy in Love", "I Want to Hold Your Hand", "Gimme Shelter", "Superstition", "Hey Ya!", "Dreams", "What's Going On", "Smells Like Teen Spirit", "Come As You Are", "Fight the Power"],                  ["Lion", "Tiger", "Leopard", "Cheetah", "Elephant", "Giraffe", "Rhinoceros", "Gorilla", "Chimpanzee", "Wolf", "Bear", "Panda", "Kangaroo", "Koala", "Zebra", "Hippopotamus", "Crocodile", "Alligator", "Cheetah", "Bison", "Eagle", "Hawk", "Sparrow", "Robin", "Parrot", "Penguin", "Flamingo", "Peacock", "Owl", "Hummingbird", "Crow", "Seagull", "Swan", "Toucan", "Pelican", "Pigeon", "Blue Jay", "Woodpecker", "Falcon", "Vulture", "Lion", "Elephant", "Tiger", "Giraffe", "Zebra", "Cheetah", "Panda", "Kangaroo", "Koala", "Gorilla", "Hippopotamus", "Rhinoceros", "Polar bear", "Grizzly bear", "Chimpanzee", "Dolphin", "Whale", "Bat", "Squirrel", "Rabbit", "Dolphin", "Shark", "Octopus", "Jellyfish", "Seahorse", "Clownfish", "Sea turtle", "Stingray", "Starfish", "Crab", "Lobster", "Squid", "Sea otter", "Humpback whale", "Hammerhead shark", "Blue whale", "Sea lion", "Manatee", "Swordfish", "Coral", "Cow", "Horse", "Pig", "Sheep", "Goat", "Chicken", "Duck", "Turkey", "Rabbit", "Donkey", "Goose", "Llama", "Alpaca", "Goat", "Sheep", "Piglet", "Dog", "Cat", "Rabbit", "Guinea pig", "Hamster", "Parrot,", "Fish", "Turtle", "Ferret", "Gerbil", "Hedgehog", "Hermit crab", "Sugar glider", "Miniature pig", "Rabbit", "Hamster", "Goldfish", "Horse", "Bee", "Butterfly", "Mosquito", "Ladybug", "Grasshopper", "Dragonfly", "Cricket", "Beetle", "Moth", "Firefly", "Praying mantis", "Caterpillar", "Housefly", "Flea", "Tick", "Cockroach", "Wasp", "Hornet", "Aphid", "Cow", "Horse", "Pig", "Sheep", "Goat", "Chicken", "Duck", "Turkey", "Rabbit", "Donkey", "Goose", "Llama", "Alpaca", "Dog", "Piglet", "Calf", "Foal", "Colt", "Lizard", "Snake", "Turtle", "Crocodile", "Komodo Dragon", "Chameleon", "Gharial", "Tuatara", "Horned Toad", "Tegu", "Salmon", "Tuna", "Goldfish", "Clownfish", "Catfish", "Angelfish", "Swordfish", "Guppy", "Piranha", "Trout"],
                  ["Almond", "Bamboo", "Banana", "Blackberry", "Blueberry", "Brier", "Cabbage", "Carrot", "Cherry", "Chestnut", "Clover", "Coconut", "Cotton", "Daisy", "Dogwood", "Durian", "Eucalyptus", "Evergreen", "Ferns", "Fennel", "Fig", "Flax", "Garlic", "Grapefruit", "Grapevine", "Grass", "Harlequin", "Hemp", "Ivy", "Juniper", "Leek", "Lettuce", "Lilac", "Magnolia", "Maize", "Mango", "Maple", "Mesquite", "Milkweed", "Nettle", "Nightshade", "Oak tree", "Oliv", "Orange", "Parsley", "Parsnip", "Pine", "Pineapple", "Pistachio", "Plantain", "Poison ivy", "Poppy", "Potato", "Raspberry", "Rice", "Rhubarb", "Saffron", "Rosemarry", "Rye", "Strawberry", "Sugarcane", "Sunflower", "Plum", "Sweet potato", "Sycamore", "Tea", "Thistle", "Tomato", "Tobacco", "Thyme", "Tulip", "Vanilla", "Walnut", "Wheat", "Yam"],
                  ["Accountant", "Auditor", "Aircraft mechanic", "EMT", "Pilor", "Car mechanic", "Engineer", "Architect", "Clown", "Police", "Widlife officer", "Truck mechanic", "Bellhop", "Baker", "Bartender", "Bill collector", "Painter", "Musician", "Chemist", "Welder", "Brickmason", "Biologist", "Chemist", "Bus driver", "Butcher", "Weatherman", "Farmer", "Carpenter", "Cashier", "Receptionist", "Programmer", "Civil engineer", "Cook", "Construction", "Chef", "Judge", "Lawyer", "Prosecutor", "Promoter", "Manager", "Actor / Actress", "Detective", "Nutritionist", "Doctor", "Teacher", "Professor", "Dispatcher", "Derrick operator", "Dentist", "Optometrist", "Podiatrist", "Electrician", "Prinicpal", "President", "Fire fighter", "Clerk", "Forester", "Mortician", "Hairdresser", "Server", "Busboy", "Fist and Game Warden", "Geologist", "Oceanographer", "Bouncer", "Guard", "Nurse", "Roofer", "Housekeeping", "Salesperson", "Janitor", "Landscaper", "Groudskeeper", "Librarian", "Machinist", "Repairman", "Miner", "Newsman", "Therapist", "Paralegal", "Pharmacist", "Photographer", "Physical therapist", "Surgeon", "Physicist", "Pipelayer", "Postmaster", "Producer", "Director", "Psychologist", "Public relations", "Radiologist", "Railroad conductor", "Garbageman", "Reporter", "Social worker", "Insurance agent", "Cobbler", "Sheriff", "Audiologist", "Speech pathologist", "Stenographer", "Surveyor", "Travel agent", "Typist", "Upholsterer", "Usher", "Veternarian", "Waiter / Waitress", "Writer", "Editor", "Plumber"],
                  ["M&M's", "Apple", "Google", "Microsoft", "Amazon", "McDonald's", "Visa", "Tencent", "Louis Vuitton", "Mastercard", "Coca-Cola", "Energizer", "Ritz", "Hershey's", "Nike", "Adidas", "Yeezy", "Reebok", "Puma", "Saucony", "Dawn", "Ziploc", "Band-Aid", "Oreo", "Sony", "Samsung", "Bounty", "Crest", "Heinz", "Kit Kat", "Kleenex", "Snickers", "Clorox", "Pepsi", "Vaseline", "McCormick", "Lysol", "Levi's", "Quaker", "Tostitos", "Duracell", "Neosporin", "Hot Wheels", "Lay's", "Cheetos", "Windex", "Mr. Clean", "Cheerios", "Reese's", "WD-40", "Tide", "Twix", "Dove", "Hefty", "Kellogg's", "Campbell's", "Betty Crocker", "Elmer's", "Lowe's", "Nestlé", "UPS", "Walmart", "Target", "LaCroix", "Pillsbury", "Pringles", "Cheez-It", "Chips Ahoy!", "Lifesavers", "Baskin-Robbins", "Coldstone Creamery", "Ben & Jerry's", "Fruit of the Loom", "Frito-Lay", "Doritos", "Fritos", "Ace Hardware", "Discovery Channel", "Hanes", "Smucker's", "AMC", "Charmin", "Swiffer", "Reese's Pieces", "Planters", "Dell", "HP", "Nature Valley", "FedEx", "Febreze", "Tylenol", "Tootsie Pop", "Häagen-Dazs", "Cinnabon", "LG", "History Channel", "Tupperware", "Kitchen Aid", "Mattel", "Benadryl", "Colgate", "Pine-Sol", "Nesquick", "Best Buy", "Dairy Queen", "Subway", "Nabisco", "Land O' Lakes", "Jif", "Nintendo", "Xbox", "Playstation", "Breyers", "National Geographic", "Craftsman", "Netflix", "Facebook", "Honda", "Orville Redenbacher", "Ford", "Saab", "Toyota", "Chevrolet", "BMW", "Jeep", "Advil", "Kodak", "Polaroid", "CostCo", "Tums", "Sam's Club", "Wendy's", "Burger King", "Whirlpool", "Chick-fil-A", "Popeye's", "Sketchers", "Panasonic", "French's", "Butterfinger", "Starburst", "Ruffles", "Jimmy Dean", "Downy", "Goldfish", "Gillette", "Animal Planet", "Home Depot", "Coleman", "Universal Studios", "Atlantic", "Play-Doh", "Sargento", "Werther's Original", "Milky Way", "OxiClean", "Barnes & Noble", "Listerine", "Arby's", "Chex", "Canon", "Lego", "Baby Ruth", "Black & Decker", "Bisquick", "Kraft", "Jell-O", "Glade", "Frosted Flakes", "Purell", "Maytag", "Three Musketeers", "Bose", "General Electric", "Michelin", "Firestone", "Hidden Valley", "Dollar Tree", "IHOP", "Hunt's", "Alka-Seltzer", "Dial", "Outback Steakhouse", "Ghirardelli", "Hulu", "HBO", "Disney", "Sherwin Williams", "Yoplait", "Nyquil", "Progresso", "Krispy Kreme", "Dunkin' Donuts", "Intel", "AMD", "General Mills", "Burt's Bees", "H&M", "Zaraman", "Gucci", "Prada", "Fendi", "Dolce & Gabanna", "Jolly Rancher", "DeWalt", "PayPal", "Venmo", "Cash App", "Zelle", "Huntington", "Chase", "PNC", "Under Armor", "Mr. Goodbar", "John Deere", "PBS", "Hostess", "Wrangler", "IKEA", "Old Navy", "Skittles", "York", "Eggo", "Sunchips", "Icy Hot", "Prego", "Nerf", "Cinnamon Toast Crunch", "Walgreens", "Gold Bond", "Oscar Mayer", "Hilton", "Taco Bell", "Chipotle", "Dolby", "JBL", "Converse", "Vans", "Tabasco", "Cholula", "Pizza Hut", "Johnson & Johnson", "Panera Bread", "RayBan", "AutoZone", "Almond Joy", "Bath & Body Works", "Lexus", "Domino's", "Neutrogena", "King's Hawaiian", "OFF!", "Marriott", "Twizzlers", "Food Network", "CNN", "Fox", "MSNBC", "Claritin", "Paramount", "KFC", "Special K", "Mercedes-Benz", "The Weather Channel", "AAA", "Kohler", "Aldi", "The Cheesecake Factory", "Bissell", "Cottonelle", "Softsoap", "Dreyer's", "Irish Spring", "Whoppers", "New Balance", "Junior Mints", "Robitussin", "T.J. Maxx", "Marshall's", "Philips", "Jergens", "Old Spice", "Holiday Inn", "Olive Garden", "Dyson", "Aveeno", "Olay", "Goodyear", "Harley-Davidson", "ABC", "Jaguar", "Ferrari", "Corvette", "Android", "Sheetz", "7-Eleven", "DiGiorno", "Applebee's", "Volkswagen", "Lamborghini"],
                  ["Jim Carrey", "Kim Kardashian", "Morgan Freeman", "Johnny Depp", "Leonardo DiCaprio", "Beyoncé", "Taylor Swift", "Will Smith", "Miley Cyrus", "Billy Ray Cyrus", "Tom Cruise", "Lady Gaga", "Lindsay Lohan", "Ellen DeGeneres", "Denzel Washington", "Whoopi Goldberg", "Oprah Winfrey", "Justin Beiber", "Michael J. Fox", "Britney Spears", "Robert Downey Jr.", "Jennifer Lopez", "Samuel L. Jackson", "Brad Pitt", "Chuck Norris", "Alec Baldwin", "Keanu Reeves", "Harrison Ford", "Sandra Bullock", "Dolly Parton", "Danny DeVito", "Clint Eastwood", "Tom Hanks", "Stevie Wonder", "Ryan Reynolds", "Anthony Hopkins", "Al Pacino", "James Earl Jones", "Steven Spielberg", "Jack Nicholson", "Bruce Willis", "Sean Connery", "Jackie Chan", "Dustin Hoffman", "Matthew McConaughey", "Julia Roberts", "Matt Damon", "Elton John", "Michael Keaton", "Liam Neeson", "Mark Wahlberg", "Alex Trebek", "Steve Martin", "Nicolas Cage", "Robert De Niro", "Michael Jordan", "Lebron James", "Steph Curry", "Tommy Lee Jones", "Shaquille O'Neal", "Eddie Murphy", "Kevin Heart", "Jennifer Aniston", "Forest Whitaker", "Jeff Bridges", "Kathy Bates", "Kurt Russell", "Laurence Fishbourne", "Tom Selleck", "Danny Glover", "Halle Berry", "Kevin Bacon", "Steven King", "Dwayne Johnson", "Hugh Jackman", "Sylvestor Stallone", "Carol Burnett", "Bill Murray", "Adam Sandler", "Lionel Richie", "Dan Aykroyd", "George Clooney", "Meryl Streep", "Sam Elliott", "Patrick Stewart", "Michelle Pfeiffer", "Billy Joel", "Paul McCartney", "John Lennon", "Nicole Kidman", "Natalie Portman", "Emma Watson", "Joe Pesci", "Margot Robbie", "Woody Harrelson", "Sigourney Weaver", "Ben Stiller", "Billie Eilish", "Kanye West", "Justin Timberlake", "Kylie Jenner", "Bruce Jenner", "Selena Gomez", "Rihanna", "Drake", "Jay-Z", "Katy Perry", "Nicki Minaj", "Cristiano Ronaldo", "Michael B. Jordan", "Harry Styles", "Adele", "Hailey Beiber", "Jenna Ortega", "Lizzo", "Bad Bunny", "Pedro Pascal", "Megan Thee Stallion", "The Weeknd", "Dua Lipa", "Ariana Grande", "Ed Sheeran", "Zendaya", "Tom Holland", "Camila Cabello", "Sydney Sweeney", "Lil Nas X", "Jungkook", "Demi Lovato", "Cardi B", "Pink", "Ben Affleck", "Zayn Malik", "Khloe Kardashian", "Kourtney Kardashian", "Robert Pattinson", "Shawn Mendes", "Iggy Azalea", "Travis Scott", "Sam Smith", "Olivia Rodrigo", "Chris Brown", "Chrissy Teagan", "John Legend", "Amber Heard", "Kobe Bryant", "David Bowie", "Bruce Lee", "Bob Marley", "Michael Jackson", "Heath Ledger", "Robin Williams", "Elizabeth Taylor", "Paul Walker", "Jimi Hendrix", "Whitney Houston", "Kurt Cobain", "Juice Wrld", "Marilyn Monroe", "Elvis Presley", "Prince"],
                  ["Acacia Boat", "Acacia Boat with Chest", "Armor Stand", "Bamboo Raft", "Bamboo Raft with Chest", "Beetroot Seeds", "Birch Boat", "Birch Boat with Chest", "Bottle o' Enchanting", "Bow", "Bucket", "Bucket of Axolotl", "Bucket of Cod", "Bucket of Pufferfish", "Bucket of Salmon", "Bucket of Tadpole", "Bucket of Tropical Fish", "Carrot", "Cherry Boat", "Cherry Boat with Chest", "Cocoa Beans", "Crossbow", "Dark Oak Boat", "Dark Oak Boat with Chest", "Egg", "End Crystal", "Ender Pearl", "Eye of Ender", "Fire Charge", "Firework Rocket", "Fishing Rod", "Flint and Steel", "Glow Berries", "Glow Item Frame", "Item Frame", "Jungle Boat", "Jungle Boat with Chest", "Kelp", "Lava Bucket", "Lead", "Lingering Potion", "Mangrove Boat", "Mangrove Boat with Chest", "Melon Seeds", "Minecart", "Minecart with Chest", "Minecart with Command Block", "Minecart with Furnace‌", "Minecart with Hopper", "Minecart with TNT", "Nether Wart", "Oak Boat", "Oak Boat with Chest", "Painting", "Pitcher Pod", "Potato", "Powder Snow Bucket", "Pumpkin Seeds", "Redstone Dust", "Snowball", "Splash Potion", "Spruce Boat", "Spruce Boat with Chest", "String", "Sweet Berries", "Torchflower Seeds", "Trident", "Water Bucket", "Wheat Seeds", "Amethyst Shard", "Apple", "Arrow", "Baked Potato", "Beetroot", "Beetroot Soup", "Black Dye", "Blue Dye", "Bone", "Bone Meal", "Book", "Book and Quill", "Bowl", "Bread", "Brown Dye", "Brush", "Bundle", "Carrot on a Stick", "Chainmail Boots", "Chainmail Chestplate", "Chainmail Helmet", "Chainmail Leggings", "Chorus Fruit", "Compass", "Cooked Chicken", "Cooked Cod", "Cooked Mutton", "Cooked Porkchop", "Cooked Rabbit", "Cooked Salmon", "Cookie", "Cyan Dye", "Debug Stick‌[JE only]", "Diamond Axe", "Diamond Boots", "Diamond Chestplate", "Diamond Helmet", "Diamond Hoe", "Diamond Horse Armor", "Diamond Leggings", "Diamond Pickaxe", "Diamond Shovel", "Diamond Sword", "Dried Kelp", "Elytra", "Empty Map", "Enchanted Book", "Enchanted Golden Apple", "Goat Horn", "Glass Bottle", "Glow Ink Sac", "Gold Ingot", "Golden Apple", "Golden Axe", "Golden Boots", "Golden Carrot", "Golden Chestplate", "Golden Helmet", "Golden Hoe", "Golden Horse Armor", "Golden Leggings", "Golden Pickaxe", "Golden Shovel", "Golden Sword", "Gray Dye", "Green Dye", "Honeycomb", "Honey Bottle", "Ink Sac", "Iron Axe", "Iron Boots", "Iron Chestplate", "Iron Helmet", "Iron Hoe", "Iron Horse Armor", "Iron Ingot", "Iron Leggings", "Iron Pickaxe", "Iron Shovel", "Iron Sword", "Knowledge Book", "Lapis Lazuli", "Leather Boots", "Leather Cap", "Leather Horse Armor", "Leather Pants", "Leather Tunic", "Light Blue Dye", "Light Gray Dye", "Lime Dye", "Magenta Dye", "Map or Explorer Map", "Melon Slice", "Milk Bucket", "Mushroom Stew", "Music Disc", "Name Tag", "Netherite Axe", "Netherite Boots", "Netherite Chestplate", "Netherite Helmet", "Netherite Hoe", "Netherite Leggings", "Netherite Pickaxe", "Netherite Shovel", "Netherite Sword", "Orange Dye", "Pink Dye", "Poisonous Potato", "Potions", "Pufferfish", "Pumpkin Pie", "Purple Dye", "Rabbit Stew", "Raw Beef", "Raw Chicken", "Raw Cod", "Raw Mutton", "Raw Porkchop", "Raw Rabbit", "Raw Salmon", "Red Dye", "Rotten Flesh", "Saddle", "Shears", "Shield", "Spectral Arrow‌", "Spider Eye", "Spyglass", "Steak", "Stone Axe", "Stone Hoe", "Stone Pickaxe", "Stone Shovel", "Stone Sword", "Sugar", "Suspicious Stew", "Tipped Arrow", "Totem of Undying", "Tropical Fish", "Turtle Shell", "Warped Fungus on a Stick", "Wheat", "White Dye", "Wooden Axe", "Wooden Hoe", "Wooden Pickaxe", "Wooden Shovel", "Wooden Sword", "Written Book", "Yellow Dye", "Angler Pottery Sherd", "Archer Pottery Sherd", "Arms Up Pottery Sherd", "Banner Pattern", "Blade Pottery Sherd", "Blaze Powder", "Blaze Rod", "Brewer Pottery Sherd", "Brick", "Burn Pottery Sherd", "Charcoal", "Clay Ball", "Clock", "Coal", "Coast Armor Trim", "Copper Ingot", "Danger Pottery Sherd", "Diamond", "Disc Fragment", "Dragon's Breath", "Dune Armor Trim", "Echo Shard", "Emerald", "Explorer Pottery Sherd", "Eye Armor Trim", "Feather", "Fermented Spider Eye", "Firework Star", "Flint", "Friend Pottery Sherd", "Ghast Tear", "Glistering Melon Slice", "Glowstone Dust", "Gold Nugget", "Gunpowder", "Heart of the Sea", "Heart Pottery Sherd", "Heartbreak Pottery Sherd", "Host Armor Trim", "Howl Pottery Sherd", "Ink Sac", "Iron Ingot", "Iron Nugget", "Lapis Lazuli", "Leather", "Magma Cream", "Miner Pottery Sherd", "Mourner Pottery Sherd", "Nautilus Shell", "Nether Brick", "Nether Quartz", "Nether Star", "Netherite Ingot", "Netherite Scrap", "Netherite Upgrade", "Paper", "Phantom Membrane", "Plenty Pottery Sherd", "Popped Chorus Fruit", "Prismarine Crystals", "Prismarine Shard", "Prize Pottery Sherd", "Rabbit Hide", "Rabbit's Foot", "Raiser Armor Trim", "Raw Copper", "Raw Gold", "Raw Iron", "Recovery Compass", "Rib Armor Trim", "Scute", "Sentry Armor Trim", "Shaper Armor Trim", "Sheaf Pottery Sherd", "Shelter Pottery Sherd", "Shulker Shell", "Silence Armor Trim", "Skull Pottery Sherd", "Slimeball", "Snort Pottery Sherd", "Spire Armor Trim", "Stick", "Tide Armor Trim", "Vex Armor Trim", "Ward Armor Trim", "Wayfinder Armor Trim", "Wild Armor Trim", "Allay", "Axolotl", "Bat", "Bee", "Blaze", "Camel", "Cat", "Cave Spider", "Chicken", "Chicken Jockey", "Cod", "Cow", "Creeper", "Dolphin", "Donkey", "Drowned", "Ender Guardian", "Ender Dragon", "Enderman", "Endermite", "Evoker", "Forx", "Frog", "Ghast", "Glow Squit", "Giant", "Goat", "Guardian", "Horse", "Hoglin", "Husk", "Illusioner", "Iron Golem", "Killer Bunny", "Llama", "Magma Cube", "Mooshroom", "Mule", "Ocelot", "Panda", "Parrot", "Phantom", "Pig", "Piglin", "Piglin Brute", "Pillager", "Polar Bear", "Pufferfish", "Rabbit", "Ravager", "Salmon", "Sheep", "Shulker", "Silverfish", "Skeleton", "Skeleton Horse", "Skeleton Horseman", "Slime", "Snow Golem", "Sniffer", "Spider", "Spider Jockey", "Squid", "Stray", "Strider", "Tadpole", "Trader Llama", "Tropical Fish", "Turtle", "Vex", "Villager", "Vindicator", "Wandering Trader", "Warden", "Witch", "Wither", "Wither Skeleton", "Wolf", "Zoglin", "Zombie", "Zombie Horse", "Zombie Villager", "Zombified Piglin", "Air", "Stone", "Granite", "Polished Granite", "Diorite", "Polished Diorite", "Andesite", "Polished Andesite", "Grass", "Dirt", "Coarse Dirt", "Podzol", "Cobblestone", "Oak Wood Plank", "Spruce Wood Plank", "Birch Wood Plank", "Jungle Wood Plank", "Acacia Wood Plank", "Dark Oak Wood Plank", "Oak Sapling", "Spruce Sapling", "Birch Sapling", "Jungle Sapling", "Acacia Sapling", "Dark Oak Sapling", "Bedrock", "Flowing Water", "Still Water", "Flowing Lava", "Still Lava", "Sand", "Red Sand", "Gravel", "Gold Ore", "Iron Ore", "Coal Ore", "Oak Wood", "Spruce Wood", "Birch Wood", "Jungle Wood", "Oak Leaves", "Spruce Leaves", "Birch Leaves", "Jungle Leaves", "Sponge", "Wet Sponge", "Glass", "Lapis Lazuli Ore", "Lapis Lazuli Block", "Dispenser", "Sandstone", "Chiseled Sandstone", "Smooth Sandstone", "Note Block", "Bed", "Powered Rail", "Detector Rail", "Sticky Piston", "Cobweb", "Dead Shrub", "Grass", "Fern", "Dead Bush", "Piston", "Piston Head", "White Wool", "Orange Wool", "Magenta Wool", "Light Blue Wool", "Yellow Wool", "Lime Wool", "Pink Wool", "Gray Wool", "Light Gray Wool", "Cyan Wool", "Purple Wool", "Blue Wool", "Brown Wool", "Green Wool", "Red Wool", "Black Wool", "Dandelion", "Poppy", "Blue Orchid", "Allium", "Azure Bluet", "Red Tulip", "Orange Tulip", "White Tulip", "Pink Tulip", "Oxeye Daisy", "Brown Mushroom", "Red Mushroom", "Gold Block", "Iron Block", "Double Stone Slab", "Double Sandstone Slab", "Double Wooden Slab", "Double Cobblestone Slab", "Double Brick Slab", "Double Stone Brick Slab", "Double Nether Brick Slab", "Double Quartz Slab", "Stone Slab", "Sandstone Slab", "Wooden Slab", "Cobblestone Slab", "Brick Slab", "Stone Brick Slab", "Nether Brick Slab", "Quartz Slab", "Bricks", "TNT", "Bookshelf", "Moss Stone", "Obsidian", "Torch", "Fire", "Monster Spawner", "Oak Wood Stairs", "Chest", "Redstone Wire", "Diamond Ore", "Diamond Block", "Crafting Table", "Wheat Crops", "Farmland", "Furnace", "Burning Furnace", "Standing Sign Block", "Oak Door Block", "Ladder", "Rail", "Cobblestone Stairs", "Wall-mounted Sign Block", "Lever", "Stone Pressure Plate", "Iron Door Block", "Wooden Pressure Plate", "Redstone Ore", "Glowing Redstone Ore", "Redstone Torch (off)", "Redstone Torch (on)", "Stone Button", "Snow", "Ice", "Snow Block", "Cactus", "Clay", "Sugar Canes", "Jukebox", "Oak Fence", "Pumpkin", "Netherrack", "Soul Sand", "Glowstone", "Nether Portal", "Jack o'Lantern", "Cake Block", "Redstone Repeater Block (off)", "Redstone Repeater Block (on)", "White Stained Glass", "Orange Stained Glass", "Magenta Stained Glass", "Light Blue Stained Glass", "Yellow Stained Glass", "Lime Stained Glass", "Pink Stained Glass", "Gray Stained Glass", "Light Gray Stained Glass", "Cyan Stained Glass", "Purple Stained Glass", "Blue Stained Glass", "Brown Stained Glass", "Green Stained Glass", "Red Stained Glass", "stained_glass", "Wooden Trapdoor", "Stone Monster Egg", "Cobblestone Monster Egg", "Stone Brick Monster Egg", "Mossy Stone Brick Monster Egg", "Cracked Stone Brick Monster Egg", "Chiseled Stone Brick Monster Egg", "Stone Bricks", "Mossy Stone Bricks", "Cracked Stone Bricks", "Chiseled Stone Bricks", "Brown Mushroom Block", "Red Mushroom Block", "Iron Bars", "Glass Pane", "Melon Block", "Pumpkin Stem", "Melon Stem", "Vines", "Oak Fence Gate", "Brick Stairs", "Stone Brick Stairs", "Mycelium", "Lily Pad", "Nether Brick", "Nether Brick Fence", "Nether Brick Stairs", "Nether Wart", "Enchantment Table", "Brewing Stand", "Cauldron", "End Portal", "End Portal Frame", "End Stone", "Dragon Egg", "Redstone Lamp (inactive)", "Redstone Lamp (active)", "Double Oak Wood Slab", "Double Spruce Wood Slab", "Double Birch Wood Slab", "Double Jungle Wood Slab", "Double Acacia Wood Slab", "Double Dark Oak Wood Slab", "Oak Wood Slab", "Spruce Wood Slab", "Birch Wood Slab", "Jungle Wood Slab", "Acacia Wood Slab", "Dark Oak Wood Slab", "Cocoa", "Sandstone Stairs", "Emerald Ore", "Ender Chest", "Tripwire Hook", "Tripwire", "Emerald Block", "Spruce Wood Stairs", "Birch Wood Stairs", "Jungle Wood Stairs", "Command Block", "Beacon", "Cobblestone Wall", "Mossy Cobblestone Wall", "Flower Pot", "Carrots", "Potatoes", "Wooden Button", "Mob Head", "Anvil", "Trapped Chest", "Weighted Pressure Plate (light)", "Weighted Pressure Plate (heavy)", "Redstone Comparator (inactive)", "Redstone Comparator (active)", "Daylight Sensor", "Redstone Block", "Nether Quartz Ore", "Hopper", "Quartz Block", "Chiseled Quartz Block", "Pillar Quartz Block", "Quartz Stairs", "Activator Rail", "Dropper", "White Hardened Clay", "Orange Hardened Clay", "Magenta Hardened Clay", "Light Blue Hardened Clay", "Yellow Hardened Clay", "Lime Hardened Clay", "Pink Hardened Clay", "Gray Hardened Clay", "Light Gray Hardened Clay", "Cyan Hardened Clay", "Purple Hardened Clay", "Blue Hardened Clay", "Brown Hardened Clay", "Green Hardened Clay", "Red Hardened Clay", "Black Hardened Clay", "White Stained Glass Pane", "Orange Stained Glass Pane", "Magenta Stained Glass Pane", "Light Blue Stained Glass Pane", "Yellow Stained Glass Pane", "Lime Stained Glass Pane", "Pink Stained Glass Pane", "Gray Stained Glass Pane", "Light Gray Stained Glass Pane", "Cyan Stained Glass Pane", "Purple Stained Glass Pane", "Blue Stained Glass Pane", "Brown Stained Glass Pane", "Green Stained Glass Pane", "Red Stained Glass Pane", "Black Stained Glass Pane", "Acacia Leaves", "Dark Oak Leaves", "Acacia Wood", "Dark Oak Wood", "Acacia Wood Stairs", "Dark Oak Wood Stairs", "Slime Block", "Barrier", "Iron Trapdoor", "Prismarine", "Prismarine Bricks", "Dark Prismarine", "Sea Lantern", "Hay Bale", "White Carpet", "Orange Carpet", "Magenta Carpet", "Light Blue Carpet", "Yellow Carpet", "Lime Carpet", "Pink Carpet", "Gray Carpet", "Light Gray Carpet", "Cyan Carpet", "Purple Carpet", "Blue Carpet", "Brown Carpet", "Green Carpet", "Red Carpet", "Black Carpet", "Hardened Clay", "Block of Coal", "Packed Ice", "Sunflower", "Lilac", "Double Tallgrass", "Large Fern", "Rose Bush", "Peony", "Free-standing Banner", "Wall-mounted Banner", "Inverted Daylight Sensor", "Red Sandstone", "Chiseled Red Sandstone", "Smooth Red Sandstone", "Red Sandstone Stairs", "Double Red Sandstone Slab", "Red Sandstone Slab", "Spruce Fence Gate", "Birch Fence Gate", "Jungle Fence Gate", "Dark Oak Fence Gate", "Acacia Fence Gate", "Spruce Fence", "Birch Fence", "Jungle Fence", "Dark Oak Fence", "Acacia Fence", "Spruce Door Block", "Birch Door Block", "Jungle Door Block", "Acacia Door Block", "Dark Oak Door Block", "End Rod", "Chorus Plant", "Chorus Flower", "Purpur Block", "Purpur Pillar", "Purpur Stairs", "Purpur Double Slab", "Purpur Slab", "End Stone Bricks", "Beetroot Block", "Grass Path", "End Gateway", "Repeating Command Block", "Chain Command Block", "Frosted Ice", "Magma Block", "Nether Wart Block", "Red Nether Brick", "Bone Block", "Structure Void", "Observer", "White Shulker Box", "Orange Shulker Box", "Magenta Shulker Box", "Light Blue Shulker Box", "Yellow Shulker Box", "Lime Shulker Box", "Pink Shulker Box", "Gray Shulker Box", "Light Gray Shulker Box", "Cyan Shulker Box", "Purple Shulker Box", "Blue Shulker Box", "Brown Shulker Box", "Green Shulker Box", "Red Shulker Box", "Black Shulker Box", "White Glazed Terracotta", "Orange Glazed Terracotta", "Magenta Glazed Terracotta", "Light Blue Glazed Terracotta", "Yellow Glazed Terracotta", "Lime Glazed Terracotta", "Pink Glazed Terracotta", "Gray Glazed Terracotta", "Light Gray Glazed Terracotta", "Cyan Glazed Terracotta", "Purple Glazed Terracotta", "Blue Glazed Terracotta", "Brown Glazed Terracotta", "Green Glazed Terracotta", "Red Glazed Terracotta", "Black Glazed Terracotta", "White Concrete", "Orange Concrete", "Magenta Concrete", "Light Blue Concrete", "Yellow Concrete", "Lime Concrete", "Pink Concrete", "Gray Concrete", "Light Gray Concrete", "Cyan Concrete", "Purple Concrete", "Blue Concrete", "Brown Concrete", "Green Concrete", "Red Concrete", "Black Concrete", "White Concrete Powder", "Orange Concrete Powder", "Magenta Concrete Powder", "Light Blue Concrete Powder", "Yellow Concrete Powder", "Lime Concrete Powder", "Pink Concrete Powder", "Gray Concrete Powder", "Light Gray Concrete Powder", "Cyan Concrete Powder", "Purple Concrete Powder", "Blue Concrete Powder", "Brown Concrete Powder", "Green Concrete Powder", "Red Concrete Powder", "Black Concrete Powder", "Structure Block", "Iron Shovel", "Iron Pickaxe", "Iron Axe", "Flint and Steel", "Apple", "Bow", "Arrow", "Coal", "Charcoal", "Diamond", "Iron Ingot", "Gold Ingot", "Iron Sword", "Wooden Sword", "Wooden Shovel", "Wooden Pickaxe", "Wooden Axe", "Stone Sword", "Stone Shovel", "Stone Pickaxe", "Stone Axe", "Diamond Sword", "Diamond Shovel", "Diamond Pickaxe", "Diamond Axe", "Stick", "Bowl", "Mushroom Stew", "Golden Sword", "Golden Shovel", "Golden Pickaxe", "Golden Axe", "String", "Feather", "Gunpowder", "Wooden Hoe", "Stone Hoe", "Iron Hoe", "Diamond Hoe", "Golden Hoe", "Wheat Seeds", "Wheat", "Bread", "Leather Helmet", "Leather Tunic", "Leather Pants", "Leather Boots", "Chainmail Helmet", "Chainmail Chestplate", "Chainmail Leggings", "Chainmail Boots", "Iron Helmet", "Iron Chestplate", "Iron Leggings", "Iron Boots", "Diamond Helmet", "Diamond Chestplate", "Diamond Leggings", "Diamond Boots", "Golden Helmet", "Golden Chestplate", "Golden Leggings", "Golden Boots", "Flint", "Raw Porkchop", "Cooked Porkchop", "Painting", "Golden Apple", "Enchanted Golden Apple", "Sign", "Oak Door", "Bucket", "Water Bucket", "Lava Bucket", "Minecart", "Saddle", "Iron Door", "Redstone", "Snowball", "Oak Boat", "Leather", "Milk Bucket", "Brick", "Clay", "Sugar Canes", "Paper", "Book", "Slimeball", "Minecart with Chest", "Minecart with Furnace", "Egg", "Compass", "Fishing Rod", "Clock", "Glowstone Dust", "Raw Fish", "Raw Salmon", "Clownfish", "Pufferfish", "Cooked Fish", "Cooked Salmon", "Ink Sack", "Rose Red", "Cactus Green", "Coco Beans", "Lapis Lazuli", "Purple Dye", "Cyan Dye", "Light Gray Dye", "Gray Dye", "Pink Dye", "Lime Dye", "Dandelion Yellow", "Light Blue Dye", "Magenta Dye", "Orange Dye", "Bone Meal", "Bone", "Sugar", "Cake", "Bed", "Redstone Repeater", "Cookie", "Map", "Shears", "Melon", "Pumpkin Seeds", "Melon Seeds", "Raw Beef", "Steak", "Raw Chicken", "Cooked Chicken", "Rotten Flesh", "Ender Pearl", "Blaze Rod", "Ghast Tear", "Gold Nugget", "Nether Wart", "Potion", "Glass Bottle", "Spider Eye", "Fermented Spider Eye", "Blaze Powder", "Magma Cream", "Brewing Stand", "Cauldron", "Eye of Ender", "Glistering Melon", "Spawn Elder Guardian", "Spawn Wither Skeleton", "Spawn Stray", "Spawn Husk", "Spawn Zombie Villager", "Spawn Skeleton Horse", "Spawn Zombie Horse", "Spawn Donkey", "Spawn Mule", "Spawn Evoker", "Spawn Vex", "Spawn Vindicator", "Spawn Creeper", "Spawn Skeleton", "Spawn Spider", "Spawn Zombie", "Spawn Slime", "Spawn Ghast", "Spawn Zombie Pigman", "Spawn Enderman", "Spawn Cave Spider", "Spawn Silverfish", "Spawn Blaze", "Spawn Magma Cube", "Spawn Bat", "Spawn Witch", "Spawn Endermite", "Spawn Guardian", "Spawn Shulker", "Spawn Pig", "Spawn Sheep", "Spawn Cow", "Spawn Chicken", "Spawn Squid", "Spawn Wolf", "Spawn Mooshroom", "Spawn Ocelot", "Spawn Horse", "Spawn Rabbit", "Spawn Polar Bear", "Spawn Llama", "Spawn Parrot", "Spawn Villager", "Bottle o' Enchanting", "Fire Charge", "Book and Quill", "Written Book", "Emerald", "Item Frame", "Flower Pot", "Carrot", "Potato", "Baked Potato", "Poisonous Potato", "Empty Map", "Golden Carrot", "Mob Head (Skeleton)", "Mob Head (Wither Skeleton)", "Mob Head (Zombie)", "Mob Head (Human)", "Mob Head (Creeper)", "Mob Head (Dragon)", "Carrot on a Stick", "Nether Star", "Pumpkin Pie", "Firework Rocket", "Firework Star", "Enchanted Book", "Redstone Comparator", "Nether Brick", "Nether Quartz", "Minecart with TNT", "Minecart with Hopper", "Prismarine Shard", "Prismarine Crystals", "Raw Rabbit", "Cooked Rabbit", "Rabbit Stew", "Rabbit's Foot", "Rabbit Hide", "Armor Stand", "Iron Horse Armor", "Golden Horse Armor", "Diamond Horse Armor", "Lead", "Name Tag", "Minecart with Command Block", "Raw Mutton", "Cooked Mutton", "Banner", "End Crystal", "Spruce Door", "Birch Door", "Jungle Door", "Acacia Door", "Dark Oak Door", "Chorus Fruit", "Popped Chorus Fruit", "Beetroot", "Beetroot Seeds", "Beetroot Soup", "Dragon's Breath", "Splash Potion", "Spectral Arrow", "Tipped Arrow", "Lingering Potion", "Shield", "Elytra", "Spruce Boat", "Birch Boat", "Jungle Boat", "Acacia Boat", "Dark Oak Boat", "Totem of Undying", "Shulker Shell", "Iron Nugget", "Knowledge Book", "record_13", "Cat Disc", "Blocks Disc", "Chirp Disc", "Far Disc", "Mall Disc", "Mellohi Disc", "Stal Disc", "Strad Disc", "Ward Disc", "11 Disc", "Wait Disc"],


                  ["Masturbation", "BDSM", "Butt plug", "Virbrator", "Dildo", "Orgy", "Foreplay", "Anal", "Bondage", "Autoerotic Asphyxiation", "Kama sutra", "Orgasm", "Erection", "Vagina", "Lube", "Clitoris", "Penis", "Butthole", "Semen", "Erectile Dysfunction", "Horny", "Sexual Tension", "Condom", "Female condom", "HIV", "AIDS", "Heterosexual", "Homosexual", "Pansexual", "Bisexual", "Sodomy", "Oral", "Gay", "Lesbian", "Contraception", "Swingers", "Porn", "Pornstar", "Phone sex", "Pocket pussy", "Pussy", "Prick", "Shagging", "Doing it", "Sleep together", "2 in the pink, 1 in the stink", "Cock ring", "Trojan", "Astroglide", "Leather", "Chastity belt", "Edging", "Scissoring", "Bareback", "Asexual", "Blue balls", "Bulge", "Creampie", "Cicumcision", "Cunnilingus", "Deep throat", "Diaphragm", "Dirty talk", "Facial", "Doggy-style", "Missionary", "Fingering", "Foot fetish", "Fetish", "Foot job", "Gagging", "Hickey", "Hand job", "Mile-High Club", "Motorboating", "Nipple clamps", "Pegging", "Period sex", "Quickie", "Queefing", "Cowgirl", "Reverse cowgirl", "Rimming", "Shrimping", "69", "Squirting", "Strap-on", "Tea bagging", "Thigh job", "Threesome", "Foursome", "Face sitting", "Aftercare", "Bukkake", "Docking", "Cuckold", "Water sports", "Fisting", "Areola", "Bicurious", "Balls", "Boner", "Boobs", "Cervix", "Chlamydia", "Cum", "Dental Dam", "Dick", "Douche", "Dry humping", "Erotic", "Flashing", "Foreskin", "Golden shower", "Herpes", "Hymen", "Libido", "Implant", "Kink", "Lust", "Love", "Public hair", "Role play", "Safe word", "Sexting", "Sex worker", "Taboo", "Smegma", "Testicles", "Urinary Tract Infection", "Virgin", "Pull out", "Wet dream"],
                  ["Acid", "LSD", "Magic mushrooms", "Benzodiazepine", "Methamphetamine", "Speed", "Steriods", "Ayahuasca", "DMT", "Angle dust", "PCP", "Tobacco", "Balloons", "Nitrous oxide", "Bars", "Base", "Ether", "Bath salts", "Blow", "Cocaine", "Booze", "Alcohol", "Brown", "Heroin", "Bud", "Weed", "Cannabis", "Pot", "Butane", "Chroming", "Codeine", "Ciggarette", "Coke", "Crystal", "Crank", "Crack", "Meth", "Dimitri", "Diaze", "Ecstacy", "Dope", "Dizzle", "Drop", "Downers", "Uppers", "E", "E-cigarette", "Vape", "Hookah", "Salvia", "Kratom", "Fentanyl", "Freebase", "Canja", "Gear", "Glass", "Grass", "Herb", "Hashish", "Hash", "Horse", "Huffing", "Smoking", "Popping", "Ice", "PED", "Inhale", "Inhalant", "Juice", "K", "Ketamine", "Ket", "K2", "Syntheic Cannabis", "Laughing Gas", "Lucy", "GHB", "Liquid ecstacy", "Mandy", "Mary Jane", "MDMA", "Methadone", "Molly", "Mushies", "Morphine", "Opiate", "Nic", "Nicotine", "Nos", "Painkiller", "Peyote", "Pills", "Puff", "Resin", "Wax", "Rolling", "Roofy", "Shrooms", "Skag", "Skunk", "Smack", "Adderall", "Syrup", "Tab", "Toot", "Valium", "Viagara", "Whippits", "White", "X", "Xanax", "Bean", "Smart pills", "Robo tripping", "Purple drank", "Chalk", "Chronic", "Kush", "Trees", "Purple Haze", "Reefer", "Buttons", "Caps", "Oxycotton", "Ritalin", "Suboxone", "Brick", "Pound", "Ounce", "Gram", "Milligram", "Kilogram"],
                  ["Assault", "Aggravated Assault", "Arson", "Battery", "Bribery", "Burglary", "Child Abuse", "Child Pornography", "Conspiracy", "Fraud", "Contempt of Court", "Disturbing the Peace", "Domestic Violence", "Drug Possession", "Drug Trafficking", "DUI", "Embezzlement", "Extortion", "Forgery", "Harassment", "Hate Crime", "Homicide", "Identity Theft", "Indecent Exposure", "Insurance Fraud", "Kidnapping", "Money Laundering", "First Degree Murder", "Second Degree Murder", "Open Container", "Public Urination", "Perjury", "Prostitution", "Public Intoxication", "Racketeering", "RICO", "Rape", "Robbery", "Sexual Assault", "Shoplifting", "Driving while Black", "Solicitation", "Satutory Rape", "Tax Evasion", "Theft", "Vandalism", "Blackmail", "Bomb Threat", "Street Racing", "Animal Abuse", "Desertion", "Failure to Appear", "Felony", "Misdemeanor", "Hazing", "Intimidation", "Jury Tampering", "Loitering", "Moonshining", "Bootlegging", "Obstruction of Justice", "Practicing Without a License", "Road Rage", "Trespassing", "Terrorism", "Witness Tampering"]
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
        if(this.mode_ == "Select") {
            document.getElementById("textBar").innerHTML = CATEGORY_MAP[this.categoryItr_][0];
            let nsfwOffset = nsfw ? 0 : 3;
            this.categoryItr_ = (this.categoryItr_ + 1) % (CATEGORY_MAP.length - nsfwOffset);
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
            document.getElementById("textBar").style = nsfw ? "border-color:rgb(200,0,40);" : "border-color:rgb(70,120,160);"

            document.getElementById("nextButton").disabled = true;
            this.mode_ = "Select";
        } 
    }

    checkWin() {
        if(this.teamOneScore_ >= MAX_SCORE) {
            this.stopRound();
            document.getElementById("textBar").innerHTML = "CONGRATS TEAM ONE!"
        }
        if(this.teamTwoScore_ >= MAX_SCORE) {
            this.stopRound();
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

