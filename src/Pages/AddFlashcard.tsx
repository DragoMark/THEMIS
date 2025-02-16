import { useNavigate } from "react-router-dom";

import FloatingButton from '@/components/FloatingButton.tsx'
import { leftArrow } from '@/utils/Characters.ts'
// import { Flashcard } from '@/utils/Flashcard'

// import {saveSingleFlashcard } from '@/utils/localStorage.ts'
import { FormEvent } from "react";

const AddFlashcard = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    const handleSubmit  = (data: FormEvent) => {
        // Add the logic here to update localStorage
        console.log("Form submission data: ", data);
        // saveSingleFlashcard(data);


    }

    return (
        <div className="p-4 flex flex-col gap-4 overflow-y-scroll">
            <h1 className="font-roboto-mono text-xl p-2 text-center">
                New Flashcard
            </h1>

            <div className="px-2 grid gap-2">
                {/* // Add the form here where it takes in data for fields that correspond to the data in flashcardStore.ts */}
                <form onSubmit={handleSubmit}>
                    <input type="text" />
                </form>


            </div>

            <FloatingButton 
                onClick={goBack}
                buttonText={leftArrow}
                top={true}
                left={true}
            />
        </div>
    )
};

export default AddFlashcard;