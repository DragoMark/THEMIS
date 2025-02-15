import { useNavigate } from "react-router-dom";

import FloatingButton from '@/components/FloatingButton.tsx'
import { leftArrow } from '@/utils/Characters.ts'

const AddFlashcard = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return (
        <div className="p-4 flex flex-col gap-4 overflow-y-scroll">
            <h1 className="font-roboto-mono text-xl p-2 text-center">
                New Flashcard
            </h1>

            <div className="px-2 grid gap-2">
                {/* The form will go here */}
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