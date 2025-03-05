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
        min: 1,
        max: 1
    },
    duration: {
        min: 1,
        max: 1
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