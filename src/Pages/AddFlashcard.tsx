import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import FloatingButton from '@/components/FloatingButton.tsx'
import { leftArrow } from '@/utils/Characters.ts'
import { Flashcard } from '@/utils/Flashcard'

// import {saveSingleFlashcard } from '@/utils/localStorage.ts'

const AddFlashcard = () => {
    const navigate = useNavigate();
    // Create a form using react-hook-form  
    const {
        // register,
        handleSubmit,
        // formState: { errors },
        watch,
        // getValues,
        // setValue,
        // reset,
        // clearErrors,
        // trigger
    } = useForm<Flashcard>();

    const goBack = () => {
        navigate(-1);
    }

    const onSubmit: SubmitHandler<Flashcard> = (data) => {
        console.log(data);
    };

    console.log(watch("name"));

    return (
        <div className="p-4 flex flex-col gap-8 overflow-y-scroll">
            <h1 className="font-roboto-mono text-xl p-2 text-center">
                New Flashcard
            </h1>

            <div className="px-2 grid gap-2">
                {/* // Add the form here where it takes in data for fields that correspond to the data in flashcardStore.ts */}
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    
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