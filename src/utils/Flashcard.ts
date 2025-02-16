export interface Flashcard {
    id: string;
    name: string;
    plot: string;
    goal: Goal;
    playerCount: Range;
    duration: Range;
    turnActions: TurnActions;
    endRound: string;
    endGame: string;
    keywords: string[];
}

interface Goal {
    phrase: string;
    action: string[];
}

interface Range {
    min: number;
    max: number;
}

interface TurnActions {
    actions: string[];
    notes: string;
}