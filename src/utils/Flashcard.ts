export interface Flashcard {
    id: string;
    name: string;
    plot: string;
    goal: {
        phrase: string;
        action: string[];
    };
    playerCount: {
        min: number;
        max: number;
    };
    duration: {
        min: number;
        max: number;
    };
    turnActions: {
        actions: string[];
        notes: string;
    };
    endRound: string;
    endGame: string;
    keywords: string[];
}