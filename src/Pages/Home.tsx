import Header from '../components/Header.tsx'
import FloatingAddButton from '../components/FloatingAddButton.tsx'
import { Flashcard } from '../utils/Flashcard.tsx'
import { getFlashcards } from '../utils/localStorage.tsx'

const Home = () => {
    // Get flashcards from local storage
    const flashcards: Flashcard[] = getFlashcards();

    return (
        <>
            <div className="p-4 flex flex-col gap-4">
                <Header />
                {
                    flashcards.length > 0 ? (
                        <div className="flex flex-col gap-4">
                            {
                                flashcards.map((flashcard: Flashcard) => {
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
                                })
                            }
                        </div>
                    ) : (
                        <div className="min-h-full text-neutral-700 hover:text-neutral-500 font-macondo text-4xl text-center">
                            No Board Games <br />(yet)
                        </div>
                    )
                }
                <FloatingAddButton />
            </div>
        </>
    )
}

export default Home;