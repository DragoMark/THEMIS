import FloatingBackButton from '../components/FloatingBackButton';

const AddFlashcard = () => {
    return (
        <div className="p-4 flex flex-col gap-4 items-center">
            <FloatingBackButton />
            <h1>
                New Flashcard
            </h1>
        </div>
    )
};

export default AddFlashcard;