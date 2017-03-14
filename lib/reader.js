exports.Reader = (function() {
  var questions  = [
    {
      "number": 1,
      "category": "Arts&Entertainment",
      "question": "Who was the youngest person to win an acting Oscar?\n",
      "answers": [
        "tatum o'neal at age 10",
        "tatum o'neal"
      ]
    },
    {
      "number": 2,
      "category": "Arts&Entertainment",
      "question": "What did the Scarecrow want from the Wizard of Oz?\n",
      "answers": [
        "a brain",
        "brain"
      ]
    },
    {
      "number": 3,
      "category": "Arts&Entertainment",
      "question": "What is Keanu Reeves character's Real name in \"The Matrix\" (1999)?\n",
      "answers": [
        "thomas anderson",
        "tom anderson"
      ]
    },
    {
      "number": 4,
      "category": "Arts&Entertainment",
      "question": "What is Keanu Reeve's hacker name in the movie, \"The Matrix\" (1999)?\n",
      "answers": [
        "neo"
      ]
    },
    {
      "number": 5,
      "category": "Arts&Entertainment",
      "question": "Who is the voice of Darth Vader in \"Star Wars\"?\n",
      "answers": [
        "james earl jones"
      ]
    },
    {
      "number": 6,
      "category": "Arts&Entertainment",
      "question": "What is the name of Han Solo's ship in \"Star Wars\"?\n",
      "answers": [
        "the millennium falcon",
        "millennium falcon",
        "millenium falcon"
      ]
    },
    {
      "number": 7,
      "category": "Arts&Entertainment",
      "question": "What kind of car was used as a time machine in the \"Back To The Future\" movies?\n",
      "answers": [
        "a deloren",
        "deloren"
      ]
    },
    {
      "number": 8,
      "category": "Arts&Entertainment",
      "question": "What is the name of the sequel to \"101 Dalmations\"?\n",
      "answers": [
        "102 dalmations"
      ]
    },
    {
      "number": 9,
      "category": "Arts&Entertainment",
      "question": "What was Indiana Jones's real first name?\n",
      "answers": [
        "henry"
      ]
    },
    {
      "number": 10,
      "category": "Arts&Entertainment",
      "question": "What actor starred in both \"Funny Girl\" and \"Lawrence Of Arabia\"?\n",
      "answers": [
        "omar sharif",
        "sharif"
      ]
    },
    {
      "number": 11,
      "category": "Arts&Entertainment",
      "question": "What Academy Award winning actor is Angelina Jolie's father?\n",
      "answers": [
        "jon voight",
        "voight"
      ]
    },
    {
      "number": 12,
      "category": "Arts&Entertainment",
      "question": "Who is famous for saying 'I'll be back'?\n",
      "answers": [
        "arnold schwarzenegger",
        "arnold"
      ]
    },
    {
      "number": 13,
      "category": "Arts&Entertainment",
      "question": "Who is famous for saying 'Make my day'?\n",
      "answers": [
        "clint eastwood",
        "eastwood"
      ]
    },
    {
      "number": 14,
      "category": "Arts&Entertainment",
      "question": "Who played the voice of the baby in \"Look Who's Talking\" (1989)?\n",
      "answers": [
        "bruce willis",
        "willis"
      ]
    },
    {
      "number": 15,
      "category": "Arts&Entertainment",
      "question": "What name is Lazlo Loewenstein  better know as?\n",
      "answers": [
        "peter lorre",
        "lorre"
      ]
    },
    {
      "number": 16,
      "category": "Arts&Entertainment",
      "question": "Lucille LeSueur was the real name of what legendary Hollywood actress?\n",
      "answers": [
        "joan crawford",
        "crawford"
      ]
    },
    {
      "number": 17,
      "category": "Arts&Entertainment",
      "question": "Caryn Johnson is the birth name of what famous comic and actress?\n",
      "answers": [
        "whoopi goldberg",
        "whoopi",
        "goldburg",
        "goldberg"
      ]
    },
    {
      "number": 18,
      "category": "Arts&Entertainment",
      "question": "In what movie did we first hear 'May the force be with you'?\n",
      "answers": [
        "star wars"
      ]
    },
    {
      "number": 19,
      "category": "Arts&Entertainment",
      "question": "In what movie did Tom Cruise play a vampire?\n",
      "answers": [
        "interview with the vampire"
      ]
    },
    {
      "number": 20,
      "category": "Arts&Entertainment",
      "question": "Who played Dr. Frankenstein in \"Young Frankenstein\"?\n",
      "answers": [
        "gene wilder",
        "wilder"
      ]
    },
    {
      "number": 21,
      "category": "Arts&Entertainment",
      "question": "Who played the monster in \"Young Frankenstein\"?\n",
      "answers": [
        "peter boyle",
        "boyle"
      ]
    },
    {
      "number": 22,
      "category": "Geography",
      "question": "What is the highest mountain in the world?\n",
      "answers": [
        "mt. everest in nepal and tibet at 29,028 feet",
        "mt. everest",
        "everest"
      ]
    },
    {
      "number": 23,
      "category": "United States",
      "question": "In what year did Alaska become a state?\n",
      "answers": [
        "1959 as the 49th state",
        "1959"
      ]
    },
    {
      "number": 24,
      "category": "Geography",
      "question": "What is the largest 'lake' in the world?\n",
      "answers": [
        "the caspian sea",
        "caspian"
      ]
    },
    {
      "number": 25,
      "category": "Geography",
      "question": "What is the largest lake in North America?\n",
      "answers": [
        "lake superior"
      ]
    },
    {
      "number": 26,
      "category": "United States",
      "question": "What year did women win the right to vote in national elections in the U.S.?\n",
      "answers": [
        "august 18, 1920",
        "1920"
      ]
    },
    {
      "number": 27,
      "category": "Science&Nature",
      "question": "How many tentacles does an octopus have?\n",
      "answers": [
        "8",
        "eight"
      ]
    },
    {
      "number": 28,
      "category": "Science&Nature",
      "question": "How many legs does a spider have?\n",
      "answers": [
        "8",
        "eight"
      ]
    },
    {
      "number": 29,
      "category": "Science&Nature",
      "question": "About how fast can a dragonfly fly; 10, 20, 30 or 40 miles per hour?\n",
      "answers": [
        "30 miles per hour",
        "30"
      ]
    },
    {
      "number": 30,
      "category": "United States",
      "question": "In what city did Rosa Parks first take a stand against \"Jim Crow\" laws by refusing to stand?\n",
      "answers": [
        "montgomery, alabama, december 1, 1955",
        "montgomery"
      ]
    },
    {
      "number": 31,
      "category": "Geography",
      "question": "Where is the Weddell Sea?\n",
      "answers": [
        "antartica"
      ]
    },
    {
      "number": 32,
      "category": "Geography",
      "question": "What is the longest river in the world?\n",
      "answers": [
        "the nile at 4,160 miles",
        "nile"
      ]
    },
    {
      "number": 33,
      "category": "Geography",
      "question": "What is the largest lake in Africa?\n",
      "answers": [
        "lake victoria at 28,820 square miles",
        "lake victoria",
        "victoria"
      ]
    },
    {
      "number": 34,
      "category": "Geography",
      "question": "What do Istanbul, Constantinople, and Byzantium have in common?\n",
      "answers": [
        "they are all historical names for the same place",
        "same place",
        "same city"
      ]
    },
    {
      "number": 35,
      "category": "Sports&Leisure",
      "question": "Who fought in the boxing match called 'The Thrilla in Manila'?\n",
      "answers": [
        "muhammad ali and joe frazier (ali won)",
        "ali and frazier",
        "ali & frazier",
        "muhammad and joe"
      ]
    },
    {
      "number": 36,
      "category": "History",
      "question": "In what year was the Magna Carta signed?\n",
      "answers": [
        "1215"
      ]
    },
    {
      "number": 37,
      "category": "History",
      "question": "What 2 countries fought the Hundred Years War?\n",
      "answers": [
        "france and england from 1334 to 1453",
        "france and england",
        "france & england"
      ]
    },
    {
      "number": 38,
      "category": "Arts&Entertainment",
      "question": "How are the Bee Gees related?\n",
      "answers": [
        "they are brothers",
        "brothers"
      ]
    },
    {
      "number": 39,
      "category": "Sports&Leisure",
      "question": "Where was the game of golf invented?\n",
      "answers": [
        "scotland"
      ]
    },
    {
      "number": 40,
      "category": "History",
      "question": "Who was the first 'elected' President of Russia?\n",
      "answers": [
        "boris yeltsin",
        "yeltsin"
      ]
    },
    {
      "number": 41,
      "category": "Geography",
      "question": "What is the highest waterfall in the world?\n",
      "answers": [
        "angel falls in venezuela at 3,212 feet",
        "angel falls"
      ]
    },
    {
      "number": 42,
      "category": "Geography",
      "question": "What is the world's largest desert?\n",
      "answers": [
        "the sahara at 3,500,000 square miles",
        "sahara"
      ]
    },
    {
      "number": 43,
      "category": "United States",
      "question": "What U.S. city is also called 'The Windy City'?\n",
      "answers": [
        "chicago"
      ]
    },
    {
      "number": 44,
      "category": "Science&Nature",
      "question": "How far can a skunk spray; 5, 10 or 15 feet?\n",
      "answers": [
        "up to 10 feet",
        "10"
      ]
    },
    {
      "number": 45,
      "category": "Geography",
      "question": "What is the highest mountain in Africa?\n",
      "answers": [
        "mt. kilimanjaro at 19,340 feet",
        "kilimanjaro"
      ]
    },
    {
      "number": 46,
      "category": "Science&Nature",
      "question": "Who invented the computer mouse?\n",
      "answers": [
        "douglas c. engelbart in 1968 but it wasn't popularized until apple used it in 1984",
        "engelbart"
      ]
    },
    {
      "number": 47,
      "category": "Science&Nature",
      "question": "How many bones are there in the adult human body?\n",
      "answers": [
        "206"
      ]
    },
    {
      "number": 48,
      "category": "Geography",
      "question": "What is the narrow sea between the Arabian Peninsula and Africa called?\n",
      "answers": [
        "the red sea",
        "red sea"
      ]
    },
    {
      "number": 49,
      "category": "Mythology",
      "question": "What is the name of the Greek wine god?\n",
      "answers": [
        "dionysus (also called bacchus)",
        "bacchus",
        "dionysus"
      ]
    },
    {
      "number": 50,
      "category": "Literature",
      "question": "What is the name of the bad guy in Peter Pan?\n",
      "answers": [
        "captain hook",
        "hook"
      ]
    },
    {
      "number": 51,
      "category": "Geography",
      "question": "What is the southern most capital city in the world?\n",
      "answers": [
        "wellington, capital of new zealand",
        "wellington",
        "welington"
      ]
    },
    {
      "number": 52,
      "category": "United States",
      "question": "Who is the only U.S. President who was never married?\n",
      "answers": [
        "james buchanan",
        "buchanan"
      ]
    },
    {
      "number": 53,
      "category": "Literature",
      "question": "What is the river named most often in the Bible?\n",
      "answers": [
        "jordan"
      ]
    },
    {
      "number": 54,
      "category": "Language",
      "question": "What is the Scottish word for lake?\n",
      "answers": [
        "loch"
      ]
    },
    {
      "number": 55,
      "category": "Arts&Entertainmen",
      "question": "Who was the singer who made the video THRILLER?\n",
      "answers": [
        "michael jackson",
        "michel jackson"
      ]
    },
    {
      "number": 56,
      "category": "Arts&Entertainment",
      "question": "Which actor entered a Charlie Chaplin look alike contest and came in third?\n",
      "answers": [
        "charlie chaplin"
      ]
    },
    {
      "number": 57,
      "category": "Geography",
      "question": "Which animal are the Canary Islands named after?\n",
      "answers": [
        "dog (canine, the birds were named for the islands)",
        "dog"
      ]
    },
    {
      "number": 58,
      "category": "Science&Nature",
      "question": "Which planet is closest to the sun?\n",
      "answers": [
        "mercury"
      ]
    },
    {
      "number": 59,
      "category": "Science&Nature",
      "question": "How many moons does Mars have?\n",
      "answers": [
        "2 moons, phobos and deimos",
        "2",
        "two"
      ]
    },
    {
      "number": 60,
      "category": "Geography",
      "question": "What is the lowest point on land in the world?\n",
      "answers": [
        "the dead sea in israel and jordan at 1,312 feet below sea level",
        "dead sea"
      ]
    },
    {
      "number": 61,
      "category": "History",
      "question": "When did World War II begin?\n",
      "answers": [
        "september 1, 1939 when german troops crossed into poland",
        "1939"
      ]
    },
    {
      "number": 62,
      "category": "History",
      "question": "When did the U.S. enter World War II?\n",
      "answers": [
        "december 1941",
        "1941"
      ]
    },
    {
      "number": 63,
      "category": "Literature",
      "question": "Where were the words \"The truth shall make you free\" first written?\n",
      "answers": [
        "the bible, john 8:32",
        "bible"
      ]
    },
    {
      "number": 64,
      "category": "History",
      "question": "What year did the Russian revolution take place?\n",
      "answers": [
        "1917 (the russian civil war lasted from 1918-1921)",
        "1917"
      ]
    },
    {
      "number": 65,
      "category": "History",
      "question": "What year did the Titanic sink?\n",
      "answers": [
        "1912"
      ]
    },
    {
      "number": 66,
      "category": "History",
      "question": "Who was the first person in space?\n",
      "answers": [
        "yuri gagarin in 1961",
        "gargarin",
        "yuri"
      ]
    },
    {
      "number": 67,
      "category": "History",
      "question": "Who was the first person to set foot on the moon?\n",
      "answers": [
        "neil armstrong in 1969",
        "armstrong"
      ]
    },
    {
      "number": 68,
      "category": "Science&Nature",
      "question": "What year was a sheep named Dolly created by cloning?\n",
      "answers": [
        "1997"
      ]
    },
    {
      "number": 69,
      "category": "History",
      "question": "What year saw the break up of the USSR?\n",
      "answers": [
        "1991"
      ]
    },
    {
      "number": 70,
      "category": "Sports&Leisure",
      "question": "Where were the 2000 Olympics held?\n",
      "answers": [
        "sydney, australia",
        "sydney",
        "australia"
      ]
    },
    {
      "number": 71,
      "category": "History",
      "question": "What year was the Commonwealth of Australia established?\n",
      "answers": [
        "1901"
      ]
    },
    {
      "number": 72,
      "category": "Literature",
      "question": "What did Sir Galahad search for?\n",
      "answers": [
        "the holy grail",
        "holy grail"
      ]
    },
    {
      "number": 73,
      "category": "Geography",
      "question": "What is the Spanish name for the South American capital which means 'good air'?\n",
      "answers": [
        "buenos aires"
      ]
    },
    {
      "number": 74,
      "category": "Geography",
      "question": "What is the capital of Ecuador?\n",
      "answers": [
        "quito"
      ]
    },
    {
      "number": 75,
      "category": "Geography",
      "question": "What is the capital of Somalia?\n",
      "answers": [
        "mogadishu"
      ]
    },
    {
      "number": 76,
      "category": "Language",
      "question": "What is the meaning of the French word estragon?\n",
      "answers": [
        "tarragon (the spice)",
        "tarragon",
        "taragon"
      ]
    },
    {
      "number": 77,
      "category": "Geography",
      "question": "What is the capital of Hungary?\n",
      "answers": [
        "budapest"
      ]
    },
    {
      "number": 78,
      "category": "Arts&Entertainment",
      "question": "What name is Annie Mae Bullock better know as?\n",
      "answers": [
        "tina turner"
      ]
    },
    {
      "number": 79,
      "category": "Arts&Entertainment",
      "question": "What name is Paul Hewson better know as?\n",
      "answers": [
        "bono, from the group called u2",
        "bono"
      ]
    },
    {
      "number": 80,
      "category": "Geography",
      "question": "What middle eastern state was founded in 1948?\n",
      "answers": [
        "israel"
      ]
    },
    {
      "number": 81,
      "category": "Language",
      "question": "What does the Russian word buran mean?\n",
      "answers": [
        "blizzard"
      ]
    },
    {
      "number": 82,
      "category": "Arts&Entertainment",
      "question": "How many members in the guy group N'SYNC? \n",
      "answers": [
        "5",
        "five"
      ]
    },
    {
      "number": 83,
      "category": "Arts&Entertainment",
      "question": "Name one of the 3 members of N'SYNC whose names start with the letter \"J\".\n",
      "answers": [
        "joey, jc or justin",
        "joey",
        "jc",
        "justin"
      ]
    },
    {
      "number": 84,
      "category": "Arts&Entertainnment",
      "question": "Name one of the 2 members of N'SYNC whose names do NOT start with the letter \"J\".\n",
      "answers": [
        "chris and lance",
        "chris",
        "lance"
      ]
    },
    {
      "number": 85,
      "category": "Arts&Entertainment",
      "question": "What year was the movie Ben Hur with Charlton Heston made?\n",
      "answers": [
        "1959"
      ]
    },
    {
      "number": 86,
      "category": "Arts&Entertainment",
      "question": "Who played Captain Queeg in \"The Caine Mutiny\"?\n",
      "answers": [
        "humphrey bogart",
        "bogart"
      ]
    },
    {
      "number": 87,
      "category": "Arts&Entertainment",
      "question": "Who played Maggie in \"Cat On A Hot Tin Roof\" with Paul Newman?\n",
      "answers": [
        "elizabeth taylor",
        "taylor"
      ]
    },
    {
      "number": 88,
      "category": "Language",
      "question": "What is a Wyvern?\n",
      "answers": [
        "a type of dragon",
        "dragon"
      ]
    },
    {
      "number": 89,
      "category": "United States",
      "question": "When were PopTarts invented?\n",
      "answers": [
        "1964"
      ]
    },
    {
      "number": 90,
      "category": "Geography",
      "question": "What African country is only 8 miles from Spain?\n",
      "answers": [
        "morocco"
      ]
    },
    {
      "number": 91,
      "category": "Language",
      "question": "What African language do Boers speak?\n",
      "answers": [
        "afrikaans"
      ]
    },
    {
      "number": 92,
      "category": "History",
      "question": "Which people created the sundial?\n",
      "answers": [
        "the egyptians in 2400 b.c.",
        "egyptians"
      ]
    },
    {
      "number": 93,
      "category": "Mythology",
      "question": "Who did Paris, the ruler of Troy, select as the most beautiful goddess?\n",
      "answers": [
        "aphrodite"
      ]
    },
    {
      "number": 94,
      "category": "Science&Nature",
      "question": "What are Pyxis, Puppis, and Pavo?\n",
      "answers": [
        "constellations in the southern sky",
        "constellations"
      ]
    },
    {
      "number": 95,
      "category": "United States",
      "question": "How many deserts are in or extend into the United States?\n",
      "answers": [
        "5",
        "five"
      ]
    },
    {
      "number": 96,
      "category": "Geography",
      "question": "Name the 500,000 square mile desert that Mongolia and China share.\n",
      "answers": [
        "gobi"
      ]
    },
    {
      "number": 97,
      "category": "Computers",
      "question": "What is the type of computer virus that is named after a device of trickery used in a famous mythological war?\n",
      "answers": [
        "trojan horse",
        "trojan"
      ]
    },
    {
      "number": 98,
      "category": "Computers",
      "question": "When was the World Wide Web developed?\n",
      "answers": [
        "1990"
      ]
    },
    {
      "number": 99,
      "category": "Computers",
      "question": "What is the name of the group that developed the World Wide Web?\n",
      "answers": [
        "european center for nuclear research"
      ]
    },
    {
      "number": 100,
      "category": "Computers",
      "question": "Goat's milk is used more widely throughout the world than cows milk.\n",
      "answers": [
        "geneva, switzerland",
        "geneva",
        "in what swiss city was the world wide web first developed?",
        "true&false",
        "true"
      ]
    },
    {
      "number": 101,
      "category": "Numbers",
      "question": "How many U.S. state capitals are named after presidents?\n",
      "answers": [
        "4",
        "four"
      ]
    },
    {
      "number": 102,
      "category": "Colors",
      "question": "\"I'm Dreaming of a _____ Christmas.\"\n",
      "answers": [
        "white"
      ]
    },
    {
      "number": 103,
      "category": "Sports&Leisure",
      "question": "What member of the British royal family competed in the 1976 Summer Olympics?\n",
      "answers": [
        "princess anne"
      ]
    },
    {
      "number": 104,
      "category": "Colors",
      "question": "What color are the Majestic mountains in \"America the Beautiful\"?\n",
      "answers": [
        "purple"
      ]
    },
    {
      "number": 105,
      "category": "True&False",
      "question": "If one part of a parallel circuit is broken, the circuit continues to function.\n",
      "answers": [
        "true"
      ]
    },
    {
      "number": 106,
      "category": "Miscellaneous",
      "question": "World War 2 ended in 194_.\n",
      "answers": [
        "5",
        "five"
      ]
    },
    {
      "number": 107,
      "category": "Art&Literature",
      "question": "Who made his debut in Action Comics No.1?\n",
      "answers": [
        "superman"
      ]
    },
    {
      "number": 108,
      "category": "Colors",
      "question": "What color is the center stripe on the American flag?\n",
      "answers": [
        "red"
      ]
    },
    {
      "number": 109,
      "category": "Miscellaneous",
      "question": "Potato chips were invented by a chef in Louisiana in 1865.\n",
      "answers": [
        "true"
      ]
    },
    {
      "number": 110,
      "category": "Colors",
      "question": "What two colors are found on the flags of ALL Central American nations?\n",
      "answers": [
        "blue and white",
        "white and blue",
        "blue&white",
        "white&blue"
      ]
    },
    {
      "number": 111,
      "category": "Geography",
      "question": "What state capital is 10 miles from Princeton University?\n",
      "answers": [
        "trenton"
      ]
    },
    {
      "number": 112,
      "category": "True&False",
      "question": "You can only see a rainbow if you are not facing the sun.\n",
      "answers": [
        "true"
      ]
    },
    {
      "number": 113,
      "category": "Numbers",
      "question": "How many of the seven dwarf's names do not end with \"y\"?\n",
      "answers": [
        "2",
        "two"
      ]
    },
    {
      "number": 114,
      "category": "Numbers",
      "question": "How many faces on a dreydel?\n",
      "answers": [
        "7",
        "seven"
      ]
    },
    {
      "number": 115,
      "category": "Colors",
      "question": "______stone National Park has 120 named geysers.\n",
      "answers": [
        "yellow"
      ]
    },
    {
      "number": 116,
      "category": "Science&Nature",
      "question": "What was the Bridge of San Luis Rey made of?\n",
      "answers": [
        "rope"
      ]
    },
    {
      "number": 117,
      "category": "History",
      "question": "What country did Lord Haw Haw broadcast propaganda for in World War 2?\n",
      "answers": [
        "denmark"
      ]
    },
    {
      "number": 118,
      "category": "Colors",
      "question": "What color did most beatniks wear exclusively?\n",
      "answers": [
        "black"
      ]
    },
    {
      "number": 119,
      "category": "Numbers",
      "question": "How many planets are between Earth and the sun?\n",
      "answers": [
        "2",
        "two"
      ]
    },
    {
      "number": 120,
      "category": "Miscellaneous",
      "question": "Wall Streeters called October 29, 1929_____ Tuesday. \n",
      "answers": [
        "black"
      ]
    },
    {
      "number": 121,
      "category": "Entertainment",
      "question": "How many times did Bing Crosby and Bob Hope hit the road films?\n",
      "answers": [
        "7",
        "seven"
      ]
    },
    {
      "number": 122,
      "category": "Colors",
      "question": "\"Ho,ho,ho\"is heard in the valley of the Jolly _____ Giant.\n",
      "answers": [
        "green"
      ]
    },
    {
      "number": 123,
      "category": "Colors",
      "question": "What are the New York Yankees two team colors?\n",
      "answers": [
        "black and white",
        "white and black",
        "black&white",
        "white&black"
      ]
    },
    {
      "number": 124,
      "category": "Art&Literature",
      "question": "What country was the setting of You Only Live Twice?\n",
      "answers": [
        "japan"
      ]
    },
    {
      "number": 125,
      "category": "Numbers",
      "question": "How many axles does an 18-wheeler have?\n",
      "answers": [
        "5",
        "five"
      ]
    },
    {
      "number": 126,
      "category": "Geography",
      "question": "What does the River Seine empty into?\n",
      "answers": [
        "the english channel",
        "english channel"
      ]
    },
    {
      "number": 127,
      "category": "History",
      "question": "Who was the first U.S. Billionaire?\n",
      "answers": [
        "john d. rockefeller",
        "rockefeller",
        "rockafeller"
      ]
    },
    {
      "number": 128,
      "category": "Colors",
      "question": "Rhapsody in ____ was a loose biographical film of George Gershwin.\n",
      "answers": [
        "blue"
      ]
    },
    {
      "number": 129,
      "category": "Geography",
      "question": "Who was the '50's horror film hostess that also appeared in \"Plan 9 from Outer Space\"?\n",
      "answers": [
        "australia",
        "what country covers an entire continent?",
        "horror roles",
        "vampira"
      ]
    },
    {
      "number": 130,
      "category": "Monsters",
      "question": "What was the only thing that Beetlejuice was afraid of?\n",
      "answers": [
        "sand worms",
        "sand worm"
      ]
    },
    {
      "number": 131,
      "category": "Characters",
      "question": "What was the name of the Addams Family butler?\n",
      "answers": [
        "lurch",
        "lerch"
      ]
    },
    {
      "number": 132,
      "category": "Horror Roles",
      "question": "Which actress played the mother of \"Rosemary's Baby\"?\n",
      "answers": [
        "mia farrow",
        "farrow"
      ]
    },
    {
      "number": 133,
      "category": "General Knowledge",
      "question": "What finally destroyed the aliens in \"War of the Worlds\"?\n",
      "answers": [
        "germs",
        "bacteria"
      ]
    },
    {
      "number": 134,
      "category": "Horror Roles",
      "question": "What young actor was eaten by a bed in \"Nightmare on Elm Street\"?\n",
      "answers": [
        "johnny depp",
        "depp"
      ]
    },
    {
      "number": 135,
      "category": "General Knowledge",
      "question": "What was the town of Blair in \"The Blair Witch Project\" renamed as?\n",
      "answers": [
        "burkittsville"
      ]
    },
    {
      "number": 136,
      "category": "Horror Roles",
      "question": "Who played the title role in \"Carrie\"?\n",
      "answers": [
        "sissy spacek",
        "spacek"
      ]
    },
    {
      "number": 137,
      "category": "Monsters",
      "question": "What was the name of Godzilla's (movie) son?\n",
      "answers": [
        "minya"
      ]
    },
    {
      "number": 138,
      "category": "Characters",
      "question": "What was Lon Chaney Jr's human name in \"The Wolfman\"?\n",
      "answers": [
        "larry talbot",
        "talbot",
        "tallbot"
      ]
    },
    {
      "number": 139,
      "category": "General Knowledge",
      "question": "Who wrote the novel, \"Jaws\"?\n",
      "answers": [
        "peter benchley",
        "benchley"
      ]
    },
    {
      "number": 140,
      "category": "Horror Roles",
      "question": "Which actor has played Dracula in more films than anyone else?\n",
      "answers": [
        "christopher lee",
        "chris lee"
      ]
    },
    {
      "number": 141,
      "category": "Complete The Quote",
      "question": "Complete this quote: \"Soylent Green is...\"\n",
      "answers": [
        "people"
      ]
    },
    {
      "number": 142,
      "category": "Characters",
      "question": "What was the name of the villian in 1921's \"Nosferatu\"?\n",
      "answers": [
        "count orlock",
        "orlock"
      ]
    },
    {
      "number": 143,
      "category": "General Knowledge",
      "question": "To what was Dracula referring to as \"children of the night\"?\n",
      "answers": [
        "wolves"
      ]
    },
    {
      "number": 144,
      "category": "Horror Roles",
      "question": "Which actor played Count Alucard in 1943's \"Son of Dracula\"?\n",
      "answers": [
        "lon chaney jr",
        "lon chaney junior",
        "chaney jr"
      ]
    },
    {
      "number": 145,
      "category": "Characters",
      "question": "In the 1931 film, \"Frankenstein\", what was the doctor's first name?\n",
      "answers": [
        "henry"
      ]
    },
    {
      "number": 146,
      "category": "Monsters",
      "question": "The monsters in the film, \"Them\", were giant, what?\n",
      "answers": [
        "ants"
      ]
    },
    {
      "number": 147,
      "category": "General Knowledge",
      "question": "What type of bat is most often used in horror films?\n",
      "answers": [
        "flying fox"
      ]
    },
    {
      "number": 148,
      "category": "Horror Roles",
      "question": "Who played Herman on the original \"The Munsters\" television series?\n",
      "answers": [
        "fred gwynne",
        "guinn",
        "gwynne"
      ]
    },
    {
      "number": 149,
      "category": "Characters",
      "question": "What was the name of the antichrist character in the \"Omen\" trilogy?\n",
      "answers": [
        "damien",
        "damian"
      ]
    },
    {
      "number": 150,
      "category": "Complete The Quote",
      "question": "Complete this quote: \"It's alive!...\"\n",
      "answers": [
        "it's alive"
      ]
    },
    {
      "number": 151,
      "category": "General Knowledge",
      "question": "Who was billed as the \"Man of 1000 Faces\"?\n",
      "answers": [
        "lon chaney",
        "chaney"
      ]
    },
    {
      "number": 152,
      "category": "Horror Roles",
      "question": "Which television star played the title role in 1957's \"I was a Teenage Werewolf\"?\n",
      "answers": [
        "michael landon",
        "landon"
      ]
    },
    {
      "number": 153,
      "category": "Characters",
      "question": "What was the title character's name in 1925's \"The Phantom of the Opera\"?\n",
      "answers": [
        "eric",
        "erik"
      ]
    },
    {
      "number": 154,
      "category": "General Knowledge",
      "question": "What was Bela Lugosi's real name?\n",
      "answers": [
        "bela blasko",
        "blasko"
      ]
    },
    {
      "number": 155,
      "category": "Horror Roles",
      "question": "Who played the masochistic dental patient in the 1986 remake of \"The Little Shop of Horrors\"?\n",
      "answers": [
        "bill murray",
        "murray",
        "murrey"
      ]
    },
    {
      "number": 156,
      "category": "General Knowledge",
      "question": "What actress played in the movies \"Firestarter\" and \"E.T.\"?\n",
      "answers": [
        "drew barrymore",
        "barrymore"
      ]
    },
    {
      "number": 157,
      "category": "Monsters",
      "question": "In \"King Kong vs. Godzilla\", who won?\n",
      "answers": [
        "neither",
        "no one",
        "nobody",
        "tie",
        "tied"
      ]
    },
    {
      "number": 158,
      "category": "Horror Roles",
      "question": "Who played Jamie Lee Curtis' \"Psycho\" mother in \"Halloween H20\"?\n",
      "answers": [
        "janet leigh",
        "leigh"
      ]
    },
    {
      "number": 159,
      "category": "Characters",
      "question": "What was the name of the hero (Bruce Campbell) in the \"The Evil Dead\" trilogy?\n",
      "answers": [
        "ash"
      ]
    },
    {
      "number": 160,
      "category": "General Knowledge",
      "question": "What was Norman Bates' hobby in \"Psycho\"?\n",
      "answers": [
        "taxidermy",
        "taxadermy"
      ]
    },
    {
      "number": 161,
      "category": "Complete The Quote",
      "question": "Complete this quote from the monster in Frankenstein: \"Fire...\"\n",
      "answers": [
        "bad!",
        "bad"
      ]
    },
    {
      "number": 162,
      "category": "Monsters",
      "question": "In \"From Dusk Til Dawn\", the \"heroes\" stumble into a nightclub full of what?\n",
      "answers": [
        "vampires"
      ]
    },
    {
      "number": 163,
      "category": "Characters",
      "question": "What role did Christopher Lee play in Hammer's \"The Curse of Frankenstein\"?\n",
      "answers": [
        "monster"
      ]
    },
    {
      "number": 164,
      "category": "General Knowledge",
      "question": "In what city does the interview in \"Interview with the Vampire\" take place?\n",
      "answers": [
        "san fransisco",
        "san fran"
      ]
    },
    {
      "number": 165,
      "category": "Horror Roles",
      "question": "What television star played the title role in 1985's \"Teen Wolf\"?\n",
      "answers": [
        "michael j. fox",
        "michael fox",
        "fox",
        "michael j"
      ]
    },
    {
      "number": 166,
      "category": "Characters",
      "question": "What character did Vincent Price play in \"Abbott and Costello meet Frankenstein\"?\n",
      "answers": [
        "invisible man",
        "invisable man"
      ]
    },
    {
      "number": 167,
      "category": "General Knowledge",
      "question": "What was \"The Munsters\"'s street address?\n",
      "answers": [
        "1313 mockingbird lane"
      ]
    },
    {
      "number": 168,
      "category": "Horror Roles",
      "question": "Who played Dracula in \"Love at First Bite\"?\n",
      "answers": [
        "george hamilton",
        "hamilton"
      ]
    },
    {
      "number": 169,
      "category": "Monsters",
      "question": "What was the name of the clown in Stephen King's \"IT\"?\n",
      "answers": [
        "pennywise",
        "penny wise"
      ]
    },
    {
      "number": 170,
      "category": "Characters",
      "question": "What was the name of the scientist that accidentally had his dna mixed with that of a fly in the 1986 remake of \"The Fly\"?\n",
      "answers": [
        "seth brundle",
        "brundle"
      ]
    },
    {
      "number": 171,
      "category": "Complete The Quote",
      "question": "Complete this quote: \"Enter freely, of your own will, and leave some of the...\"\n",
      "answers": [
        "happiness you bring"
      ]
    },
    {
      "number": 172,
      "category": "General Knowledge",
      "question": "Michael Myers' mask in \"Halloween\" was made from the novelty Halloween mask of what well-known actor?\n",
      "answers": [
        "william shatner",
        "shatner",
        "schatner",
        "bill shatner"
      ]
    },
    {
      "number": 173,
      "category": "Horror Roles",
      "question": "Who played the title character in the \"Leprechaun\" series?\n",
      "answers": [
        "warwick davis",
        "davis"
      ]
    },
    {
      "number": 174,
      "category": "Characters",
      "question": "What was the name of the \"faithful handyman\" in \"The Rocky Horror Picture Show\"?\n",
      "answers": [
        "riff raff",
        "riffraff"
      ]
    },
    {
      "number": 175,
      "category": "General Knowledge",
      "question": "How many blades were on Freddy Kruger's glove?\n",
      "answers": [
        "4",
        "four"
      ]
    },
    {
      "number": 176,
      "category": "Horror Roles",
      "question": "Who played the title character in 1921's \"Nosferatu\". (hint: the name was later used for one of the villians in \"Batman Returns\")\n",
      "answers": [
        "max shreck",
        "shreck"
      ]
    },
    {
      "number": 177,
      "category": "General Knowledge",
      "question": "Who was unsuccessfully sued by \"Vampira\" for character copyright infringement?\n",
      "answers": [
        "elvira"
      ]
    },
    {
      "number": 178,
      "category": "General Knowledge",
      "question": "What was the last movie that Bela Lugosi appeared in?\n",
      "answers": [
        "plan 9 from outer space"
      ]
    },
    {
      "number": 179,
      "category": "Activeworlds",
      "question": "What's the name of the first world a \"newbie\" sees the first time they come to ActiveWorlds?\n",
      "answers": [
        "awgate"
      ]
    },
    {
      "number": 180,
      "category": "Activeworlds",
      "question": "Which of AWCI's worlds is an e-commerce world?\n",
      "answers": [
        "!@mart"
      ]
    },
    {
      "number": 181,
      "category": "Activeworlds",
      "question": "What company sold ActiveWorlds to Circle of Fire Studios?\n",
      "answers": [
        "worlds, inc.",
        "worlds inc",
        "worlds chat"
      ]
    },
    {
      "number": 182,
      "category": "Activeworlds",
      "question": "Name one world that Bingo games for prizes takes place in?\n",
      "answers": [
        "awbingo",
        "awbingo2",
        "awbingo3",
        "citbingo",
        "citbing0"
      ]
    },
    {
      "number": 183,
      "category": "Activeworlds",
      "question": "What key is used to look downwards in ActiveWorlds?\n",
      "answers": [
        "page down",
        "pg dn"
      ]
    },
    {
      "number": 184,
      "category": "Activeworlds",
      "question": "Holding down what key allows your avatar to move faster in AW?\n",
      "answers": [
        "the ctrl key",
        "ctrl key",
        "ctrl"
      ]
    },
    {
      "number": 185,
      "category": "Activeworlds",
      "question": "What is the most recent avatar sequence that has been added to most of AlphaWorld's avatars?\n",
      "answers": [
        "turn"
      ]
    },
    {
      "number": 186,
      "category": "Activeworlds",
      "question": "Who owns Cubed and Hole worlds?\n",
      "answers": [
        "eep"
      ]
    },
    {
      "number": 187,
      "category": "Activeworlds",
      "question": "What is AW's biggest \"moon\" made out of?\n",
      "answers": [
        "rocks",
        "rocks.rwx",
        "rock"
      ]
    },
    {
      "number": 188,
      "category": "Activeworlds",
      "question": "Who built Mt Bob?\n",
      "answers": [
        "rjinswand",
        "rinswand"
      ]
    },
    {
      "number": 189,
      "category": "Activeworlds",
      "question": "Who \"mooned\" Alpha World's GZ from a hotel in Las Vegas in '98?\n",
      "answers": [
        "chloe"
      ]
    },
    {
      "number": 190,
      "category": "Activeworlds",
      "question": "What \"famous AW criminal\" is buried near Crystal City?\n",
      "answers": [
        "king punisher",
        "kingpunisher"
      ]
    },
    {
      "number": 191,
      "category": "Activeworlds",
      "question": "Who runs, sets up prizes for and \"delivers\" prizes for the AWBingo worlds?\n",
      "answers": [
        "flagg",
        "flag"
      ]
    },
    {
      "number": 192,
      "category": "Activeworlds",
      "question": "Who own Zuzu world?\n",
      "answers": [
        "princess tia"
      ]
    },
    {
      "number": 193,
      "category": "Activeworlds",
      "question": "What pizza company can be found just south of GZ in Godzilla world?\n",
      "answers": [
        "uncle enzo's",
        "uncle enzo"
      ]
    },
    {
      "number": 194,
      "category": "Activeworlds",
      "question": "Who created the DJBot, BuildBot, BoothBot, BingoBot and me, the TriviaBot, among others? \n",
      "answers": [
        "hamfon",
        "ham fon"
      ]
    },
    {
      "number": 195,
      "category": "Activeworlds",
      "question": "What is the citizen nickname of the person that answers support questions sent to support@activeworlds.com?\n",
      "answers": [
        "calpantera",
        "calpentera"
      ]
    },
    {
      "number": 196,
      "category": "Activeworlds",
      "question": "Which direction from AW GZ would you go to find the Peacekeeper's headquarters in AlphaWorld?\n",
      "answers": [
        "north"
      ]
    },
    {
      "number": 197,
      "category": "Activeworlds",
      "question": "What early AW user's name can be found written in red tile walls just east of GZ?\n",
      "answers": [
        "grover",
        "grover's",
        "grovers"
      ]
    },
    {
      "number": 198,
      "category": "Activeworlds",
      "question": "What is the name of the world that is a duplicate of what AW's GZ looked like before AWHS renovation began?\n",
      "answers": [
        "awgz"
      ]
    },
    {
      "number": 199,
      "category": "Activeworlds",
      "question": "What public building world was named after a well-known American National Park?\n",
      "answers": [
        "yellowstone",
        "yellow"
      ]
    },
    {
      "number": 200,
      "category": "Activeworlds",
      "question": "What is the name of the texture on the brick walks at AW's GZ?\n",
      "answers": [
        "brick1",
        "brick1.jpg"
      ]
    },
    {
      "number": 201,
      "category": "Activeworlds",
      "question": "Who owns CASTLES world?\n",
      "answers": [
        "belladora"
      ]
    },
    {
      "number": 202,
      "category": "Activeworlds",
      "question": "Who owns America world?\n",
      "answers": [
        "jetta lewis",
        "jetta",
        "lewis"
      ]
    },
    {
      "number": 203,
      "category": "Activeworlds",
      "question": "What's the main thing you have to have other than the browser software before you can enter ActiveWorlds?\n",
      "answers": [
        "active internet connection",
        "ip connection",
        "internet access",
        "internet connection"
      ]
    },
    {
      "number": 204,
      "category": "Activeworlds",
      "question": "In order; what two things does a tourist have to input in order to log in to ActiveWorlds?\n",
      "answers": [
        "a name and an e-mail address",
        "name e-mail",
        "name and e-mail address",
        "name email"
      ]
    },
    {
      "number": 205,
      "category": "Activeworlds",
      "question": "To which world would you go to find out E N Z O LOVES YOU?\n",
      "answers": [
        "cofmeta",
        "meta",
        "metatropolis"
      ]
    },
    {
      "number": 206,
      "category": "Activeworlds",
      "question": "AW uses an integrated browser to display web content alongside the 3D window. What is that browser called?\n",
      "answers": [
        "internet explorer",
        "ie",
        "explorer"
      ]
    },
    {
      "number": 207,
      "category": "Activeworlds",
      "question": "What do you have to be in order to own or caretake a world?\n",
      "answers": [
        "a registered citizen",
        "citizen",
        "registered"
      ]
    },
    {
      "number": 208,
      "category": "Activeworlds",
      "question": "What does Netscape lack that keeps ActiveWorlds from being able to use it as it's integrated browser?  \n",
      "answers": [
        "activex control",
        "activex",
        "active x"
      ]
    },
    {
      "number": 209,
      "category": "Activeworlds",
      "question": "What feature added in 1995 saved a lot of wear and tear on avatar shoes? :o)\n",
      "answers": [
        "teleport"
      ]
    },
    {
      "number": 210,
      "category": "Activeworlds",
      "question": "How many languages does the ActiveWorlds browser come in?\n",
      "answers": [
        "12",
        "twelve"
      ]
    },
    {
      "number": 211,
      "category": "Activeworlds",
      "question": "What fictional story did names like ENZO, Cryonics and Metatropolis come from?\n",
      "answers": [
        "snowcrash"
      ]
    },
    {
      "number": 212,
      "category": "Activeworlds",
      "question": "What AWCI owned, public building world's GZ is loosely patterned after the book \"Snowcrash\"?\n",
      "answers": [
        "cofmeta",
        "meta"
      ]
    },
    {
      "number": 213,
      "category": "Activeworlds",
      "question": "How many options can be found in the Teleport menu item?\n",
      "answers": [
        "6",
        "six"
      ]
    },
    {
      "number": 214,
      "category": "Activeworlds",
      "question": "How many avatar choices are there in Yellowstone world, not counting Special avatars?\n",
      "answers": [
        "26",
        "twenty-six"
      ]
    },
    {
      "number": 215,
      "category": "Activeworlds",
      "question": "Who started out owning Circle of Fire Studios and is now the owner of ActiveWorlds?\n",
      "answers": [
        "e n z o",
        "enzo",
        "rick noll"
      ]
    },
    {
      "number": 216,
      "category": "Activeworlds",
      "question": "How many avatar choices are there in Alpha World, not counting Special avatars?\n",
      "answers": [
        "33",
        "thirty-three"
      ]
    },
    {
      "number": 217,
      "category": "Activeworlds",
      "question": "What world would you look in to find AW's version of the \"Titanic\"?\n",
      "answers": [
        "alpha world",
        "aw"
      ]
    },
    {
      "number": 218,
      "category": "Activeworlds",
      "question": "Besides using a credit card, name one of the 2 other ways you can pay for an AW citizenship.\n",
      "answers": [
        "check or money order",
        "certified check",
        "money order",
        "check",
        "cheque"
      ]
    },
    {
      "number": 219,
      "category": "Activeworlds",
      "question": "What real world city is headquarters to AWCI??\n",
      "answers": [
        "newburyport, massachusetts",
        "newburyport"
      ]
    },
    {
      "number": 220,
      "category": "Activeworlds",
      "question": "What is the highest altitude you can go to before the program starts \"looping back\" on you?\n",
      "answers": [
        "2,000 meters",
        "2,000",
        "two-thousand meters",
        "two thousand"
      ]
    },
    {
      "number": 221,
      "category": "Activeworlds",
      "question": "What did Festival'00 celebrate?\n",
      "answers": [
        "alpha world's 5th birthday",
        "aw's 5th birthday",
        "aw's fifth birthday",
        "alpha worlds fifth birthday"
      ]
    },
    {
      "number": 222,
      "category": "Activeworlds",
      "question": "What does WOW stand for?\n",
      "answers": [
        "women owning worlds"
      ]
    },
    {
      "number": 223,
      "category": "Activeworlds",
      "question": "What privately owned world is dedicated to preserving much of AW's past? \n",
      "answers": [
        "!history",
        "history"
      ]
    },
    {
      "number": 224,
      "category": "Activeworlds",
      "question": "Where can you go inworld to learn advanced building techniques?\n",
      "answers": [
        "awuniv",
        "aw univ",
        "aw university"
      ]
    },
    {
      "number": 225,
      "category": "Activeworlds",
      "question": "Where can you go inworld to learn basic building skills?\n",
      "answers": [
        "awschool",
        "aw school"
      ]
    },
    {
      "number": 226,
      "category": "Activeworlds",
      "question": "Who created the Preston Bots?\n",
      "answers": [
        "faber"
      ]
    },
    {
      "number": 227,
      "category": "Activeworlds",
      "question": "Who created the XelaBots\n",
      "answers": [
        "xelag",
        "xela g"
      ]
    },
    {
      "number": 228,
      "category": "Activeworlds",
      "question": "Who created the bots that makes playing Spades and Bridge in AW possible? \n",
      "answers": [
        "andras"
      ]
    },
    {
      "number": 229,
      "category": "Activeworlds",
      "question": "What is the citizen name of AWCI's chief programmer?\n",
      "answers": [
        "roland"
      ]
    },
    {
      "number": 230,
      "category": "Activeworlds",
      "question": "Who brought \"The New World Times\" to Alpha World?\n",
      "answers": [
        "dataman",
        "data man"
      ]
    },
    {
      "number": 231,
      "category": "Activeworlds",
      "question": "What does GET stand for in AW?\n",
      "answers": [
        "garbage elimination team"
      ]
    },
    {
      "number": 232,
      "category": "Activeworlds",
      "question": "Who built and maintains the \"junk yard\" object yard?\n",
      "answers": [
        "little bull",
        "littlebull"
      ]
    },
    {
      "number": 233,
      "category": "Activeworlds",
      "question": "Who was the original owner of Atlantis before it became a public building world?\n",
      "answers": [
        "cryonics, aka jp",
        "cryonics",
        "jp"
      ]
    },
    {
      "number": 234,
      "category": "Activeworlds",
      "question": "Who is the original owner of Colony Alpha?\n",
      "answers": [
        "moria",
        "graham"
      ]
    },
    {
      "number": 235,
      "category": "Activeworlds",
      "question": "What is Young Shamus' wife's citizen nickname?\n",
      "answers": [
        "young heather",
        "youngheather"
      ]
    },
    {
      "number": 236,
      "category": "Activeworlds",
      "question": "What is the name of the street AWCI's real world headquartes is on?\n",
      "answers": [
        "parker street",
        "parker st",
        "parker"
      ]
    },
    {
      "number": 237,
      "category": "Activeworlds",
      "question": "True or false: Your login password can not be the same as your privilege password.\n",
      "answers": [
        "true"
      ]
    },
    {
      "number": 238,
      "category": "Activeworlds",
      "question": "What bar, from the story \"Snowcrash\", can be found just east of COFmeta's GZ?\n",
      "answers": [
        "the black sun",
        "black sun"
      ]
    },
    {
      "number": 239,
      "category": "Activeworlds",
      "question": "Who owns the world called !Friends?\n",
      "answers": [
        "steller",
        "stellar"
      ]
    },
    {
      "number": 240,
      "category": "Activeworlds",
      "question": "True or False: \"Mute\" works for whispers as well as keeping the muted person's text off your screen.\n",
      "answers": [
        "true"
      ]
    },
    {
      "number": 241,
      "category": "Activeworlds",
      "question": "Who made the game \"Cypac\"?\n",
      "answers": [
        "ima genius"
      ]
    },
    {
      "number": 242,
      "category": "Activeworlds",
      "question": "What bot maker is working on \"bouncing bots\"?\n",
      "answers": [
        "too big"
      ]
    },
    {
      "number": 243,
      "category": "Activeworlds",
      "question": "Who made the \"Movebot\"?\n",
      "answers": [
        "byte me"
      ]
    },
    {
      "number": 244,
      "category": "Activeworlds",
      "question": "Which AW public world has a non earth-like, planetary theme?\n",
      "answers": [
        "mars"
      ]
    },
    {
      "number": 245,
      "category": "Activeworlds",
      "question": "What world does TechTalk take place in?\n",
      "answers": [
        "awuniv",
        "aw univ",
        "aw university"
      ]
    },
    {
      "number": 246,
      "category": "Activeworlds",
      "question": "How many options can be found in the Show menu item?\n",
      "answers": [
        "12",
        "twelve"
      ]
    },
    {
      "number": 247,
      "category": "Activeworlds",
      "question": "What does the acronym, MPL in COFmeta world, stand for?\n",
      "answers": [
        "metatropolis public liasions",
        "meta public liasion",
        "metatropolis public liasion",
        "meta public liasions"
      ]
    },
    {
      "number": 248,
      "category": "Activeworlds",
      "question": "What world would you look in to find AW's version of \"Old Faithful\"?\n",
      "answers": [
        "yellow",
        "yellowstone"
      ]
    },
    {
      "number": 249,
      "category": "Activeworlds",
      "question": "What does AWEC stand for?\n",
      "answers": [
        "activeworlds events committee",
        "active worlds events committee",
        "aw events committee"
      ]
    },
    {
      "number": 250,
      "category": "Activeworlds",
      "question": "Who built and maintains Northwest Builder's Supply?\n",
      "answers": [
        "lara"
      ]
    },
    {
      "number": 251,
      "category": "Activeworlds",
      "question": "Holding down what key allows you to pass through objects?\n",
      "answers": [
        "the shift key",
        "shift key",
        "shift"
      ]
    },
    {
      "number": 252,
      "category": "Activeworlds",
      "question": "What is the first screen you see when you are logging in called?\n",
      "answers": [
        "the \"splash\" screen",
        "splash"
      ]
    },
    {
      "number": 253,
      "category": "Activeworlds",
      "question": "What world would you have to go to find E N Z O's office?\n",
      "answers": [
        "cofmeta",
        "meta",
        "metatropolis"
      ]
    },
    {
      "number": 254,
      "category": "Activeworlds",
      "question": "Who laid out most of the objects in Object'd world and put them in their proper sections?\n",
      "answers": [
        "lady bunny",
        "ladybunny"
      ]
    },
    {
      "number": 255,
      "category": "Activeworlds",
      "question": "Who does the web site for and maintains the objects in Object'd world?\n",
      "answers": [
        "casay"
      ]
    },
    {
      "number": 256,
      "category": "Activeworlds",
      "question": "Who built a merry-go-round that Roland said was the best example of 3.1 features use that he had seen?\n",
      "answers": [
        "casay"
      ]
    },
    {
      "number": 257,
      "category": "Activeworlds",
      "question": "What 2 very talented AW citizens made a working jack-in-the-box shortly after 3.1 came out?\n",
      "answers": [
        "casay and byte me",
        "casay and bite me"
      ]
    },
    {
      "number": 258,
      "category": "Activeworlds",
      "question": "What american state is Alpha World the approximate size of?\n",
      "answers": [
        "california"
      ]
    },
    {
      "number": 259,
      "category": "Activeworlds",
      "question": "Who is the \"owner\" of the CY Award winning town, Horizon City?\n",
      "answers": [
        "sirqus"
      ]
    },
    {
      "number": 260,
      "category": "Activeworlds",
      "question": "What AWCOM world are you likely to find a monthly building contest with the kellee as the host?\n",
      "answers": [
        "awuniv2"
      ]
    },
    {
      "number": 261,
      "category": "Activeworlds",
      "question": "What company sold the software now known as ActiveWorlds to Circle of Fire Studios?\n",
      "answers": [
        "worlds, inc.",
        "worlds inc",
        "worlds chat"
      ]
    },
    {
      "number": 262,
      "category": "Activeworlds",
      "question": "What key is used to look downwards in ActiveWorlds?\n",
      "answers": [
        "page down",
        "pg dn",
        "pg down"
      ]
    },
    {
      "number": 263,
      "category": "Activeworlds",
      "question": "Where would you hear \"Just press the right button\" when entering one of the 2 \"engine rooms\" in this Alpha World, Cy Award winning build?\n",
      "answers": [
        "blur's aw enterprise build",
        "enterprise"
      ]
    },
    {
      "number": 264,
      "category": "Activeworlds",
      "question": "Who created the GZ and world layout of Object'd world?\n",
      "answers": [
        "daphne"
      ]
    },
    {
      "number": 265,
      "category": "Activeworlds",
      "question": "What would would you visit to see Carre's Cy Award winning \"Fallingwaters\" build?\n",
      "answers": [
        "awuniv"
      ]
    },
    {
      "number": 266,
      "category": "Activeworlds",
      "question": "What was the name of the protagonist (avatar) in Criterion Software's AW \"Cyber Street\" battle?\n",
      "answers": [
        "chappy"
      ]
    },
    {
      "number": 267,
      "category": "Activeworlds",
      "question": "Where would you find the award-winning VR town called \"Cyberville\"?\n",
      "answers": [
        "cofmeta"
      ]
    },
    {
      "number": 268,
      "category": "Activeworlds",
      "question": "True or False: Alpha World never had multi-paned window panels.\n",
      "answers": [
        "false"
      ]
    },
    {
      "number": 269,
      "category": "Activeworlds",
      "question": "What royal title was the nickname given to Lucretia Borgia in Active Worlds?\n",
      "answers": [
        "duchess"
      ]
    },
    {
      "number": 270,
      "category": "Activeworlds",
      "question": "What group runs the Halloween world called Oct31 that usually opens every year for that spooky holiday?\n",
      "answers": [
        "the titans",
        "titans"
      ]
    },
    {
      "number": 271,
      "category": "Activeworlds",
      "question": "What does the AW acronym, WOW, stand for?\n",
      "answers": [
        "women owning worlds"
      ]
    },
    {
      "number": 272,
      "category": "Activeworlds",
      "question": "Name one of the 2 VR groups that are the main sponsors and organizers of the yearly AVATARS Convention?\n",
      "answers": [
        "digitalspace and contact consortium",
        "digital space",
        "contact consortium",
        "the consortium",
        "digitalspace"
      ]
    },
    {
      "number": 273,
      "category": "Activeworlds",
      "question": "What is the title of the book written by Bruce Damer, aka digigardener in ActiveWorlds?\n",
      "answers": [
        "avatars"
      ]
    },
    {
      "number": 274,
      "category": "Activeworlds",
      "question": "Who wrote \"Snow Crash\", the book that COFmeta is loosely patterned after?\n",
      "answers": [
        "neal stephenson",
        "neil stevenson"
      ]
    },
    {
      "number": 275,
      "category": "Activeworlds",
      "question": "How long are AWTeen's daily weather cycles? \n",
      "answers": [
        "26 hours"
      ]
    },
    {
      "number": 276,
      "category": "Activeworlds",
      "question": "What world is well-known for holding Easter Egg Hunts and Present Hunts for the last 3 or 4 years?\n",
      "answers": [
        "storage"
      ]
    },
    {
      "number": 277,
      "category": "Activeworlds",
      "question": "At least how many years has AWBingo been running?\n",
      "answers": [
        "over 2",
        "2",
        "over two",
        "over 2",
        "more than 2"
      ]
    },
    {
      "number": 278,
      "category": "Activeworlds",
      "question": "What year did the 3D VR program now known as ActiveWorlds first come online?\n",
      "answers": [
        "1995"
      ]
    },
    {
      "number": 279,
      "category": "Activeworlds",
      "question": "What two words appear on a tourist's screen for them to click if they want to become citizens?\n",
      "answers": [
        "register now"
      ]
    },
    {
      "number": 280,
      "category": "Activeworlds",
      "question": "What is the title given the welcoming \"officer\" that everyone gets greeted by in ActiveWorlds?\n",
      "answers": [
        "immigration officer"
      ]
    },
    {
      "number": 281,
      "category": "Activeworlds",
      "question": "What is the title given the \"no, you can't do that\" entity that tells you when you encroach on another's property; among other things?    \n",
      "answers": [
        "building inspector"
      ]
    },
    {
      "number": 282,
      "category": "Activeworlds",
      "question": "Recently made an historical landmark, what year was The Crackerjack Club in COFmeta world built?\n",
      "answers": [
        "1998"
      ]
    },
    {
      "number": 283,
      "category": "Activeworlds",
      "question": "Who is the current caretaker of COFMeta?\n",
      "answers": [
        "jupytr",
        "juptyr"
      ]
    },
    {
      "number": 284,
      "category": "Activeworlds",
      "question": "What company serves as the phone system for Capri City in COFmeta?\n",
      "answers": [
        "dialpad"
      ]
    },
    {
      "number": 285,
      "category": "Activeworlds",
      "question": "In last year's Shadowrun 3D contest based in COFmeta, what was the name of the villian?\n",
      "answers": [
        "waldomaniac"
      ]
    },
    {
      "number": 286,
      "category": "Activeworlds",
      "question": "Who won the AW T-shirt that was signed by some of the \"AW Gods\" that attended the 2001 AW Reunion in LasVegas?\n",
      "answers": [
        "alpengeist"
      ]
    },
    {
      "number": 287,
      "category": "Activeworlds",
      "question": "What is the slogan you are greeted by when you enter COFMeta?\n",
      "answers": [
        "smile, enzo loves you",
        "smile enzo loves you"
      ]
    },
    {
      "number": 288,
      "category": "Activeworlds",
      "question": "What is the name of the Bar at the Crackerjack Club in COFmeta?\n",
      "answers": [
        "kamikazi bar & grill",
        "kamikazi bar and grill"
      ]
    },
    {
      "number": 289,
      "category": "Activeworlds",
      "question": "Down by the Pawn Shop in Capri City, COFmeta, two bums are talking. What does one of them say about Meta at night?\n",
      "answers": [
        "meta is so cold at night"
      ]
    },
    {
      "number": 290,
      "category": "Activeworlds",
      "question": "What world did AlphaBit Phalpha and Alpha Phalpha get cyber married in?\n",
      "answers": [
        "alpha"
      ]
    },
    {
      "number": 291,
      "category": "Activeworlds",
      "question": "What world was created as a \"gate\" for customers of the USA's 3rd largest Internet Provider so they could get aquainted with AW?\n",
      "answers": [
        "junodome"
      ]
    },
    {
      "number": 292,
      "category": "Activeworlds",
      "question": "What world allows tourists to play all it's games, including Bingo, but usually offers no prizes?\n",
      "answers": [
        "awgames"
      ]
    },
    {
      "number": 293,
      "category": "Activeworlds",
      "question": "Who owns Storage world?\n",
      "answers": [
        "andras"
      ]
    },
    {
      "number": 294,
      "category": "Activeworlds",
      "question": "How many languages does the ActiveWorlds browser come in?\n",
      "answers": [
        "13",
        "thirteen"
      ]
    },
    {
      "number": 295,
      "category": "Activewolds",
      "question": "When is Roland's birthday?\n",
      "answers": [
        "june 25th",
        "june 25",
        "25th of june"
      ]
    },
    {
      "number": 296,
      "category": "Activewolds",
      "question": "What day of the week are games in AWTrivia now held on?\n",
      "answers": [
        "tuesday"
      ]
    },
    {
      "number": 297,
      "category": "Activeworlds",
      "question": "Who has done the decorating for holidays in AWBingo worlds for the last 2 years?\n",
      "answers": [
        "daphne"
      ]
    },
    {
      "number": 298,
      "category": "Activeworlds",
      "question": "When was WildAW opened to the public?\n",
      "answers": [
        "august 13, 2000"
      ]
    },
    {
      "number": 299,
      "category": "BlackHistory",
      "question": "In 1957 President Eisenhower sent federal troops to intervene for 9 black students trying to enter Central High School for classes in what city?\n",
      "answers": [
        "little rock, arkansas",
        "little rock"
      ]
    },
    {
      "number": 300,
      "category": "BlackHistory",
      "question": "Who was the Alabama govenor that physically blocked 2 black students from registering for classes at the University of Alabama in 1963?\n",
      "answers": [
        "george wallace",
        "wallace"
      ]
    },
    {
      "number": 301,
      "category": "BlackHistory",
      "question": "Generally considered the mother of the Civil Rights Movement, in 1955 this courageous lady refused to give up her seat on a bus to a white man in Montgomery, Alabama. \n",
      "answers": [
        "rosa parks"
      ]
    },
    {
      "number": 302,
      "category": "BlackHistory",
      "question": "Sent out by the Congress of Racial Equality in 1961, these student volunteers went on bus trips to test the new laws prohibiting segregation in interstate travel facilities. What were they called?\n",
      "answers": [
        "freedom riders"
      ]
    },
    {
      "number": 303,
      "category": "BlackHistory",
      "question": "In August, 1963, Martin Luther King, Jr. gave a speech to 250,000 listeners in front of the Lincoln Memorial. What title is this speech commonly know by? \n",
      "answers": [
        "i have a dream"
      ]
    },
    {
      "number": 304,
      "category": "BlackHistory",
      "question": "In what year did President Lyndon Johnson sign the Civil Rights Act making segregation in public facilities and discrimination in employment illegal?\n",
      "answers": [
        "1964",
        "nineteen sixty-four"
      ]
    },
    {
      "number": 305,
      "category": "BlackHistory",
      "question": "A peacful march from Selma to Montgomery, Alabama in support of voting rights for Blacks was blocked by police using tear gas, whips and clubs. The media dubbed this incident with what title?\n",
      "answers": [
        "bloody sunday"
      ]
    },
    {
      "number": 306,
      "category": "BlackHistory",
      "question": "The Reverend Martin Luther King, Jr., at age 39, was shot in Memphis, Tennessee in what month and year?\n",
      "answers": [
        "april 1968"
      ]
    },
    {
      "number": 307,
      "category": "BlackHistory",
      "question": "What Amendment to the Constitution, made into law on February 3, 1870, granted Black Americans the right to vote?\n",
      "answers": [
        "15th",
        "15",
        "fifteenth"
      ]
    },
    {
      "number": 308,
      "category": "BlackHistory",
      "question": "Noted Black American intellectual and civil rights activist W.E.B. DuBois was a founding member of which organization in 1909?\n",
      "answers": [
        "national association for the advancement of colored people",
        "naacp"
      ]
    },
    {
      "number": 309,
      "category": "BlackHistory",
      "question": "Who was propelled to national prominence as a leader of the civil rights movement when he led a boycott against Montgomery's segregated city bus lines?\n",
      "answers": [
        "martin luther king, jr.",
        "martin luther king",
        "king"
      ]
    },
    {
      "number": 310,
      "category": "BlackHistory",
      "question": "What coveted award did Martin Luther King, Jr. receive in 1964 for his philosophy of nonviolent resistance?\n",
      "answers": [
        "nobel peace prize",
        "nobel"
      ]
    },
    {
      "number": 311,
      "category": "BlackHistory",
      "question": "Who was the first Black American to win an Academy Award?\n",
      "answers": [
        "hattie mcdaniel",
        "mcdaniel"
      ]
    },
    {
      "number": 312,
      "category": "BlackHistory",
      "question": "The Harlem Renaissance, a period of artistic flowering among Black American writers and artists that was centered in Harlem, occurred roughly during which decade?\n",
      "answers": [
        "1920s",
        "1920",
        "nineteen twenties"
      ]
    },
    {
      "number": 313,
      "category": "BlackHistory",
      "question": "Which Black American entertainer was the first to star in his own television series?\n",
      "answers": [
        "nat king cole",
        "cole"
      ]
    },
    {
      "number": 314,
      "category": "BlackHistory",
      "question": "Credited with breaking the \"color barrier\" in baseball by becoming the first Black American to play in the major leagues, Jackie Robinson played for which team?\n",
      "answers": [
        "brooklyn dodgers",
        "dodgers"
      ]
    },
    {
      "number": 315,
      "category": "BlackHistory",
      "question": "Who was the first player from the Negro Leagues to be elected to Baseball's Hall of Fame?\n",
      "answers": [
        "leroy robert \"satchel\" paige",
        "satchel",
        "paige"
      ]
    },
    {
      "number": 316,
      "category": "Geography",
      "question": "Which mountains is the range where vicunas live?\n",
      "answers": [
        "the andes",
        "andes"
      ]
    },
    {
      "number": 317,
      "category": "History",
      "question": "Who was the first woman to win a Nobel Prize?\n",
      "answers": [
        "marie curie",
        "madam curie",
        "madame curie",
        "curie"
      ]
    },
    {
      "number": 318,
      "category": "Literature",
      "question": "Who wrote LES MISERABLES?\n",
      "answers": [
        "victor hugo",
        "hugo"
      ]
    },
    {
      "number": 319,
      "category": "Literature",
      "question": "Who wrote PETER PAN?\n",
      "answers": [
        "j. m. barrie",
        "barrie"
      ]
    },
    {
      "number": 320,
      "category": "History",
      "question": "Who was Israel's first prime minister?\n",
      "answers": [
        "david ben-gurion",
        "ben-gurion",
        "ben gurion"
      ]
    },
    {
      "number": 321,
      "category": "Literature",
      "question": "What was the pen name of Charles Dodgson?\n",
      "answers": [
        "lewis carroll",
        "carroll"
      ]
    },
    {
      "number": 322,
      "category": "TheWorld",
      "question": "Who is the current leader of Cuba?\n",
      "answers": [
        "fidel castro",
        "castro"
      ]
    },
    {
      "number": 323,
      "category": "Literature",
      "question": "Who wrote DON QUIXOTE?\n",
      "answers": [
        "miguel de cervantes",
        "de cervantes",
        "cervantes"
      ]
    },
    {
      "number": 324,
      "category": "History",
      "question": "Who lead the Indians at the battle of Little Bighorn?\n",
      "answers": [
        "chief sitting bull",
        "sitting bull"
      ]
    },
    {
      "number": 325,
      "category": "History",
      "question": "Who took his army over the Alps in 221 B.C.?\n",
      "answers": [
        "hannibal"
      ]
    },
    {
      "number": 326,
      "category": "Literature",
      "question": "Who wrote WINNIE THE POOH?\n",
      "answers": [
        "a. a. milne",
        "a.a. milne",
        "milne"
      ]
    },
    {
      "number": 327,
      "category": "History",
      "question": "Who \"fiddled\" while Rome burned?\n",
      "answers": [
        "nero"
      ]
    },
    {
      "number": 328,
      "category": "Literature",
      "question": "Who wrote the novel NINETEEN EIGHTY-FOUR?\n",
      "answers": [
        "george orwell",
        "orwell"
      ]
    },
    {
      "number": 329,
      "category": "Science&Nature",
      "question": "What is Wilhelm Rontgen known for discovering?\n",
      "answers": [
        "x-rays",
        "x rays"
      ]
    },
    {
      "number": 330,
      "category": "History",
      "question": "In 1483 Torquemada was placed in charge of what?\n",
      "answers": [
        "the spanish inquistion",
        "the inquisition"
      ]
    },
    {
      "number": 331,
      "category": "Geography",
      "question": "Panama was originally a province of what country?\n",
      "answers": [
        "columbia"
      ]
    },
    {
      "number": 332,
      "category": "History",
      "question": "In what year did the Bahamas become a formal British colony?\n",
      "answers": [
        "1783"
      ]
    },
    {
      "number": 333,
      "category": "History",
      "question": "When did the Bahamas become independant?\n",
      "answers": [
        "july 10, 1973",
        "1973"
      ]
    },
    {
      "number": 334,
      "category": "Geography",
      "question": "What is the capital of Brazil?\n",
      "answers": [
        "brasilia"
      ]
    },
    {
      "number": 335,
      "category": "History",
      "question": "What country is Europe's oldest kingdom?\n",
      "answers": [
        "denmark"
      ]
    },
    {
      "number": 336,
      "category": "History",
      "question": "In what year did East and West Germany re-unite?\n",
      "answers": [
        "1990"
      ]
    },
    {
      "number": 337,
      "category": "Holidays",
      "question": "When is Bastille Day celebrated?\n",
      "answers": [
        "july 14 (1789)",
        "july 14"
      ]
    },
    {
      "number": 338,
      "category": "History",
      "question": "What country has the Grimaldi family ruled since the 13th century?\n",
      "answers": [
        "monaco"
      ]
    },
    {
      "number": 339,
      "category": "TheWorld",
      "question": "Which country has the only flag which is NOT rectangular or square?\n",
      "answers": [
        "nepal (it has 2 connected triangles",
        "nepal"
      ]
    },
    {
      "number": 340,
      "category": "TheWorld",
      "question": "How many stars are there on the Austrailian flag?\n",
      "answers": [
        "6 (5 for the southern cross and 1 commonwealth star)",
        "6",
        "six"
      ]
    },
    {
      "number": 341,
      "category": "UnitedStates",
      "question": "What state is the Mayo Clinic located in?\n",
      "answers": [
        "minnesota, usa",
        "minnesota"
      ]
    },
    {
      "number": 342,
      "category": "Arts&Entertainment",
      "question": "Barry Humphries is better known under what name?\n",
      "answers": [
        "dame edna"
      ]
    },
    {
      "number": 343,
      "category": "Science&Nature",
      "question": "In the sequence 2, 3, 5, 7, 11, 13, what number comes next?\n",
      "answers": [
        "17",
        "seventeen"
      ]
    },
    {
      "number": 344,
      "category": "UnitedStates",
      "question": "Who was the first woman Supreme Court Justice in the U.S.?\n",
      "answers": [
        "sandra day o'connor",
        "o'connor"
      ]
    },
    {
      "number": 345,
      "category": "History",
      "question": "Who was the first person to reach the South Pole?\n",
      "answers": [
        "roald amundsen (on dec 13, 1911)",
        "amundsen"
      ]
    },
    {
      "number": 346,
      "category": "History",
      "question": "When did Henry VIII rule?\n",
      "answers": [
        "1509 - 1547"
      ]
    },
    {
      "number": 347,
      "category": "History",
      "question": "Which family ruled Russia from 1613 to 1917?\n",
      "answers": [
        "romanov"
      ]
    },
    {
      "number": 348,
      "category": "Arts&Entertainment",
      "question": "What are the names of Donald Duck's nephews?\n",
      "answers": [
        "huey, dewey, and louie",
        "huey dewey louie"
      ]
    },
    {
      "number": 349,
      "category": "Science&Nature",
      "question": "How many of our years does it take for Pluto to circle the sun once?\n",
      "answers": [
        "248 earth years",
        "248",
        "two hundred forty-eight"
      ]
    },
    {
      "number": 350,
      "category": "TheWorld",
      "question": "What is the capital of Nova Scotia, Canada?\n",
      "answers": [
        "halifax"
      ]
    },
    {
      "number": 351,
      "category": "Science&Nature",
      "question": "Which animal kills more people per year, world wide, than any other?\n",
      "answers": [
        "snakes"
      ]
    },
    {
      "number": 352,
      "category": "UnitedStates",
      "question": "What year was the first U.S. census taken?\n",
      "answers": [
        "1790"
      ]
    },
    {
      "number": 353,
      "category": "TheWorld",
      "question": "Which country uses a Tugrik for money?\n",
      "answers": [
        "mongolia"
      ]
    },
    {
      "number": 354,
      "category": "TheWorld",
      "question": "In which country is Pashto and Dari spoken?\n",
      "answers": [
        "afghanistan"
      ]
    },
    {
      "number": 355,
      "category": "TheWorld",
      "question": "Which country uses a Yen for money?\n",
      "answers": [
        "japan"
      ]
    },
    {
      "number": 356,
      "category": "Arts&Entertainment",
      "question": "Which singer's fans are called Parrot Heads?\n",
      "answers": [
        "jimmy buffett",
        "buffett"
      ]
    },
    {
      "number": 357,
      "category": "Literature",
      "question": "In the book and movie titled FAIL SAFE which two cities are bombed?\n",
      "answers": [
        "moscow and new york",
        "moscow & new york",
        "new york and moscow",
        "new york & moscow"
      ]
    },
    {
      "number": 358,
      "category": "World",
      "question": "What country was hit by a devastating earthquake on August 17, 1999, killing at least 16,000 people?\n",
      "answers": [
        "turkey"
      ]
    },
    {
      "number": 359,
      "category": "Science&Nature",
      "question": "What caused West Virginia and portions of 5 other states to be declared disaster areas in the summer of 1999?\n",
      "answers": [
        "drought"
      ]
    },
    {
      "number": 360,
      "category": "Science&Nature",
      "question": "The oldest person to ever travel through space landed at Cape Canaveral Nov 7th, 1998 after a 10 day mission. Who was this person?\n",
      "answers": [
        "john glenn",
        "glenn"
      ]
    },
    {
      "number": 361,
      "category": "UnitedStates",
      "question": "For the 3rd time in less than 2 months, what did the Federal Reserve Board announce on November 17, 1998?\n",
      "answers": [
        "a cut in interest rates",
        "lowered interest rates",
        "cut interest",
        "interest rate cut"
      ]
    },
    {
      "number": 362,
      "category": "World",
      "question": "On Nov 15, 1998 bombers were called back from an aerial assault on what country after it again conceeded to allow inspections by the UN Special Commission?\n",
      "answers": [
        "iraq"
      ]
    },
    {
      "number": 363,
      "category": "World",
      "question": "Attempts to register what political party in China have caused harassment of it's supporters by Chinese authorities?\n",
      "answers": [
        "china democratic party"
      ]
    },
    {
      "number": 364,
      "category": "Nature&Science",
      "question": "What plowed through Central America in late October 1998 causing wide-spread devastation?\n",
      "answers": [
        "hurricane mitch",
        "mitch"
      ]
    },
    {
      "number": 365,
      "category": "World",
      "question": "What 2 oil-industry giants announced plans to merge on December 1, 1998?\n",
      "answers": [
        "mobil and exxon",
        "exxon and mobil"
      ]
    },
    {
      "number": 366,
      "category": "World",
      "question": "Ceeded to the United States by the 1898 Treaty of Paris, what country's people were given the opportunity to express their preference as to the country's future political status on December 13, 1998?\n",
      "answers": [
        "puerto rico"
      ]
    },
    {
      "number": 367,
      "category": "History",
      "question": "What do Nara, Fujiwara and Edo have in common?\n",
      "answers": [
        "they are all japanese historical periods",
        "japan historical periods",
        "historical eras"
      ]
    },
    {
      "number": 368,
      "category": "History",
      "question": "In what year did Napoleon abdicate the throne of France?\n",
      "answers": [
        "1814"
      ]
    },
    {
      "number": 369,
      "category": "Computers",
      "question": "What was the most visited website in 1999?\n",
      "answers": [
        "www.yahoo.com",
        "yahoo"
      ]
    },
    {
      "number": 370,
      "category": "World",
      "question": "In what country would you find Seikan; the world's longest railroad tunnel?\n",
      "answers": [
        "japan"
      ]
    },
    {
      "number": 371,
      "category": "World",
      "question": "Which country is also a continent?\n",
      "answers": [
        "egypt",
        "what country is the aswan high dam in?",
        "geography",
        "australia"
      ]
    },
    {
      "number": 372,
      "category": "History",
      "question": "True or false:  French was never the official language of England.\n",
      "answers": [
        "false. french was the official language for over 600 years.",
        "false"
      ]
    },
    {
      "number": 373,
      "category": "UnitedStates",
      "question": "Which is the only state that grows coffee?\n",
      "answers": [
        "hawaii"
      ]
    },
    {
      "number": 374,
      "category": "Science&Nature",
      "question": "True or False:  10 percent of professional boxers have suffered brain damage.\n",
      "answers": [
        "false, over 80% have suffered brain damage",
        "false"
      ]
    },
    {
      "number": 375,
      "category": "Geography",
      "question": "Which well-known Russian city has seen it's name changed 3 times since it was founded in 1703 by Peter the Great?\n",
      "answers": [
        "st. petersburg, russia",
        "st. petersburg",
        "st. petersberg"
      ]
    },
    {
      "number": 376,
      "category": "Arts&Entertainment",
      "question": "Of the 7 dwarfs in 'Snow White and The Seven Dwarfs', which one is the only beardless one?\n",
      "answers": [
        "dopey"
      ]
    },
    {
      "number": 377,
      "category": "Language",
      "question": "True or false:  The word 'karate' means 'empty hand'.\n",
      "answers": [
        "true"
      ]
    },
    {
      "number": 378,
      "category": "Geography",
      "question": "Which country is the world's leading importer of iron ore?\n",
      "answers": [
        "japan"
      ]
    },
    {
      "number": 379,
      "category": "History",
      "question": "What year was the Republic of Israel established, 1933, 1948, 1957 or 1966?\n",
      "answers": [
        "1948"
      ]
    },
    {
      "number": 380,
      "category": "Geography",
      "question": "How many cities in the world boast populations in excess of 1 million people; over 50, over 200, over 300 or over 400?\n",
      "answers": [
        "over 300",
        "over three hundred",
        "300"
      ]
    },
    {
      "number": 381,
      "category": "Mythology",
      "question": "Who was the Greek goddess of victory?\n",
      "answers": [
        "nike"
      ]
    },
    {
      "number": 382,
      "category": "UnitedStates",
      "question": "What city is the oldest one in the United States?\n",
      "answers": [
        "st. augustine, florida",
        "st. augustine",
        "saint augustine",
        "st augustine"
      ]
    },
    {
      "number": 383,
      "category": "Science&Nature",
      "question": "What continent is the only one on Earth that has no reptiles or snakes?\n",
      "answers": [
        "antarctica"
      ]
    },
    {
      "number": 384,
      "category": "Science&Nature",
      "question": "What breed of dog bites more humans than any other breed?\n",
      "answers": [
        "german shepherds",
        "german sheperd",
        "german shepard",
        "german shepherd"
      ]
    },
    {
      "number": 385,
      "category": "Science&Nature",
      "question": "True or false:  Adolescent male crickets can chirp.\n",
      "answers": [
        "false"
      ]
    },
    {
      "number": 386,
      "category": "Science&Nature",
      "question": "The blood of mammals is red.  What color is a lobster's blood?\n",
      "answers": [
        "blue"
      ]
    },
    {
      "number": 387,
      "category": "Arts&Entertainment",
      "question": "What cartoon character says \"DOH\"?\n",
      "answers": [
        "homer simpson",
        "homer"
      ]
    },
    {
      "number": 388,
      "category": "Arts&Entertainment",
      "question": "True or false:  In the movie, 'The Wizard Of Oz', Dorothy's 3 companions were looking for a heart, a brain and a glass slipper.\n",
      "answers": [
        "false"
      ]
    },
    {
      "number": 389,
      "category": "Languages",
      "question": "What is the world's most widely spoken language?\n",
      "answers": [
        "the mandarin dialect of chinese",
        "chinese",
        "mandarin"
      ]
    },
    {
      "number": 390,
      "category": "Geography",
      "question": "Which large, well-known Central American city is sinking at the rate of 6 to 8 inches per year?\n",
      "answers": [
        "mexico city"
      ]
    },
    {
      "number": 391,
      "category": "Science&Nature",
      "question": "If offered a new pen to write with, what will 97% of people do with it?\n",
      "answers": [
        "write their own name",
        "write name",
        "write their name0"
      ]
    },
    {
      "number": 392,
      "category": "Science&Nature",
      "question": "The average person has a vocabulary of 1,000 to 2,000, 3,000 to 4,000, or 5,000 to 6,000 words?\n",
      "answers": [
        "5,000 to 6,000",
        "five thousand to six thousand",
        " 5 to 6 thousand"
      ]
    },
    {
      "number": 393,
      "category": "Geography",
      "question": "Which one of Earth's oceans is mostly covered by solid ice, ice floes and icebergs?\n",
      "answers": [
        "arctic ocean",
        "arctic"
      ]
    },
    {
      "number": 394,
      "category": "Science&Nature",
      "question": "About how many feet of earth could an ambitious mole tunnel through in one day; 20 feet, 100 feet, 200 feet or 300 feet?\n",
      "answers": [
        "300 feet",
        "300",
        "three hundred"
      ]
    },
    {
      "number": 395,
      "category": "Science&Nature",
      "question": "The blood of mammals is red.  What color is insect's blood?\n",
      "answers": [
        "yellow"
      ]
    },
    {
      "number": 396,
      "category": "Science&Nature",
      "question": "What does a speleologist study?\n",
      "answers": [
        "studies caves",
        "caves",
        "cave"
      ]
    },
    {
      "number": 397,
      "category": "UnitedStates",
      "question": "Which product is more money spent on per year, baby food or pet food?\n",
      "answers": [
        "pet food",
        "pet"
      ]
    },
    {
      "number": 398,
      "category": "Geography",
      "question": "Can you name the largest island in the world?\n",
      "answers": [
        "greenland, at 840,000 square miles",
        "greenland"
      ]
    },
    {
      "number": 399,
      "category": "Geography",
      "question": "True or false:  In Paraguay dueling is still legal as long as both parties are registered blood donors.\n",
      "answers": [
        "true"
      ]
    },
    {
      "number": 400,
      "category": "Geography",
      "question": "What city in the world was the first one to reach the population of 1 million people?\n",
      "answers": [
        "rome, italy in 133 b.c.",
        "rome"
      ]
    },
    {
      "number": 401,
      "category": "Geography",
      "question": "True or false:  Michigan's Great Lakes are the largest group of freshwater lakes in the world.\n",
      "answers": [
        "true"
      ]
    },
    {
      "number": 402,
      "category": "History",
      "question": "To date, who has been the only American president to win non-consecutive terms to the White House?\n",
      "answers": [
        "president grover cleveland",
        "cleveland"
      ]
    },
    {
      "number": 403,
      "category": "UnitedStates",
      "question": "In area, which city is larger, Los Angeles, California or Juneau, Alaska?\n",
      "answers": [
        "juneau, alaska",
        "juneau"
      ]
    },
    {
      "number": 404,
      "category": "Science&Nature",
      "question": "How much of the world's population is left-handed, 5 percent, 10 percent, 15 percent or 20 percent?\n",
      "answers": [
        "10 percent",
        "ten percent",
        "10%",
        "10"
      ]
    },
    {
      "number": 405,
      "category": "Science&Nature",
      "question": "How many times a day does an average adult person laugh, 10 times, 15 times, 20 times or 25 times?\n",
      "answers": [
        "15 times",
        "15"
      ]
    },
    {
      "number": 406,
      "category": "Science&Nature",
      "question": "What insect is known for being a carrier of malaria, encephalitis, yellow fever and dengue fever?\n",
      "answers": [
        "mosquitos",
        "mosquito"
      ]
    },
    {
      "number": 407,
      "category": "Science&Nature",
      "question": "Which part of your body accounts for one quarter of the bones your body contains?\n",
      "answers": [
        "your feet",
        "feet",
        "foot"
      ]
    },
    {
      "number": 408,
      "category": "Science&Nature",
      "question": "What does a person with hexidectylism have?\n",
      "answers": [
        "six fingers or six toes",
        "6 fingers",
        "6 toes",
        "six fingers",
        "six toes"
      ]
    },
    {
      "number": 409,
      "category": "Geography",
      "question": "What country's name is a Native American Indian word meaning 'Big Village'?\n",
      "answers": [
        "canada"
      ]
    },
    {
      "number": 410,
      "category": "Geography",
      "question": "Over which waterfall does the most water flow over per year?\n",
      "answers": [
        "niagara falls",
        "niagara"
      ]
    },
    {
      "number": 411,
      "category": "Geography",
      "question": "Which large island is 3 times the size of Texas?\n",
      "answers": [
        "greenland"
      ]
    },
    {
      "number": 412,
      "category": "Geography",
      "question": "Which county in Great Britain is the only one that has 2 coasts?\n",
      "answers": [
        "devon"
      ]
    },
    {
      "number": 413,
      "category": "Geography",
      "question": "Which ocean is the smallest and shallowest?\n",
      "answers": [
        "artic ocean",
        "artic"
      ]
    },
    {
      "number": 414,
      "category": "Geography",
      "question": "Which ocean is saltier, the Pacific or the Atlantic?\n",
      "answers": [
        "atlantic ocean",
        "atlantic"
      ]
    },
    {
      "number": 415,
      "category": "Geography",
      "question": "What name was the city of St. Petersburg, Russia given in 1914 because Russian leaders thought it's name sounded too German?\n",
      "answers": [
        "petrograd"
      ]
    },
    {
      "number": 416,
      "category": "Geography",
      "question": "What name was the city of St. Petersburg, Russia given in 1924 to honor the founder of the Soviet Union?\n",
      "answers": [
        "petrograd"
      ]
    },
    {
      "number": 417,
      "category": "Geography",
      "question": "What country's national flag is flown differently depending on if the country is at war or at peace?\n",
      "answers": [
        "philippines",
        "phillipine",
        "phillipines",
        "philippine"
      ]
    },
    {
      "number": 418,
      "category": "Geography",
      "question": "What is the highest mountain range in the world?\n",
      "answers": [
        "the himilayas",
        "himilayas",
        "himilayan",
        "himilayan mountains"
      ]
    },
    {
      "number": 419,
      "category": "Geography",
      "question": "What body of water does the river Danube empty into?\n",
      "answers": [
        "the black sea",
        "black sea"
      ]
    },
    {
      "number": 420,
      "category": "Geography",
      "question": "Rome was originally built on how many hills?\n",
      "answers": [
        "seven",
        "7"
      ]
    },
    {
      "number": 421,
      "category": "Geography",
      "question": "What group of islands boasts the 'wettest spot on Earth' because of the rainfall there?\n",
      "answers": [
        "the hawaiian islands",
        "hawaii",
        "hawaiian"
      ]
    },
    {
      "number": 422,
      "category": "Geography",
      "question": "Name the world's smallest independant state.\n",
      "answers": [
        "vatican city",
        "the vatican",
        "vatican"
      ]
    },
    {
      "number": 423,
      "category": "History",
      "question": "What is the name of the largest building from ancient Rome that survives intact?\n",
      "answers": [
        "the pantheon",
        "pantheon"
      ]
    },
    {
      "number": 424,
      "category": "Literature",
      "question": "Who or what was the only one to recognize Odysseus when he arrived home after an absence of 20 years?\n",
      "answers": [
        "his dog, argus",
        "his dog",
        "dog"
      ]
    },
    {
      "number": 425,
      "category": "Literature",
      "question": "What famous ancient Greek author wrote about the epic journey of Odysseus?\n",
      "answers": [
        "homer"
      ]
    },
    {
      "number": 426,
      "category": "UnitedStates",
      "question": "Which US state has 8 national park sites?\n",
      "answers": [
        "alaska"
      ]
    },
    {
      "number": 427,
      "category": "UnitedStates",
      "question": "Which is larger, the island of Manhattan in New York or Disney World in Orlando, Florida?\n",
      "answers": [
        "disney world in orlando, florida",
        "disney world"
      ]
    },
    {
      "number": 428,
      "category": "UnitedStates",
      "question": "Which state is the only one whose name has only one syllable?\n",
      "answers": [
        "maine"
      ]
    },
    {
      "number": 429,
      "category": "UnitedStates",
      "question": "Which of Michigan's 'Great Lakes' lies entirely inside the United States?\n",
      "answers": [
        "lake michigan"
      ]
    },
    {
      "number": 430,
      "category": "UnitedStates",
      "question": "What is the most important inland waterway in North America?\n",
      "answers": [
        "the great lakes",
        "great lakes"
      ]
    },
    {
      "number": 431,
      "category": "Science&Nature",
      "question": "A zebra is which:  black with white stripes or white with black stripes?\n",
      "answers": [
        "white with black stripes",
        "white with black",
        "black on white"
      ]
    },
    {
      "number": 432,
      "category": "Science&Nature",
      "question": "What animal produces the loudest sound of any animal on Earth?\n",
      "answers": [
        "the blue whale can whistle at 188 decibels",
        "blue whale"
      ]
    },
    {
      "number": 433,
      "category": "Science&Nature",
      "question": "Which animal, cat or dog, has the most vocal sounds?\n",
      "answers": [
        "cats, with over 100",
        "cats"
      ]
    },
    {
      "number": 434,
      "category": "Science&Nature",
      "question": "What gossamer-winged insect is the fastest flying of all the insects?\n",
      "answers": [
        "dragonflies",
        "dragonfly"
      ]
    },
    {
      "number": 435,
      "category": "Science&Nature",
      "question": "How many worker bees would have to spend their lifetime to produce 1 teaspoon of honey?\n",
      "answers": [
        "12",
        "twelve"
      ]
    },
    {
      "number": 436,
      "category": "Science&Nature",
      "question": "Which do mosquitos prefer, brunettes or blonds?\n",
      "answers": [
        "blonds"
      ]
    },
    {
      "number": 437,
      "category": "Science&Nature",
      "question": "Which do mosquitos prefer, children or adults?\n",
      "answers": [
        "children"
      ]
    },
    {
      "number": 438,
      "category": "Science&Nature",
      "question": "What part of the mosquito does citronella bother the most?\n",
      "answers": [
        "their feet",
        "feet"
      ]
    },
    {
      "number": 439,
      "category": "Science&Nature",
      "question": "Herbivorous means only plants are eaten for food.  What word means anything is eaten for food?\n",
      "answers": [
        "omnivorous"
      ]
    },
    {
      "number": 440,
      "category": "Science&Nature",
      "question": "What is the world's largest living bird?\n",
      "answers": [
        "adult male ostrich",
        "ostrich"
      ]
    },
    {
      "number": 441,
      "category": "Sports&Leisure*G*",
      "question": "What profession is troubled by the most workplace violence?\n",
      "answers": [
        "police officers",
        "police",
        "policemen"
      ]
    },
    {
      "number": 442,
      "category": "Music",
      "question": "How did Kurt Cobain announce The Meat Puppets on Nirvana's \"Unplugged in New York?\n",
      "answers": [
        "thing 1 and thing 2",
        "thing1 and thing2",
        "thing1 thing2"
      ]
    },
    {
      "number": 443,
      "category": "Music",
      "question": "Who were the guest artists in Nirvana's \"Unplugged in New York?\n",
      "answers": [
        "the meat puppets"
      ]
    },
    {
      "number": 444,
      "category": "People&Places",
      "question": "What are the 3 best-known western personages in China?\n",
      "answers": [
        "jesus christ, richard nixon and elvis presley",
        "jesus",
        "nixon",
        "elvis"
      ]
    },
    {
      "number": 445,
      "category": "History",
      "question": "What was the name of the B-29 bomber that dropped the Atom Bomb on Nagasaki?\n",
      "answers": [
        "bock's car"
      ]
    },
    {
      "number": 446,
      "category": "Science&Nature",
      "question": "Which takes more muscles to do, frowning or smiling?\n",
      "answers": [
        "frowning",
        "frown"
      ]
    },
    {
      "number": 447,
      "category": "Science&Nature",
      "question": "What is the body's largest internal organ?\n",
      "answers": [
        "small intestine"
      ]
    },
    {
      "number": 448,
      "category": "Language",
      "question": "What do you study if you are studying entomology?\n",
      "answers": [
        "entomology is the study of insects",
        "insects",
        "insect"
      ]
    },
    {
      "number": 449,
      "category": "Language",
      "question": "If you study etymology, what are you studying?\n",
      "answers": [
        "word origins",
        "where words come from",
        "words"
      ]
    },
    {
      "number": 450,
      "category": "Geography",
      "question": "Name one of the \"Great Lakes\" that surround Michigan.\n",
      "answers": [
        "michigan, huron, erie or superior",
        "michigan",
        "huron",
        "erie",
        "superior"
      ]
    },
    {
      "number": 451,
      "category": "Geography",
      "question": "Which sea lies along the western side of Holland (the Netherlands)?\n",
      "answers": [
        "north sea"
      ]
    },
    {
      "number": 452,
      "category": "Geography",
      "question": "What country lies along the western side of Spain?\n",
      "answers": [
        "portugal"
      ]
    },
    {
      "number": 453,
      "category": "Literature",
      "question": "Who said: \"Fie Fi Fo Fum, I smell the blood of an Englishman\"?\n",
      "answers": [
        "the giant in \"jack in the beanstalk\"",
        "the giant",
        "giant"
      ]
    },
    {
      "number": 454,
      "category": "Weights&Measures",
      "question": "In kilograms, how much does one litre of water weigh?\n",
      "answers": [
        "1 kg",
        "one kilogram",
        "1kg",
        "one kg"
      ]
    },
    {
      "number": 455,
      "category": "Arts&Entertainment",
      "question": "What Lewis Carroll work offers this bit of whimsy: \"All mimsy were the borogoves, and the mome raths outgrabe\"?\n",
      "answers": [
        "alice's adventures in wonderland",
        "alice in wonderland"
      ]
    },
    {
      "number": 456,
      "category": "Sports&Leisure",
      "question": "How many of every 10 baseball players who sign pro contracts never play in a major league game?\n",
      "answers": [
        "nine",
        "9"
      ]
    },
    {
      "number": 457,
      "category": "Science&Nature",
      "question": "Which of the big, jungle cats is the only cat to be social rather than solitary?\n",
      "answers": [
        "the lion"
      ]
    },
    {
      "number": 458,
      "category": "Science&Nature",
      "question": "What type of nucleic acid carries hereditary information from generation to generation?\n",
      "answers": [
        "deoxyribonucleic acid or dna",
        "dna"
      ]
    },
    {
      "number": 459,
      "category": "Science&Nature",
      "question": "What substance is the largest single preventable cause of death?\n",
      "answers": [
        "tobacco"
      ]
    },
    {
      "number": 460,
      "category": "Science&Nature",
      "question": "What movie had Michael Keaton playing a character loosely named after a huge star in the constellation of Orion?\n",
      "answers": [
        "beetlejuice",
        "betelguese"
      ]
    },
    {
      "number": 461,
      "category": "History",
      "question": "What form of ancient writing was finally deciphered with the help of a chunk of basalt known as the Rosetta Stone?\n",
      "answers": [
        "hieroglyphics",
        "hirogliphics"
      ]
    },
    {
      "number": 462,
      "category": "History",
      "question": "What country did Hitler's troops invade, kicking off World War II?\n",
      "answers": [
        "poland"
      ]
    },
    {
      "number": 463,
      "category": "Science&Nature",
      "question": "What do American parents of infants dump 17 billion of each year?\n",
      "answers": [
        "disposable diapers",
        "diapers"
      ]
    },
    {
      "number": 464,
      "category": "People&Places",
      "question": "What state's license plates began saying 'Famous Potatoes' in 1957?\n",
      "answers": [
        "idaho's",
        "idaho"
      ]
    },
    {
      "number": 465,
      "category": "Science&Nature",
      "question": "What's an organism made from the genetic material of another commonly called?\n",
      "answers": [
        "a clone"
      ]
    },
    {
      "number": 466,
      "category": "People&Places",
      "question": "What tropical U.S. state has chosen the yellow hibiscus as it's state flower?\n",
      "answers": [
        "hawaii"
      ]
    },
    {
      "number": 467,
      "category": "People&Places",
      "question": "What European country contains Transylvania, commonly considered to be the home of \"Count Dracula\"?\n",
      "answers": [
        "romania"
      ]
    },
    {
      "number": 468,
      "category": "Science&Nature",
      "question": "How many bones does a shark have?\n",
      "answers": [
        "zero",
        "0"
      ]
    },
    {
      "number": 469,
      "category": "Science&Nature",
      "question": "What does the male Emperor Penguine balance atop his feet for two months while its mate feeds?\n",
      "answers": [
        "an egg"
      ]
    },
    {
      "number": 470,
      "category": "Science&Nature",
      "question": "What tracking device was the Stealth bomber designed to evade?\n",
      "answers": [
        "radar"
      ]
    },
    {
      "number": 471,
      "category": "Science&Nature",
      "question": "What's the heaviest naturally-occurring element?\n",
      "answers": [
        "uranium"
      ]
    },
    {
      "number": 472,
      "category": "Science&Nature",
      "question": "Which of the 9 planets in our solar system is blue and white when seen from outer space?\n",
      "answers": [
        "earth"
      ]
    },
    {
      "number": 473,
      "category": "Literature",
      "question": "What poet immortalized a famous silversmith's midnight ride to warn that the British were coming?\n",
      "answers": [
        "henry wadsworth longfellow",
        "longfellow"
      ]
    },
    {
      "number": 474,
      "category": "People&Places",
      "question": "Who was the first pilot to take off solo in New York and land in Paris?\n",
      "answers": [
        "charles lindbergh",
        "lindbergh"
      ]
    },
    {
      "number": 475,
      "category": "Science&Nature",
      "question": "bison roamed North America in 1492 - 600,000, 6 million or 60 million?\n",
      "answers": [
        "60 million",
        "sixty million",
        "60,000,000",
        "how many buffalo"
      ]
    },
    {
      "number": 476,
      "category": "History",
      "question": "Name 1 of the 2 U.S. presidents that were assassinated while in office other than Lincoln or Kennedy?\n",
      "answers": [
        "james garfield",
        "william mckinley",
        "garfield",
        "mckinley"
      ]
    },
    {
      "number": 477,
      "category": "People&Places",
      "question": "What U.S. state adopted a cactus blossom as its state flower?\n",
      "answers": [
        "arizona"
      ]
    },
    {
      "number": 478,
      "category": "World",
      "question": "Which president watched the most movies in his first year at the White House?\n",
      "answers": [
        "bill clinton",
        "clinton"
      ]
    },
    {
      "number": 479,
      "category": "People&Places",
      "question": "What city rings in the new year with a descending ball or apple?\n",
      "answers": [
        "new york"
      ]
    },
    {
      "number": 480,
      "category": "Science&Nature",
      "question": "What's the term for a device that uses the sun and horizon to determine location?\n",
      "answers": [
        "sextant"
      ]
    },
    {
      "number": 481,
      "category": "Sports&Leisure",
      "question": "What chess piece is second in strength only to the queen?\n",
      "answers": [
        "rook",
        "castle"
      ]
    },
    {
      "number": 482,
      "category": "People&Places",
      "question": "What fort's 1814 bombardment inspired Francis Scott Key to pen the USA's anthem's lyrics?\n",
      "answers": [
        "fort mchenry's",
        "mchenry"
      ]
    },
    {
      "number": 483,
      "category": "Science&Nature",
      "question": "What bird in the heron family is named for the long feathers, or \"aigrettes,\" grown by the male during mating season?\n",
      "answers": [
        "an egret",
        "egret"
      ]
    },
    {
      "number": 484,
      "category": "Science&Nature",
      "question": "What number is indicated by this symbol in the Greek numeral system? VII\n",
      "answers": [
        "seven",
        "7"
      ]
    },
    {
      "number": 485,
      "category": "History",
      "question": "Whose signature on the USA's \"Declaration Of Independance\" is legible from the farthest distance?\n",
      "answers": [
        "john hancock's",
        "hancock"
      ]
    },
    {
      "number": 486,
      "category": "History",
      "question": "What was the first U.S. battle cry of World War II?\n",
      "answers": [
        "remember pearl harbor!"
      ]
    },
    {
      "number": 487,
      "category": "People&Places",
      "question": "What's the first foreign country you'd reach by traveling due south from Detroit's City Airport?\n",
      "answers": [
        "canada"
      ]
    },
    {
      "number": 488,
      "category": "People&Places",
      "question": "What country found wooden shoes to be no match for German jackboots in 1940?\n",
      "answers": [
        "the netherlands",
        "holland"
      ]
    },
    {
      "number": 489,
      "category": "Arts&Entertainment",
      "question": "What six words does 007 say when introducing himself?\n",
      "answers": [
        "the name is bond, james bond",
        "the name is bond james bond"
      ]
    },
    {
      "number": 490,
      "category": "Science&Nature",
      "question": "What does the acronym \"WYSIWYG\" stand for?\n",
      "answers": [
        "what you see is what you get"
      ]
    },
    {
      "number": 491,
      "category": "Science&Nature",
      "question": "What type of engineering sees organisms have their DNA altered to produce new substances?\n",
      "answers": [
        "genetic engineering",
        "genetic"
      ]
    },
    {
      "number": 492,
      "category": "Science&Nature",
      "question": "What Intel chip is the successor to the 80286, 80386 and 80486?\n",
      "answers": [
        "the pentium",
        "pentium"
      ]
    },
    {
      "number": 493,
      "category": "Science&Nature",
      "question": "What planet did the U.S. \"Viking I\" send surface images of, starting in 1976?\n",
      "answers": [
        "mars"
      ]
    },
    {
      "number": 494,
      "category": "People&Places",
      "question": "What continent boasts Angel Falls, the tallest in the world?\n",
      "answers": [
        "south america"
      ]
    },
    {
      "number": 495,
      "category": "Science&Nature",
      "question": "What is the only mammal that can fly, and not simply glide?\n",
      "answers": [
        "the bat",
        "bat"
      ]
    },
    {
      "number": 496,
      "category": "History",
      "question": "What was the name of the B-29 that dropped the bomb on Hiroshima?\n",
      "answers": [
        "enola gay"
      ]
    },
    {
      "number": 497,
      "category": "People&Places",
      "question": "What's the name of the stately stone gate in the center of Berlin?\n",
      "answers": [
        "the brandenburg gate",
        "brandenberg",
        "brandenburg"
      ]
    },
    {
      "number": 498,
      "category": "Science&Nature",
      "question": "What invention did the most to discourage the practice of letter writing?\n",
      "answers": [
        "the telephone",
        "telephone"
      ]
    },
    {
      "number": 499,
      "category": "Science&Nature",
      "question": "What country was proud to see Marc Garneau as it's first astronaut 1984?\n",
      "answers": [
        "canada"
      ]
    },
    {
      "number": 500,
      "category": "Science&Nature",
      "question": "What industry, according to Melvin Belli, \"has conspired to catch you, hold you and kill you\"?\n",
      "answers": [
        "the tobacco industry"
      ]
    },
    {
      "number": 501,
      "category": "People&Places",
      "question": "What British political party made Margaret Thatcher its first female leader?\n",
      "answers": [
        "the conservative (tory) party",
        "conservative",
        "tory"
      ]
    },
    {
      "number": 502,
      "category": "Science&Nature",
      "question": "Which can last longer without water, a camel or a rat?\n",
      "answers": [
        "a rat",
        "rat"
      ]
    },
    {
      "number": 503,
      "category": "Science&Nature",
      "question": "Which is bigger, an ostrich's eye or it's brain?\n",
      "answers": [
        "it's eye",
        "eye"
      ]
    },
    {
      "number": 504,
      "category": "Science&Nature",
      "question": "How many eyelids does a camel's eye have?\n",
      "answers": [
        "3",
        "three"
      ]
    },
    {
      "number": 505,
      "category": "Science&Nature",
      "question": "True or false:  Snakes are immune to their own poison.\n",
      "answers": [
        "true"
      ]
    },
    {
      "number": 506,
      "category": "Science&Nature",
      "question": "Which insect is responsible for the most human deaths world-wide?\n",
      "answers": [
        "mosquito",
        "mousquito"
      ]
    },
    {
      "number": 507,
      "category": "Science&Nature",
      "question": "True or false:  The bones of a pidgeon weigh less than it's feathers.\n",
      "answers": [
        "true"
      ]
    },
    {
      "number": 508,
      "category": "Science&Nature",
      "question": "What bird is the only bird in the world that can fly backwards?\n",
      "answers": [
        "the hummingbird"
      ]
    },
    {
      "number": 509,
      "category": "Science&Nature",
      "question": "Name the national bird of New Zealand?\n",
      "answers": [
        "the kiwi",
        "kiwi"
      ]
    },
    {
      "number": 510,
      "category": "Science&Nature",
      "question": "What is the most common mammal in the United States?\n",
      "answers": [
        "the mouse",
        "mouse"
      ]
    },
    {
      "number": 511,
      "category": "Science&Nature",
      "question": "The poison-arrow frog has enough poison to kill how many people; 10, 500, 1,200 or 2,200?\n",
      "answers": [
        "2,200",
        "1,200",
        "500",
        "10"
      ]
    },
    {
      "number": 512,
      "category": "Science&Nature",
      "question": "Whose venom is more potent, a rattlesnake's or a female black widow spider's?\n",
      "answers": [
        "the female black widow spider's",
        "black widow's",
        "black widow"
      ]
    },
    {
      "number": 513,
      "category": "Science&Nature",
      "question": "What is the world's largest mammal?\n",
      "answers": [
        "the blue whale",
        "blue whale"
      ]
    },
    {
      "number": 514,
      "category": "Science&Nature",
      "question": "Of the approximately 2,600 different species of frogs, what is the only continent that they don't live on?\n",
      "answers": [
        "antartica"
      ]
    },
    {
      "number": 515,
      "category": "People&Places",
      "question": "What well-known ancient site in England is 1,500 years older then the Colosseum in Rome?\n",
      "answers": [
        "stonehenge"
      ]
    },
    {
      "number": 516,
      "category": "People&Places",
      "question": "How tall is the Eiffel Tower; 583 feet, 196 feet, 984 feet or 721 feet?\n",
      "answers": [
        "984 feet high",
        "nine hundred eighty-four",
        "984"
      ]
    },
    {
      "number": 517,
      "category": "History",
      "question": "Who did Cleopatra wed after frustrating marriages with her two younger brothers?\n",
      "answers": [
        "marc antony"
      ]
    },
    {
      "number": 518,
      "category": "Arts&Entertainment",
      "question": "What does \"dormez-vous\" mean?\n",
      "answers": [
        "are you sleeping?",
        "are you sleeping"
      ]
    },
    {
      "number": 519,
      "category": "People&Places",
      "question": "What name did Mohammed A. Salameh use when he rented the van that carried the bomb that blew up the World Trade Center in New York City?\n",
      "answers": [
        "mohammed a. salameh"
      ]
    },
    {
      "number": 520,
      "category": "Arts&Entertainment",
      "question": "What name did gangsta' rapper, Snoop Dogg, give his platinum debut album?\n",
      "answers": [
        "doggystyle",
        "doggy style"
      ]
    },
    {
      "number": 521,
      "category": "Arts&Entertainment",
      "question": "What Spike Lee movie title was uttered in Congress 67 times in the six months after its release?\n",
      "answers": [
        "do the right thing"
      ]
    },
    {
      "number": 522,
      "category": "People&Places",
      "question": "What building did a wayward B-25 smack the 78th floor of in 1945?\n",
      "answers": [
        "the empire state building"
      ]
    },
    {
      "number": 523,
      "category": "Science&Nature",
      "question": "What's the fastest man can run - 18, 28 or 38 miles per hour?\n",
      "answers": [
        "twenty-eight miles per hour",
        "28",
        "28 miles per hour",
        "28 mph"
      ]
    },
    {
      "number": 524,
      "category": "History",
      "question": "What war cost an average of one billion dollars a day?\n",
      "answers": [
        "the persian gulf war",
        "desert storm",
        "gulf war"
      ]
    },
    {
      "number": 525,
      "category": "Science&Nature",
      "question": "What invention rendered the short-lived Pony Express delivery service unnecessary?\n",
      "answers": [
        "the telegraph",
        "telegrams"
      ]
    },
    {
      "number": 526,
      "category": "Sports&Leisure",
      "question": "Who, with Emil Gagnan, invented the gear that allows scuba diving to flourish as a sport?\n",
      "answers": [
        "jacques cousteau",
        "costeau"
      ]
    },
    {
      "number": 527,
      "category": "Arts&Entertainment",
      "question": "What \"pet\" came with an owner's manual that said it could learn to \"play dead\" with no training?\n",
      "answers": [
        "the pet rock",
        "pet rock",
        "rock"
      ]
    },
    {
      "number": 528,
      "category": "History",
      "question": "True or false:  The Jordanian city, Amman, was once called Philadelphia.\n",
      "answers": [
        "true"
      ]
    },
    {
      "number": 529,
      "category": "PresidentsDay",
      "question": "Abraham Lincoln, America's first President, began serving his 1st term in office in what year?\n",
      "answers": [
        "1861"
      ]
    },
    {
      "number": 530,
      "category": "PresidentsDay",
      "question": "Abraham Lincoln was born in Hardin County, KY (now Larue Co.) in what year?\n",
      "answers": [
        "1809"
      ]
    },
    {
      "number": 531,
      "category": "PresidentsDay",
      "question": "In what year was Lincoln elected to the Illinois state legislature.\n",
      "answers": [
        "1834"
      ]
    },
    {
      "number": 532,
      "category": "PresidentsDay",
      "question": "Which president said \"A house divided against itself cannot stand\"? \n",
      "answers": [
        "lincoln"
      ]
    },
    {
      "number": 533,
      "category": "PresidentsDay",
      "question": "In May, 1860 Abraham Lincoln was nominated for President by which political party?\n",
      "answers": [
        "republican"
      ]
    },
    {
      "number": 534,
      "category": "PresidentsDay",
      "question": "On Election Day, November 6, 1860, with Lincoln the decisive winner, how many states had started proceedings to seceed from the Union?\n",
      "answers": [
        "seven",
        "7"
      ]
    },
    {
      "number": 535,
      "category": "PresidentsDay",
      "question": "What famous speech of Lincoln's started with the words, \"Fourscore and seven years ago\"?\n",
      "answers": [
        "gettysburg address (nov. 19, 1863)",
        "gettysburg address"
      ]
    },
    {
      "number": 536,
      "category": "PresidentsDay",
      "question": "What was the intent of  Lincoln's Emancipation Proclamation of 1863?\n",
      "answers": [
        "to abolish slavery",
        "set slaves free",
        "free slaves"
      ]
    },
    {
      "number": 537,
      "category": "PresidentsDay",
      "question": "April 14, 1865, while attending a play at Ford's Theater, Abraham Lincoln was shot. What city was Ford's Theater in?\n",
      "answers": [
        "washington dc",
        "washington"
      ]
    },
    {
      "number": 538,
      "category": "PresidentsDay",
      "question": "Who became Lincoln's wife in 1842 and gave him four sons?\n",
      "answers": [
        "mary todd lincoln (1818-82)",
        "mary lincoln"
      ]
    },
    {
      "number": 539,
      "category": "PresidentsDay",
      "question": "How tall was Abraham Lincoln?\n",
      "answers": [
        "6' 4\"",
        "six feet, four inches"
      ]
    },
    {
      "number": 540,
      "category": "PresidentsDay",
      "question": "What monument was built and designed by American architect, Henry Bacon?\n",
      "answers": [
        "the lincoln memorial in washington dc",
        "lincoln monument",
        "lincoln memorial"
      ]
    },
    {
      "number": 541,
      "category": "PresidentsDay",
      "question": "Where is Abraham Lincoln buried? \n",
      "answers": [
        "oak ridge cemetery, springfield, illinois",
        "springfield"
      ]
    },
    {
      "number": 542,
      "category": "PresidentsDay",
      "question": "What runs under the Hudson River between NY & NJ?\n",
      "answers": [
        "lincoln tunnel"
      ]
    },
    {
      "number": 543,
      "category": "PresidentsDay",
      "question": "Lincoln, Nebraska was initially know by what name before it was renamed when it became the state capitol in 1867?\n",
      "answers": [
        "lancaster"
      ]
    },
    {
      "number": 544,
      "category": "PresidentsDay",
      "question": "Martin Luther King, Jr. delivered his famous \"I Have A Dream\" speech in front of what memorial. on August 28, 1963?\n",
      "answers": [
        "lincoln memorial",
        "lincoln monument",
        "lincoln"
      ]
    },
    {
      "number": 545,
      "category": "PresidentsDay",
      "question": "Where was George Washington born?\n",
      "answers": [
        "westmoreland county, va",
        "westmoreland county"
      ]
    },
    {
      "number": 546,
      "category": "PresidentsDay",
      "question": "When is George Washington's birth date?\n",
      "answers": [
        "february 22, 1732",
        "feb 22, 1732"
      ]
    },
    {
      "number": 547,
      "category": "PresidentsDay",
      "question": "In 1755 a young George Washington became the commander in chief of what state's militia?\n",
      "answers": [
        "virginia"
      ]
    },
    {
      "number": 548,
      "category": "PresidentsDay",
      "question": "In 1758 Washington got married to young widow with 2 young children. What was her name?\n",
      "answers": [
        "martha dandridge custis",
        "martha custis"
      ]
    },
    {
      "number": 549,
      "category": "PresidentsDay",
      "question": "When did the morale-boosting event of Washington crossing the Delaware River & defeating the British at Trenton & Princeton, NJ occur?\n",
      "answers": [
        "christmas night 1776",
        "christmas 1776",
        "dec 25, 1776"
      ]
    },
    {
      "number": 550,
      "category": "PresidentsDay",
      "question": "The bitter winter of 1777-78 found the Continental Army, led by George Washington camped where? \n",
      "answers": [
        "valley forge, pa",
        "valley forge"
      ]
    },
    {
      "number": 551,
      "category": "PresidentsDay",
      "question": "What is the name of George Washington's estate, located in Fairfax County, VA?\n",
      "answers": [
        "mount vernon"
      ]
    },
    {
      "number": 552,
      "category": "PresidentsDay",
      "question": "Washington was called out of retirement to preside at the Constitutional Convention held in what city?\n",
      "answers": [
        "philadelphia (1787)",
        "philadelphia"
      ]
    },
    {
      "number": 553,
      "category": "PresidentsDay",
      "question": "How old was George Washington when he was chosen as President on April 30, 1789?\n",
      "answers": [
        "57",
        "fifty-seven"
      ]
    },
    {
      "number": 554,
      "category": "PresidentsDay",
      "question": "How many years did Washington serve as President of the United States of America?\n",
      "answers": [
        "8 (1789-1797)",
        "eight",
        "8"
      ]
    },
    {
      "number": 555,
      "category": "PresidentsDay",
      "question": "Standing on the balcony of Federal Hall, Washington took the oath of office as the 1st President of the United States on April 30, 1789 in what city?\n",
      "answers": [
        "new york city",
        "new york"
      ]
    },
    {
      "number": 556,
      "category": "PresidentsDay",
      "question": "On July 4, 1848, the cornerstone of the Washington Monument was laid with same trowel Washington used to lay cornerstone of what other, well-known Washington DC building?  \n",
      "answers": [
        "us capitol building (1793)",
        "capital building",
        "capitol building"
      ]
    },
    {
      "number": 557,
      "category": "PresidentsDay",
      "question": " In 1871 two cities were consolidated with Washington County to become Washington DC.  Name one of them.\n",
      "answers": [
        "georgetown",
        "washington"
      ]
    },
    {
      "number": 558,
      "category": "PresidentsDay",
      "question": "Washington D.C. is located at the confluence of the Potomac river and what other river?\n",
      "answers": [
        "anacostia"
      ]
    },
    {
      "number": 559,
      "category": "PresidentsDay",
      "question": "To visit the 2nd largest country in South America you would have to go to what country?\n",
      "answers": [
        "pierre charles l'enfant (1791)",
        "l'enfant",
        "washington dc was laid out by a french architect.  what was his name?",
        "traveltrivia",
        "argentina",
        "argentina",
        "argentena"
      ]
    },
    {
      "number": 560,
      "category": "TravelTrivia",
      "question": "What city in Mexico's Baja California state is just across the border from San Diego?\n",
      "answers": [
        "tijuana",
        "tiajuana",
        "tijuana"
      ]
    },
    {
      "number": 561,
      "category": "TravelTrivia",
      "question": "Although Bern is the capital of Switzerland, what city would you go to if you wanted to visit Switzerland's largest city?\n",
      "answers": [
        "zurich",
        "zurick"
      ]
    },
    {
      "number": 562,
      "category": "TravelTrivia",
      "question": "What German city might you go for an all-beef pattie?\n",
      "answers": [
        "hamburg, germany",
        "hamburg"
      ]
    },
    {
      "number": 563,
      "category": "TravelTrivia",
      "question": "What U.S. river is known as \"The Big Muddy\"?\n",
      "answers": [
        "mississippi",
        "mississippi river"
      ]
    },
    {
      "number": 564,
      "category": "TravelTrivia",
      "question": "Who's buried in Grant's tomb?\n",
      "answers": [
        "grant",
        "ulysses s grant",
        "president grant"
      ]
    },
    {
      "number": 565,
      "category": "TravelTrivia",
      "question": "The Nile is the longest river in the world but what river carries the most water everyday?\n",
      "answers": [
        "amazon",
        "amazon river"
      ]
    },
    {
      "number": 566,
      "category": "TravelTrivia",
      "question": "What region in southwestern China was once ruled by the Dalai Lama?\n",
      "answers": [
        "tibet"
      ]
    },
    {
      "number": 567,
      "category": "TravelTrivia",
      "question": "What commercial and industrial center is the capital of Germany's Bavaria state?\n",
      "answers": [
        "munich",
        "munich, germany"
      ]
    },
    {
      "number": 568,
      "category": "TravelTrivia",
      "question": "Extending from the Arctic Tundra to the desert north of the Caspian Sea, what mountains separate Europe and Asia?\n",
      "answers": [
        "the urals",
        "ural",
        "the ural mountains"
      ]
    },
    {
      "number": 569,
      "category": "TravelTrivia",
      "question": "All English monarchs since William the Conqueror have been crowned in the same church located in London. What church is it?\n",
      "answers": [
        "westminster abbey",
        "wesminster abby",
        "westminster abby",
        "wesminster abbey"
      ]
    },
    {
      "number": 570,
      "category": "TravelTrivia",
      "question": "What is the largest Portugeuse speaking country in the world?\n",
      "answers": [
        "brazil"
      ]
    },
    {
      "number": 571,
      "category": "TravelTrivia",
      "question": "What do we now call the country that was once known as Siam?\n",
      "answers": [
        "thailand",
        "thiland"
      ]
    },
    {
      "number": 572,
      "category": "TravelTrivia",
      "question": "Uganda can't boast an ocean shore but it does reside on what Lake?\n",
      "answers": [
        "lake victoria",
        "lac victoria",
        "victoria"
      ]
    },
    {
      "number": 573,
      "category": "TravelTrivia",
      "question": "From what famous European city does the country of Venezuela get its name?\n",
      "answers": [
        "venice",
        "venice, italy"
      ]
    },
    {
      "number": 574,
      "category": "TravelTrivia",
      "question": "You are standing on a bridge over the river Seine looking at Notre Dame cathedral. Another church in this city is the church of Sacre Coeur. Where are you?\n",
      "answers": [
        "paris",
        "paris, france"
      ]
    },
    {
      "number": 575,
      "category": "TravelTrivia",
      "question": "If you going to visit Taj Mahal, Towers of Silence and Golconda, what country will you travel to?\n",
      "answers": [
        "india"
      ]
    },
    {
      "number": 576,
      "category": "TravelTrivia",
      "question": "What color is the circle on the Japanese flag?\n",
      "answers": [
        "red"
      ]
    },
    {
      "number": 577,
      "category": "TravelTrivia",
      "question": "What city is the capital of Bolivia?\n",
      "answers": [
        "sucre"
      ]
    },
    {
      "number": 578,
      "category": "TravelTrivia",
      "question": "In Italy, a man may be arrested for wearing a what?\n",
      "answers": [
        "skirt",
        "dress"
      ]
    },
    {
      "number": 579,
      "category": "TravelTrivia",
      "question": "What is the capital of Australia?\n",
      "answers": [
        "canberra",
        "canbera"
      ]
    },
    {
      "number": 580,
      "category": "TravelTrivia",
      "question": "What city is home to the Alamo?\n",
      "answers": [
        "san antonio",
        "san antone"
      ]
    },
    {
      "number": 581,
      "category": "TravelTrivia",
      "question": "Which English city is known for its association with Robin Hood and Sherwood Forest?\n",
      "answers": [
        "nottingham",
        "notingham"
      ]
    },
    {
      "number": 582,
      "category": "TravelTrivia",
      "question": "What Hungarian capital is split by the Danube river?\n",
      "answers": [
        "budapest"
      ]
    },
    {
      "number": 583,
      "category": "TravelTrivia",
      "question": "What country has a 14:1 sheep to human ratio?\n",
      "answers": [
        "new zealand",
        "new zealand"
      ]
    },
    {
      "number": 584,
      "category": "TravelTrivia",
      "question": "Which of the following is not a Greek island? Korfu, Crete, Corsica or Kos?\n",
      "answers": [
        "corsica"
      ]
    },
    {
      "number": 585,
      "category": "TravelTrivia",
      "question": "What city is known as \"The Big Apple\"?\n",
      "answers": [
        "new york",
        "new york city"
      ]
    },
    {
      "number": 586,
      "category": "TravelTrivia",
      "question": "If you were visiting Reykjavik what country would you be in?\n",
      "answers": [
        "iceland"
      ]
    },
    {
      "number": 587,
      "category": "TravelTrivia",
      "question": "What is the largest Japanese speaking country?\n",
      "answers": [
        "japan"
      ]
    },
    {
      "number": 588,
      "category": "TravelTrivia",
      "question": "In what USA state is the Petrified Forest located?\n",
      "answers": [
        "arizona"
      ]
    },
    {
      "number": 589,
      "category": "TravelTrivia",
      "question": "Where would you go to see a tower that leans?\n",
      "answers": [
        "pisa, italy",
        "pisa"
      ]
    },
    {
      "number": 590,
      "category": "TravelTrivia",
      "question": "The most populated country in western Europe is?\n",
      "answers": [
        "germany"
      ]
    },
    {
      "number": 591,
      "category": "TravelTrivia",
      "question": "The pyramids in Egypt are located nearest to what city?\n",
      "answers": [
        "giza"
      ]
    },
    {
      "number": 592,
      "category": "TravelTrivia",
      "question": "In Thailand, it is illegal to leave your house if you are not wearing what?\n",
      "answers": [
        "underwear",
        "panties",
        "skivvies",
        "underpants",
        "briefs"
      ]
    },
    {
      "number": 593,
      "category": "TravelTrivia",
      "question": "In Switzerland, it is illegal to do this after 10PM if you live in an Apartment?\n",
      "answers": [
        "flush the toilet",
        "flush"
      ]
    },
    {
      "number": 594,
      "category": "TravelTrivia",
      "question": "What state is known for Mackinac Island Fudge?\n",
      "answers": [
        "michigan"
      ]
    },
    {
      "number": 595,
      "category": "TravelTrivia",
      "question": "Saint Valentine was beheaded by which Roman Emperor for marrying  couples during wartime and interfering with the Emperor's war recruitment?\n",
      "answers": [
        "lord nelson",
        "lord nelsons",
        "whose statue is in trafalgar square?",
        "valentines",
        "claudius"
      ]
    },
    {
      "number": 596,
      "category": "Valentines",
      "question": "Which Catholic pope declared February 14th as St. Valentine's Day around 496 A.D?\n",
      "answers": [
        "pope gelasius",
        "gelasius"
      ]
    },
    {
      "number": 597,
      "category": "Valentines",
      "question": "The \"christian\" church may have decided to celebrate Saint Valentine's feast day in the middle of February in an effort to 'christianize' celebrations of which pagan, Roman festival?\n",
      "answers": [
        "lupercalia"
      ]
    },
    {
      "number": 598,
      "category": "Valentines",
      "question": "The oldest known valentine still in existence today was a poem written in 1415 by Charles, Duke of Orleans to his wife and can be found in a library in what country?\n",
      "answers": [
        "british library in london, england",
        "england",
        "united kingdom",
        "uk",
        "britain"
      ]
    },
    {
      "number": 599,
      "category": "Valentines",
      "question": "Which English king hired a writer named John Lydgate to compose a Valentine note to Catherine of Valois?\n",
      "answers": [
        "king henry v",
        "henry v",
        "henry the 5th"
      ]
    },
    {
      "number": 600,
      "category": "Valentines",
      "question": "In which century did Valentine's Day begin to be popularly celebrated in Great Britain?\n",
      "answers": [
        "17th",
        "seventeenth"
      ]
    },
    {
      "number": 601,
      "category": "Valentines",
      "question": "By the end of which century did printed Valentine's Day cards began to replace written Valentine love letters due to improvements in printing technology? \n",
      "answers": [
        "17th",
        "seventeenth"
      ]
    },
    {
      "number": 602,
      "category": "Valentines",
      "question": " Esther A. Howland began to sell the first mass-produced Valentines in America during which decade?\n",
      "answers": [
        "in the 1840s",
        "1840"
      ]
    },
    {
      "number": 603,
      "category": "Valentines",
      "question": "What female, American entrepreneur perfected the assembly line method of card design in 1848? \n",
      "answers": [
        "esther howland",
        "esther a. howland"
      ]
    },
    {
      "number": 604,
      "category": "Valentines",
      "question": "Approximately what percent of all Valentines are purchased by women? \n",
      "answers": [
        "85%",
        "85",
        "85 percent"
      ]
    },
    {
      "number": 605,
      "category": "Valentines",
      "question": "Cupid, a well-known Valentine's Day symbol, is known for making people fall in love.  What mortal maiden did Cupid fall in love with? \n",
      "answers": [
        "psyche"
      ]
    },
    {
      "number": 606,
      "category": "Valentines",
      "question": "Theorem or Poonah valentines; a style that came from the Orient; uses what \"device\" to achieve their designs?\n",
      "answers": [
        "stencils",
        "stencil"
      ]
    },
    {
      "number": 607,
      "category": "Valentines",
      "question": "What style of script, originated during the Middle Ages and was widely used in manuscripts, do Fraktur valentines use?\n",
      "answers": [
        "ornamental or illuminated lettering",
        "illuminated",
        "ornimental"
      ]
    },
    {
      "number": 608,
      "category": "Valentines",
      "question": "Fancy valentines were made with real lace and ribbons. When was paper lace introduced? \n",
      "answers": [
        "mid 1800's",
        "1800"
      ]
    },
    {
      "number": 609,
      "category": "Valentines",
      "question": "As far back as the Middle Ages, lovers said or sang their valentines. When did written valentines began to appear? \n",
      "answers": [
        "1400"
      ]
    },
    {
      "number": 610,
      "category": "Valentines",
      "question": "According to the Chinese lunar calendar, Chinese Valentine's Day (Qi Qiao Jie) falls on what number day of what number month?\n",
      "answers": [
        "7th day of the 7th month (august by the gregorian calendar)",
        "7th day of the 7th month",
        "7",
        "7th day 7th month"
      ]
    },
    {
      "number": 611,
      "category": "Valentines",
      "question": "Which Lord Protector of England, during the early 1600's, declared Valentines immoral and had them banned? \n",
      "answers": [
        "oliver cromwell",
        "cromwell"
      ]
    },
    {
      "number": 612,
      "category": "Valentines",
      "question": " The rose is a symbol Valentine's Day and is also the ancient, sacred symbol of the Greek Goddess of Love.  What is the goddess' name?\n",
      "answers": [
        "aphrodite"
      ]
    },
    {
      "number": 613,
      "category": "Valentines",
      "question": "Hearts, the symbol of love, were thought by the Romans to contain what part of the human \"psyche\"? \n",
      "answers": [
        "the soul",
        "soul"
      ]
    },
    {
      "number": 614,
      "category": "Valentines",
      "question": "A white dove, also a symbol of Valentine's Day, symbolizes what?\n",
      "answers": [
        "good luck"
      ]
    },
    {
      "number": 615,
      "category": "Valentines",
      "question": "What country had the tradition that the first young man seen by a girl on the morning of Valentine's day became her boyfriend?\n",
      "answers": [
        "france"
      ]
    },
    {
      "number": 616,
      "category": "Valentines",
      "question": "According to a 17th century custom, children get candy or money for singing songs on Valentine's Day in which country? \n",
      "answers": [
        "british isles",
        "england",
        "united kingdom",
        "uk",
        "britain"
      ]
    },
    {
      "number": 617,
      "category": "Valentines",
      "question": "In England special Valentine buns are baked with raisins and caraway seeds and filled with what?\n",
      "answers": [
        "plum filling",
        "plum"
      ]
    },
    {
      "number": 618,
      "category": "Valentines",
      "question": "In Scotland what Valentine gift is given that's made of ribbon or paper? \n",
      "answers": [
        "lover's knot",
        "lovers knot"
      ]
    },
    {
      "number": 619,
      "category": "Valentines",
      "question": " In what coutry are carved, wooden, \"love\" spoons given as gifts on February 14th?\n",
      "answers": [
        "wales"
      ]
    },
    {
      "number": 620,
      "category": "Valentines",
      "question": "Women plant onions in pots on Valentine's Day. Each onion is given a man's name and put near the fireplace. The first onion to sprout will be the intended. What country is this a tradition in? \n",
      "answers": [
        "germany"
      ]
    },
    {
      "number": 621,
      "category": "Valentines",
      "question": "Cupid is the most famous of Valentine symbols and that boy, armed with bow and arrows, is known as a mischievious, winged child.  What do his arrows signify?\n",
      "answers": [
        "desire and love",
        "desire",
        "love"
      ]
    },
    {
      "number": 622,
      "category": "Valentines",
      "question": "Ich liebe Dich means \"I love you\" in what language?\n",
      "answers": [
        "german"
      ]
    },
    {
      "number": 623,
      "category": "Valentines",
      "question": "Je t'aime means \"I love you\" in what language?\n",
      "answers": [
        "french"
      ]
    },
    {
      "number": 624,
      "category": "Valentines",
      "question": "Ti amo means \"I love you\" in what language?\n",
      "answers": [
        "italian"
      ]
    },
    {
      "number": 625,
      "category": "Valentines",
      "question": "Te quiero means  \"I love you\" in what language?\n",
      "answers": [
        "spanish"
      ]
    },
    {
      "number": 626,
      "category": "Valentines",
      "question": "Eg elskar deg means \"I love you\" in what language?\n",
      "answers": [
        "norwegian"
      ]
    },
    {
      "number": 627,
      "category": "Valentines",
      "question": "Kimi o ai shiteru means \"I love you\" in what language?\n",
      "answers": [
        "japanese"
      ]
    },
    {
      "number": 628,
      "category": "Valentines",
      "question": "Moi oiy neya means \"I love you\" in what language?\n",
      "answers": [
        "cantonese"
      ]
    },
    {
      "number": 629,
      "category": "Valentines",
      "question": "Szeretlek! means \"I love you\" in what language?\n",
      "answers": [
        "hungarian"
      ]
    },
    {
      "number": 630,
      "category": "Valentines",
      "question": "S'ayapo! means \"I love you\" in what language?\n",
      "answers": [
        "greek"
      ]
    },
    {
      "number": 631,
      "category": "Valentines",
      "question": "Ik hou van je! means \"I love you\" in what language?\n",
      "answers": [
        "dutch"
      ]
    },
    {
      "number": 632,
      "category": "Valentines",
      "question": "t'a gr'a agam dhuit! means \"I love you\" in what language?\n",
      "answers": [
        "irish"
      ]
    },
    {
      "number": 633,
      "category": "Valentines",
      "question": "St. Valentine became the patron saint of  --- what? \n",
      "answers": [
        "lovers"
      ]
    },
    {
      "number": 634,
      "category": "Valentines",
      "question": "What well-named town in Colorado does a large post office business around February 14? \n",
      "answers": [
        "loveland"
      ]
    },
    {
      "number": 635,
      "category": "Valentines",
      "question": "In what country is it only the women who buy gifts for the men for Valentine's Day? \n",
      "answers": [
        "japan"
      ]
    },
    {
      "number": 636,
      "category": "Valentines",
      "question": "What did they use for croquet mallets in Wonderland?\n",
      "answers": [
        "king henry the eighth",
        "henry viii",
        "henry the 8th",
        "in 1537, which british king declared, by royal charter, that february 14 was \"saint valentine's day\"?",
        "literature",
        "flamingoes",
        "flamingos"
      ]
    },
    {
      "number": 637,
      "category": "Science & Nature",
      "question": "What two gases are used in a welding torch?\n",
      "answers": [
        "oxygen and acetylene",
        "oxygen",
        "acetylene"
      ]
    },
    {
      "number": 638,
      "category": "Science & Nature",
      "question": "What is the closest star to the Earth?\n",
      "answers": [
        "the sun",
        "sun"
      ]
    },
    {
      "number": 639,
      "category": "History",
      "question": "What weapon was instrumental in the English victory at the Battle of Crecy?\n",
      "answers": [
        "longbow",
        "long bow"
      ]
    },
    {
      "number": 640,
      "category": "Science & Nature",
      "question": "What poison is derived from the plant, foxglove?\n",
      "answers": [
        "digitalis"
      ]
    },
    {
      "number": 641,
      "category": "Entertainment",
      "question": "What is the appropriate response to the Vulcan salutation, \"Live long and prosper\"?\n",
      "answers": [
        "peace and long life"
      ]
    },
    {
      "number": 642,
      "category": "Science & Nature",
      "question": "What magical object did ancient alchemysts believe could turn lead into gold?\n",
      "answers": [
        "lodestone",
        "lode stone"
      ]
    },
    {
      "number": 643,
      "category": "Science & Nature",
      "question": "Name the process by which oxygen and hydrogen can be created from water.\n",
      "answers": [
        "electrolysis"
      ]
    },
    {
      "number": 644,
      "category": "Art & Literature",
      "question": "In JRR Tolkien's mythos, what island sank beneath the sea?\n",
      "answers": [
        "numenor (akallabeth,atalante)",
        "numenor",
        "akallabeth",
        "atalante"
      ]
    },
    {
      "number": 645,
      "category": "Art & Literature",
      "question": "What was the name of the giant whirlpool that Odysseus faced?\n",
      "answers": [
        "charybdis"
      ]
    },
    {
      "number": 646,
      "category": "History",
      "question": "Name the string of fortifications the French built in 1929 to defend against German invasion.\n",
      "answers": [
        "maginot line",
        "maginot"
      ]
    },
    {
      "number": 647,
      "category": "Science & Nature",
      "question": "What does a sphygmomanometer measure?\n",
      "answers": [
        "blood pressure"
      ]
    },
    {
      "number": 648,
      "category": "Art & Literature",
      "question": "Which Indian goddess was known as \"the Black Mother\"?\n",
      "answers": [
        "kali"
      ]
    },
    {
      "number": 649,
      "category": "Pop Culture",
      "question": "What popular 60's mini-monster character did hot-rodder \"Big Daddy\" Ed Roth create?\n",
      "answers": [
        "rat-fink",
        "ratfink",
        "rat fink"
      ]
    },
    {
      "number": 650,
      "category": "Science & Nature",
      "question": "When measuring acidity and alkalinity, what does \"pH\" stand for?\n",
      "answers": [
        "per hydroxide"
      ]
    },
    {
      "number": 651,
      "category": "Art & Literature",
      "question": "What kind of sword slew Lewis Carrol's Jaberwocky?\n",
      "answers": [
        "vorpal"
      ]
    },
    {
      "number": 652,
      "category": "History",
      "question": "Who was the pilot of the U2 spy-plane shot down and captured by the Soviets on May 1, 1960?\n",
      "answers": [
        "gary francis powers",
        "powers",
        "gary powers",
        "gf powers",
        "gary f powers",
        "gary f. powers"
      ]
    },
    {
      "number": 653,
      "category": "Science & Nature",
      "question": "Which poison smells like almonds?\n",
      "answers": [
        "cyanide"
      ]
    },
    {
      "number": 654,
      "category": "History",
      "question": "What was Buddha's name before his enlightenment?\n",
      "answers": [
        "sidhartha",
        "siddhartha",
        "sidharta",
        "siddharta"
      ]
    },
    {
      "number": 655,
      "category": "Pop Culture",
      "question": "What popular toy consisting of two plastic balls attached to each other by a string were banned in 1972?\n",
      "answers": [
        "klackers",
        "clackers",
        "whackers",
        "klik klaks",
        "ker-knockers",
        "whack'os",
        "bangers",
        "poppers",
        "knockers"
      ]
    },
    {
      "number": 656,
      "category": "Art & Literature",
      "question": "Which Aztec god was known as the \"Plumed Serpent\"?\n",
      "answers": [
        "quetzalcoatl"
      ]
    },
    {
      "number": 657,
      "category": "Art & Literature",
      "question": "In Arthurian legend, which knight threw Excalibur back into the lake?\n",
      "answers": [
        "bedevere"
      ]
    },
    {
      "number": 658,
      "category": "History",
      "question": " Who assassinated the Austrian Archduke, Francis Ferdinand?\n",
      "answers": [
        "gavrilo princip",
        "princip"
      ]
    },
    {
      "number": 659,
      "category": "Science & Nature",
      "question": "What visionary inventor created the AC induction motor and caused an earthquake in New York while experimenting with high voltage?\n",
      "answers": [
        "nikolai tesla",
        "tesla"
      ]
    },
    {
      "number": 660,
      "category": "Art & Literature",
      "question": "What manner of creature was Medusa?\n",
      "answers": [
        "gorgon"
      ]
    },
    {
      "number": 661,
      "category": "Pop Culture",
      "question": "What did the band Jefferson Airplane change their name to?\n",
      "answers": [
        "jefferson starship"
      ]
    },
    {
      "number": 662,
      "category": "Art & Literature",
      "question": "What was Sherlock Holmes' brother's name?\n",
      "answers": [
        "mycroft holmes",
        "mycroft"
      ]
    },
    {
      "number": 663,
      "category": "Entertainment",
      "question": "Name the specific part of the ship that HAL told Dave Bowman and Frank Poole was about to fail.\n",
      "answers": [
        "ae-35 unit",
        "ae35 unit"
      ]
    },
    {
      "number": 664,
      "category": "Good To Know",
      "question": "What dog breed bites people more often than any other?\n",
      "answers": [
        "german shepherd"
      ]
    },
    {
      "number": 665,
      "category": "Art & Literature",
      "question": "Zeus created warriors called Myrmidons out of what creatures?\n",
      "answers": [
        "ants",
        "ant"
      ]
    },
    {
      "number": 666,
      "category": "Art & Literature",
      "question": "What was Odysseus' dog's name?\n",
      "answers": [
        "argo"
      ]
    },
    {
      "number": 667,
      "category": "History",
      "question": "Name the largest airplane ever built?\n",
      "answers": [
        "spruce goose"
      ]
    },
    {
      "number": 668,
      "category": "Science & Nature",
      "question": "What rock floats in water?\n",
      "answers": [
        "pumice"
      ]
    },
    {
      "number": 669,
      "category": "Art & Literature",
      "question": "Name 1 of the 4 Horsemen of the Apocalypse.\n",
      "answers": [
        "war, pestilence, famine and death",
        "war",
        "pestilence",
        "famine",
        "death"
      ]
    },
    {
      "number": 670,
      "category": "Entertainment",
      "question": "Vulcan blood is based on what metal?\n",
      "answers": [
        "copper"
      ]
    },
    {
      "number": 671,
      "category": "Art & Literature",
      "question": "What famous British novel begins with the line: \"It was a cold day in April, and the clocks were striking thirteen\"?\n",
      "answers": [
        "1984"
      ]
    },
    {
      "number": 672,
      "category": "Art & Literature",
      "question": "According to Douglas Adams' Hitchhiker's Guide To The Galaxy, who designed Norway?\n",
      "answers": [
        "slartibartfast"
      ]
    },
    {
      "number": 673,
      "category": "History",
      "question": "What Kenyan secret terrorist organization revolted against British colonists in 1952?\n",
      "answers": [
        "mau mau"
      ]
    },
    {
      "number": 674,
      "category": "Sciece & Nature",
      "question": "What is the most abundant metal in the Earth's crust?\n",
      "answers": [
        "aluminum"
      ]
    },
    {
      "number": 675,
      "category": "Art & Literature",
      "question": "In Norse mythology, what was the Twilight of the Gods called?\n",
      "answers": [
        "ragnarok"
      ]
    },
    {
      "number": 676,
      "category": "Entertainment",
      "question": "Name Quickdraw McGraw's sidekick.\n",
      "answers": [
        "baba looey"
      ]
    },
    {
      "number": 677,
      "category": "History",
      "question": "What was the name of the battle in which Hannibal was defeated?\n",
      "answers": [
        "zama"
      ]
    },
    {
      "number": 678,
      "category": "Art & Literature",
      "question": "James Bond creator Ian Fleming wrote what famous children's story, later made into a movie?\n",
      "answers": [
        "chitty chitty bang bang",
        "chitty",
        "bang bang"
      ]
    },
    {
      "number": 679,
      "category": "History",
      "question": "One of the 7 Wonders of the ancient world was a giant bronze statue, what was it called?\n",
      "answers": [
        "colossus of rhodes",
        "colossus",
        "rhodes"
      ]
    },
    {
      "number": 680,
      "category": "Art & Literature",
      "question": "In Norse mythology, the icy underworld was called?\n",
      "answers": [
        "niflheim",
        "niflhel"
      ]
    },
    {
      "number": 681,
      "category": "Entertainment",
      "question": "What song did the fictitious Dr. Chandra teach his famous computer HAL 9000 to sing?\n",
      "answers": [
        "bicycle built for two",
        "bicycle"
      ]
    },
    {
      "number": 682,
      "category": "Science & Nature",
      "question": "What is the name given to the change in pitch accompanied by an approaching or receeding sound source?\n",
      "answers": [
        "doppler effect",
        "doppler"
      ]
    },
    {
      "number": 683,
      "category": "Art & Literature",
      "question": "Name 1 of Dumas' 3 musketeers.\n",
      "answers": [
        "porthos, athos and aramis",
        "porthos",
        "athos",
        "aramis"
      ]
    },
    {
      "number": 684,
      "category": "Good To Know",
      "question": "What is the only man-made feature visible from space?\n",
      "answers": [
        "great wall of china",
        "great wall"
      ]
    },
    {
      "number": 685,
      "category": "Art & Literature",
      "question": "The classical medical symbol of two serpents wrapped around a staff is called a what?\n",
      "answers": [
        "caduceus"
      ]
    },
    {
      "number": 686,
      "category": "Art & Literature",
      "question": "Which Roman god had two faces?\n",
      "answers": [
        "janus"
      ]
    },
    {
      "number": 687,
      "category": "Entertainment",
      "question": "What was Dr. Who's phone booth called?\n",
      "answers": [
        "tardis"
      ]
    },
    {
      "number": 688,
      "category": "Entertainment",
      "question": "What words is the acronym HAL in the famous computer's name derived from?\n",
      "answers": [
        "heuristically programmed algorithmic computer",
        "heuristically",
        "algorithmic"
      ]
    },
    {
      "number": 689,
      "category": "Art & Literature",
      "question": "Name Captain Nemo's submarine?\n",
      "answers": [
        "nautilus"
      ]
    },
    {
      "number": 690,
      "category": "History",
      "question": "In what ancient city did Alexander the Great die?\n",
      "answers": [
        "babylon"
      ]
    },
    {
      "number": 691,
      "category": "Science & Nature",
      "question": "What is the underside of a horse's hoove called?\n",
      "answers": [
        "frog"
      ]
    },
    {
      "number": 692,
      "category": "Art & Literature",
      "question": "In JRR Tolkien's Lord of the Rings, 3 wizards are mentioned by name: Gandalf, Saruman, and who? \n",
      "answers": [
        "radagast"
      ]
    },
    {
      "number": 693,
      "category": "History",
      "question": "Which god was a favourite of the Roman legions, who sacrificed a bull to him in secret rituals?\n",
      "answers": [
        "mithras"
      ]
    },
    {
      "number": 694,
      "category": "Entertainment",
      "question": "Who dances the waltz in Mr. Kite's show?\n",
      "answers": [
        "henry the horse",
        "henry"
      ]
    },
    {
      "number": 695,
      "category": "History",
      "question": "What sort of trees flanked the West-door of Moria?\n",
      "answers": [
        "crocodile dung",
        "the ancient egyptians used what substance as the earliest know contraceptive?",
        "lord of the rings",
        "holly"
      ]
    },
    {
      "number": 696,
      "category": "Lord Of The Rings",
      "question": "What was the Sindarin name for the black crows of Fangorn and Dunland?\n",
      "answers": [
        "crebain"
      ]
    },
    {
      "number": 697,
      "category": "Lord Of The Rings",
      "question": "What was the false name adopted by Frodo when he set out for Rivendell?\n",
      "answers": [
        "mr. underhill",
        "underhill"
      ]
    },
    {
      "number": 698,
      "category": "Lord Of The Rings",
      "question": "What was Gandalf most famous for in the Shire?\n",
      "answers": [
        "fireworks"
      ]
    },
    {
      "number": 699,
      "category": "Lord Of The Rings",
      "question": "Which of the 3 Elven-rings did Gandalf possess?\n",
      "answers": [
        "narya"
      ]
    },
    {
      "number": 700,
      "category": "Lord Of The Rings",
      "question": "Who, in legend, sailed with a Silmaril on his brow?\n",
      "answers": [
        "earendil"
      ]
    },
    {
      "number": 701,
      "category": "Lord Of The Rings",
      "question": "What underground halls were known as the Thousand Caves?\n",
      "answers": [
        "menegroth"
      ]
    },
    {
      "number": 702,
      "category": "Lord Of The Rings",
      "question": "What name did the Elves give to the wooden tree-platforms in Lothlorien?\n",
      "answers": [
        "talan"
      ]
    },
    {
      "number": 703,
      "category": "Lord Of The Rings",
      "question": "In Middle Earth mythology, what island sank beneath the sea?\n",
      "answers": [
        "numenor",
        "akallabeth",
        "atalante"
      ]
    },
    {
      "number": 704,
      "category": "Lord Of The Rings",
      "question": "What did Boromir advise the Fellowship to take with them to the Redhorn Gate?\n",
      "answers": [
        "firewood",
        "wood"
      ]
    },
    {
      "number": 705,
      "category": "Lord Of The Rings",
      "question": "Who killed Saruman?\n",
      "answers": [
        "grima wormtongue",
        "wormtongue"
      ]
    },
    {
      "number": 706,
      "category": "Lord Of The Rings",
      "question": "According to legend, who cut the One Ring from Sauron's hand?\n",
      "answers": [
        "isildur"
      ]
    },
    {
      "number": 707,
      "category": "Lord Of The Rings",
      "question": "What type of Orcs acted as elite warriors and commanders in the War of the Ring?\n",
      "answers": [
        "uruk-hai",
        "uruk hai"
      ]
    },
    {
      "number": 708,
      "category": "Lord Of The Rings",
      "question": "Which city was the original capital of Gondor?\n",
      "answers": [
        "osgiliath"
      ]
    },
    {
      "number": 709,
      "category": "Lord Of The Rings",
      "question": "Who had to be blindfolded before he was allowed to enter Lothlorien?\n",
      "answers": [
        "gimli"
      ]
    },
    {
      "number": 710,
      "category": "Lord Of The Rings",
      "question": "To what race of creatures did Gollum belong?\n",
      "answers": [
        "hobbits",
        "hobbit"
      ]
    },
    {
      "number": 711,
      "category": "Lord Of The Rings",
      "question": "What was Gollum's birth name?\n",
      "answers": [
        "smeagol"
      ]
    },
    {
      "number": 712,
      "category": "Lord Of The Rings",
      "question": "What was one of Sam's nicknames for Gollum?\n",
      "answers": [
        "slinker or stinker",
        "slinker",
        "stinker"
      ]
    },
    {
      "number": 713,
      "category": "Lord Of The Rings",
      "question": "What tasted like dust and ashes to Gollum?\n",
      "answers": [
        "elven waybread (lembas)",
        "lembas",
        "waybread"
      ]
    },
    {
      "number": 714,
      "category": "Lord Of The Rings",
      "question": "What was Aragorn's sword called?\n",
      "answers": [
        "anduril"
      ]
    },
    {
      "number": 715,
      "category": "Lord Of The Rings",
      "question": "What was the Sindarin name for the herb, kingsfoil?\n",
      "answers": [
        "athelas"
      ]
    },
    {
      "number": 716,
      "category": "Lord Of The Rings",
      "question": "Who gave Aragorn an emerald brooch, for which he was nicknamed, Elfstone?\n",
      "answers": [
        "galadriel"
      ]
    },
    {
      "number": 717,
      "category": "Lord Of The Rings",
      "question": "Where was the \"Last Homely House\"?\n",
      "answers": [
        "rivendell"
      ]
    },
    {
      "number": 718,
      "category": "Lord Of The Rings",
      "question": "What was the Sindarin name for Weather Top?\n",
      "answers": [
        "amon sul"
      ]
    },
    {
      "number": 719,
      "category": "Lord Of The Rings",
      "question": "What did Ghan-buri-Ghan call the Orcs?\n",
      "answers": [
        "gorgun"
      ]
    },
    {
      "number": 720,
      "category": "Lord Of The Rings",
      "question": "What word opened the West-door of Moria?\n",
      "answers": [
        "mellon (friend)",
        "mellon",
        "friend"
      ]
    },
    {
      "number": 721,
      "category": "Lord Of The Rings",
      "question": "What did Denethor hold in his hands as he died on the funeral pyre?\n",
      "answers": [
        "palantir the seeing stone",
        "palantir",
        "seeing stone",
        "seeing-stone"
      ]
    },
    {
      "number": 722,
      "category": "Lord Of The Rings",
      "question": "What crop was Farmer Maggot famous for?\n",
      "answers": [
        "mushrooms"
      ]
    },
    {
      "number": 723,
      "category": "Lord Of The Rings",
      "question": "What was the Elvish name for Saruman, meaning \"Man of Skill\"?\n",
      "answers": [
        "curunir"
      ]
    },
    {
      "number": 724,
      "category": "Lord Of The Rings",
      "question": "What color was Orc skin?\n",
      "answers": [
        "black",
        "sallow"
      ]
    },
    {
      "number": 725,
      "category": "Lord Of The Rings",
      "question": "In which tower was the Master-stone of the palantiri kept?\n",
      "answers": [
        "cirith ungol"
      ]
    },
    {
      "number": 726,
      "category": "Lord Of The Rings",
      "question": " What did Pippin drop as a sign to any rescuers while he was a prisoner of the Orc band?\n",
      "answers": [
        "brooch"
      ]
    },
    {
      "number": 727,
      "category": "Lord Of The Rings",
      "question": "What region did Elessar give to the Shire?\n",
      "answers": [
        "westmarch"
      ]
    },
    {
      "number": 728,
      "category": "Lord Of The Rings",
      "question": "What was the name of Pippin's only child?\n",
      "answers": [
        "faramir"
      ]
    },
    {
      "number": 729,
      "category": "Lord Of The Rings",
      "question": "What was Durin's Bane?\n",
      "answers": [
        "balrog"
      ]
    },
    {
      "number": 730,
      "category": "Lord Of The Rings",
      "question": "Who attempted to recolonize Moria?\n",
      "answers": [
        "balin"
      ]
    },
    {
      "number": 731,
      "category": "Lord Of The Rings",
      "question": "What precious metal did the Dwarves most covet?\n",
      "answers": [
        "mithril"
      ]
    },
    {
      "number": 732,
      "category": "Lord Of The Rings",
      "question": "What was the Dwarven name for Moria?\n",
      "answers": [
        "khazad-dum"
      ]
    },
    {
      "number": 733,
      "category": "Lord Of The Rings",
      "question": "What were the RingWraiths called in the Black Speech?\n",
      "answers": [
        "numenor"
      ]
    },
    {
      "number": 734,
      "category": "Lord Of The Rings",
      "question": "Who slew the Lord of the Nazgul?\n",
      "answers": [
        "eowyn"
      ]
    },
    {
      "number": 735,
      "category": "Lord Of The Rings",
      "question": "What was the Lord of the Nazgul called in ancient times?\n",
      "answers": [
        "witch-king of angmar",
        "angmar"
      ]
    },
    {
      "number": 736,
      "category": "Lord Of The Rings",
      "question": "What was Rivendell called in Sindarin?\n",
      "answers": [
        "imladris"
      ]
    },
    {
      "number": 737,
      "category": "Lord Of The Rings",
      "question": "Which of the Three Elven rings did Elrond possess?\n",
      "answers": [
        "vilya"
      ]
    },
    {
      "number": 738,
      "category": "Lord Of The Rings",
      "question": "Deagol found the One Ring in which river?\n",
      "answers": [
        "anduin"
      ]
    },
    {
      "number": 739,
      "category": "Lord Of The Rings",
      "question": "What was the Elven name of Gandalf's sword?\n",
      "answers": [
        "glamdring"
      ]
    },
    {
      "number": 740,
      "category": "Lord Of The Rings",
      "question": "What does the name \"Glamdring\" mean?\n",
      "answers": [
        "foe-hammer",
        "foe hammer"
      ]
    },
    {
      "number": 741,
      "category": "Lord Of The Rings",
      "question": "Who was Legolas' father?\n",
      "answers": [
        "thranduil"
      ]
    },
    {
      "number": 742,
      "category": "Lord Of The Rings",
      "question": "What does the name \"Legolas\" mean?\n",
      "answers": [
        "leaves"
      ]
    },
    {
      "number": 743,
      "category": "Lord Of The Rings",
      "question": "What land did Legolas help restore to its former beauty after the War of the Ring?\n",
      "answers": [
        "ithilien"
      ]
    },
    {
      "number": 744,
      "category": "Lord Of The Rings",
      "question": "What was the common name for the Istari?\n",
      "answers": [
        "wizards"
      ]
    },
    {
      "number": 745,
      "category": "Lord Of The Rings",
      "question": "Saruman, Gandalf, Galadriel, Elrond, and Cirdan were the members of what organization formed to develop a strategy to deal with Sauron?\n",
      "answers": [
        "white council"
      ]
    },
    {
      "number": 746,
      "category": "Lord Of The Rings",
      "question": "Who replaced the Lord of the Nazgul as commander of Sauron's forces in the Battle of the Pelennor Fields?\n",
      "answers": [
        "gothmog"
      ]
    },
    {
      "number": 747,
      "category": "Lord Of The Rings",
      "question": "Which famous Dwarf did the Watcher in the Water kill?\n",
      "answers": [
        "oin"
      ]
    },
    {
      "number": 748,
      "category": "Lord Of The Rings",
      "question": "What was Barad-dur called in Orkish?\n",
      "answers": [
        "lugburz"
      ]
    },
    {
      "number": 749,
      "category": "Lord Of The Rings",
      "question": "What was Gollum's last word?\n",
      "answers": [
        "precious"
      ]
    },
    {
      "number": 750,
      "category": "Lord Of The Rings",
      "question": "What was the name of Sauron's stronghold in Mirkwood?\n",
      "answers": [
        "dol guldur"
      ]
    },
    {
      "number": 751,
      "category": "Lord Of The Rings",
      "question": "What was Sauron called during his reign in Dol Guldur?\n",
      "answers": [
        "necromancer"
      ]
    },
    {
      "number": 752,
      "category": "Lord Of The Rings",
      "question": "Who was Gimli's father?\n",
      "answers": [
        "gloin"
      ]
    },
    {
      "number": 753,
      "category": "Lord Of The Rings",
      "question": "Who was Prince of Dol Amroth during the War of the Rings?\n",
      "answers": [
        "imrahil"
      ]
    },
    {
      "number": 754,
      "category": "Lord Of The Rings",
      "question": "What was the name of the wild tree-creatures that the Ents controlled and brought to Helm's Deep?\n",
      "answers": [
        "huorns"
      ]
    },
    {
      "number": 755,
      "category": "Lord Of The Rings",
      "question": "According to legend, who sailed his ship in the sky, with a Silmaril as a sign of hope to those oppressed by evil?\n",
      "answers": [
        "earendil"
      ]
    },
    {
      "number": 756,
      "category": "Lord Of The Rings",
      "question": "What were the evil wolves of Rhovanion (Mirkwood) called?\n",
      "answers": [
        "wargs"
      ]
    },
    {
      "number": 757,
      "category": "Lord Of The Rings",
      "question": "What alias did Eowyn use when she disguised herself as a Rider of Rohan?\n",
      "answers": [
        "dernhelm"
      ]
    },
    {
      "number": 758,
      "category": "Lord Of The Rings",
      "question": "What were the elves of Lorien known as?\n",
      "answers": [
        "galadrim"
      ]
    },
    {
      "number": 759,
      "category": "Lord Of The Rings",
      "question": "The Rangers of Ithilien called certain large battle creatures, mumakil.  What did the Hobbits call them?\n",
      "answers": [
        "oliphaunts"
      ]
    },
    {
      "number": 760,
      "category": "Lord Of The Rings",
      "question": "Where was the only place you could shoot a mumak to kill it?\n",
      "answers": [
        "eye",
        "the eye"
      ]
    },
    {
      "number": 761,
      "category": "Lord Of The Rings",
      "question": "Name Tom Bombadil's wife.\n",
      "answers": [
        "goldberry"
      ]
    },
    {
      "number": 762,
      "category": "Lord Of The Rings",
      "question": "Who were the \"Three Hunters\" (in alphabetical order)?\n",
      "answers": [
        "aragorn, gimli, legolas",
        "aragorn,gimli,legolas",
        "aragorn, gimli, legolas"
      ]
    },
    {
      "number": 763,
      "category": "Lord Of The Rings",
      "question": "The heir of Isildur was the only living man who could safely pass where?\n",
      "answers": [
        "paths of the dead"
      ]
    },
    {
      "number": 764,
      "category": "Lord Of The Rings",
      "question": "Who was the greatest ship-builder of Middle Earth?\n",
      "answers": [
        "cirdan"
      ]
    },
    {
      "number": 765,
      "category": "Lord Of The Rings",
      "question": "Who or what attacked Frodo, Merry and Pippin in the Old Forest?\n",
      "answers": [
        "old man willow"
      ]
    },
    {
      "number": 766,
      "category": "Lord Of The Rings",
      "question": "Who was Bill Ferny working for?\n",
      "answers": [
        "saruman"
      ]
    },
    {
      "number": 767,
      "category": "Lord Of The Rings",
      "question": "Who was the Lord of the Eagles?\n",
      "answers": [
        "gwaihir"
      ]
    },
    {
      "number": 768,
      "category": "Lord Of The Rings",
      "question": "Whom did the elves worship and sing about?\n",
      "answers": [
        "elbereth"
      ]
    },
    {
      "number": 769,
      "category": "Lord Of The Rings",
      "question": "What was the capital of Rohan?\n",
      "answers": [
        "edoras"
      ]
    },
    {
      "number": 770,
      "category": "Lord Of The Rings",
      "question": "What symbolic item was sent from Gondor to Rohan when the former needed help?\n",
      "answers": [
        "red arrow",
        "arrow"
      ]
    },
    {
      "number": 771,
      "category": "Lord Of The Rings",
      "question": "What priceless gift did King Elessar give to Sam Gamgee after the War of the Ring?\n",
      "answers": [
        "the star of elendil",
        "diamond",
        "star of elendil"
      ]
    },
    {
      "number": 772,
      "category": "Lord Of The Rings",
      "question": "What large, treeless plain between the Dead Marshes and Cirith Gorgor was the site of the ancient battle between Sauron and the Last Alliance?\n",
      "answers": [
        "dagorlad, the battle plain",
        "dagorlad",
        "battle plain"
      ]
    },
    {
      "number": 773,
      "category": "Lord Of The Rings",
      "question": "What was the land of the Corsairs?\n",
      "answers": [
        "umbar"
      ]
    },
    {
      "number": 774,
      "category": "Lord Of The Rings",
      "question": "Which Ranger was Aragorn's friend and standard-bearer?\n",
      "answers": [
        "halbarad"
      ]
    },
    {
      "number": 775,
      "category": "Lord Of The Rings",
      "question": "The Barrow-wights were evil spirits originally from where?\n",
      "answers": [
        "angmar"
      ]
    },
    {
      "number": 776,
      "category": "Lord Of The Rings",
      "question": "Who loaned his swift white horse, Asfaloth, to Frodo at the Ford of Bruinen?\n",
      "answers": [
        "glorfindel"
      ]
    },
    {
      "number": 777,
      "category": "Lord Of The Rings",
      "question": "What forest did the Ents inhabit?\n",
      "answers": [
        "fangorn"
      ]
    },
    {
      "number": 778,
      "category": "Lord Of The Rings",
      "question": "What unbreakable, black stone tower's name means \"the cunning mind\"?\n",
      "answers": [
        "orthanc"
      ]
    },
    {
      "number": 779,
      "category": "Lord Of The Rings",
      "question": "What parting gift did Galadriel give Frodo when he left Lorien?\n",
      "answers": [
        "phial of galadriel",
        "phial"
      ]
    },
    {
      "number": 780,
      "category": "Lord Of The Rings",
      "question": "What was used to wound Frodo on Weathertop?\n",
      "answers": [
        "morgul-knife",
        "knife",
        "dagger"
      ]
    },
    {
      "number": 781,
      "category": "Lord Of The Rings",
      "question": "What fortress at Helm's Deep was said to be unconquerable if defended?\n",
      "answers": [
        "hornburg"
      ]
    },
    {
      "number": 782,
      "category": "Lord Of The Rings",
      "question": "What did Sam call his pony from Bree?\n",
      "answers": [
        "bill"
      ]
    },
    {
      "number": 783,
      "category": "Geography",
      "question": "What structure's crowning spire stands out in the Courusant skyline?\n",
      "answers": [
        "the jedi temple's",
        "jedi temple"
      ]
    },
    {
      "number": 784,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 785,
      "category": "History",
      "question": "What Episode I star turned \"sweet sixteen\" on June 9, 1997?\n",
      "answers": [
        "natalie portman",
        "natalie",
        "portman"
      ]
    },
    {
      "number": 786,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 787,
      "category": "History",
      "question": "What Pulp Fiction star landed a significant role in Episode I?\n",
      "answers": [
        "samuel l. jackson",
        "jackson"
      ]
    },
    {
      "number": 788,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 789,
      "category": "History",
      "question": "What Episode I role was finally cast after casting director Robin Gurland looked at 3,000 actors?\n",
      "answers": [
        "anakin skywalker",
        "anakin"
      ]
    },
    {
      "number": 790,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 791,
      "category": "History",
      "question": "Who starred in the movies Trainspotting and Shallow Grave before landing an Episode I role?\n",
      "answers": [
        "ewan mcgregor",
        "ewin macgregor",
        "mcgregor",
        "macgregor"
      ]
    },
    {
      "number": 792,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 793,
      "category": "DroidsCreatures&Aliens",
      "question": "What role does Kenny Baker play for the fourth time, in Episode I?\n",
      "answers": [
        "r2-d2",
        "r2d2"
      ]
    },
    {
      "number": 794,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 795,
      "category": "Characters",
      "question": "What two actors did Nick Gillard train to be Jedi's for Episode I?\n",
      "answers": [
        "liam neeson and ewan mcgregor",
        "neeson and mcgregor",
        "neeson and macgregor"
      ]
    },
    {
      "number": 796,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 797,
      "category": "History",
      "question": "Who served as producer of Episode I?\n",
      "answers": [
        "rick mccallum",
        "mccallum",
        "maccallum"
      ]
    },
    {
      "number": 798,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 799,
      "category": "History",
      "question": "Who landed a role in Episode I after he announced on a talk show that he was a huge Star Wars fan?\n",
      "answers": [
        "samuel l. jackson",
        "jackson"
      ]
    },
    {
      "number": 800,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 801,
      "category": "Characters",
      "question": "What British actor portrays the Chancellor of the Galactic Senate in Episode I?\n",
      "answers": [
        "terence stamp",
        "terrence stamp",
        "stamp",
        "tarrance stamp"
      ]
    },
    {
      "number": 802,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 803,
      "category": "DroidsCreatures&Aliens",
      "question": "What type of droids monitor ship systems from the socket at the rear of some vehicles, in Episode I?\n",
      "answers": [
        "r2 units, or astromech droids",
        "r2 units",
        "astromech droids",
        "astromech",
        "r2s"
      ]
    },
    {
      "number": 804,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 805,
      "category": "Wild Card",
      "question": "What Episode I star was discovered in a pizza parlor in 1992?\n",
      "answers": [
        "natalie portman",
        "portman"
      ]
    },
    {
      "number": 806,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 807,
      "category": "Characters",
      "question": "What first name did Anakin's mother have?\n",
      "answers": [
        "shmi",
        "shimmi",
        "shimmy"
      ]
    },
    {
      "number": 808,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 809,
      "category": "History",
      "question": "What was Trisha Biggar in charge of designing for Episode I?\n",
      "answers": [
        "costumes"
      ]
    },
    {
      "number": 810,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 811,
      "category": "Geography",
      "question": "What Italian city were many Episode I scenes filmed in?\n",
      "answers": [
        "naples",
        "napoli"
      ]
    },
    {
      "number": 812,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 813,
      "category": "Geography",
      "question": "What planet serves as the capital of the Galactic Republic in Episode I?\n",
      "answers": [
        "coruscant"
      ]
    },
    {
      "number": 814,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 815,
      "category": "History",
      "question": "Who starred opposite Arnold Schwarzenegger in Jingle All the Way before landing an Episode I role?\n",
      "answers": [
        "jake lloyd",
        "lloyd",
        "loyd"
      ]
    },
    {
      "number": 816,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 817,
      "category": "Wild Card",
      "question": "What Star Wars role did Ewan McGregor say it would be interesting to play after sticking \"some big pastries\" on his head?\n",
      "answers": [
        "princess leia",
        "leia"
      ]
    },
    {
      "number": 818,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 819,
      "category": "Geography",
      "question": "What North African country were Episode I's Tatooine village scenes filmed in?\n",
      "answers": [
        "tunisia"
      ]
    },
    {
      "number": 820,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 821,
      "category": "History",
      "question": "How many Star Wars prequels does George Lucas plan to film?\n",
      "answers": [
        "three",
        "3"
      ]
    },
    {
      "number": 822,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 823,
      "category": "Characters",
      "question": "Who portrays Anakin Skywalker's mother in Episode I?\n",
      "answers": [
        "pernilla august",
        "pernilla",
        "august"
      ]
    },
    {
      "number": 824,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 825,
      "category": "Characters",
      "question": "What political office does Palpatine hold, at the beginning of Episode I?\n",
      "answers": [
        "senator"
      ]
    },
    {
      "number": 826,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 827,
      "category": "Geography",
      "question": "What Episode I city did filmgoers get a glimpse of at the end of Return of the Jedi Special Edition?\n",
      "answers": [
        "coruscant"
      ]
    },
    {
      "number": 828,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 829,
      "category": "Wild Card",
      "question": "What Episode I actor did George Lucas describe as \"the center of the movie\"?\n",
      "answers": [
        "liam neeson",
        "neeson",
        "nesson",
        "neison"
      ]
    },
    {
      "number": 830,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 831,
      "category": "Characters",
      "question": "What Episode I star has been called \"the biggest thing out of Scotland since argyle socks\"?\n",
      "answers": [
        "ewan mcgregor",
        "ewan macgregor",
        "mcgregor",
        "macgregor"
      ]
    },
    {
      "number": 832,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 833,
      "category": "Wild Card",
      "question": "What Episode I star majored in physics, computer science and drama at Queens College in Belfast?\n",
      "answers": [
        "liam neeson",
        "neeson",
        "neison",
        "nesson"
      ]
    },
    {
      "number": 834,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 835,
      "category": "Characters",
      "question": "What holy city was Natalie Portman born in?\n",
      "answers": [
        "jerusalem"
      ]
    },
    {
      "number": 836,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 837,
      "category": "DroidsCreatures&Aliens",
      "question": "What are power droids also known as in Episode I, due to the strange sound they make?\n",
      "answers": [
        "gonk droids",
        "gonk"
      ]
    },
    {
      "number": 838,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 839,
      "category": "DroidsCreatures&Aliens",
      "question": "Who had the daunting task of overseeing creature effects for Episode I?\n",
      "answers": [
        "nick dudman",
        "dudman",
        "dudeman"
      ]
    },
    {
      "number": 840,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 841,
      "category": "Characters",
      "question": "What role does Frank Oz reprise in Episode I?\n",
      "answers": [
        "yoda"
      ]
    },
    {
      "number": 842,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 843,
      "category": "Geography",
      "question": "What structure is topped by a ring of spikes?\n",
      "answers": [
        "the jedi temple's",
        "jedi temple"
      ]
    },
    {
      "number": 844,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 845,
      "category": "Characters",
      "question": "Who portrays the younger version of a character originally played by Sir Alex Guinness?\n",
      "answers": [
        "ewan mcgregor",
        "macgregor",
        "ewin mcgregor",
        "ewin macgregor",
        "mcgregor"
      ]
    },
    {
      "number": 846,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 847,
      "category": "Characters",
      "question": "What twins are slated to be born in the prequel trilogy?\n",
      "answers": [
        "luke and leia",
        "luke & leia",
        "leia and luke",
        "leia & luke"
      ]
    },
    {
      "number": 848,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 849,
      "category": "History",
      "question": "What famed Kurosawa film did Liam Neeson draw inspiration from while preparing to play a Jedi warrior in Episode I?\n",
      "answers": [
        "the seven samurai",
        "seven samurai",
        "7 samurai",
        "7 samari",
        "the seven samari"
      ]
    },
    {
      "number": 850,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 851,
      "category": "DroidsCreatures&Aliens",
      "question": "What Return of the Jedi gangster also gets to rear his ugly head in Episode I?\n",
      "answers": [
        "jabba the hutt",
        "jabba",
        "jabba the hut"
      ]
    },
    {
      "number": 852,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 853,
      "category": "Wild Card",
      "question": "What Episode I star was six years old when the original Star Wars film was first released?\n",
      "answers": [
        "ewan mcgregor",
        "mcgregor",
        "macgregor",
        "ewin mcgregor",
        "ewin macgregor"
      ]
    },
    {
      "number": 854,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 855,
      "category": "Geography",
      "question": "What Episode I planet consists entirely of one large city?\n",
      "answers": [
        "coruscant"
      ]
    },
    {
      "number": 856,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 857,
      "category": "Characters",
      "question": "Who portrays Anakin Skywalker in Episode I?\n",
      "answers": [
        "jake lloyd",
        "lloyd",
        "loyd"
      ]
    },
    {
      "number": 858,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 859,
      "category": "Characters",
      "question": "What actor portrays Obi-Wan Kenobi's mentor in Episode I?\n",
      "answers": [
        "liam neeson",
        "neeson",
        "liam neison",
        "nesson",
        "neison"
      ]
    },
    {
      "number": 860,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 861,
      "category": "History",
      "question": "What Episode in the Star Wars saga will feature the marriage of Anakin Skywalker?\n",
      "answers": [
        "episode ii",
        "episode 2",
        "2",
        "two"
      ]
    },
    {
      "number": 862,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 863,
      "category": "History",
      "question": "What Episode I star did George Lucas describe as \"the perfect young Harrison Ford\"?\n",
      "answers": [
        "ewan mcgregor",
        "ewan macgregor",
        "ewin mcgregor",
        "ewin macgregor",
        "mcgregor"
      ]
    },
    {
      "number": 864,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 865,
      "category": "Wild Card",
      "question": "What Episode I city was first mentioned in a Timothy Zahn novel?\n",
      "answers": [
        "coruscant"
      ]
    },
    {
      "number": 866,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 867,
      "category": "Geography",
      "question": "What Episode I city boasts the most two-mile-high skyscrapers?\n",
      "answers": [
        "coruscant"
      ]
    },
    {
      "number": 868,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 869,
      "category": "History",
      "question": "What did David Tattersall serve as director of for Episode I?\n",
      "answers": [
        "photography"
      ]
    },
    {
      "number": 870,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 871,
      "category": "History",
      "question": "What Episode I star is the real -life nephew of Dennis \"Wedge Antilles\" Lawson?\n",
      "answers": [
        "ewan mcgregor",
        "ewan macgregor",
        "ewin mcgregor",
        "ewin macgregor",
        "mcgregor"
      ]
    },
    {
      "number": 872,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 873,
      "category": "DroidsCreatures&Aliens",
      "question": "What droid is ILM (Industrial Light & Magic) model maker Don Bies the foremost expert on the operation of?\n",
      "answers": [
        "r2-d2",
        "r2d2"
      ]
    },
    {
      "number": 874,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 875,
      "category": "Characters",
      "question": "Who was able to schedule her Episode I shooting schedule around rehearsals for a Broadway production of The Diary of Anne Frank?\n",
      "answers": [
        "natalie portman",
        "portman"
      ]
    },
    {
      "number": 876,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 877,
      "category": "Characters",
      "question": "What Swedish actress plays a key role in Episode I?\n",
      "answers": [
        "pernilla august",
        "august",
        "pernilla"
      ]
    },
    {
      "number": 878,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 879,
      "category": "Characters",
      "question": "What astromech droid plays a major role in Episode I?\n",
      "answers": [
        "r2-d2",
        "r2d2"
      ]
    },
    {
      "number": 880,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 881,
      "category": "History",
      "question": "Who penned the screenplay for Episode I?\n",
      "answers": [
        "george lucas",
        "lucas"
      ]
    },
    {
      "number": 882,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 883,
      "category": "Characters",
      "question": "Who played Zod in two Superman movies before being tapped to play an Episode I role?\n",
      "answers": [
        "terence stamp",
        "terrence stamp",
        "tarrence stamp",
        "stamp"
      ]
    },
    {
      "number": 884,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 885,
      "category": "Geography",
      "question": "What desert's sandstorm devastated a set during Episode I filming?\n",
      "answers": [
        "the sahara's",
        "sahara's"
      ]
    },
    {
      "number": 886,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 887,
      "category": "-DroidsCreatures&Aliens",
      "question": "What Episode I star did Liam Neeson describe as \"very, very gifted performer and a incredibly funny guy\"?\n",
      "answers": [
        "ahmed best",
        "best"
      ]
    },
    {
      "number": 888,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 889,
      "category": "Wild Card",
      "question": "What Episode I star first appeared on the silver screen as the friend of the hitman?\n",
      "answers": [
        "natalie portman",
        "natalie",
        "portman"
      ]
    },
    {
      "number": 890,
      "category": "Disney Names",
      "question": "In 'Beauty and the Beast', what is Beauty's name?\n",
      "answers": [
        "belle"
      ]
    },
    {
      "number": 891,
      "category": "Disney Names",
      "question": "In 'Toy Story', what is the name of the spaceman?\n",
      "answers": [
        "buzz lightyear"
      ]
    },
    {
      "number": 892,
      "category": "Disney Names",
      "question": "What is the name of Mickey Mouse's dog?\n",
      "answers": [
        "pluto"
      ]
    },
    {
      "number": 893,
      "category": "Disney Names",
      "question": "Who is the good sorcerer in 'The Sword and the Stone'?\n",
      "answers": [
        "merlin"
      ]
    },
    {
      "number": 894,
      "category": "Disney Names",
      "question": "What is the name of the princess in 'Aladdin'?\n",
      "answers": [
        "jasmine"
      ]
    },
    {
      "number": 895,
      "category": "Disney Names",
      "question": "Who was the bad guy in 'Three Little Pigs'?\n",
      "answers": [
        "big bad wolf"
      ]
    },
    {
      "number": 896,
      "category": "Disney Names",
      "question": "Who is the tiny fairy in 'Peter Pan'?\n",
      "answers": [
        "tinkerbell",
        "tinker bell"
      ]
    },
    {
      "number": 897,
      "category": "Disney Names",
      "question": "Who is the leader of the grasshopper gang in 'A Bug's Life'?\n",
      "answers": [
        "hopper"
      ]
    },
    {
      "number": 898,
      "category": "Disney Names",
      "question": "What is the name of the 'Hunchback of Notre Dame'?\n",
      "answers": [
        "quasimodo"
      ]
    },
    {
      "number": 899,
      "category": "Disney Names",
      "question": "Who is the bad queen of the sea in 'The Little Mermaid'?\n",
      "answers": [
        "ursula"
      ]
    },
    {
      "number": 900,
      "category": "Disney Names",
      "question": "What is the name of the wart hog in 'The Lion King'?\n",
      "answers": [
        "pumbaa"
      ]
    },
    {
      "number": 901,
      "category": "Disney Names",
      "question": "What is the name of the cowboy in 'Toy Story'?\n",
      "answers": [
        "woody"
      ]
    },
    {
      "number": 902,
      "category": "Disney Names",
      "question": "What is the name of the baby lion who will become 'The Lion King'?\n",
      "answers": [
        "simba"
      ]
    },
    {
      "number": 903,
      "category": "Disney Names",
      "question": "What is the name of the meerkat in 'The Lion King'?\n",
      "answers": [
        "timon"
      ]
    },
    {
      "number": 904,
      "category": "Disney Names",
      "question": "What is the name of Winnie the Pooh's porky friend?\n",
      "answers": [
        "piglet"
      ]
    },
    {
      "number": 905,
      "category": "Disney Names",
      "question": "What is the name of the prince in 'Cinderella'?\n",
      "answers": [
        "prince charming",
        "charming"
      ]
    },
    {
      "number": 906,
      "category": "Disney Names",
      "question": "crab in 'The Little Mermaid'?\n",
      "answers": [
        "sebastian",
        "who is the lobster"
      ]
    },
    {
      "number": 907,
      "category": "Disney Names",
      "question": "What is the name of the mermaid in 'The Little Mermaid'?\n",
      "answers": [
        "ariel"
      ]
    },
    {
      "number": 908,
      "category": "Disney Names",
      "question": "Who is the teapot in 'Beauty and the Beast'?\n",
      "answers": [
        "mrs. potts",
        "potts"
      ]
    },
    {
      "number": 909,
      "category": "Disney Names",
      "question": "What is the name of Roger Rabbit's wife?\n",
      "answers": [
        "jessica rabbit",
        "jessica"
      ]
    },
    {
      "number": 910,
      "category": "Disney Names",
      "question": "Who is 'The Little Mermaid's father?\n",
      "answers": [
        "king triton",
        "triton"
      ]
    },
    {
      "number": 911,
      "category": "Disney Names",
      "question": "Who is Mickey Mouse's girlfriend?\n",
      "answers": [
        "minnie mouse",
        "minnie"
      ]
    },
    {
      "number": 912,
      "category": "Disney Names",
      "question": "Who is Donald Duck's girlfriend?\n",
      "answers": [
        "daisy duck",
        "daisy"
      ]
    },
    {
      "number": 913,
      "category": "Disney Names",
      "question": "What is the name of Goofy's son?\n",
      "answers": [
        "max"
      ]
    },
    {
      "number": 914,
      "category": "Disney Names",
      "question": "Who is the pirate captain in 'Peter Pan'?\n",
      "answers": [
        "captain hook"
      ]
    },
    {
      "number": 915,
      "category": "Disney Names",
      "question": "What is the name of 'The Little Mermaid's fish friend?\n",
      "answers": [
        "flounder"
      ]
    },
    {
      "number": 916,
      "category": "Disney Names",
      "question": "What friend of Winnie the Pooh bounces?\n",
      "answers": [
        "tigger"
      ]
    },
    {
      "number": 917,
      "category": "Disney Names",
      "question": "Who are the helpful matrons in 'Sleeping Beauty'?\n",
      "answers": [
        "fairy godmothers",
        "godmother"
      ]
    },
    {
      "number": 918,
      "category": "Disney Names",
      "question": "Who is the big blue star in 'Aladdin'?\n",
      "answers": [
        "the genie",
        "genie"
      ]
    },
    {
      "number": 919,
      "category": "Disney Names",
      "question": "What is the name of the main character in 'A Bug's Life'?\n",
      "answers": [
        "flik"
      ]
    },
    {
      "number": 920,
      "category": "Disney Names",
      "question": "Who is Winnie the Pooh's donkey friend?\n",
      "answers": [
        "eeyore"
      ]
    },
    {
      "number": 921,
      "category": "Disney Names",
      "question": "What is the name of the prince in 'Sleeping Beauty'?\n",
      "answers": [
        "prince phillip",
        "phillip",
        "philip"
      ]
    },
    {
      "number": 922,
      "category": "Disney Names",
      "question": "What is the name of the goat in 'The Hunchback of Notre Dame'?\n",
      "answers": [
        "djali"
      ]
    },
    {
      "number": 923,
      "category": "Disney Names",
      "question": "What is the name of the baby princess in 'A Bug's Life'?\n",
      "answers": [
        "princess dot",
        "dot"
      ]
    },
    {
      "number": 924,
      "category": "Disney Names",
      "question": "Name the cat in 'Pinocchio'\n",
      "answers": [
        "figaro"
      ]
    },
    {
      "number": 925,
      "category": "Disney Names",
      "question": "Who is the cowboy's girlfriend in 'Toy Story'?\n",
      "answers": [
        "bo peep"
      ]
    },
    {
      "number": 926,
      "category": "Disney Names",
      "question": "What is the name of the car in 'Who Framed Roger Rabbit'?\n",
      "answers": [
        "benny the cab",
        "benny",
        "bennie"
      ]
    },
    {
      "number": 927,
      "category": "Disney Names",
      "question": "Who is the good guy in 'The Rescuers'?\n",
      "answers": [
        "bernard"
      ]
    },
    {
      "number": 928,
      "category": "Disney Names",
      "question": "What is the name of the evil queen in 'Sleeping Beauty'?\n",
      "answers": [
        "maleficent"
      ]
    },
    {
      "number": 929,
      "category": "Disney Names",
      "question": "Who is the main deck hand on the pirate ship in 'Peter Pan'?\n",
      "answers": [
        "mr. smee",
        "mr smee",
        "smee"
      ]
    },
    {
      "number": 930,
      "category": "Disney Names",
      "question": "Name the racoon in 'Pocahontas'\n",
      "answers": [
        "meeko"
      ]
    },
    {
      "number": 931,
      "category": "Disney Names",
      "question": "Huey, Dewey and ?\n",
      "answers": [
        "louie"
      ]
    },
    {
      "number": 932,
      "category": "Disney Names",
      "question": "Who is the dog in 'Peter Pan'?\n",
      "answers": [
        "nana"
      ]
    },
    {
      "number": 933,
      "category": "Disney Names",
      "question": "Which dwarf had allergies?\n",
      "answers": [
        "sneezy"
      ]
    },
    {
      "number": 934,
      "category": "Disney Names",
      "question": "Which dwarf took too much NyQuil?\n",
      "answers": [
        "sleepy"
      ]
    },
    {
      "number": 935,
      "category": "Disney Names",
      "question": "Which dwarf never talked?\n",
      "answers": [
        "dopey"
      ]
    },
    {
      "number": 936,
      "category": "Disney Names",
      "question": "Which dwarf blushes a lot?\n",
      "answers": [
        "bashful"
      ]
    },
    {
      "number": 937,
      "category": "Disney Names",
      "question": "Which dwarf is in a bad mood?\n",
      "answers": [
        "grumpy"
      ]
    },
    {
      "number": 938,
      "category": "Disney Names",
      "question": "Which dwarf wears glasses?\n",
      "answers": [
        "doc"
      ]
    },
    {
      "number": 939,
      "category": "Disney Names",
      "question": "Which dwarf laughs a lot?\n",
      "answers": [
        "happy"
      ]
    },
    {
      "number": 940,
      "category": "Disney Names",
      "question": "Who is the protagonist in 'Song of the South'?\n",
      "answers": [
        "brer rabbit"
      ]
    },
    {
      "number": 941,
      "category": "Disney Names",
      "question": "Who is Robin Hood's girlfriend?\n",
      "answers": [
        "maid marian",
        "marian"
      ]
    },
    {
      "number": 942,
      "category": "Disney Names",
      "question": "Who runs the traveling circus in 'Pinocchio'?\n",
      "answers": [
        "stromboli"
      ]
    },
    {
      "number": 943,
      "category": "Disney Names",
      "question": "Name the rabbit in 'Bambi'\n",
      "answers": [
        "thumper"
      ]
    },
    {
      "number": 944,
      "category": "Disney Names",
      "question": "Name the skunk in 'Bambi'\n",
      "answers": [
        "flower"
      ]
    },
    {
      "number": 945,
      "category": "Disney Names",
      "question": "Who is the king of the apes in 'The Jungle Book'?\n",
      "answers": [
        "king louie",
        "louie"
      ]
    },
    {
      "number": 946,
      "category": "Disney Names",
      "question": "Who is the king of the apes, according to Edgar Rice Burroughs?\n",
      "answers": [
        "tarzan"
      ]
    },
    {
      "number": 947,
      "category": "Disney Names",
      "question": "Name the goldfish in 'Pinocchio'\n",
      "answers": [
        "cleo"
      ]
    },
    {
      "number": 948,
      "category": "Disney Names",
      "question": "Who is the hunter in 'Tarzan'?\n",
      "answers": [
        "clayton"
      ]
    },
    {
      "number": 949,
      "category": "Disney Names",
      "question": "In 'Alice in Wonderland', who exclaims \"Off with her head\"?\n",
      "answers": [
        "queen of hearts"
      ]
    },
    {
      "number": 950,
      "category": "Disney Names",
      "question": "Who crossed the USA planting fruit trees?\n",
      "answers": [
        "johnny appleseed"
      ]
    },
    {
      "number": 951,
      "category": "Disney Names",
      "question": "Who is the exotic dancer in 'A Bug's Life'?\n",
      "answers": [
        "gypsy"
      ]
    },
    {
      "number": 952,
      "category": "Disney Names",
      "question": "Who carved 'Pinocchio'?\n",
      "answers": [
        "gepetto"
      ]
    },
    {
      "number": 953,
      "category": "Disney Names",
      "question": "Name the dragon with attitude in 'Mulan'\n",
      "answers": [
        "mushu"
      ]
    },
    {
      "number": 954,
      "category": "Disney Names",
      "question": "Name the two chipmunk friends of Donald Duck.\n",
      "answers": [
        "chip 'n dale",
        "chip and dale",
        "chip n dale"
      ]
    },
    {
      "number": 955,
      "category": "Disney Names",
      "question": "Who helps Cinderella get ready for the ball?\n",
      "answers": [
        "fairy godmother"
      ]
    },
    {
      "number": 956,
      "category": "Disney Names",
      "question": "Who is the clock in 'Beauty and the Beast'?\n",
      "answers": [
        "cogsworth"
      ]
    },
    {
      "number": 957,
      "category": "Disney Names",
      "question": "Who is the bird in 'Aladdin'?\n",
      "answers": [
        "iago"
      ]
    },
    {
      "number": 958,
      "category": "Disney Names",
      "question": "Who is the father dog in '101 Dalmatians'?\n",
      "answers": [
        "pongo"
      ]
    },
    {
      "number": 959,
      "category": "Disney Names",
      "question": "Who is the bloodhound in \"Lady and the Tramp'?\n",
      "answers": [
        "trusty"
      ]
    },
    {
      "number": 960,
      "category": "Disney Names",
      "question": "Who is the leader of China in 'Mulan'?\n",
      "answers": [
        "the emperor",
        "emperor"
      ]
    },
    {
      "number": 961,
      "category": "Disney Names",
      "question": "Who are the roly-poly bugs in 'A Bug's Life'?\n",
      "answers": [
        "tuck 'n roll",
        "tuck n roll",
        "tuck and roll"
      ]
    },
    {
      "number": 962,
      "category": "Disney Names",
      "question": "Who is the Hunchback of Notre Dame's girlfriend?\n",
      "answers": [
        "esmeralda"
      ]
    },
    {
      "number": 963,
      "category": "Disney Names",
      "question": "Who is the heroine in 'The Rescuers'?\n",
      "answers": [
        "ms. bianca",
        "bianca"
      ]
    },
    {
      "number": 964,
      "category": "Disney Names",
      "question": "Who is the bovine friend of Mickey and Goofy?\n",
      "answers": [
        "clarabelle cow",
        "clarabelle"
      ]
    },
    {
      "number": 965,
      "category": "Disney Names",
      "question": "Who smokes a hookah in 'Alice in Wonderland'?\n",
      "answers": [
        "caterpillar"
      ]
    },
    {
      "number": 966,
      "category": "Disney Names",
      "question": "Who is the bad lion in 'The Lion King'?\n",
      "answers": [
        "uncle scar",
        "scar"
      ]
    },
    {
      "number": 967,
      "category": "Disney Names",
      "question": "Which cat from 'Alice in Wonderland' fades to just a smile?\n",
      "answers": [
        "cheshire cat",
        "cheshire"
      ]
    },
    {
      "number": 968,
      "category": "Disney Names",
      "question": "Name one of the hoodlums in '101 Dalmatians'\n",
      "answers": [
        "horace and jasper",
        "horace",
        "jasper"
      ]
    },
    {
      "number": 969,
      "category": "Disney Names",
      "question": "Who is the sidekick of the antagonist in 'Beauty and the Beast'?\n",
      "answers": [
        "lefou"
      ]
    },
    {
      "number": 970,
      "category": "Disney Names",
      "question": "Name the monkey in 'Aladdin'\n",
      "answers": [
        "abu"
      ]
    },
    {
      "number": 971,
      "category": "Disney Names",
      "question": "Who is the evil clergyman in 'The Hunchback of Notre Dame'?\n",
      "answers": [
        "frollo"
      ]
    },
    {
      "number": 972,
      "category": "Disney Names",
      "question": "Name the twin cats in 'Lady and the Tramp'\n",
      "answers": [
        "si and am",
        "si n am",
        "am and si"
      ]
    },
    {
      "number": 973,
      "category": "Disney Names",
      "question": "Name the mother marsupial in 'Winnie the Pooh'\n",
      "answers": [
        "kanga"
      ]
    },
    {
      "number": 974,
      "category": "Disney Names",
      "question": "Name the baby marsupial in 'Winnie the Pooh'\n",
      "answers": [
        "roo"
      ]
    },
    {
      "number": 975,
      "category": "Disney Names",
      "question": "Name one of the eels in 'The Little Mermaid'\n",
      "answers": [
        "flotsam and jetsam",
        "flotsam",
        "jetsam"
      ]
    },
    {
      "number": 976,
      "category": "Disney Names",
      "question": "Who falls asleep at the tea party in 'Alice in Wonderland'?\n",
      "answers": [
        "the dormouse",
        "dormouse"
      ]
    },
    {
      "number": 977,
      "category": "Disney Names",
      "question": "Who is 'The Great Mouse Detective'?\n",
      "answers": [
        "basil"
      ]
    },
    {
      "number": 978,
      "category": "Disney Names",
      "question": "Name the pipe organ in 'Beauty and the Beast Enchanted Christmas'\n",
      "answers": [
        "forte"
      ]
    },
    {
      "number": 979,
      "category": "Disney Names",
      "question": "Who is the crazy inventor and Beauty's father in 'Beauty and the Beast'?\n",
      "answers": [
        "maurice"
      ]
    },
    {
      "number": 980,
      "category": "Disney Names",
      "question": "Who is the hunter and all around egotist in 'Beauty and the Beast'?\n",
      "answers": [
        "gaston"
      ]
    },
    {
      "number": 981,
      "category": "Disney Names",
      "question": "Who wants to make a coat out of 101 Dalmatians?\n",
      "answers": [
        "cruella de vil",
        "cruella",
        "de vil",
        "devil"
      ]
    },
    {
      "number": 982,
      "category": "Disney Names",
      "question": "What is the name of the teacup in 'Beauty and the Beast'?\n",
      "answers": [
        "chip"
      ]
    },
    {
      "number": 983,
      "category": "Disney Names",
      "question": "Which tea partier in 'Alice in Wonderland' wears a tophat?\n",
      "answers": [
        "the mad hatter",
        "hatter"
      ]
    },
    {
      "number": 984,
      "category": "Disney Names",
      "question": "Who is Pinocchio's conscience?\n",
      "answers": [
        "jiminy cricket",
        "jiminy"
      ]
    },
    {
      "number": 985,
      "category": "Disney Names",
      "question": "Who is king in 'The Sword in the Stone'?\n",
      "answers": [
        "king arthur",
        "arthur"
      ]
    },
    {
      "number": 986,
      "category": "Disney Names",
      "question": "Name the princess' tiger in 'Aladdin'\n",
      "answers": [
        "rajah"
      ]
    },
    {
      "number": 987,
      "category": "Disney Names",
      "question": "Name the whale in 'Pinocchio'\n",
      "answers": [
        "monstro"
      ]
    },
    {
      "number": 988,
      "category": "Disney Names",
      "question": "Who is Mulan's trainer, leader, and love interest?\n",
      "answers": [
        "shang"
      ]
    },
    {
      "number": 989,
      "category": "Disney Names",
      "question": "Name the little dog in 'Pocahontas'\n",
      "answers": [
        "percy"
      ]
    },
    {
      "number": 990,
      "category": "Disney Names",
      "question": "Who is the snake in 'Robin Hood'?\n",
      "answers": [
        "sir hiss"
      ]
    },
    {
      "number": 991,
      "category": "Disney Names",
      "question": "What is the name of the girl in 'Peter Pan'?\n",
      "answers": [
        "wendy darling",
        "wendy"
      ]
    },
    {
      "number": 992,
      "category": "Disney Names",
      "question": "Who is the older brother in 'Peter Pan'?\n",
      "answers": [
        "john darling",
        "john"
      ]
    },
    {
      "number": 993,
      "category": "Disney Names",
      "question": "Who owns the male dalmatian in '101 Dalmatians'?\n",
      "answers": [
        "roger"
      ]
    },
    {
      "number": 994,
      "category": "Disney Names",
      "question": "Name the piggy bank in 'Toy Story'\n",
      "answers": [
        "hamm"
      ]
    },
    {
      "number": 995,
      "category": "Disney Names",
      "question": "Who is Tarzan's girlfriend?\n",
      "answers": [
        "jane porter",
        "jane"
      ]
    },
    {
      "number": 996,
      "category": "Disney Names",
      "question": "Who rules the country in 'Aladdin'?\n",
      "answers": [
        "the sultan",
        "sultan"
      ]
    },
    {
      "number": 997,
      "category": "Disney Names",
      "question": "Who struck out 'at the bat'?\n",
      "answers": [
        "casey"
      ]
    },
    {
      "number": 998,
      "category": "Disney Names",
      "question": "Who was the giant in 'Mickey and the Beanstalk'?\n",
      "answers": [
        "willie the giant",
        "willie"
      ]
    },
    {
      "number": 999,
      "category": "Disney Names",
      "question": "Who was the wise baboon in 'The Lion King'?\n",
      "answers": [
        "rafiki"
      ]
    },
    {
      "number": 1000,
      "category": "Disney Names",
      "question": "Who was the boy in 'Winnie the Pooh'?\n",
      "answers": [
        "christopher robin"
      ]
    },
    {
      "number": 1001,
      "category": "Disney Names",
      "question": "Who was The Tramp's girlfriend?\n",
      "answers": [
        "lady"
      ]
    },
    {
      "number": 1002,
      "category": "Disney Names",
      "question": "Name the bear in 'The Jungle Book'\n",
      "answers": [
        "baloo"
      ]
    },
    {
      "number": 1003,
      "category": "Disney Names",
      "question": "Who wants the pirate captain for lunch in 'Peter Pan'?\n",
      "answers": [
        "tic toc crocodile",
        "crocodile",
        "tic toc",
        "tictoc"
      ]
    },
    {
      "number": 1004,
      "category": "Disney Names",
      "question": "Name the elephant-bee in 'Winnie the Pooh'\n",
      "answers": [
        "hefalumps"
      ]
    },
    {
      "number": 1005,
      "category": "Disney Names",
      "question": "Who leads the Huns in 'Mulan'?\n",
      "answers": [
        "shan yu"
      ]
    },
    {
      "number": 1006,
      "category": "Disney Names",
      "question": "Name the elephant in 'Tarzan'\n",
      "answers": [
        "tantor"
      ]
    },
    {
      "number": 1007,
      "category": "Disney Names",
      "question": "Name the bird in 'The Lion King'\n",
      "answers": [
        "zazu"
      ]
    },
    {
      "number": 1008,
      "category": "Disney Names",
      "question": "Name the good luck charm in 'Mulan'\n",
      "answers": [
        "cri-kee",
        "crikee"
      ]
    },
    {
      "number": 1009,
      "category": "Disney Names",
      "question": "Which bad guy in 'The Great Mouse Detective' had a wooden leg?\n",
      "answers": [
        "fidget"
      ]
    },
    {
      "number": 1010,
      "category": "Disney Names",
      "question": "Who is Mulan's father?\n",
      "answers": [
        "fa zhou"
      ]
    },
    {
      "number": 1011,
      "category": "Disney Names",
      "question": "Who is the witch in 'The Sword in the Stone'?\n",
      "answers": [
        "madam mim"
      ]
    },
    {
      "number": 1012,
      "category": "Disney Names",
      "question": "Name the panther in 'The Jungle Book'\n",
      "answers": [
        "bagheera"
      ]
    },
    {
      "number": 1013,
      "category": "Disney Names",
      "question": "Who is Hercules' father?\n",
      "answers": [
        "zeus"
      ]
    },
    {
      "number": 1014,
      "category": "Disney Names",
      "question": "Who is the bad guy in 'Aladdin'?\n",
      "answers": [
        "jafar"
      ]
    },
    {
      "number": 1015,
      "category": "Disney Names",
      "question": "Which Russian boy went hunting for wolves?\n",
      "answers": [
        "peter"
      ]
    },
    {
      "number": 1016,
      "category": "Disney Names",
      "question": "Which of the Three Little Pigs built a brick house?\n",
      "answers": [
        "practical pig",
        "practical"
      ]
    },
    {
      "number": 1017,
      "category": "Disney Names",
      "question": "Who is the beautiful lady cat in 'Aristocats'?\n",
      "answers": [
        "duchess"
      ]
    },
    {
      "number": 1018,
      "category": "Disney Names",
      "question": "Who had a clam feast in 'Alice in Wonderland'?\n",
      "answers": [
        "walrus"
      ]
    },
    {
      "number": 1019,
      "category": "Disney Names",
      "question": "Name Pete's Dragon\n",
      "answers": [
        "elliot"
      ]
    },
    {
      "number": 1020,
      "category": "Disney Names",
      "question": "Who is the famous cartoon lumberjack?\n",
      "answers": [
        "paul bunyon",
        "bunyon",
        "bunyan"
      ]
    },
    {
      "number": 1021,
      "category": "Disney Names",
      "question": "Who knows 'who is fairest of all' in 'Snow White and the Seven Dwarfs'?\n",
      "answers": [
        "magic mirror",
        "mirror"
      ]
    },
    {
      "number": 1022,
      "category": "Disney Names",
      "question": "What mother gorilla adopted Tarzan?\n",
      "answers": [
        "kala"
      ]
    },
    {
      "number": 1023,
      "category": "Disney Names",
      "question": "Who was advisor to the leader of the country in 'Mulan'?\n",
      "answers": [
        "chi fu"
      ]
    },
    {
      "number": 1024,
      "category": "Disney Names",
      "question": "Name the cat in 'Cinderella'\n",
      "answers": [
        "lucifer"
      ]
    },
    {
      "number": 1025,
      "category": "Disney Names",
      "question": "Who was the wife of the head god in 'Hercules'?\n",
      "answers": [
        "hera"
      ]
    },
    {
      "number": 1026,
      "category": "Disney Names",
      "question": "Who was the baby gorilla in 'Tarzan'?\n",
      "answers": [
        "turk"
      ]
    },
    {
      "number": 1027,
      "category": "Disney Names",
      "question": "Which of the Three Little Pigs built a straw house?\n",
      "answers": [
        "fifer pig",
        "fifer"
      ]
    },
    {
      "number": 1028,
      "category": "Disney Names",
      "question": "What are the jack-in-the-boxes called in 'Winnie the Pooh'?\n",
      "answers": [
        "woozles",
        "woozle"
      ]
    },
    {
      "number": 1029,
      "category": "Disney Names",
      "question": "Name Cinderella's stepmother\n",
      "answers": [
        "lady tremaine"
      ]
    },
    {
      "number": 1030,
      "category": "Disney Names",
      "question": "Who was the religious member of Robin Hood's gang?\n",
      "answers": [
        "friar tuck"
      ]
    },
    {
      "number": 1031,
      "category": "Disney Names",
      "question": "Which animal drank tea at the tea party in 'Alice in Wonderland'?\n",
      "answers": [
        "march hare"
      ]
    },
    {
      "number": 1032,
      "category": "Disney Names",
      "question": "Name the older princess in 'A Bug's Life'\n",
      "answers": [
        "princess atta",
        "atta"
      ]
    },
    {
      "number": 1033,
      "category": "Disney Names",
      "question": "Who was the head rat in 'The Great Mouse Detective'?\n",
      "answers": [
        "ratigan"
      ]
    },
    {
      "number": 1034,
      "category": "Disney Names",
      "question": "Who was Dumbo's mother?\n",
      "answers": [
        "mrs. jumbo",
        "jumbo"
      ]
    },
    {
      "number": 1035,
      "category": "Disney Names",
      "question": "Name the walking stick in 'A Bug's Life'\n",
      "answers": [
        "slim"
      ]
    },
    {
      "number": 1036,
      "category": "Disney Names",
      "question": "Who was the candlestick holder in 'Beauty and the Beast'?\n",
      "answers": [
        "lumiere"
      ]
    },
    {
      "number": 1037,
      "category": "Disney Names",
      "question": "Who was the evil ruler in 'Hercules'?\n",
      "answers": [
        "hades"
      ]
    },
    {
      "number": 1038,
      "category": "Disney Names",
      "question": "Who was the prince in 'Robin Hood'?\n",
      "answers": [
        "prince john",
        "john"
      ]
    },
    {
      "number": 1039,
      "category": "Disney Names",
      "question": "Who was the younger brother in 'Peter Pan'?\n",
      "answers": [
        "michael darling",
        "michael"
      ]
    },
    {
      "number": 1040,
      "category": "Disney Names",
      "question": "Name the dinosaur in 'Toy Story'\n",
      "answers": [
        "rex"
      ]
    },
    {
      "number": 1041,
      "category": "Disney Names",
      "question": "Name The Little Mermaid's bird friend\n",
      "answers": [
        "scuttle"
      ]
    },
    {
      "number": 1042,
      "category": "Disney Names",
      "question": "Who was The Lion King's mother?\n",
      "answers": [
        "sarabi"
      ]
    },
    {
      "number": 1043,
      "category": "Disney Names",
      "question": "Who was The Lion King's girlfriend?\n",
      "answers": [
        "nala"
      ]
    },
    {
      "number": 1044,
      "category": "Disney Names",
      "question": "Who did Pocahontas save from the 'savages'?\n",
      "answers": [
        "john smith"
      ]
    },
    {
      "number": 1045,
      "category": "Disney Names",
      "question": "Who did Alice follow down the rabbit hole?\n",
      "answers": [
        "white rabbit"
      ]
    },
    {
      "number": 1046,
      "category": "Disney Names",
      "question": "Who is The Little Mermaid's boyfriend?\n",
      "answers": [
        "prince eric",
        "eric"
      ]
    },
    {
      "number": 1047,
      "category": "Disney Names",
      "question": "Who is Donald Duck's rich uncle?\n",
      "answers": [
        "scrooge mcduck",
        "scrooge"
      ]
    },
    {
      "number": 1048,
      "category": "Disney Names",
      "question": "Who is the native adventurer mouse in 'The Rescuers Down Under'?\n",
      "answers": [
        "jake"
      ]
    },
    {
      "number": 1049,
      "category": "Disney Names",
      "question": "Name the tiger in 'The Jungle Book'\n",
      "answers": [
        "shere khan"
      ]
    },
    {
      "number": 1050,
      "category": "Disney Names",
      "question": "Who were Cinderella's siblings?\n",
      "answers": [
        "the evil stepsisters",
        "stepsister"
      ]
    },
    {
      "number": 1051,
      "category": "Disney Names",
      "question": "Name the flying horse in 'Hercules'\n",
      "answers": [
        "pegasus"
      ]
    },
    {
      "number": 1052,
      "category": "Disney Names",
      "question": "What is the boy's name in 'The Jungle Book'?\n",
      "answers": [
        "mowgli"
      ]
    },
    {
      "number": 1053,
      "category": "Disney Names",
      "question": "Who is the mouse in 'Dumbo'?\n",
      "answers": [
        "timothy"
      ]
    },
    {
      "number": 1054,
      "category": "Disney Names",
      "question": "Who is the mouse in 'Aristocats'?\n",
      "answers": [
        "roquefort"
      ]
    },
    {
      "number": 1055,
      "category": "Disney Names",
      "question": "Who is the mother dog in '101 Dalmatians'?\n",
      "answers": [
        "perdita",
        "perdi",
        "perdy"
      ]
    },
    {
      "number": 1056,
      "category": "Disney Names",
      "question": "Who feeds a poison apple to Snow White?\n",
      "answers": [
        "the old witch",
        "old witch"
      ]
    },
    {
      "number": 1057,
      "category": "Disney Names",
      "question": "Which of the Three Little Pigs built a wood house?\n",
      "answers": [
        "fiddler pig"
      ]
    },
    {
      "number": 1058,
      "category": "Disney Names",
      "question": "Who was the sheriff in 'Robin Hood'?\n",
      "answers": [
        "sheriff of nottingham",
        "nottingham"
      ]
    },
    {
      "number": 1059,
      "category": "Disney Names",
      "question": "Who was The Lion King's father?\n",
      "answers": [
        "mufasa"
      ]
    },
    {
      "number": 1060,
      "category": "Disney Names",
      "question": "Who is the boy in \"The Rescuers Down Under'?\n",
      "answers": [
        "cody"
      ]
    },
    {
      "number": 1061,
      "category": "Disney Names",
      "question": "Who was in charge of the world before Zeus?\n",
      "answers": [
        "the titans",
        "titan"
      ]
    },
    {
      "number": 1062,
      "category": "Disney Names",
      "question": "Who had a big adventure in a giant peach?\n",
      "answers": [
        "james"
      ]
    },
    {
      "number": 1063,
      "category": "Disney Names",
      "question": "Who was the snake in 'The Jungle Book'?\n",
      "answers": [
        "kaa"
      ]
    },
    {
      "number": 1064,
      "category": "Disney Names",
      "question": "Name the multiheaded monster in 'Hercules'\n",
      "answers": [
        "hydra"
      ]
    },
    {
      "number": 1065,
      "category": "Disney Names",
      "question": "Name the horse in 'Aristocats'\n",
      "answers": [
        "frou frou"
      ]
    },
    {
      "number": 1066,
      "category": "Disney Names",
      "question": "Name the twins in 'Alice in Wonderland'\n",
      "answers": [
        "tweedledee and tweedledum",
        "tweedledee",
        "tweedledum"
      ]
    },
    {
      "number": 1067,
      "category": "Disney Names",
      "question": "Who was the evil governor in 'Pocahontas'?\n",
      "answers": [
        "governor ratcliffe",
        "ratcliff"
      ]
    },
    {
      "number": 1068,
      "category": "Disney Names",
      "question": "Who was the elephant-in-charge in 'The Jungle Book'?\n",
      "answers": [
        "colonel hathi"
      ]
    },
    {
      "number": 1069,
      "category": "Disney Names",
      "question": "Who is Goofy's neighbor in 'The Goofy Movie'?\n",
      "answers": [
        "pete"
      ]
    },
    {
      "number": 1070,
      "category": "Disney Names",
      "question": "Who is the evil poacher in 'The Rescuers Down Under'?\n",
      "answers": [
        "percival mcleach",
        "percival",
        "mcleach"
      ]
    },
    {
      "number": 1071,
      "category": "Disney Names",
      "question": "Who was the Sheepish Lion?\n",
      "answers": [
        "lambert"
      ]
    },
    {
      "number": 1072,
      "category": "Lord Of The Rings",
      "question": "What was the name of Gandalf's great horse?\n",
      "answers": [
        "shadowfax"
      ]
    },
    {
      "number": 1073,
      "category": "Lord Of The Rings",
      "question": "Who was Bilbo's nephew?\n",
      "answers": [
        "frodo"
      ]
    },
    {
      "number": 1074,
      "category": "Lord Of The Rings",
      "question": "What was Bilbo's family name?\n",
      "answers": [
        "baggins"
      ]
    },
    {
      "number": 1075,
      "category": "Lord Of The Rings",
      "question": "What branch of Bilbo's family did he not like?\n",
      "answers": [
        "sackville-baggins",
        "sackville"
      ]
    },
    {
      "number": 1076,
      "category": "Lord Of The Rings",
      "question": "Name the dragon that destroyed the lake-town of Esgaroth.\n",
      "answers": [
        "smaug"
      ]
    },
    {
      "number": 1077,
      "category": "Lord Of The Rings",
      "question": "Who slew the dragon who was thought to be the King beneath the Mountain?\n",
      "answers": [
        "bard"
      ]
    },
    {
      "number": 1078,
      "category": "Lord Of The Rings",
      "question": "At what age to Hobbits \"come of age\"?\n",
      "answers": [
        "thirty three",
        "33",
        "thirtythree"
      ]
    },
    {
      "number": 1079,
      "category": "Lord Of The Rings",
      "question": "By what name was Aragorn known when Frodo first met him?\n",
      "answers": [
        "strider"
      ]
    },
    {
      "number": 1080,
      "category": "Lord Of The Rings",
      "question": "Who were the shepherds of the trees?\n",
      "answers": [
        "the ents",
        "ents"
      ]
    },
    {
      "number": 1081,
      "category": "Lord Of The Rings",
      "question": "What was the name of Frodo's elf-blade?\n",
      "answers": [
        "sting"
      ]
    },
    {
      "number": 1082,
      "category": "Lord Of The Rings",
      "question": "What was Merry's full name?\n",
      "answers": [
        "meriadoc brandybuck",
        "meriadoc",
        "brandybuck"
      ]
    },
    {
      "number": 1083,
      "category": "Lord Of The Rings",
      "question": "What was Pippin's full name?\n",
      "answers": [
        "peregrin took",
        "peregrin"
      ]
    },
    {
      "number": 1084,
      "category": "Lord Of The Rings",
      "question": "What was Lobelia Sackville-Baggins known for snitching from Bilbo?\n",
      "answers": [
        "silver spoons",
        "spoon"
      ]
    },
    {
      "number": 1085,
      "category": "Lord Of The Rings",
      "question": "What was Bilbo's age at his birthday party where he disappeared?\n",
      "answers": [
        "one hundred and eleven",
        "111"
      ]
    },
    {
      "number": 1086,
      "category": "Lord Of The Rings",
      "question": "Where did Frodo first meet Aragorn?\n",
      "answers": [
        "the prancing pony",
        "prancing"
      ]
    },
    {
      "number": 1087,
      "category": "Lord Of The Rings",
      "question": "Who was King of the Mark of Rohan?\n",
      "answers": [
        "theoden"
      ]
    },
    {
      "number": 1088,
      "category": "Lord Of The Rings",
      "question": "What was the name of the great Ent host who helped Merry and Pippin?\n",
      "answers": [
        "treebeard"
      ]
    },
    {
      "number": 1089,
      "category": "Lord Of The Rings",
      "question": "What was Gimli's weapon of choice?\n",
      "answers": [
        "axe"
      ]
    },
    {
      "number": 1090,
      "category": "Lord Of The Rings",
      "question": "Who was the heir of Denethor, Lord of the Tower of Guard?\n",
      "answers": [
        "boromir"
      ]
    },
    {
      "number": 1091,
      "category": "Lord Of The Rings",
      "question": "What was Thorin's greatest treasure?\n",
      "answers": [
        "arkenstone of thrain",
        "arkenstone"
      ]
    },
    {
      "number": 1092,
      "category": "Lord Of The Rings",
      "question": "Name the Orc who tried to steal the hobbits from Ugluk.\n",
      "answers": [
        "grishnakh"
      ]
    },
    {
      "number": 1093,
      "category": "Lord Of The Rings",
      "question": "What do you call a gathering of Ents?\n",
      "answers": [
        "entmoot"
      ]
    },
    {
      "number": 1094,
      "category": "Lord Of The Rings",
      "question": "Name the young, hasty Ent.\n",
      "answers": [
        "quickbeam (bregalad)",
        "quickbeam",
        "bregalad"
      ]
    },
    {
      "number": 1095,
      "category": "Lord Of The Rings",
      "question": "When Bilbo first met him, what was Galdalf's trademark color?\n",
      "answers": [
        "galdalf the grey",
        "grey",
        "gray"
      ]
    },
    {
      "number": 1096,
      "category": "Lord Of The Rings",
      "question": "Who took on the enchanted shape of a bear?\n",
      "answers": [
        "beorn"
      ]
    },
    {
      "number": 1097,
      "category": "Lord Of The Rings",
      "question": "How did Gollum say that he acquired the One ring?\n",
      "answers": [
        "birthday present",
        "birthday"
      ]
    },
    {
      "number": 1098,
      "category": "Lord Of The Rings",
      "question": "Who was Bilbo's father?\n",
      "answers": [
        "bungo baggins",
        "bungo"
      ]
    },
    {
      "number": 1099,
      "category": "Lord Of The Rings",
      "question": "Name the second book of the Lord Of The Rings trilogy.\n",
      "answers": [
        "the two towers",
        "two towers"
      ]
    },
    {
      "number": 1100,
      "category": "Lord Of The Rings",
      "question": "What was the title of the prelude book to the Lord Of The Rings trilogy?\n",
      "answers": [
        "the hobbit",
        "hobbit"
      ]
    },
    {
      "number": 1101,
      "category": "Lord Of The Rings",
      "question": "What year was The Hobbit first published?\n",
      "answers": [
        "1937"
      ]
    },
    {
      "number": 1102,
      "category": "Lord Of The Rings",
      "question": "What was Bilbo's original job description, according to Galdalf?\n",
      "answers": [
        "burglar"
      ]
    },
    {
      "number": 1103,
      "category": "Lord Of The Rings",
      "question": "Where was the Mountain Of Fire?\n",
      "answers": [
        "mordor"
      ]
    },
    {
      "number": 1104,
      "category": "History",
      "question": "What fabric derives it's name from the French for \"cord of the king\"?\n",
      "answers": [
        "corduroy"
      ]
    },
    {
      "number": 1105,
      "category": "Sports&Leisure",
      "question": "Where is Gasoline Alley?\n",
      "answers": [
        "indianapolis motor speedway",
        "indianapolis",
        "indy"
      ]
    },
    {
      "number": 1106,
      "category": "People&Places",
      "question": "What 19th century humorist cabled home from Europe: \"The report of my death was an exaggeration\" ?\n",
      "answers": [
        "mark twain",
        "twain",
        "clemens"
      ]
    },
    {
      "number": 1107,
      "category": "History",
      "question": "What bird did Benjamin Franklin advocate as the U. S. national symbol?\n",
      "answers": [
        "turkey"
      ]
    },
    {
      "number": 1108,
      "category": "Sports&Leisure",
      "question": "Who played hoops with Godzilla in a Nike ad?\n",
      "answers": [
        "charles barkley",
        "barkley"
      ]
    },
    {
      "number": 1109,
      "category": "World",
      "question": "What soul singer said: \"Hair and teeth. If a man got those two things, he got it all\"?\n",
      "answers": [
        "james brown",
        "brown"
      ]
    },
    {
      "number": 1110,
      "category": "World",
      "question": "Which gabber used the name Rusty Sharpe as a Top 40 disk jockey?\n",
      "answers": [
        "rush limbaugh",
        "limbaugh"
      ]
    },
    {
      "number": 1111,
      "category": "Sports&Leisure",
      "question": "Who improved her speed in the 50-yard dash by chasing jackrabbits in the Mojave Desert?\n",
      "answers": [
        "florence griffith joyner",
        "joyner"
      ]
    },
    {
      "number": 1112,
      "category": "History",
      "question": "What member of the Supreme Court once complained about being the victim of a \"high-tech lynching\"?\n",
      "answers": [
        "clarence thomas",
        "thomas",
        "clarence"
      ]
    },
    {
      "number": 1113,
      "category": "World",
      "question": "Whose salute became one of the most widely circulated photos of 1963?\n",
      "answers": [
        "john kennedy jr.'s",
        "kennedy"
      ]
    },
    {
      "number": 1114,
      "category": "History",
      "question": "What dictator did George Bush accuse of a crime?\n",
      "answers": [
        "saddam hussein",
        "saddam",
        "hussein"
      ]
    },
    {
      "number": 1115,
      "category": "Arts&Entertainment",
      "question": "Who played a fisherman in 1937 and a priest in 1938 to win back-to-back best actor Oscars?\n",
      "answers": [
        "spencer tracy",
        "tracy",
        "spencer"
      ]
    },
    {
      "number": 1116,
      "category": "Arts&Entertainment",
      "question": "What TV talk show host did Eddie Murphy give a break to by casting him in \"Coming to America\"?\n",
      "answers": [
        "arsenio hall",
        "arsenio",
        " hall",
        "hall",
        "hall "
      ]
    },
    {
      "number": 1117,
      "category": "People&Places",
      "question": "What U.S. state adopted a cactus blossom as its state flower?\n",
      "answers": [
        "arizona"
      ]
    },
    {
      "number": 1118,
      "category": "World",
      "question": "What rock-and-roller encouraged his teenage girlfriend to make a beehive hair statement?\n",
      "answers": [
        "elvis presley",
        "presley",
        "elvis"
      ]
    },
    {
      "number": 1119,
      "category": "Science&Nature",
      "question": "How many North American species have disappeared since the Pilgrims landed here?\n",
      "answers": [
        "500",
        "five hundred",
        "5 hundred"
      ]
    },
    {
      "number": 1120,
      "category": "Science&Nature",
      "question": "What did the developers dub the first genetically engineered tomato to get FDA approval?\n",
      "answers": [
        "flavr savr"
      ]
    },
    {
      "number": 1121,
      "category": "Science&Nature",
      "question": "What plant made Queen Elizabeth I gasp in 1560: \"It bites like an adder!\"?\n",
      "answers": [
        "tobacco"
      ]
    },
    {
      "number": 1122,
      "category": "Sports&Leisure",
      "question": "What's the only country to have played in every World Cup soccer tournament?\n",
      "answers": [
        "brazil"
      ]
    },
    {
      "number": 1123,
      "category": "World",
      "question": "Which president watched the most movies in his first year at the White House?\n",
      "answers": [
        "bill clinton",
        "clinton"
      ]
    },
    {
      "number": 1124,
      "category": "Arts&Entertainment",
      "question": "What four-letter word does Madonna sing most often, ranking ahead of \"baby\" and \"time\"? \n",
      "answers": [
        "love",
        "love ",
        " love"
      ]
    },
    {
      "number": 1125,
      "category": "People&Places",
      "question": "What war-torn former Olympic city saw Susan Sontag direct \"Waiting for Godot\" in 1993?\n",
      "answers": [
        "sarajevo"
      ]
    },
    {
      "number": 1126,
      "category": "People&Places",
      "question": "How many stripes did the U.S. flag sport from 1795 to 1818?\n",
      "answers": [
        "fifteen",
        "15"
      ]
    },
    {
      "number": 1127,
      "category": "Science&Nature",
      "question": "What metallic element do you need 15 pounds of to build an atomic bomb?\n",
      "answers": [
        "plutonium"
      ]
    },
    {
      "number": 1128,
      "category": "History",
      "question": "Who was the English queen, who had Mary Queen of Scots killed but named Mary's son her successor?\n",
      "answers": [
        "elizabeth i",
        "elizabeth"
      ]
    },
    {
      "number": 1129,
      "category": "Arts&Entertainment",
      "question": "What movie did Paramount production head Dawn Steel dub \"a female Rocky\"?\n",
      "answers": [
        "flashdance"
      ]
    },
    {
      "number": 1130,
      "category": "Arts&Entertainment",
      "question": "Who helmed four of the top 10 highest-grossing movies before finally winning an Oscar for his craft?\n",
      "answers": [
        "steven spielberg",
        "spielberg",
        "speilberg",
        "spielburg"
      ]
    },
    {
      "number": 1131,
      "category": "Arts&Entertainment",
      "question": "What three-word mantra do Wayne and Garth repeat upon meeting Alice Cooper in \"Wayne's World\"?\n",
      "answers": [
        "we're not worthy!",
        "not worthy"
      ]
    },
    {
      "number": 1132,
      "category": "Science&Nature",
      "question": "What fly's appearance in 1975 threatened California's $16 billion agricultural industry?\n",
      "answers": [
        "the mediterranean fruit fly's",
        "fruit fly",
        "mediterranean"
      ]
    },
    {
      "number": 1133,
      "category": "World",
      "question": "What actress, wife of the company president, became this company's spokesperson in 1954?\n",
      "answers": [
        "joan crawford",
        "crawford"
      ]
    },
    {
      "number": 1134,
      "category": "Sports&Leisure",
      "question": "What substitute catcher, a lifetime .200 hitter, made 80 appearances on the \"Tonight\" show? \n",
      "answers": [
        "bob uecker",
        "uecker"
      ]
    },
    {
      "number": 1135,
      "category": "World",
      "question": "What celebrity is with Richard Nixon in the National Archives' most-requested photo?\n",
      "answers": [
        "elvis presley",
        "presley"
      ]
    },
    {
      "number": 1136,
      "category": "World",
      "question": "What biblical prophet was hurled onto the beach?\n",
      "answers": [
        "jonah"
      ]
    },
    {
      "number": 1137,
      "category": "Sports&Leisure",
      "question": "Which tendon, named for a thick-skinned Greek, is most likely to cause men trouble?\n",
      "answers": [
        "achilles"
      ]
    },
    {
      "number": 1138,
      "category": "Science&Nature",
      "question": "What 1993 movie had folks gushing over the fate of an Orca whale?\n",
      "answers": [
        "free willy"
      ]
    },
    {
      "number": 1139,
      "category": "Arts&Entertainment",
      "question": "What type of enemy jet do potential Top Guns fight?\n",
      "answers": [
        "migs",
        "migs ",
        " migs"
      ]
    },
    {
      "number": 1140,
      "category": "People&Places",
      "question": "What city rings in the new year with a descending ball or apple?\n",
      "answers": [
        "new york"
      ]
    },
    {
      "number": 1141,
      "category": "History",
      "question": "Which member of a royal couple admitted: \"I'm as thick as a plank\"?\n",
      "answers": [
        "princess diana",
        "diana"
      ]
    },
    {
      "number": 1142,
      "category": "People&Places",
      "question": "What is one of the three U.S. states that Glacier National Park is found in?\n",
      "answers": [
        "idaho, montana, wyoming",
        "idaho",
        "montana",
        "wyoming"
      ]
    },
    {
      "number": 1143,
      "category": "Science&Nature",
      "question": "What's the term for a device that uses the sun and horizon to determine location?\n",
      "answers": [
        "sextant"
      ]
    },
    {
      "number": 1144,
      "category": "Science&Nature",
      "question": "What product is well known for the slogan: \"Plop plop, fizz fizz, oh what a relief it is!\"?\n",
      "answers": [
        "alka-seltzer",
        "seltzer"
      ]
    },
    {
      "number": 1145,
      "category": "History",
      "question": "What were shantytowns of the homeless dubbed during the Depression?\n",
      "answers": [
        "hoovervilles"
      ]
    },
    {
      "number": 1146,
      "category": "Sports&Leisure",
      "question": "Who broke 93 bones trying to leap 36 cars on his motorcycle at the Astrodome?\n",
      "answers": [
        "evel knievel",
        "knievel",
        "kneivel"
      ]
    },
    {
      "number": 1147,
      "category": "World",
      "question": "Which future president would later see an exuberant Sammy Davis Jr. embrace him, from behind?\n",
      "answers": [
        "richard nixon",
        "nixon"
      ]
    },
    {
      "number": 1148,
      "category": "People&Places",
      "question": "What Caribbean nation saw its military leader threaten a man with a \"voodoo curse\" in 1994?\n",
      "answers": [
        "haiti"
      ]
    },
    {
      "number": 1149,
      "category": "World",
      "question": "What six words completed the 1980s bumper sticker that started with \"I owe, I owe\"?\n",
      "answers": [
        "so off to work i go"
      ]
    },
    {
      "number": 1150,
      "category": "Arts&Entertainment",
      "question": "What 6.5-ton attraction was bought from the London Zoo over Queen Victoria's protest?\n",
      "answers": [
        "jumbo"
      ]
    },
    {
      "number": 1151,
      "category": "Sports&Leisure",
      "question": "What chess piece is second in strength only to the queen?\n",
      "answers": [
        "rook"
      ]
    },
    {
      "number": 1152,
      "category": "History",
      "question": "Whose heroics were cheered by all but New York City's street maintenance crew in 1927?\n",
      "answers": [
        "charles lindbergh's",
        "lindburg",
        "lindbergh"
      ]
    },
    {
      "number": 1153,
      "category": "Sports&Leisure",
      "question": "Who won the NBA's MVP award in 1984, 1985 and 1986?\n",
      "answers": [
        "larry bird",
        "bird ",
        " bird"
      ]
    },
    {
      "number": 1154,
      "category": "Science&Nature",
      "question": "What biblical unit of measure was defined as the length of forearm to fingertip on a grown man?\n",
      "answers": [
        "cubit"
      ]
    },
    {
      "number": 1155,
      "category": "Arts&Entertainment",
      "question": "What Led Zeppelin tune was a rewrite of Willie Dixon's \"You Need Love\"?\n",
      "answers": [
        "whole lotta love"
      ]
    },
    {
      "number": 1156,
      "category": "Science&Nature",
      "question": "What's the common term for the layout of a computer keyboard?\n",
      "answers": [
        "qwerty keyboard",
        "qwerty"
      ]
    },
    {
      "number": 1157,
      "category": "People&Places",
      "question": "What did Richard Gere's model and wife-to-be fashion from Reynolds Wrap before a quickie Las Vegas marriage?\n",
      "answers": [
        "wedding rings",
        "rings"
      ]
    },
    {
      "number": 1158,
      "category": "People&Places",
      "question": "Which country out-vetoed the other 48-to-4 in the United Nations Security Council in the 1980s?\n",
      "answers": [
        "the u.s.",
        "usa",
        "united",
        "states"
      ]
    },
    {
      "number": 1159,
      "category": "People&Places",
      "question": "What city attracted Van Gogh and Toulouse-Lautrec to its bohemian Montmartre district?\n",
      "answers": [
        "paris"
      ]
    },
    {
      "number": 1160,
      "category": "History",
      "question": "Who committed \"The Slice Felt Round the World\" in 1993?\n",
      "answers": [
        "lorena bobbitt",
        "bobbitt"
      ]
    },
    {
      "number": 1161,
      "category": "History",
      "question": "Who's portrayed on the Purple Heart medal?\n",
      "answers": [
        "george washington",
        "washington"
      ]
    },
    {
      "number": 1162,
      "category": "Sports&Leisure",
      "question": "Who's the shortest basketballer to win the NBA's Slam Dunk contest?\n",
      "answers": [
        "spud webb",
        "webb ",
        " webb"
      ]
    },
    {
      "number": 1163,
      "category": "Science&Nature",
      "question": "How many bolts of lightning strike somewhere on Earth each second?\n",
      "answers": [
        "100",
        "hundred"
      ]
    },
    {
      "number": 1164,
      "category": "People&Places",
      "question": "What city boasts the world's largest Kentucky Fried Chicken restaurant?\n",
      "answers": [
        "beijing"
      ]
    },
    {
      "number": 1165,
      "category": "Arts&Entertainment",
      "question": "What \"Saturday Night Live\" character's signature line was: \"Well, isn't that special?\"\n",
      "answers": [
        "church lady's",
        "church lady"
      ]
    },
    {
      "number": 1166,
      "category": "Science&Nature",
      "question": "What prevented Alexander Graham Bell from using the telephone to speak to his wife?\n",
      "answers": [
        "her deafness",
        "deaf",
        " deaf",
        "deaf "
      ]
    },
    {
      "number": 1167,
      "category": "Arts&Entertainment",
      "question": "What precocious preteen on \"Saturday Night Live\" sat in an oversized rocking chair?\n",
      "answers": [
        "edith ann"
      ]
    },
    {
      "number": 1168,
      "category": "World",
      "question": "What late German is the world's most-often-cited author in academic journals?\n",
      "answers": [
        "karl marx",
        "marx",
        "marx ",
        " marx"
      ]
    },
    {
      "number": 1169,
      "category": "Science&Nature",
      "question": "What are Eskimos believed to have 600 words for?\n",
      "answers": [
        "snow",
        " snow",
        "snow "
      ]
    },
    {
      "number": 1170,
      "category": "Science&Nature",
      "question": "What emissions from cars dropped an amazing 96 percent in the U.S. from 1983 to 1993?\n",
      "answers": [
        "lead emissions",
        "lead",
        "lead ",
        " lead"
      ]
    },
    {
      "number": 1171,
      "category": "Science&Nature",
      "question": "Which of Stephen Hawkings books is subtitled \"From the Big Bang to the Black Holes\"?\n",
      "answers": [
        "a brief history of time",
        "brief history",
        "history of time"
      ]
    },
    {
      "number": 1172,
      "category": "Sports&Leisure",
      "question": "What feat was Nolan Ryan the oldest pitcher in major league history to achieve, at age 43?\n",
      "answers": [
        "pitching a no-hitter",
        "no hitter"
      ]
    },
    {
      "number": 1173,
      "category": "Science&Nature",
      "question": "What dangerous disease do dogs spread in the U.S. northeast and elsewhere?\n",
      "answers": [
        "rabies"
      ]
    },
    {
      "number": 1174,
      "category": "People&Places",
      "question": "What Pacific island is home to mysterious statues?\n",
      "answers": [
        "easter island",
        "easter"
      ]
    },
    {
      "number": 1175,
      "category": "Science&Nature",
      "question": "What animal does the Australian government authorize killing two million of per year?\n",
      "answers": [
        "kangaroo"
      ]
    },
    {
      "number": 1176,
      "category": "Arts&Entertainment",
      "question": "What Gloria Gaynor chart-topper was originally the \"B\" side of the single \"Substitute\"?\n",
      "answers": [
        "i will survive"
      ]
    },
    {
      "number": 1177,
      "category": "Arts&Entertainment",
      "question": "What's the name of the classic two-volume compendium from Rudyard Kipling?\n",
      "answers": [
        "the jungle books ",
        "jungle book"
      ]
    },
    {
      "number": 1178,
      "category": "People&Places",
      "question": "Who answered a \"Today\" show question on French leader Valery Giscard d'Estaing with \"Who?\"?\n",
      "answers": [
        "ronald reagan",
        "reagan"
      ]
    },
    {
      "number": 1179,
      "category": "Arts&Entertainment",
      "question": "What '50s sitcom airs every hour of every day somewhere in the world?\n",
      "answers": [
        "i love lucy"
      ]
    },
    {
      "number": 1180,
      "category": "Science&Nature",
      "question": "What archipelago did Charles Darwin call the \"origin of all my views\"?\n",
      "answers": [
        "the galapagos",
        "galapago"
      ]
    },
    {
      "number": 1181,
      "category": "Sports&Leisure",
      "question": "What Clinton cabinet member wrestled an aligator for sport in the Everglades?\n",
      "answers": [
        "janet reno",
        "reno ",
        "reno",
        " reno"
      ]
    },
    {
      "number": 1182,
      "category": "World",
      "question": "Who was Hugh Hefner's first \"Sweetheart of the Month\"?\n",
      "answers": [
        "marilyn monroe",
        "marilyn",
        "monroe"
      ]
    },
    {
      "number": 1183,
      "category": "Science&Nature",
      "question": "What unit of sound intensity commemorates an inventor's last name?\n",
      "answers": [
        "decibel"
      ]
    },
    {
      "number": 1184,
      "category": "People&Places",
      "question": "Whose first night in jail prompted her hubby, Harry, to kill the lights in a skyscraper's tower?\n",
      "answers": [
        "leona helmsley's",
        "helmsley"
      ]
    },
    {
      "number": 1185,
      "category": "Arts&Entertainment",
      "question": "What Jefferson Airplane hit described Alice of Wonderland fame as being 10 feet tall?\n",
      "answers": [
        "white rabbit"
      ]
    },
    {
      "number": 1186,
      "category": "History",
      "question": "What kind of \"shadow\" adversely affected the telegenics of Richard Nixon in a 1960 debate?\n",
      "answers": [
        "five o'clock shadow",
        "5 o'clock"
      ]
    },
    {
      "number": 1187,
      "category": "People&Places",
      "question": "What U.S. holiday took flight from a humble Pilgrim beginning?\n",
      "answers": [
        "thanksgiving"
      ]
    },
    {
      "number": 1188,
      "category": "Science&Nature",
      "question": "How many species of sea turtles aren't endangered?\n",
      "answers": [
        "zero",
        "0"
      ]
    },
    {
      "number": 1189,
      "category": "World",
      "question": "Who did Frank Sinatra reportedly call \"Botto\" before his duet on \"I've Got You Under My Skin\"?\n",
      "answers": [
        "bono",
        "bono ",
        " bono"
      ]
    },
    {
      "number": 1190,
      "category": "Science&Nature",
      "question": "What president's name adorns the plaque left on the moon by the first astronauts to visit there?\n",
      "answers": [
        "richard nixon's",
        "nixon"
      ]
    },
    {
      "number": 1191,
      "category": "People&Places",
      "question": "What 98-acre piece of real estate does the Imperial Palace in China overlook?\n",
      "answers": [
        "tiananmen square",
        "tiananmen"
      ]
    },
    {
      "number": 1192,
      "category": "World",
      "question": "Which famous outlaw was a souvenir seeker trying to saw an ear off when the coroner stepped in?\n",
      "answers": [
        "clyde barrow",
        "clyde",
        "barrow"
      ]
    },
    {
      "number": 1193,
      "category": "World",
      "question": "Who declared: \"Everybody is ignorant, only on different subjects\"?\n",
      "answers": [
        "will rogers",
        "rogers"
      ]
    },
    {
      "number": 1194,
      "category": "People&Places",
      "question": "What nation sees Mount Everest share a border with Tibet?\n",
      "answers": [
        "nepal"
      ]
    },
    {
      "number": 1195,
      "category": "People&Places",
      "question": "What amusement park has had three of its rides designated as New York City historical landmarks?\n",
      "answers": [
        "coney island",
        "coney"
      ]
    },
    {
      "number": 1196,
      "category": "People&Places",
      "question": "Who tap-danced at the Toledo, Ohio, Elks Club before turning to feminist pursuits?\n",
      "answers": [
        "gloria steinem",
        "steinem"
      ]
    },
    {
      "number": 1197,
      "category": "Sports&Leisure",
      "question": "In blackjack, a hand of Ace and Nine can count as Ten or what?\n",
      "answers": [
        "twenty",
        "20"
      ]
    },
    {
      "number": 1198,
      "category": "People&Places",
      "question": "What is the name of the isle that John and Paul want to summer on at age 64 \"if it's not too dear\"?\n",
      "answers": [
        "the isle of wight",
        "wight"
      ]
    },
    {
      "number": 1199,
      "category": "Arts&Entertainment",
      "question": "What kind of pet did the Beaver and Wally hide from June and Ward in their toilet tank?\n",
      "answers": [
        "alligator"
      ]
    },
    {
      "number": 1200,
      "category": "Sports&Leisure",
      "question": "What term was coined to describe a man's pioneering approach to clearing a high jump bar?\n",
      "answers": [
        "the fosbury flop",
        "fosbury"
      ]
    },
    {
      "number": 1201,
      "category": "Science&Nature",
      "question": "What type of power enables a submarine to circle the globe without surfacing?\n",
      "answers": [
        "nuclear"
      ]
    },
    {
      "number": 1202,
      "category": "Arts&Entertainment",
      "question": "Whose 1994 \"Letterman\" appearance did Charles Grodin spoof by handing Dave his boxer shorts?\n",
      "answers": [
        "madonna's",
        "madonna"
      ]
    },
    {
      "number": 1203,
      "category": "Arts&Entertainment",
      "question": "What Shakespeare play included creatures named Peaseblossom, Cobweb and Mustardseed?\n",
      "answers": [
        "a midsummer night's dream",
        "midsummer",
        "mid summer"
      ]
    },
    {
      "number": 1204,
      "category": "People&Places",
      "question": "What color flower should never be sent to newlyweds in Hong Kong?\n",
      "answers": [
        "white"
      ]
    },
    {
      "number": 1205,
      "category": "World",
      "question": "What pop star bid adieu to his \"Uptown Girl\" during the Thanksgiving holidays in 1993?\n",
      "answers": [
        "billy joel",
        "joel",
        "joel ",
        " joel"
      ]
    },
    {
      "number": 1206,
      "category": "Science&Nature",
      "question": "Which of Thomas Edison's inventions did skeptic Jean Bouillaud attribute to ventriloquism?\n",
      "answers": [
        "phonograph"
      ]
    },
    {
      "number": 1207,
      "category": "World",
      "question": "What did Angela Bowie say she made after she saw David in bed with Mick Jagger?\n",
      "answers": [
        "breakfast"
      ]
    },
    {
      "number": 1208,
      "category": "People&Places",
      "question": "Where could you float a boat at 1,292 feet below sea level?\n",
      "answers": [
        "the dead sea",
        "dead sea"
      ]
    },
    {
      "number": 1209,
      "category": "World",
      "question": "What action star signed a $500,000 pact to include cigarettes in five feature films?\n",
      "answers": [
        "sylvester stallone",
        "stallone"
      ]
    },
    {
      "number": 1210,
      "category": "Sports&Leisure",
      "question": "What pitcher's 2.58 earned run average was tops in the major leagues during the 1970s?\n",
      "answers": [
        "jim palmer's",
        "palmer"
      ]
    },
    {
      "number": 1211,
      "category": "People&Places",
      "question": "Which is Big Ben - the tower, the clock or the bell?\n",
      "answers": [
        "bell",
        "bell ",
        " bell"
      ]
    },
    {
      "number": 1212,
      "category": "Sports&Leisure",
      "question": "What Minnesota Twin noted: \"You don't get to pick your body. God just hands 'em out as He sees fit\"?\n",
      "answers": [
        "kirby puckett",
        "puckett"
      ]
    },
    {
      "number": 1213,
      "category": "World",
      "question": "What enduring entree did McDonalds unleash on the world in 1983?\n",
      "answers": [
        "chicken mcnuggets",
        "mcnugget"
      ]
    },
    {
      "number": 1214,
      "category": "History",
      "question": "What U.S. service academy displays \"Bring Me Men...\" atop a main quad entrance, despite female cadets?\n",
      "answers": [
        "the air force academy",
        "air force"
      ]
    },
    {
      "number": 1215,
      "category": "World",
      "question": "Whose movies were banned in Germany when she defied a Nazi order to return to her homeland?\n",
      "answers": [
        "marlene dietrich's",
        "dietrich"
      ]
    },
    {
      "number": 1216,
      "category": "Science&Nature",
      "question": "How many in eight smokers will die as a direct result of tobacco, according to a 1994 study?\n",
      "answers": [
        "four",
        "4",
        "four ",
        " four"
      ]
    },
    {
      "number": 1217,
      "category": "People&Places",
      "question": "What's the official language of Brazil?\n",
      "answers": [
        "portuguese"
      ]
    },
    {
      "number": 1218,
      "category": "World",
      "question": "What 1960 chart-topper celebrated beach wear?\n",
      "answers": [
        "itsy bitsy teenie weenie yellow polka dot bikini",
        "itsy bitsy",
        "teenie weenie",
        "yellow polka"
      ]
    },
    {
      "number": 1219,
      "category": "World",
      "question": "What flamboyant country diva chirped: \"You'd be surprised how much it costs to look this cheap\"?\n",
      "answers": [
        "dolly parton",
        "parton"
      ]
    },
    {
      "number": 1220,
      "category": "People&Places",
      "question": "What future \"Saturday Night Live\" star attended a Long Island high school?\n",
      "answers": [
        "eddie murphy",
        "murphy"
      ]
    },
    {
      "number": 1221,
      "category": "Arts&Entertainment",
      "question": "What movie saw Whoopi Goldberg receive an Oscar nomination for her first screen role?\n",
      "answers": [
        "the color purple",
        "color purple"
      ]
    },
    {
      "number": 1222,
      "category": "Sports&Leisure",
      "question": "What basketballer's reluctance to talk to the media prompted them to dub him \"The Silent Sycamore\"?\n",
      "answers": [
        "larry bird's",
        "bird",
        "bird ",
        " bird"
      ]
    },
    {
      "number": 1223,
      "category": "History",
      "question": "What country did the \"President-for-Life\" beat a hasty retreat from on February 7, 1986?\n",
      "answers": [
        "haiti"
      ]
    },
    {
      "number": 1224,
      "category": "Science&Nature",
      "question": "Which of Little Richard's songs did a Georgia politician push as the state rock song?\n",
      "answers": [
        "tutti frutti"
      ]
    },
    {
      "number": 1225,
      "category": "History",
      "question": "What holy man built an air-conditioned doghouse before going to the pen for misusing funds?\n",
      "answers": [
        "jim bakker",
        "bakker"
      ]
    },
    {
      "number": 1226,
      "category": "Science&Nature",
      "question": "What U.S. state saw 60 people and much wildlife perish when a volcano erupted in 1980?\n",
      "answers": [
        "washington"
      ]
    },
    {
      "number": 1227,
      "category": "History",
      "question": "What month saw the New York Stock Exchange's biggest price dives in both 1929 and 1987?\n",
      "answers": [
        "october"
      ]
    },
    {
      "number": 1228,
      "category": "People&Places",
      "question": "Who thrilled the Woodstock festival crowd with a rendition of a patriotic melody?\n",
      "answers": [
        "jimi hendrix",
        "hendrix"
      ]
    },
    {
      "number": 1229,
      "category": "Sports&Leisure",
      "question": "What 10-time Chicago Cubs all-star abruptly retired three months into the 1994 season?\n",
      "answers": [
        "ryne sandberg",
        "sandberg"
      ]
    },
    {
      "number": 1230,
      "category": "Arts&Entertainment",
      "question": "What onetime \"Mission: Impossible\" star suffered lung cancer, a brain tumor and a car crash?\n",
      "answers": [
        "greg morris",
        "morris"
      ]
    },
    {
      "number": 1231,
      "category": "People&Places",
      "question": "What Judith Krantz TV miniseries had eight days of shooting in New York City and 75 in Toronto?\n",
      "answers": [
        "i'll take manhattan",
        "manhattan"
      ]
    },
    {
      "number": 1232,
      "category": "People&Places",
      "question": "What four-letter nickname do Londoners apply to their subway?\n",
      "answers": [
        "the tube",
        "tube",
        "tube ",
        " tube"
      ]
    },
    {
      "number": 1233,
      "category": "Sports&Leisure",
      "question": "What New York Yankees star was classified 4-F due to osteomyelitis in his left shin?\n",
      "answers": [
        "mickey mantle",
        "mantle"
      ]
    },
    {
      "number": 1234,
      "category": "World",
      "question": "What woman was the top gun in Buffalo Bill's Wild West Show?\n",
      "answers": [
        "annie oakley",
        "oakley"
      ]
    },
    {
      "number": 1235,
      "category": "World",
      "question": "Whose TV talk show had an elected official and Ross Perot clashing over NAFTA?\n",
      "answers": [
        "larry king's",
        "king",
        "king ",
        " king"
      ]
    },
    {
      "number": 1236,
      "category": "Sports&Leisure",
      "question": "What champ of chess ended a 20-year exile in 1992 to play Boris Spassky? \n",
      "answers": [
        "bobby fischer",
        "fischer",
        "fisher"
      ]
    },
    {
      "number": 1237,
      "category": "World",
      "question": "What pre-\"Flashdance\" film also boasted a hit title tune sung by Irene Cara?\n",
      "answers": [
        "fame",
        "fame ",
        " fame"
      ]
    },
    {
      "number": 1238,
      "category": "People&Places",
      "question": "What pioneering special effects company is located at Stephen Spielberg's facility in Marin County, California?\n",
      "answers": [
        "industrial light & magic",
        "ilm",
        "ilm ",
        " ilm",
        "industrial light"
      ]
    },
    {
      "number": 1239,
      "category": "People&Places",
      "question": "Who took out an ad in the \"The New York Times\" suggesting Saddam Hussein \"check out\" of Kuwait?\n",
      "answers": [
        "leona helmsley",
        "helmsley"
      ]
    },
    {
      "number": 1240,
      "category": "People&Places",
      "question": "Who was the first European to stand atop Mount Everest?\n",
      "answers": [
        "edmund hillary",
        "hillary"
      ]
    },
    {
      "number": 1241,
      "category": "Arts&Entertainment",
      "question": "Who did Franco Zeffirelli call \"the most beautiful creation I have ever seen ... almost like a drug\"?\n",
      "answers": [
        "brooke shields",
        "shields"
      ]
    },
    {
      "number": 1242,
      "category": "History",
      "question": "What flying ace's nickname was inspired by the color of his Albatross biplane?\n",
      "answers": [
        "manfred von richthofen (the red baron)",
        "richthofen",
        "red baron"
      ]
    },
    {
      "number": 1243,
      "category": "Sports&Leisure",
      "question": "What, drawn from a Greek epic, is the most popular sailboat name in the U.S.?\n",
      "answers": [
        "odyssey"
      ]
    },
    {
      "number": 1244,
      "category": "History",
      "question": "Who did John Hinckley Jr. mean in writing: \"(She's) got the look I crave. What else can I say?\"?\n",
      "answers": [
        "jodie foster",
        "foster"
      ]
    },
    {
      "number": 1245,
      "category": "World",
      "question": "Who made the Statue Of Liberty disappear in a 1983 telecast?\n",
      "answers": [
        "david copperfield ",
        "copperfield"
      ]
    },
    {
      "number": 1246,
      "category": "World",
      "question": "What Long Islander's beeper contract fetched $1,430 at auction?\n",
      "answers": [
        "amy fisher's",
        "fisher"
      ]
    },
    {
      "number": 1247,
      "category": "Sports&Leisure",
      "question": "What amusement park's stock plunged 350 percent between 1992 and the end of 1993?\n",
      "answers": [
        "euro disney's",
        "euro disney",
        "eurodisney"
      ]
    },
    {
      "number": 1248,
      "category": "History",
      "question": "What three-word phrase hit \"The Washington Post\" 135 times in President Bush's first two years in office?\n",
      "answers": [
        "read my lips"
      ]
    },
    {
      "number": 1249,
      "category": "World",
      "question": "What church secretary took it off for \"Playboy\" and hosted the mud-wrestling show \"Thunder & Mud\"?\n",
      "answers": [
        "jessica hahn",
        "hahn",
        "hahn ",
        " hahn"
      ]
    },
    {
      "number": 1250,
      "category": "Science&Nature",
      "question": "What remote spot did an explorer finally reach on his third attempt, in 1909?\n",
      "answers": [
        "the north pole",
        "north pole"
      ]
    },
    {
      "number": 1251,
      "category": "Science&Nature",
      "question": "What were a reported 1,519 New York City residents bitten by in 1985?\n",
      "answers": [
        "other people",
        "people"
      ]
    },
    {
      "number": 1252,
      "category": "Sports&Leisure",
      "question": "What Kansas City Royals rookie stunned teammates by giving them autographed photos when he reported?\n",
      "answers": [
        "bo jackson",
        "jackson"
      ]
    },
    {
      "number": 1253,
      "category": "World",
      "question": "What former child star originated the role of Mordred in the Broadway musical \"Camelot\"?\n",
      "answers": [
        "roddy mcdowall",
        "mcdowall"
      ]
    },
    {
      "number": 1254,
      "category": "Science&Nature",
      "question": "What 1962 book by Rachel Carson is credited with increasing public interest in environmental dangers?\n",
      "answers": [
        "silent spring"
      ]
    },
    {
      "number": 1255,
      "category": "Sports&Leisure",
      "question": "What decathlon star claimed he kept in shape as a youth by running from police?\n",
      "answers": [
        "dave johnson",
        "johnson"
      ]
    },
    {
      "number": 1256,
      "category": "Arts&Entertainment",
      "question": "What did Murphy Brown name her child in 1992, in the most-watched TV birth since 1953's Little Ricky?\n",
      "answers": [
        "avery"
      ]
    },
    {
      "number": 1257,
      "category": "Sports&Leisure",
      "question": "Which chess term comes from the Arabic phrase meaning \"the Shah is dead\"?\n",
      "answers": [
        "checkmate"
      ]
    },
    {
      "number": 1258,
      "category": "Sports&Leisure",
      "question": "What golfer did \"Sports Illustrated\" say \"has destroyed more hotel rooms than water seepage\"?\n",
      "answers": [
        "john daly",
        "daly",
        "daly ",
        " daly"
      ]
    },
    {
      "number": 1259,
      "category": "History",
      "question": "Who earned international headlines for slapping a battle-fatigued soldier in 1943?\n",
      "answers": [
        "george patton",
        "patton"
      ]
    },
    {
      "number": 1260,
      "category": "Sports&Leisure",
      "question": "In what game does a batsman protect a wicket?\n",
      "answers": [
        "cricket"
      ]
    },
    {
      "number": 1261,
      "category": "People&Places",
      "question": "Who had his likeness added to a Michelangelo work when he ordered a replica for his Las Vegas bedroom?\n",
      "answers": [
        "liberace"
      ]
    },
    {
      "number": 1262,
      "category": "Sports&Leisure",
      "question": "Who failed a drug test and lost a 100 meters gold medal at the 1988 Olympics?\n",
      "answers": [
        "ben johnson's",
        "johnson"
      ]
    },
    {
      "number": 1263,
      "category": "History",
      "question": "Along with Lady Bird Johnson, who stood beside Lyndon B. Johnson when he was sworn in as president in 1963?\n",
      "answers": [
        "jacqueline kennedy",
        "kennedy"
      ]
    },
    {
      "number": 1264,
      "category": "World",
      "question": "What London museum was named for a Swiss miss who sculpted fellow prisoners' severed heads?\n",
      "answers": [
        "madame tussaud's wax exhibition",
        "tussaud"
      ]
    },
    {
      "number": 1265,
      "category": "World",
      "question": "What movie monster fought King Kong atop a mountain?\n",
      "answers": [
        "godzilla"
      ]
    },
    {
      "number": 1266,
      "category": "Arts&Entertainment",
      "question": "What Seattle band saw its second album spawn record first-week U.S. sales of 950,000 copies in 1993?\n",
      "answers": [
        "pearl jam"
      ]
    },
    {
      "number": 1267,
      "category": "Arts&Entertainment",
      "question": "Who concentrated on the guitar full-time after an injury shortened his paratrooper career?\n",
      "answers": [
        "jimi hendrix",
        "hendrix"
      ]
    },
    {
      "number": 1268,
      "category": "People&Places",
      "question": "What European capital sandbagged air raid shelters in World War II?\n",
      "answers": [
        "london"
      ]
    },
    {
      "number": 1269,
      "category": "Sports&Leisure",
      "question": "Who was standing at home plate when he heard about the birth of his son, Mickey Elvin?\n",
      "answers": [
        "mickey mantle",
        "mantle"
      ]
    },
    {
      "number": 1270,
      "category": "Arts&Entertainment",
      "question": "What speed did Marty McFly have to reach to get his souped-up DeLorean car back to the future?\n",
      "answers": [
        "eighty-eight miles an hour",
        "88",
        "88mph",
        "88 mph"
      ]
    },
    {
      "number": 1271,
      "category": "World",
      "question": "What alien's voice was produced by electronically mixing an actress' voice with another actor's?\n",
      "answers": [
        "e.t.'s",
        "et",
        "e.t.",
        "e. t.",
        "e t"
      ]
    },
    {
      "number": 1272,
      "category": "Sports&Leisure",
      "question": "What Dallas Cowboys star always adds the number \"8\" after his name when signing autographs?\n",
      "answers": [
        "troy aikman",
        "aikman"
      ]
    },
    {
      "number": 1273,
      "category": "Arts&Entertainment",
      "question": "What was the question, according to Hamlet?\n",
      "answers": [
        "to be or not to be"
      ]
    },
    {
      "number": 1274,
      "category": "World",
      "question": "What airline tripled its business during the years it used a koala as a pitchman?\n",
      "answers": [
        "qantas"
      ]
    },
    {
      "number": 1275,
      "category": "People&Places",
      "question": "Name one of the three Southern gentlemen etched in Stone Mountain?\n",
      "answers": [
        "robert e. lee, jefferson davis, stonewall jackson",
        "robert",
        "stonewall",
        "jefferson"
      ]
    },
    {
      "number": 1276,
      "category": "Arts&Entertainment",
      "question": "Who shaved his head and lost 30 pounds for a role that won him an Oscar in 1994?\n",
      "answers": [
        "tom hanks",
        "hanks"
      ]
    },
    {
      "number": 1277,
      "category": "Science&Nature",
      "question": "Where have the ashes of \"Star Trek\" producer Gene Roddenberry gone that few ashes have gone before?\n",
      "answers": [
        "outer space",
        "space"
      ]
    },
    {
      "number": 1278,
      "category": "Science&Nature",
      "question": "What U.S. president did Albert Einstein write, warning it was possible to build an atomic bomb?\n",
      "answers": [
        "franklin d. roosevelt",
        "roosevelt"
      ]
    },
    {
      "number": 1279,
      "category": "Sports&Leisure",
      "question": "What does a red flag with a diagonal white stripe mean, when floating on the water?\n",
      "answers": [
        "diver down"
      ]
    },
    {
      "number": 1280,
      "category": "History",
      "question": "What did the sign read on the house of ill repute that televangelist Jimmy Swaggart frequented?\n",
      "answers": [
        "no refunds after 15 minutes"
      ]
    },
    {
      "number": 1281,
      "category": "People&Places",
      "question": "How many of General Custer's brothers bit the dust with him at Little Bighorn?\n",
      "answers": [
        "two",
        "2"
      ]
    },
    {
      "number": 1282,
      "category": "World",
      "question": "What city did Mr. Potato Head and his bride honeymoon in, according to Hasbro?\n",
      "answers": [
        "boise, idaho",
        "boise"
      ]
    },
    {
      "number": 1283,
      "category": "History",
      "question": "What method of propulsion was used to ferry \"durham\" boats - wind, oars or poles?\n",
      "answers": [
        "poles"
      ]
    },
    {
      "number": 1284,
      "category": "World",
      "question": "What did Ms. Gabor instruct reporters to call her, after she married Frederick von Anhalt?\n",
      "answers": [
        "princess zsa zsa"
      ]
    },
    {
      "number": 1285,
      "category": "People&Places",
      "question": "What song did Crosby, Stills, Nash and Young sing to commemorate a bloody 1970 campus scene?\n",
      "answers": [
        "ohio",
        "ohio ",
        " ohio"
      ]
    },
    {
      "number": 1286,
      "category": "Sports&Leisure",
      "question": "Whose cable to Italy's 1938 World Cup soccer team read: \"Win or die!\"?\n",
      "answers": [
        "benito mussolini's",
        "mussolini"
      ]
    },
    {
      "number": 1287,
      "category": "World",
      "question": "What kind of burger went for 5.5 rubles when McDonalds opened up on Red Square?\n",
      "answers": [
        "a bolshoi mak (big mac)",
        "bolshoi mak",
        "big mac"
      ]
    },
    {
      "number": 1288,
      "category": "Science&Nature",
      "question": "Where do geocarpic fruits ripen?\n",
      "answers": [
        "underground"
      ]
    },
    {
      "number": 1289,
      "category": "World",
      "question": "What Nobel Peace Prize winner shares his last name with ballet apparel?\n",
      "answers": [
        "desmond tutu",
        "tutu"
      ]
    },
    {
      "number": 1290,
      "category": "World",
      "question": "What show saw Bob Barker give losers a bottle of Jungle Gardenia perfume?\n",
      "answers": [
        "truth or consequences"
      ]
    },
    {
      "number": 1291,
      "category": "Arts&Entertainment",
      "question": "What corpulent comedian donated a pair of his pants to complete Charlie Chaplin's Little Tramp outfit?\n",
      "answers": [
        "fatty arbuckle",
        "arbuckle"
      ]
    },
    {
      "number": 1292,
      "category": "Sports&Leisure",
      "question": "What town did Babe Ruth begin and end his major league playing career in?\n",
      "answers": [
        "boston"
      ]
    },
    {
      "number": 1293,
      "category": "History",
      "question": "What button sold 20 million units in 1971?\n",
      "answers": [
        "the happy face button",
        "happy face"
      ]
    },
    {
      "number": 1294,
      "category": "People&Places",
      "question": "What U.S. state contains almost all of Yellowstone National Park?\n",
      "answers": [
        "wyoming"
      ]
    },
    {
      "number": 1295,
      "category": "People&Places",
      "question": "What assassin had a sliver of his thorax end up at Philadelphia's Mutter Museum?\n",
      "answers": [
        "john wilkes booth",
        "booth"
      ]
    },
    {
      "number": 1296,
      "category": "History",
      "question": "Who predicted in March, 1930, that Wall Street's crash \"will have passed during the next 60 days\"?\n",
      "answers": [
        "herbert hoover",
        "hoover"
      ]
    },
    {
      "number": 1297,
      "category": "Sports&Leisure",
      "question": "Who inspired Phillies catcher Darren Daulton to quip: \"It ain't over till the fat guy swings\"?\n",
      "answers": [
        "john kruk",
        "kruk",
        "kruk ",
        " kruk"
      ]
    },
    {
      "number": 1298,
      "category": "Science&Nature",
      "question": "What method of suicide is second most popular in the U.S.?\n",
      "answers": [
        "poison"
      ]
    },
    {
      "number": 1299,
      "category": "People&Places",
      "question": "What U.S. city saw only 15 of its 33 daily newspapers published in English by 1990?\n",
      "answers": [
        "new york"
      ]
    },
    {
      "number": 1300,
      "category": "Sports&Leisure",
      "question": "What banished ballplayer couldn't honestly comply with the request, \"Say it ain't so, Joe\"?\n",
      "answers": [
        "shoeless joe jackson",
        "joe jackson",
        "shoeless"
      ]
    },
    {
      "number": 1301,
      "category": "History",
      "question": "What were early 20th-century American feminists best known as?\n",
      "answers": [
        "suffragettes"
      ]
    },
    {
      "number": 1302,
      "category": "Arts&Entertainment",
      "question": "Name one of the three rock 'n' rollers who bit the dust when their plane plunged into a farm field in 1959?\n",
      "answers": [
        "the big bopper, buddy holly, ritchie valens \"",
        "big bopper",
        "holly",
        "valens"
      ]
    },
    {
      "number": 1303,
      "category": "Sports&Leisure",
      "question": "Who has scored against more than 140 goaltenders in his NHL career?\n",
      "answers": [
        "wayne gretzky",
        "gretzky",
        "gretsky"
      ]
    },
    {
      "number": 1304,
      "category": "Sports&Leisure",
      "question": "What golfer turned around and aimed a screamer just over the heads of the gallery in August, 1993?\n",
      "answers": [
        "john daly",
        "daly",
        "daly ",
        " daly"
      ]
    },
    {
      "number": 1305,
      "category": "Science&Nature",
      "question": "What's the most common affliction causing wrist pain in keyboard users?\n",
      "answers": [
        "carpal tunnel syndrome",
        "carpal tunnel"
      ]
    },
    {
      "number": 1306,
      "category": "People&Places",
      "question": "What ocean was Amelia Earhart crossing when she vanished in 1937?\n",
      "answers": [
        "pacific"
      ]
    },
    {
      "number": 1307,
      "category": "Science&Nature",
      "question": "Which dinosaur reasoned with the smallest brain relative to its size?\n",
      "answers": [
        "stegosaurus"
      ]
    },
    {
      "number": 1308,
      "category": "Arts&Entertainment",
      "question": "What animated TV character admonished: \"Don't have a cow, man\"?\n",
      "answers": [
        "bart simpson"
      ]
    },
    {
      "number": 1309,
      "category": "Science&Nature",
      "question": "Who is five times more likely to die in an accident - a right-handed or a left-handed person?\n",
      "answers": [
        "a left-handed person",
        "left hand",
        "left-hand"
      ]
    },
    {
      "number": 1310,
      "category": "People&Places",
      "question": "What river is responsible for the Grand Canyon?\n",
      "answers": [
        "colorado"
      ]
    },
    {
      "number": 1311,
      "category": "World",
      "question": "What actress' bouts of flatulence inspired friends to nickname her for a novelty store item?\n",
      "answers": [
        "whoopi goldberg's",
        "whoopi",
        "goldberg"
      ]
    },
    {
      "number": 1312,
      "category": "Arts&Entertainment",
      "question": "What Tony Orlando and Dawn ditty asked to rap on the ceiling?\n",
      "answers": [
        "knock three times"
      ]
    },
    {
      "number": 1313,
      "category": "Sports&Leisure",
      "question": "What figure skater was offered 35 movie deals during a single week in January, 1994?\n",
      "answers": [
        "nancy kerrigan",
        "kerrigan"
      ]
    },
    {
      "number": 1314,
      "category": "History",
      "question": "What substance do the Bill Of Rights 18th and 21st amendments reflect different views of?\n",
      "answers": [
        "alcohol"
      ]
    },
    {
      "number": 1315,
      "category": "History",
      "question": "Who shook hands with Yitzhak Rabin in 1993 for \"the handshake that shook the world\"?\n",
      "answers": [
        "yasser arafat",
        "arafat"
      ]
    },
    {
      "number": 1316,
      "category": "People&Places",
      "question": "What three-word phrase did James Brown exclaim when released from a Georgia work center in 1991?\n",
      "answers": [
        "i feel good"
      ]
    },
    {
      "number": 1317,
      "category": "Sports&Leisure",
      "question": "What name did basketballer Kareem Abdul-Jabbar answer to when he played for UCLA?\n",
      "answers": [
        "lew alcindor",
        "alcindor"
      ]
    },
    {
      "number": 1318,
      "category": "Sports&Leisure",
      "question": "Which clothing outfits joined Levi Strauss as ranking Nos. 1 and 2 in U.S. sales in 1993?\n",
      "answers": [
        "the gap",
        "gap ",
        " gap",
        "gap"
      ]
    },
    {
      "number": 1319,
      "category": "Science&Nature",
      "question": "What 1992 event created 214,000 new jobs in Florida?\n",
      "answers": [
        "hurricane andrew",
        "andrew"
      ]
    },
    {
      "number": 1320,
      "category": "World",
      "question": "Who was born Belle Silverman before becoming America's most popular coloratura soprano?\n",
      "answers": [
        "beverly sills",
        "sills"
      ]
    },
    {
      "number": 1321,
      "category": "History",
      "question": "Which presidential debater in 1960 had a right leg three-quarters of an inch longer than the left?\n",
      "answers": [
        "john f. kennedy",
        "kennedy"
      ]
    },
    {
      "number": 1322,
      "category": "Sports&Leisure",
      "question": "Who copped the NBA's Most Valuable Player and Rookie of the Year awards in 1960?\n",
      "answers": [
        "wilt chamberlain",
        "chamberlain"
      ]
    },
    {
      "number": 1323,
      "category": "People&Places",
      "question": "What Southern state saw Bonnie and Clyde have a final date with dozens of bullets?\n",
      "answers": [
        "louisiana"
      ]
    },
    {
      "number": 1324,
      "category": "World",
      "question": "What brand of cat food was hawked by Morris in TV spots? \n",
      "answers": [
        "9-lives",
        "9 lives",
        "nine lives"
      ]
    },
    {
      "number": 1325,
      "category": "Science&Nature",
      "question": "What surgical procedure temporarily relieved Kenny Rogers of his love handles?\n",
      "answers": [
        "liposuction"
      ]
    },
    {
      "number": 1326,
      "category": "Science&Nature",
      "question": "What sentence was given to the traders caught in China selling illegal animal hides for $24,000?\n",
      "answers": [
        "death"
      ]
    },
    {
      "number": 1327,
      "category": "People&Places",
      "question": "What kind of music is most closely associated with the country of Jamaica?\n",
      "answers": [
        "reggae"
      ]
    },
    {
      "number": 1328,
      "category": "Science&Nature",
      "question": "What covered one-fourth of the earth's land surface in 1950 but will cover only one-sixth by 2000?\n",
      "answers": [
        "forest"
      ]
    },
    {
      "number": 1329,
      "category": "Sports&Leisure",
      "question": "Who began life as an arch-villain in a computer software game and went on to her own TV series?\n",
      "answers": [
        "carmen sandiego",
        "carmen",
        "sandiego"
      ]
    },
    {
      "number": 1330,
      "category": "Arts&Entertainment",
      "question": "Who wielded the knife during the filming of the shower scene in \"Psycho\"?\n",
      "answers": [
        "alfred hitchcock",
        "hitchcock"
      ]
    },
    {
      "number": 1331,
      "category": "History",
      "question": "What Brit was less than thrilled to learn he'd won \"Mad\" magazine's Alfred E. Neuman Look-Alike Contest?\n",
      "answers": [
        "prince charles"
      ]
    },
    {
      "number": 1332,
      "category": "History",
      "question": "What federal office did Janet Reno become the first female to occupy?\n",
      "answers": [
        "u.s. attorney general",
        "attorney general"
      ]
    },
    {
      "number": 1333,
      "category": "World",
      "question": "What black screen star toiled as a mortuary cosmetologist before Hollywood beckoned?\n",
      "answers": [
        "whoopi goldberg",
        "goldberg"
      ]
    },
    {
      "number": 1334,
      "category": "World",
      "question": "What 1969 event saw stoned music buffs wallow in the mud and rain for three days?\n",
      "answers": [
        "woodstock"
      ]
    },
    {
      "number": 1335,
      "category": "World",
      "question": "What \"Cheers\" character did a general say \"we've had a lot of people like\" in the military?\n",
      "answers": [
        "cliff clavin",
        "clavin",
        "cliff"
      ]
    },
    {
      "number": 1336,
      "category": "Arts&Entertainment",
      "question": "What was the only part of the costume that Charlie Chaplin owned the day he created The Tramp?\n",
      "answers": [
        "cane",
        "cane ",
        " cane"
      ]
    },
    {
      "number": 1337,
      "category": "Sports&Leisure",
      "question": "What association saw admissions soar due to a 1979 Village People hit?\n",
      "answers": [
        "ymca",
        "ymca",
        "ymca ",
        " ymca"
      ]
    },
    {
      "number": 1338,
      "category": "People&Places",
      "question": "What's the only country to fly a square flag?\n",
      "answers": [
        "switzerland"
      ]
    },
    {
      "number": 1339,
      "category": "Arts&Entertainment",
      "question": "Which songstress prompted David Letterman to quip: \"I think she's trying to shock us\"?\n",
      "answers": [
        "madonna"
      ]
    },
    {
      "number": 1340,
      "category": "World",
      "question": "What Homeric warrior was still trying to get home 10 years after the Trojan Horse did the trick?\n",
      "answers": [
        "odysseus"
      ]
    },
    {
      "number": 1341,
      "category": "Arts&Entertainment",
      "question": "Other than Dick Sargent, what other Dick played the hubby of Elizabeth Montgomery's sitcom witch?\n",
      "answers": [
        "dick york",
        "york",
        " york",
        "york "
      ]
    },
    {
      "number": 1342,
      "category": "Arts&Entertainment",
      "question": "Who sang the No. 1 \"Grease\" tune, \"You're the One That I Want,\" in a duet with John Travolta?\n",
      "answers": [
        "olivia newton-john",
        "newton",
        "olivia"
      ]
    },
    {
      "number": 1343,
      "category": "World",
      "question": "What did publicist Chuck Jones admit to being sexually fascinated by, at a 1994 trial?\n",
      "answers": [
        "marla trump's shoes",
        "marla trump"
      ]
    },
    {
      "number": 1344,
      "category": "History",
      "question": "Which president died after a poultice of dried cantharide beetles was applied to his raw throat?\n",
      "answers": [
        "george washington",
        "washington"
      ]
    },
    {
      "number": 1345,
      "category": "History",
      "question": "Whose death on April 22, 1994, caused the American flag to be flown at half-staff for a month?\n",
      "answers": [
        "richard nixon's",
        "nixon"
      ]
    },
    {
      "number": 1346,
      "category": "People&Places",
      "question": "What feat was Amelia Earhart attempting when she disappeared in 1937?\n",
      "answers": [
        "flying around the world",
        "around the world"
      ]
    },
    {
      "number": 1347,
      "category": "World",
      "question": "What's the most popular day of the week for companies to announce layoffs?\n",
      "answers": [
        "monday"
      ]
    },
    {
      "number": 1348,
      "category": "History",
      "question": "What U.S. president survived two assassination attempts 17 days apart?\n",
      "answers": [
        "gerald ford",
        "ford",
        "ford ",
        " ford"
      ]
    },
    {
      "number": 1349,
      "category": "Science&Nature",
      "question": "What was Dr. Glenn Warden accused of drawing on the genitals of two patients during surgery in 1992?\n",
      "answers": [
        "happy faces",
        "happy face"
      ]
    },
    {
      "number": 1350,
      "category": "History",
      "question": "Who commanded the U.S.  forces that halted Erwin Rommel's Afrika Korps in Tunisia?\n",
      "answers": [
        "george patton",
        "patton"
      ]
    },
    {
      "number": 1351,
      "category": "Arts&Entertainment",
      "question": "What Hollywood legend was a strapping 13 pounds when he came out of the womb on May 26, 1907? \n",
      "answers": [
        "john wayne",
        "wayne"
      ]
    },
    {
      "number": 1352,
      "category": "Arts&Entertainment",
      "question": "What book was Randy Shilts typing the last page of when he found out he was HIV-positive?\n",
      "answers": [
        "and the band played on"
      ]
    },
    {
      "number": 1353,
      "category": "Sports&Leisure",
      "question": "What basketball player claimed in his autobiography that he bedded some 20,000 women?\n",
      "answers": [
        "wilt chamberlain",
        "chamberlain"
      ]
    },
    {
      "number": 1354,
      "category": "World",
      "question": "What pop star had almost decided to quit touring when a pal suggested he don a \"punk Amadeus\" look?\n",
      "answers": [
        "elton john",
        "elton"
      ]
    },
    {
      "number": 1355,
      "category": "World",
      "question": "Who once sighed: \"Playing with yarn is stupid, but cat owners expect it\"?\n",
      "answers": [
        "morris the cat",
        "morris"
      ]
    },
    {
      "number": 1356,
      "category": "Arts&Entertainment",
      "question": "What original Not Ready for Prime Time Player was born with the first name Cornelius?\n",
      "answers": [
        "chevy chase",
        "chase"
      ]
    },
    {
      "number": 1357,
      "category": "Arts&Entertainment",
      "question": "What TV hero opened every episode galloping to the strains of the William Tell Overture?\n",
      "answers": [
        "the lone ranger",
        "lone ranger"
      ]
    },
    {
      "number": 1358,
      "category": "Science&Nature",
      "question": "What does the koala eat exclusively?\n",
      "answers": [
        "eucalyptus"
      ]
    },
    {
      "number": 1359,
      "category": "Arts&Entertainment",
      "question": "What Orkan phrase did Mork utter to say goodbye?\n",
      "answers": [
        "nanoo nanoo"
      ]
    },
    {
      "number": 1360,
      "category": "People&Places",
      "question": "What's the Russian word for a walled citadel in the middle of a city?\n",
      "answers": [
        "kremlin"
      ]
    },
    {
      "number": 1361,
      "category": "World",
      "question": "What antacid mascot disappeared en route to the Philippines in 1971?\n",
      "answers": [
        "speedy alka-seltzer",
        "speedy"
      ]
    },
    {
      "number": 1362,
      "category": "History",
      "question": "What revolutionary proclaimed: \"Political power grows out of the barrel of a gun\"?\n",
      "answers": [
        "mao zedong",
        "zedong"
      ]
    },
    {
      "number": 1363,
      "category": "World",
      "question": "What famous national news anchor was a high school dropout?\n",
      "answers": [
        "peter jennings",
        "jennings"
      ]
    },
    {
      "number": 1364,
      "category": "Science&Nature",
      "question": "Who said Thomas Edison's invention of the phonograph was \"not of any commercial value\"?\n",
      "answers": [
        "thomas edison",
        "edison"
      ]
    },
    {
      "number": 1365,
      "category": "Sports&Leisure",
      "question": "What's the point total of a baccarat hand of five and five?\n",
      "answers": [
        "zero",
        "0"
      ]
    },
    {
      "number": 1366,
      "category": "People&Places",
      "question": "What did Ben Franklin prefer to the eagle as the U.S. national emblem?\n",
      "answers": [
        "the turkey",
        "turkey"
      ]
    },
    {
      "number": 1367,
      "category": "Sports&Leisure",
      "question": "What quarterback vomited on tight end Bob Adams in his first huddle with the Pittsburgh Steelers?\n",
      "answers": [
        "terry bradshaw",
        "bradshaw"
      ]
    },
    {
      "number": 1368,
      "category": "Sports&Leisure",
      "question": "What NBA team leased a custom-made jet in 1991 so their superstar could lie flat to soothe his back?\n",
      "answers": [
        "the boston celtics",
        "celtics"
      ]
    },
    {
      "number": 1369,
      "category": "World",
      "question": "What deficiency kept Elvis Presley out of his high school glee club?\n",
      "answers": [
        "his singing",
        "singing"
      ]
    },
    {
      "number": 1370,
      "category": "Sports&Leisure",
      "question": "What was the first soft drink to be slurped from a 12-ounce bottle, in 1934?\n",
      "answers": [
        "pepsi-cola",
        "pepsi"
      ]
    },
    {
      "number": 1371,
      "category": "People&Places",
      "question": "What holiday did Berkeley, California, propose changing to Indigenous Peoples Day in 1992?\n",
      "answers": [
        "columbus day",
        "columbus"
      ]
    },
    {
      "number": 1372,
      "category": "World",
      "question": "Whose brief stint as a talk show host earned him an \"Esquire\" \"Corpse of the Year\" award?\n",
      "answers": [
        "chevy chase's",
        "chevy",
        "chase"
      ]
    },
    {
      "number": 1373,
      "category": "History",
      "question": "Where was Howard Hunt's office, for which two Watergate burglars had the phone number?\n",
      "answers": [
        "the white house",
        "white house"
      ]
    },
    {
      "number": 1374,
      "category": "Science&Nature",
      "question": "Who beat John Glenn by a year as the first to orbit Earth, in 1961?\n",
      "answers": [
        "yuri gagarin",
        "gagarin"
      ]
    },
    {
      "number": 1375,
      "category": "World",
      "question": "What Egyptian's treasure trove shared headlines with Billy Beer and \"Star Wars\" in 1977?\n",
      "answers": [
        "king tutankhamen's",
        "king tut"
      ]
    },
    {
      "number": 1376,
      "category": "History",
      "question": "What U.S. president was once chased out of his house while his wife threw potatoes at him?\n",
      "answers": [
        "abraham lincoln",
        "lincoln"
      ]
    },
    {
      "number": 1377,
      "category": "Sports&Leisure",
      "question": "Who's the only NBA player to have scored 4,000 points in a season?\n",
      "answers": [
        "wilt chamberlain",
        "chamberlain"
      ]
    },
    {
      "number": 1378,
      "category": "Arts&Entertainment",
      "question": "What song brought Little Richard out of a bus station kitchen and into the limelight?\n",
      "answers": [
        "tutti frutti"
      ]
    },
    {
      "number": 1379,
      "category": "People&Places",
      "question": "What North African capital was built atop the ancient city of Memphis?\n",
      "answers": [
        "cairo"
      ]
    },
    {
      "number": 1380,
      "category": "Science&Nature",
      "question": "How many miles away did lightning strike, if you heard thunder five seconds after you saw it?\n",
      "answers": [
        "one",
        "1"
      ]
    },
    {
      "number": 1381,
      "category": "Arts&Entertainment",
      "question": "What does the winner get when cars are \"racing for pinks\"?\n",
      "answers": [
        "the loser's registration card",
        "registration",
        "ownership"
      ]
    },
    {
      "number": 1382,
      "category": "World",
      "question": "Who has hosted the most hours of TV network programming?\n",
      "answers": [
        "johnny carson",
        "carson"
      ]
    },
    {
      "number": 1383,
      "category": "Science&Nature",
      "question": "Who noted: \"It will make a big bang - a very big bang - but it is not a weapon which is useful in war\"?\n",
      "answers": [
        "j. robert oppenheimer",
        "oppenheimer"
      ]
    },
    {
      "number": 1384,
      "category": "Sports&Leisure",
      "question": "What inning is \"Take me out to the ballgame\" usually reserved for?\n",
      "answers": [
        "seventh",
        "7th",
        "7th ",
        " 7th"
      ]
    },
    {
      "number": 1385,
      "category": "History",
      "question": "What future South Dakota senator piloted a B-24 in 355 combat missions during World War II?\n",
      "answers": [
        "george mcgovern",
        "mcgovern"
      ]
    },
    {
      "number": 1386,
      "category": "History",
      "question": "What stoic British statesman smoked an  estimated 300,000 stogies?\n",
      "answers": [
        "winston churchill",
        "churchill"
      ]
    },
    {
      "number": 1387,
      "category": "Arts&Entertainment",
      "question": "What movie had Chevy Chase dreaming he was a member of the Los Angeles Lakers?\n",
      "answers": [
        "fletch"
      ]
    },
    {
      "number": 1388,
      "category": "History",
      "question": "Which presidential candidate promised in TV spots: \"I would not tell a lie\"?\n",
      "answers": [
        "jimmy carter",
        "carter"
      ]
    },
    {
      "number": 1389,
      "category": "Arts&Entertainment",
      "question": "Which hand does Rodin's \"Thinker\" rest his chin on?\n",
      "answers": [
        "right"
      ]
    },
    {
      "number": 1390,
      "category": "Arts&Entertainment",
      "question": "What actor got to play a game of \"strip croquet\"  with Winona Ryder in a 1989 movie? \n",
      "answers": [
        "christian slater",
        "slater"
      ]
    },
    {
      "number": 1391,
      "category": "Sports&Leisure",
      "question": "Who did Babe Ruth call \"the greatest first baseman of all time\"?\n",
      "answers": [
        "lou gehrig",
        "gehrig"
      ]
    },
    {
      "number": 1392,
      "category": "World",
      "question": "What TV title role required Sally Field to appear to be 90 pounds?\n",
      "answers": [
        "the flying nun",
        "flying nun"
      ]
    },
    {
      "number": 1393,
      "category": "Sports&Leisure",
      "question": "Who is baseball's all-time RBI leader, with 2,297?\n",
      "answers": [
        "hank aaron",
        "aaron",
        "arron"
      ]
    },
    {
      "number": 1394,
      "category": "Arts&Entertainment",
      "question": "Which of Bruce Lee's movies was the first film co-produced by the U.S. and Hong Kong?\n",
      "answers": [
        "enter the dragon"
      ]
    },
    {
      "number": 1395,
      "category": "World",
      "question": "What did the Susan B. Anthony dollar coin feel too much like, according to most Americans?\n",
      "answers": [
        "a quarter",
        "quarter"
      ]
    },
    {
      "number": 1396,
      "category": "Science&Nature",
      "question": "What 10-foot-long lizard can detect the smell of carrion from a distance of seven kilometers?\n",
      "answers": [
        "the komodo dragon",
        "komodo",
        "dragon"
      ]
    },
    {
      "number": 1397,
      "category": "World",
      "question": "What orange-haired persona did David Bowie adopt in the early 1970s?\n",
      "answers": [
        "ziggy stardust",
        "ziggy",
        "stardust"
      ]
    },
    {
      "number": 1398,
      "category": "People&Places",
      "question": "What country formally asked the U.S. to defend it in August, 1990?\n",
      "answers": [
        "saudi arabia",
        "saudi",
        "arabia"
      ]
    },
    {
      "number": 1399,
      "category": "People&Places",
      "question": "Where can you make it, if you can make it here, according to a Frank Sinatra hit?\n",
      "answers": [
        "anywhere"
      ]
    },
    {
      "number": 1400,
      "category": "World",
      "question": "What legendary recording artist was coined \"The King of Pop\" by actress Elizabeth Taylor?\n",
      "answers": [
        "michael jackson",
        "jackson"
      ]
    },
    {
      "number": 1401,
      "category": "Sports&Leisure",
      "question": "What country did Switzerland tie in the first World Cup soccer game held indoors?\n",
      "answers": [
        "the u.s.",
        "usa",
        " usa",
        "usa "
      ]
    },
    {
      "number": 1402,
      "category": "History",
      "question": "What Texas governor was wounded by a shot from the gun that killed John F. Kennedy?\n",
      "answers": [
        "john connally",
        "connally"
      ]
    },
    {
      "number": 1403,
      "category": "Arts&Entertainment",
      "question": "What 1986 blockbuster was the first home video to be preceded by a product ad?\n",
      "answers": [
        "top gun"
      ]
    },
    {
      "number": 1404,
      "category": "Science&Nature",
      "question": "What term, denoting the limiting of reproduction, was originally coined by Margaret Sanger in 1924?\n",
      "answers": [
        "birth control"
      ]
    },
    {
      "number": 1405,
      "category": "History",
      "question": "What U.S. war cost $33 million per day to fight, in 1990 dollars?\n",
      "answers": [
        "the civil war",
        "civil war"
      ]
    },
    {
      "number": 1406,
      "category": "Arts&Entertainment",
      "question": "What TV show did Joan Rivers, David Letterman, Jay Leno and Garry Shandling all guest-host?\n",
      "answers": [
        "the tonight show starring johnny carson",
        "tonight show"
      ]
    },
    {
      "number": 1407,
      "category": "People&Places",
      "question": "Which country's consumer tastes led to the creation of \"Oreo\" cookies without the cream in 1991?\n",
      "answers": [
        "japan"
      ]
    },
    {
      "number": 1408,
      "category": "Sports&Leisure",
      "question": "What country hosted the most-watched Winter Olympics of all time?\n",
      "answers": [
        "norway"
      ]
    },
    {
      "number": 1409,
      "category": "World",
      "question": "What famed canine declined to share the cover of \"TV Guide\" with other Hollywood dogs?\n",
      "answers": [
        "lassie"
      ]
    },
    {
      "number": 1410,
      "category": "Arts&Entertainment",
      "question": "What song by Eric Clapton was inspired by the death of his son?\n",
      "answers": [
        "tears in heaven"
      ]
    },
    {
      "number": 1411,
      "category": "Arts&Entertainment",
      "question": "What TV character made life perilous for racoons in 1955?\n",
      "answers": [
        "davy crockett",
        "crockett"
      ]
    },
    {
      "number": 1412,
      "category": "People&Places",
      "question": "What's the most popular Humphrey Bogart movie, set on the edge of an African desert?\n",
      "answers": [
        "casablanca"
      ]
    },
    {
      "number": 1413,
      "category": "Science&Nature",
      "question": "What explosive element made the zeppelin a perilous way to get around?\n",
      "answers": [
        "hydrogen"
      ]
    },
    {
      "number": 1414,
      "category": "History",
      "question": "What future president saw 22 of his slaves join British forces in the American Revolution?\n",
      "answers": [
        "thomas jefferson",
        "jefferson"
      ]
    },
    {
      "number": 1415,
      "category": "Science&Nature",
      "question": "What volcanic peak lost 3,773 feet in height in 1980?\n",
      "answers": [
        "mount st. helens",
        "helens"
      ]
    },
    {
      "number": 1416,
      "category": "World",
      "question": "What cult leader earns a dime every time Zooport Riot Gear sells a T-shirt featuring his likeness?\n",
      "answers": [
        "charles manson",
        "manson"
      ]
    },
    {
      "number": 1417,
      "category": "History",
      "question": "What line did President Reagan steal from Jack Dempsey after John Hinckley Jr. winged him?\n",
      "answers": [
        "honey, i forgot to duck\"",
        "forgot to duck"
      ]
    },
    {
      "number": 1418,
      "category": "World",
      "question": "What Tolstoy tome can be listened to on audiotape by anyone with 58 hours to spare?\n",
      "answers": [
        "war and peace"
      ]
    },
    {
      "number": 1419,
      "category": "Arts&Entertainment",
      "question": "Who made his movie debut playing a corpse in \"The Big Chill\"?\n",
      "answers": [
        "kevin costner",
        "costner"
      ]
    },
    {
      "number": 1420,
      "category": "World",
      "question": "What does the term \"dinks\" stand for, that could describe a professional couple without children?\n",
      "answers": [
        "double income, no kids\"",
        "double income",
        "no kids"
      ]
    },
    {
      "number": 1421,
      "category": "Sports&Leisure",
      "question": "What tennis star defected to the U.S. during the 1975 U.S. Open?\n",
      "answers": [
        "martina navratilova",
        "navratilova"
      ]
    },
    {
      "number": 1422,
      "category": "People&Places",
      "question": "Who'd just stuck his neck into a gillotine when he yelled: \"May my blood cement the happiness of France\"?\n",
      "answers": [
        "louis xvi",
        "louis"
      ]
    },
    {
      "number": 1423,
      "category": "People&Places",
      "question": "What American city hosted the 1939-40 and 1964-65 World's Fairs, both in the same location?\n",
      "answers": [
        "new york"
      ]
    },
    {
      "number": 1424,
      "category": "World",
      "question": "What comic strip canine's bride-to-be ran off with his best friend Spike?\n",
      "answers": [
        "snoopy's",
        "snoopy"
      ]
    },
    {
      "number": 1425,
      "category": "Arts&Entertainment",
      "question": "What 1923 volume made a rich man of Lebanese poet Khalil Gibran?\n",
      "answers": [
        "the prophet",
        "prophet"
      ]
    },
    {
      "number": 1426,
      "category": "Science&Nature",
      "question": "What psychiatric diagnosis would be meant if a shrink dubbed a patient a \"double-header\"?\n",
      "answers": [
        "schizophrenia"
      ]
    },
    {
      "number": 1427,
      "category": "Sports&Leisure",
      "question": "Who, according to P.T. Barnum, was killed by a train while trying to save a pint-sized star?\n",
      "answers": [
        "jumbo"
      ]
    },
    {
      "number": 1428,
      "category": "People&Places",
      "question": "Who spent three grueling summers de-tasseling corn before a modeling career beckoned?\n",
      "answers": [
        "cindy crawford",
        "crawford"
      ]
    },
    {
      "number": 1429,
      "category": "Science&Nature",
      "question": "What term for a computer error is said to have been coined when one caused a short circuit?\n",
      "answers": [
        "bug"
      ]
    },
    {
      "number": 1430,
      "category": "Sports&Leisure",
      "question": "What Mobile, Alabama, native skipped high school baseball to play in a semi-pro league at age 15?\n",
      "answers": [
        "hank aaron",
        "aaron",
        "arron"
      ]
    },
    {
      "number": 1431,
      "category": "Arts&Entertainment",
      "question": "Who did Mork want to kidnap when he first came down to earth?\n",
      "answers": [
        "richie cunningham",
        "cunningham"
      ]
    },
    {
      "number": 1432,
      "category": "Arts&Entertainment",
      "question": "What musical group challenged Volvo as Sweden's top moneymaker?\n",
      "answers": [
        "abba"
      ]
    },
    {
      "number": 1433,
      "category": "Science&Nature",
      "question": "What Australian carnivore shares its name with a Saturday morning cartoon creature?\n",
      "answers": [
        "the tasmanian devil",
        "tasmanian",
        "devil"
      ]
    },
    {
      "number": 1434,
      "category": "Sports&Leisure",
      "question": "Whose eight home run titles are the most ever won by a National League player?\n",
      "answers": [
        "mike schmidt's",
        "schmidt"
      ]
    },
    {
      "number": 1435,
      "category": "People&Places",
      "question": "What continent features the world's largest monolith, Ayers Rock?\n",
      "answers": [
        "australia"
      ]
    },
    {
      "number": 1436,
      "category": "Sports&Leisure",
      "question": "Other than Spades, which card suit boasts one-eyed jacks?\n",
      "answers": [
        "hearts"
      ]
    },
    {
      "number": 1437,
      "category": "History",
      "question": "What Shoshone woman was traded to a member of this expedition by her Mandan  captors?\n",
      "answers": [
        "sacajawea"
      ]
    },
    {
      "number": 1438,
      "category": "Science&Nature",
      "question": "What Russian is best remembered for getting a dog to salivate?\n",
      "answers": [
        "ivan pavlov",
        "pavlov"
      ]
    },
    {
      "number": 1439,
      "category": "World",
      "question": "What distinguished ABC-TV interviewer was called \"Dumbo\" by kids in school because he was all ears?\n",
      "answers": [
        "ted koppel",
        "koppel"
      ]
    },
    {
      "number": 1440,
      "category": "Science&Nature",
      "question": "What's the most expensive solid form of the element carbon?\n",
      "answers": [
        "diamond"
      ]
    },
    {
      "number": 1441,
      "category": "People&Places",
      "question": "What European Olympic city celebrated the 500th anniversary of the New World's discovery?\n",
      "answers": [
        "barcelona"
      ]
    },
    {
      "number": 1442,
      "category": "World",
      "question": "What religion did Tina Turner embrace in the mid-seventies?\n",
      "answers": [
        "buddhism"
      ]
    },
    {
      "number": 1443,
      "category": "Science&Nature",
      "question": "What was the \"garderobe\" built above and outside a castle wall used as?\n",
      "answers": [
        "a toilet",
        "toilet"
      ]
    },
    {
      "number": 1444,
      "category": "Sports&Leisure",
      "question": "How many points is the letter \"Z\" worth in the Polish-language version of Scrabble?\n",
      "answers": [
        "one",
        "1"
      ]
    },
    {
      "number": 1445,
      "category": "People&Places",
      "question": "What island is seen in the background of a Bay Area view?\n",
      "answers": [
        "alcatraz"
      ]
    },
    {
      "number": 1446,
      "category": "Sports&Leisure",
      "question": "What rotund gridiron gourmand was nicknamed for a refrigerator?\n",
      "answers": [
        "william perry",
        "perry"
      ]
    },
    {
      "number": 1447,
      "category": "Sports&Leisure",
      "question": "Who set a single-season scoring record in his rookie year in the NBA in 1959-60?\n",
      "answers": [
        "wilt chamberlain",
        "chamberlain"
      ]
    },
    {
      "number": 1448,
      "category": "Sports&Leisure",
      "question": "What decathlon star kept a hurdle in his living room to step across when he wasn't at track practice?\n",
      "answers": [
        "bruce jenner",
        "jenner"
      ]
    },
    {
      "number": 1449,
      "category": "Science&Nature",
      "question": "What condom brand shares its name with an ancient Egyptian?\n",
      "answers": [
        "ramses"
      ]
    },
    {
      "number": 1450,
      "category": "Science&Nature",
      "question": "What's the name of the cooking variety banana, which is starchy instead of sweet?\n",
      "answers": [
        "plantain"
      ]
    },
    {
      "number": 1451,
      "category": "People&Places",
      "question": "What rock column in Wyoming's Black Hills became the first U.S. National Monument in 1906?\n",
      "answers": [
        "devil's tower",
        "devil"
      ]
    },
    {
      "number": 1452,
      "category": "Science&Nature",
      "question": "What act by aliens is categorized as a close encounter of the fourth kind?\n",
      "answers": [
        "abduction"
      ]
    },
    {
      "number": 1453,
      "category": "Science&Nature",
      "question": "What lawyer defended John Scopes, teacher of Charles Darwin's theory of evolution, in 1925?\n",
      "answers": [
        "clarence darrow",
        "darrow"
      ]
    },
    {
      "number": 1454,
      "category": "History",
      "question": "What U.S. Chief Justice chaired the commission to investigate John F. Kennedy's assassination?\n",
      "answers": [
        "earl warren",
        "warren"
      ]
    },
    {
      "number": 1455,
      "category": "Science&Nature",
      "question": "What diagnostic procedure produced a view of a brain?\n",
      "answers": [
        "a cat scan",
        "cat",
        "cat ",
        " cat"
      ]
    },
    {
      "number": 1456,
      "category": "People&Places",
      "question": "What former Middle Eastern tourist mecca has been reduced to rubble by civil war and terrorism?\n",
      "answers": [
        "beirut"
      ]
    },
    {
      "number": 1457,
      "category": "Science&Nature",
      "question": "What ship made the first navigational use of the new S.O.S. signal, on April 14, 1912?\n",
      "answers": [
        "the \"titanic\"",
        "titanic"
      ]
    },
    {
      "number": 1458,
      "category": "World",
      "question": "What's the only type of vehicle an intoxicated person can legally operate on a Utah public highway?\n",
      "answers": [
        "a wheelbarrow",
        "wheelbarrow"
      ]
    },
    {
      "number": 1459,
      "category": "Science&Nature",
      "question": "What might a pulsar near Virgo have that only one other star in the universe is known to have?\n",
      "answers": [
        "planets",
        "planet"
      ]
    },
    {
      "number": 1460,
      "category": "World",
      "question": "What comedian communicated by honking a Bombay taxi horn?\n",
      "answers": [
        "harpo marx",
        "harpo"
      ]
    },
    {
      "number": 1461,
      "category": "Sports&Leisure",
      "question": "Who insisted the toilets be raised an inch before he'd begin a chess match with Boris Spassky?\n",
      "answers": [
        "bobby fischer",
        "fischer",
        "fisher"
      ]
    },
    {
      "number": 1462,
      "category": "Science&Nature",
      "question": "How many Earths could fit side by side on Jupiter's Great Red Spot?\n",
      "answers": [
        "three",
        "3"
      ]
    },
    {
      "number": 1463,
      "category": "Sports&Leisure",
      "question": "Whose 48 touchdown passes in 1984 were the most in one season in NFL history?\n",
      "answers": [
        "dan marino's",
        "marino"
      ]
    },
    {
      "number": 1464,
      "category": "Science&Nature",
      "question": "How many minutes does the Channel Tunnel train take to cover its 23.6-mile route?\n",
      "answers": [
        "35",
        "thirtyfive",
        "thirty five"
      ]
    },
    {
      "number": 1465,
      "category": "People&Places",
      "question": "What was the target of the worst terrorist attack on U.S. soil, in 1993?\n",
      "answers": [
        "the world trade center",
        "world trade"
      ]
    },
    {
      "number": 1466,
      "category": "History",
      "question": "What was Billy the Kid's original name first name?\n",
      "answers": [
        "henry"
      ]
    },
    {
      "number": 1467,
      "category": "Science&Nature",
      "question": "How many identical armadillos will regularly pop out of a single egg?\n",
      "answers": [
        "four",
        "4"
      ]
    },
    {
      "number": 1468,
      "category": "Sports&Leisure",
      "question": "What boat gave its name to the 100 Guineas Cup after winning it in 1851?\n",
      "answers": [
        "the \"america\"",
        "america"
      ]
    },
    {
      "number": 1469,
      "category": "People&Places",
      "question": "What city hosted the 1967 World's Fair that featured a geodesic dome?\n",
      "answers": [
        "montreal"
      ]
    },
    {
      "number": 1470,
      "category": "Science&Nature",
      "question": "What's not needed in the cultivation of a hydroponic plant?\n",
      "answers": [
        "soil"
      ]
    },
    {
      "number": 1471,
      "category": "Science&Nature",
      "question": "What was the name of the first reusable space shuttle?\n",
      "answers": [
        "columbia"
      ]
    },
    {
      "number": 1472,
      "category": "History",
      "question": "Whose last words while facing a firing squad on April 28, 1945, were: \"No ... No!\"?\n",
      "answers": [
        "benito mussolini's",
        "mussolini"
      ]
    },
    {
      "number": 1473,
      "category": "World",
      "question": "What corporate mascot kept on going and going and going and going?\n",
      "answers": [
        "the energizer bunny",
        "energizer"
      ]
    },
    {
      "number": 1474,
      "category": "Sports&Leisure",
      "question": "What did Muhammad Ali dub the tactic he used to knock out the heavyweight champ in Zaire?\n",
      "answers": [
        "rope-a-dope",
        "rope a dope"
      ]
    },
    {
      "number": 1475,
      "category": "World",
      "question": "What 1971 fashion craze inspired a new look for entertainers?\n",
      "answers": [
        "hot pants"
      ]
    },
    {
      "number": 1476,
      "category": "Sports&Leisure",
      "question": "Who did the PGA name Golfer of the Century in 1988?\n",
      "answers": [
        "jack nicklaus",
        "nicklaus"
      ]
    },
    {
      "number": 1477,
      "category": "History",
      "question": "What 20th-century era had jobless folks singing \"Brother, can you spare a dime?\"?\n",
      "answers": [
        "the great depression",
        "great depression"
      ]
    },
    {
      "number": 1478,
      "category": "Arts&Entertainment",
      "question": "What \"Grease\" gang rebuilt and drove a white sportster?\n",
      "answers": [
        "the t-birds",
        "tbirds",
        "t-birds"
      ]
    },
    {
      "number": 1479,
      "category": "Sports&Leisure",
      "question": "Who did Bobby Riggs challenge when he declared: \"Women play about 25 percent as good as men\"?\n",
      "answers": [
        "billie jean king",
        "billie jean"
      ]
    },
    {
      "number": 1480,
      "category": "Science&Nature",
      "question": "How many of every 10 unnamed species are thought to inhabit the tropical rain forests?\n",
      "answers": [
        "five",
        "5"
      ]
    },
    {
      "number": 1481,
      "category": "Sports&Leisure",
      "question": "What shoe outfit saw red when half of its hyped \"Dan vs. Dave\" decathlon duo missed an Olympic cut?\n",
      "answers": [
        "reebok"
      ]
    },
    {
      "number": 1482,
      "category": "World",
      "question": "What four-word phrase would Herve Villechaize no longer have to endure after he died at age 50?\n",
      "answers": [
        "the plane! the plane!",
        "the plane"
      ]
    },
    {
      "number": 1483,
      "category": "People&Places",
      "question": "What's the only independent state in the world whose permanent residents are all male?\n",
      "answers": [
        "vatican city",
        "vatican"
      ]
    },
    {
      "number": 1484,
      "category": "Arts&Entertainment",
      "question": "What's the most famous screen line attributed to Humphrey Bogart that he never uttered? \n",
      "answers": [
        "play it again, sam\"",
        "play it again"
      ]
    },
    {
      "number": 1485,
      "category": "Sports&Leisure",
      "question": "What 51-year-old granddad played in the All-Star Game during his 26th NHL season?\n",
      "answers": [
        "gordie howe",
        "howe",
        "howe ",
        " howe"
      ]
    },
    {
      "number": 1486,
      "category": "World",
      "question": "What name does Rob Reiner hate being called when recognized on the street?\n",
      "answers": [
        "meathead"
      ]
    },
    {
      "number": 1487,
      "category": "Arts&Entertainment",
      "question": "What character from \"M*A*S*H\" was a cross-dresser?\n",
      "answers": [
        "maxwell klinger",
        "klinger"
      ]
    },
    {
      "number": 1488,
      "category": "World",
      "question": "What late '50s group, best known for \"The Great Pretender,\" has sued almost 50 others for using their name?\n",
      "answers": [
        "the platters",
        "platters"
      ]
    },
    {
      "number": 1489,
      "category": "Sports&Leisure",
      "question": "What sportscaster wrote that he was \"painfully aware\" of the \"inane blathering of ex-jocks\"?\n",
      "answers": [
        "howard cosell",
        "cosell"
      ]
    },
    {
      "number": 1490,
      "category": "People&Places",
      "question": "What name is commonly used to denote the countries Norway, Sweden, and Finland?\n",
      "answers": [
        "scandinavia"
      ]
    },
    {
      "number": 1491,
      "category": "World",
      "question": "Who did an MCI poll determine to be the most admired mom in history?\n",
      "answers": [
        "the virgin mary",
        "virgin mary"
      ]
    },
    {
      "number": 1492,
      "category": "Arts&Entertainment",
      "question": "What did an actress' character have auctioned off in the movie \"Pretty Baby\"?\n",
      "answers": [
        "her virginity",
        "virginity"
      ]
    },
    {
      "number": 1493,
      "category": "Sports&Leisure",
      "question": "What one word did coach Paul William Bryant use to title his autobiography?\n",
      "answers": [
        "bear"
      ]
    },
    {
      "number": 1494,
      "category": "Sports&Leisure",
      "question": "What are Arnold Palmer's adoring fans collectively known as?\n",
      "answers": [
        "arnie's army",
        "arnies army"
      ]
    },
    {
      "number": 1495,
      "category": "History",
      "question": "What ancient Greek philosopher bit the dust after downing a drink infused with hemlock?\n",
      "answers": [
        "socrates"
      ]
    },
    {
      "number": 1496,
      "category": "Science&Nature",
      "question": "What did officials in Volusia County, Florida, give away 50,000 of during spring break in 1994?\n",
      "answers": [
        "condoms"
      ]
    },
    {
      "number": 1497,
      "category": "People&Places",
      "question": "Whose death certificate were hordes of fans buying copies of from Post Mortem Arts in Seattle for $25?\n",
      "answers": [
        "kurt cobain's",
        "cobain"
      ]
    },
    {
      "number": 1498,
      "category": "World",
      "question": "What TV talk show host got his nose broken when skinheads hit him with a chair during a show?\n",
      "answers": [
        "geraldo rivera",
        "geraldo",
        "rivera"
      ]
    },
    {
      "number": 1499,
      "category": "People&Places",
      "question": "Who banned smoking in the White House?\n",
      "answers": [
        "hillary clinton",
        "hillary"
      ]
    },
    {
      "number": 1500,
      "category": "Science&Nature",
      "question": "What trade halved the elephant population between 1981 and 1989?\n",
      "answers": [
        "the ivory trade",
        "ivory"
      ]
    },
    {
      "number": 1501,
      "category": "History",
      "question": "What Soviet rose to power after V.I. Lenin's death in 1924?\n",
      "answers": [
        "joseph stalin",
        "stalin"
      ]
    },
    {
      "number": 1502,
      "category": "Science&Nature",
      "question": "What word does the U.S. Weather Bureau define as a \"horizontal motion of the air past a given point\"?\n",
      "answers": [
        "wind"
      ]
    },
    {
      "number": 1503,
      "category": "History",
      "question": "What feisty feminist claimed at a 1992 rally that she was \"the mother of you all\"?\n",
      "answers": [
        "betty friedan",
        "friedan"
      ]
    },
    {
      "number": 1504,
      "category": "People&Places",
      "question": "What Spaniard designed the five-story horse in Chicago's Daley Plaza?\n",
      "answers": [
        "pablo picasso",
        "picasso"
      ]
    },
    {
      "number": 1505,
      "category": "Science&Nature",
      "question": "What's the fastest-selling drug of the 1990s to take you from anxiety to confidence?\n",
      "answers": [
        "prozac"
      ]
    },
    {
      "number": 1506,
      "category": "Science&Nature",
      "question": "What did F. Sherwood Rowland and Mario Molinas warn chloro- fluorocarbons were destroying, in 1974?\n",
      "answers": [
        "the ozone layer",
        "ozone layer"
      ]
    },
    {
      "number": 1507,
      "category": "World",
      "question": "What TV host ordered french fries at a Maine eatery just so she could stare longingly at them?\n",
      "answers": [
        "oprah winfrey",
        "oprah",
        "winfrey"
      ]
    },
    {
      "number": 1508,
      "category": "Science&Nature",
      "question": "What monstrous name did critics give to the first genetically engineered, FDA-approved tomato?\n",
      "answers": [
        "frankentomato"
      ]
    },
    {
      "number": 1509,
      "category": "Sports&Leisure",
      "question": "What chess piece combines the powers of the Rook and the Bishop?\n",
      "answers": [
        "the queen",
        "queen"
      ]
    },
    {
      "number": 1510,
      "category": "Sports&Leisure",
      "question": "Who smashed Daley Thompson's eight-year-old decathlon world record at a 1992 meet in France?\n",
      "answers": [
        "dan o'brien",
        "obrien",
        "o'brien"
      ]
    },
    {
      "number": 1511,
      "category": "World",
      "question": "What seven-foot-one graduate of the U.S. Naval Academy was deemed too tall for shipboard work?\n",
      "answers": [
        "david robinson",
        "robinson"
      ]
    },
    {
      "number": 1512,
      "category": "Arts&Entertainment",
      "question": "What film featured far-flung folk drawn to Devil's Tower in Wyoming?\n",
      "answers": [
        "close encounters of the third kind",
        "close encounter"
      ]
    },
    {
      "number": 1513,
      "category": "Sports&Leisure",
      "question": "What NBA star's surname translates to English as \"always being on top\"?\n",
      "answers": [
        "hakeem olajuwon's",
        "olajuwon"
      ]
    },
    {
      "number": 1514,
      "category": "Arts&Entertainment",
      "question": "What one-season wonder on the \"Saturday Night Live\" show played the Land Shark?\n",
      "answers": [
        "chevy chase",
        "chase"
      ]
    },
    {
      "number": 1515,
      "category": "World",
      "question": "Who won a coin toss with guitarist Tommy Allsup to secure a seat on Buddy Holly's final flight?\n",
      "answers": [
        "ritchie valens",
        "valens"
      ]
    },
    {
      "number": 1516,
      "category": "Sports&Leisure",
      "question": "What's the last railroad players encounter before passing Go?\n",
      "answers": [
        "short line"
      ]
    },
    {
      "number": 1517,
      "category": "Sports&Leisure",
      "question": "What 1994 sports gala opened with 70 percent of Americans not knowing the U.S. was hosting it?\n",
      "answers": [
        "the world cup of soccer",
        "soccer",
        "world cup"
      ]
    },
    {
      "number": 1518,
      "category": "Arts&Entertainment",
      "question": "Who is David Cassidy's half-brother?\n",
      "answers": [
        "shaun cassidy",
        "shawn",
        "sean",
        "shaun"
      ]
    },
    {
      "number": 1519,
      "category": "People&Places",
      "question": "How many people did Bernhard Goetz shoot in a New York subway in 1985?\n",
      "answers": [
        "four",
        "4"
      ]
    },
    {
      "number": 1520,
      "category": "Sports&Leisure",
      "question": "Who landed the blow that left Mike Tyson groping for his mouthpiece on February 10, 1990?\n",
      "answers": [
        "buster douglas",
        "douglas"
      ]
    },
    {
      "number": 1521,
      "category": "History",
      "question": "What 15th-century prince is thought to have been the inspiration for the classic \"Dracula\"?\n",
      "answers": [
        "vlad the impaler",
        "impaler",
        "vlad",
        "vlad ",
        " vlad"
      ]
    },
    {
      "number": 1522,
      "category": "Science&Nature",
      "question": "Who first found that landing an airplane was almost as tough as getting off the ground?\n",
      "answers": [
        "orville wright",
        "orville",
        "wright"
      ]
    },
    {
      "number": 1523,
      "category": "Science&Nature",
      "question": "What type of vehicle, eventually a best-seller, did Lee Iacocca's company launch in 1984?\n",
      "answers": [
        "the minivan",
        "minivan"
      ]
    },
    {
      "number": 1524,
      "category": "People&Places",
      "question": "What racist outfit visited Long Island's posh Hamptons in search of new members in 1992?\n",
      "answers": [
        "the ku klux klan",
        "kkk",
        " kkk",
        "kkk ",
        " klan"
      ]
    },
    {
      "number": 1525,
      "category": "World",
      "question": "What fish appeared in the first of a marathon run of TV commercials in 1961?\n",
      "answers": [
        "charlie the tuna",
        "charlie"
      ]
    },
    {
      "number": 1526,
      "category": "History",
      "question": "Which military man was nicknamed \"The Little Corporal\"?\n",
      "answers": [
        "napoleon"
      ]
    },
    {
      "number": 1527,
      "category": "People&Places",
      "question": "Who opined: \"Everybody has a right to pronounce foreign names as he chooses\"?\n",
      "answers": [
        "winston churchill",
        "churchill"
      ]
    },
    {
      "number": 1528,
      "category": "Arts&Entertainment",
      "question": "What rating did the film \"Flashdance\" earn, due in part to it's dances?\n",
      "answers": [
        "r",
        "r ",
        " r"
      ]
    },
    {
      "number": 1529,
      "category": "People&Places",
      "question": "How did Rasputin die, after being poisoned, shot, beaten, bound and thrown in the Neva River?\n",
      "answers": [
        "he drowned",
        "drown"
      ]
    },
    {
      "number": 1530,
      "category": "World",
      "question": "What type of jacket did the \"Top Gun\" actress help to make a major fashion statement?\n",
      "answers": [
        "the bomber jacket",
        "bomber"
      ]
    },
    {
      "number": 1531,
      "category": "Arts&Entertainment",
      "question": "Who discovered nothing but an empty bottle when he opened Al Capone's safe in a highly-rated TV special?\n",
      "answers": [
        "geraldo rivera",
        "rivera"
      ]
    },
    {
      "number": 1532,
      "category": "Arts&Entertainment",
      "question": "What city did Eddie Murphy serve to protect before events took him to Beverly Hills?\n",
      "answers": [
        "detroit"
      ]
    },
    {
      "number": 1533,
      "category": "Arts&Entertainment",
      "question": "What TV bigot did the Jeffersons live next to on Houser Street?\n",
      "answers": [
        "archie bunker",
        "bunker"
      ]
    },
    {
      "number": 1534,
      "category": "Arts&Entertainment",
      "question": "Who was the insect-eating assistant of Bram Stoker's classic wall-crawling blood-drinker?\n",
      "answers": [
        "renfield"
      ]
    },
    {
      "number": 1535,
      "category": "Science&Nature",
      "question": "What Elisha Otis invention is credited with making skyscrapers feasible? \n",
      "answers": [
        "the elevator",
        "elevator"
      ]
    },
    {
      "number": 1536,
      "category": "World",
      "question": "What hairstyle did Angela Davis help popularize?\n",
      "answers": [
        "the afro",
        "afro",
        "afro ",
        " afro"
      ]
    },
    {
      "number": 1537,
      "category": "Sports&Leisure",
      "question": "What did the press Wilt Chamberlain, although he preferred to be called \"The Big Dipper\"?\n",
      "answers": [
        "wilt the stilt",
        "stilt"
      ]
    },
    {
      "number": 1538,
      "category": "World",
      "question": "What state has a law that bans the serving or eating of apple pie without a slice of cheese on top?\n",
      "answers": [
        "wisconsin"
      ]
    },
    {
      "number": 1539,
      "category": "Sports&Leisure",
      "question": "What member of the 1919 Black Sox was banned from baseball despite a World Series-best .375 average?\n",
      "answers": [
        "shoeless joe jackson ",
        "jackson",
        "shoeless"
      ]
    },
    {
      "number": 1540,
      "category": "Arts&Entertainment",
      "question": "Who played the mystery woman trying to kill Blues Brother John Belushi?\n",
      "answers": [
        "carrie fisher",
        "fisher"
      ]
    },
    {
      "number": 1541,
      "category": "People&Places",
      "question": "What section of Los Angeles did these National Guardsmen patrol during this 1965 riot?\n",
      "answers": [
        "watts"
      ]
    },
    {
      "number": 1542,
      "category": "World",
      "question": "What David Lynch movie might some film buffs have attended expecting to see Bobby Vinton's life story?\n",
      "answers": [
        "blue velvet"
      ]
    },
    {
      "number": 1543,
      "category": "Arts&Entertainment",
      "question": "What songbird uttered the F-word 13 times as David Letterman's TV guest?\n",
      "answers": [
        "madonna"
      ]
    },
    {
      "number": 1544,
      "category": "World",
      "question": "Who left Genesis in 1975?\n",
      "answers": [
        "peter gabriel",
        "gabriel"
      ]
    },
    {
      "number": 1545,
      "category": "History",
      "question": "What commodity did Jay Gould and James Fisk corner here in 1869, sparking \"Black Friday\"?\n",
      "answers": [
        "gold",
        "gold ",
        " gold"
      ]
    },
    {
      "number": 1546,
      "category": "History",
      "question": "What Native American currency was the first market commodity to be \"cornered,\" in 1666?\n",
      "answers": [
        "wampum"
      ]
    },
    {
      "number": 1547,
      "category": "Science&Nature",
      "question": "What feathered creature is sometimes called the \"man-o'-war bird\"?\n",
      "answers": [
        "the frigate bird",
        "frigate"
      ]
    },
    {
      "number": 1548,
      "category": "History",
      "question": "What ship had lifeboat space for half of its passengers when it rammed an iceberg in 1912?\n",
      "answers": [
        "the \"titanic\"",
        "titanic"
      ]
    },
    {
      "number": 1549,
      "category": "History",
      "question": "What the name of the go-for-broke football play?\n",
      "answers": [
        "the hail mary",
        "hail mary"
      ]
    },
    {
      "number": 1550,
      "category": "Arts&Entertainment",
      "question": "What Pink Floyd album logged more than 20 years on the charts?\n",
      "answers": [
        "dark side of the moon"
      ]
    },
    {
      "number": 1551,
      "category": "Sports&Leisure",
      "question": "Who took two rounds to put Joe Frazier on dream street in winning the heavyweight title in 1973?\n",
      "answers": [
        "george foreman",
        "foreman"
      ]
    },
    {
      "number": 1552,
      "category": "Sports&Leisure",
      "question": "Which champion racketeer was taught tennis by a doting mother?\n",
      "answers": [
        "jimmy connors",
        "connors"
      ]
    },
    {
      "number": 1553,
      "category": "History",
      "question": "Whose 1923 death prompted Henry Cabot Lodge to gush: \"My God! That means Coolidge is president\"?\n",
      "answers": [
        "warren g. harding's",
        "harding"
      ]
    },
    {
      "number": 1554,
      "category": "Science&Nature",
      "question": "What did Nikita Khrushchev call the rocket NASA tried to launch two months after \"Sputnik\" made history?\n",
      "answers": [
        "kaputnik"
      ]
    },
    {
      "number": 1555,
      "category": "Sports&Leisure",
      "question": "What woeful team chose a player named Steve Chilcott in the 1966 free agent draft?\n",
      "answers": [
        "the new york mets",
        "new york met"
      ]
    },
    {
      "number": 1556,
      "category": "World",
      "question": "What's the derivation of the term \"woopie,\" which could be used to denote older affluent folks?\n",
      "answers": [
        "well-off older person",
        "well off older person"
      ]
    },
    {
      "number": 1557,
      "category": "People&Places",
      "question": "Who did Tenzing Norkay of Nepal help scale Mt. Everest on May 28, 1953?\n",
      "answers": [
        "edmund hillary",
        "hillary"
      ]
    },
    {
      "number": 1558,
      "category": "People&Places",
      "question": "What U.S. state has the highest percentage of people who hoof it to work?\n",
      "answers": [
        "alaska"
      ]
    },
    {
      "number": 1559,
      "category": "People&Places",
      "question": "What U.S. state boasts license plates emblazoned with a rodeo rider?\n",
      "answers": [
        "wyoming"
      ]
    },
    {
      "number": 1560,
      "category": "World",
      "question": "What Beatles album had just come out when John Lennon dressed up a Rolls-Royce?\n",
      "answers": [
        "sgt. pepper's lonely hearts club band",
        "pepper",
        "lonely hearts club"
      ]
    },
    {
      "number": 1561,
      "category": "Science&Nature",
      "question": "What does a television set have if it comes with \"PIP\"?\n",
      "answers": [
        "picture-in-picture",
        "picture in picture"
      ]
    },
    {
      "number": 1562,
      "category": "Arts&Entertainment",
      "question": "What color sail was the signal to the ailing Tristan that his love was coming to him?\n",
      "answers": [
        "white"
      ]
    },
    {
      "number": 1563,
      "category": "History",
      "question": "What war first gave Americans Uncle Sam on a poster, saying \"I Want You\"?\n",
      "answers": [
        "world war i",
        "world war 1",
        "ww1",
        "ww 1"
      ]
    },
    {
      "number": 1564,
      "category": "Science&Nature",
      "question": "How many natural satellites does Earth have?\n",
      "answers": [
        "one",
        "1"
      ]
    },
    {
      "number": 1565,
      "category": "Science&Nature",
      "question": "What member of Bill Clinton's administration first championed the information highway?\n",
      "answers": [
        "al gore",
        "gore",
        "gore ",
        " gore"
      ]
    },
    {
      "number": 1566,
      "category": "Science&Nature",
      "question": "What's the most abundant element on earth?\n",
      "answers": [
        "oxygen"
      ]
    },
    {
      "number": 1567,
      "category": "Science&Nature",
      "question": "What's the astronomical phenomenon where the moon partially covers the sun called?\n",
      "answers": [
        "an eclipse",
        "eclipse"
      ]
    },
    {
      "number": 1568,
      "category": "History",
      "question": "Whose crew is blamed for introducing smallpox to America and syphilis to Europe?\n",
      "answers": [
        "christopher columbus'",
        "columbus"
      ]
    },
    {
      "number": 1569,
      "category": "Science&Nature",
      "question": "What oceanic climatic condition is named after the Spanish term for \"the Christ Child\"?\n",
      "answers": [
        "el nino"
      ]
    },
    {
      "number": 1570,
      "category": "World",
      "question": "Who manned a mop as a janitor at a Miami radio station before mopping up as a TV talk show host?\n",
      "answers": [
        "larry king",
        "king",
        "king ",
        " king"
      ]
    },
    {
      "number": 1571,
      "category": "Arts&Entertainment",
      "question": "Which songstress prompted David Letterman to quip: \"I think she's trying to shock us\"?\n",
      "answers": [
        "madonna"
      ]
    },
    {
      "number": 1572,
      "category": "Science&Nature",
      "question": "What letter does the first four notes of Beethoven's Fifth Symphony denote in Morse code, making it a onetime favorite of the Allies?\n",
      "answers": [
        "v",
        "v ",
        " v"
      ]
    },
    {
      "number": 1573,
      "category": "People&Places",
      "question": "How many days of his three-year prison sentence did Iran-Contra felon Oliver North serve?\n",
      "answers": [
        "zero",
        "0"
      ]
    },
    {
      "number": 1574,
      "category": "Science&Nature",
      "question": "What product did you need if you marveled: \"I can't believe I ate the whole thing\"?\n",
      "answers": [
        "alka-seltzer",
        "alka seltzer"
      ]
    },
    {
      "number": 1575,
      "category": "Sports&Leisure",
      "question": "What Olympic skater worked off her community service sentence serving meals to Oregon's elderly?\n",
      "answers": [
        "tonya harding",
        "harding"
      ]
    },
    {
      "number": 1576,
      "category": "People&Places",
      "question": "What country did the U.S. and Britain blame for the 1988 plane bombing over Scotland?\n",
      "answers": [
        "libya"
      ]
    },
    {
      "number": 1577,
      "category": "World",
      "question": "Which lovely got the call for Revlon's first effort into TV infomercial shopping?\n",
      "answers": [
        "dolly parton",
        "parton"
      ]
    },
    {
      "number": 1578,
      "category": "World",
      "question": "What child star was the first person signed by MGM without having to take a screen or sound test?\n",
      "answers": [
        "judy garland",
        "garland"
      ]
    },
    {
      "number": 1579,
      "category": "Sports&Leisure",
      "question": "What Muhammad Ali tactical advice was inspired by insects?\n",
      "answers": [
        "float like a butterfly, sting like a bee",
        "float like a butterfly",
        "sting like a bee"
      ]
    },
    {
      "number": 1580,
      "category": "World",
      "question": "What was received on the second day of Christmas, according to the song?\n",
      "answers": [
        "two turtledoves",
        "turtle dove",
        "turtledove"
      ]
    },
    {
      "number": 1581,
      "category": "Arts&Entertainment",
      "question": "What Indiana Jones movie saw an actress make her mark on future hubby Steven Spielberg? \n",
      "answers": [
        "indiana jones and the temple of doom ",
        "temple of doom"
      ]
    },
    {
      "number": 1582,
      "category": "Arts&Entertainment",
      "question": "Who portrayed legendary boxer Jack Johnson in the movie \"The Great White Hope\"?\n",
      "answers": [
        "james earl jones",
        "james earl"
      ]
    },
    {
      "number": 1583,
      "category": "Science&Nature",
      "question": "Who did the Roman Catholic Church admit was right 350 years ago to suggest Earth revolved around the sun?\n",
      "answers": [
        "galileo"
      ]
    },
    {
      "number": 1584,
      "category": "Science&Nature",
      "question": "What's the term for chemicals that kill weeds and unwanted plants?\n",
      "answers": [
        "herbicides"
      ]
    },
    {
      "number": 1585,
      "category": "Science&Nature",
      "question": "Where do 12 percent of American teenagers lose their virginity?\n",
      "answers": [
        "in a car",
        "car",
        "car ",
        " car"
      ]
    },
    {
      "number": 1586,
      "category": "History",
      "question": "Which president almost died during birth, when his mother was given an overdose of chloroform?\n",
      "answers": [
        "franklin d. roosevelt",
        "roosevelt"
      ]
    },
    {
      "number": 1587,
      "category": "History",
      "question": "Who warned in 1917: \"This is only a preliminary step toward a similar revolution everywhere\"?\n",
      "answers": [
        "v.i. lenin",
        "lenin"
      ]
    },
    {
      "number": 1588,
      "category": "World",
      "question": "What English-language song is the most frequently sung?\n",
      "answers": [
        "happy birthday to you",
        "happy birthday"
      ]
    },
    {
      "number": 1589,
      "category": "People&Places",
      "question": "What skyscraper shares New York state's nickname?\n",
      "answers": [
        "the empire state building",
        "empire state"
      ]
    },
    {
      "number": 1590,
      "category": "Sports&Leisure",
      "question": "What city saw its streets become household names after the Monopoly game hit the jackpot?\n",
      "answers": [
        "atlantic city",
        "atlantic"
      ]
    },
    {
      "number": 1591,
      "category": "Science&Nature",
      "question": "What twosome made history at Kill Devil Hill, North Carolina, on December 17, 1903?\n",
      "answers": [
        "orville and wilbur wright",
        "wright"
      ]
    },
    {
      "number": 1592,
      "category": "Arts&Entertainment",
      "question": "What movie had Dan Ackroyd losing his job, home, fiancee, limo and butler?\n",
      "answers": [
        "trading places"
      ]
    },
    {
      "number": 1593,
      "category": "Sports&Leisure",
      "question": "What U.S. president asked for rules changes after 18 players died during the 1905 football season?\n",
      "answers": [
        "theodore roosevelt",
        "roosevelt"
      ]
    },
    {
      "number": 1594,
      "category": "People&Places",
      "question": "What president was so unpopular that he almost didn't get his name on a dam?\n",
      "answers": [
        "herbert hoover",
        "hoover"
      ]
    },
    {
      "number": 1595,
      "category": "World",
      "question": "What Disney animated feature required the drawing of 6,469,952 black spots?\n",
      "answers": [
        "101 dalmatians",
        "dalmatian",
        "dalmation"
      ]
    },
    {
      "number": 1596,
      "category": "Arts&Entertainment",
      "question": "What comedian's signature line was: \"This is another fine mess you've gotten us into\"?\n",
      "answers": [
        "oliver hardy's",
        "hardy"
      ]
    },
    {
      "number": 1597,
      "category": "World",
      "question": "What film puts an animated rodent to work, hauling buckets of water in his masters abode?\n",
      "answers": [
        "fantasia"
      ]
    },
    {
      "number": 1598,
      "category": "History",
      "question": "Who was the first living American to have his name appear on a postage stamp?\n",
      "answers": [
        "charles lindbergh",
        "lindbergh"
      ]
    },
    {
      "number": 1599,
      "category": "Sports&Leisure",
      "question": "Whose 565-foot home run over the wall at Griffith Stadium gave birth to the term \"tape measure shot\"?\n",
      "answers": [
        "mickey mantle's",
        "mantle"
      ]
    },
    {
      "number": 1600,
      "category": "History",
      "question": "What general's father was in charge of investigating the case of Charles Lindberg's kidnapped child?\n",
      "answers": [
        "norman schwarzkopf's",
        "schwarzkopf"
      ]
    },
    {
      "number": 1601,
      "category": "World",
      "question": "What cult leader was rejected at an audition for The Monkees for just not being cute enough?\n",
      "answers": [
        "charles manson",
        "manson"
      ]
    },
    {
      "number": 1602,
      "category": "Sports&Leisure",
      "question": "What did Chicago Cubs owner Phil Wrigley say, in 1935, was  \"just a fad, a passing fancy\"?\n",
      "answers": [
        "night baseball",
        "night game"
      ]
    },
    {
      "number": 1603,
      "category": "Arts&Entertainment",
      "question": "What Brady Buncher carped about being \"everybody's answer to a 'Trivial Pursuit' question\"?\n",
      "answers": [
        "eve plumb",
        "plumb"
      ]
    },
    {
      "number": 1604,
      "category": "Science&Nature",
      "question": "How many of every 10 boys born in the U.S. are circumcised?\n",
      "answers": [
        "seven",
        "7"
      ]
    },
    {
      "number": 1605,
      "category": "Arts&Entertainment",
      "question": "What bird inspired Edgar Allen Poe to write a poem?\n",
      "answers": [
        "the raven",
        "raven"
      ]
    },
    {
      "number": 1606,
      "category": "History",
      "question": "Who surrendered on April 9, 1865, without Jefferson Davis' approval?\n",
      "answers": [
        "robert e. lee",
        "robert"
      ]
    },
    {
      "number": 1607,
      "category": "World",
      "question": "What top-selling Christmas single of 1985 was not the least bit amusing to many senior citizens?\n",
      "answers": [
        "grandma got run over by a reindeer",
        "got run over"
      ]
    },
    {
      "number": 1608,
      "category": "People&Places",
      "question": "How many cars does the average Kuwaiti driver have registered?\n",
      "answers": [
        "three",
        "3"
      ]
    },
    {
      "number": 1609,
      "category": "World",
      "question": "What do some stock market wizards call a \"007\"? \n",
      "answers": [
        "a bond",
        "bond",
        "bond ",
        " bond"
      ]
    },
    {
      "number": 1610,
      "category": "World",
      "question": "1 Jan of what year will mark the first day of the 21st century?\n",
      "answers": [
        "2001"
      ]
    },
    {
      "number": 1611,
      "category": "People&Places",
      "question": "What general's estate did a vengeful Congress confiscate as the site for a cemetery?\n",
      "answers": [
        "robert e. lee's",
        "robert",
        "lee"
      ]
    },
    {
      "number": 1612,
      "category": "History",
      "question": "What woman did Hitler hire to glamorize scenes in films such as \"Triumph of the Will\"?\n",
      "answers": [
        "leni riefenstahl",
        "riefenstahl"
      ]
    },
    {
      "number": 1613,
      "category": "Science&Nature",
      "question": "What's defined as \"species not definitely located in the wild during the past 50 years\"?\n",
      "answers": [
        "endangered species",
        "endangered"
      ]
    },
    {
      "number": 1614,
      "category": "People&Places",
      "question": "Who might never have found the Pacific Ocean without the help of a Native American?\n",
      "answers": [
        "meriwether lewis and william clark",
        "lewis",
        "clark"
      ]
    },
    {
      "number": 1615,
      "category": "People&Places",
      "question": "What autonomous region would the Dalai Lama like to call home?\n",
      "answers": [
        "tibet"
      ]
    },
    {
      "number": 1616,
      "category": "People&Places",
      "question": "What late female painter's art, drawn from desert scenes fueled calendar sales?\n",
      "answers": [
        "georgia o'keeffe's",
        "keeffe",
        "keefe",
        "keffe"
      ]
    },
    {
      "number": 1617,
      "category": "People&Places",
      "question": "What did Supreme Court nominee Douglas Ginsberg describe as a \"mistake\" he made as a Harvard prof?\n",
      "answers": [
        "smoking marijuana",
        "smoking pot"
      ]
    },
    {
      "number": 1618,
      "category": "History",
      "question": "What assassin's low self-esteem is often attributed to his undiagnosed dyslexia?\n",
      "answers": [
        "lee harvey oswald's",
        "oswald"
      ]
    },
    {
      "number": 1619,
      "category": "History",
      "question": "How many aircraft carriers were in Pearl Harbor when the Japanese attack occurred?\n",
      "answers": [
        "zero",
        "0"
      ]
    },
    {
      "number": 1620,
      "category": "Science&Nature",
      "question": "What fixture in the White House was called a \"Quincy,\" after the president at the time of its installation?\n",
      "answers": [
        "the toilet",
        "toilet"
      ]
    },
    {
      "number": 1621,
      "category": "Sports&Leisure",
      "question": "What kind of sportsman is endangered by \"nitrogen narcosis\" at a depth of more than 130 feet?\n",
      "answers": [
        "a scuba diver",
        "scuba diver"
      ]
    },
    {
      "number": 1622,
      "category": "Sports&Leisure",
      "question": "What New York Yankees captain died when he crashed his plane short of the runway?\n",
      "answers": [
        "thurman munson",
        "munson"
      ]
    },
    {
      "number": 1623,
      "category": "Sports&Leisure",
      "question": "Who said, \"You don't know what a weight it was off my shoulders, a tremendous weight,\" on April 8, 1974?\n",
      "answers": [
        "hank aaron",
        "aaron"
      ]
    },
    {
      "number": 1624,
      "category": "Sports&Leisure",
      "question": "Who arrived on court for a 1973 tennis match in a Chinese rickshaw?\n",
      "answers": [
        "bobby riggs",
        "riggs"
      ]
    },
    {
      "number": 1625,
      "category": "Science&Nature",
      "question": "Where was a meal of bacon squares, cookies, peaches, fruit drink and coffee enjoyed on July 20, 1969?\n",
      "answers": [
        "the moon",
        "moon"
      ]
    },
    {
      "number": 1626,
      "category": "Arts&Entertainment",
      "question": "What character did John Belushi portray at his \"Saturday Night Live\" audition?\n",
      "answers": [
        "a samurai warrior",
        "samurai",
        "samerai",
        "sameri"
      ]
    },
    {
      "number": 1627,
      "category": "World",
      "question": "What's the name of the \"Citizen Kane\" sled owned by Steven Spielberg?\n",
      "answers": [
        "rosebud"
      ]
    },
    {
      "number": 1628,
      "category": "History",
      "question": "What country declared war on Japan between the bombings of Hiroshima and Nagasaki?\n",
      "answers": [
        "the soviet union",
        "russia",
        "ussr",
        "soviet union"
      ]
    },
    {
      "number": 1629,
      "category": "History",
      "question": "What nation was horrified to see its state dinner disagree with the US president in 1992?\n",
      "answers": [
        "japan"
      ]
    },
    {
      "number": 1630,
      "category": "People&Places",
      "question": "What did David Koresh aptly name his ranch before it went up in flames?\n",
      "answers": [
        "ranch apocalypse",
        "apocolipse",
        "apocolypse"
      ]
    },
    {
      "number": 1631,
      "category": "Arts&Entertainment",
      "question": "What showman unleashed a pint-sized performer on the world?\n",
      "answers": [
        "p.t. barnum",
        "barnum"
      ]
    },
    {
      "number": 1632,
      "category": "Science&Nature",
      "question": "What fungus are dogs taught to sniff out in the Perigord district of France?\n",
      "answers": [
        "truffles",
        "trufles"
      ]
    },
    {
      "number": 1633,
      "category": "People&Places",
      "question": "What British naval hero stands atop a column in Trafalgar Square?\n",
      "answers": [
        "horatio nelson",
        "lord nelson",
        "nelson"
      ]
    },
    {
      "number": 1634,
      "category": "Science&Nature",
      "question": "What's the term for the nest of eagles to which they return every year?\n",
      "answers": [
        "aerie",
        "aiery",
        "airery",
        "arie",
        "airey"
      ]
    },
    {
      "number": 1635,
      "category": "History",
      "question": "Which of the signers of the Declaration of Independance is believed to have been the richest man in the 13 colonies?\n",
      "answers": [
        "john hancock",
        "hancock"
      ]
    },
    {
      "number": 1636,
      "category": "Arts&Entertainment",
      "question": "What game show got in gear after Johnny Olsen yelled \"Come on down\"?\n",
      "answers": [
        "the price is right",
        "price is right"
      ]
    },
    {
      "number": 1637,
      "category": "Arts&Entertainment",
      "question": "What TV show opened: \"Once upon a time there were three girls who went to the police academy\"?\n",
      "answers": [
        "charlie's angels",
        "charlies angels"
      ]
    },
    {
      "number": 1638,
      "category": "Sports&Leisure",
      "question": "What visual condition prevents people from seeing greens properly?\n",
      "answers": [
        "color blindness",
        "color blind",
        "colorblind"
      ]
    },
    {
      "number": 1639,
      "category": "Sports&Leisure",
      "question": "Who broke Lou Brock's career steals record on May 1, 1991?\n",
      "answers": [
        "rickey henderson",
        "henderson",
        "hendersen"
      ]
    },
    {
      "number": 1640,
      "category": "Arts&Entertainment",
      "question": "What performer pocketed the most cash at 1969's Woodstock?\n",
      "answers": [
        "jimi hendrix",
        "hendrix",
        "jimi"
      ]
    },
    {
      "number": 1641,
      "category": "People&Places",
      "question": "What city's opera lovers first flocked to this facility in 1973?\n",
      "answers": [
        "sydney's",
        "sydney",
        "sidney"
      ]
    },
    {
      "number": 1642,
      "category": "World",
      "question": "What boat took Gary Hart and Donna Rice on their infamous excursion to Bimini?\n",
      "answers": [
        "monkey business"
      ]
    },
    {
      "number": 1643,
      "category": "World",
      "question": "Who was the first president to have a brother with a beer named for him?\n",
      "answers": [
        "jimmy carter",
        "carter"
      ]
    },
    {
      "number": 1644,
      "category": "Sports&Leisure",
      "question": "What apt weapon was used in an 1843 duel between two Frenchmen who had argued over billiards?\n",
      "answers": [
        "billiard balls",
        "pool balls"
      ]
    },
    {
      "number": 1645,
      "category": "World",
      "question": "What color was a mood ring supposed to turn if its wearer were depressed?\n",
      "answers": [
        "black"
      ]
    },
    {
      "number": 1646,
      "category": "History",
      "question": "Who was the first recipient of a full, free and absolute pardon given by the 38th president of the USA?\"\n",
      "answers": [
        "richard nixon",
        "nixon",
        "dick nixon"
      ]
    },
    {
      "number": 1647,
      "category": "People&Places",
      "question": "What one-time federal prison got its name from the Spanish word for pelican?\n",
      "answers": [
        "alcatraz"
      ]
    },
    {
      "number": 1648,
      "category": "Arts&Entertainment",
      "question": "What was the sequel to the book \"Alice In Wonderland\"?\n",
      "answers": [
        "through the looking glass"
      ]
    },
    {
      "number": 1649,
      "category": "World",
      "question": "What president-to-be wore one black and one brown shoe on his wedding day?\n",
      "answers": [
        "gerald ford",
        "ford"
      ]
    },
    {
      "number": 1650,
      "category": "Arts&Entertainment",
      "question": "What hit movie spent 10 percent of its budget for the rights to 41 golden oldies?\n",
      "answers": [
        "american graffiti",
        "american grafitti"
      ]
    },
    {
      "number": 1651,
      "category": "Arts&Entertainment",
      "question": "What coin did Patrick Swayze use to perform magical mind-over-matter feats in the movie \"Ghost\"?\n",
      "answers": [
        "a penny",
        "one cent",
        "penny"
      ]
    },
    {
      "number": 1652,
      "category": "Arts&Entertainment",
      "question": "What movie sees Tom Cruise sound off: \"I feel the need, the need for speed\"?\n",
      "answers": [
        "top gun"
      ]
    },
    {
      "number": 1653,
      "category": "Sports&Leisure",
      "question": "Who's the only American to win, defend and lose a world heavyweight title outside the U.S.?\n",
      "answers": [
        "george foreman",
        "foreman",
        "forman"
      ]
    },
    {
      "number": 1654,
      "category": "Science&Nature",
      "question": "What software mogul planned to put over 850 of these in space to pave the information superhighway?\n",
      "answers": [
        "bill gates"
      ]
    },
    {
      "number": 1655,
      "category": "World",
      "question": "What four-word phrase sums up the quality of a well-known fried chicken franchise's fare?\n",
      "answers": [
        "it's finger-lickin' good!",
        "finger licking",
        "finger lickin"
      ]
    },
    {
      "number": 1656,
      "category": "Sports&Leisure",
      "question": "Who strong-armed his way to a record 109 men's tennis tournament wins?\n",
      "answers": [
        "jimmy connors",
        "connors"
      ]
    },
    {
      "number": 1657,
      "category": "Arts&Entertainment",
      "question": "What two sitcoms did Ronnie Howard co-star in before becoming a movie director?\n",
      "answers": [
        "the andy griffith show and happy days",
        "andy griffith an happy days",
        "andy grifith and happy days",
        "andy griffith and happy days"
      ]
    },
    {
      "number": 1658,
      "category": "World",
      "question": "What pop song can be heard at the Amsterdam museum that features this artist's paintings?\n",
      "answers": [
        "vincent"
      ]
    },
    {
      "number": 1659,
      "category": "Sports&Leisure",
      "question": "Who surpassed George Halas to become the NFL's all-time winningest coach?\n",
      "answers": [
        "don shula",
        "shula"
      ]
    },
    {
      "number": 1660,
      "category": "History",
      "question": "Who had the higher approval rating after a year in office - Ronald Reagan or Bill Clinton?\n",
      "answers": [
        "bill clinton",
        "clinton"
      ]
    },
    {
      "number": 1661,
      "category": "Arts&Entertainment",
      "question": "What mythological hero beheaded the Gorgon, Medusa?\n",
      "answers": [
        "perseus"
      ]
    },
    {
      "number": 1662,
      "category": "World",
      "question": "What actress portrayed a 'spiritual go-between' in \"Ghost\"?\n",
      "answers": [
        "whoopi goldberg",
        "whoopi",
        "goldberg"
      ]
    },
    {
      "number": 1663,
      "category": "History",
      "question": "What was Lady Di's maiden name before she kissed her prince?\n",
      "answers": [
        "spencer"
      ]
    },
    {
      "number": 1664,
      "category": "World",
      "question": "What Russian's corpse was washed twice a week in 1993?\n",
      "answers": [
        "v.i. lenin's",
        "lenin"
      ]
    },
    {
      "number": 1665,
      "category": "Arts&Entertainment",
      "question": "What late \"Theatre of Blood\" horror actor left behind a $5 million art collection?\n",
      "answers": [
        "vincent price",
        "price"
      ]
    },
    {
      "number": 1666,
      "category": "Sports&Leisure",
      "question": "Who played and won more singles matches than any other pro tennis player in history?\n",
      "answers": [
        "martina navratilova",
        "martina",
        "navratilova"
      ]
    },
    {
      "number": 1667,
      "category": "Sports&Leisure",
      "question": "What interrupted a World Series showdown between Oakland and San Francisco for 11 days in 1989?\n",
      "answers": [
        "an earthquake",
        "earthquake"
      ]
    },
    {
      "number": 1668,
      "category": "World",
      "question": "What condiment was heralded in 19th-century ads reading \"57 Varieties\"?\n",
      "answers": [
        "heinz ketchup",
        "ketchup"
      ]
    },
    {
      "number": 1669,
      "category": "World",
      "question": "Whose son Phil starred when \"Mission: Impossible\" returned to TV in 1988?\n",
      "answers": [
        "greg morris'",
        "greg morris"
      ]
    },
    {
      "number": 1670,
      "category": "Sports&Leisure",
      "question": "Who did the Los Angeles Dodgers finally beat in a third trip to the World Series?\n",
      "answers": [
        "the new york yankees",
        "yankees"
      ]
    },
    {
      "number": 1671,
      "category": "History",
      "question": "What president surprised reporters by showing off the scar from his gall bladder surgery?\n",
      "answers": [
        "lyndon b. johnson",
        "lyndon",
        "johnson"
      ]
    },
    {
      "number": 1672,
      "category": "Sports&Leisure",
      "question": "What running back did Packers' tackle, Henry Jordan, say was invisible when he ran with the ball?\n",
      "answers": [
        "gale sayers",
        "sayers"
      ]
    },
    {
      "number": 1673,
      "category": "Sports&Leisure",
      "question": "What golfer was famous for hitching up his pants while making one of his final round charges?\n",
      "answers": [
        "arnold palmer",
        "palmer"
      ]
    },
    {
      "number": 1674,
      "category": "Arts&Entertainment",
      "question": "What movie resulted in Arnold Schwarzenegger reportedly receiving a $14 million Gulfstream jet?\n",
      "answers": [
        "terminator 2: judgment day",
        "terminator 2"
      ]
    },
    {
      "number": 1675,
      "category": "World",
      "question": "What 1974 fad had adults dashing through public places naked?\n",
      "answers": [
        "streaking"
      ]
    },
    {
      "number": 1676,
      "category": "History",
      "question": "What First Lady thought she was doing White House guests a great favor by serving them peanut soup?\n",
      "answers": [
        "rosalynn carter",
        "carter"
      ]
    },
    {
      "number": 1677,
      "category": "People&Places",
      "question": "What country saw the Battle of the Bulge's \"battered bastards of Bastogne\" make a stand?\n",
      "answers": [
        "belgium"
      ]
    },
    {
      "number": 1678,
      "category": "History",
      "question": "Who did Fawn Hall describe as \"every secretary's dream of a boss\"?\n",
      "answers": [
        "oliver north"
      ]
    },
    {
      "number": 1679,
      "category": "Science&Nature",
      "question": "What would be most likely to rock your spacecraft between Mars and Jupiter?\n",
      "answers": [
        "asteroids"
      ]
    },
    {
      "number": 1680,
      "category": "Arts&Entertainment",
      "question": "What prop did Will Rogers, the \"cowboy philosopher\", use to rope in audiences at the Ziegfeld Follies?\n",
      "answers": [
        "a lasso",
        "lasso"
      ]
    },
    {
      "number": 1681,
      "category": "Science&Nature",
      "question": "What five-letter word denotes the smallest picture element displayed on a computer screen?\n",
      "answers": [
        "pixel"
      ]
    },
    {
      "number": 1682,
      "category": "Science&Nature",
      "question": "What was the nationality of the first test tube baby?\n",
      "answers": [
        "british",
        "english"
      ]
    },
    {
      "number": 1683,
      "category": "Sports&Leisure",
      "question": "Who's the only National League manager to win pennants in his first two seasons?\n",
      "answers": [
        "tommy lasorda",
        "lasorda",
        "la sorda"
      ]
    },
    {
      "number": 1684,
      "category": "Science&Nature",
      "question": "How many times greater is the magnitude of a 5.0 earthquake than one of 2.0 on the Richter scale?\n",
      "answers": [
        "1000",
        "thousand"
      ]
    },
    {
      "number": 1685,
      "category": "World",
      "question": "What did Henry Ford offer Model T owners after 1915 sales exceeded projections?\n",
      "answers": [
        "a rebate",
        "rebate"
      ]
    },
    {
      "number": 1686,
      "category": "People&Places",
      "question": "Who was the first U.S. president to take a stroll on the Great Wall of China?\n",
      "answers": [
        "richard nixon",
        "nixon"
      ]
    },
    {
      "number": 1687,
      "category": "Sports&Leisure",
      "question": "What pastime was banned in Scotland in 1457 because it took too much time away from archery practice?\n",
      "answers": [
        "golf"
      ]
    },
    {
      "number": 1688,
      "category": "World",
      "question": "Which Marx brother, caught by his wife with a chorus girl, said: \"I was whispering in her mouth\"?\n",
      "answers": [
        "chico"
      ]
    },
    {
      "number": 1689,
      "category": "Sports&Leisure",
      "question": "What golfer hyped Hertz rental cars in TV spots?\n",
      "answers": [
        "arnold palmer",
        "palmer"
      ]
    },
    {
      "number": 1690,
      "category": "Sports&Leisure",
      "question": "Who starred in five World Series during his tenures with the Oakland A's and the New York Yankees?\n",
      "answers": [
        "reggie jackson",
        "jackson"
      ]
    },
    {
      "number": 1691,
      "category": "Sports&Leisure",
      "question": "Who was the first diver to receive perfect scores from all seven judges at an international event?\n",
      "answers": [
        "greg louganis",
        "louganis",
        "luganis"
      ]
    },
    {
      "number": 1692,
      "category": "Sports&Leisure",
      "question": "What quarterback, while serving in Vietnam, threw passes on a makeshift field in Chu Lai?\n",
      "answers": [
        "roger staubach",
        "staubach",
        "staback",
        "staubuck",
        "starbuck"
      ]
    },
    {
      "number": 1693,
      "category": "History",
      "question": "What war saw the future Confederate president head a Mississippi regiment in 1846?\n",
      "answers": [
        "the mexican war",
        "mexican"
      ]
    },
    {
      "number": 1694,
      "category": "Sports&Leisure",
      "question": "What Sega video game machine system shares its name with a band once fronted by Phil Collins?\n",
      "answers": [
        "genesis"
      ]
    },
    {
      "number": 1695,
      "category": "Science&Nature",
      "question": "How many bolts of lightning strike the U.S. every day - 2,500, 25,000 or 250,000?\n",
      "answers": [
        "250,000"
      ]
    },
    {
      "number": 1696,
      "category": "World",
      "question": "What former U.S. president was issued Medicare Card Number 1 in 1965?\n",
      "answers": [
        "harry truman",
        "truman"
      ]
    },
    {
      "number": 1697,
      "category": "Arts&Entertainment",
      "question": "Who got to give Liz Taylor a spanking in \"Father of the Bride\"?\n",
      "answers": [
        "spencer tracy",
        "tracy",
        "tracey"
      ]
    },
    {
      "number": 1698,
      "category": "Arts&Entertainment",
      "question": "Who hit No. 1 with a song after her release from a hospital for spinal surgery?\n",
      "answers": [
        "gloria gaynor",
        "gaynor",
        "ganor"
      ]
    },
    {
      "number": 1699,
      "category": "World",
      "question": "What did over 20 percent of kids say they'd eat at every meal if they were president?\n",
      "answers": [
        "ice cream",
        "icecream"
      ]
    },
    {
      "number": 1700,
      "category": "Science&Nature",
      "question": "What's likely to be the only planet visible between Venus and the horizon?\n",
      "answers": [
        "mercury"
      ]
    },
    {
      "number": 1701,
      "category": "Science&Nature",
      "question": "What U.S. state features an endangered manatee on some license plates?\n",
      "answers": [
        "florida"
      ]
    },
    {
      "number": 1702,
      "category": "World",
      "question": "What celebratory New Orleans song does a \"Baby Lodie\" diaper play at the first sign of wetness?\n",
      "answers": [
        "when the saints go marching in"
      ]
    },
    {
      "number": 1703,
      "category": "World",
      "question": "What explosive fashion sensation was named for the Pacific atoll where atomic bombs were tested?\n",
      "answers": [
        "the bikini",
        "bikini"
      ]
    },
    {
      "number": 1704,
      "category": "World",
      "question": "What did Pricilla Presley decide to open up to the public to stave off bankruptcy?\n",
      "answers": [
        "graceland"
      ]
    },
    {
      "number": 1705,
      "category": "Arts&Entertainment",
      "question": "What married woman caused an international scandal while playing Cleopatra in 1962?\n",
      "answers": [
        "elizabeth taylor",
        "taylor"
      ]
    },
    {
      "number": 1706,
      "category": "Sports&Leisure",
      "question": "What's the rarest poker hand?\n",
      "answers": [
        "a royal flush",
        "royal flush"
      ]
    },
    {
      "number": 1707,
      "category": "World",
      "question": "What section of Queens did Mr. Whipple aptly film his first toilet paper commercial in?\n",
      "answers": [
        "flushing"
      ]
    },
    {
      "number": 1708,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 1709,
      "category": "Sports&Leisure",
      "question": "What movie star had his shooting schedule worked around Los Angeles Lakers home games?\n",
      "answers": [
        "jack nicholson",
        "nickelson",
        "nicholson"
      ]
    },
    {
      "number": 1710,
      "category": "World",
      "question": "What 1976 role featuring multiple personalities earned Sally Fields an Emmy?\n",
      "answers": [
        "sybil"
      ]
    },
    {
      "number": 1711,
      "category": "Sports&Leisure",
      "question": "What sport are you engaged in if you hang five, bomb out and spend the night with a wahine?\n",
      "answers": [
        "surfing"
      ]
    },
    {
      "number": 1712,
      "category": "Sports&Leisure",
      "question": "Whose all-time career record of 4,191 hits did Pete Rose break on September 11, 1985?\n",
      "answers": [
        "ty cobb's",
        "cobbs",
        "cobb"
      ]
    },
    {
      "number": 1713,
      "category": "Sports&Leisure",
      "question": "What NHL team shares its name with a well-known antarctic bird?\n",
      "answers": [
        "the pittsburgh penguins",
        "penguin"
      ]
    },
    {
      "number": 1714,
      "category": "History",
      "question": "What academy was a Civil War general superintendent of from 1852 to 1855?\n",
      "answers": [
        "u.s. military academy"
      ]
    },
    {
      "number": 1715,
      "category": "History",
      "question": "What US founding father drew and published the first cartoon in an American newspaper?\n",
      "answers": [
        "benjamin franklin",
        "franklin"
      ]
    },
    {
      "number": 1716,
      "category": "History",
      "question": "Who became Haiti's first democratically elected leader four years after Jean Claude Duvalier fled?\n",
      "answers": [
        "jean-bertrand aristide",
        "aristide"
      ]
    },
    {
      "number": 1717,
      "category": "World",
      "question": "What budding pop star spiced up her high school cheerleading by wearing flesh-colored panties?\n",
      "answers": [
        "madonna"
      ]
    },
    {
      "number": 1718,
      "category": "Science&Nature",
      "question": "What did Kim Basinger wear in her 1994 advertisement against wearing animal skin coats?\n",
      "answers": [
        "nothing",
        "she was nude",
        "she was naked",
        "skin"
      ]
    },
    {
      "number": 1719,
      "category": "Sports&Leisure",
      "question": "What did Americans sip most of by 1976 - coffee, milk or soft drinks?\n",
      "answers": [
        "soft drinks"
      ]
    },
    {
      "number": 1720,
      "category": "World",
      "question": "What feminist author donned ears and a tail while working in one of this man's clubs in 1964?\n",
      "answers": [
        "gloria steinem",
        "steinam",
        "steinem",
        "stinem"
      ]
    },
    {
      "number": 1721,
      "category": "History",
      "question": "What British monarch and her consort both share the same great-great-grandmother?\n",
      "answers": [
        "queen elizabeth and prince philip",
        "elizabeth and philip",
        "elizabeth and phillip"
      ]
    },
    {
      "number": 1722,
      "category": "Sports&Leisure",
      "question": "Who was the first golfer to amass $1 million in official earnings?\n",
      "answers": [
        "arnold palmer",
        "palmer"
      ]
    },
    {
      "number": 1723,
      "category": "World",
      "question": "What \"Saturday Night Live\" star portrayed Ross Perot in skits in 1992?\n",
      "answers": [
        "dana carvey",
        "carvey"
      ]
    },
    {
      "number": 1724,
      "category": "History",
      "question": "What did a lone Chinese demonstrator do right after standing in front of a tank in Tiennamen Square?\n",
      "answers": [
        "he climbed on top of it",
        "climbed on it",
        "climbed on top"
      ]
    },
    {
      "number": 1725,
      "category": "Arts&Entertainment",
      "question": "What Lewis Carroll work offers this bit of whimsy: \"All mimsy were the borogoves, and the mome raths outgrabe\"?\n",
      "answers": [
        "alice's adventures in wonderland",
        "alice in wonderland"
      ]
    },
    {
      "number": 1726,
      "category": "Sports&Leisure",
      "question": "What tennis great wielded an obsolete wooden racket in a failed 1991 comeback attempt?\n",
      "answers": [
        "bjorn borg",
        "bjorn",
        "borg"
      ]
    },
    {
      "number": 1727,
      "category": "Science&Nature",
      "question": "What phenomena's emissions are called \"Hawking radiation\" in honor of this physicist?\n",
      "answers": [
        "a black hole's",
        "black holes",
        "black hole"
      ]
    },
    {
      "number": 1728,
      "category": "Science&Nature",
      "question": "What French sex symbol made the killing of baby harp seals a worldwide cause celebre?\n",
      "answers": [
        "brigitte bardot",
        "bardot"
      ]
    },
    {
      "number": 1729,
      "category": "People&Places",
      "question": "What was banned in France, prompting 3'11\" Manuel Wackenheim to sue the Interior Ministry?\n",
      "answers": [
        "dwarf tossing"
      ]
    },
    {
      "number": 1730,
      "category": "World",
      "question": "What TV show's headliner hit the White House to promote statehood for Moosylvania?\n",
      "answers": [
        "the bullwinkle show's",
        "bullwinkle"
      ]
    },
    {
      "number": 1731,
      "category": "Sports&Leisure",
      "question": "What first baseman played a major league record 2,130 consecutive games?\n",
      "answers": [
        "lou gehrig",
        "gehrig",
        "garig"
      ]
    },
    {
      "number": 1732,
      "category": "Arts&Entertainment",
      "question": "What did Liberace adorn his piano with?\n",
      "answers": [
        "a candelabra",
        "candelabra"
      ]
    },
    {
      "number": 1733,
      "category": "World",
      "question": "What feline sent out the most autographed 8-by-10 glossies during the early 1970s?\n",
      "answers": [
        "morris the cat",
        "morris"
      ]
    },
    {
      "number": 1734,
      "category": "Arts&Entertainment",
      "question": "Who ya gonna call?\n",
      "answers": [
        "ghostbusters"
      ]
    },
    {
      "number": 1735,
      "category": "Sports&Leisure",
      "question": "How many of every 10 baseball players who sign pro contracts never play in a major league game?\n",
      "answers": [
        "nine",
        "9"
      ]
    },
    {
      "number": 1736,
      "category": "World",
      "question": "What movie saw Dustin Hoffman win an Oscar for playing an autistic savant?\n",
      "answers": [
        "rain man",
        "rainman"
      ]
    },
    {
      "number": 1737,
      "category": "History",
      "question": "What tragic event did Herb Morrison describe in very emotionally in a live radio broadcast?\n",
      "answers": [
        "the hindenburg disaster",
        "hindenburg",
        "hindenberg"
      ]
    },
    {
      "number": 1738,
      "category": "History",
      "question": "Who did Italian porn star Illona Staller offer to have sex with if he'd free foreigners, in 1990?\n",
      "answers": [
        "saddam hussein",
        "saddam",
        "hussein"
      ]
    },
    {
      "number": 1739,
      "category": "Science&Nature",
      "question": "Which of the big, jungle cats is the only cat to be social rather than solitary?\n",
      "answers": [
        "the lion",
        "lion"
      ]
    },
    {
      "number": 1740,
      "category": "People&Places",
      "question": "What Olympic city boasts an ornate church designed by Antonio Gaudi?\n",
      "answers": [
        "barcelona"
      ]
    },
    {
      "number": 1741,
      "category": "History",
      "question": "What three-word phrase was most frequently scribbled as graffiti during World War II?\n",
      "answers": [
        "kilroy was here"
      ]
    },
    {
      "number": 1742,
      "category": "Sports&Leisure",
      "question": "What team has failed to win a World Series since selling Babe Ruth to the New York Yankees in 1920?\n",
      "answers": [
        "the boston red sox",
        "red sox"
      ]
    },
    {
      "number": 1743,
      "category": "People&Places",
      "question": "What collection of architectural marvels is The Great Pyramid the only modern survivor of?\n",
      "answers": [
        "the seven wonders of the world",
        "7 wonders of the world",
        "7 wonders of the ancient world"
      ]
    },
    {
      "number": 1744,
      "category": "Science&Nature",
      "question": "What type of nucleic acid carries hereditary information from generation to generation?\n",
      "answers": [
        "dna",
        "deoxyribonucleic acid",
        "dna ",
        " dna"
      ]
    },
    {
      "number": 1745,
      "category": "Arts&Entertainment",
      "question": "Where did Peter, Paul and Mary say the answer is in a 1962 song?\n",
      "answers": [
        "blowin' in the wind",
        "blowing in the wind"
      ]
    },
    {
      "number": 1746,
      "category": "Sports&Leisure",
      "question": "Who were the combatants in a 1993 prize fight rudely interrupted by parachuter James \"Fanman\" Miller?\n",
      "answers": [
        "riddick bowe and evander holyfield",
        "bowe and holyfield",
        "riddick and evander"
      ]
    },
    {
      "number": 1747,
      "category": "Science&Nature",
      "question": "What's the parallel halfway between the equator and the North Pole?\n",
      "answers": [
        "the forty-fifth",
        "45th"
      ]
    },
    {
      "number": 1748,
      "category": "People&Places",
      "question": "What's the Statue of Liberty's formal name?\n",
      "answers": [
        "liberty enlightening the world"
      ]
    },
    {
      "number": 1749,
      "category": "World",
      "question": "What milkshake-machine salesman began franchising a popular, fast-food empire in 1955?\n",
      "answers": [
        "ray kroc",
        "kroc"
      ]
    },
    {
      "number": 1750,
      "category": "Science&Nature",
      "question": "What gives manatees indelible scars by which they're identified and tracked?\n",
      "answers": [
        "boat propellers",
        "propellers"
      ]
    },
    {
      "number": 1751,
      "category": "Sports&Leisure",
      "question": "What coating insulates the ice cream in a Baked Alaska from an oven's heat?\n",
      "answers": [
        "meringue",
        "merang",
        "meraing"
      ]
    },
    {
      "number": 1752,
      "category": "Arts&Entertainment",
      "question": "What action star was set to play the Axel Foley role in \"Beverly Hills Cop\" but was tagged as too violent?\n",
      "answers": [
        "sylvester stallone",
        "stallone"
      ]
    },
    {
      "number": 1753,
      "category": "Science&Nature",
      "question": "What star is 93 million miles from this planet?\n",
      "answers": [
        "the sun",
        "our sun",
        "sun"
      ]
    },
    {
      "number": 1754,
      "category": "People&Places",
      "question": "What London landmark houses the crown jewels?\n",
      "answers": [
        "the tower of london",
        "tower of london",
        "tower"
      ]
    },
    {
      "number": 1755,
      "category": "History",
      "question": "How many tons did a coal miner, helped by veterans, load his first day, as an initiation?\n",
      "answers": [
        "sixteen",
        "16"
      ]
    },
    {
      "number": 1756,
      "category": "World",
      "question": "What's Vanna White's favorite vowel?\n",
      "answers": [
        "e"
      ]
    },
    {
      "number": 1757,
      "category": "History",
      "question": "What U.S. Civil War general got the middle name \"Simpson\" through a West Point clerical error?\n",
      "answers": [
        "ulysses s. grant",
        "grant"
      ]
    },
    {
      "number": 1758,
      "category": "People&Places",
      "question": "What capital city's McDonald's became the world's largest eatery, at 40,000 customers a day?\n",
      "answers": [
        "moscow's",
        "moscow"
      ]
    },
    {
      "number": 1759,
      "category": "Sports&Leisure",
      "question": "Who broke Yogi Berra's career home run record for a catcher?\n",
      "answers": [
        "johnny bench",
        "bench"
      ]
    },
    {
      "number": 1760,
      "category": "Science&Nature",
      "question": "What naturalist spent five years aboard the \"Beagle\"?\n",
      "answers": [
        "charles darwin",
        "darwin"
      ]
    },
    {
      "number": 1761,
      "category": "Science&Nature",
      "question": "Which US coin tests out at 97.5 percent zinc?\n",
      "answers": [
        "the penny",
        "one cent",
        "penny"
      ]
    },
    {
      "number": 1762,
      "category": "World",
      "question": "Who sent out \"breakers\" from the White House during the 1970s under the CB handle \"First Mama\"?\n",
      "answers": [
        "betty ford"
      ]
    },
    {
      "number": 1763,
      "category": "World",
      "question": "What word did Teenage Mutant Ninja Turtles use often that was first heard on the \"Howdy Doody\" show?\n",
      "answers": [
        "cowabunga"
      ]
    },
    {
      "number": 1764,
      "category": "Sports&Leisure",
      "question": "Which of Chicago Bears running back, Gayle Sayers' roommates was the subject of a TV movie?\n",
      "answers": [
        "brian piccolo",
        "piccolo",
        "picolo"
      ]
    },
    {
      "number": 1765,
      "category": "History",
      "question": "Which president wore dresses until the age of five and kilts until age eight?\n",
      "answers": [
        "franklin d. roosevelt",
        "fdr",
        "franklin roosevelt"
      ]
    },
    {
      "number": 1766,
      "category": "Arts&Entertainment",
      "question": "What artist said that if she could \"paint a flower in a huge scale, you could not ignore its beauty\"?\n",
      "answers": [
        "georgia o'keeffe",
        "o'keeffe"
      ]
    },
    {
      "number": 1767,
      "category": "World",
      "question": "What is more popular name of the symphonic instrument, a \"cor anglais\"?\n",
      "answers": [
        "a french horn",
        "french horn"
      ]
    },
    {
      "number": 1768,
      "category": "People&Places",
      "question": "What country has the most pay telephones per capita?\n",
      "answers": [
        "canada"
      ]
    },
    {
      "number": 1769,
      "category": "People&Places",
      "question": "Which U.S. city attracted the most immigrants in the 1980s?\n",
      "answers": [
        "los angeles"
      ]
    },
    {
      "number": 1770,
      "category": "World",
      "question": "What alien language can you immerse yourself in at a camp in Red Lake Falls, Minnesota for $350 a week?\n",
      "answers": [
        "klingon"
      ]
    },
    {
      "number": 1771,
      "category": "Arts&Entertainment",
      "question": "What prop from the movie \"Basic Instinct\" fetched $4,125 at a 1993 auction?\n",
      "answers": [
        "the ice pick",
        "ice pick",
        "icepick"
      ]
    },
    {
      "number": 1772,
      "category": "Arts&Entertainment",
      "question": "What 1976 chart-topping song did Barry Manilow sing but not write?\n",
      "answers": [
        "i write the songs"
      ]
    },
    {
      "number": 1773,
      "category": "Sports&Leisure",
      "question": "What playing card is also called the \"suicide king\"?\n",
      "answers": [
        "the king of hearts",
        "king of hearts"
      ]
    },
    {
      "number": 1774,
      "category": "Arts&Entertainment",
      "question": "What Bonnie Tyler hit, with an astronomical event in it's title, spent a month atop the charts in 1983?\n",
      "answers": [
        "total eclipse of the heart"
      ]
    },
    {
      "number": 1775,
      "category": "Sports&Leisure",
      "question": "What ESPN star coined the nicknames Bert \"Be Home\" Blyleven and Walt \"Three Blind\" Weiss?\n",
      "answers": [
        "chris berman",
        "berman"
      ]
    },
    {
      "number": 1776,
      "category": "Science&Nature",
      "question": "What pain reliever did Miles Laboratories unleash on the world in 1931?\n",
      "answers": [
        "alka-seltzer",
        "alka seltzer"
      ]
    },
    {
      "number": 1777,
      "category": "World",
      "question": "What future USA general's dyslexia forced him to repeat his first year at West Point?\n",
      "answers": [
        "george patton's",
        "patton"
      ]
    },
    {
      "number": 1778,
      "category": "Sports&Leisure",
      "question": "Who ran the four fastest 100 meter races in women's track history over a two-day period in 1988?\n",
      "answers": [
        "florence griffith-joyner",
        "griffith joyner",
        "griffith-joyner"
      ]
    },
    {
      "number": 1779,
      "category": "World",
      "question": "What former steamboat pilot got his pen name from river lingo meaning 12 feet in depth?\n",
      "answers": [
        "mark twain",
        "twain",
        "samuel clemens",
        "clemens",
        "clemons"
      ]
    },
    {
      "number": 1780,
      "category": "History",
      "question": "What U.S. military decoration was first established in 1782 and revived in 1932?\n",
      "answers": [
        "the purple heart",
        "purple heart"
      ]
    },
    {
      "number": 1781,
      "category": "People&Places",
      "question": "What country was Australian actor Mel Gibson born in?\n",
      "answers": [
        "the u.s.",
        "usa",
        "america"
      ]
    },
    {
      "number": 1782,
      "category": "History",
      "question": "What, according to Shakespeare, were Julius Caesar's last three words?\n",
      "answers": [
        "et tu, brute?",
        "et tu brute",
        "et tu brutus",
        "and you, brutus"
      ]
    },
    {
      "number": 1783,
      "category": "World",
      "question": "What 1982 movie theme song by Survivor had an endangered cat species in its title? \n",
      "answers": [
        "eye of the tiger"
      ]
    },
    {
      "number": 1784,
      "category": "History",
      "question": "What marauding sea captain was honored by his king by being knighted aboard his own ship, the \"Golden Hind\"?\n",
      "answers": [
        "sir francis drake",
        "drake"
      ]
    },
    {
      "number": 1785,
      "category": "Science&Nature",
      "question": "What substance is the largest single preventable cause of death?\n",
      "answers": [
        "tobacco"
      ]
    },
    {
      "number": 1786,
      "category": "Sports&Leisure",
      "question": "How many copies of the 1856 British Guiana stamp are known to exist?\n",
      "answers": [
        "one",
        "1"
      ]
    },
    {
      "number": 1787,
      "category": "Sports&Leisure",
      "question": "What country has won the most World Cup soccer titles?\n",
      "answers": [
        "brazil"
      ]
    },
    {
      "number": 1788,
      "category": "Arts&Entertainment",
      "question": "Who was the philosophical bartender played by Whoopi Goldberg on \"Star Trek: The Next Generation\"?\n",
      "answers": [
        "guinan",
        "guynan"
      ]
    },
    {
      "number": 1789,
      "category": "World",
      "question": "What's the subtitle of the traditional American song \"I've Been Working On The Railroad\"? \n",
      "answers": [
        "someone's in the kitchen with dinah"
      ]
    },
    {
      "number": 1790,
      "category": "History",
      "question": "What fabled German phrase, when attempted by one of America's presidents, translated into \"I am a jelly-filled doughnut\"?\n",
      "answers": [
        "ich bin ein berliner"
      ]
    },
    {
      "number": 1791,
      "category": "Science&Nature",
      "question": "What movie had Michael Keaton playing a character named after a huge star in the constellation of Orion?\n",
      "answers": [
        "beetlejuice",
        "betelguese"
      ]
    },
    {
      "number": 1792,
      "category": "People&Places",
      "question": "What was Manhattan's tallest building before the Empire State Building was erected?\n",
      "answers": [
        "the chrysler building",
        "chrysler"
      ]
    },
    {
      "number": 1793,
      "category": "People&Places",
      "question": "What 60 storey building was completed in 1913 and remained the world's tallest buiding for 17 years? \n",
      "answers": [
        "the woolworth building",
        "woolworth"
      ]
    },
    {
      "number": 1794,
      "category": "History",
      "question": "What form of ancient writing was finally deciphered with the help of a chunk of basalt known as the Rosetta Stone?\n",
      "answers": [
        "hieroglyphics",
        "hirogliphics",
        "hiroglyphics"
      ]
    },
    {
      "number": 1795,
      "category": "History",
      "question": "What four-word moniker (nickname) did General Patton earn while commanding the Second Armored Division in 1940?\n",
      "answers": [
        "old blood and guts",
        "ol blood n guts",
        "old blood & guts"
      ]
    },
    {
      "number": 1796,
      "category": "World",
      "question": "What 1958 fad, according to \"Pravda,\" summed up the \"emptiness of American culture\"?\n",
      "answers": [
        "the hula hoop",
        "hula hoop"
      ]
    },
    {
      "number": 1797,
      "category": "Arts&Entertainment",
      "question": "How many kids did the sitcom mom have to deal with on \"The Brady Bunch\"?\n",
      "answers": [
        "six",
        "6"
      ]
    },
    {
      "number": 1798,
      "category": "Sports&Leisure",
      "question": "How many gold medals did swimmer Mark Spitz win at the 1972 Olympics?\n",
      "answers": [
        "seven",
        "7"
      ]
    },
    {
      "number": 1799,
      "category": "World",
      "question": "What city was the first to be terrorized by Godzilla's radioactive bad breath?\n",
      "answers": [
        "tokyo"
      ]
    },
    {
      "number": 1800,
      "category": "Sports&Leisure",
      "question": "Who was the first quarterback the Miami Dolphins ever chose with a first-round draft choice?\n",
      "answers": [
        "dan marino",
        "marino"
      ]
    },
    {
      "number": 1801,
      "category": "People&Places",
      "question": "What U.S. coastal monument's internal structure was designed by Gustave Eiffel?\n",
      "answers": [
        "the statue of liberty's",
        "statue of liberty"
      ]
    },
    {
      "number": 1802,
      "category": "World",
      "question": "Which well-known Irish actor was booted out of 15 grade schools during his rebellious youth?\n",
      "answers": [
        "spencer tracy",
        "tracy"
      ]
    },
    {
      "number": 1803,
      "category": "World",
      "question": "Who told David Frost: \"When the president does it, that means that it is not illegal\"?\n",
      "answers": [
        "richard nixon",
        "nixon"
      ]
    },
    {
      "number": 1804,
      "category": "Sports&Leisure",
      "question": "What Baltimore Orioles pitcher never gave up a grand slam home run in his 3,948 career innings?\n",
      "answers": [
        "jim palmer",
        "palmer"
      ]
    },
    {
      "number": 1805,
      "category": "Arts&Entertainment",
      "question": "Who conducted Mozart's memorial service in Vienna?\n",
      "answers": [
        "antonio salieri",
        "salieri",
        "saleri",
        "salari"
      ]
    },
    {
      "number": 1806,
      "category": "People&Places",
      "question": "What country was the British monarch empress of from 1876 until 1901?\n",
      "answers": [
        "india"
      ]
    },
    {
      "number": 1807,
      "category": "Science&Nature",
      "question": "What Culture Club hit song featured a member of the lizard family in it's refrain?\n",
      "answers": [
        "karma chameleon"
      ]
    },
    {
      "number": 1808,
      "category": "Arts&Entertainment",
      "question": "What movie prompted \"Premiere\" to put a man on it's cover with the line \"In Your Face\"?\n",
      "answers": [
        "the man without a face"
      ]
    },
    {
      "number": 1809,
      "category": "History",
      "question": "What Wall Streeter paid fellow prison inmates to do his laundry?\n",
      "answers": [
        "ivan boesky",
        "boesky"
      ]
    },
    {
      "number": 1810,
      "category": "World",
      "question": "What Ray Charles catch phrase appeared on Pepsi cans in 1990?\n",
      "answers": [
        "uh huh!",
        "uh huh"
      ]
    },
    {
      "number": 1811,
      "category": "Science&Nature",
      "question": "What Washington state mountain blew its top in 1980, killing 61 people?\n",
      "answers": [
        "mount st. helens",
        "mt st helens",
        "st. helens",
        "st helens",
        "mount st helens"
      ]
    },
    {
      "number": 1812,
      "category": "People&Places",
      "question": "What western hemisphere event in October 1962 prompted John F. Kennedy to deliver a grave warning to the Soviet Union?\n",
      "answers": [
        "the cuban missile crisis",
        "cuban missile"
      ]
    },
    {
      "number": 1813,
      "category": "Arts&Entertainment",
      "question": "How long should a well-known but short Chopin waltz last if it's popular title is taken literally?\n",
      "answers": [
        "one minute",
        "1 minute"
      ]
    },
    {
      "number": 1814,
      "category": "World",
      "question": "What cookie does Nabisco estimate it has made more than 345 billion of since 1912? \n",
      "answers": [
        "oreo cookies",
        "oreo"
      ]
    },
    {
      "number": 1815,
      "category": "World",
      "question": "Which Clinton admitted his fantasy was \"to make love in the front yard of the White House\"?\n",
      "answers": [
        "roger clinton",
        "roger"
      ]
    },
    {
      "number": 1816,
      "category": "People&Places",
      "question": "What onetime Tennessee congressman bit the dust at the Alamo?\n",
      "answers": [
        "davy crockett",
        "crockett",
        "crokett"
      ]
    },
    {
      "number": 1817,
      "category": "Sports&Leisure",
      "question": "Who played hoops with Godzilla in a Nike ad?\n",
      "answers": [
        "charles barkley",
        "barkley"
      ]
    },
    {
      "number": 1818,
      "category": "Arts&Entertainment",
      "question": "What character did Dan Aykroyd portray in the movie \"Trading Places\"?\n",
      "answers": [
        "louis winthorpe iii",
        "winthorpe"
      ]
    },
    {
      "number": 1819,
      "category": "Sports&Leisure",
      "question": "Who's the only golfer to play in U.S. Open tournaments in five different decades?\n",
      "answers": [
        "arnold palmer",
        "palmer"
      ]
    },
    {
      "number": 1820,
      "category": "Arts&Entertainment",
      "question": "What 1985 movie did Oprah Winfrey play a large role in, despite having no acting experience?\n",
      "answers": [
        "the color purple",
        "color purple"
      ]
    },
    {
      "number": 1821,
      "category": "Arts&Entertainment",
      "question": "Who rode a motorcycle to John Belushi's funeral?\n",
      "answers": [
        "dan aykroyd",
        "aykroyd",
        "ackroyd",
        "akroid"
      ]
    },
    {
      "number": 1822,
      "category": "Science&Nature",
      "question": "What purification process is derived from scientist, Louis Pasteur's name?\n",
      "answers": [
        "pasteurization"
      ]
    },
    {
      "number": 1823,
      "category": "History",
      "question": "What war saw General Douglas MacArthur command United Nations forces?\n",
      "answers": [
        "the korean war",
        "korean"
      ]
    },
    {
      "number": 1824,
      "category": "People&Places",
      "question": "Which loquacious Latin leader gave the longest speech in United Nations history?\n",
      "answers": [
        "fidel castro",
        "castro"
      ]
    },
    {
      "number": 1825,
      "category": "Sports&Leisure",
      "question": "What record, single-season, home run total did Roger Maris establish in 1961?\n",
      "answers": [
        "sixty-one",
        "61"
      ]
    },
    {
      "number": 1826,
      "category": "World",
      "question": "Who refused to shake Jesse Owen's hand after he won a gold medal at the 1936 Olympics?\n",
      "answers": [
        "adolf hitler",
        "hitler"
      ]
    },
    {
      "number": 1827,
      "category": "People&Places",
      "question": "What region in France must wine come from to be considered true champagne?\n",
      "answers": [
        "champagne"
      ]
    },
    {
      "number": 1828,
      "category": "World",
      "question": "Who's the female love interest in the tune, \"Bicycle Built For Two?\n",
      "answers": [
        "daisy"
      ]
    },
    {
      "number": 1829,
      "category": "Sports&Leisure",
      "question": "What track star's numerous endorsements inspired advertising honchos to nickname her \"Cash Flo\"?\n",
      "answers": [
        "florence griffith joyner's",
        "griffith",
        "joyner"
      ]
    },
    {
      "number": 1830,
      "category": "Arts&Entertainment",
      "question": "What screen character discovered a novel new use for a banana in the 1984 movie, \"Beverly Hills Cop\"?\n",
      "answers": [
        "axel foley"
      ]
    },
    {
      "number": 1831,
      "category": "Arts&Entertainment",
      "question": "What musical instrument helped win Jane Campion an Oscar for best original screenplay in 1994?\n",
      "answers": [
        "the piano",
        "piano"
      ]
    },
    {
      "number": 1832,
      "category": "History",
      "question": "Whose voice did Al Gore not recognize when she phoned him on \"Larry King Live\"?\n",
      "answers": [
        "tipper gore's",
        "tipper",
        "wife's",
        "wifes"
      ]
    },
    {
      "number": 1833,
      "category": "Arts&Entertainment",
      "question": "What beloved TV sitcom star played a plainclothes nun in the movie, \"Change of Habit\"?\n",
      "answers": [
        "mary tyler moore",
        "moore"
      ]
    },
    {
      "number": 1834,
      "category": "World",
      "question": "What 19th-century cartoonist assigned the elephant and the donkey to U.S. political parties?\n",
      "answers": [
        "thomas nast",
        "nast"
      ]
    },
    {
      "number": 1835,
      "category": "History",
      "question": "What native of Braunau, Upper Austria, marched through the Arc de Triomphe in 1940?\n",
      "answers": [
        "adolf hitler",
        "hitler"
      ]
    },
    {
      "number": 1836,
      "category": "World",
      "question": "What warbler's marriage on \"The Johnny Carson Show\" had more viewers than any previous late-night event?\n",
      "answers": [
        "tiny tim's",
        "tiny tim"
      ]
    },
    {
      "number": 1837,
      "category": "People&Places",
      "question": "At what Phillipine island was a very famous picture of U.S. Marines raising a USA flag taken in World War II?\n",
      "answers": [
        "iwo jima"
      ]
    },
    {
      "number": 1838,
      "category": "Arts&Entertainment",
      "question": "What 3-D Walt Disney World short movie attraction did Francis Coppola direct?\n",
      "answers": [
        "captain eo"
      ]
    },
    {
      "number": 1839,
      "category": "History",
      "question": "Whose final resting place did Boris Yeltsin yank the honor guard from in 1993?\n",
      "answers": [
        "v.i. lenin's",
        "lenin"
      ]
    },
    {
      "number": 1840,
      "category": "History",
      "question": "What country did Hitler's troops invade, kicking off World War II?\n",
      "answers": [
        "poland"
      ]
    },
    {
      "number": 1841,
      "category": "Sports&Leisure",
      "question": "What president got stuck in a gondola lift for 45 minutes during a ski trip to Vail, Colorado?\n",
      "answers": [
        "gerald ford",
        "ford"
      ]
    },
    {
      "number": 1842,
      "category": "Sports&Leisure",
      "question": "What model stepped out of the \"Sports Illustrated\" swimsuit issue to pose nude for \"Playboy\" in '94?\n",
      "answers": [
        "elle macpherson",
        "macpherson",
        "mcpherson"
      ]
    },
    {
      "number": 1843,
      "category": "People&Places",
      "question": "What country was tabbed to reclaim a certain prime piece of Oriental real estate in 1997 after a British lease was up?\n",
      "answers": [
        "china"
      ]
    },
    {
      "number": 1844,
      "category": "World",
      "question": "What famous rock star proposed to a model while nibbling on a tuna sandwich in a state park?\n",
      "answers": [
        "rod stewart",
        "stewart"
      ]
    },
    {
      "number": 1845,
      "category": "History",
      "question": "What general announced in 1968 that the Viet Cong were \"about to run out of steam\"?\n",
      "answers": [
        "william westmoreland",
        "westmorland",
        "westmoreland"
      ]
    },
    {
      "number": 1846,
      "category": "History",
      "question": "Whose death elicited Vietnam's terse statement: \"May he rest in peace\"?\n",
      "answers": [
        "richard nixon's",
        "nixon"
      ]
    },
    {
      "number": 1847,
      "category": "Sports&Leisure",
      "question": "What sports move did a well-known, former TV talk show host conclude his opening monologues with?\n",
      "answers": [
        "a golf swing",
        "golf swing"
      ]
    },
    {
      "number": 1848,
      "category": "Sports&Leisure",
      "question": "What NFL coach warned: \"If you aren't 'fired' with enthusiasm, you will be fired with enthusiasm\"?\n",
      "answers": [
        "vince lombardi",
        "lombardi"
      ]
    },
    {
      "number": 1849,
      "category": "Sports&Leisure",
      "question": "What hurler said of Earl Weaver: \"The only thing he knows about pitching is that he couldn't hit it\"?\n",
      "answers": [
        "jim palmer",
        "palmer"
      ]
    },
    {
      "number": 1850,
      "category": "World",
      "question": "What TV host announced Smokey Robinson and the Miracles as \"Smokey and the Little Smokies\"?\n",
      "answers": [
        "ed sullivan",
        "sullivan"
      ]
    },
    {
      "number": 1851,
      "category": "Arts&Entertainment",
      "question": "What original 'Not Ready for Prime Time Player' portrayed US president Gerald Ford in skits?\n",
      "answers": [
        "chevy chase",
        "chase",
        "chevy"
      ]
    },
    {
      "number": 1852,
      "category": "Sports&Leisure",
      "question": "What decathlete competed despite a stress fracture of the right fibula at the 1992 U.S. Olympic trials?\n",
      "answers": [
        "dan o'brien",
        "o'brien",
        "o'brian"
      ]
    },
    {
      "number": 1853,
      "category": "Science&Nature",
      "question": "What bothers someone with pogonophobia?\n",
      "answers": [
        "a beard",
        "beard"
      ]
    },
    {
      "number": 1854,
      "category": "People&Places",
      "question": "Who was the first Democrat elected president without carrying Texas?\n",
      "answers": [
        "bill clinton",
        "clinton"
      ]
    },
    {
      "number": 1855,
      "category": "World",
      "question": "What Republican president scratched the ears of a dog named Ranger?\n",
      "answers": [
        "george bush",
        "bush"
      ]
    },
    {
      "number": 1856,
      "category": "Sports&Leisure",
      "question": "What grand slam golf tournament did Arnold Palmer win in 1958, '60, '62 and '64?\n",
      "answers": [
        "the masters",
        "masters"
      ]
    },
    {
      "number": 1857,
      "category": "Sports&Leisure",
      "question": "Who was given a red Corvette with a special license plate when he set a major league baseball record?\n",
      "answers": [
        "pete rose",
        "rose"
      ]
    },
    {
      "number": 1858,
      "category": "Arts&Entertainment",
      "question": "What were the names of the two different animals that, as a child star, Roddy McDowell play opposite in 1943 movies?\n",
      "answers": [
        "lassie and flicka",
        "lassie",
        "flicka"
      ]
    },
    {
      "number": 1859,
      "category": "Arts&Entertainment",
      "question": "Who went double platinum by warbling \"Vaya Con Dios\" and \"Indian Love Call\" in TV ads?\n",
      "answers": [
        "slim whitman",
        "whitman"
      ]
    },
    {
      "number": 1860,
      "category": "Science&Nature",
      "question": "What rapid-firing gun did the Union army turn down in 1862?\n",
      "answers": [
        "the gatling gun",
        "gattling",
        "gatling"
      ]
    },
    {
      "number": 1861,
      "category": "Science&Nature",
      "question": "Which of these Florida cities boasts the largest average consumption of prunes:  Miami, Bradenton, or Tallahassee?\n",
      "answers": [
        "miami"
      ]
    },
    {
      "number": 1862,
      "category": "Sports&Leisure",
      "question": "Who donned size 11 gloves when he wasn't using his giant paws to handle a basketball for the 76ers?\n",
      "answers": [
        "julius erving",
        "dr. j"
      ]
    },
    {
      "number": 1863,
      "category": "Sports&Leisure",
      "question": "Who became the third pro basketballer to score 30,000 points in his career?\n",
      "answers": [
        "julius erving",
        "erving",
        "dr. j"
      ]
    },
    {
      "number": 1864,
      "category": "History",
      "question": "Who did Lloyd Bentsen tell in 1988: \"I knew Jack Kennedy.... You're no Jack Kennedy\"?\n",
      "answers": [
        "dan quayle",
        "quayle"
      ]
    },
    {
      "number": 1865,
      "category": "History",
      "question": "What couple were executed for espionage in 1953 despite pleas from Albert Einstein and the Pope, among others?\n",
      "answers": [
        "julius and ethel rosenberg",
        "rosenberg"
      ]
    },
    {
      "number": 1866,
      "category": "Science&Nature",
      "question": "What do American parents of infants dump 17 billion of each year?\n",
      "answers": [
        "disposable diapers"
      ]
    },
    {
      "number": 1867,
      "category": "Sports&Leisure",
      "question": "What New York Yankees great once was timed running from home to first in a record 2.9 seconds?\n",
      "answers": [
        "mickey mantle",
        "mantle"
      ]
    },
    {
      "number": 1868,
      "category": "World",
      "question": "What 1989 film earned Dan Aykroyd an Oscar nomination as best supporting actor?\n",
      "answers": [
        "driving miss daisy"
      ]
    },
    {
      "number": 1869,
      "category": "Sports&Leisure",
      "question": "What coach gave mink stoles to the wives of his players after winning his first NFL title in 1961?\n",
      "answers": [
        "vince lombardi",
        "lombardi"
      ]
    },
    {
      "number": 1870,
      "category": "Arts&Entertainment",
      "question": "Which of Madonna's videos drew a stern condemnation from the Vatican in 1989?\n",
      "answers": [
        "like a prayer"
      ]
    },
    {
      "number": 1871,
      "category": "People&Places",
      "question": "What state's license plates began saying 'Famous Potatoes' in 1957?\n",
      "answers": [
        "idaho's",
        "idaho"
      ]
    },
    {
      "number": 1872,
      "category": "Science&Nature",
      "question": "What's an organism made from the genetic material of another commonly called?\n",
      "answers": [
        "a clone",
        "clone"
      ]
    },
    {
      "number": 1873,
      "category": "People&Places",
      "question": "What Egyptian leader was Gerald Ford meeting when he made a 'graceful exit' from Air Force One?  :o)\n",
      "answers": [
        "anwar sadat",
        "sadat"
      ]
    },
    {
      "number": 1874,
      "category": "World",
      "question": "What mega-selling book took Robert James Waller two weeks to write?\n",
      "answers": [
        "the bridges of madison county"
      ]
    },
    {
      "number": 1875,
      "category": "People&Places",
      "question": "What tropical U.S. state has chosen the yellow hibiscus as it's state flower?\n",
      "answers": [
        "hawaii"
      ]
    },
    {
      "number": 1876,
      "category": "People&Places",
      "question": "What country boasts a maple leaf as its national symbol?\n",
      "answers": [
        "canada"
      ]
    },
    {
      "number": 1877,
      "category": "People&Places",
      "question": "What Los Angeles landmark did Sam Rodia build from steel, broken glass, sea shells and found objects?\n",
      "answers": [
        "the watts towers",
        "watts tower"
      ]
    },
    {
      "number": 1878,
      "category": "Science&Nature",
      "question": "What accident prompted U.S. utility outfits to cancel orders for 11 nuclear reactors by 1980?\n",
      "answers": [
        "three mile island",
        "3 mile island"
      ]
    },
    {
      "number": 1879,
      "category": "World",
      "question": "What park's tourists are in danger of having their picnic baskets picked by Yogi Bear?\n",
      "answers": [
        "jellystone park's",
        "jellystone"
      ]
    },
    {
      "number": 1880,
      "category": "Arts&Entertainment",
      "question": "Who'd starred in seven of the top 25 highest grossing movies in history by 1994?\n",
      "answers": [
        "harrison ford",
        "harrison",
        "ford"
      ]
    },
    {
      "number": 1881,
      "category": "World",
      "question": "What physicist is given a \"special thanks\" for his synthesized vocals on Pink Floyd's \"Keep Talking\"?\n",
      "answers": [
        "stephen hawking",
        "hawking"
      ]
    },
    {
      "number": 1882,
      "category": "Arts&Entertainment",
      "question": "What movie did Spencer Tracy complete filming a matter of weeks before he died?\n",
      "answers": [
        "guess who's coming to dinner"
      ]
    },
    {
      "number": 1883,
      "category": "World",
      "question": "What hosiery product was \"hatched\" in 1970 using an innovative packaging concept?\n",
      "answers": [
        "l'eggs pantyhose",
        "l'eggs"
      ]
    },
    {
      "number": 1884,
      "category": "People&Places",
      "question": "What physicist declined the presidency or a country saying he had no head for human problems?\n",
      "answers": [
        "albert einstein",
        "einstein"
      ]
    },
    {
      "number": 1885,
      "category": "Science&Nature",
      "question": "What part of the Venus Fly-trap plant is adapted to make an insect trap - the flower, leaf, stem or root?\n",
      "answers": [
        "the leaf",
        "leaf"
      ]
    },
    {
      "number": 1886,
      "category": "World",
      "question": "What three-word moniker did Elvis call \"the most childish expression I've ever heard\"?\n",
      "answers": [
        "elvis the pelvis"
      ]
    },
    {
      "number": 1887,
      "category": "History",
      "question": "Which council in the United Nations organization recommends appointees to the position of secretary general?\n",
      "answers": [
        "the security council",
        "security"
      ]
    },
    {
      "number": 1888,
      "category": "People&Places",
      "question": "What European country contains Transylvania, commonly considered to be the home of \"Count Dracula\"?\n",
      "answers": [
        "romania"
      ]
    },
    {
      "number": 1889,
      "category": "Science&Nature",
      "question": "What company dominated the microprocessor field by the 1980s?\n",
      "answers": [
        "intel"
      ]
    },
    {
      "number": 1890,
      "category": "Science&Nature",
      "question": "How many bones does a shark have?\n",
      "answers": [
        "zero",
        "none",
        "0"
      ]
    },
    {
      "number": 1891,
      "category": "Arts&Entertainment",
      "question": "Who uttered zingers from the center square of the \"Hollywood Squares\" for 12 years?\n",
      "answers": [
        "paul lynde",
        "lynde"
      ]
    },
    {
      "number": 1892,
      "category": "History",
      "question": "What did the U.S. Post Office use as a symbol before adopting the bald eagle in 1970?\n",
      "answers": [
        "a pony express rider",
        "pony express"
      ]
    },
    {
      "number": 1893,
      "category": "Sports&Leisure",
      "question": "What did a well-known Dodgers' coach take to lose 40 pounds to win a bet with two of his players?\n",
      "answers": [
        "ultra slim-fast",
        "slim fast",
        "slimfast"
      ]
    },
    {
      "number": 1894,
      "category": "History",
      "question": "According to one general, what was 'the first war ever fought without any censorship'?\n",
      "answers": [
        "the vietnam war",
        "vietnam"
      ]
    },
    {
      "number": 1895,
      "category": "Arts&Entertainment",
      "question": "What eight-minute, 36-second hit by Don McLean did WABC call the most-played song of 1971?\n",
      "answers": [
        "american pie"
      ]
    },
    {
      "number": 1896,
      "category": "Arts&Entertainment",
      "question": "What hit song helped the 1986 movie, \"Top Gun\", starring Tom Cruise soar?\n",
      "answers": [
        "take my breath away"
      ]
    },
    {
      "number": 1897,
      "category": "Science&Nature",
      "question": "What does the male Emperor Penguine balance atop his feet for two months while its mate feeds?\n",
      "answers": [
        "an egg",
        "egg"
      ]
    },
    {
      "number": 1898,
      "category": "Science&Nature",
      "question": "What tracking device was the Stealth bomber designed to evade?\n",
      "answers": [
        "radar"
      ]
    },
    {
      "number": 1899,
      "category": "World",
      "question": "What two-word phrase did a famous tuna receive repeatedly from Star-Kist fishermen?\n",
      "answers": [
        "\"sorry, charlie\"",
        "sorry charlie"
      ]
    },
    {
      "number": 1900,
      "category": "Science&Nature",
      "question": "What Frenchman developed a vaccine to combat rabies in 1885?\n",
      "answers": [
        "louis pasteur",
        "pasteur"
      ]
    },
    {
      "number": 1901,
      "category": "People&Places",
      "question": "What stands atop an 11-pointed fort in New York Harbor?\n",
      "answers": [
        "the statue of liberty",
        "statue of liberty"
      ]
    },
    {
      "number": 1902,
      "category": "Science&Nature",
      "question": "What nation's beachgoers have been munched on most by great white sharks?\n",
      "answers": [
        "australia's",
        "australia"
      ]
    },
    {
      "number": 1903,
      "category": "Arts&Entertainment",
      "question": "What four-word line ended nine classic \"Honeymooners\" episodes?\n",
      "answers": [
        "\"baby, you're the greatest\"",
        "baby you're the greatest"
      ]
    },
    {
      "number": 1904,
      "category": "Arts&Entertainment",
      "question": "Who's the most popular novelist putting vampires on the best-seller list?\n",
      "answers": [
        "anne rice",
        "rice"
      ]
    },
    {
      "number": 1905,
      "category": "People&Places",
      "question": "What malady made Napoleon uncomfortable in the saddle during the Battle of Waterloo?\n",
      "answers": [
        "hemorrhoids",
        "hemeroids",
        "hemaroids"
      ]
    },
    {
      "number": 1906,
      "category": "History",
      "question": "Who found his crown to be a perfect fit when he was invested on July 1, 1969?\n",
      "answers": [
        "prince charles",
        "charles"
      ]
    },
    {
      "number": 1907,
      "category": "World",
      "question": "Whose verdict on her affair was: \"Honey, a dirt sandwich is better than Dwight Yoakam\"?\n",
      "answers": [
        "sharon stone's",
        "stone"
      ]
    },
    {
      "number": 1908,
      "category": "Science&Nature",
      "question": "What's the heaviest naturally-occurring element?\n",
      "answers": [
        "uranium"
      ]
    },
    {
      "number": 1909,
      "category": "Science&Nature",
      "question": "Which of the 9 planets in our solar system is blue and white when seen from outer space?\n",
      "answers": [
        "earth"
      ]
    },
    {
      "number": 1910,
      "category": "Arts&Entertainment",
      "question": "What is James Whistler's painting, \"Arrangement in Gray and Black\", best known as?\n",
      "answers": [
        "whistler's mother"
      ]
    },
    {
      "number": 1911,
      "category": "Arts&Entertainment",
      "question": "What 1986 movie earned Spike Lee his first taste of critical acclaim?\n",
      "answers": [
        "she's gotta have it",
        "shes gotta have it"
      ]
    },
    {
      "number": 1912,
      "category": "People&Places",
      "question": "Who raised $25 million on the Australian Stock Exchange to finance the film \"Lightning Jack\"?\n",
      "answers": [
        "paul hogan",
        "hogan"
      ]
    },
    {
      "number": 1913,
      "category": "Arts&Entertainment",
      "question": "What poet immortalized a famous silversmith's midnight ride to warn that the British were coming?\n",
      "answers": [
        "henry wadsworth longfellow",
        "longfellow"
      ]
    },
    {
      "number": 1914,
      "category": "People&Places",
      "question": "Who was the first to take off solo in New York and land in Paris?\n",
      "answers": [
        "charles lindbergh",
        "lindbergh",
        "lindberg",
        "lindburg"
      ]
    },
    {
      "number": 1915,
      "category": "Arts&Entertainment",
      "question": "What expense-checker did this \"Twin Peaks\" agent intone messages to via a microcassette recorder?\n",
      "answers": [
        "diane"
      ]
    },
    {
      "number": 1916,
      "category": "Arts&Entertainment",
      "question": "Who planted people in the audience to boo at the premiere of a Mozart opera?\n",
      "answers": [
        "antonio salieri",
        "salieri"
      ]
    },
    {
      "number": 1917,
      "category": "Arts&Entertainment",
      "question": "Who earned critical acclaim in 1980 for her suggestive ride on a mechanical bull?\n",
      "answers": [
        "debra winger",
        "winger"
      ]
    },
    {
      "number": 1918,
      "category": "Science&Nature",
      "question": "What did Plennie Wingo add to his glasses before walking backward from San Francisco to Santa Monica?\n",
      "answers": [
        "rearview mirrors"
      ]
    },
    {
      "number": 1919,
      "category": "Science&Nature",
      "question": "What fabric is opposed by radical animal-rights activists because the host creature is boiled alive?\n",
      "answers": [
        "silk"
      ]
    },
    {
      "number": 1920,
      "category": "Sports&Leisure",
      "question": "What two-word question did Nancy Kerrigan repeat after she got whacked in the knee?\n",
      "answers": [
        "why me?",
        "why me"
      ]
    },
    {
      "number": 1921,
      "category": "Science&Nature",
      "question": "bison roamed North America in 1492 - 600,000, 6 million or 60 million?\n",
      "answers": [
        "60 million",
        "sixty million",
        "60,000,000",
        "60000000",
        "how many buffalo"
      ]
    },
    {
      "number": 1922,
      "category": "History",
      "question": "Name 2 of the 4 U.S. presidents, other than Lincoln or Kennedy, that were assassinated while in office?\n",
      "answers": [
        "james garfield and william mckinley",
        "garfield and mckinley",
        "mckinley and garfield"
      ]
    },
    {
      "number": 1923,
      "category": "People&Places",
      "question": "What did Russian hardliner Vladimir \"Mad Vlad\" Zhirinovsky threaten to take back from the U.S.?\n",
      "answers": [
        "alaska"
      ]
    },
    {
      "number": 1924,
      "category": "People&Places",
      "question": "What screen lover's death inspired a 1926 mob scene outside a Manhattan funeral chapel?\n",
      "answers": [
        "rudolph valentino's",
        "valentino"
      ]
    },
    {
      "number": 1925,
      "category": "Science&Nature",
      "question": "Whose flight into space earned him some rib-crunching Russian bear hugs?\n",
      "answers": [
        "yuri gagarin's",
        "gagarin"
      ]
    },
    {
      "number": 1926,
      "category": "Arts&Entertainment",
      "question": "Who uttered the question: \"King Tut, how'd you get so funky? King Tut, did you do the Monkey?\"?\n",
      "answers": [
        "steve martin",
        "martin"
      ]
    },
    {
      "number": 1927,
      "category": "Science&Nature",
      "question": "What name did the first atomic submarine share with Robert Fulton's 1800 version?\n",
      "answers": [
        "nautilus"
      ]
    },
    {
      "number": 1928,
      "category": "People&Places",
      "question": "What's the current term for a great oak log, burned at the festival of Thor?\"\n",
      "answers": [
        "yule log"
      ]
    },
    {
      "number": 1929,
      "category": "Science&Nature",
      "question": "What's the name of the  \"self-sustaining\" edifice, home to eight men and women for two years?\n",
      "answers": [
        "the biosphere",
        "biosphere"
      ]
    },
    {
      "number": 1930,
      "category": "People&Places",
      "question": "What memorial sparked controversy when unveiled by architect and sculptor Maya Lin?\n",
      "answers": [
        "the vietnam veterans memorial",
        "vietnam vet"
      ]
    },
    {
      "number": 1931,
      "category": "People&Places",
      "question": "What Caribbean country still had jerry-rigged U.S. jeeps on its streets in the 1990s?\n",
      "answers": [
        "cuba"
      ]
    },
    {
      "number": 1932,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 1933,
      "category": "Arts&Entertainment",
      "question": "What fellow artist did Van Gogh threaten with a razor before taking a swipe at himself?\n",
      "answers": [
        "paul gauguin",
        "gauguin"
      ]
    },
    {
      "number": 1934,
      "category": "History",
      "question": "Who changed his name from Vernon Wayne Howell for \"publicity and business purposes\"?\n",
      "answers": [
        "david koresh",
        "koresh"
      ]
    },
    {
      "number": 1935,
      "category": "People&Places",
      "question": "What city would you visit to see the contents of King Tut's tomb?\n",
      "answers": [
        "cairo"
      ]
    },
    {
      "number": 1936,
      "category": "History",
      "question": "What's the most commonly used slang term to describe helicopters?\n",
      "answers": [
        "choppers",
        "chopper"
      ]
    },
    {
      "number": 1937,
      "category": "World",
      "question": "What literary character tilted at windmills, mistaking them for giants?\n",
      "answers": [
        "don quixote",
        "quixote"
      ]
    },
    {
      "number": 1938,
      "category": "Sports&Leisure",
      "question": "Who was the first man in 56 years to win both springboard and platform diving at the Olympics?\n",
      "answers": [
        "greg louganis",
        "louganis"
      ]
    },
    {
      "number": 1939,
      "category": "Science&Nature",
      "question": "What independent movie studio shares it's name with a constellation? \n",
      "answers": [
        "orion"
      ]
    },
    {
      "number": 1940,
      "category": "World",
      "question": "In what movie Eddie Murphy insist his character's name be changed from Willie Biggs to Reggie Hammond?\n",
      "answers": [
        "48 hrs.",
        "48 hours"
      ]
    },
    {
      "number": 1941,
      "category": "Arts&Entertainment",
      "question": "Who was the second black star to be in a film grossing over $100 million?\n",
      "answers": [
        "whoopi goldberg",
        "goldberg",
        "whoopi"
      ]
    },
    {
      "number": 1942,
      "category": "Arts&Entertainment",
      "question": "Name one No.1 Michael Jackson hit this is a three-letter word beginning with the letter \"B\"\n",
      "answers": [
        "'ben' or 'bad'",
        "ben",
        "bad"
      ]
    },
    {
      "number": 1943,
      "category": "Sports&Leisure",
      "question": "What bowling pin is known as the widow?\n",
      "answers": [
        "the ten pin",
        "10 pin",
        "tenpin",
        "10pin"
      ]
    },
    {
      "number": 1944,
      "category": "Sports&Leisure",
      "question": "How many thousand cows are needed to supply the NFL with enough footballs for a season?\n",
      "answers": [
        "three",
        "3",
        "3,000",
        "3000"
      ]
    },
    {
      "number": 1945,
      "category": "People&Places",
      "question": "What was the only U.S. state in 1992 to lose more citizens to handguns than to car crashes?\n",
      "answers": [
        "texas"
      ]
    },
    {
      "number": 1946,
      "category": "World",
      "question": "What Victor Hugo novel does \"The Simpsons\" pay tribute to by giving prisoners the number 24601?\n",
      "answers": [
        "les miserables",
        "miserables"
      ]
    },
    {
      "number": 1947,
      "category": "World",
      "question": "What kind of tails did a gang of aborigines freeze, use to attack three police officers, and then eat?\n",
      "answers": [
        "kangaroo tails",
        "kangaroo"
      ]
    },
    {
      "number": 1948,
      "category": "History",
      "question": "What did Donald Trump rename the yacht \"Nabila\" that he bought for $29 million in 1987?\n",
      "answers": [
        "the trump princess",
        "princess"
      ]
    },
    {
      "number": 1949,
      "category": "Sports&Leisure",
      "question": "What Cincinnati Reds catcher could hold seven baseballs in his giant paw?\n",
      "answers": [
        "johnny bench",
        "bench"
      ]
    },
    {
      "number": 1950,
      "category": "Science&Nature",
      "question": "What did Steven Hawking say could be formed by something other than the collapse of a star?\n",
      "answers": [
        "black holes",
        "black hole"
      ]
    },
    {
      "number": 1951,
      "category": "Arts&Entertainment",
      "question": "What's the most famous five-word phrase uttered by Clint Eastwood in the movie \"Sudden Impact\"?\n",
      "answers": [
        "go ahead, make my day",
        "make my day",
        "go ahead"
      ]
    },
    {
      "number": 1952,
      "category": "History",
      "question": "Who became South Dakota's first Democratic senator in 26 years by a margin of 597 votes in 1962?\n",
      "answers": [
        "george mcgovern",
        "mcgovern"
      ]
    },
    {
      "number": 1953,
      "category": "World",
      "question": "What hit saw the U.S. Navy bill moviemakers $1.1 million for \"technical services\"?\n",
      "answers": [
        "top gun",
        "topgun"
      ]
    },
    {
      "number": 1954,
      "category": "Science&Nature",
      "question": "Who was the first president to wear false teeth?\n",
      "answers": [
        "george washington",
        "washington"
      ]
    },
    {
      "number": 1955,
      "category": "People&Places",
      "question": "What department store chain established it's headquarters in the Sears Tower?\n",
      "answers": [
        "sears, roebuck and co.",
        "sears"
      ]
    },
    {
      "number": 1956,
      "category": "Arts&Entertainment",
      "question": "What black star noted: \"I'm funny without drugs. I don't have to sniff cocaine to be funny\"?\n",
      "answers": [
        "eddie murphy",
        "murphy"
      ]
    },
    {
      "number": 1957,
      "category": "Sports&Leisure",
      "question": "What player donned a Baltimore Orioles uniform for a major league record of 23 years?\n",
      "answers": [
        "brooks robinson",
        "robinson",
        "robinsen"
      ]
    },
    {
      "number": 1958,
      "category": "Sports&Leisure",
      "question": "What Olympic ice racer took a victory lap with a U.S. flag in one hand and his daughter Jane in the other?\n",
      "answers": [
        "dan jansen",
        "jansen",
        "janson"
      ]
    },
    {
      "number": 1959,
      "category": "History",
      "question": "What did George Armstrong Custer accidentally shoot and kill while hunting buffalo?\n",
      "answers": [
        "his horse",
        "horse"
      ]
    },
    {
      "number": 1960,
      "category": "World",
      "question": "What four-word farewell of the 1950s was inspired by a many-toothed reptile?\n",
      "answers": [
        "see you later, alligator",
        "alligator"
      ]
    },
    {
      "number": 1961,
      "category": "World",
      "question": "What subway vigilante took exception to being asked for $5 on January 25, 1985?\n",
      "answers": [
        "bernhard goetz",
        "bernard",
        "bernhard",
        "goetz"
      ]
    },
    {
      "number": 1962,
      "category": "People&Places",
      "question": "What city did Michelangelo do \"David\" in?\n",
      "answers": [
        "florence"
      ]
    },
    {
      "number": 1963,
      "category": "World",
      "question": "What well-known politician was a college roommate of Tommy Lee Jones?\n",
      "answers": [
        "al gore",
        "gore"
      ]
    },
    {
      "number": 1964,
      "category": "Arts&Entertainment",
      "question": "What movie put Eddie Murphy on the cover of \"Newsweek\" as \"Mr. Box Office\" when he was 23?\n",
      "answers": [
        "beverly hills cop"
      ]
    },
    {
      "number": 1965,
      "category": "Sports&Leisure",
      "question": "What city's vendors sell the most teddy bears made in one of their favorite baseballer's image?\n",
      "answers": [
        "minneapolis"
      ]
    },
    {
      "number": 1966,
      "category": "History",
      "question": "What infamous six words came back to haunt George Bush in his 1992 presidential campaign?\n",
      "answers": [
        "read my lips, no new taxes",
        "read my lips",
        "no new taxes"
      ]
    },
    {
      "number": 1967,
      "category": "World",
      "question": "What \"Married ... with Children\" star's bra was stolen from Frederick's of Hollywood in L.A. rioting?\n",
      "answers": [
        "katey sagal's",
        "katey sagal",
        "katey",
        "sagal"
      ]
    },
    {
      "number": 1968,
      "category": "People&Places",
      "question": "What phrase did Abraham Lincoln use instead of \"87 years\" in his Gettysburg Address?\n",
      "answers": [
        "four score and seven years",
        "four score and seven"
      ]
    },
    {
      "number": 1969,
      "category": "World",
      "question": "What TV and radio host never enters the studio without his suspenders?\n",
      "answers": [
        "larry king",
        "king"
      ]
    },
    {
      "number": 1970,
      "category": "People&Places",
      "question": "What playwright did Muammar Qaddafi insist was \"of Arab origin\" in 1989?\n",
      "answers": [
        "william shakespeare",
        "shakespeare",
        "shakespear"
      ]
    },
    {
      "number": 1971,
      "category": "History",
      "question": "What did the Soviets send up into space on the 40th anniversary of the day the communists seized power?\n",
      "answers": [
        "sputnik i",
        "sputnik"
      ]
    },
    {
      "number": 1972,
      "category": "People&Places",
      "question": "What country cancelled its May Day parade in 1994 for the first time since 1959, due to lack of money?\n",
      "answers": [
        "cuba"
      ]
    },
    {
      "number": 1973,
      "category": "Arts&Entertainment",
      "question": "What five words end Charles Dicken's most famous Christmas story?\n",
      "answers": [
        "god bless us every one"
      ]
    },
    {
      "number": 1974,
      "category": "People&Places",
      "question": "What 'state' boasts the largest church in Christendom?\"\n",
      "answers": [
        "vatican city",
        "vatican"
      ]
    },
    {
      "number": 1975,
      "category": "History",
      "question": "Which of Cleopatra's husbands killed himself by falling on his sword?\n",
      "answers": [
        "marc antony",
        "antony"
      ]
    },
    {
      "number": 1976,
      "category": "World",
      "question": "Who said: \"I was the first woman to burn my bra. It took the fire department four days to put it out\"?\n",
      "answers": [
        "dolly parton",
        "parton"
      ]
    },
    {
      "number": 1977,
      "category": "Science&Nature",
      "question": "Which finger of the throwing hand is subject to a painful syndrome called \"Frisbee finger\"?\n",
      "answers": [
        "the middle finger",
        "middle"
      ]
    },
    {
      "number": 1978,
      "category": "Science&Nature",
      "question": "What Michigan doctor lead the fight for medicide, or physician-assisted suicide?\n",
      "answers": [
        "jack kevorkian",
        "kevorkian"
      ]
    },
    {
      "number": 1979,
      "category": "Arts&Entertainment",
      "question": "What renowned reference work did Lon Chaney write an entry on makeup for?\n",
      "answers": [
        "encyclopaedia britannica",
        "britannica"
      ]
    },
    {
      "number": 1980,
      "category": "History",
      "question": "What White House aide's shredding machine jammed on November 21, 1986?\n",
      "answers": [
        "oliver north's",
        "oliver",
        "north"
      ]
    },
    {
      "number": 1981,
      "category": "People&Places",
      "question": "Whose Atlantic City hotel-casino is three times the size of the Taj Mahal, it's East Indian namesake?\n",
      "answers": [
        "donald trump's",
        "trump"
      ]
    },
    {
      "number": 1982,
      "category": "Sports&Leisure",
      "question": "Who won the only two U.S. Open singles titles not won by Chris Evert from 1975 through 1982?\n",
      "answers": [
        "tracy austin",
        "austin"
      ]
    },
    {
      "number": 1983,
      "category": "Arts&Entertainment",
      "question": "What do most people call \"Waltz Number 314\" by Johann Strauss Jr.?\n",
      "answers": [
        "blue danube"
      ]
    },
    {
      "number": 1984,
      "category": "Sports&Leisure",
      "question": "Who batted .373 with 47 home runs and 175 RBI the year Babe Ruth hit 60 homers?\n",
      "answers": [
        "lou gehrig",
        "gehrig"
      ]
    },
    {
      "number": 1985,
      "category": "Sports&Leisure",
      "question": "What baseball owner was right in assuming midget Eddie Gaedel would walk as a pinch hitter in 1951?\n",
      "answers": [
        "bill veeck",
        "veeck"
      ]
    },
    {
      "number": 1986,
      "category": "World",
      "question": "What 73-year-old trapeze artist fell to his death in 1978?\n",
      "answers": [
        "karl wallenda",
        "wallenda"
      ]
    },
    {
      "number": 1987,
      "category": "History",
      "question": "What was the last hotel Robert Kennedy was in before riding to his final resting place?\n",
      "answers": [
        "the ambassador",
        "ambassador"
      ]
    },
    {
      "number": 1988,
      "category": "Sports&Leisure",
      "question": "What hockey star was ribbed as \"The Yellow One\" because of his aversion to flying?\n",
      "answers": [
        "wayne gretzky",
        "gretzky"
      ]
    },
    {
      "number": 1989,
      "category": "Science&Nature",
      "question": "Where are two Russian vehicles, auctioned at Sotheby's in 1993 for $68,500, currently parked?\n",
      "answers": [
        "on the moon",
        "moon"
      ]
    },
    {
      "number": 1990,
      "category": "Sports&Leisure",
      "question": "What Phillies first baseman correctly noted: \"I'm not an athlete, I'm a baseball player\"?\n",
      "answers": [
        "john kruk",
        "kruk"
      ]
    },
    {
      "number": 1991,
      "category": "Science&Nature",
      "question": "What whale was prized for the 15 barrels of high-quality oil found behind its forehead?\n",
      "answers": [
        "the sperm whale",
        "sperm"
      ]
    },
    {
      "number": 1992,
      "category": "People&Places",
      "question": "What Virginia county's courthouse was the site of Lee's surrender to Grant?\n",
      "answers": [
        "appomattox county's",
        "appomattox"
      ]
    },
    {
      "number": 1993,
      "category": "World",
      "question": "How many seasons did Johnny Carson host \"The Tonight Show\"?\n",
      "answers": [
        "thirty",
        "30"
      ]
    },
    {
      "number": 1994,
      "category": "Sports&Leisure",
      "question": "Who's the only man to win the Masters, British Open, U.S. Open, PGA and U.S. Amateur at least twice?\n",
      "answers": [
        "jack nicklaus",
        "nicklaus"
      ]
    },
    {
      "number": 1995,
      "category": "Arts&Entertainment",
      "question": "What blonde strutted as a Playboy Club waitress before singing lead vocals on four No. 1 hits?\n",
      "answers": [
        "deborah harry",
        "harry"
      ]
    },
    {
      "number": 1996,
      "category": "History",
      "question": "USA President Jimmy Carter, brought together Anwar Sadat and who else at the Camp David peace negotiations?\n",
      "answers": [
        "menachem begin",
        "begin"
      ]
    },
    {
      "number": 1997,
      "category": "History",
      "question": "What president nearly fell out of the Wright brothers' plane while waving to a crowd?\n",
      "answers": [
        "theodore roosevelt",
        "roosevelt"
      ]
    },
    {
      "number": 1998,
      "category": "Science&Nature",
      "question": "What helpful aid did the mother of 'Monkee' Mike Nesmith invent for typists the world over?\n",
      "answers": [
        "liquid paper correction fluid",
        "liquid paper"
      ]
    },
    {
      "number": 1999,
      "category": "Sports&Leisure",
      "question": "Who became the first black member of the Milwaukee Braves, in 1954?\n",
      "answers": [
        "hank aaron",
        "aaron"
      ]
    },
    {
      "number": 2000,
      "category": "Sports&Leisure",
      "question": "Who broke baseball's color barrier, inking a contract and starting at first base in 1947?\n",
      "answers": [
        "jackie robinson",
        "robinson"
      ]
    },
    {
      "number": 2001,
      "category": "People&Places",
      "question": "What mountain do Tibetans call Chomo-Lungma, or Mother Goddess of the Land?\n",
      "answers": [
        "mount everest",
        "everest"
      ]
    },
    {
      "number": 2002,
      "category": "Arts&Entertainment",
      "question": "What children's book introduced the cat that wears a 'Cheshire grin'?\n",
      "answers": [
        "alice's adventures in wonderland",
        "alice",
        "wonderland"
      ]
    },
    {
      "number": 2003,
      "category": "Sports&Leisure",
      "question": "What hand can a realistic poker player expect to be dealt once every 649,740 hands?\n",
      "answers": [
        "a royal flush",
        "royal flush"
      ]
    },
    {
      "number": 2004,
      "category": "People&Places",
      "question": "Who was the first woman ever to cross the Atlantic Ocean by airplane?\n",
      "answers": [
        "amellia earhart",
        "earhart"
      ]
    },
    {
      "number": 2005,
      "category": "Arts&Entertainment",
      "question": "Who got laughs opposite Eddie Murphy in the role of Detective Billy Rosewood?\n",
      "answers": [
        "judge reinhold",
        "reinhold",
        "judge"
      ]
    },
    {
      "number": 2006,
      "category": "Sports&Leisure",
      "question": "What baseballer teamed with Babe Ruth to form \"the greatest 1-2 punch the sport has ever known\"?\n",
      "answers": [
        "lou gehrig",
        "gehrig"
      ]
    },
    {
      "number": 2007,
      "category": "World",
      "question": "What book did King James authorize the first English publication of?\n",
      "answers": [
        "the bible",
        "bible"
      ]
    },
    {
      "number": 2008,
      "category": "History",
      "question": "Who's the only 20th-century USA president that had earned no undergraduate degree?\n",
      "answers": [
        "harry truman",
        "truman"
      ]
    },
    {
      "number": 2009,
      "category": "People&Places",
      "question": "What hill in Athens boasts the Parthenon and other temples?\n",
      "answers": [
        "the acropolis",
        "acropolis"
      ]
    },
    {
      "number": 2010,
      "category": "Sports&Leisure",
      "question": "What pro figure skater did a Pittsburgh Steelers star marry in 1976?\n",
      "answers": [
        "jo jo starbuck",
        "starbuck",
        "jo jo"
      ]
    },
    {
      "number": 2011,
      "category": "World",
      "question": "What profession did former First Lady, Nancy Reagan, say was \"good training for the political life which lay ahead\"?\n",
      "answers": [
        "acting"
      ]
    },
    {
      "number": 2012,
      "category": "World",
      "question": "What replacement did station KFBK rush to hire after letting Morton Downey Jr. go in 1984?\n",
      "answers": [
        "rush limbaugh",
        "rush",
        "limbaugh"
      ]
    },
    {
      "number": 2013,
      "category": "Sports&Leisure",
      "question": "What major league baseball team shares it's name with young bears?\n",
      "answers": [
        "the chicago cubs",
        "chicago cubs",
        "the cubs"
      ]
    },
    {
      "number": 2014,
      "category": "History",
      "question": "What three-word line of General MacArthur's appear on countless items dropped over the Philippines? \n",
      "answers": [
        "i shall return"
      ]
    },
    {
      "number": 2015,
      "category": "World",
      "question": "What Hungarian name was given to 37 pet pooches registered in Los Angeles County by 1991?\n",
      "answers": [
        "zsa zsa"
      ]
    },
    {
      "number": 2016,
      "category": "History",
      "question": "What five-word plea by Rodney King made the cover of \"Time\" after the 1992 Los Angeles riots took place?\n",
      "answers": [
        "can't we all get along?",
        "can't we all get along"
      ]
    },
    {
      "number": 2017,
      "category": "History",
      "question": "What U.S. general died in a Heidelberg hospital of lung congestion after a freak car accident?\n",
      "answers": [
        "george patton",
        "patton"
      ]
    },
    {
      "number": 2018,
      "category": "World",
      "question": "What Hindu god is said to have appeared on Earth as Rama, Krishna and Buddha?\n",
      "answers": [
        "vishnu"
      ]
    },
    {
      "number": 2019,
      "category": "World",
      "question": "What president adorns the double sawbuck?\n",
      "answers": [
        "andrew jackson",
        "jackson"
      ]
    },
    {
      "number": 2020,
      "category": "Arts&Entertainment",
      "question": "What 1987 movie earned Cher her first best actress Oscar?\n",
      "answers": [
        "moonstruck",
        "moon struck"
      ]
    },
    {
      "number": 2021,
      "category": "Sports&Leisure",
      "question": "What metal is an Olympic gold medal mostly made of?\n",
      "answers": [
        "silver"
      ]
    },
    {
      "number": 2022,
      "category": "People&Places",
      "question": "Who flew the Concord to sing in both the London and Philadelphia parts of Live Aid on the same day?\n",
      "answers": [
        "phil collins",
        "collins"
      ]
    },
    {
      "number": 2023,
      "category": "Sports&Leisure",
      "question": "Whose bare feet did 3,000-meter runner Mary Decker trip over at the 1984 Olympics?\n",
      "answers": [
        "zola budd's",
        "zola budd"
      ]
    },
    {
      "number": 2024,
      "category": "Science&Nature",
      "question": "What comet was named for the man who predicted it would return in 1758?\n",
      "answers": [
        "halley's comet",
        "halley",
        "halleys"
      ]
    },
    {
      "number": 2025,
      "category": "People&Places",
      "question": "What modern-day city was renamed Leningrad when a famous Bolshevik died?\n",
      "answers": [
        "st. petersburg",
        "petersburg"
      ]
    },
    {
      "number": 2026,
      "category": "History",
      "question": "What memorable line did John Paul Jones allegedly utter during a sea battle with the British?\n",
      "answers": [
        "i have not yet begun to fight"
      ]
    },
    {
      "number": 2027,
      "category": "People&Places",
      "question": "Who left his heart in San Francisco in a 1962 classic song?\n",
      "answers": [
        "tony bennett",
        "bennett"
      ]
    },
    {
      "number": 2028,
      "category": "Sports&Leisure",
      "question": "Who became golf's first career $5 million winner in 1988?\n",
      "answers": [
        "jack nicklaus",
        "nicklaus"
      ]
    },
    {
      "number": 2029,
      "category": "Sports&Leisure",
      "question": "Whose World Series heroics prompted George Steinbrenner to dub him \"Mr. October\"?\n",
      "answers": [
        "reggie jackson's",
        "jackson"
      ]
    },
    {
      "number": 2030,
      "category": "Science&Nature",
      "question": "What fruit is grown by 94 percent of backyard gardeners?\n",
      "answers": [
        "the tomato",
        "tomato"
      ]
    },
    {
      "number": 2031,
      "category": "World",
      "question": "Whose fans wore lapel buttons bearing saxophones on January 20, 1993?\n",
      "answers": [
        "bill clinton's",
        "clinton"
      ]
    },
    {
      "number": 2032,
      "category": "History",
      "question": "Title Mania: Supertramp - Give _ ______ ___.\n",
      "answers": [
        "clarence thomas",
        "clarence",
        "thomas",
        "what supreme court justice hosted and officiated at the 1994 marriage of rush limbaugh?",
        "music",
        "a little bit"
      ]
    },
    {
      "number": 2033,
      "category": "Music",
      "question": "\"Crying in the Rain\" by the Everly's was covered in the 90's. By which Swedish band?\n",
      "answers": [
        "a-ha"
      ]
    },
    {
      "number": 2034,
      "category": "Music",
      "question": "\"Big in Japan\" was a hit for which German band?\n",
      "answers": [
        "alphaville"
      ]
    },
    {
      "number": 2035,
      "category": "Music",
      "question": "Which song made Freddy Aguilar famous?\n",
      "answers": [
        "anak"
      ]
    },
    {
      "number": 2036,
      "category": "Music",
      "question": "Which Swedish band did a gig during the 2001 Eurovision Songcontest break?\n",
      "answers": [
        "aqua"
      ]
    },
    {
      "number": 2037,
      "category": "Music",
      "question": "Title Mania: The Rubettes - Sugar ____ ____.\n",
      "answers": [
        "baby love"
      ]
    },
    {
      "number": 2038,
      "category": "Music",
      "question": "Who is the Golden Earring's lead singer?\n",
      "answers": [
        "barry hay"
      ]
    },
    {
      "number": 2039,
      "category": "Music",
      "question": "First soundtrack by Peter Gabriel?\n",
      "answers": [
        "birdy"
      ]
    },
    {
      "number": 2040,
      "category": "Music",
      "question": "Rolling Stones Lyrics: Too much _____.\n",
      "answers": [
        "blood"
      ]
    },
    {
      "number": 2041,
      "category": "Music",
      "question": "Who was the main actor in Pink Floyd's \"The Wall\"?\n",
      "answers": [
        "bob geldof"
      ]
    },
    {
      "number": 2042,
      "category": "Music",
      "question": "What's the name of U2's lead singer?\n",
      "answers": [
        "bono vox",
        "bono"
      ]
    },
    {
      "number": 2043,
      "category": "Music",
      "question": "Bob Geldof was lead singer in which band?\n",
      "answers": [
        "boomtown rats",
        "the boomtown rats"
      ]
    },
    {
      "number": 2044,
      "category": "Music",
      "question": "Who plays lead guitar in Queen?\n",
      "answers": [
        "brian may"
      ]
    },
    {
      "number": 2045,
      "category": "Music",
      "question": "Who is also called 'The Boss'?\n",
      "answers": [
        "bruce springsteen"
      ]
    },
    {
      "number": 2046,
      "category": "Music",
      "question": "Andy Latimer, song writer and guitar player in which band?\n",
      "answers": [
        "camel"
      ]
    },
    {
      "number": 2047,
      "category": "Music",
      "question": "Who takes over Phil Collins drums when performing live concerts?\n",
      "answers": [
        "chester thompson"
      ]
    },
    {
      "number": 2048,
      "category": "Music",
      "question": "Which band came out of Split Enz?\n",
      "answers": [
        "crowded house"
      ]
    },
    {
      "number": 2049,
      "category": "Music",
      "question": "Justin Hayward was one of the main singers on Jeff Wayne's \"War of the Worlds\". Who was the other one?\n",
      "answers": [
        "david essex"
      ]
    },
    {
      "number": 2050,
      "category": "Music",
      "question": "What is Blondie's real name?\n",
      "answers": [
        "deborah harry",
        "debbie harry"
      ]
    },
    {
      "number": 2051,
      "category": "Music",
      "question": "The hit single \"People are People\" is by which band.\n",
      "answers": [
        "depeche mode"
      ]
    },
    {
      "number": 2052,
      "category": "Music",
      "question": "The first Alan Parsons Project album was about this writer.\n",
      "answers": [
        "edgar allan poe"
      ]
    },
    {
      "number": 2053,
      "category": "Music",
      "question": "Who is also known as 'The King'?\n",
      "answers": [
        "elvis presley"
      ]
    },
    {
      "number": 2054,
      "category": "Music",
      "question": "What Italian composed \"Once upon a time in the West\"?\n",
      "answers": [
        "ennio morricone"
      ]
    },
    {
      "number": 2055,
      "category": "Music",
      "question": "What Italian singer had hits with \"Musica é\" and \"Una terra Promessa\"?\n",
      "answers": [
        "eros ramazotti"
      ]
    },
    {
      "number": 2056,
      "category": "Music",
      "question": "Who was a singer in Marillion and made an album called \"Suits\"?\n",
      "answers": [
        "fish"
      ]
    },
    {
      "number": 2057,
      "category": "Music",
      "question": "Title Mania: Genesis - Follow you, ______ __.\n",
      "answers": [
        "follow me"
      ]
    },
    {
      "number": 2058,
      "category": "Music",
      "question": "Who is also known as 'The Voice'?\n",
      "answers": [
        "frank sinatra"
      ]
    },
    {
      "number": 2059,
      "category": "Music",
      "question": "By who was the hit \"Dancing Fool\"?\n",
      "answers": [
        "frank zappa"
      ]
    },
    {
      "number": 2060,
      "category": "Music",
      "question": "Who was Queen's lead singer?\n",
      "answers": [
        "freddie mercury"
      ]
    },
    {
      "number": 2061,
      "category": "Music",
      "question": "Title Mania: Deep Purple - Woman ____ _____.\n",
      "answers": [
        "from tokyo"
      ]
    },
    {
      "number": 2062,
      "category": "Music",
      "question": "Who plays bass guitars in Kiss\n",
      "answers": [
        "gene simmons"
      ]
    },
    {
      "number": 2063,
      "category": "Music",
      "question": "Mike Rutherford plays guitars in which band?\n",
      "answers": [
        "genesis"
      ]
    },
    {
      "number": 2064,
      "category": "Music",
      "question": "Tony Banks plays keyboards in which band?\n",
      "answers": [
        "genesis"
      ]
    },
    {
      "number": 2065,
      "category": "Music",
      "question": "\"Eat the Rich\" is on which Aerosmith album?\n",
      "answers": [
        "get a grip"
      ]
    },
    {
      "number": 2066,
      "category": "Music",
      "question": "By which band is the 70's hit \"Radar Love\"?\n",
      "answers": [
        "golden earring",
        "the golden earring"
      ]
    },
    {
      "number": 2067,
      "category": "Music",
      "question": "The band's name before they were called Golden Earring?\n",
      "answers": [
        "golden earrings",
        "the golden earrings"
      ]
    },
    {
      "number": 2068,
      "category": "Music",
      "question": "Who plays the bass guitar in Emerson, Lake and Palmer?\n",
      "answers": [
        "greg lake",
        "lake"
      ]
    },
    {
      "number": 2069,
      "category": "Music",
      "question": "Which Joy Division singer committed suicide in 1982?\n",
      "answers": [
        "ian curtis"
      ]
    },
    {
      "number": 2070,
      "category": "Music",
      "question": "Title Mania: The Moody Blues - Nights __ _____ _____.\n",
      "answers": [
        "in white satin"
      ]
    },
    {
      "number": 2071,
      "category": "Music",
      "question": "\"Calypso\" by John Denver was about a ship, owned by who?\n",
      "answers": [
        "jacques cousteau"
      ]
    },
    {
      "number": 2072,
      "category": "Music",
      "question": "Who plays bass guitars in Queen?\n",
      "answers": [
        "john deacon"
      ]
    },
    {
      "number": 2073,
      "category": "Music",
      "question": "\"Music was my First Love\" was a hit by who?\n",
      "answers": [
        "john miles"
      ]
    },
    {
      "number": 2074,
      "category": "Music",
      "question": "Which band made the albums \"Unknown Pleasures\", \"Closer\" and \"Still\"?\n",
      "answers": [
        "joy division"
      ]
    },
    {
      "number": 2075,
      "category": "Music",
      "question": "By who is the song \"Victim of Changes\"?\n",
      "answers": [
        "judas priest"
      ]
    },
    {
      "number": 2076,
      "category": "Music",
      "question": "Who did \"Don't cry for me Argentina\" on the original Evita musical?\n",
      "answers": [
        "julie covington"
      ]
    },
    {
      "number": 2077,
      "category": "Music",
      "question": "Who was the female voice on Jeff Wayne's \"War of the Worlds\"?\n",
      "answers": [
        "julie covington"
      ]
    },
    {
      "number": 2078,
      "category": "Music",
      "question": "Who is the singer of The Moody Blues?\n",
      "answers": [
        "justin hayward"
      ]
    },
    {
      "number": 2079,
      "category": "Music",
      "question": "\"Don't give up\" was done by Peter Gabriel and who?\n",
      "answers": [
        "kate bush"
      ]
    },
    {
      "number": 2080,
      "category": "Music",
      "question": "\"Shiny Happy People\" was done by R.E.M. and who?\n",
      "answers": [
        "kate pierson"
      ]
    },
    {
      "number": 2081,
      "category": "Music",
      "question": "By which band is the song \"God of Thunder\"?\n",
      "answers": [
        "kiss"
      ]
    },
    {
      "number": 2082,
      "category": "Music",
      "question": "What band made the albums \"Destroyer\", \"Double Platinum\" and \"Hotter than Hell\"?\n",
      "answers": [
        "kiss"
      ]
    },
    {
      "number": 2083,
      "category": "Music",
      "question": "Which country singer did \"It's so easy\"?\n",
      "answers": [
        "linda ronstadt"
      ]
    },
    {
      "number": 2084,
      "category": "Music",
      "question": "Who took a walk on the wildside in the early 70's?\n",
      "answers": [
        "lou reed"
      ]
    },
    {
      "number": 2085,
      "category": "Music",
      "question": "\"The Unforgiven\" and \"Enter Sandman\", hit singles by which band?\n",
      "answers": [
        "metallica"
      ]
    },
    {
      "number": 2086,
      "category": "Music",
      "question": "Which band did \"Silent Running\" and \"Living Years\"?\n",
      "answers": [
        "mike and the mechanics"
      ]
    },
    {
      "number": 2087,
      "category": "Music",
      "question": "There are 2 different versions of the album \"Tubular Bells\". Who made both of them?\n",
      "answers": [
        "mike oldfield"
      ]
    },
    {
      "number": 2088,
      "category": "Music",
      "question": "Which UK band was formed after Joy Division singer Ian Curtis died?\n",
      "answers": [
        "new order"
      ]
    },
    {
      "number": 2089,
      "category": "Music",
      "question": "On which ship was Madness in the early 80's?\n",
      "answers": [
        "night boat to cairo"
      ]
    },
    {
      "number": 2090,
      "category": "Music",
      "question": "On which Paul Young album was his hit single \"Where ever I lay my hat\"?\n",
      "answers": [
        "no parles"
      ]
    },
    {
      "number": 2091,
      "category": "Music",
      "question": "On which Paul Young album was his hit single \"Come back and stay\"?\n",
      "answers": [
        "no parlez"
      ]
    },
    {
      "number": 2092,
      "category": "Music",
      "question": "Title Mania: Deep Purple - Smoke __ ___ _____.\n",
      "answers": [
        "on the water"
      ]
    },
    {
      "number": 2093,
      "category": "Music",
      "question": "The 70's disco hit \"Born to be Alive\" was performed by?\n",
      "answers": [
        "patrick hernandez"
      ]
    },
    {
      "number": 2094,
      "category": "Music",
      "question": "Who sings \"Living Years\" in Mike and the Mechanics?\n",
      "answers": [
        "paul carrack"
      ]
    },
    {
      "number": 2095,
      "category": "Music",
      "question": "What's the name of Genesis' former lead singer?\n",
      "answers": [
        "peter gabriel"
      ]
    },
    {
      "number": 2096,
      "category": "Music",
      "question": "What's the name of Genesis' lead singer?\n",
      "answers": [
        "phil collins"
      ]
    },
    {
      "number": 2097,
      "category": "Music",
      "question": "Where is Freddy Aguilar from?\n",
      "answers": [
        "philippines",
        "the philippines"
      ]
    },
    {
      "number": 2098,
      "category": "Music",
      "question": "David Gilmour, guitars and vocals in which band?\n",
      "answers": [
        "pink floyd"
      ]
    },
    {
      "number": 2099,
      "category": "Music",
      "question": "Which band recorded \"A Momentary Lapse of Reasons\" in 1989?\n",
      "answers": [
        "pink floyd"
      ]
    },
    {
      "number": 2100,
      "category": "Music",
      "question": "What is Peter Gabriel's first live album called?\n",
      "answers": [
        "plays live",
        "peter gabriel plays live"
      ]
    },
    {
      "number": 2101,
      "category": "Music",
      "question": "\"What it Takes\" is on which Aerosmith album?\n",
      "answers": [
        "pump"
      ]
    },
    {
      "number": 2102,
      "category": "Music",
      "question": "Finish: George, Paul, John & _____.\n",
      "answers": [
        "ringo"
      ]
    },
    {
      "number": 2103,
      "category": "Music",
      "question": "The mega hit \"Love is All\" was not really by a singing frog, by who was it?\n",
      "answers": [
        "roger glover and guests",
        "roger glover"
      ]
    },
    {
      "number": 2104,
      "category": "Music",
      "question": "Which Supertramp member made a solo album called \"In the Eye of the Storm\"?\n",
      "answers": [
        "roger hodson"
      ]
    },
    {
      "number": 2105,
      "category": "Music",
      "question": "Who plays drums in Queen?\n",
      "answers": [
        "roger taylor"
      ]
    },
    {
      "number": 2106,
      "category": "Music",
      "question": "Who wrote Pink Floyd's \"The Wall\"?\n",
      "answers": [
        "roger waters"
      ]
    },
    {
      "number": 2107,
      "category": "Music",
      "question": "Title Mania: The Bay City Rollers - ________ night.\n",
      "answers": [
        "saturday"
      ]
    },
    {
      "number": 2108,
      "category": "Music",
      "question": "Sid Vicious played lead guitars in which band?\n",
      "answers": [
        "sex pistols"
      ]
    },
    {
      "number": 2109,
      "category": "Music",
      "question": "Who was singer in The Police?\n",
      "answers": [
        "sting"
      ]
    },
    {
      "number": 2110,
      "category": "Music",
      "question": "Who is Jesus in Andrew Lloyd Webber's \"Jesus Christ Superstar\"?\n",
      "answers": [
        "ted neeley"
      ]
    },
    {
      "number": 2111,
      "category": "Music",
      "question": "Kate Pierson is a singer in which band?\n",
      "answers": [
        "the b52's",
        "b52's"
      ]
    },
    {
      "number": 2112,
      "category": "Music",
      "question": "Title Mania: Simple Minds - Upon ___ _______.\n",
      "answers": [
        "the catwalk"
      ]
    },
    {
      "number": 2113,
      "category": "Music",
      "question": "Robert Smith is the lead singer of which band?\n",
      "answers": [
        "the cure",
        "cure"
      ]
    },
    {
      "number": 2114,
      "category": "Music",
      "question": "The 80's album \"Seventeen Seconds\" was by which UK New Wave band?\n",
      "answers": [
        "the cure",
        "cure"
      ]
    },
    {
      "number": 2115,
      "category": "Music",
      "question": "\"Money\" is on which Pink Floyd album?\n",
      "answers": [
        "the dark side of the moon",
        "dark side of the moon"
      ]
    },
    {
      "number": 2116,
      "category": "Music",
      "question": "Pink Floyd says, this is the best album they ever made.\n",
      "answers": [
        "the division bell",
        "division bell"
      ]
    },
    {
      "number": 2117,
      "category": "Music",
      "question": "Phil Oakey is the lead singer of which band?\n",
      "answers": [
        "the human league",
        "human league"
      ]
    },
    {
      "number": 2118,
      "category": "Music",
      "question": "Where is Golden Earring from?\n",
      "answers": [
        "the netherlands",
        "netherlands",
        "holland"
      ]
    },
    {
      "number": 2119,
      "category": "Music",
      "question": "\"Every little thing she does\" was a hit by which band?\n",
      "answers": [
        "the police"
      ]
    },
    {
      "number": 2120,
      "category": "Music",
      "question": "To which band is Bill Wyman related?\n",
      "answers": [
        "the rolling stones",
        "rolling stones"
      ]
    },
    {
      "number": 2121,
      "category": "Music",
      "question": "To which band is Keith Richards related?\n",
      "answers": [
        "the rolling stones",
        "rolling stones"
      ]
    },
    {
      "number": 2122,
      "category": "Music",
      "question": "To which band is Mick Jagger related?\n",
      "answers": [
        "the rolling stones",
        "rolling stones"
      ]
    },
    {
      "number": 2123,
      "category": "Music",
      "question": "To which band is Ron Wood related?\n",
      "answers": [
        "the rolling stones",
        "rolling stones"
      ]
    },
    {
      "number": 2124,
      "category": "Music",
      "question": "\"Still Loving You\" was a big hit for which German band?\n",
      "answers": [
        "the scorpions",
        "scorpions"
      ]
    },
    {
      "number": 2125,
      "category": "Music",
      "question": "\"Heroes\" and \"Golden Brown\" were hits by which band?\n",
      "answers": [
        "the stranglers",
        "stranglers"
      ]
    },
    {
      "number": 2126,
      "category": "Music",
      "question": "Because of what is Kiss singer Gene Simmons famous?\n",
      "answers": [
        "tongue",
        "his tongue"
      ]
    },
    {
      "number": 2127,
      "category": "Music",
      "question": "Who made an album called \"Rattle and Hum\" in 1989?\n",
      "answers": [
        "u2"
      ]
    },
    {
      "number": 2128,
      "category": "Music",
      "question": "The album \"Innocent Victims\" is by which band?\n",
      "answers": [
        "uriah heep"
      ]
    },
    {
      "number": 2129,
      "category": "Music",
      "question": "Which band made a hit called \"Running with the Devil\"?\n",
      "answers": [
        "van halen"
      ]
    },
    {
      "number": 2130,
      "category": "Music",
      "question": "\"I wanna dance with somebody\", 1989 hit single by who?\n",
      "answers": [
        "whitney houston"
      ]
    },
    {
      "number": 2131,
      "category": "Music",
      "question": "Alabama\n",
      "answers": [
        "zucchero",
        "\"senza una donna\" was a hit by paul young and?",
        "us capitals",
        "montgomery"
      ]
    },
    {
      "number": 2132,
      "category": "US Capitals",
      "question": "Alaska\n",
      "answers": [
        "juneau"
      ]
    },
    {
      "number": 2133,
      "category": "US Capitals",
      "question": "Arizona\n",
      "answers": [
        "phoenix"
      ]
    },
    {
      "number": 2134,
      "category": "US Capitals",
      "question": "Arkansas\n",
      "answers": [
        "little rock"
      ]
    },
    {
      "number": 2135,
      "category": "US Capitals",
      "question": "Califorina\n",
      "answers": [
        "sacramento"
      ]
    },
    {
      "number": 2136,
      "category": "US Capitals",
      "question": "Colorado\n",
      "answers": [
        "denver"
      ]
    },
    {
      "number": 2137,
      "category": "US Capitals",
      "question": "Connecticut\n",
      "answers": [
        "hartford"
      ]
    },
    {
      "number": 2138,
      "category": "US Capitals",
      "question": "Delaware\n",
      "answers": [
        "dover"
      ]
    },
    {
      "number": 2139,
      "category": "US Capitals",
      "question": "Florida\n",
      "answers": [
        "tallahassee"
      ]
    },
    {
      "number": 2140,
      "category": "US Capitals",
      "question": "Georgia\n",
      "answers": [
        "atlanta"
      ]
    },
    {
      "number": 2141,
      "category": "US Capitals",
      "question": "Hawaii\n",
      "answers": [
        "honolulu"
      ]
    },
    {
      "number": 2142,
      "category": "US Capitals",
      "question": "Idaho\n",
      "answers": [
        "boise"
      ]
    },
    {
      "number": 2143,
      "category": "US Capitals",
      "question": "Indiana\n",
      "answers": [
        "indianapolis"
      ]
    },
    {
      "number": 2144,
      "category": "US Capitals",
      "question": "Illinois\n",
      "answers": [
        "springfield"
      ]
    },
    {
      "number": 2145,
      "category": "US Capitals",
      "question": "Iowa\n",
      "answers": [
        "des moines"
      ]
    },
    {
      "number": 2146,
      "category": "US Capitals",
      "question": "Kansas\n",
      "answers": [
        "topeka"
      ]
    },
    {
      "number": 2147,
      "category": "US Capitals",
      "question": "Kentucky\n",
      "answers": [
        "frankfort"
      ]
    },
    {
      "number": 2148,
      "category": "US Capitals",
      "question": "Louisiana\n",
      "answers": [
        "baton rouge"
      ]
    },
    {
      "number": 2149,
      "category": "US Capitals",
      "question": "Maine\n",
      "answers": [
        "augusta"
      ]
    },
    {
      "number": 2150,
      "category": "US Capitals",
      "question": "Maryland\n",
      "answers": [
        "annapolis"
      ]
    },
    {
      "number": 2151,
      "category": "US Capitals",
      "question": "Massachusetts\n",
      "answers": [
        "boston"
      ]
    },
    {
      "number": 2152,
      "category": "US Capitals",
      "question": "Michigan\n",
      "answers": [
        "lansing"
      ]
    },
    {
      "number": 2153,
      "category": "US Capitals",
      "question": "Minnesota\n",
      "answers": [
        "st. paul",
        "st paul"
      ]
    },
    {
      "number": 2154,
      "category": "US Capitals",
      "question": "Mississippi\n",
      "answers": [
        "jackson"
      ]
    },
    {
      "number": 2155,
      "category": "US Capitals",
      "question": "Missouri\n",
      "answers": [
        "jefferson city"
      ]
    },
    {
      "number": 2156,
      "category": "US Capitals",
      "question": "Montana\n",
      "answers": [
        "helena"
      ]
    },
    {
      "number": 2157,
      "category": "US Capitals",
      "question": "Nebraska\n",
      "answers": [
        "lincoln"
      ]
    },
    {
      "number": 2158,
      "category": "US Capitals",
      "question": "Nevada\n",
      "answers": [
        "carson city"
      ]
    },
    {
      "number": 2159,
      "category": "US Capitals",
      "question": "New Hampshire\n",
      "answers": [
        "concord"
      ]
    },
    {
      "number": 2160,
      "category": "US Capitals",
      "question": "New Jersey\n",
      "answers": [
        "trenton"
      ]
    },
    {
      "number": 2161,
      "category": "US Capitals",
      "question": "New Mexico\n",
      "answers": [
        "santa fe"
      ]
    },
    {
      "number": 2162,
      "category": "US Capitals",
      "question": "New York\n",
      "answers": [
        "albany"
      ]
    },
    {
      "number": 2163,
      "category": "US Capitals",
      "question": "North Carolina\n",
      "answers": [
        "raleigh"
      ]
    },
    {
      "number": 2164,
      "category": "US Capitals",
      "question": "North Dakota\n",
      "answers": [
        "bismarck"
      ]
    },
    {
      "number": 2165,
      "category": "US Capitals",
      "question": "Ohio\n",
      "answers": [
        "columbus"
      ]
    },
    {
      "number": 2166,
      "category": "US Capitals",
      "question": "Oklahoma\n",
      "answers": [
        "oklahoma city"
      ]
    },
    {
      "number": 2167,
      "category": "US Capitals",
      "question": "Oregon\n",
      "answers": [
        "salem"
      ]
    },
    {
      "number": 2168,
      "category": "US Capitals",
      "question": "Pennsylvania\n",
      "answers": [
        "harrisburg"
      ]
    },
    {
      "number": 2169,
      "category": "US Capitals",
      "question": "Rhode Island\n",
      "answers": [
        "providence"
      ]
    },
    {
      "number": 2170,
      "category": "US Capitals",
      "question": "South Carolina\n",
      "answers": [
        "columbia"
      ]
    },
    {
      "number": 2171,
      "category": "US Capitals",
      "question": "South Dakota\n",
      "answers": [
        "pierre"
      ]
    },
    {
      "number": 2172,
      "category": "US Capitals",
      "question": "Tennessee\n",
      "answers": [
        "nashville"
      ]
    },
    {
      "number": 2173,
      "category": "Us Capitals",
      "question": "Texas\n",
      "answers": [
        "austin"
      ]
    },
    {
      "number": 2174,
      "category": "US Capitals",
      "question": "Utah\n",
      "answers": [
        "salt lake city"
      ]
    },
    {
      "number": 2175,
      "category": "US Capitals",
      "question": "Vermont\n",
      "answers": [
        "montpelier"
      ]
    },
    {
      "number": 2176,
      "category": "US Capitals",
      "question": "Virginia\n",
      "answers": [
        "richmond"
      ]
    },
    {
      "number": 2177,
      "category": "US Capitals",
      "question": "Washington\n",
      "answers": [
        "olympia"
      ]
    },
    {
      "number": 2178,
      "category": "US Capitals",
      "question": "West Virginia\n",
      "answers": [
        "charleston"
      ]
    },
    {
      "number": 2179,
      "category": "US Capitals",
      "question": "Wisconsin\n",
      "answers": [
        "madison"
      ]
    },
    {
      "number": 2180,
      "category": "US Capitals",
      "question": "Who ruled in Rome in 31bc - 14ad?\n",
      "answers": [
        "cheyenne",
        "wyoming",
        "roman emperors:",
        "augustus"
      ]
    },
    {
      "number": 2181,
      "category": "Roman Emperors:",
      "question": "Who ruled in rome in 14ad - 37ad?\n",
      "answers": [
        "tiberius"
      ]
    },
    {
      "number": 2182,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 37ad - 41ad?\n",
      "answers": [
        "caligula"
      ]
    },
    {
      "number": 2183,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 41ad - 54ad?\n",
      "answers": [
        "claudius"
      ]
    },
    {
      "number": 2184,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 54ad - 68ad?\n",
      "answers": [
        "nero"
      ]
    },
    {
      "number": 2185,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 69ad?\n",
      "answers": [
        "vitellius"
      ]
    },
    {
      "number": 2186,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 69ad - 79ad?\n",
      "answers": [
        "vespasianus"
      ]
    },
    {
      "number": 2187,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 79ad - 81ad?\n",
      "answers": [
        "titus"
      ]
    },
    {
      "number": 2188,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 81ad - 96ad?\n",
      "answers": [
        "domitianus"
      ]
    },
    {
      "number": 2189,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 96ad - 98ad?\n",
      "answers": [
        "nerva"
      ]
    },
    {
      "number": 2190,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 98ad - 117ad?\n",
      "answers": [
        "trajanus"
      ]
    },
    {
      "number": 2191,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 117ad - 138ad?\n",
      "answers": [
        "hadrianus"
      ]
    },
    {
      "number": 2192,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 138ad - 161ad?\n",
      "answers": [
        "antonius pius"
      ]
    },
    {
      "number": 2193,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 161ad - 180ad?\n",
      "answers": [
        "marcus aurelius"
      ]
    },
    {
      "number": 2194,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 180ad - 192ad?\n",
      "answers": [
        "commodus"
      ]
    },
    {
      "number": 2195,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 193ad?\n",
      "answers": [
        "didius julianus"
      ]
    },
    {
      "number": 2196,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 193ad - 211ad?\n",
      "answers": [
        "septimus severus"
      ]
    },
    {
      "number": 2197,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 211ad - 217ad?\n",
      "answers": [
        "caracalla"
      ]
    },
    {
      "number": 2198,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 217ad - 218ad?\n",
      "answers": [
        "macrinus"
      ]
    },
    {
      "number": 2199,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 218ad - 222ad?\n",
      "answers": [
        "heliogabalus"
      ]
    },
    {
      "number": 2200,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 222ad - 235ad?\n",
      "answers": [
        "alexander severus"
      ]
    },
    {
      "number": 2201,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 235ad - 238ad?\n",
      "answers": [
        "maximinus"
      ]
    },
    {
      "number": 2202,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 238ad?\n",
      "answers": [
        "balbinus"
      ]
    },
    {
      "number": 2203,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 238ad - 244ad?\n",
      "answers": [
        "gordianus iii"
      ]
    },
    {
      "number": 2204,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 244ad - 249ad?\n",
      "answers": [
        "philippus"
      ]
    },
    {
      "number": 2205,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 249ad - 251ad?\n",
      "answers": [
        "decius"
      ]
    },
    {
      "number": 2206,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 251ad - 254ad?\n",
      "answers": [
        "gallus"
      ]
    },
    {
      "number": 2207,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 254ad?\n",
      "answers": [
        "aemilianus"
      ]
    },
    {
      "number": 2208,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 254ad - 260ad?\n",
      "answers": [
        "valerianus"
      ]
    },
    {
      "number": 2209,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 254ad - 268ad?\n",
      "answers": [
        "galienus"
      ]
    },
    {
      "number": 2210,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 268ad - 270ad?\n",
      "answers": [
        "claudius ii"
      ]
    },
    {
      "number": 2211,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 270ad - 275ad?\n",
      "answers": [
        "aerelianus"
      ]
    },
    {
      "number": 2212,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 275ad - 276ad?\n",
      "answers": [
        "tacitus"
      ]
    },
    {
      "number": 2213,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 276ad - 282ad?\n",
      "answers": [
        "prubus"
      ]
    },
    {
      "number": 2214,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 282ad - 283ad?\n",
      "answers": [
        "carus"
      ]
    },
    {
      "number": 2215,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 283ad - 284ad?\n",
      "answers": [
        "numerianus"
      ]
    },
    {
      "number": 2216,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 283ad - 285ad?\n",
      "answers": [
        "carinus"
      ]
    },
    {
      "number": 2217,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 284ad - 305ad?\n",
      "answers": [
        "diocletianus"
      ]
    },
    {
      "number": 2218,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 305ad - 306ad?\n",
      "answers": [
        "galerius"
      ]
    },
    {
      "number": 2219,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 306ad - 324ad?\n",
      "answers": [
        "maxentius"
      ]
    },
    {
      "number": 2220,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 324ad - 337ad?\n",
      "answers": [
        "constantinus the great"
      ]
    },
    {
      "number": 2221,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 337ad - 361ad?\n",
      "answers": [
        "constantinus ii"
      ]
    },
    {
      "number": 2222,
      "category": "Roman Emperors:",
      "question": " Who ruled in Rome in 337ad - 350ad?\n",
      "answers": [
        "constans"
      ]
    },
    {
      "number": 2223,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 361ad - 363ad?\n",
      "answers": [
        "julianus apostata"
      ]
    },
    {
      "number": 2224,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 363ad - 364ad?\n",
      "answers": [
        "jovianus"
      ]
    },
    {
      "number": 2225,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 364ad - 375ad?\n",
      "answers": [
        "valentinianus"
      ]
    },
    {
      "number": 2226,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 364ad - 378ad?\n",
      "answers": [
        "valens"
      ]
    },
    {
      "number": 2227,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 375ad - 383ad?\n",
      "answers": [
        "gratianus"
      ]
    },
    {
      "number": 2228,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 375ad - 392ad?\n",
      "answers": [
        "valentinianus"
      ]
    },
    {
      "number": 2229,
      "category": "Roman Emperors:",
      "question": "Who ruled in Rome in 378ad - 395ad?\n",
      "answers": [
        "theodosius the great"
      ]
    },
    {
      "number": 2230,
      "category": "World Leaders:",
      "question": "From which country was Muhammad Zahir Shah king?\n",
      "answers": [
        "afghanistan"
      ]
    },
    {
      "number": 2231,
      "category": "World Leaders:",
      "question": "From which country was General Juan D. Peron president?\n",
      "answers": [
        "argentina"
      ]
    },
    {
      "number": 2232,
      "category": "World Leaders:",
      "question": "From which country was Leopold III king?\n",
      "answers": [
        "belgium"
      ]
    },
    {
      "number": 2233,
      "category": "World Leaders:",
      "question": "From which country was Yigme Wangchuk de maharadja?\n",
      "answers": [
        "bhutan"
      ]
    },
    {
      "number": 2234,
      "category": "World Leaders:",
      "question": "From which country was Sao Sjwe Thaik president?\n",
      "answers": [
        "burma"
      ]
    },
    {
      "number": 2235,
      "category": "World Leaders:",
      "question": "From which country was Enriquez Hertzog president?\n",
      "answers": [
        "bolivia"
      ]
    },
    {
      "number": 2236,
      "category": "World Leaders:",
      "question": "From which country was Generaal Enrique Gaspar Dutra president?\n",
      "answers": [
        "brazil"
      ]
    },
    {
      "number": 2237,
      "category": "World Leaders:",
      "question": "From which country was Gabriel Gonzalez Videla president?\n",
      "answers": [
        "chile"
      ]
    },
    {
      "number": 2238,
      "category": "World Leaders:",
      "question": "From which country was Li Tsuang Jen president?\n",
      "answers": [
        "china"
      ]
    },
    {
      "number": 2239,
      "category": "World Leaders:",
      "question": "From which country was Mariano Ospina Perez president?\n",
      "answers": [
        "colombia"
      ]
    },
    {
      "number": 2240,
      "category": "World Leaders:",
      "question": "From which country was Jose Figuerez president?\n",
      "answers": [
        "costa rica"
      ]
    },
    {
      "number": 2241,
      "category": "World Leaders:",
      "question": "From which country was Carlos Prio Socarras president?\n",
      "answers": [
        "cuba"
      ]
    },
    {
      "number": 2242,
      "category": "World Leaders:",
      "question": "From which country was Frederick IX king?\n",
      "answers": [
        "denmark"
      ]
    },
    {
      "number": 2243,
      "category": "World Leaders:",
      "question": "From which country was Galo Plaza Lasso president?\n",
      "answers": [
        "ecuador"
      ]
    },
    {
      "number": 2244,
      "category": "World Leaders:",
      "question": "Which country had king Farouk?\n",
      "answers": [
        "egypt"
      ]
    },
    {
      "number": 2245,
      "category": "World Leaders:",
      "question": "From which country was Jubo Paasikivi president?\n",
      "answers": [
        "finland"
      ]
    },
    {
      "number": 2246,
      "category": "World Leaders:",
      "question": "From which country was Vincent Auriol president?\n",
      "answers": [
        "france"
      ]
    },
    {
      "number": 2247,
      "category": "World Leaders:",
      "question": "Born in Greece in 1901, who was king in 1947?\n",
      "answers": [
        "paul i"
      ]
    },
    {
      "number": 2248,
      "category": "World Leaders:",
      "question": "From which country was George VI king?\n",
      "answers": [
        "geat britain"
      ]
    },
    {
      "number": 2249,
      "category": "World Leaders:",
      "question": "From which country was Juan Jose Arevalo president?\n",
      "answers": [
        "guatemala"
      ]
    },
    {
      "number": 2250,
      "category": "World Leaders:",
      "question": "From which country was Dumarsais Estime president?\n",
      "answers": [
        "haiti"
      ]
    },
    {
      "number": 2251,
      "category": "World Leaders:",
      "question": "From which country was Juan Manuel Galves president?\n",
      "answers": [
        "honduras"
      ]
    },
    {
      "number": 2252,
      "category": "World Leaders:",
      "question": "From which country was Arpad Szakasits president?\n",
      "answers": [
        "hungary"
      ]
    },
    {
      "number": 2253,
      "category": "World Leaders:",
      "question": "From which country was Sean T. O'Kelly president?\n",
      "answers": [
        "ireland"
      ]
    },
    {
      "number": 2254,
      "category": "World Leaders:",
      "question": "From which country was Faisal II king?\n",
      "answers": [
        "iraq"
      ]
    },
    {
      "number": 2255,
      "category": "World Leaders:",
      "question": "From which country was Shahpoor Muhammad Reza Pahlevi shah?\n",
      "answers": [
        "iran"
      ]
    },
    {
      "number": 2256,
      "category": "World Leaders:",
      "question": "From which country was Chaim Weizmann president?\n",
      "answers": [
        "israel"
      ]
    },
    {
      "number": 2257,
      "category": "World Leaders:",
      "question": "From which country was Luigi Einaudi president?\n",
      "answers": [
        "italy"
      ]
    },
    {
      "number": 2258,
      "category": "World Leaders:",
      "question": "From which country was Hirohito emperor?\n",
      "answers": [
        "japan"
      ]
    },
    {
      "number": 2259,
      "category": "World Leaders:",
      "question": "From which country was Bechara el Khoury president?\n",
      "answers": [
        "lebanon"
      ]
    },
    {
      "number": 2260,
      "category": "World Leaders:",
      "question": "From which country was William V.S. Tubman president?\n",
      "answers": [
        "liberya"
      ]
    },
    {
      "number": 2261,
      "category": "World Leaders:",
      "question": "From which country was Sidi Muhammad sultan?\n",
      "answers": [
        "morocco"
      ]
    },
    {
      "number": 2262,
      "category": "World Leaders:",
      "question": "From which country was Miguel Aleman president?\n",
      "answers": [
        "mexico"
      ]
    },
    {
      "number": 2263,
      "category": "World Leaders:",
      "question": "From which country was Juliana queen?\n",
      "answers": [
        "netherlands"
      ]
    },
    {
      "number": 2264,
      "category": "World Leaders:",
      "question": "From which country was Victor M. Roman y Reyes president?\n",
      "answers": [
        "nicaragua"
      ]
    },
    {
      "number": 2265,
      "category": "World Leaders:",
      "question": "From which country was Haakon VII king?\n",
      "answers": [
        "norway"
      ]
    },
    {
      "number": 2266,
      "category": "World Leaders:",
      "question": "From which country was Karl Renner president?\n",
      "answers": [
        "austria"
      ]
    },
    {
      "number": 2267,
      "category": "World Leaders:",
      "question": "From which country was Domingo Diaz president?\n",
      "answers": [
        "panama"
      ]
    },
    {
      "number": 2268,
      "category": "World Leaders:",
      "question": "From which country was F. Molas Lopes president?\n",
      "answers": [
        "paraguay"
      ]
    },
    {
      "number": 2269,
      "category": "World Leaders:",
      "question": "From which country was Manuel A. Odira president?\n",
      "answers": [
        "peru"
      ]
    },
    {
      "number": 2270,
      "category": "World Leaders:",
      "question": " From which country was Elpidio Quirino president?\n",
      "answers": [
        "philippines",
        "the philippines"
      ]
    },
    {
      "number": 2271,
      "category": "World Leaders:",
      "question": "From which country was Boleslav Bierut president?\n",
      "answers": [
        "poland"
      ]
    },
    {
      "number": 2272,
      "category": "World Leaders:",
      "question": "From which country was Antonio de Fragoso Carmona president?\n",
      "answers": [
        "portugal"
      ]
    },
    {
      "number": 2273,
      "category": "World Leaders:",
      "question": "From which country was Abdul Aziz al Faisal al Saud king?\n",
      "answers": [
        "saudi arabia"
      ]
    },
    {
      "number": 2274,
      "category": "World Leaders:",
      "question": "From which country was Hoesni Zaim president?\n",
      "answers": [
        "syria"
      ]
    },
    {
      "number": 2275,
      "category": "World Leaders:",
      "question": "From which country was Phumibol Aduldet king?\n",
      "answers": [
        "thailand"
      ]
    },
    {
      "number": 2276,
      "category": "World Leaders:",
      "question": "From which country was Ismet Inonu president?\n",
      "answers": [
        "turkey"
      ]
    },
    {
      "number": 2277,
      "category": "World Leaders:",
      "question": "From which country was Battle Berres president?\n",
      "answers": [
        "uruguay"
      ]
    },
    {
      "number": 2278,
      "category": "World Leaders:",
      "question": "From which country was Gustav V king?\n",
      "answers": [
        "sweden"
      ]
    },
    {
      "number": 2279,
      "category": "WWI:",
      "question": "Who in Austria was killed on June 28 1914?\n",
      "answers": [
        "franz ferdinand"
      ]
    },
    {
      "number": 2280,
      "category": "WWI:",
      "question": "Who was killed in Paris on July 31 1914?\n",
      "answers": [
        "jean jaures"
      ]
    },
    {
      "number": 2281,
      "category": "WWI:",
      "question": "Who said 'Not kennt kein Gebot' on August 4 1914?\n",
      "answers": [
        "von bethmann hollweg"
      ]
    },
    {
      "number": 2282,
      "category": "WWI:",
      "question": "Which Belgian city was taken by the Germans on August 4-17 1914?\n",
      "answers": [
        "liege",
        "luik"
      ]
    },
    {
      "number": 2283,
      "category": "WWI:",
      "question": "August 19 1914: Ultimatum from Japan to which country?\n",
      "answers": [
        "germany"
      ]
    },
    {
      "number": 2284,
      "category": "WWI:",
      "question": "What's the name of the pope who died on August 20 1914?\n",
      "answers": [
        "pius x"
      ]
    },
    {
      "number": 2285,
      "category": "WWI:",
      "question": "Which Belgian city was occupied on August 20 1914?\n",
      "answers": [
        "brussels",
        "bruxelles"
      ]
    },
    {
      "number": 2286,
      "category": "WWI:",
      "question": "August 23-31 1914: The Battle of?\n",
      "answers": [
        "tannenberg"
      ]
    },
    {
      "number": 2287,
      "category": "WWI:",
      "question": "On September 3 1914, Reims was occupied by?\n",
      "answers": [
        "the germans",
        "germany"
      ]
    },
    {
      "number": 2288,
      "category": "WWI:",
      "question": "September 5 1914: Battle at?\n",
      "answers": [
        "the marne",
        "marne"
      ]
    },
    {
      "number": 2289,
      "category": "WWI:",
      "question": "September 8 1914: The fall of?\n",
      "answers": [
        "maubeuge"
      ]
    },
    {
      "number": 2290,
      "category": "WWI:",
      "question": "Which English ship was destroyed by the German submarine U9 September 22 1914?\n",
      "answers": [
        "aboekir",
        "hogue",
        "cressy"
      ]
    },
    {
      "number": 2291,
      "category": "WWI:",
      "question": "Which Belgian city was taken on October 9 1914?\n",
      "answers": [
        "antwerp",
        "antwerpen"
      ]
    },
    {
      "number": 2292,
      "category": "WWI:",
      "question": "Which Belgian city was taken on October 14 1914?\n",
      "answers": [
        "brugge"
      ]
    },
    {
      "number": 2293,
      "category": "WWI:",
      "question": "Which Belgian city was taken on October 15 1914?\n",
      "answers": [
        "oostende"
      ]
    },
    {
      "number": 2294,
      "category": "WWI:",
      "question": "Which Belgian city was taken on October 16 1914?\n",
      "answers": [
        "zeebrugge"
      ]
    },
    {
      "number": 2295,
      "category": "WWI:",
      "question": "On November 7 1914, Tsingtau was taken by which country?\n",
      "answers": [
        "japan"
      ]
    },
    {
      "number": 2296,
      "category": "WWI:",
      "question": "Which country's east coast was attacked by the Germans on January 19-20 1915?\n",
      "answers": [
        "england"
      ]
    },
    {
      "number": 2297,
      "category": "WWI:",
      "question": "German defeats who on February 4-22 1915?\n",
      "answers": [
        "russia",
        "the russians",
        "russians"
      ]
    },
    {
      "number": 2298,
      "category": "WWI:",
      "question": "On April 25 1915, allied troups land where?\n",
      "answers": [
        "gallipolli"
      ]
    },
    {
      "number": 2299,
      "category": "WWI:",
      "question": "Which city in Poland was taken on August 3 1915?\n",
      "answers": [
        "warsaw"
      ]
    },
    {
      "number": 2300,
      "category": "WWI:",
      "question": "Which battle lasted from February 16 - December 16 1916?\n",
      "answers": [
        "verdun",
        "the battle of verdun",
        "battle of verdun"
      ]
    },
    {
      "number": 2301,
      "category": "WWI:",
      "question": "Intervention by the US on March 15 1916 in which country?\n",
      "answers": [
        "mexico"
      ]
    },
    {
      "number": 2302,
      "category": "WWI:",
      "question": "WWI on August 27 1916?\n",
      "answers": [
        "romania",
        "which east european country enters "
      ]
    },
    {
      "number": 2303,
      "category": "WWI:",
      "question": "Who becomes president of the US on November 7 1916?\n",
      "answers": [
        "wilson"
      ]
    },
    {
      "number": 2304,
      "category": "WWI:",
      "question": "Which city was occupied by the English on March 11 1917?\n",
      "answers": [
        "baghdad"
      ]
    },
    {
      "number": 2305,
      "category": "WWI:",
      "question": "On March 16 1917, which country becomes a republic?\n",
      "answers": [
        "russia"
      ]
    },
    {
      "number": 2306,
      "category": "WWI:",
      "question": "Which tsar was arrested on March 21 1916?\n",
      "answers": [
        "tsar nicholas ii",
        "nicholas ii"
      ]
    },
    {
      "number": 2307,
      "category": "WWI:",
      "question": "Which north european city was occupied on September 3 1917?\n",
      "answers": [
        "riga"
      ]
    },
    {
      "number": 2308,
      "category": "WWI:",
      "question": "The second 'October Revolution' on November 6-7 1917 was where?\n",
      "answers": [
        "russia"
      ]
    },
    {
      "number": 2309,
      "category": "WWI:",
      "question": "Which Russian city was taken on March 1-3 1918?\n",
      "answers": [
        "kiev"
      ]
    },
    {
      "number": 2310,
      "category": "WWI:",
      "question": "March 7 1918, peace between Germany and which other country?\n",
      "answers": [
        "finland"
      ]
    },
    {
      "number": 2311,
      "category": "WWI:",
      "question": "On October 3 1918, Boris III became the king of which country?\n",
      "answers": [
        "bulgaria"
      ]
    },
    {
      "number": 2312,
      "category": "WWI:",
      "question": "Who was killed on October 31 1917?\n",
      "answers": [
        "tisza"
      ]
    },
    {
      "number": 2313,
      "category": "WWI:",
      "question": "What does HDD stand for?\n",
      "answers": [
        "berlin",
        "in which german city started a revolution on november 9 1917?",
        "acronyms-hardware",
        "hard disk drive"
      ]
    },
    {
      "number": 2314,
      "category": "Acronyms-Hardware",
      "question": "What does CPU stand for?\n",
      "answers": [
        "central processing unit"
      ]
    },
    {
      "number": 2315,
      "category": "Acronyms-Networks",
      "question": "What does TCP stand for?\n",
      "answers": [
        "transmission control protocol"
      ]
    },
    {
      "number": 2316,
      "category": "Acronyms-Hardware",
      "question": "What does ROM stand for?\n",
      "answers": [
        "read only memory",
        "read-only memory"
      ]
    },
    {
      "number": 2317,
      "category": "Acronyms-Networks",
      "question": "What does FTP stand for?\n",
      "answers": [
        "file transfer protocol"
      ]
    },
    {
      "number": 2318,
      "category": "Acronyms-Networks",
      "question": "What does USB stand for?\n",
      "answers": [
        "universal serial bus"
      ]
    },
    {
      "number": 2319,
      "category": "Acronyms-Software",
      "question": "What does DLL stand for?\n",
      "answers": [
        "dynamic link library"
      ]
    },
    {
      "number": 2320,
      "category": "Acronyms-Networks",
      "question": "What does LAN stand for?\n",
      "answers": [
        "local area network",
        "local access network"
      ]
    },
    {
      "number": 2321,
      "category": "Acronyms-Networks",
      "question": "What does WAN stand for?\n",
      "answers": [
        "wide area network"
      ]
    },
    {
      "number": 2322,
      "category": "Acronyms-Networks",
      "question": "What does OC stand for?\n",
      "answers": [
        "optical carrier"
      ]
    },
    {
      "number": 2323,
      "category": "Acronyms-Networks",
      "question": "What does HTTP stand for?\n",
      "answers": [
        "hypertext transfer protocol"
      ]
    },
    {
      "number": 2324,
      "category": "Acronyms-Networks",
      "question": "What does IP stand for?\n",
      "answers": [
        "internet protocol"
      ]
    },
    {
      "number": 2325,
      "category": "Acronyms-Hardware",
      "question": "What does PnP stand for?\n",
      "answers": [
        "plug-and-play",
        "plug and play"
      ]
    },
    {
      "number": 2326,
      "category": "Acronyms-Hardware",
      "question": "What does DMA stand for?\n",
      "answers": [
        "direct memory access"
      ]
    },
    {
      "number": 2327,
      "category": "Acronyms-Networks",
      "question": "What does WWW stand for?\n",
      "answers": [
        "world wide web"
      ]
    },
    {
      "number": 2328,
      "category": "Acronyms-Networks",
      "question": "What does URL stand for?\n",
      "answers": [
        "uniform resource locator"
      ]
    },
    {
      "number": 2329,
      "category": "Acronyms-Software",
      "question": "COBOL stands for _____ Business Oriented Language\n",
      "answers": [
        "common"
      ]
    },
    {
      "number": 2330,
      "category": "Acronums-Software",
      "question": "BASIC stands for _____ All purpose Symbolic Instruction Code\n",
      "answers": [
        "beginner's",
        "beginner"
      ]
    },
    {
      "number": 2331,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 2332,
      "category": "History-Internet",
      "question": "IP standard?\n",
      "answers": [
        "vint cerf",
        "cerf",
        "vincent cerf",
        "who invented the tcp"
      ]
    },
    {
      "number": 2333,
      "category": "History-Computers",
      "question": "What year was the Digital Millennium Act passed by Congress?\n",
      "answers": [
        "1998"
      ]
    },
    {
      "number": 2334,
      "category": "History-Internet",
      "question": "What year did Sun Microsystems release Java?\n",
      "answers": [
        "1995"
      ]
    },
    {
      "number": 2335,
      "category": "History-Internet",
      "question": "What was the first registered domain?\n",
      "answers": [
        "symbolic.com",
        "symbolic"
      ]
    },
    {
      "number": 2336,
      "category": "History-Internet",
      "question": "What year was the @ symbol set as a standard for e-mail?\n",
      "answers": [
        "1972"
      ]
    },
    {
      "number": 2337,
      "category": "History-Computers",
      "question": "What year did Intel release the 8080 microprocessor?\n",
      "answers": [
        "1974"
      ]
    },
    {
      "number": 2338,
      "category": "History-Computers",
      "question": "One year after the 8080, what first personal computer was released based upon it?\n",
      "answers": [
        "altair 8800",
        "altair"
      ]
    },
    {
      "number": 2339,
      "category": "History-Computers",
      "question": "What US District Judge declared Microsoft a monopoly in 1999?\n",
      "answers": [
        "thomas penfield jackson",
        "jackson"
      ]
    },
    {
      "number": 2340,
      "category": "History-Computers",
      "question": "In 1981 what operating system became available to the PC market?\n",
      "answers": [
        "ms-dos",
        "msdos",
        "ms dos",
        "dos"
      ]
    },
    {
      "number": 2341,
      "category": "History-Computers",
      "question": "Who first coined the term 'cyberspace'?\n",
      "answers": [
        "william gibson",
        "gibson"
      ]
    },
    {
      "number": 2342,
      "category": "History-Internet",
      "question": "What was the name of the first wide-scale peer-to-peer music sharing application?\n",
      "answers": [
        "napster"
      ]
    },
    {
      "number": 2343,
      "category": "History-Internet",
      "question": "What major browser company did America Online buy in 1999?\n",
      "answers": [
        "netscape"
      ]
    },
    {
      "number": 2344,
      "category": "History-Internet",
      "question": "What domain did CNET buy for $15,000 in 1996?\n",
      "answers": [
        "tv.com",
        "tv"
      ]
    },
    {
      "number": 2345,
      "category": "History-Internet",
      "question": "business.com sold for $150,000 in what year?\n",
      "answers": [
        "1997"
      ]
    },
    {
      "number": 2346,
      "category": "History-Computers",
      "question": "Who is the regarded as the father of supercomputing?\n",
      "answers": [
        "seymour cray",
        "cray"
      ]
    },
    {
      "number": 2347,
      "category": "History-Computers",
      "question": "What law says that the number of transistors doubles every 18 months?\n",
      "answers": [
        "moore's law",
        "moore"
      ]
    },
    {
      "number": 2348,
      "category": "History-Computers",
      "question": "Who wrote the core of the Linux operating system in 1991?\n",
      "answers": [
        "linus torvalds",
        "torvalds"
      ]
    },
    {
      "number": 2349,
      "category": "History-Computers",
      "question": "Bell Labs released what operating system in 1969?\n",
      "answers": [
        "unix"
      ]
    },
    {
      "number": 2350,
      "category": "History-Computers",
      "question": "What company first invented the modern mouse?\n",
      "answers": [
        "xerox"
      ]
    },
    {
      "number": 2351,
      "category": "History-Computers",
      "question": "What Macintosh computer was first introduced by Apple in 1998?\n",
      "answers": [
        "imac"
      ]
    },
    {
      "number": 2352,
      "category": "History-Computers",
      "question": "Who is current chairman of Microsoft Corporation?\n",
      "answers": [
        "bill gates",
        "gates"
      ]
    },
    {
      "number": 2353,
      "category": "History-Computers",
      "question": "What modem standard was passed to replace X2 and K56flex in 1998?\n",
      "answers": [
        "v.90",
        "v90"
      ]
    },
    {
      "number": 2354,
      "category": "History-Computers",
      "question": "UNIX was the first operating system written in what programming language?\n",
      "answers": [
        "c"
      ]
    },
    {
      "number": 2355,
      "category": "\n",
      "question": null,
      "answers": [

      ]
    },
    {
      "number": 2356,
      "category": "Technical-Hardware",
      "question": "What is the common bit-bus for PCI components?\n",
      "answers": [
        "32-bit",
        "32-bits",
        "32",
        "thirtytwo",
        "thirty two"
      ]
    },
    {
      "number": 2357,
      "category": "Technical-Hardware",
      "question": "What is the common bit-bus for ISA components?\n",
      "answers": [
        "16-bit",
        "16-bits",
        "16",
        "sixteen"
      ]
    },
    {
      "number": 2358,
      "category": "Technical-Hardware",
      "question": "Most non-SCSI CD-ROMs conform to what EIDE standard?\n",
      "answers": [
        "atapi"
      ]
    },
    {
      "number": 2359,
      "category": "Technical-Hardware",
      "question": "What interface do most new graphics card conform to?\n",
      "answers": [
        "agp"
      ]
    },
    {
      "number": 2360,
      "category": "Technical-Hardware",
      "question": "What multimedia instruction set were built into Intel's processors after 1997?\n",
      "answers": [
        "mmx"
      ]
    },
    {
      "number": 2361,
      "category": "Technical-Networks",
      "question": "What common network protoctol can utilize a bus or star topology?\n",
      "answers": [
        "ethernet"
      ]
    },
    {
      "number": 2362,
      "category": "Technical-Networks",
      "question": "What proprietary network protocol did Apple develop?\n",
      "answers": [
        "appletalk"
      ]
    },
    {
      "number": 2363,
      "category": "Technical-Networks",
      "question": "How many bits are in a byte?\n",
      "answers": [
        "eight",
        "8",
        "8-bits"
      ]
    },
    {
      "number": 2364,
      "category": "Technical-Networks",
      "question": "What common broadband technology utilizes standard POTS?\n",
      "answers": [
        "dsl"
      ]
    },
    {
      "number": 2365,
      "category": "Technical-Networks",
      "question": "What common broadband technology utilizes coxial cables?\n",
      "answers": [
        "cable modem",
        "cable"
      ]
    },
    {
      "number": 2366,
      "category": "Technical-Hardware",
      "question": "What is the maximum speed USB 1.1 can transfer at?\n",
      "answers": [
        "12 mbps",
        "12mbps"
      ]
    },
    {
      "number": 2367,
      "category": "Technical-Hardware",
      "question": "What is the maximum speed USB 2.0 can transfer at?\n",
      "answers": [
        "480 mbps",
        "480mbps"
      ]
    },
    {
      "number": 2368,
      "category": "Technical-Hardware",
      "question": "What is the maximum speed FireWire can transfer at?\n",
      "answers": [
        "400 mbps",
        "400mbps"
      ]
    },
    {
      "number": 2369,
      "category": "Technical-Hardware",
      "question": "How many devices can USB support on a single chain?\n",
      "answers": [
        "127"
      ]
    },
    {
      "number": 2370,
      "category": "Technical-Networks",
      "question": "How fast is a standard 10BaseT network?\n",
      "answers": [
        "10 mbps",
        "10mbps"
      ]
    },
    {
      "number": 2371,
      "category": "Technical-Networks",
      "question": "What kind of jack does standard twisted-pair cable use?\n",
      "answers": [
        "rj-45",
        "rj 45"
      ]
    },
    {
      "number": 2372,
      "category": "Technical-Networks",
      "question": "How fast can a single ISDN B-channel transfer at?\n",
      "answers": [
        "64kbps",
        "64k"
      ]
    },
    {
      "number": 2373,
      "category": "Technical-Networks",
      "question": "1.544 Mbps is the transfer rate of which common broadband technology?\n",
      "answers": [
        "tier-1 (t1)",
        "tier-1",
        "t-1",
        "t1"
      ]
    },
    {
      "number": 2374,
      "category": "Technical-Networks",
      "question": "51.84 Mbps is the transfer rate of which common broadband technology?\n",
      "answers": [
        "oc-1",
        "oc1"
      ]
    },
    {
      "number": 2375,
      "category": "Product Knowledge",
      "question": "What is one of the 3 pillars of Siemens strength?\n",
      "answers": [
        "infinite modularity, ultimate portability, complete information access",
        "modularity",
        "portability",
        "access"
      ]
    },
    {
      "number": 2376,
      "category": "Product Knowledge",
      "question": "What modular monitors come standard with four channels?\n",
      "answers": [
        "sc 7000 and sc 8000 monitors",
        "sc 7000",
        "sc7000",
        "sc 8000",
        "sc8000"
      ]
    },
    {
      "number": 2377,
      "category": "Product Knowledge",
      "question": "What modular monitor comes standard with six channels?\n",
      "answers": [
        "sc 9000xl"
      ]
    },
    {
      "number": 2378,
      "category": "Product Knowledge",
      "question": "What is the name of the INFINITY noninvasive cable management solution?\n",
      "answers": [
        "multimed pods (-5, -6, neomed)",
        "multimed",
        "neomed"
      ]
    },
    {
      "number": 2379,
      "category": "Product Knowledge",
      "question": "What is the name of the INFINITY invasive pressure cable management solution?\n",
      "answers": [
        "hemomed pods (-2, -4, hemomed)",
        "hemomed",
        "hemo-2",
        "hemo2",
        "hemo 2",
        "pod",
        "hemo-4",
        "hemo 4",
        "hemo4"
      ]
    },
    {
      "number": 2380,
      "category": "Product Knowledge",
      "question": "Can I use the HemoMed with the SC6002XL?\n",
      "answers": [
        "no"
      ]
    },
    {
      "number": 2381,
      "category": "Product Knowledge",
      "question": "What part of the etCO2&Respiratory Mechanics pod be used with the SC6002XL?\n",
      "answers": [
        "etco2 function",
        "etco2"
      ]
    },
    {
      "number": 2382,
      "category": "Product Knowledge",
      "question": "What cable would I order to connect a balloon pump to an INFINITY modular monitor?\n",
      "answers": [
        "analog output cable",
        "analog"
      ]
    },
    {
      "number": 2383,
      "category": "Anatomy&Physiology",
      "question": "What waves are seen on a normal ECG?\n",
      "answers": [
        "in order: p wave, qrs complex, st segment, t wave",
        "p wave",
        "qrs complex",
        "st segment",
        "t wave"
      ]
    },
    {
      "number": 2384,
      "category": "Anatomy&Physiology",
      "question": "What is the normal pacemaker of the heart?\n",
      "answers": [
        "sa node"
      ]
    },
    {
      "number": 2385,
      "category": "Anatomy&Physiology",
      "question": "What are the four chambers of the heart?\n",
      "answers": [
        "right atrium, right ventricle, left atrium, left ventricle",
        "left atrium",
        "right atrium",
        "left ventricle",
        "right ventricle"
      ]
    },
    {
      "number": 2386,
      "category": "Anatomy&Physiology",
      "question": "What are the two most important factors in obtaining accurate noninvasive blood pressure readings?\n",
      "answers": [
        "correct cuff size and position",
        "cuff size",
        "position"
      ]
    },
    {
      "number": 2387,
      "category": "Anatomy&Physiology",
      "question": "What do we call the pressure measurement from the right atrium?\n",
      "answers": [
        "central venous pressure",
        "cvp",
        "right atrial pressure"
      ]
    },
    {
      "number": 2388,
      "category": "Anatomy&Physiology",
      "question": "What pressure do we measure when we inflate the balloon on the Swan-Ganz catheter?\n",
      "answers": [
        "wedge pressure",
        "pulmonary wedge pressure",
        "wedge",
        "pcwp"
      ]
    },
    {
      "number": 2389,
      "category": "Anatomy&Physiology",
      "question": "What is the process of measuring respirations with ECG leads called?\n",
      "answers": [
        "impedence"
      ]
    },
    {
      "number": 2390,
      "category": "Trivia",
      "question": "What color reflects light from all parts of the visible spectrum?\n",
      "answers": [
        "white"
      ]
    },
    {
      "number": 2391,
      "category": "Trivia",
      "question": "Triceratops' tail was longer than its body? True or false?\n",
      "answers": [
        "false"
      ]
    },
    {
      "number": 2392,
      "category": "Trivia",
      "question": "Air bubbles in the center of a hair shaft cause hair to turn gray. True or false?\n",
      "answers": [
        "false"
      ]
    },
    {
      "number": 2393,
      "category": "Trivia",
      "question": "Cyan is what color?\n",
      "answers": [
        "blue"
      ]
    },
    {
      "number": 2394,
      "category": "Trivia",
      "question": "Tongue prints are as unique as fingerprints? True or false?\n",
      "answers": [
        "true"
      ]
    },
    {
      "number": 2395,
      "category": "Trivia",
      "question": "What day of the month is New Year's Day in the United States?\n",
      "answers": [
        "1",
        "1st",
        "first"
      ]
    },
    {
      "number": 2396,
      "category": "Trivia",
      "question": "How many states begin with the letter \"A\"?\n",
      "answers": [
        "4",
        "four"
      ]
    },
    {
      "number": 2397,
      "category": "Trivia",
      "question": "The right lung takes in more air than the left? True or false?\n",
      "answers": [
        "true"
      ]
    },
    {
      "number": 2398,
      "category": "Trivia",
      "question": "How many continents are there?\n",
      "answers": [
        "7",
        "seven"
      ]
    },
    {
      "number": 2399,
      "category": "Trivia",
      "question": "How many times did Dorothy click her heels together?\n",
      "answers": [
        "3",
        "three"
      ]
    },
    {
      "number": 2400,
      "category": "Trivia",
      "question": "In 1995 what color M&M was substituted for tan?\n",
      "answers": [
        "blue"
      ]
    },
    {
      "number": 2401,
      "category": "Trivia",
      "question": "How many wonders of the ancient world were there?\n",
      "answers": [
        "7",
        "seven"
      ]
    },
    {
      "number": 2402,
      "category": "Trivia",
      "question": "The human body has 45 miles of nerves. True or false?\n",
      "answers": [
        "true"
      ]
    },
    {
      "number": 2403,
      "category": "Trivia",
      "question": "Besides red and white, what other color is on the flag of Thailand?\n",
      "answers": [
        "blue"
      ]
    },
    {
      "number": 2404,
      "category": "Trivia",
      "question": "What color is Lisa's necklace on The Simpsons?\n",
      "answers": [
        "white"
      ]
    },
    {
      "number": 2405,
      "category": "Trivia",
      "question": "The Pacific Ocean encloses an area larger than all the land surfaces of the earth put together. True or false?\n",
      "answers": [
        "true"
      ]
    },
    {
      "number": 2406,
      "category": "Trivia",
      "question": "How many outs are in a double play?\n",
      "answers": [
        "2",
        "two"
      ]
    },
    {
      "number": 2407,
      "category": "Trivia",
      "question": "How many races are run each year at the Indianapolis Speedway?\n",
      "answers": [
        "1",
        "one"
      ]
    },
    {
      "number": 2408,
      "category": "Trivia",
      "question": "Robert Todd Lincoln, son of Abraham Lincoln, was present at the assassinations of three presidents. True or false?\n",
      "answers": [
        "true"
      ]
    },
    {
      "number": 2409,
      "category": "Trivia",
      "question": "How many months does the average worker ant live?\n",
      "answers": [
        "3",
        "three"
      ]
    },
    {
      "number": 2410,
      "category": "Trivia",
      "question": "What color is a giraffe's tongue?\n",
      "answers": [
        "black"
      ]
    },
    {
      "number": 2411,
      "category": "Trivia",
      "question": "Curious George's friend was The Man in the what color hat?\n",
      "answers": [
        "yellow"
      ]
    },
    {
      "number": 2412,
      "category": "Trivia",
      "question": "There are more insects in one square mile of rural land than there are human beings on the entire earth. True or false?\n",
      "answers": [
        "true"
      ]
    },
    {
      "number": 2413,
      "category": "Trivia",
      "question": "What is the greatest number of regulation baseballs a person has ever held in one hand?\n",
      "answers": [
        "9",
        "nine"
      ]
    },
    {
      "number": 2414,
      "category": "Trivia",
      "question": "What color blood does Mr. Spock have?\n",
      "answers": [
        "green"
      ]
    },
    {
      "number": 2415,
      "category": "Trivia",
      "question": "How many countries are there in Central America?\n",
      "answers": [
        "7",
        "seven"
      ]
    },
    {
      "number": 2416,
      "category": "Trivia",
      "question": "What two colors make up the flag of Japan?\n",
      "answers": [
        "red and white",
        "white and red",
        "red,white",
        "white,red"
      ]
    },
    {
      "number": 2417,
      "category": "Trivia",
      "question": "How many countries in South America border the Pacific Ocean?\n",
      "answers": [
        "4",
        "four"
      ]
    },
    {
      "number": 2418,
      "category": "Trivia",
      "question": "Spiders never spin webs in structures made of chestnut wood. True or false?\n",
      "answers": [
        "true"
      ]
    },
    {
      "number": 2419,
      "category": "Trivia",
      "question": "The card game Twenty-one is also known as what?\n",
      "answers": [
        "blackjack",
        "black jack"
      ]
    },
    {
      "number": 2420,
      "category": "Trivia",
      "question": "How many feet tall is the average giraffe at birth?\n",
      "answers": [
        "6",
        "six"
      ]
    },
    {
      "number": 2421,
      "category": "Trivia",
      "question": "More people are killed each year by honeybees than by poisonous snakes. True or false?\n",
      "answers": [
        "true"
      ]
    },
    {
      "number": 2422,
      "category": "Trivia",
      "question": "How many books in the Torah?\n",
      "answers": [
        "5",
        "five"
      ]
    },
    {
      "number": 2423,
      "category": "Trivia",
      "question": "How many pounds of milk does it take to make a pound of natural cheese?\n",
      "answers": [
        "10",
        "ten"
      ]
    },
    {
      "number": 2424,
      "category": "Trivia",
      "question": "The deer botfly can fly faster than a jet plane. True or false?\n",
      "answers": [
        "true"
      ]
    },
    {
      "number": 2425,
      "category": "Trivia",
      "question": "On Sesame Street, what color is Elmo's nose?\n",
      "answers": [
        "orange"
      ]
    },
    {
      "number": 2426,
      "category": "Trivia",
      "question": "How many pints of saliva does the average human mouth produce daily?\n",
      "answers": [
        "2",
        "two"
      ]
    },
    {
      "number": 2427,
      "category": "Trivia",
      "question": "\"Smoke on the Water\" was recorded by which group?\n",
      "answers": [
        "deep purple"
      ]
    },
    {
      "number": 2428,
      "category": "Trivia",
      "question": "How many eyelids do birds have on each eye?\n",
      "answers": [
        "3",
        "three"
      ]
    },
    {
      "number": 2429,
      "category": "Trivia",
      "question": "What color is the outside of a primary rainbow?\n",
      "answers": [
        "red"
      ]
    },
    {
      "number": 2430,
      "category": "Trivia",
      "question": "What is the closest foreign country to Alaska?\n",
      "answers": [
        "canada"
      ]
    },
    {
      "number": 2431,
      "category": "Trivia",
      "question": "What year did World War I (WWI) start in?\n",
      "answers": [
        "1914"
      ]
    },
    {
      "number": 2432,
      "category": "Trivia",
      "question": "How many rows of pins are there in tenpin bowling?\n",
      "answers": [
        "4",
        "four"
      ]
    },
    {
      "number": 2433,
      "category": "Trivia",
      "question": "Who composed \"Twinke, Twinkle, Little Star\" at the age of five?\n",
      "answers": [
        "wolfgang mozart",
        "mozart",
        "amadeus"
      ]
    },
    {
      "number": 2434,
      "category": "Trivia",
      "question": "What's the motto of the Boy Scouts?\n",
      "answers": [
        "be prepared"
      ]
    },
    {
      "number": 2435,
      "category": "Trivia",
      "question": "What was Paul Bunyan's ox's name?\n",
      "answers": [
        "babe"
      ]
    },
    {
      "number": 2436,
      "category": "Trivia",
      "question": "What state is Mount McKinley in?\n",
      "answers": [
        "alaska"
      ]
    },
    {
      "number": 2437,
      "category": "Trivia",
      "question": "What nationality was Aladdin?\n",
      "answers": [
        "chinese"
      ]
    },
    {
      "number": 2438,
      "category": "Trivia",
      "question": "What's the world's largest coral reef?\n",
      "answers": [
        "the great barrier reef",
        "great barrier reef",
        "great barrier"
      ]
    },
    {
      "number": 2439,
      "category": "Trivia",
      "question": "Who did Lurch work for?\n",
      "answers": [
        "the addams family",
        "addams",
        "adams"
      ]
    },
    {
      "number": 2440,
      "category": "Trivia",
      "question": "How many US states border California?\n",
      "answers": [
        "3",
        "three"
      ]
    },
    {
      "number": 2441,
      "category": "Trivia",
      "question": "What's the capital of the Netherlands?\n",
      "answers": [
        "amsterdam"
      ]
    },
    {
      "number": 2442,
      "category": "Trivia",
      "question": "What phrase does Dorothy repeat as she clicks her ruby shoes to return to Kansas?\n",
      "answers": [
        "there's no place like home"
      ]
    },
    {
      "number": 2443,
      "category": "Trivia",
      "question": "Do mosquitoes have teeth?\n",
      "answers": [
        "yes"
      ]
    },
    {
      "number": 2444,
      "category": "Trivia",
      "question": "What's the second-largest continent?\n",
      "answers": [
        "africa"
      ]
    },
    {
      "number": 2445,
      "category": "Trivia",
      "question": "Who does Alice follow down the hole?\n",
      "answers": [
        "the white rabbit",
        "rabbit"
      ]
    },
    {
      "number": 2446,
      "category": "Trivia",
      "question": "How many sides does a hexagon have?\n",
      "answers": [
        "6",
        "six"
      ]
    },
    {
      "number": 2447,
      "category": "Trivia",
      "question": "What was the motto of the Three Musketeers?\n",
      "answers": [
        "all for one, one for all",
        "all for one",
        "one for all"
      ]
    },
    {
      "number": 2448,
      "category": "Trivia",
      "question": "What are the clay targets in trap shooting called?\n",
      "answers": [
        "pigeons",
        "pigons",
        "pidgeons"
      ]
    },
    {
      "number": 2449,
      "category": "Trivia",
      "question": "What has 1,792 steps?\n",
      "answers": [
        "the eiffel tower",
        "eiffel",
        "eifel"
      ]
    },
    {
      "number": 2450,
      "category": "Trivia",
      "question": "What do you take Dramamine for?\n",
      "answers": [
        "motion sickness"
      ]
    },
    {
      "number": 2451,
      "category": "Trivia",
      "question": "What did the Seven Dwarfs do for a living?\n",
      "answers": [
        "they were miners",
        "mined",
        "miner",
        "mining"
      ]
    },
    {
      "number": 2452,
      "category": "Trivia",
      "question": "What did the three little kittens lose?\n",
      "answers": [
        "their mittens",
        "mittens"
      ]
    },
    {
      "number": 2453,
      "category": "Trivia",
      "question": "What zone varies from batter to batter in baseball?\n",
      "answers": [
        "the strike zone",
        "strike"
      ]
    },
    {
      "number": 2454,
      "category": "Trivia",
      "question": "What US State includes the San Juan Islands?\n",
      "answers": [
        "washington"
      ]
    },
    {
      "number": 2455,
      "category": "Trivia",
      "question": "What is the most commonly-used punctuation mark?\n",
      "answers": [
        "the comma",
        "comma"
      ]
    },
    {
      "number": 2456,
      "category": "Trivia",
      "question": "What term describes an animal with a constant blood temperature?\n",
      "answers": [
        "warm blooded"
      ]
    },
    {
      "number": 2457,
      "category": "Trivia",
      "question": "What is the largest artery in the human body?\n",
      "answers": [
        "the aorta",
        "aorta"
      ]
    },
    {
      "number": 2458,
      "category": "Trivia",
      "question": "How many bones are there in the human body?\n",
      "answers": [
        "206"
      ]
    },
    {
      "number": 2459,
      "category": "Trivia",
      "question": "What desert embraces the sunniest spot on the Earth?\n",
      "answers": [
        "the sahara",
        "sahara"
      ]
    },
    {
      "number": 2460,
      "category": "Trivia",
      "question": "What musical group did the Wilson brothers form in 1961?\n",
      "answers": [
        "the beach boys",
        "beach boys"
      ]
    },
    {
      "number": 2461,
      "category": "Trivia",
      "question": "What Dr. Seuss character steals Christmas?\n",
      "answers": [
        "the grinch",
        "grinch"
      ]
    },
    {
      "number": 2462,
      "category": "Trivia",
      "question": "What's removed in a splenectomy?\n",
      "answers": [
        "the spleen",
        "spleen"
      ]
    },
    {
      "number": 2463,
      "category": "Trivia",
      "question": "What's the world's largest and heaviest animal?\n",
      "answers": [
        "the blue whale",
        "blue whale"
      ]
    },
    {
      "number": 2464,
      "category": "Trivia",
      "question": "What's the only bird that gives us leather?\n",
      "answers": [
        "the ostrich",
        "ostrich"
      ]
    },
    {
      "number": 2465,
      "category": "Trivia",
      "question": "What's the primary color with the shortest name?\n",
      "answers": [
        "red"
      ]
    },
    {
      "number": 2466,
      "category": "Trivia",
      "question": "What's the Roman Numeral for 64?\n",
      "answers": [
        "lxiv"
      ]
    },
    {
      "number": 2467,
      "category": "Trivia",
      "question": "Where is the human skin the thickest?\n",
      "answers": [
        "the back",
        "back"
      ]
    },
    {
      "number": 2468,
      "category": "Trivia",
      "question": "Where does Yogi Bear live?\n",
      "answers": [
        "jellystone national park",
        "jellystone"
      ]
    },
    {
      "number": 2469,
      "category": "Trivia",
      "question": "Who lived at 221B Baker Street?\n",
      "answers": [
        "sherlock holmes",
        "sherlock"
      ]
    },
    {
      "number": 2470,
      "category": "Trivia",
      "question": "How many holes are there in a tenpin bowling ball?\n",
      "answers": [
        "3",
        "three"
      ]
    },
    {
      "number": 2471,
      "category": "Trivia",
      "question": "What bird's a symbol of peace?\n",
      "answers": [
        "the dove",
        "dove"
      ]
    },
    {
      "number": 2472,
      "category": "Trivia",
      "question": "When Sherlock Holmes is stumped, who does he turn to?\n",
      "answers": [
        "his brother, mycroft holmes",
        "mycroft"
      ]
    },
    {
      "number": 2473,
      "category": "Trivia",
      "question": "You PING a computer on a network - what are the letters PING an acronym for?\n",
      "answers": [
        "packet internet groper",
        "groper"
      ]
    },
    {
      "number": 2474,
      "category": "Trivia",
      "question": "Who, along with Bill Gates, started Microsoft?\n",
      "answers": [
        "paul allen",
        "allen"
      ]
    },
    {
      "number": 2475,
      "category": "Trivia",
      "question": "In \"The Emperor's New Groove\", who did the voice for Pacha, the villager?\n",
      "answers": [
        "john goodman",
        "goodman"
      ]
    },
    {
      "number": 2476,
      "category": "Trivia",
      "question": "What do you call the smiley face and other symbols you type on the computer?\n",
      "answers": [
        "emoticons"
      ]
    },
    {
      "number": 2477,
      "category": "Trivia",
      "question": "How many bytes are in one kilobyte (KB)?\n",
      "answers": [
        "1024"
      ]
    },
    {
      "number": 2478,
      "category": "Trivia",
      "question": "What would you use a Self Contained Underwater Breathing Apparatus for?\n",
      "answers": [
        "scuba diving",
        "scuba"
      ]
    },
    {
      "number": 2479,
      "category": "Trivia",
      "question": "What frequency, used by phone hackers to make free calls, is the name of a hacker magazine?\n",
      "answers": [
        "2600"
      ]
    },
    {
      "number": 2480,
      "category": "Trivia",
      "question": "What dial-up service was used by the characters in \"You've Got Mail\"?\n",
      "answers": [
        "america online",
        "america",
        "aol"
      ]
    },
    {
      "number": 2481,
      "category": "Trivia",
      "question": "Who invented a close fitting garment worn by dancers?\n",
      "answers": [
        "29,028 feet or 8848 meters",
        "29028",
        "8848",
        "8848 meter",
        "what is the altitude of mount everest?",
        "dance",
        "jules leotard",
        "leotard"
      ]
    },
    {
      "number": 2482,
      "category": "Literature",
      "question": "Who wrote \"The Sun Also Rises\" ?\n",
      "answers": [
        "ernest hemingway",
        "hemingway"
      ]
    },
    {
      "number": 2483,
      "category": "History",
      "question": "TRUE OR FALSE: The star in the upper left corner of a United States flag symbolizes the State of Delaware which was the first state to ratify the Constitution.\n",
      "answers": [
        "false"
      ]
    },
    {
      "number": 2484,
      "category": "Entertainment",
      "question": "TRUE OR FALSE: Gene Wilder and Richard Pryor co-starred in Mel Brooks' classic comedy Young Frankenstein. \n",
      "answers": [
        "false"
      ]
    },
    {
      "number": 2485,
      "category": "People",
      "question": "What is Lee J. Cobb's middle name?\n",
      "answers": [
        "jacoby"
      ]
    },
    {
      "number": 2486,
      "category": "Magazines",
      "question": "TRUE OR FALSE: Better Homes magazine provides \"A limited warranty to consumers: Replacement or refund if defective.\"\n",
      "answers": [
        "false"
      ]
    },
    {
      "number": 2487,
      "category": "Science",
      "question": "TRUE OR FALSE: Sound travels faster through the air than underwater.\n",
      "answers": [
        "false"
      ]
    },
    {
      "number": 2488,
      "category": "Magazines",
      "question": "TRUE OR FALSE: The biweekly publication Life is the only People knockoff to have survived.\n",
      "answers": [
        "false"
      ]
    },
    {
      "number": 2489,
      "category": "Art",
      "question": "Dominican Frairs of Santa Maria, Milan could dine in the shadow of what masterpiece.\n",
      "answers": [
        "the last supper",
        "last supper"
      ]
    },
    {
      "number": 2490,
      "category": "Entertainment",
      "question": "In what state is Andy Griffith's Mayberry located?\n",
      "answers": [
        "north carolina",
        "nc"
      ]
    },
    {
      "number": 2491,
      "category": "History",
      "question": "In 1969, Neil Armstrong and Edwin (Buzz) Aldrin became the first men to walk on the moon. What was the name of their space craft?\n",
      "answers": [
        "apollo 11",
        "apollo xi"
      ]
    },
    {
      "number": 2492,
      "category": "History",
      "question": "How many stones did David carry into battle with Goliath?\n",
      "answers": [
        "five",
        "5"
      ]
    },
    {
      "number": 2493,
      "category": "Nature",
      "question": "What produces the substance known as royal jelly?\n",
      "answers": [
        "honey bees",
        "bees",
        "bee",
        "honey"
      ]
    },
    {
      "number": 2494,
      "category": "Sports",
      "question": "Where would you have found the famed Murderer's Row?\n",
      "answers": [
        "yankee stadium",
        "yankee"
      ]
    },
    {
      "number": 2495,
      "category": "Architecture",
      "question": "Which of these buildings is the shortest: Toronto Tower, Empire State Building, Eiffel Tower, Washington Monument.\n",
      "answers": [
        "washington monument",
        "washington"
      ]
    },
    {
      "number": 2496,
      "category": "Geography",
      "question": "TRUE OR FALSE: Wales is a county in the United Kingdom.\n",
      "answers": [
        "false"
      ]
    },
    {
      "number": 2497,
      "category": "Geography",
      "question": "TRUE OR FALSE: Mexico City is slowly sinking into the ground.\n",
      "answers": [
        "true"
      ]
    },
    {
      "number": 2498,
      "category": "Geography",
      "question": "Mount Lofty Range and the Grampian Mountains are located in what Southern Hemisphere country?\n",
      "answers": [
        "australia"
      ]
    },
    {
      "number": 2499,
      "category": "Geography",
      "question": "Maine is the only state in the U.S. that borders exactly one other state. What is the state it borders?\n",
      "answers": [
        "new hampshire",
        "hampshire"
      ]
    },
    {
      "number": 2500,
      "category": "Geography",
      "question": "Where can the Grand Canyon be found?\n",
      "answers": [
        "arizona"
      ]
    },
    {
      "number": 2501,
      "category": "Geography",
      "question": "Stone mountain is the only mountain in the world that is actually growing in size because it is made out of granite.  In what United States capital is this mountain located?\n",
      "answers": [
        "atlanta"
      ]
    },
    {
      "number": 2502,
      "category": "Geography",
      "question": "What country was formerly known as New Holland?\n",
      "answers": [
        "australia"
      ]
    },
    {
      "number": 2503,
      "category": "History",
      "question": "Who was the oldest king to succeed to the British throne?\n",
      "answers": [
        "william iv",
        "william 4"
      ]
    },
    {
      "number": 2504,
      "category": "History",
      "question": "King Henry the VIII of England had how many wives?\n",
      "answers": [
        "six",
        "6"
      ]
    },
    {
      "number": 2505,
      "category": "History",
      "question": "What was the first state to be readmitted to the union after the civil war?\n",
      "answers": [
        "tennessee"
      ]
    },
    {
      "number": 2506,
      "category": "History",
      "question": "Howard Carter made the startling discovery of King Tut's tomb in what year?\n",
      "answers": [
        "1922"
      ]
    },
    {
      "number": 2507,
      "category": "Movie Quotes",
      "question": "What movie is this quote from: \"They may take our lives, but they will never take OUR FREEDOM!!\"\n",
      "answers": [
        "braveheart"
      ]
    },
    {
      "number": 2508,
      "category": "Movie Quotes",
      "question": "\"I soiled my armor I was so scared!\" is from which movie?\n",
      "answers": [
        "monty python and the holy grail",
        "grail",
        "monty",
        "python"
      ]
    },
    {
      "number": 2509,
      "category": "Movie Quotes",
      "question": "\"The garbage chute was a wonderful idea. What an incredible smell you're discovered.\" is from which movie?\n",
      "answers": [
        "star wars"
      ]
    },
    {
      "number": 2510,
      "category": "Movie Quotes",
      "question": "\"I've been dead once, already. It's very liberating.\" is from which movie?\n",
      "answers": [
        "batman"
      ]
    },
    {
      "number": 2511,
      "category": "Movie Quotes",
      "question": "\"Just the facts, ma'am.\" is from which movie?\n",
      "answers": [
        "dragnet"
      ]
    },
    {
      "number": 2512,
      "category": "Geography",
      "question": "What is the original name for Halloween?\n",
      "answers": [
        "denmark",
        "the first completely automated, robotic cow milking machine was invented by which country?",
        "halloween",
        "all hallows eve"
      ]
    },
    {
      "number": 2513,
      "category": "Halloween",
      "question": "What is the name for a male witch?\n",
      "answers": [
        "warlock"
      ]
    },
    {
      "number": 2514,
      "category": "Halloween",
      "question": "In Casper, the movie starring Christina Ricci, Casper's uncles' names were: Fatso, Stinky, and What ______?\n",
      "answers": [
        "stretch"
      ]
    },
    {
      "number": 2515,
      "category": "Halloween",
      "question": "What is the correct spelling for a lit and carved pumkin?\n",
      "answers": [
        "jack-o-lantern"
      ]
    },
    {
      "number": 2516,
      "category": "Halloween",
      "question": "When a black cat crosses your path, what does it usually mean (in the USA)?\n",
      "answers": [
        "bad luck"
      ]
    },
    {
      "number": 2517,
      "category": "Halloween",
      "question": "Ghosts are known to haunt what?\n",
      "answers": [
        "houses"
      ]
    },
    {
      "number": 2518,
      "category": "Halloween",
      "question": "What do children usually get in return when 'Trick or Treat' is expressed?\n",
      "answers": [
        "candy"
      ]
    },
    {
      "number": 2519,
      "category": "Halloween",
      "question": "What type of monster dies from a silver bullet?\n",
      "answers": [
        "werewolf"
      ]
    },
    {
      "number": 2520,
      "category": "Halloween",
      "question": "In the old days, what was the purpose of dressing up in costumes?\n",
      "answers": [
        "to scare off ghosts"
      ]
    },
    {
      "number": 2521,
      "category": "History",
      "question": "On what day did Martin Luther post his 95 Theses on several church doors, officialy starting his unofficial break from the Roman Catholic Church?\n",
      "answers": [
        "october 31",
        "october 31st",
        "halloween"
      ]
    },
    {
      "number": 2522,
      "category": "Halloween",
      "question": "What animal other than a cat is associated with the witch?\n",
      "answers": [
        "bat"
      ]
    },
    {
      "number": 2523,
      "category": "History",
      "question": "In what post-renaissance century did the European witch trials begin in?\n",
      "answers": [
        "1700",
        "17th century"
      ]
    },
    {
      "number": 2524,
      "category": "Halloween",
      "question": "Fill in the blank: Revenge upon whoever opens the _________ of a mummy?\n",
      "answers": [
        "coffin",
        "tomb"
      ]
    },
    {
      "number": 2525,
      "category": "Halloween",
      "question": "When can werewolves come out?\n",
      "answers": [
        "full moon"
      ]
    },
    {
      "number": 2526,
      "category": "Halloween",
      "question": "Where did the myth about zombies begin?\n",
      "answers": [
        "africa"
      ]
    },
    {
      "number": 2527,
      "category": "Halloween",
      "question": "Why do zombies often wear chains?\n",
      "answers": [
        "they are slaves"
      ]
    },
    {
      "number": 2528,
      "category": "Halloween",
      "question": "Where did the stories of vampires originate?\n",
      "answers": [
        "europe"
      ]
    },
    {
      "number": 2529,
      "category": "Halloween",
      "question": "Fill in the blank: Casper the friendly ________ .\n",
      "answers": [
        "ghost"
      ]
    },
    {
      "number": 2530,
      "category": "Halloween",
      "question": "Fill in the blank: Put a light in the _______ to light up its face.\n",
      "answers": [
        "pumpkin"
      ]
    },
    {
      "number": 2531,
      "category": "Halloween",
      "question": "You can dress up like a ______ on Halloween and wear red horns and a tail.\n",
      "answers": [
        "devil"
      ]
    },
    {
      "number": 2532,
      "category": "Halloween",
      "question": "'Hell is for Children' is a song from which '80's rocker?\n",
      "answers": [
        "pat benetar"
      ]
    },
    {
      "number": 2533,
      "category": "Harry",
      "question": "What is the name of Harry Potter's owl?\n",
      "answers": [
        "hedwig"
      ]
    },
    {
      "number": 2534,
      "category": "Halloween",
      "question": "Loch Ness is located in what country?\n",
      "answers": [
        "scotland"
      ]
    },
    {
      "number": 2535,
      "category": "Halloween",
      "question": "'Laughing' by Vincent Price ends this 'M.J.' song\n",
      "answers": [
        "thriller"
      ]
    },
    {
      "number": 2536,
      "category": "Halloween",
      "question": "New Mexico supposedly has a crashed UFO and aliens kept at this city's army air-field.\n",
      "answers": [
        "roswell"
      ]
    },
    {
      "number": 2537,
      "category": "Halloween",
      "question": "Fill in the blank: Area 5_.\n",
      "answers": [
        "1"
      ]
    },
    {
      "number": 2538,
      "category": "Halloween",
      "question": "Bats, when leaving a cave, will always exit in this direction.\n",
      "answers": [
        "left"
      ]
    },
    {
      "number": 2539,
      "category": "The Great Pumpkin Charlie Brown",
      "question": "What does Linus tell Charlie Brown to never jump into a pile of leaves with?\n",
      "answers": [
        "wet sucker"
      ]
    },
    {
      "number": 2540,
      "category": "The Great Pumpkin Charlie Brown",
      "question": "When writing his letter to The Great Pumpkin, whom does Linus say gets more publicity than he?\n",
      "answers": [
        "santa claus"
      ]
    },
    {
      "number": 2541,
      "category": "The Great Pumpkin Charlie Brown",
      "question": "Who sits in the pumpkin patch with Linus on Halloween night waiting for the Great Pumpkin?\n",
      "answers": [
        "sally"
      ]
    },
    {
      "number": 2542,
      "category": "The Great Pumpkin Charlie Brown",
      "question": "What did Charlie Brown receive while Trick or Treating?\n",
      "answers": [
        "rocks"
      ]
    },
    {
      "number": 2543,
      "category": "The Great Pumpkin Charlie Brown",
      "question": "When the Great Pumpkin finally raises out of the pumpkin patch, who is it really?\n",
      "answers": [
        "snoopy"
      ]
    },
    {
      "number": 2544,
      "category": "The Great Pumpkin Charlie Brown",
      "question": "What was the greatest epic of the Sumerian empire?\n",
      "answers": [
        "charlie brown",
        "whom does the gang use as a model when making the pumpkin at the halloween party?",
        "world history",
        "gilgamesh"
      ]
    },
    {
      "number": 2545,
      "category": "World History",
      "question": "What is the name of the greatest work attributed to Confucius (known as Lun-yu in Chinese)?\n",
      "answers": [
        "the analects",
        "analects"
      ]
    },
    {
      "number": 2546,
      "category": "World History",
      "question": "What Germanic tribe destroyed Rome in the year A.D. 455?\n",
      "answers": [
        "the vandals",
        "vandals"
      ]
    },
    {
      "number": 2547,
      "category": "World History",
      "question": "The Eastern and Western Roman empires were restored for a time under a great Byzantine emperor who lived from 483-562 A.D. What was his name?\n",
      "answers": [
        "justinian"
      ]
    },
    {
      "number": 2548,
      "category": "World History",
      "question": "Muhammed fled from Mecca to what town in 622, in order to escape religious persecution?\n",
      "answers": [
        "medina"
      ]
    },
    {
      "number": 2549,
      "category": "World History",
      "question": "The Mongols finally withdrew from Europe in the year 1241. This was as a result of the death of what Mongol leader?\n",
      "answers": [
        "ogedai"
      ]
    },
    {
      "number": 2550,
      "category": "World History",
      "question": "In 1532, the leader of the Incan empire, Atahualpa, was killed. Who was the leader of the Spanish expedition that marched on the Incan empire and caused Atahualpa's death?\n",
      "answers": [
        "pizarro"
      ]
    },
    {
      "number": 2551,
      "category": "World History",
      "question": "The end of the 30 years war in Europe occurred in 1648. What was the peace that ensued called?\n",
      "answers": [
        "peace of westphalia",
        "westphalia"
      ]
    },
    {
      "number": 2552,
      "category": "World History",
      "question": "In 1803, the United States negotiated what purchase from France?\n",
      "answers": [
        "louisiana purchase",
        "louisiana"
      ]
    },
    {
      "number": 2553,
      "category": "World History",
      "question": "What country of the Western hemisphere declared its independence, becoming the first black nation to gain freedom from European colonial rule?\n",
      "answers": [
        "haiti"
      ]
    },
    {
      "number": 2554,
      "category": "World History",
      "question": "Which Norman defeated King Harold at the Battle of Hastings in 1066?\n",
      "answers": [
        "william the conqueror",
        "william",
        "conqueror"
      ]
    },
    {
      "number": 2555,
      "category": "World History",
      "question": "In which Australian city did MacArthur base his Pacific operations during World War II?\n",
      "answers": [
        "brisbane"
      ]
    },
    {
      "number": 2556,
      "category": "World History",
      "question": "Which two countries did contoversial Historian A.J.P. Taylor blame for starting World War II with their 'Policy of Appeasement'?\n",
      "answers": [
        "britain and france",
        "france and britain"
      ]
    },
    {
      "number": 2557,
      "category": "World History",
      "question": "In Norse mythology, which term describes the pre-ordained doom of the gods?\n",
      "answers": [
        "ragnarok"
      ]
    },
    {
      "number": 2558,
      "category": "World History",
      "question": "What was the name of the settlement which was defended by the British forces as depicted in the film 'Zulu'?\n",
      "answers": [
        "rorke's drift",
        "rorkes drift"
      ]
    },
    {
      "number": 2559,
      "category": "World History",
      "question": "What name did Marshall Blucher want to use as the name for the Battle of Waterloo, reflecting the name of the inn where he and the Duke of Wellington met after the battle?\n",
      "answers": [
        "la belle alliance"
      ]
    },
    {
      "number": 2560,
      "category": "World History",
      "question": "In Heraldry, what color is referred to as 'Gules'?\n",
      "answers": [
        "red"
      ]
    },
    {
      "number": 2561,
      "category": "World History",
      "question": "Who was quoted as saying 'In war, whichever side may call itself the victor, there are no winners, but all are losers.'?\n",
      "answers": [
        "chamberlain",
        "neville chamberlain"
      ]
    },
    {
      "number": 2562,
      "category": "World History",
      "question": "Who wrote 'The Declaration of the Rights of Women' in France in 1791? \n",
      "answers": [
        "olympe de gouge"
      ]
    },
    {
      "number": 2563,
      "category": "World History",
      "question": "Which famous document opens with the sentence 'A spectre is haunting Europe - the spectre of Communism'?\n",
      "answers": [
        "the communist manifesto",
        "manifesto"
      ]
    },
    {
      "number": 2564,
      "category": "World History",
      "question": "What was the nickname of Australian poet A.B. Patterson?\n",
      "answers": [
        "banjo"
      ]
    },
    {
      "number": 2565,
      "category": "World History",
      "question": "The Navy of which country was responsible for the initial retrieval of three 'enigma' machine rotors from a sinking U-boat in 1940, allowing for the succesful decryption of the main 'enigma' keys by that country's cryptographers.\n",
      "answers": [
        "britain"
      ]
    },
    {
      "number": 2566,
      "category": "World History",
      "question": "Which World War II leader was quoted as saying in 1935 'The Pope! How many divisions has he got'?\n",
      "answers": [
        "josef stalin",
        "stalin"
      ]
    },
    {
      "number": 2567,
      "category": "World History",
      "question": "Which war saw the birth of the Balaclava as a form of head wear?\n",
      "answers": [
        "crimean"
      ]
    },
    {
      "number": 2568,
      "category": "World History",
      "question": "What name was taken by a political group from the controversial document which was presented to the Czechoslovakian Government in 1977, leading to the arrest of the three individuals who presented it?\n",
      "answers": [
        "charter '77",
        "charter 77"
      ]
    },
    {
      "number": 2569,
      "category": "World History",
      "question": "What Japanese city was hit by the atomic bomb first?\n",
      "answers": [
        "hiroshima"
      ]
    },
    {
      "number": 2570,
      "category": "World History",
      "question": "True or False, The United States has dropped nuclear bombs on Spain.\n",
      "answers": [
        "true"
      ]
    },
    {
      "number": 2571,
      "category": "World History",
      "question": "Who was the first Prime Minister of Australia?\n",
      "answers": [
        "edmund barton",
        "barton"
      ]
    },
    {
      "number": 2572,
      "category": "World History",
      "question": "From 1904 to 1905 Japan was at war. Which country did Japan defeat?\n",
      "answers": [
        "russia"
      ]
    },
    {
      "number": 2573,
      "category": "World History",
      "question": "What Portuguese explorer became the first European to reach the area now occupied by Brazil in 1500 A.D.?\n",
      "answers": [
        "pedro cabral",
        "cabral"
      ]
    },
    {
      "number": 2574,
      "category": "World History",
      "question": "After Muhammad's death in 632 A.D., his father-in-law became the first caliph of Islam. What was this man's name?\n",
      "answers": [
        "abu bakr",
        "bakr"
      ]
    },
    {
      "number": 2575,
      "category": "World History",
      "question": "Which pope not only bestowed the title 'defender of the faith' on Henry VIII but also subsequently excommunicated him?\n",
      "answers": [
        "leo x",
        "leo 10"
      ]
    },
    {
      "number": 2576,
      "category": "World History",
      "question": "The Mogul empire in India was established in 1526, when the army of the emperor of Delhi was defeated. What was the title given to Zahir ud-din Mohammed, the conqueror and first great Mogul of India?\n",
      "answers": [
        "babar"
      ]
    },
    {
      "number": 2577,
      "category": "World History",
      "question": "The battle of Balaclava was an inconclusive battle fought during which war?\n",
      "answers": [
        "crimean"
      ]
    },
    {
      "number": 2578,
      "category": "World History",
      "question": "Who was the French revolutionist and member of the Convention who was murdered in 1793 by Charlotte Corday?\n",
      "answers": [
        "jean paul marat",
        "marat"
      ]
    },
    {
      "number": 2579,
      "category": "World History",
      "question": "What was the name of the only English pope?\n",
      "answers": [
        "adrian iv",
        "adrian 4"
      ]
    },
    {
      "number": 2580,
      "category": "World History",
      "question": "In the 7th century A.D., what religion spread across much of North Africa?\n",
      "answers": [
        "islam"
      ]
    },
    {
      "number": 2581,
      "category": "World History",
      "question": "During his reign (1398-1353 B.C.), an Egyptian pharoah denied the numerous gods of Egypt and became the first monotheistic Egyptian king. What was this pharoah's name?\n",
      "answers": [
        "ahknaten"
      ]
    },
    {
      "number": 2582,
      "category": "World History",
      "question": "During the Chinese Sui dynasty, a canal system was constructed that linked the Yellow river with the Yangtze river. What was this canal system called?\n",
      "answers": [
        "grand canal"
      ]
    },
    {
      "number": 2583,
      "category": "World History",
      "question": "Who was the 'great liberator' of South American history?\n",
      "answers": [
        "simon bolviar",
        "bolviar"
      ]
    },
    {
      "number": 2584,
      "category": "World History",
      "question": "What is the name of the first landing place on the east coast of Australia (in 1770) of Captain James Cook?\n",
      "answers": [
        "botany bay"
      ]
    },
    {
      "number": 2585,
      "category": "World History",
      "question": "The word 'Anschluss' refers to Hitler's union of Germany with what other European nation?\n",
      "answers": [
        "austria"
      ]
    },
    {
      "number": 2586,
      "category": "World History",
      "question": "Alexander the Great was forced to return back to his capital after his troops mutinied following a battle near the Indus river in India. What was the name of this battle that occurred in 326 B.C.?\n",
      "answers": [
        "hydaspes"
      ]
    },
    {
      "number": 2587,
      "category": "World History",
      "question": "What city was the site of the peace and treaty that ended the American Revolution in 1783?\n",
      "answers": [
        "paris"
      ]
    },
    {
      "number": 2588,
      "category": "World History",
      "question": "True or False, Great Britain, United States, and Canada invaded Normandy on D-Day.\n",
      "answers": [
        "true"
      ]
    },
    {
      "number": 2589,
      "category": "World History",
      "question": "Who was assassinated in Sarajevo, and was one of the main reasons that World War I started?\n",
      "answers": [
        "franz ferdinand",
        "ferdinand"
      ]
    },
    {
      "number": 2590,
      "category": "World History",
      "question": "How many times was Franklin D. Roosevelt elected as the President of the United States of America?\n",
      "answers": [
        "four",
        "4"
      ]
    },
    {
      "number": 2591,
      "category": "World History",
      "question": "Whay year did Hitler become Chancellor of Germany?\n",
      "answers": [
        "1933"
      ]
    },
    {
      "number": 2592,
      "category": "World History",
      "question": "What 20th century British Prime Minister coined the phrase 'Iron Curtain'?\n",
      "answers": [
        "winston churchill",
        "churchill"
      ]
    },
    {
      "number": 2593,
      "category": "World History",
      "question": "What group won victories during the American Revolution at Bennington and Fort Ticonderoga under the leadership of Ethan Allen?\n",
      "answers": [
        "green mountain boys"
      ]
    },
    {
      "number": 2594,
      "category": "World History",
      "question": "What man was the Mayor of New York City from 1933 until 1945?\n",
      "answers": [
        "fiorello la gaurdia",
        "la gaurdia"
      ]
    },
    {
      "number": 2595,
      "category": "World History",
      "question": "In what year did the Glorious Revolution in which William and Mary were put on the throne of England occur?\n",
      "answers": [
        "1688"
      ]
    },
    {
      "number": 2596,
      "category": "World History",
      "question": "What amendment to the U.S. Constitution permits the Federal Income Tax?\n",
      "answers": [
        "sixteenth",
        "16th",
        "16"
      ]
    },
    {
      "number": 2597,
      "category": "World History",
      "question": "Who served as Dwight Eisenhower's Vice-President?\n",
      "answers": [
        "richard nixon",
        "nixon"
      ]
    },
    {
      "number": 2598,
      "category": "World History",
      "question": "Who was the leader of the Mexicans during the 1836 invasion of the Alamo?\n",
      "answers": [
        "santa anna",
        "anna"
      ]
    },
    {
      "number": 2599,
      "category": "World History",
      "question": "In what southern State was Former-President Jimmy Carter born (phalaphe's home state)?\n",
      "answers": [
        "georgia"
      ]
    },
    {
      "number": 2600,
      "category": "World History",
      "question": "Who founded the colony of Rhode Island?\n",
      "answers": [
        "roger williams",
        "williams"
      ]
    },
    {
      "number": 2601,
      "category": "World History",
      "question": "What President removed General Douglas MacArthur from command in the Korean War?\n",
      "answers": [
        "harry s. truman",
        "truman"
      ]
    },
    {
      "number": 2602,
      "category": "World History",
      "question": "Who shot New York Senator Robert Kennedy in 1968?\n",
      "answers": [
        "sirhan sirhan",
        "sirhan"
      ]
    },
    {
      "number": 2603,
      "category": "World History",
      "question": "What French King was overthrown in the July Revolution of 1830?\n",
      "answers": [
        "charles x",
        "charles 10"
      ]
    },
    {
      "number": 2604,
      "category": "World History",
      "question": "What German military leader was nicknamed 'Desert Fox'?\n",
      "answers": [
        "erwin rommel",
        "rommel"
      ]
    },
    {
      "number": 2605,
      "category": "World History",
      "question": "What President was in office during the Alien and Sedition Acts of 1798?\n",
      "answers": [
        "john adams",
        "adams"
      ]
    },
    {
      "number": 2606,
      "category": "World History",
      "question": "'These are the times that try men's souls' is a quote from what Thomsas Paine pamphlet?\n",
      "answers": [
        "the crisis",
        "crisis"
      ]
    },
    {
      "number": 2607,
      "category": "World History",
      "question": "What British award was bestowed on the island country of Malta in 1942? \n",
      "answers": [
        "the george cross",
        "george"
      ]
    },
    {
      "number": 2608,
      "category": "World History",
      "question": "Which European country became a republic in 1792?\n",
      "answers": [
        "france"
      ]
    },
    {
      "number": 2609,
      "category": "World History",
      "question": "What country boasted World War Two's two biggest battleships?\n",
      "answers": [
        "japan"
      ]
    },
    {
      "number": 2610,
      "category": "World History",
      "question": "What nation has the oldest monarchy?\n",
      "answers": [
        "japan"
      ]
    },
    {
      "number": 2611,
      "category": "World History",
      "question": "What European country had Kings nicknamed 'The Lazy', 'The Fat' and 'The Quarrelsome'?\n",
      "answers": [
        "france"
      ]
    },
    {
      "number": 2612,
      "category": "World History",
      "question": "What European city lost 4,000 people to a 'killer fog' of carbon dioxide in 1952?\n",
      "answers": [
        "london"
      ]
    },
    {
      "number": 2613,
      "category": "World History",
      "question": "Which continent is the only one without an active volcano?\n",
      "answers": [
        "australia"
      ]
    },
    {
      "number": 2614,
      "category": "World History",
      "question": "A subject of English literature, which Scottish king killed Duncan I to seized the throne in 1040?\n",
      "answers": [
        "macbeth"
      ]
    },
    {
      "number": 2615,
      "category": "World History",
      "question": "What group conquered the Russians, Ukrainians, and Siberians in the 13th century and established the Empire of the Golden Horde?\n",
      "answers": [
        "tartars"
      ]
    },
    {
      "number": 2616,
      "category": "World History",
      "question": "During the Black Death, or Bubonic Plague, in mid 1300's Europe (approx.), what percentage of the population perished?\n",
      "answers": [
        "33%",
        "33",
        "third"
      ]
    },
    {
      "number": 2617,
      "category": "World History",
      "question": "The Hundred Years War was fought between what two European countries?\n",
      "answers": [
        "england and france",
        "france and england"
      ]
    },
    {
      "number": 2618,
      "category": "World History",
      "question": "Vasco de Gama, who discovered a sea route in the 15th century to India around the continent of Africa, was from what European country?\n",
      "answers": [
        "portugal"
      ]
    },
    {
      "number": 2619,
      "category": "World History",
      "question": "What group used the agricultural method of terracing in the Andes Mountains during the 15th century?\n",
      "answers": [
        "incas"
      ]
    },
    {
      "number": 2620,
      "category": "World History",
      "question": "The beginning of the Renaissance in Italy began in what century?\n",
      "answers": [
        "14th century",
        "14th",
        "14"
      ]
    },
    {
      "number": 2621,
      "category": "World History",
      "question": "Who defeated the English at the Battle of Hastings in 1066?\n",
      "answers": [
        "normans"
      ]
    },
    {
      "number": 2622,
      "category": "World History",
      "question": "Built in 1407 in Genoa, Casa di San Giorgio, one of the first of its kind, was a what?\n",
      "answers": [
        "bank"
      ]
    },
    {
      "number": 2623,
      "category": "World History",
      "question": "Which was constructed first, The Cathedral or The Tower, in Pisa, Italy?\n",
      "answers": [
        "the cathedral",
        "cathedral"
      ]
    },
    {
      "number": 2624,
      "category": "World History",
      "question": "When Christopher Columbus landed in the Caribbean Islands in 1492, what present day nation did he land on first?\n",
      "answers": [
        "bahamas"
      ]
    },
    {
      "number": 2625,
      "category": "World History",
      "question": "In 1260, the Mongols led by Kublai Khan overtook China and ruled until 1368. What dynasty was this?\n",
      "answers": [
        "yuan"
      ]
    },
    {
      "number": 2626,
      "category": "World History",
      "question": "The Aztec capital was founded around 1325 in central Mexico and was called what?\n",
      "answers": [
        "tenochtitlan"
      ]
    },
    {
      "number": 2627,
      "category": "World History",
      "question": "Which English King issued the Magna Carta in 1215?\n",
      "answers": [
        "king john",
        "john"
      ]
    },
    {
      "number": 2628,
      "category": "World History",
      "question": "Joan of Arc was a heroine during what war?\n",
      "answers": [
        "hundred year's war",
        "100 year's war",
        "hundred years war",
        "100 years war"
      ]
    },
    {
      "number": 2629,
      "category": "World History",
      "question": "What Venetian traveler and explorer landed in China and reached Kublai Khan's court in 1275?\n",
      "answers": [
        "marco polo",
        "polo"
      ]
    },
    {
      "number": 2630,
      "category": "World History",
      "question": "Constantinople fell to the Ottoman Turks in what year?\n",
      "answers": [
        "1453"
      ]
    },
    {
      "number": 2631,
      "category": "World History",
      "question": "What empire ruled by Mansa Musa reached its height in Africa from 1312-1337?\n",
      "answers": [
        "mali kingdom",
        "mali"
      ]
    },
    {
      "number": 2632,
      "category": "World History",
      "question": "The legend of this 12th century English bandit-hero was mostly made known through the ballads and songs of wandering minstrels who weaved a patchwork of fact and fiction into the contemporary culture of the time. Who was he?\n",
      "answers": [
        "robin hood"
      ]
    },
    {
      "number": 2633,
      "category": "World History",
      "question": "3+7= ?\n",
      "answers": [
        "1588",
        "what year is the single most important year in u.s. history (the defeat of the spanish armada)?",
        "arithmetic",
        "10"
      ]
    },
    {
      "number": 2634,
      "category": "Arithmetic",
      "question": "14x20= ?\n",
      "answers": [
        "280"
      ]
    },
    {
      "number": 2635,
      "category": "Arithmetic",
      "question": "21+44= ?\n",
      "answers": [
        "65"
      ]
    },
    {
      "number": 2636,
      "category": "Arithmetic",
      "question": "31(4+9)= ?\n",
      "answers": [
        "403"
      ]
    },
    {
      "number": 2637,
      "category": "Arithmetic",
      "question": "21+9= ?\n",
      "answers": [
        "30"
      ]
    },
    {
      "number": 2638,
      "category": "Arithmetic",
      "question": "86+180= ?\n",
      "answers": [
        "266"
      ]
    },
    {
      "number": 2639,
      "category": "Arithmetic",
      "question": "5(5)+41-44= ?\n",
      "answers": [
        "22"
      ]
    },
    {
      "number": 2640,
      "category": "Word Problem",
      "question": "There were 4 apples on the table. Johnny ate 3 of them, and then the dog took another one. How many apples were left on the table?\n",
      "answers": [
        "0",
        "none"
      ]
    },
    {
      "number": 2641,
      "category": "Word Problem",
      "question": "A farmer had 18 sheep, all but 9 died. How may sheep did he have after that?\n",
      "answers": [
        "9"
      ]
    },
    {
      "number": 2642,
      "category": "Word Problem",
      "question": "If Hamfon has 6 apples, and at the end of the day he has 6 apples, assuming nothing happens to the apples by tomorrow morning, how many apples will he have tomorrow morning.\n",
      "answers": [
        "6"
      ]
    },
    {
      "number": 2643,
      "category": "Algebra I",
      "question": "If this is true, say the answer, if it is false say false: 2(3x4) = (2x3)4\n",
      "answers": [
        "24"
      ]
    },
    {
      "number": 2644,
      "category": "Algebra I",
      "question": "If this is true, say the answer, if it is false say false: 5(4+1)= (20+5)\n",
      "answers": [
        "25"
      ]
    },
    {
      "number": 2645,
      "category": "Algebra I",
      "question": "If this is true, say the answer, if it is false say false: 2+1x3 = (2+1)x3\n",
      "answers": [
        "false"
      ]
    },
    {
      "number": 2646,
      "category": "Roman Numerals",
      "question": "Divide the Roman numeral DXXII by III. In Roman numerals, what would be your answer.\n",
      "answers": [
        "clxxiv"
      ]
    },
    {
      "number": 2647,
      "category": "Algebra I",
      "question": "Solve for X: 5x+4=24\n",
      "answers": [
        "4"
      ]
    },
    {
      "number": 2648,
      "category": "Roman Numerals",
      "question": "Multiply XLIV by II. What is your answer in Roman numerals?\n",
      "answers": [
        "lxxxviii"
      ]
    },
    {
      "number": 2649,
      "category": "Roman Numerals",
      "question": "Add MCMXLIV and D. What is your answer in Roman numerals?\n",
      "answers": [
        "mmcdxliv"
      ]
    },
    {
      "number": 2650,
      "category": "Roman Numerals",
      "question": "A real easy one. Subtract II from IV in Roman numerals.\n",
      "answers": [
        "ii"
      ]
    },
    {
      "number": 2651,
      "category": "Roman Numerals",
      "question": "If the numerator is XXI and your denominator is III, what's the answer in Roman numerals?\n",
      "answers": [
        "vii"
      ]
    },
    {
      "number": 2652,
      "category": "Terminology",
      "question": "What is the meaning of 'crore'?\n",
      "answers": [
        "10,000,000",
        "10000000",
        "10 million"
      ]
    },
    {
      "number": 2653,
      "category": "Geometry",
      "question": "How many sides does a 'icosohedron' have?\n",
      "answers": [
        "20"
      ]
    },
    {
      "number": 2654,
      "category": "Terminology",
      "question": "'Lakh' is a term meaning what?\n",
      "answers": [
        "100,000",
        "100000"
      ]
    },
    {
      "number": 2655,
      "category": "Geometry",
      "question": "What is the name of the 'x' coordinate in geometry?\n",
      "answers": [
        "abscissa"
      ]
    },
    {
      "number": 2656,
      "category": "Terminology",
      "question": "What was the original meaning of the word 'Myriad'?\n",
      "answers": [
        "10,000",
        "10000"
      ]
    },
    {
      "number": 2657,
      "category": "Geometry",
      "question": "In assuming (X,Y,Z) what does Y = in (52,5,2)\n",
      "answers": [
        "5"
      ]
    },
    {
      "number": 2658,
      "category": "Algebra II",
      "question": "Matrices are fun!! I mean everyone liked the Matrix soo...add Matrix a [1 2 3 4] to Matrix b [4 3 2 1] and say the answer.\n",
      "answers": [
        "[5 5 5 5]"
      ]
    },
    {
      "number": 2659,
      "category": "Algebra II",
      "question": "Assuming these three matrices are three rows of one matrix, ordered from top to bottom, what type of matrix is this an example of: [1 0 0 3] [0 1 0 4] [0 0 1 2] ?\n",
      "answers": [
        "augmented matrix"
      ]
    },
    {
      "number": 2660,
      "category": "Geometry",
      "question": ".5 x Base x Height is the formula to find the area of what geometric figure?\n",
      "answers": [
        "triangle"
      ]
    },
    {
      "number": 2661,
      "category": "Algebra",
      "question": "A set of all X such that {X=1,2,3,4...} is the definition for what classification of numbers?\n",
      "answers": [
        "natural"
      ]
    },
    {
      "number": 2662,
      "category": "Algebra",
      "question": "A set of all X such that {X=0,1,2,3,4...} is the definition for what classification of numbers?\n",
      "answers": [
        "whole"
      ]
    },
    {
      "number": 2663,
      "category": "Algebra",
      "question": " A set of all X such that {X=...-3,-2,-1,0,1,2,3...} is the definition for what classification of numbers?\n",
      "answers": [
        "integers"
      ]
    },
    {
      "number": 2664,
      "category": "Politics",
      "question": "We all know that the United Kingdom has a Queen. However, what is the true definition of their governmental system?\n",
      "answers": [
        "parliamentary monarchy"
      ]
    },
    {
      "number": 2665,
      "category": "Politics",
      "question": "The United States formed a government like none other in history. What is the proper term to describe our system of government?\n",
      "answers": [
        "federal republic"
      ]
    },
    {
      "number": 2666,
      "category": "Politics",
      "question": "We all know of the troubles the U.S. had in Somalia in the early 1990s. What type of government has been established in that war-torn African nation?\n",
      "answers": [
        "none"
      ]
    },
    {
      "number": 2667,
      "category": "Politics",
      "question": "What nation gained their independence from Great Britain in 1947 and now functions as a federal republic?\n",
      "answers": [
        "india"
      ]
    },
    {
      "number": 2668,
      "category": "Politics",
      "question": "What nation occupies the northern half of the island nation of Cyprus?\n",
      "answers": [
        "turkey"
      ]
    },
    {
      "number": 2669,
      "category": "Politics",
      "question": "Libya's government is headed by Muammar Qadaffi. What rank does he hold in the Libyan military?\n",
      "answers": [
        "colonel"
      ]
    },
    {
      "number": 2670,
      "category": "Politics",
      "question": "Is the Vatican a country?\n",
      "answers": [
        "true",
        "yes"
      ]
    },
    {
      "number": 2671,
      "category": "Politics",
      "question": "The government of Israel is based where?\n",
      "answers": [
        "jerusalem"
      ]
    },
    {
      "number": 2672,
      "category": "Politics",
      "question": "According to most world governments (including the U.S), the government of Israel is based where?\n",
      "answers": [
        "tel aviv"
      ]
    },
    {
      "number": 2673,
      "category": "Politics",
      "question": "During the British Raj in India, what city originally served as its capital?\n",
      "answers": [
        "calcutta"
      ]
    },
    {
      "number": 2674,
      "category": "Politics",
      "question": "Fujimori is president of what country?\n",
      "answers": [
        "peru"
      ]
    },
    {
      "number": 2675,
      "category": "Politics",
      "question": "Who is president of Russia?\n",
      "answers": [
        "putin"
      ]
    },
    {
      "number": 2676,
      "category": "Politics",
      "question": "Who is the Prime Minister of Israel?\n",
      "answers": [
        "barak",
        "ehud barak"
      ]
    },
    {
      "number": 2677,
      "category": "Politics",
      "question": "Who burned down the German parliamentary building, the Reichstag, on 27 Februari 1933?\n",
      "answers": [
        "marinus van der lubbe",
        "lubbe",
        "marinus"
      ]
    },
    {
      "number": 2678,
      "category": "Politics",
      "question": "What is the parliament of Israel called?\n",
      "answers": [
        "knesset"
      ]
    },
    {
      "number": 2679,
      "category": "Politics",
      "question": "The Japanese parliament, the Diet, is composed of a House of Representatives and a ...\n",
      "answers": [
        "house of councillors"
      ]
    },
    {
      "number": 2680,
      "category": "Politics",
      "question": "Which country has the Folketing as parliament?\n",
      "answers": [
        "denmark",
        "holland"
      ]
    },
    {
      "number": 2681,
      "category": "Politics",
      "question": "What is the general assembly of Russia known as.\n",
      "answers": [
        "duma"
      ]
    },
    {
      "number": 2682,
      "category": "Politics",
      "question": "The French parliament consists of two chambers, the Senat and the ...\n",
      "answers": [
        "assemblee nationale"
      ]
    },
    {
      "number": 2683,
      "category": "Politics",
      "question": "In which city is the South African parliament?\n",
      "answers": [
        "cape town"
      ]
    },
    {
      "number": 2684,
      "category": "Politics",
      "question": "At what age are Japanese citizens eligible to vote?\n",
      "answers": [
        "20"
      ]
    },
    {
      "number": 2685,
      "category": "Politics",
      "question": "What is the Chinese parliament called?\n",
      "answers": [
        "national people's congress",
        "national peoples congress"
      ]
    },
    {
      "number": 2686,
      "category": "Politics",
      "question": "Where does the European Parliament have its seat?\n",
      "answers": [
        "strasbourg"
      ]
    },
    {
      "number": 2687,
      "category": "Politics",
      "question": "In which city is the Dutch parliament?\n",
      "answers": [
        "the hague"
      ]
    },
    {
      "number": 2688,
      "category": "Politics",
      "question": "In which year was the landmark Brown vs Topeka (Board of Education) case, which argued that racially separate facilities in education were inherently unequal, passed by the Supreme Court?\n",
      "answers": [
        "1954"
      ]
    },
    {
      "number": 2689,
      "category": "Politics",
      "question": "Which institution makes up the legislative branch of the government of the United States?\n",
      "answers": [
        "congress"
      ]
    },
    {
      "number": 2690,
      "category": "Politics",
      "question": "pro-choice people)?\n",
      "answers": [
        "abortion",
        "what did the 1973 roe vs wade supreme court case deal with (and this is why everyone is confused about pro-life"
      ]
    },
    {
      "number": 2691,
      "category": "Politics",
      "question": "Which US President started his career as a film actor?\n",
      "answers": [
        "reagan",
        "ronald reagan"
      ]
    },
    {
      "number": 2692,
      "category": "Politics",
      "question": "Who is the Vice President of the United States of America.\n",
      "answers": [
        "cheney",
        "dick cheney"
      ]
    },
    {
      "number": 2693,
      "category": "Politics",
      "question": "Who is the Prime Minister of Great Britain.\n",
      "answers": [
        "blair",
        "tony blair"
      ]
    },
    {
      "number": 2694,
      "category": "Politics",
      "question": "How are the first ten Amendments to the U.S Constitution commonly known?\n",
      "answers": [
        "bill of rights"
      ]
    },
    {
      "number": 2695,
      "category": "Politics",
      "question": "The network that helped slaves in the South escape to freedom in the North was known as the_______ _________.\n",
      "answers": [
        "underground railroad"
      ]
    },
    {
      "number": 2696,
      "category": "Politics",
      "question": "According to Popular Vote, who is the President of the United States of American (hmmm...can we say: phal is liberal?)\n",
      "answers": [
        "al gore"
      ]
    },
    {
      "number": 2697,
      "category": "Politics",
      "question": "In the 1876 Presidential election, Samuel J. Tilden won the popular vote, but initially there was a tie in the electoral votes for the two leading candidates in the Electoral College vote. This tie was decided by a commission established by Congress. Who finally became President?\n",
      "answers": [
        "hayes",
        "rutherford b. hayes"
      ]
    },
    {
      "number": 2698,
      "category": "Politics",
      "question": "What is the gestation period of a horse, in months?\n",
      "answers": [
        "israel",
        "in 1998, what country turned 50?",
        "horses",
        "eleven",
        "11"
      ]
    },
    {
      "number": 2699,
      "category": "Horses",
      "question": "Which of the following is NOT a movement of the horse: Crawl, Trot, Walk, Canter?\n",
      "answers": [
        "crawl"
      ]
    },
    {
      "number": 2700,
      "category": "Horses",
      "question": "Which of the following is a style of riding: Northwestern, Southwestern, Western, Northeastern?\n",
      "answers": [
        "western"
      ]
    },
    {
      "number": 2701,
      "category": "Horses",
      "question": "On a horse, where does the bit go?\n",
      "answers": [
        "in the mouth",
        "mouth"
      ]
    },
    {
      "number": 2702,
      "category": "Horses",
      "question": "Many Appaloosa foals are born 'solid-color' and '_______' later in life.\n",
      "answers": [
        "become spotted",
        "spotted"
      ]
    },
    {
      "number": 2703,
      "category": "Horses",
      "question": "Secretariat, 20th century's most famous horse, was of what breed?\n",
      "answers": [
        "thoroughbred"
      ]
    },
    {
      "number": 2704,
      "category": "Horses",
      "question": "Which of these are a vice of the horse: Rearing, Bearing, Rucking, Searing?\n",
      "answers": [
        "rearing"
      ]
    },
    {
      "number": 2705,
      "category": "Horses",
      "question": "Which horse breed does the Tolt gait?\n",
      "answers": [
        "icelandic"
      ]
    },
    {
      "number": 2706,
      "category": "Horses",
      "question": "Why do horses lift up their upper lip?\n",
      "answers": [
        "to smell something better",
        "smell"
      ]
    },
    {
      "number": 2707,
      "category": "Horses",
      "question": "What couple EACH won a gold medal in the 2000 olympics?\n",
      "answers": [
        "karen and david o'conner",
        "conner"
      ]
    },
    {
      "number": 2708,
      "category": "Horses",
      "question": "What pony has played an important part in the lives of Carpathian people?\n",
      "answers": [
        "huzule pony",
        "huzule"
      ]
    },
    {
      "number": 2709,
      "category": "Horses",
      "question": "For a horse at the gallop, how many feet are on the ground at once?\n",
      "answers": [
        "one",
        "1"
      ]
    },
    {
      "number": 2710,
      "category": "Horses",
      "question": "How many kinds of Tapirs (a close relative to the horse) still exist today?\n",
      "answers": [
        "four",
        "4"
      ]
    },
    {
      "number": 2711,
      "category": "Horses",
      "question": "What was the name of the horse that was ridden by the Lone Ranger?\n",
      "answers": [
        "silver"
      ]
    },
    {
      "number": 2712,
      "category": "Horses",
      "question": "What was the name of Paul Revere's horse?\n",
      "answers": [
        "brown betty"
      ]
    },
    {
      "number": 2713,
      "category": "Horses",
      "question": "What was the name of the horse ridden by Dale Evans?\n",
      "answers": [
        "buttermilk"
      ]
    },
    {
      "number": 2714,
      "category": "Horses",
      "question": "What was the name of Roy Roger's horse?\n",
      "answers": [
        "trigger"
      ]
    },
    {
      "number": 2715,
      "category": "Horses",
      "question": "What was the name of the horse ridden by Chuck Connors in the Rifleman?\n",
      "answers": [
        "razor"
      ]
    },
    {
      "number": 2716,
      "category": "Horses",
      "question": "What was the name of the riderless horse at John F. Kennedy's funeral?\n",
      "answers": [
        "blackjack"
      ]
    },
    {
      "number": 2717,
      "category": "Horses",
      "question": "A thoroughbred horse's name may not contain more than how many letters?\n",
      "answers": [
        "fourteen",
        "14"
      ]
    },
    {
      "number": 2718,
      "category": "Horses",
      "question": "Which racehorse was named 'horse of the year' for 5 consective years in the early 1960's?\n",
      "answers": [
        "kelso"
      ]
    },
    {
      "number": 2719,
      "category": "Horses",
      "question": "Which is not a type of gait for a show horse: Canter, Step, Durbin, Pace?\n",
      "answers": [
        "durbin"
      ]
    },
    {
      "number": 2720,
      "category": "Horses",
      "question": "Which is the heaviest of the following horses: Morgan, Race, Draft, Quarter?\n",
      "answers": [
        "draft"
      ]
    },
    {
      "number": 2721,
      "category": "Horses",
      "question": "What filly won the 1924 Preakness?\n",
      "answers": [
        "nellie morse",
        "nellie",
        "morse"
      ]
    },
    {
      "number": 2722,
      "category": "Horses",
      "question": "A martingale performs what function?\n",
      "answers": [
        "keeps the horse's head down",
        "head down"
      ]
    },
    {
      "number": 2723,
      "category": "Horses",
      "question": "What breed was The Black Stallion?\n",
      "answers": [
        "arabian"
      ]
    },
    {
      "number": 2724,
      "category": "Horses",
      "question": "As of 2001, how many fillies have won the Kentucky Derby?\n",
      "answers": [
        "three",
        "3"
      ]
    },
    {
      "number": 2725,
      "category": "Horses",
      "question": "What is the name of the school in Vienna where Lipizzaners are trained and perform?\n",
      "answers": [
        "spanish riding school",
        "spanish"
      ]
    },
    {
      "number": 2726,
      "category": "Horses",
      "question": "The United States Equestrian Team is headquartered in Gladstone.  What state?\n",
      "answers": [
        "new jersey"
      ]
    },
    {
      "number": 2727,
      "category": "Horses",
      "question": "A horse is measured in ________?\n",
      "answers": [
        "hands"
      ]
    },
    {
      "number": 2728,
      "category": "Horses",
      "question": "The late, great Ruffian ran her last race against which colt?\n",
      "answers": [
        "foolish pleasure",
        "foolish",
        "pleasure"
      ]
    },
    {
      "number": 2729,
      "category": "Horses",
      "question": "Horses were first domesticated for what?\n",
      "answers": [
        "meat and milk",
        "meat",
        "milk"
      ]
    },
    {
      "number": 2730,
      "category": "Horses",
      "question": "The appaloosa is associated with what group of Native Americans?\n",
      "answers": [
        "nez perce"
      ]
    },
    {
      "number": 2731,
      "category": "Horses",
      "question": "The horse associated with Anheuser-Busch is?\n",
      "answers": [
        "clydesdale"
      ]
    },
    {
      "number": 2732,
      "category": "Horses",
      "question": "The breed associated with the 'airs above the ground' is?\n",
      "answers": [
        "lipizzaner"
      ]
    },
    {
      "number": 2733,
      "category": "Horses",
      "question": "The fino, corto and largo are?\n",
      "answers": [
        "gaits of a paso fino",
        "paso fino",
        "gait",
        "gaits"
      ]
    },
    {
      "number": 2734,
      "category": "Horses",
      "question": "The Pony of the Americas (POA) looks like what breed of horse?\n",
      "answers": [
        "appaloosa"
      ]
    },
    {
      "number": 2735,
      "category": "Horses",
      "question": "What color would a Lipizzan NOT be at birth?\n",
      "answers": [
        "white"
      ]
    },
    {
      "number": 2736,
      "category": "Horses",
      "question": "The Quarter Horse originated in what country?\n",
      "answers": [
        "united states",
        "usa"
      ]
    },
    {
      "number": 2737,
      "category": "Horses",
      "question": "The Spanish Riding School, where Lipizzans are bred and trained, is found in what country?\n",
      "answers": [
        "austria"
      ]
    },
    {
      "number": 2738,
      "category": "Horses",
      "question": "The mounts of 3 Civil War generals--Lee's Traveller, Grant's Cincinnati, Sherman's Lexington--were what breed of horse?\n",
      "answers": [
        "saddlebred"
      ]
    },
    {
      "number": 2739,
      "category": "Horses",
      "question": "What breed is known as 'The Horse America Made'?\n",
      "answers": [
        "saddlebred"
      ]
    },
    {
      "number": 2740,
      "category": "Horses",
      "question": "Hambletonian 10 is the foundation sire of what breed?\n",
      "answers": [
        "standardbred"
      ]
    },
    {
      "number": 2741,
      "category": "Horses",
      "question": "The 'running walk' is the characteristic gait of what breed?\n",
      "answers": [
        "tennessee walking horse",
        "tennessee"
      ]
    },
    {
      "number": 2742,
      "category": "Horses",
      "question": "What is the fastest harness horse in the world?\n",
      "answers": [
        "standardbred"
      ]
    },
    {
      "number": 2743,
      "category": "Horses",
      "question": "What breed originated from the Darley Arabian, the Godolphin Arabian and the Byerly Turk?\n",
      "answers": [
        "thoroughbred"
      ]
    },
    {
      "number": 2744,
      "category": "Horses",
      "question": "'Drinker of the wind' is a nickname for what breed?\n",
      "answers": [
        "arabian"
      ]
    },
    {
      "number": 2745,
      "category": "Horses",
      "question": "The American Stud Book records what breed?\n",
      "answers": [
        "thoroughbreds"
      ]
    },
    {
      "number": 2746,
      "category": "Horses",
      "question": "'Overo' and 'tobiano' are terms that refer to which type of horse?\n",
      "answers": [
        "paint"
      ]
    },
    {
      "number": 2747,
      "category": "Horses",
      "question": "Which breed of horse can 'turn on a dime'?\n",
      "answers": [
        "quarter horse",
        "quarter"
      ]
    },
    {
      "number": 2748,
      "category": "Horses",
      "question": "An oxer is a type of what?\n",
      "answers": [
        "jump"
      ]
    },
    {
      "number": 2749,
      "category": "Horses",
      "question": "When your pony has his ears pinned back and looking at you, what's he trying to say?\n",
      "answers": [
        "go away!",
        "go away"
      ]
    },
    {
      "number": 2750,
      "category": "Horses",
      "question": "When a horses' eyes gets slightly cloudy What does this mean?\n",
      "answers": [
        "horse is in pain",
        "pain",
        "in pain"
      ]
    },
    {
      "number": 2751,
      "category": "Horses",
      "question": "Whilst out in the paddock, the horse suddenly raises his head and has his ears pricked, what's he doing?\n",
      "answers": [
        "looking for a predator",
        "predator"
      ]
    },
    {
      "number": 2752,
      "category": "Horses",
      "question": "When a horse is relaxed under saddle, what would he possibly do?\n",
      "answers": [
        "mouth the bit",
        "mouth"
      ]
    },
    {
      "number": 2753,
      "category": "Horses",
      "question": "When you are loose working a horse, and he bobs his head along the ground, what does this mean?\n",
      "answers": [
        "the horse is willing to listen",
        "listen"
      ]
    },
    {
      "number": 2754,
      "category": "Horses",
      "question": "When I turn my 18 month old colt out into the paddock in the springtime, and he starts to bite and rear with the others, what's he doing?\n",
      "answers": [
        "playing"
      ]
    },
    {
      "number": 2755,
      "category": "Horses",
      "question": "When a new horse is introduced into a new herd, he often gets chased off by the herd, but everything finally settles down - what's happening here?\n",
      "answers": [
        "establishing the pecking order",
        "pecking order"
      ]
    },
    {
      "number": 2756,
      "category": "Horses",
      "question": "What breeds of horses usually have bald faces?\n",
      "answers": [
        "appaloosa and paint",
        "appaloosa",
        "paint"
      ]
    },
    {
      "number": 2757,
      "category": "Horses",
      "question": "A pony is classified as what height (and below) in hands?\n",
      "answers": [
        "14.2 hands",
        "14.2"
      ]
    },
    {
      "number": 2758,
      "category": "Horses",
      "question": "What is the purpose of a figure eight noseband?\n",
      "answers": [
        "to keep the mouth closed",
        "mouth closed"
      ]
    },
    {
      "number": 2759,
      "category": "Horses",
      "question": "Pivoting on the forefeet is called a turn on the?\n",
      "answers": [
        "forehand"
      ]
    },
    {
      "number": 2760,
      "category": "Horses",
      "question": "How many poles are there in Pole Bending?\n",
      "answers": [
        "six",
        "6"
      ]
    },
    {
      "number": 2761,
      "category": "Horses",
      "question": "A cow-hocked horse has his hocks what?\n",
      "answers": [
        "too close together",
        "close"
      ]
    },
    {
      "number": 2762,
      "category": "Horses",
      "question": "What is the Sport of Kings?\n",
      "answers": [
        "horse racing"
      ]
    },
    {
      "number": 2763,
      "category": "Horses",
      "question": "Where are a horse's feathers?\n",
      "answers": [
        "on his fetlocks",
        "fetlocks"
      ]
    },
    {
      "number": 2764,
      "category": "Horses",
      "question": "Foaling usually takes how long?\n",
      "answers": [
        "15-30 minutes",
        "15",
        "30",
        "fifteen",
        "thirty"
      ]
    },
    {
      "number": 2765,
      "category": "Horses",
      "question": "A strawberry roan would be what color without his white hairs?\n",
      "answers": [
        "chestnut"
      ]
    },
    {
      "number": 2766,
      "category": "Horses",
      "question": "What is the color pattern on a horse that is commonly thought to be a breed of horse?\n",
      "answers": [
        "pinto"
      ]
    },
    {
      "number": 2767,
      "category": "Horses",
      "question": "Palomino is also a name for what?\n",
      "answers": [
        "color of a horse",
        "color"
      ]
    },
    {
      "number": 2768,
      "category": "Horses",
      "question": "What are most horses used for now?\n",
      "answers": [
        "pleasure riding",
        "pleasure"
      ]
    },
    {
      "number": 2769,
      "category": "Horses",
      "question": "What type of horses are the wild Mustangs descended from?\n",
      "answers": [
        "spanish horses",
        "spanish"
      ]
    },
    {
      "number": 2770,
      "category": "Horses",
      "question": "What was the name of the little golden Arabian stallion in the book: 'The King of the Wind'?\n",
      "answers": [
        "sham"
      ]
    },
    {
      "number": 2771,
      "category": "Horses",
      "question": "Where does the bit go?\n",
      "answers": [
        "in the mouth",
        "mouth"
      ]
    },
    {
      "number": 2772,
      "category": "Horses",
      "question": "What is the gestation period of a horse?\n",
      "answers": [
        "11 months",
        "11",
        "eleven"
      ]
    },
    {
      "number": 2773,
      "category": "Horese",
      "question": "What is a group of female horses called?\n",
      "answers": [
        "harem"
      ]
    },
    {
      "number": 2774,
      "category": "Horses",
      "question": "What is the average height in hands of a mustang (to the withers)?\n",
      "answers": [
        "14 hands",
        "14",
        "fourteen"
      ]
    },
    {
      "number": 2775,
      "category": "Horese",
      "question": "What is the lifespan of the mustang?\n",
      "answers": [
        "up to 20 years",
        "20 years",
        "20",
        "twenty"
      ]
    },
    {
      "number": 2776,
      "category": "Horses",
      "question": "In what year were laws passed to make it a federal offense to harass or kill mustangs?\n",
      "answers": [
        "1971"
      ]
    },
    {
      "number": 2777,
      "category": "Horses",
      "question": "What is an older female mustang who heads the herd called?\n",
      "answers": [
        "lead mare"
      ]
    },
    {
      "number": 2778,
      "category": "Horses",
      "question": "What is the diet of the mustang?\n",
      "answers": [
        "grass and foliage",
        "grass",
        "foliage"
      ]
    },
    {
      "number": 2779,
      "category": "Horses",
      "question": "For what wars were mustangs captured and used?\n",
      "answers": [
        "boer war and world war 1",
        "boer war",
        "world war 1",
        "ww1"
      ]
    },
    {
      "number": 2780,
      "category": "Horses",
      "question": "In what part of the United States do the mustangs roam?\n",
      "answers": [
        "western"
      ]
    },
    {
      "number": 2781,
      "category": "Horses",
      "question": "At what age do mustangs become sexually mature?\n",
      "answers": [
        "3 years",
        "3",
        "three"
      ]
    },
    {
      "number": 2782,
      "category": "Horses",
      "question": "What does 1 hand equal in inches?\n",
      "answers": [
        "four",
        "4"
      ]
    },
    {
      "number": 2783,
      "category": "Horses",
      "question": "What kind of horse is the mustang descended from?\n",
      "answers": [
        "spanish barbs and andalusian",
        "spanish barb",
        "andalusian"
      ]
    },
    {
      "number": 2784,
      "category": "Horses",
      "question": "What is the part of the saddle where your feet go?\n",
      "answers": [
        "stirrups"
      ]
    },
    {
      "number": 2785,
      "category": "Horses",
      "question": "What is the peice of equipment called thats used to take a horse from a stall? \n",
      "answers": [
        "halter"
      ]
    },
    {
      "number": 2786,
      "category": "Horses",
      "question": "What illness is common in a foal's first 2 weeks of life?\n",
      "answers": [
        "foal scours",
        "scours"
      ]
    },
    {
      "number": 2787,
      "category": "Horses",
      "question": "What application is used on foal's navel after birth?\n",
      "answers": [
        "iodine"
      ]
    },
    {
      "number": 2788,
      "category": "Horses",
      "question": "How old is a colt when he is trained to ride?\n",
      "answers": [
        "2 years",
        "2",
        "two"
      ]
    },
    {
      "number": 2789,
      "category": "Horses",
      "question": "What sex of horse is usually reccomended for beginners?\n",
      "answers": [
        "geldings"
      ]
    },
    {
      "number": 2790,
      "category": "Horses",
      "question": "What was the name of Alexander The Great's horse?\n",
      "answers": [
        "bucephalus"
      ]
    },
    {
      "number": 2791,
      "category": "Horses",
      "question": "What horse was the only survivor at the battle of Little Big Horn (He was thought to be half mustang and half Morgan)\n",
      "answers": [
        "comanche"
      ]
    },
    {
      "number": 2792,
      "category": "Horses",
      "question": "Justin Morgan, a schoolteacher from Vermont was sold a small colt who would become the founder of America's first breed-the Morgan. What was the little horse's name? \n",
      "answers": [
        "figure"
      ]
    },
    {
      "number": 2793,
      "category": "Horses",
      "question": "What horse won the Triple Crown in 1973. At the Belmont he won by the all-time record of 31 lengths.\n",
      "answers": [
        "secretariat"
      ]
    },
    {
      "number": 2794,
      "category": "Horses",
      "question": "What filly racehorse was never defeated in any race, was in a match race at Belmont Park in 1975 with Foolish Pleasure, and in this race she broke her leg and had to be put down. She is now buried at Belmont Park.\n",
      "answers": [
        "ruffian"
      ]
    },
    {
      "number": 2795,
      "category": "Horses",
      "question": "In 'National Velvet', Elizabeth Taylor wins a horse and enters him in the Grand National. What's the horse's name?\n",
      "answers": [
        "the pie",
        "pie"
      ]
    },
    {
      "number": 2796,
      "category": "Horses",
      "question": "'Phenylbutazone' belongs to which group of drugs?\n",
      "answers": [
        "nsaid's",
        "nsaid"
      ]
    },
    {
      "number": 2797,
      "category": "Horses",
      "question": "Laminitis or Founder is a condition that affects which part of the horse's anatomy?\n",
      "answers": [
        "hooves"
      ]
    },
    {
      "number": 2798,
      "category": "Horses",
      "question": "Which 'holistic' horse trainer was actively involved with a Mustang gelding by the name of 'Shy Boy'?\n",
      "answers": [
        "monty roberts",
        "monty",
        "roberts"
      ]
    },
    {
      "number": 2799,
      "category": "Horses",
      "question": "Who performed research on 'Bare Foot' trimming methods, and subsequently published an article entitled 'A lifetime of soundness'?\n",
      "answers": [
        "dr. hiltrude strasser",
        "strasser",
        "hiltrude"
      ]
    },
    {
      "number": 2800,
      "category": "Horses",
      "question": "In a wild herd, who IS the leader (or 'calls the shots') in the herd?\n",
      "answers": [
        "the matriach mare",
        "matriach"
      ]
    },
    {
      "number": 2801,
      "category": "Horses",
      "question": "If your horse starts 'bucking' when ridden (that has not been apparent previously) What should you check first?\n",
      "answers": [
        "saddle"
      ]
    },
    {
      "number": 2802,
      "category": "Horses",
      "question": "What can be the most severe piece of equipment on your bridle?\n",
      "answers": [
        "hands"
      ]
    },
    {
      "number": 2803,
      "category": "Horses",
      "question": "'Ringworm' is a condition caused by what?\n",
      "answers": [
        "fungus"
      ]
    },
    {
      "number": 2804,
      "category": "Horses",
      "question": "The term 'Having a BEAN' (USA) is a condition that causes the horse alot of discomfort and sometimes to a stage where the horses loses performance. Which area does this affect?\n",
      "answers": [
        "sheath"
      ]
    },
    {
      "number": 2805,
      "category": "Horses",
      "question": "The drug 'Benzyl Benzoate' is commonly used to treat what type of condition in horses?\n",
      "answers": [
        "sweet itch"
      ]
    },
    {
      "number": 2806,
      "category": "Horses",
      "question": "The Thoroughbred horse is evolved from selective breeding by humans, unfortunately most carry a renowned congenital problem, where is it?\n",
      "answers": [
        "feet"
      ]
    },
    {
      "number": 2807,
      "category": "Horses",
      "question": "Which famous UK 'National Hunt' rececourse boasts 'The Chair' jump?\n",
      "answers": [
        "aintree"
      ]
    },
    {
      "number": 2808,
      "category": "Horses",
      "question": "In showjumping, how many penalty points would you get if you 'knocked a pole down'?\n",
      "answers": [
        "four",
        "4"
      ]
    },
    {
      "number": 2809,
      "category": "Horses",
      "question": "In dressage, how many 'tracks' should a horse make in a 'shoulder-in' movement?\n",
      "answers": [
        "three",
        "3"
      ]
    },
    {
      "number": 2810,
      "category": "Horses",
      "question": "In which country would you find the headquarters of the World Equistrian Governing Body, The FEI (Federation Equestre Internationale)?\n",
      "answers": [
        "switzerland"
      ]
    },
    {
      "number": 2811,
      "category": "Horses",
      "question": "In which disclipline would you find an 'Oxer'?\n",
      "answers": [
        "showjumping"
      ]
    },
    {
      "number": 2812,
      "category": "Horses",
      "question": "Where do you find a 'calkin'?\n",
      "answers": [
        "horse shoes",
        "horseshoes"
      ]
    },
    {
      "number": 2813,
      "category": "Horses",
      "question": "What is a 'milk shake'?\n",
      "answers": [
        "performance drench",
        "performance",
        "drench"
      ]
    },
    {
      "number": 2814,
      "category": "Horses",
      "question": "In racing, where is the Queen Elizabeth II Cup (International Group 1 flat race) held?\n",
      "answers": [
        "hong kong"
      ]
    },
    {
      "number": 2815,
      "category": "Horses",
      "question": "A farmer in Vermont, trying to breed an all-around utility horse, developed this breed, which was named after him.\n",
      "answers": [
        "morgan"
      ]
    },
    {
      "number": 2816,
      "category": "Horses",
      "question": "What big, red Thoroughbred, owned by Samuel Riddle, and a winner in all but one start, never raced in the Kentucky Derby; thereby never having a chance to win the Triple Crown.\n",
      "answers": [
        "man'o'war",
        "man-o-war",
        "manowar",
        "man o war"
      ]
    },
    {
      "number": 2817,
      "category": "Horses",
      "question": "What fellow artist did Van Gogh threaten with a razor before taking a swipe at himself?\n",
      "answers": [
        "pegasus",
        "what is the name of the mythological winged horse?",
        "arts&entertainment",
        "paul gauguin",
        "gauguin"
      ]
    },
    {
      "number": 2818,
      "category": "History",
      "question": "Who changed his name from Vernon Wayne Howell for \"publicity and business purposes\"?\n",
      "answers": [
        "david koresh",
        "koresh"
      ]
    },
    {
      "number": 2819,
      "category": "People&Places",
      "question": "What city would you visit to see the contents of King Tut's tomb?\n",
      "answers": [
        "cairo"
      ]
    },
    {
      "number": 2820,
      "category": "History",
      "question": "What's the most commonly used slang term to describe helicopters?\n",
      "answers": [
        "choppers",
        "chopper"
      ]
    },
    {
      "number": 2821,
      "category": "World",
      "question": "What literary character tilted at windmills, mistaking them for giants?\n",
      "answers": [
        "don quixote",
        "quixote"
      ]
    },
    {
      "number": 2822,
      "category": "Sports&Leisure",
      "question": "Who was the first man in 56 years to win both springboard and platform diving at the Olympics?\n",
      "answers": [
        "greg louganis",
        "louganis"
      ]
    },
    {
      "number": 2823,
      "category": "Science&Nature",
      "question": "What independent movie studio shares it's name with a constellation? \n",
      "answers": [
        "orion"
      ]
    },
    {
      "number": 2824,
      "category": "World",
      "question": "In what movie Eddie Murphy insist his character's name be changed from Willie Biggs to Reggie Hammond?\n",
      "answers": [
        "48 hrs.",
        "48 hours"
      ]
    },
    {
      "number": 2825,
      "category": "Arts&Entertainment",
      "question": "Who was the second black star to be in a film grossing over $100 million?\n",
      "answers": [
        "whoopi goldberg",
        "goldberg",
        "whoopi"
      ]
    },
    {
      "number": 2826,
      "category": "Arts&Entertainment",
      "question": "Name one No.1 Michael Jackson hit this is a three-letter word beginning with the letter \"B\"\n",
      "answers": [
        "'ben' or 'bad'",
        "ben",
        "bad"
      ]
    },
    {
      "number": 2827,
      "category": "Sports&Leisure",
      "question": "What bowling pin is known as the widow?\n",
      "answers": [
        "the ten pin",
        "10 pin",
        "tenpin",
        "10pin"
      ]
    },
    {
      "number": 2828,
      "category": "Sports&Leisure",
      "question": "How many thousand cows are needed to supply the NFL with enough footballs for a season?\n",
      "answers": [
        "three",
        "3",
        "3,000",
        "3000"
      ]
    },
    {
      "number": 2829,
      "category": "People&Places",
      "question": "What was the only U.S. state in 1992 to lose more citizens to handguns than to car crashes?\n",
      "answers": [
        "texas"
      ]
    },
    {
      "number": 2830,
      "category": "World",
      "question": "What Victor Hugo novel does \"The Simpsons\" pay tribute to by giving prisoners the number 24601?\n",
      "answers": [
        "les miserables",
        "miserables"
      ]
    },
    {
      "number": 2831,
      "category": "World",
      "question": "What kind of tails did a gang of aborigines freeze, use to attack three police officers, and then eat?\n",
      "answers": [
        "kangaroo tails",
        "kangaroo"
      ]
    },
    {
      "number": 2832,
      "category": "History",
      "question": "What did Donald Trump rename the yacht \"Nabila\" that he bought for $29 million in 1987?\n",
      "answers": [
        "the trump princess",
        "princess"
      ]
    },
    {
      "number": 2833,
      "category": "Sports&Leisure",
      "question": "What Cincinnati Reds catcher could hold seven baseballs in his giant paw?\n",
      "answers": [
        "johnny bench",
        "bench"
      ]
    },
    {
      "number": 2834,
      "category": "Science&Nature",
      "question": "What did Steven Hawking say could be formed by something other than the collapse of a star?\n",
      "answers": [
        "black holes",
        "black hole"
      ]
    },
    {
      "number": 2835,
      "category": "Arts&Entertainment",
      "question": "What's the most famous five-word phrase uttered by Clint Eastwood in the movie \"Sudden Impact\"?\n",
      "answers": [
        "go ahead, make my day",
        "make my day",
        "go ahead"
      ]
    },
    {
      "number": 2836,
      "category": "History",
      "question": "Who became South Dakota's first Democratic senator in 26 years by a margin of 597 votes in 1962?\n",
      "answers": [
        "george mcgovern",
        "mcgovern"
      ]
    },
    {
      "number": 2837,
      "category": "World",
      "question": "What hit saw the U.S. Navy bill moviemakers $1.1 million for \"technical services\"?\n",
      "answers": [
        "top gun",
        "topgun"
      ]
    },
    {
      "number": 2838,
      "category": "Science&Nature",
      "question": "Who was the first president to wear false teeth?\n",
      "answers": [
        "george washington",
        "washington"
      ]
    },
    {
      "number": 2839,
      "category": "People&Places",
      "question": "What department store chain established it's headquarters in the Sears Tower?\n",
      "answers": [
        "sears, roebuck and co.",
        "sears"
      ]
    },
    {
      "number": 2840,
      "category": "Arts&Entertainment",
      "question": "What black star noted: \"I'm funny without drugs. I don't have to sniff cocaine to be funny\"?\n",
      "answers": [
        "eddie murphy",
        "murphy"
      ]
    },
    {
      "number": 2841,
      "category": "Sports&Leisure",
      "question": "What player donned a Baltimore Orioles uniform for a major league record of 23 years?\n",
      "answers": [
        "brooks robinson",
        "robinson",
        "robinsen"
      ]
    },
    {
      "number": 2842,
      "category": "Sports&Leisure",
      "question": "What Olympic ice racer took a victory lap with a U.S. flag in one hand and his daughter Jane in the other?\n",
      "answers": [
        "dan jansen",
        "jansen",
        "janson"
      ]
    },
    {
      "number": 2843,
      "category": "History",
      "question": "What did George Armstrong Custer accidentally shoot and kill while hunting buffalo?\n",
      "answers": [
        "his horse",
        "horse"
      ]
    },
    {
      "number": 2844,
      "category": "World",
      "question": "What four-word farewell of the 1950s was inspired by a many-toothed reptile?\n",
      "answers": [
        "see you later, alligator",
        "alligator"
      ]
    },
    {
      "number": 2845,
      "category": "World",
      "question": "What subway vigilante took exception to being asked for $5 on January 25, 1985?\n",
      "answers": [
        "bernhard goetz",
        "bernard",
        "bernhard",
        "goetz"
      ]
    },
    {
      "number": 2846,
      "category": "People&Places",
      "question": "What city did Michelangelo do \"David\" in?\n",
      "answers": [
        "florence"
      ]
    },
    {
      "number": 2847,
      "category": "World",
      "question": "What well-known politician was a college roommate of Tommy Lee Jones?\n",
      "answers": [
        "al gore",
        "gore"
      ]
    },
    {
      "number": 2848,
      "category": "Arts&Entertainment",
      "question": "What movie put Eddie Murphy on the cover of \"Newsweek\" as \"Mr. Box Office\" when he was 23?\n",
      "answers": [
        "beverly hills cop",
        "beverly"
      ]
    },
    {
      "number": 2849,
      "category": "Sports&Leisure",
      "question": "What city's vendors sell the most teddy bears made in one of their favorite baseballer's image?\n",
      "answers": [
        "minneapolis"
      ]
    },
    {
      "number": 2850,
      "category": "History",
      "question": "What infamous six words came back to haunt George Bush in his 1992 presidential campaign?\n",
      "answers": [
        "read my lips, no new taxes",
        "read my lips",
        "no new taxes"
      ]
    },
    {
      "number": 2851,
      "category": "World",
      "question": "What \"Married ... with Children\" star's bra was stolen from Frederick's of Hollywood in L.A. rioting?\n",
      "answers": [
        "katey sagal's",
        "katey sagal",
        "katey",
        "sagal"
      ]
    },
    {
      "number": 2852,
      "category": "People&Places",
      "question": "What phrase did Abraham Lincoln use instead of \"87 years\" in his Gettysburg Address?\n",
      "answers": [
        "four score and seven years",
        "four score"
      ]
    },
    {
      "number": 2853,
      "category": "World",
      "question": "What TV and radio host never enters the studio without his suspenders?\n",
      "answers": [
        "larry king",
        "king"
      ]
    },
    {
      "number": 2854,
      "category": "People&Places",
      "question": "What playwright did Muammar Qaddafi insist was \"of Arab origin\" in 1989?\n",
      "answers": [
        "william shakespeare",
        "shakespeare",
        "shakespear"
      ]
    },
    {
      "number": 2855,
      "category": "History",
      "question": "What did the Soviets send up into space on the 40th anniversary of the day the communists seized power?\n",
      "answers": [
        "sputnik i",
        "sputnik"
      ]
    },
    {
      "number": 2856,
      "category": "People&Places",
      "question": "What country cancelled its May Day parade in 1994 for the first time since 1959, due to lack of money?\n",
      "answers": [
        "cuba"
      ]
    },
    {
      "number": 2857,
      "category": "Arts&Entertainment",
      "question": "What five words end Charles Dicken's most famous Christmas story?\n",
      "answers": [
        "god bless us every one"
      ]
    },
    {
      "number": 2858,
      "category": "People&Places",
      "question": "What 'state' boasts the largest church in Christendom?\"\n",
      "answers": [
        "vatican city",
        "vatican"
      ]
    },
    {
      "number": 2859,
      "category": "History",
      "question": "Which of Cleopatra's husbands killed himself by falling on his sword?\n",
      "answers": [
        "marc antony",
        "antony"
      ]
    },
    {
      "number": 2860,
      "category": "World",
      "question": "Who said: \"I was the first woman to burn my bra. It took the fire department four days to put it out\"?\n",
      "answers": [
        "dolly parton",
        "parton"
      ]
    },
    {
      "number": 2861,
      "category": "Science&Nature",
      "question": "Which finger of the throwing hand is subject to a painful syndrome called \"Frisbee finger\"?\n",
      "answers": [
        "the middle finger",
        "middle"
      ]
    },
    {
      "number": 2862,
      "category": "Science&Nature",
      "question": "What Michigan doctor lead the fight for medicide, or physician-assisted suicide?\n",
      "answers": [
        "jack kevorkian",
        "kevorkian"
      ]
    },
    {
      "number": 2863,
      "category": "Arts&Entertainment",
      "question": "What renowned reference work did Lon Chaney write an entry on makeup for?\n",
      "answers": [
        "encyclopaedia britannica",
        "britannica"
      ]
    },
    {
      "number": 2864,
      "category": "History",
      "question": "What White House aide's shredding machine jammed on November 21, 1986?\n",
      "answers": [
        "oliver north's",
        "oliver",
        "north"
      ]
    },
    {
      "number": 2865,
      "category": "People&Places",
      "question": "Whose Atlantic City hotel-casino is three times the size of the Taj Mahal, it's East Indian namesake?\n",
      "answers": [
        "donald trump's",
        "trump"
      ]
    },
    {
      "number": 2866,
      "category": "Sports&Leisure",
      "question": "Who won the only two U.S. Open singles titles not won by Chris Evert from 1975 through 1982?\n",
      "answers": [
        "tracy austin",
        "austin"
      ]
    },
    {
      "number": 2867,
      "category": "Arts&Entertainment",
      "question": "What do most people call \"Waltz Number 314\" by Johann Strauss Jr.?\n",
      "answers": [
        "blue danube"
      ]
    },
    {
      "number": 2868,
      "category": "Sports&Leisure",
      "question": "Who batted .373 with 47 home runs and 175 RBI the year Babe Ruth hit 60 homers?\n",
      "answers": [
        "lou gehrig",
        "gehrig"
      ]
    },
    {
      "number": 2869,
      "category": "Sports&Leisure",
      "question": "What baseball owner was right in assuming midget Eddie Gaedel would walk as a pinch hitter in 1951?\n",
      "answers": [
        "bill veeck",
        "veeck"
      ]
    },
    {
      "number": 2870,
      "category": "World",
      "question": "What 73-year-old trapeze artist fell to his death in 1978?\n",
      "answers": [
        "karl wallenda",
        "wallenda"
      ]
    },
    {
      "number": 2871,
      "category": "History",
      "question": "What was the last hotel Robert Kennedy was in before riding to his final resting place?\n",
      "answers": [
        "the ambassador",
        "ambassador"
      ]
    },
    {
      "number": 2872,
      "category": "Sports&Leisure",
      "question": "What hockey star was ribbed as \"The Yellow One\" because of his aversion to flying?\n",
      "answers": [
        "wayne gretzky",
        "gretzky"
      ]
    },
    {
      "number": 2873,
      "category": "Science&Nature",
      "question": "Where are two Russian vehicles, auctioned at Sotheby's in 1993 for $68,500, currently parked?\n",
      "answers": [
        "on the moon",
        "moon"
      ]
    },
    {
      "number": 2874,
      "category": "Sports&Leisure",
      "question": "What Phillies first baseman correctly noted: \"I'm not an athlete, I'm a baseball player\"?\n",
      "answers": [
        "john kruk",
        "kruk"
      ]
    },
    {
      "number": 2875,
      "category": "Science&Nature",
      "question": "What whale was prized for the 15 barrels of high-quality oil found behind its forehead?\n",
      "answers": [
        "the sperm whale",
        "sperm"
      ]
    },
    {
      "number": 2876,
      "category": "People&Places",
      "question": "What Virginia county's courthouse was the site of Lee's surrender to Grant?\n",
      "answers": [
        "appomattox county's",
        "appomattox"
      ]
    },
    {
      "number": 2877,
      "category": "World",
      "question": "How many seasons did Johnny Carson host \"The Tonight Show\"?\n",
      "answers": [
        "thirty",
        "30"
      ]
    },
    {
      "number": 2878,
      "category": "Sports&Leisure",
      "question": "Who's the only man to win the Masters, British Open, U.S. Open, PGA and U.S. Amateur at least twice?\n",
      "answers": [
        "jack nicklaus",
        "nicklaus"
      ]
    },
    {
      "number": 2879,
      "category": "Arts&Entertainment",
      "question": "What blonde strutted as a Playboy Club waitress before singing lead vocals on four No. 1 hits?\n",
      "answers": [
        "deborah harry",
        "harry"
      ]
    },
    {
      "number": 2880,
      "category": "History",
      "question": "USA President Jimmy Carter, brought together Anwar Sadat and who else at the Camp David peace negotiations?\n",
      "answers": [
        "menachem begin",
        "begin"
      ]
    },
    {
      "number": 2881,
      "category": "History",
      "question": "What president nearly fell out of the Wright brothers' plane while waving to a crowd?\n",
      "answers": [
        "theodore roosevelt",
        "roosevelt"
      ]
    },
    {
      "number": 2882,
      "category": "Science&Nature",
      "question": "What helpful aid did the mother of Monkee Mike Nesmith invent for typists the world over?\n",
      "answers": [
        "liquid paper correction fluid",
        "liquid paper"
      ]
    },
    {
      "number": 2883,
      "category": "Sports&Leisure",
      "question": "Who became the first black member of the Milwaukee Braves, in 1954?\n",
      "answers": [
        "hank aaron",
        "aaron"
      ]
    },
    {
      "number": 2884,
      "category": "Sports&Leisure",
      "question": "Who broke baseball's color barrier, inking a contract and starting at first base in 1947?\n",
      "answers": [
        "jackie robinson",
        "robinson"
      ]
    },
    {
      "number": 2885,
      "category": "People&Places",
      "question": "What mountain do Tibetans call Chomo-Lungma, or Mother Goddess of the Land?\n",
      "answers": [
        "mount everest",
        "everest"
      ]
    },
    {
      "number": 2886,
      "category": "Arts&Entertainment",
      "question": "What children's book introduced the cat behind it's Cheshire grin?\n",
      "answers": [
        "alice's adventures in wonderland",
        "alice",
        "wonderland"
      ]
    },
    {
      "number": 2887,
      "category": "Sports&Leisure",
      "question": "What hand can a realistic poker player expect to be dealt once every 649,740 hands?\n",
      "answers": [
        "a royal flush",
        "royal flush"
      ]
    },
    {
      "number": 2888,
      "category": "People&Places",
      "question": "Who was the first woman ever to cross the Atlantic Ocean by airplane?\n",
      "answers": [
        "amellia earhart",
        "earhart"
      ]
    },
    {
      "number": 2889,
      "category": "Arts&Entertainment",
      "question": "Who got laughs opposite Eddie Murphy in the role of Detective Billy Rosewood?\n",
      "answers": [
        "judge reinhold",
        "reinhold",
        "judge"
      ]
    },
    {
      "number": 2890,
      "category": "Sports&Leisure",
      "question": "What baseballer teamed with Babe Ruth to form \"the greatest 1-2 punch the sport has ever known\"?\n",
      "answers": [
        "lou gehrig",
        "gehrig"
      ]
    },
    {
      "number": 2891,
      "category": "World",
      "question": "What book did King James authorize the first English publication of?\n",
      "answers": [
        "the bible",
        "bible"
      ]
    },
    {
      "number": 2892,
      "category": "History",
      "question": "Who's the only 20th-century USA president that had earned no undergraduate degree?\n",
      "answers": [
        "harry truman",
        "truman"
      ]
    },
    {
      "number": 2893,
      "category": "People&Places",
      "question": "What hill in Athens boasts the Parthenon and other temples?\n",
      "answers": [
        "the acropolis",
        "acropolis"
      ]
    },
    {
      "number": 2894,
      "category": "Sports&Leisure",
      "question": "What pro figure skater did a Pittsburgh Steelers star marry in 1976?\n",
      "answers": [
        "jo jo starbuck",
        "starbuck",
        "jo jo"
      ]
    },
    {
      "number": 2895,
      "category": "World",
      "question": "What profession did one First Lady say was \"good training for the political life which lay ahead\"?\n",
      "answers": [
        "acting"
      ]
    },
    {
      "number": 2896,
      "category": "World",
      "question": "What replacement did station KFBK rush to hire after letting Morton Downey Jr. go in 1984?\n",
      "answers": [
        "rush limbaugh",
        "rush",
        "limbaugh"
      ]
    },
    {
      "number": 2897,
      "category": "Sports&Leisure",
      "question": "What major league baseball team shares it's name with young bears?\n",
      "answers": [
        "the chicago cubs",
        "chicago cubs"
      ]
    },
    {
      "number": 2898,
      "category": "History",
      "question": "What three-word line of General MacArthur's appear on countless items dropped over the Philippines? \n",
      "answers": [
        "i shall return"
      ]
    },
    {
      "number": 2899,
      "category": "World",
      "question": "What Hungarian name was given to 37 pet pooches registered in Los Angeles County by 1991?\n",
      "answers": [
        "zsa zsa"
      ]
    },
    {
      "number": 2900,
      "category": "History",
      "question": "What five-word plea by Rodney King made the cover of \"Time\" after the 1992 Los Angeles riots took place?\n",
      "answers": [
        "can't we all get along?",
        "get along"
      ]
    },
    {
      "number": 2901,
      "category": "History",
      "question": "What U.S. general died in a Heidelberg hospital of lung congestion after a freak car accident?\n",
      "answers": [
        "george patton",
        "patton"
      ]
    },
    {
      "number": 2902,
      "category": "World",
      "question": "What Hindu god is said to have appeared on Earth as Rama, Krishna and Buddha?\n",
      "answers": [
        "vishnu"
      ]
    },
    {
      "number": 2903,
      "category": "World",
      "question": "What president adorns the double sawbuck?\n",
      "answers": [
        "andrew jackson",
        "jackson"
      ]
    },
    {
      "number": 2904,
      "category": "Arts&Entertainment",
      "question": "What 1987 movie earned Cher her first best actress Oscar?\n",
      "answers": [
        "moonstruck",
        "moon struck"
      ]
    },
    {
      "number": 2905,
      "category": "Sports&Leisure",
      "question": "What metal is an Olympic gold medal mostly made of?\n",
      "answers": [
        "silver"
      ]
    },
    {
      "number": 2906,
      "category": "People&Places",
      "question": "Who flew the Concord to sing in both the London and Philadelphia parts of Live Aid on the same day?\n",
      "answers": [
        "phil collins",
        "collins"
      ]
    },
    {
      "number": 2907,
      "category": "Sports&Leisure",
      "question": "Whose bare feet did 3,000-meter runner Mary Decker trip over at the 1984 Olympics?\n",
      "answers": [
        "zola budd's",
        "zola budd"
      ]
    },
    {
      "number": 2908,
      "category": "Science&Nature",
      "question": "What comet was named for the man who predicted it would return in 1758?\n",
      "answers": [
        "halley's comet",
        "halley"
      ]
    },
    {
      "number": 2909,
      "category": "People&Places",
      "question": "What modern-day city was renamed Leningrad when this Bolshevik died?\n",
      "answers": [
        "st. petersburg",
        "petersburg"
      ]
    },
    {
      "number": 2910,
      "category": "History",
      "question": "What memorable line did John Paul Jones allegedly utter during a sea battle with the British?\n",
      "answers": [
        "i have not yet begun to fight"
      ]
    },
    {
      "number": 2911,
      "category": "People&Places",
      "question": "Who left his heart in San Francisco in a 1962 classic song?\n",
      "answers": [
        "tony bennett",
        "bennett"
      ]
    },
    {
      "number": 2912,
      "category": "Sports&Leisure",
      "question": "Who became golf's first career $5 million winner in 1988?\n",
      "answers": [
        "jack nicklaus",
        "nicklaus"
      ]
    },
    {
      "number": 2913,
      "category": "Sports&Leisure",
      "question": "Whose World Series heroics prompted George Steinbrenner to dub him \"Mr. October\"?\n",
      "answers": [
        "reggie jackson's",
        "jackson"
      ]
    },
    {
      "number": 2914,
      "category": "Science&Nature",
      "question": "What fruit is grown by 94 percent of backyard gardeners?\n",
      "answers": [
        "the tomato",
        "tomato"
      ]
    },
    {
      "number": 2915,
      "category": "World",
      "question": "Whose fans wore lapel buttons bearing saxophones on January 20, 1993?\n",
      "answers": [
        "bill clinton's",
        "clinton"
      ]
    },
    {
      "number": 2916,
      "category": "History",
      "question": "What Supreme Court justice hosted and officiated at the 1994 marriage of Rush Limbaugh?",
      "answers": [
        "clarence thomas",
        "clarence",
        "thomas"
      ]
    }
  ]

  var randomQuestion = function() {
    var qNumber = Math.floor(Math.random() * questions.length);
    return questions[qNumber];
  }

  return {
    randomQuestion: randomQuestion
  }
})()