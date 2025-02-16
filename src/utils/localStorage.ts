import { Flashcard } from './Flashcard.tsx';
const FLASHCARDS_KEY = 'flashcards';

// Get flashcards from local storage
export const getFlashcards = () => {
    const flashcards = localStorage.getItem(FLASHCARDS_KEY);
    return flashcards ? JSON.parse(flashcards) : [];
}

// Save flashcards
export const saveFlashcards = (flashcards: Flashcard[]) => {
    localStorage.setItem(FLASHCARDS_KEY, JSON.stringify(flashcards));
}

// Save new flashcard to local storage
export const saveSingleFlashcard = (flashcard: Flashcard) => {
    const flashcards = getFlashcards();
    flashcards.push(flashcard);
    saveFlashcards(flashcards);
}

// Delete a flashcard by id
export const deleteFlashcard = (id: string) => {
    const flashcards = getFlashcards();
    const updatedFlashcards = flashcards.filter((card: Flashcard) => card.id !== id);
    saveFlashcards(updatedFlashcards);  
}

