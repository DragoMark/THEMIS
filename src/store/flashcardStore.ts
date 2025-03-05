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
  }
];


export default dummyFlashcards;