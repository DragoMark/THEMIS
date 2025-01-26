import { useNavigate } from "react-router-dom";
import { pages } from "../utils/routes";

const FloatingAddButton = () => {
    const navigate = useNavigate();

    const goToAddFlashcard = () => {
        navigate(pages.ADD_FLASHCARD);
    }


    return (
        <button className="fixed bottom-4 right-4 bg-cyan-500 hover:bg-cyan-600 rounded-2xl shadow-lg text-white text-2xl font-bold w-12 h-12 flex justify-center items-center cursor-pointer"
            onClick={goToAddFlashcard}
        >
            +
        </button>
    )
};

export default FloatingAddButton;