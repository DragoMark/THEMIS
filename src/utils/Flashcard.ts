export interface Flashcard {
    id?: string;
    name: string;
    plot: string;
    goal: Goal;
    playerCount: Range;
    duration: Range;
    turnActions?: TurnActions;
    endRound?: string;
    endGame?: string;
    keywords?: string[];
    tags?: string[];
    image?: string;
    bggLink?: string;
}

export interface Goal {
    phrase: string;
    action: string[];
}

export interface Range {
    min: number;
    max: number;
}

export interface TurnActions {
    actions: string[];
    notes?: string;
}