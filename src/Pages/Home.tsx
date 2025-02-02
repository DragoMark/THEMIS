import {
    useEffect,
    useState
} from 'react'
import { useNavigate } from "react-router-dom";

import Header from '../components/Header.tsx'
import FloatingButton from '../components/FloatingButton.tsx'

import { pages } from "../utils/routes";
import { Flashcard } from '../utils/Flashcard.ts'
import { getFlashcards } from '../utils/localStorage.ts'

const Home = () => {

    const navigate = useNavigate();
    const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
    
    const goToAddFlashcard = () => {
        navigate(pages.ADD_FLASHCARD);
    }

    // Get flashcards from local storage
    useEffect(() => {
        setFlashcards(getFlashcards());
        console.log(flashcards);
    },[])

    return (
        <>
            <div className="p-4 flex flex-col gap-4">
                <Header />
                {(flashcards.length > 0) ? (
                    <div className="flex flex-col gap-4">
                        {flashcards.map((flashcard: Flashcard) => {
                            return (
                                <div key={flashcard.id} className="bg-cyan-100 p-4 rounded-2xl shadow-lg">
                                    <div className="font-macondo text-2xl text-neutral-700">
                                        {flashcard.name}
                                    </div>
                                    <div className="font-roboto-mono text-sm text-neutral-500">
                                        {flashcard.plot}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <div className="min-h-full text-neutral-700 hover:text-neutral-500 font-macondo text-4xl text-center">
                        No Board Games <br />(yet)
                    </div>
                )}
                <FloatingButton 
                    onClick={goToAddFlashcard}
                    buttonText={'+'}
                    bottom={true}
                    right={true}
                />
            </div>
        </>
    )
}

export default Home;