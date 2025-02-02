import { useNavigate } from "react-router-dom";

import FloatingButton from '../components/FloatingButton.tsx'
import { leftArrow } from '../utils/Characters.ts'

const AddFlashcard = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }

    return (
        <div className="p-4 flex flex-col gap-4 items-center">
            <FloatingButton 
                onClick={goBack}
                buttonText={leftArrow}
                top={true}
                left={true}
            />
            <h1>
                New Flashcard
            </h1>
        </div>
    )
};

export default AddFlashcard;