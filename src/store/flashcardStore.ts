import { Flashcard } from "../utils/Flashcard";

const dummyFlashcards: Flashcard[] = [
  {
    "id": "1",
    "name": "Catan",
    "plot": "Trade resources, build settlements, and dominate the island of Catan.",
    "goal": {
      "phrase": "First to reach 10 Victory Points wins",
      "action": [
        "Build settlements and cities",
        "Trade resources strategically",
        "Control the longest road or largest army"
      ]
    },
    "playerCount": {
      "min": 3,
      "max": 4
    },
    "duration": {
      "min": 60,
      "max": 120
    },
    "turnActions": {
      "actions": [
        "Roll dice to collect resources",
        "Trade with players or the bank",
        "Build settlements, roads, or cities"
      ],
      "notes": "Take actions in any order"
    },
    "endRound": "Once all players complete their turns",
    "endGame": "When a player reaches 10 Victory Points",
    "keywords": [
      "Resource management",
      "Dice rolling",
      "Settlement building"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "2",
    "name": "Ticket to Ride: London",
    "plot": "Compete to connect cities across a map with train routes.",
    "goal": {
      "phrase": "Have the most points by the end of the game",
      "action": [
        "Complete destination tickets",
        "Claim train routes",
        "Build the longest continuous route"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 5
    },
    "duration": {
      "min": 45,
      "max": 90
    },
    "turnActions": {
      "actions": [
        "Draw train cards",
        "Claim a route",
        "Draw additional destination tickets"
      ],
      "notes": "You may perform one action per turn"
    },
    "endRound": "When a player has 2 or fewer train pieces left",
    "endGame": "After the final round is completed",
    "keywords": [
      "Route building",
      "Train cards",
      "Destination tickets"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "3",
    "name": "Carcassonne",
    "plot": "Build cities, roads, and farms to score points in medieval France.",
    "goal": {
      "phrase": "Score the most points by placing tiles and followers",
      "action": [
        "Complete cities and roads",
        "Place followers on tiles strategically",
        "Score points from farms and cloisters"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 5
    },
    "duration": {
      "min": 30,
      "max": 45
    },
    "turnActions": {
      "actions": [
        "Draw and place a tile",
        "Place a follower on the tile",
        "Score completed features"
      ],
      "notes": "Only one follower can be placed per turn"
    },
    "endRound": "When all tiles have been placed",
    "endGame": "After scoring completed and incomplete features",
    "keywords": [
      "Tile placement",
      "Area control",
      "Scoring strategies"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "4",
    "name": "Pandemic",
    "plot": "Work together to stop outbreaks and cure diseases before time runs out.",
    "goal": {
      "phrase": "Cure all four diseases before losing to outbreaks or time",
      "action": [
        "Treat diseases",
        "Build research stations",
        "Share knowledge to cure diseases"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 4
    },
    "duration": {
      "min": 45,
      "max": 60
    },
    "turnActions": {
      "actions": [
        "Move between cities",
        "Treat diseases in cities",
        "Trade cards with teammates"
      ],
      "notes": "Coordinate with teammates for best strategy"
    },
    "endRound": "After all players complete their turns",
    "endGame": "Cure all diseases or lose to 8 outbreaks, running out of cards, or not curing in time",
    "keywords": [
      "Cooperative play",
      "Disease curing",
      "Teamwork and strategy"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "5",
    "name": "Age of civilization",
    "plot": "Develop your civilization from ancient times to a modern empire.",
    "goal": {
      "phrase": "Achieve cultural and technological dominance.",
      "action": [
        "Expand your territory",
        "Manage resources wisely",
        "Advance your technology"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 4
    },
    "duration": {
      "min": 90,
      "max": 180
    },
    "turnActions": {
      "actions": [
        "Collect resources",
        "Plan expansion",
        "Research innovations"
      ],
      "notes": "Each turn represents a new era in your civilization."
    },
    "endRound": "Round ends when all players complete their strategic moves.",
    "endGame": "Game ends when one civilization dominates or a set number of eras are reached.",
    "keywords": [
      "Civilization",
      "Strategy",
      "Empire"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "6",
    "name": "Architect",
    "plot": "Design and construct stunning structures in this creative building game.",
    "goal": {
      "phrase": "Score points by creating innovative architectural masterpieces.",
      "action": [
        "Draft blueprints",
        "Lay foundations",
        "Optimize space usage"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 4
    },
    "duration": {
      "min": 45,
      "max": 90
    },
    "turnActions": {
      "actions": [
        "Sketch design",
        "Place structural elements",
        "Refine your blueprint"
      ],
      "notes": "Plan each move to maximize your design’s impact."
    },
    "endRound": "Round ends when the construction phase is completed.",
    "endGame": "Game ends when the final project is evaluated.",
    "keywords": [
      "Architecture",
      "Design",
      "Construction"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "7",
    "name": "Azul: Summer Pavillion",
    "plot": "Create beautiful patterns using colorful tiles in a vibrant summer setting.",
    "goal": {
      "phrase": "Score the highest by collecting and arranging tiles.",
      "action": [
        "Select tiles strategically",
        "Complete mosaic patterns",
        "Plan ahead for bonus points"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 4
    },
    "duration": {
      "min": 30,
      "max": 45
    },
    "turnActions": {
      "actions": [
        "Choose tiles",
        "Place tiles on your board",
        "Reassess your strategy"
      ],
      "notes": "Watch your opponents to block key moves."
    },
    "endRound": "Round ends when all tiles have been taken.",
    "endGame": "Game ends after a fixed number of rounds or when tiles run out.",
    "keywords": [
      "Tile placement",
      "Pattern building",
      "Strategy"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "8",
    "name": "Battleship",
    "plot": "Engage in a tactical naval battle to sink your opponent's fleet.",
    "goal": {
      "phrase": "Sink all enemy ships before they sink yours.",
      "action": [
        "Place your ships strategically",
        "Guess opponent positions",
        "Adapt your targeting"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 2
    },
    "duration": {
      "min": 20,
      "max": 30
    },
    "turnActions": {
      "actions": [
        "Call out coordinates",
        "Mark hits and misses",
        "Refine your guesses"
      ],
      "notes": "Deductive reasoning is key."
    },
    "endRound": "Round ends when each player has taken a turn.",
    "endGame": "Game ends when one fleet is completely sunk.",
    "keywords": [
      "Naval",
      "Strategy",
      "Deduction"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "9",
    "name": "Carcassonnee",
    "plot": "Lay tiles to build medieval landscapes and score points through strategic placement.",
    "goal": {
      "phrase": "Score points by completing cities, roads, and fields.",
      "action": [
        "Place tiles to form features",
        "Deploy followers strategically",
        "Control key regions"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 5
    },
    "duration": {
      "min": 30,
      "max": 45
    },
    "turnActions": {
      "actions": [
        "Draw a tile",
        "Place the tile",
        "Deploy a follower"
      ],
      "notes": "Plan placements to maximize scoring potential."
    },
    "endRound": "Round ends when all tiles have been placed.",
    "endGame": "Game ends when scoring for all features is completed.",
    "keywords": [
      "Tile placement",
      "Medieval",
      "Area control"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "10",
    "name": "Cash N Guns",
    "plot": "Bluff and shoot in a wild west standoff where risk meets reward.",
    "goal": {
      "phrase": "Be the last man standing or collect the most cash.",
      "action": [
        "Negotiate deals",
        "Aim and fire",
        "Bluff your opponents"
      ]
    },
    "playerCount": {
      "min": 4,
      "max": 8
    },
    "duration": {
      "min": 30,
      "max": 60
    },
    "turnActions": {
      "actions": [
        "Decide whether to shoot or pass",
        "Plan your bluff",
        "React to opponents"
      ],
      "notes": "Risk and bluffing determine your success."
    },
    "endRound": "Round ends when all players have acted.",
    "endGame": "Game ends when cash or players run out.",
    "keywords": [
      "Bluffing",
      "Wild West",
      "Strategy"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "11",
    "name": "Criss Cross",
    "plot": "Arrange your pieces in a grid to complete challenging patterns.",
    "goal": {
      "phrase": "Complete the designated pattern before your opponents.",
      "action": [
        "Place pieces strategically",
        "Block opponent moves",
        "Plan your grid layout"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 4
    },
    "duration": {
      "min": 15,
      "max": 30
    },
    "turnActions": {
      "actions": [
        "Select a piece",
        "Place it on the grid",
        "Reevaluate the board"
      ],
      "notes": "Balance offensive and defensive moves."
    },
    "endRound": "Round ends when the pattern is completed.",
    "endGame": "Game ends after a set number of rounds.",
    "keywords": [
      "Puzzle",
      "Strategy",
      "Pattern recognition"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "12",
    "name": "Exploding Kittens",
    "plot": "Avoid drawing the exploding kitten card in this humorous card game of chance.",
    "goal": {
      "phrase": "Be the last player remaining without drawing an exploding kitten.",
      "action": [
        "Draw cards",
        "Play action cards",
        "Defuse exploding kittens"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 5
    },
    "duration": {
      "min": 15,
      "max": 30
    },
    "turnActions": {
      "actions": [
        "Draw a card",
        "Play a card",
        "Use a defuse card"
      ],
      "notes": "Timing and luck are crucial."
    },
    "endRound": "Round ends when every player has taken a turn.",
    "endGame": "Game ends when all but one player have exploded.",
    "keywords": [
      "Humor",
      "Card game",
      "Luck"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "13",
    "name": "Fungi",
    "plot": "Cultivate and spread your fungi in a race for growth and control.",
    "goal": {
      "phrase": "Grow the largest and most diverse fungal network.",
      "action": [
        "Spread spores",
        "Claim territory",
        "Balance growth with decay"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 4
    },
    "duration": {
      "min": 30,
      "max": 60
    },
    "turnActions": {
      "actions": [
        "Select fungi tiles",
        "Expand your network",
        "Manage resources"
      ],
      "notes": "Plan your growth strategy carefully."
    },
    "endRound": "Round ends when the growth phase concludes.",
    "endGame": "Game ends when no further growth is possible.",
    "keywords": [
      "Growth",
      "Strategy",
      "Territory"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "14",
    "name": "Gizmos",
    "plot": "Build ingenious contraptions and harness energy to outsmart your rivals.",
    "goal": {
      "phrase": "Assemble powerful gizmos to generate maximum energy.",
      "action": [
        "Collect parts",
        "Assemble devices",
        "Optimize energy output"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 4
    },
    "duration": {
      "min": 45,
      "max": 90
    },
    "turnActions": {
      "actions": [
        "Gather resources",
        "Construct a gadget",
        "Activate your gizmo"
      ],
      "notes": "Resource management and timing are key."
    },
    "endRound": "Round ends after all players build their gizmos.",
    "endGame": "Game ends when energy production targets are met.",
    "keywords": [
      "Gadgets",
      "Engineering",
      "Strategy"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "15",
    "name": "Imhotep",
    "plot": "Construct magnificent monuments in ancient Egypt to win glory.",
    "goal": {
      "phrase": "Accumulate points by building iconic structures.",
      "action": [
        "Select stone blocks",
        "Plan building placements",
        "Score for monument features"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 4
    },
    "duration": {
      "min": 30,
      "max": 60
    },
    "turnActions": {
      "actions": [
        "Choose stones",
        "Place blocks",
        "Score your structure"
      ],
      "notes": "Efficient planning is essential."
    },
    "endRound": "Round ends when all stones are placed.",
    "endGame": "Game ends after a fixed number of rounds.",
    "keywords": [
      "Egypt",
      "Monuments",
      "Strategy"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "16",
    "name": "Indus",
    "plot": "Trade and expand your influence in the ancient Indus Valley.",
    "goal": {
      "phrase": "Build a thriving trade network to gain prosperity.",
      "action": [
        "Trade goods",
        "Expand territories",
        "Invest in resources"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 4
    },
    "duration": {
      "min": 60,
      "max": 120
    },
    "turnActions": {
      "actions": [
        "Negotiate trades",
        "Move your pieces",
        "Plan expansion"
      ],
      "notes": "Negotiation and strategy lead to success."
    },
    "endRound": "Round ends when trading rounds are complete.",
    "endGame": "Game ends when trade routes reach maximum efficiency.",
    "keywords": [
      "Trade",
      "Ancient",
      "Expansion"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "17",
    "name": "Kariba",
    "plot": "Experience the thrill of wildlife and nature in a strategic adventure.",
    "goal": {
      "phrase": "Score by balancing wildlife, resource management, and conservation.",
      "action": [
        "Manage wildlife",
        "Conserve resources",
        "Balance the ecosystem"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 4
    },
    "duration": {
      "min": 45,
      "max": 75
    },
    "turnActions": {
      "actions": [
        "Deploy conservation strategies",
        "Manage animal movements",
        "Adjust your plans"
      ],
      "notes": "Careful planning ensures a balanced ecosystem."
    },
    "endRound": "Round ends when conservation actions conclude.",
    "endGame": "Game ends when conservation goals are met or time expires.",
    "keywords": [
      "Wildlife",
      "Conservation",
      "Strategy"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "18",
    "name": "King of Tokyo",
    "plot": "Become a giant monster and battle for control of Tokyo.",
    "goal": {
      "phrase": "Dominate Tokyo through combat and strategic moves.",
      "action": [
        "Roll dice for attacks",
        "Gain energy",
        "Manage health"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 6
    },
    "duration": {
      "min": 30,
      "max": 60
    },
    "turnActions": {
      "actions": [
        "Roll dice",
        "Choose actions",
        "Attack opponents"
      ],
      "notes": "Combining luck with tactics is crucial."
    },
    "endRound": "Round ends after each monster takes a turn.",
    "endGame": "Game ends when one monster achieves victory or is eliminated.",
    "keywords": [
      "Monsters",
      "Tokyo",
      "Dice"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "19",
    "name": "Kingdomino",
    "plot": "Expand your kingdom by matching tiles in a domino-style layout.",
    "goal": {
      "phrase": "Score the highest by building a harmonious kingdom.",
      "action": [
        "Select tiles",
        "Match terrains",
        "Expand your domain"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 4
    },
    "duration": {
      "min": 15,
      "max": 30
    },
    "turnActions": {
      "actions": [
        "Choose a tile",
        "Place it strategically",
        "Plan for bonuses"
      ],
      "notes": "Every placement can change your kingdom’s fate."
    },
    "endRound": "Round ends when all tiles have been placed.",
    "endGame": "Game ends after the final scoring round.",
    "keywords": [
      "Domino",
      "Kingdom",
      "Tile placement"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "20",
    "name": "Loonacy",
    "plot": "Engage in a zany game of strategy and unpredictability.",
    "goal": {
      "phrase": "Outsmart your opponents with unconventional tactics.",
      "action": [
        "Plan quirky moves",
        "Exploit randomness",
        "Adapt quickly"
      ]
    },
    "playerCount": {
      "min": 3,
      "max": 6
    },
    "duration": {
      "min": 30,
      "max": 45
    },
    "turnActions": {
      "actions": [
        "Choose a random action",
        "Execute unexpected moves",
        "React to chaos"
      ],
      "notes": "Expect surprises every turn."
    },
    "endRound": "Round ends when all players complete their actions.",
    "endGame": "Game ends when victory points determine the winner.",
    "keywords": [
      "Unpredictable",
      "Strategy",
      "Humor"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "21",
    "name": "Love letter",
    "plot": "Send secret messages and outwit your opponents in a game of deduction.",
    "goal": {
      "phrase": "Win by delivering the most successful love letters.",
      "action": [
        "Choose cards wisely",
        "Bluff opponents",
        "Make strategic moves"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 4
    },
    "duration": {
      "min": 20,
      "max": 30
    },
    "turnActions": {
      "actions": [
        "Draw a card",
        "Play a card",
        "React to moves"
      ],
      "notes": "Deduction and risk are key."
    },
    "endRound": "Round ends when one card remains.",
    "endGame": "Game ends when a player wins the round.",
    "keywords": [
      "Deduction",
      "Bluff",
      "Card game"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "22",
    "name": "Maki Stack",
    "plot": "Stack Maki rolls carefully to avoid a topple in this dexterity challenge.",
    "goal": {
      "phrase": "Achieve the highest stack without toppling over.",
      "action": [
        "Place Maki rolls",
        "Balance carefully",
        "Strategize your placement"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 4
    },
    "duration": {
      "min": 10,
      "max": 20
    },
    "turnActions": {
      "actions": [
        "Select a Maki roll",
        "Stack on the pile",
        "Steady your hand"
      ],
      "notes": "Balance is everything in this game."
    },
    "endRound": "Round ends when the stack collapses.",
    "endGame": "Game ends after a set number of rounds.",
    "keywords": [
      "Balance",
      "Stacking",
      "Dexterity"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "23",
    "name": "Mountain Goats",
    "plot": "Race up treacherous mountain paths to be the fastest goat.",
    "goal": {
      "phrase": "Reach the peak before your opponents.",
      "action": [
        "Climb strategically",
        "Overcome obstacles",
        "Manage stamina"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 4
    },
    "duration": {
      "min": 20,
      "max": 30
    },
    "turnActions": {
      "actions": [
        "Move along the path",
        "Navigate obstacles",
        "Plan your route"
      ],
      "notes": "Each turn is a step closer to the summit."
    },
    "endRound": "Round ends when all players have moved.",
    "endGame": "Game ends when one goat reaches the peak.",
    "keywords": [
      "Race",
      "Strategy",
      "Stamina"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "24",
    "name": "Othello",
    "plot": "Flip your opponent's pieces to claim the board in this classic strategy game.",
    "goal": {
      "phrase": "Have the majority of pieces in your color by the end.",
      "action": [
        "Place your pieces",
        "Flip opponent pieces",
        "Control the board"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 2
    },
    "duration": {
      "min": 15,
      "max": 30
    },
    "turnActions": {
      "actions": [
        "Place a piece",
        "Flip adjacent pieces",
        "Plan your next move"
      ],
      "notes": "Strategize to maximize your control."
    },
    "endRound": "Round ends when no more moves are available.",
    "endGame": "Game ends when the board is filled.",
    "keywords": [
      "Strategy",
      "Reversi",
      "Board control"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "25",
    "name": "Patchwork",
    "plot": "Compete to create the most aesthetic quilt by placing fabric pieces.",
    "goal": {
      "phrase": "Score the highest by assembling the best quilt.",
      "action": [
        "Collect fabric pieces",
        "Place them on your board",
        "Manage time and buttons"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 2
    },
    "duration": {
      "min": 30,
      "max": 45
    },
    "turnActions": {
      "actions": [
        "Select a patch",
        "Place it on your board",
        "Adjust for gaps"
      ],
      "notes": "Efficiency and planning lead to a beautiful quilt."
    },
    "endRound": "Round ends when no more patches are available.",
    "endGame": "Game ends when both players fill their boards.",
    "keywords": [
      "Quilt",
      "Strategy",
      "Tetris-like"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "26",
    "name": "Railroad Inc",
    "plot": "Build rail networks and compete to control the tracks.",
    "goal": {
      "phrase": "Accumulate the most wealth by expanding your rail network.",
      "action": [
        "Lay tracks",
        "Upgrade trains",
        "Manage finances"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 5
    },
    "duration": {
      "min": 60,
      "max": 120
    },
    "turnActions": {
      "actions": [
        "Place a track",
        "Build a station",
        "Invest in upgrades"
      ],
      "notes": "Plan routes carefully to maximize profits."
    },
    "endRound": "Round ends when track placement is complete.",
    "endGame": "Game ends after the final investment round.",
    "keywords": [
      "Railroad",
      "Strategy",
      "Economy"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "27",
    "name": "Royal Visit",
    "plot": "Welcome a royal guest and prepare for a grand court event.",
    "goal": {
      "phrase": "Impress the royalty with your event planning skills.",
      "action": [
        "Organize festivities",
        "Allocate resources",
        "Manage guests"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 4
    },
    "duration": {
      "min": 30,
      "max": 60
    },
    "turnActions": {
      "actions": [
        "Plan event segments",
        "Distribute tasks",
        "Adjust for surprises"
      ],
      "notes": "Coordination is key to impressing the royal guest."
    },
    "endRound": "Round ends after the event segment concludes.",
    "endGame": "Game ends when the event is fully executed.",
    "keywords": [
      "Royal",
      "Event",
      "Strategy"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "28",
    "name": "Sagrada",
    "plot": "Craft stunning stained glass windows with colorful dice.",
    "goal": {
      "phrase": "Score points by creating the most beautiful window.",
      "action": [
        "Select dice",
        "Place them in patterns",
        "Fulfill objective cards"
      ]
    },
    "playerCount": {
      "min": 1,
      "max": 4
    },
    "duration": {
      "min": 30,
      "max": 60
    },
    "turnActions": {
      "actions": [
        "Draft dice",
        "Place dice on your board",
        "Evaluate objectives"
      ],
      "notes": "Timing and placement determine your score."
    },
    "endRound": "Round ends when all dice are placed.",
    "endGame": "Game ends after a fixed number of rounds.",
    "keywords": [
      "Dice",
      "Stained glass",
      "Artistic"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "29",
    "name": "Sheriff of Nottingham",
    "plot": "Trade goods, smuggle contraband, and negotiate with the Sheriff in medieval Nottingham.",
    "goal": {
      "phrase": "Accumulate wealth through trade and cunning negotiations.",
      "action": [
        "Declare goods",
        "Negotiate bribes",
        "Avoid inspections"
      ]
    },
    "playerCount": {
      "min": 3,
      "max": 5
    },
    "duration": {
      "min": 30,
      "max": 60
    },
    "turnActions": {
      "actions": [
        "Select a bag",
        "Present your goods",
        "Respond to the Sheriff"
      ],
      "notes": "Deception and negotiation are central."
    },
    "endRound": "Round ends after all players are inspected.",
    "endGame": "Game ends when a wealth threshold is reached.",
    "keywords": [
      "Bluff",
      "Negotiation",
      "Medieval"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "30",
    "name": "Silver & Gold",
    "plot": "Trade and bargain to amass wealth in a quest for silver and gold.",
    "goal": {
      "phrase": "Become the richest trader by collecting silver and gold.",
      "action": [
        "Buy low",
        "Sell high",
        "Outsmart your rivals"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 4
    },
    "duration": {
      "min": 30,
      "max": 45
    },
    "turnActions": {
      "actions": [
        "Bid on resources",
        "Negotiate trades",
        "Refine your strategy"
      ],
      "notes": "Market dynamics drive the gameplay."
    },
    "endRound": "Round ends when trading rounds are complete.",
    "endGame": "Game ends when a wealth target is achieved.",
    "keywords": [
      "Trading",
      "Economy",
      "Bargaining"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "31",
    "name": "Skull",
    "plot": "Bluff and bid in a game of risk, deception, and hidden cards.",
    "goal": {
      "phrase": "Win by successfully bluffing and bidding on your cards.",
      "action": [
        "Place cards face down",
        "Bid on reveals",
        "Deceive opponents"
      ]
    },
    "playerCount": {
      "min": 3,
      "max": 6
    },
    "duration": {
      "min": 20,
      "max": 30
    },
    "turnActions": {
      "actions": [
        "Place a card",
        "Make a bid",
        "Reveal cards"
      ],
      "notes": "Risk and bluffing are crucial to success."
    },
    "endRound": "Round ends when bidding concludes.",
    "endGame": "Game ends when a player wins a set number of rounds.",
    "keywords": [
      "Bluff",
      "Bidding",
      "Risk"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "32",
    "name": "Sounds Fishy",
    "plot": "Unravel the mystery behind misleading clues in this audio deduction game.",
    "goal": {
      "phrase": "Detect the truth hidden within deceptive sounds.",
      "action": [
        "Listen carefully",
        "Interpret clues",
        "Make strategic guesses"
      ]
    },
    "playerCount": {
      "min": 3,
      "max": 6
    },
    "duration": {
      "min": 20,
      "max": 40
    },
    "turnActions": {
      "actions": [
        "Listen to a clue",
        "Discuss with teammates",
        "Submit your guess"
      ],
      "notes": "Communication and deduction are key."
    },
    "endRound": "Round ends when all clues are given.",
    "endGame": "Game ends when the mystery is solved.",
    "keywords": [
      "Deduction",
      "Mystery",
      "Audio"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "33",
    "name": "Splendor Duel",
    "plot": "Compete head-to-head to collect gems and build a powerful tableau.",
    "goal": {
      "phrase": "Accumulate the most prestige points by acquiring gems and cards.",
      "action": [
        "Collect gems",
        "Purchase cards",
        "Plan your strategy"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 2
    },
    "duration": {
      "min": 20,
      "max": 30
    },
    "turnActions": {
      "actions": [
        "Select gems",
        "Acquire a card",
        "Activate abilities"
      ],
      "notes": "Direct competition makes every move critical."
    },
    "endRound": "Round ends when the card supply is exhausted.",
    "endGame": "Game ends when a player reaches the prestige threshold.",
    "keywords": [
      "Duel",
      "Gems",
      "Prestige"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "34",
    "name": "Ticket to Ride",
    "plot": "Build train routes across a map and connect distant cities.",
    "goal": {
      "phrase": "Score the highest by completing destination tickets.",
      "action": [
        "Claim routes",
        "Collect train cards",
        "Plan your network"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 5
    },
    "duration": {
      "min": 30,
      "max": 60
    },
    "turnActions": {
      "actions": [
        "Draw train cards",
        "Claim a route",
        "Collect destination tickets"
      ],
      "notes": "Plan routes carefully and block your opponents."
    },
    "endRound": "Round ends when train pieces run low.",
    "endGame": "Game ends after the final round of ticket evaluations.",
    "keywords": [
      "Train",
      "Route building",
      "Strategy"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "35",
    "name": "Wizards of Aeydor",
    "plot": "Harness magical powers to outwit your rivals and become the ultimate wizard.",
    "goal": {
      "phrase": "Cast spells and summon creatures to secure victory.",
      "action": [
        "Accumulate magical energy",
        "Cast powerful spells",
        "Defend your realm"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 4
    },
    "duration": {
      "min": 45,
      "max": 90
    },
    "turnActions": {
      "actions": [
        "Draw spell cards",
        "Cast a spell",
        "React to magical events"
      ],
      "notes": "Spellcasting and strategy go hand in hand."
    },
    "endRound": "Round ends when magic tokens are depleted.",
    "endGame": "Game ends when a wizard reaches the victory threshold.",
    "keywords": [
      "Magic",
      "Wizard",
      "Strategy"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "36",
    "name": "Gold Rush",
    "plot": "Race against time to strike it rich in a frantic gold mining adventure.",
    "goal": {
      "phrase": "Collect the most gold by the end of the rush.",
      "action": [
        "Mine for gold",
        "Outsmart competitors",
        "Manage resources"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 4
    },
    "duration": {
      "min": 30,
      "max": 45
    },
    "turnActions": {
      "actions": [
        "Dig for gold",
        "Invest in equipment",
        "Navigate hazards"
      ],
      "notes": "Quick decisions can lead to a big payoff."
    },
    "endRound": "Round ends when all mining phases are completed.",
    "endGame": "Game ends when the gold supply runs out.",
    "keywords": [
      "Mining",
      "Rush",
      "Resource management"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "37",
    "name": "Forest Run",
    "plot": "Race through a mystical forest, dodging obstacles and collecting treasures.",
    "goal": {
      "phrase": "Be the first to navigate the forest and reach the finish line.",
      "action": [
        "Avoid obstacles",
        "Collect power-ups",
        "Sprint through the forest"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 4
    },
    "duration": {
      "min": 15,
      "max": 30
    },
    "turnActions": {
      "actions": [
        "Move forward",
        "Dodge obstacles",
        "Collect treasures"
      ],
      "notes": "Speed and agility are essential."
    },
    "endRound": "Round ends when a player reaches the finish line.",
    "endGame": "Game ends after a predetermined number of rounds.",
    "keywords": [
      "Race",
      "Forest",
      "Agility"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "38",
    "name": "Cats n Aliens",
    "plot": "Team up as cats to fend off an alien invasion in a quirky adventure.",
    "goal": {
      "phrase": "Defend Earth by defeating the alien threat.",
      "action": [
        "Gather cat allies",
        "Utilize alien technology",
        "Coordinate defenses"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 6
    },
    "duration": {
      "min": 30,
      "max": 60
    },
    "turnActions": {
      "actions": [
        "Plan your defense",
        "Execute cat attacks",
        "Coordinate with teammates"
      ],
      "notes": "Teamwork and quirky strategies lead to victory."
    },
    "endRound": "Round ends when alien waves subside.",
    "endGame": "Game ends when the alien invasion is repelled.",
    "keywords": [
      "Cats",
      "Aliens",
      "Teamwork"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "39",
    "name": "Girgit (Chameleon)",
    "plot": "Blend in or stand out in this game of hidden roles and ever-changing identities.",
    "goal": {
      "phrase": "Avoid detection as the chameleon and complete secret objectives.",
      "action": [
        "Change colors",
        "Mimic other players",
        "Blend with the crowd"
      ]
    },
    "playerCount": {
      "min": 3,
      "max": 8
    },
    "duration": {
      "min": 20,
      "max": 40
    },
    "turnActions": {
      "actions": [
        "Choose a role",
        "Adapt to situations",
        "Act discreetly"
      ],
      "notes": "Observation and subtlety are key."
    },
    "endRound": "Round ends when roles are revealed.",
    "endGame": "Game ends when secret objectives are met.",
    "keywords": [
      "Hidden roles",
      "Bluff",
      "Adaptation"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "40",
    "name": "Brew",
    "plot": "Mix ingredients and concoct magical potions in a competitive brewing challenge.",
    "goal": {
      "phrase": "Brew the most potent potion to outdo your competitors.",
      "action": [
        "Gather ingredients",
        "Mix potions",
        "Follow special recipes"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 4
    },
    "duration": {
      "min": 20,
      "max": 30
    },
    "turnActions": {
      "actions": [
        "Collect ingredients",
        "Mix your potion",
        "Adjust the formula"
      ],
      "notes": "Experimentation and timing are crucial."
    },
    "endRound": "Round ends when all ingredients are used.",
    "endGame": "Game ends after a set number of brewing rounds.",
    "keywords": [
      "Brewing",
      "Potions",
      "Alchemy"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "41",
    "name": "Shamans",
    "plot": "Harness ancient spiritual powers and guide your tribe to victory.",
    "goal": {
      "phrase": "Accumulate spiritual energy and complete mystical quests.",
      "action": [
        "Perform rituals",
        "Gather spirit tokens",
        "Invoke ancient powers"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 4
    },
    "duration": {
      "min": 30,
      "max": 60
    },
    "turnActions": {
      "actions": [
        "Perform a ritual",
        "Collect spirit tokens",
        "Invoke mystical powers"
      ],
      "notes": "Balance strategy with luck."
    },
    "endRound": "Round ends when rituals are completed.",
    "endGame": "Game ends when spiritual goals are achieved.",
    "keywords": [
      "Spiritual",
      "Mystical",
      "Tribe"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "42",
    "name": "Grand Bois",
    "plot": "Enter a realm of dense forests where strategy and resource management rule.",
    "goal": {
      "phrase": "Develop your domain and gather the most resources.",
      "action": [
        "Collect resources",
        "Expand territory",
        "Build structures"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 4
    },
    "duration": {
      "min": 45,
      "max": 90
    },
    "turnActions": {
      "actions": [
        "Gather resources",
        "Place structures",
        "Plan expansions"
      ],
      "notes": "Every resource counts in the race for dominance."
    },
    "endRound": "Round ends after all players complete their moves.",
    "endGame": "Game ends when resources run low or a victory threshold is met.",
    "keywords": [
      "Strategy",
      "Resource management",
      "Forest"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "43",
    "name": "5 second rule",
    "plot": "Quickly name items in a category before time runs out in this rapid-fire challenge.",
    "goal": {
      "phrase": "Win by quickly naming items under pressure.",
      "action": [
        "Think fast",
        "Speak quickly",
        "Beat the clock"
      ]
    },
    "playerCount": {
      "min": 3,
      "max": 6
    },
    "duration": {
      "min": 5,
      "max": 10
    },
    "turnActions": {
      "actions": [
        "Name an item",
        "Pass quickly",
        "Challenge opponents"
      ],
      "notes": "Speed is essential in this game."
    },
    "endRound": "Round ends when time runs out.",
    "endGame": "Game ends when a player wins the majority of rounds.",
    "keywords": [
      "Quick thinking",
      "Speed",
      "Challenge"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "44",
    "name": "Blank Slate",
    "plot": "Fill in the blanks with creative words to score points in this word association game.",
    "goal": {
      "phrase": "Score points by matching or uniquely filling in the blanks.",
      "action": [
        "Write down answers",
        "Guess others' responses",
        "Match creatively"
      ]
    },
    "playerCount": {
      "min": 3,
      "max": 8
    },
    "duration": {
      "min": 20,
      "max": 40
    },
    "turnActions": {
      "actions": [
        "Choose a word",
        "Submit your answer",
        "Reveal responses"
      ],
      "notes": "Both unique and common answers can score."
    },
    "endRound": "Round ends after all answers are revealed.",
    "endGame": "Game ends after a set number of rounds.",
    "keywords": [
      "Word game",
      "Creativity",
      "Association"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "45",
    "name": "Can’t Stop",
    "plot": "Roll the dice and push your luck to advance on the board in this classic risk game.",
    "goal": {
      "phrase": "Accumulate progress on multiple tracks without busting.",
      "action": [
        "Roll dice",
        "Choose tracks",
        "Decide when to stop"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 4
    },
    "duration": {
      "min": 30,
      "max": 60
    },
    "turnActions": {
      "actions": [
        "Roll dice",
        "Advance markers",
        "Decide on risks"
      ],
      "notes": "Risk management is key."
    },
    "endRound": "Round ends when a player banks their progress.",
    "endGame": "Game ends when one player reaches the final track.",
    "keywords": [
      "Risk",
      "Dice",
      "Luck"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "46",
    "name": "Candid",
    "plot": "Reveal your true self and get to know others in this game of honesty and wit.",
    "goal": {
      "phrase": "Score by accurately guessing truths about fellow players.",
      "action": [
        "Ask candid questions",
        "Reveal answers",
        "Score accurate guesses"
      ]
    },
    "playerCount": {
      "min": 3,
      "max": 8
    },
    "duration": {
      "min": 20,
      "max": 40
    },
    "turnActions": {
      "actions": [
        "Pose a question",
        "Answer honestly",
        "Vote on truths"
      ],
      "notes": "Honesty and observation are crucial."
    },
    "endRound": "Round ends when all players have answered.",
    "endGame": "Game ends after a set number of rounds with the highest score winning.",
    "keywords": [
      "Honesty",
      "Social",
      "Deduction"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "47",
    "name": "Cards v/s Sanskaar",
    "plot": "Challenge cultural norms in this humorous card game of themes and traditions.",
    "goal": {
      "phrase": "Score by matching cards to cultural themes creatively.",
      "action": [
        "Play thematic cards",
        "Debate cultural nuances",
        "Score creative matches"
      ]
    },
    "playerCount": {
      "min": 3,
      "max": 8
    },
    "duration": {
      "min": 20,
      "max": 40
    },
    "turnActions": {
      "actions": [
        "Select a card",
        "Present your theme",
        "Vote on matches"
      ],
      "notes": "Cultural humor and creativity drive the game."
    },
    "endRound": "Round ends when all cards are played.",
    "endGame": "Game ends when a cultural score is reached.",
    "keywords": [
      "Cultural",
      "Humor",
      "Card game"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "48",
    "name": "Codenames",
    "plot": "Give one-word clues to help your team identify secret agents on the board.",
    "goal": {
      "phrase": "Win by correctly guessing all of your team's agents.",
      "action": [
        "Provide a one-word clue",
        "Limit guesses",
        "Avoid the assassin"
      ]
    },
    "playerCount": {
      "min": 4,
      "max": 8
    },
    "duration": {
      "min": 15,
      "max": 30
    },
    "turnActions": {
      "actions": [
        "Give a clue",
        "Discuss possibilities",
        "Make guesses"
      ],
      "notes": "Clear communication is essential."
    },
    "endRound": "Round ends when all guesses are made.",
    "endGame": "Game ends when one team identifies all agents.",
    "keywords": [
      "Clues",
      "Deduction",
      "Teamwork"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "49",
    "name": "Coup",
    "plot": "Engage in a game of deception and political intrigue to eliminate your rivals.",
    "goal": {
      "phrase": "Win by bluffing and eliminating all opponents.",
      "action": [
        "Claim roles",
        "Execute actions",
        "Bluff opponents"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 6
    },
    "duration": {
      "min": 15,
      "max": 30
    },
    "turnActions": {
      "actions": [
        "Take an action",
        "Challenge opponents",
        "Defend your role"
      ],
      "notes": "Bluffing and risk management are vital."
    },
    "endRound": "Round ends when all actions are resolved.",
    "endGame": "Game ends when only one player remains.",
    "keywords": [
      "Bluff",
      "Deception",
      "Politics"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "50",
    "name": "Jaipur",
    "plot": "Trade and barter in a vibrant market to become the richest merchant.",
    "goal": {
      "phrase": "Accumulate the most wealth by trading goods.",
      "action": [
        "Buy goods",
        "Sell goods",
        "Manage camel trades"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 2
    },
    "duration": {
      "min": 30,
      "max": 45
    },
    "turnActions": {
      "actions": [
        "Select a trade",
        "Exchange goods",
        "Plan your strategy"
      ],
      "notes": "Smart trading is key to victory."
    },
    "endRound": "Round ends when the market clears.",
    "endGame": "Game ends when a wealth target is reached.",
    "keywords": [
      "Trading",
      "Barter",
      "Market"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "51",
    "name": "Jenga - Truth or Dare",
    "plot": "Pull blocks from a tower while completing truth or dare challenges.",
    "goal": {
      "phrase": "Avoid collapsing the tower while completing challenges.",
      "action": [
        "Pull a block",
        "Perform a dare",
        "Answer truthfully"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 6
    },
    "duration": {
      "min": 15,
      "max": 30
    },
    "turnActions": {
      "actions": [
        "Select a block",
        "Pull carefully",
        "Complete the challenge"
      ],
      "notes": "Balance and honesty are both tested."
    },
    "endRound": "Round ends when the tower collapses.",
    "endGame": "Game ends when a collapse occurs.",
    "keywords": [
      "Tower",
      "Challenge",
      "Truth or Dare"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "52",
    "name": "Kwik",
    "plot": "React quickly to match symbols in this fast-paced observation game.",
    "goal": {
      "phrase": "Be the fastest to identify matching symbols.",
      "action": [
        "Observe carefully",
        "React swiftly",
        "Match accurately"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 6
    },
    "duration": {
      "min": 5,
      "max": 15
    },
    "turnActions": {
      "actions": [
        "Spot a match",
        "Call it out",
        "Confirm your selection"
      ],
      "notes": "Speed and sharp observation determine the winner."
    },
    "endRound": "Round ends when all matches are found.",
    "endGame": "Game ends after a set number of rounds.",
    "keywords": [
      "Speed",
      "Observation",
      "Reaction"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "53",
    "name": "Lakshadweep",
    "plot": "Explore exotic islands and embark on a tropical adventure in Lakshadweep.",
    "goal": {
      "phrase": "Score points by discovering hidden treasures across the islands.",
      "action": [
        "Sail between islands",
        "Explore hidden coves",
        "Collect treasures"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 4
    },
    "duration": {
      "min": 45,
      "max": 90
    },
    "turnActions": {
      "actions": [
        "Set sail",
        "Explore an island",
        "Gather treasures"
      ],
      "notes": "Navigation and exploration are key."
    },
    "endRound": "Round ends when the exploration phase is over.",
    "endGame": "Game ends when treasure caches are exhausted.",
    "keywords": [
      "Exploration",
      "Tropical",
      "Adventure"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "54",
    "name": "Project L",
    "plot": "Compete to build the most impressive project in a creative design challenge.",
    "goal": {
      "phrase": "Win by constructing the most innovative and appealing project.",
      "action": [
        "Draft designs",
        "Select materials",
        "Assemble your project"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 4
    },
    "duration": {
      "min": 30,
      "max": 60
    },
    "turnActions": {
      "actions": [
        "Draft a design",
        "Choose components",
        "Assemble your project"
      ],
      "notes": "Creativity and planning are essential."
    },
    "endRound": "Round ends after each design phase.",
    "endGame": "Game ends when the final design is unveiled.",
    "keywords": [
      "Design",
      "Creativity",
      "Project"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "55",
    "name": "Sherlook",
    "plot": "Investigate clues and solve mysteries by uncovering hidden details.",
    "goal": {
      "phrase": "Be the first to uncover the hidden truth.",
      "action": [
        "Examine evidence",
        "Follow clues",
        "Solve the mystery"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 4
    },
    "duration": {
      "min": 20,
      "max": 40
    },
    "turnActions": {
      "actions": [
        "Inspect the scene",
        "Gather clues",
        "Deduce logically"
      ],
      "notes": "Attention to detail is crucial."
    },
    "endRound": "Round ends when all clues are found.",
    "endGame": "Game ends when the mystery is solved.",
    "keywords": [
      "Investigation",
      "Mystery",
      "Clues"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "56",
    "name": "Suspend",
    "plot": "Balance risk and reward in this tense game of dangling challenges.",
    "goal": {
      "phrase": "Score by successfully suspending your opponents' strategies.",
      "action": [
        "Place your pieces",
        "Force difficult choices",
        "Maintain balance"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 4
    },
    "duration": {
      "min": 15,
      "max": 30
    },
    "turnActions": {
      "actions": [
        "Add a piece",
        "Challenge an opponent",
        "Stabilize your structure"
      ],
      "notes": "Risk and balance are at the heart of the game."
    },
    "endRound": "Round ends when a structure collapses or stabilizes.",
    "endGame": "Game ends after a set number of rounds or a collapse.",
    "keywords": [
      "Risk",
      "Balance",
      "Challenge"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "57",
    "name": "Taboo",
    "plot": "Give clues without using the forbidden words in this fast-paced party game.",
    "goal": {
      "phrase": "Help your team guess the word without using tabooed clues.",
      "action": [
        "Describe without key words",
        "Use synonyms",
        "Encourage guesses"
      ]
    },
    "playerCount": {
      "min": 4,
      "max": 10
    },
    "duration": {
      "min": 20,
      "max": 40
    },
    "turnActions": {
      "actions": [
        "Give a clue",
        "Listen for guesses",
        "Avoid forbidden words"
      ],
      "notes": "Creative language use is crucial."
    },
    "endRound": "Round ends when the time is up.",
    "endGame": "Game ends when a predetermined score is reached.",
    "keywords": [
      "Party",
      "Clues",
      "Communication"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "58",
    "name": "Ticket to ride: London",
    "plot": "Build train routes across London in a race against time.",
    "goal": {
      "phrase": "Score by completing your train routes efficiently.",
      "action": [
        "Collect train cards",
        "Claim routes",
        "Plan your path"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 5
    },
    "duration": {
      "min": 30,
      "max": 45
    },
    "turnActions": {
      "actions": [
        "Draw train cards",
        "Claim a route",
        "Plan your journey"
      ],
      "notes": "Efficient routing is key to victory."
    },
    "endRound": "Round ends when train pieces run low.",
    "endGame": "Game ends after the final round of ticket evaluations.",
    "keywords": [
      "Train",
      "London",
      "Strategy"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "59",
    "name": "Tuki",
    "plot": "Engage in a fast-paced game of matching and quick reactions.",
    "goal": {
      "phrase": "Win by quickly matching and reacting to patterns.",
      "action": [
        "Spot the match",
        "React quickly",
        "Beat your opponents"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 6
    },
    "duration": {
      "min": 10,
      "max": 20
    },
    "turnActions": {
      "actions": [
        "Identify a pattern",
        "Make a match",
        "Confirm your choice"
      ],
      "notes": "Quick thinking is essential."
    },
    "endRound": "Round ends when all matches are completed.",
    "endGame": "Game ends after a set number of rounds.",
    "keywords": [
      "Matching",
      "Speed",
      "Quick reaction"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "60",
    "name": "Wavelength",
    "plot": "Communicate subtle ideas to align your team on a hidden spectrum.",
    "goal": {
      "phrase": "Score by accurately conveying the position on the wavelength.",
      "action": [
        "Give a clue",
        "Discuss the spectrum",
        "Align with teammates"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 12
    },
    "duration": {
      "min": 30,
      "max": 60
    },
    "turnActions": {
      "actions": [
        "Offer a spectrum clue",
        "Discuss possibilities",
        "Make a guess"
      ],
      "notes": "Subtle communication is key."
    },
    "endRound": "Round ends when all guesses are submitted.",
    "endGame": "Game ends when a team reaches the target score.",
    "keywords": [
      "Spectrum",
      "Communication",
      "Teamwork"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "61",
    "name": "Red Flags",
    "plot": "Build a quirky dating profile by adding both attractive traits and humorous red flags.",
    "goal": {
      "phrase": "Score by constructing the most entertaining dating profile.",
      "action": [
        "Choose positive traits",
        "Add humorous red flags",
        "Craft a unique profile"
      ]
    },
    "playerCount": {
      "min": 3,
      "max": 6
    },
    "duration": {
      "min": 20,
      "max": 40
    },
    "turnActions": {
      "actions": [
        "Choose traits",
        "Assemble profile",
        "Present to the group"
      ],
      "notes": "Humor and creativity drive the gameplay."
    },
    "endRound": "Round ends after all profiles are presented.",
    "endGame": "Game ends when a profile receives the most votes.",
    "keywords": [
      "Dating",
      "Humor",
      "Profile"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "62",
    "name": "Streets",
    "plot": "Navigate urban challenges and build your city's reputation in a dynamic street game.",
    "goal": {
      "phrase": "Score by completing urban challenges and expanding your network.",
      "action": [
        "Complete challenges",
        "Collect resources",
        "Expand influence"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 5
    },
    "duration": {
      "min": 30,
      "max": 60
    },
    "turnActions": {
      "actions": [
        "Tackle a challenge",
        "Collect resources",
        "Make a strategic move"
      ],
      "notes": "Urban strategy and planning are vital."
    },
    "endRound": "Round ends after all players complete their moves.",
    "endGame": "Game ends when a city achieves its goals.",
    "keywords": [
      "Urban",
      "Strategy",
      "City"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  },
  {
    "id": "63",
    "name": "Hues and Clues",
    "plot": "Match colors and solve puzzles in this visually stimulating game.",
    "goal": {
      "phrase": "Score by correctly identifying hues and solving visual puzzles.",
      "action": [
        "Identify color patterns",
        "Match hues",
        "Solve clues"
      ]
    },
    "playerCount": {
      "min": 2,
      "max": 6
    },
    "duration": {
      "min": 20,
      "max": 40
    },
    "turnActions": {
      "actions": [
        "Examine color clues",
        "Match the hues",
        "Submit your answer"
      ],
      "notes": "Visual acuity and deduction are key."
    },
    "endRound": "Round ends when all puzzles are solved.",
    "endGame": "Game ends after a predetermined number of rounds.",
    "keywords": [
      "Colors",
      "Puzzles",
      "Visual"
    ],
    "tags": [],
    "image": "",
    "bggLink": ""
  }
]



export default dummyFlashcards;