// import { Flashcard, Goal } from '@/utils/Flashcard'
import { Flashcard } from '@/utils/Flashcard'

export const initialState: Flashcard = {
    id: '',
    name: '',
    plot: '',
    goal: {
        phrase: '',
        action: [""]
    },
    playerCount: {
        min: 0,
        max: 0
    },
    duration: {
        min: 0,
        max: 0
    },
    turnActions: {
        actions: [""],
        notes: ''
    },
    endRound: '',
    endGame: '',
    keywords: [""],
    tags: [""],
    image: '',
    bggLink: ''
};