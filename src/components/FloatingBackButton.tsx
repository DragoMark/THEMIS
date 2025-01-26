import { useNavigate } from "react-router-dom";
// import { pages } from "../utils/routes";

const FloatingBackButton = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }


    return (
        <button className="fixed top-4 left-4 bg-cyan-500 hover:bg-cyan-600 rounded-2xl shadow-lg text-white text-2xl font-bold w-12 h-12 flex justify-center items-center cursor-pointer"
            onClick={goBack}
        >
            &larr;
        </button>
    )
};

export default FloatingBackButton;