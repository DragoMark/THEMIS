import { useNavigate } from "react-router-dom";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";

import FloatingButton from '@/components/FloatingButton.tsx'

import { leftArrow } from '@/utils/Characters.ts'
import { pages } from "@/utils/routes";
import { Flashcard } from '@/utils/Flashcard'
import { initialState } from "@/utils/define";
import { saveSingleFlashcard } from "@/utils/localStorage";

const inputTextField = "p-4 border-solid border-2 border-zinc-400 rounded-2xl";


const AddFlashcard = () => {
    const navigate = useNavigate();
    // Create a form using react-hook-form  
    const {
        register,
        handleSubmit,
        // formState: { errors },
        // watch,
        control,
        // getValues,
        // setValue,
        // reset,
        // clearErrors,
        // trigger
    } = useForm<Flashcard>({
        defaultValues: initialState
    });

    
    const {
        fields: goalActionFields,
        append: appendGoalAction,
        remove: removeGoalAction,
        //@ts-expect-error The form works even if the hook doesn't accept goal.action
    } = useFieldArray<Flashcard, "goal.action">({
        control,
        name: "goal.action",
    });

    const {
        fields: turnActionsFields,
        append: appendTurnActions,
        remove: removeTurnActions
        //@ts-expect-error The form works even if the hook doesn't accept turnActions.actions
    } = useFieldArray<Flashcard, "turnActions.actions">({
        control,
        name: "turnActions.actions",
    });

    // const {
    //     fields: keywordsFields,
    //     append: appendKeywords,
    //     remove: removeKeywords,
    //     //@ts-expect-error The form works even if the hook doesn't accept keywords
    // } = useFieldArray<Flashcard, "keywords">({
    //     control,
    //     name: "keywords",
    // });


    const goBack = () => {
        navigate(pages.HOME);
    }

    const onSubmit: SubmitHandler<Flashcard> = (data) => {
        console.log("Submit Data: ", data);
        saveSingleFlashcard(data);
        goBack();
    };

    // console.log(watch("goal.action"));

    return (
        <div className="p-4 flex flex-col gap-8 overflow-y-scroll">
            <h1 className="font-roboto-mono text-xl p-2 text-center">
                New Flashcard
            </h1>

            <div className="px-2 grid gap-2">
                {/* // Add the form here where it takes in data for fields that correspond to the data in flashcardStore.ts */}
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <input 
                        type="text" 
                        id="name"
                        placeholder={'Board Game'}
                        className={inputTextField}
                        {...register("name", {required: true})}
                    />
                    <input 
                        type="text" 
                        id="plot"
                        placeholder={'Plot'}
                        className={inputTextField}
                        {...register("plot", {required: true})}
                    />
                    <>
                        <h2>Goal Action:</h2>
                        <input
                            type="text"
                            id="goal"
                            placeholder={'Goal Phrase'}
                            className={inputTextField}
                            {...register("goal.phrase", {required: true})}
                        />
                        {
                            goalActionFields.map((field: any, index: number) => (
                                <div key={field.id} className="flex gap-2 flex-row justify-between">
                                    <input
                                        type="text"
                                        id={`goal.action[${index}]`}
                                        placeholder={`Goal Action ${index + 1}`}
                                        className={inputTextField}
                                        {...register(`goal.action.${index}` as const)}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => {removeGoalAction(index); console.log("goals: ", goalActionFields)}}
                                        className="p-2 w-12 h-12 bg-gray-950 rounded-2xl"
                                    >
                                        D
                                    </button>
                                </div>
                            ))
                        }

                        <button
                            type="button"
                            onClick={() => {appendGoalAction(""); console.log("goals: ", goalActionFields)}}
                            className="p-2 bg-sky-500 rounded"
                        >
                            Add Goal Action
                        </button>
                    </>
                    <>
                        <h2 className="text-lg font-semibold">Player Count: </h2>
                        <div className="flex flex-row gap-4">
                            <input 
                                type="text"
                                className={`${inputTextField} max-w-12`}
                                placeholder="min"
                                {...register("playerCount.min", {
                                    required: true,
                                    valueAsNumber: true,
                                })} 
                            />
                            <input 
                                type="text"
                                className={`${inputTextField} max-w-12`}
                                placeholder="max"
                                {...register("playerCount.max", {
                                    required: true,
                                    valueAsNumber: true,
                                })} 
                            />
                        </div>
                        
                    </>
                    <>
                        <h2 className="text-lg font-semibold">Duration: </h2>
                        <div className="flex flex-row gap-4">
                            <input 
                                type="text"
                                className={`${inputTextField} max-w-12`}
                                placeholder="min"
                                {...register("duration.min", {
                                    required: true,
                                    valueAsNumber: true,
                                })} 
                            />
                            <input 
                                type="text"
                                className={`${inputTextField} max-w-12`}
                                placeholder="max"
                                {...register("duration.max", {
                                    required: true,
                                    valueAsNumber: true,
                                })} 
                            />
                        </div>
                    </>
                    <>
                        <h2>Turn Actions:</h2>
                        {
                            turnActionsFields.map((field: any, index: number) => (
                                <div key={field.id} className="flex gap-2 flex-row justify-between">
                                    <input
                                        type="text"
                                        id={`turnActions.actions[${index}]`}
                                        placeholder={`Turn Action ${index + 1}`}
                                        className={inputTextField}
                                        {...register(`turnActions.actions.${index}` as const)}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => {removeTurnActions(index); console.log("turnActions: ", turnActionsFields)}}
                                        className="p-2 w-12 h-12 bg-gray-950 rounded-2xl"
                                    >
                                        D
                                    </button>
                                </div>
                            ))
                        }
                        <button
                            type="button"
                            onClick={() => {appendTurnActions(""); console.log("turnActions: ", turnActionsFields)}}
                            className="p-2 bg-sky-500 rounded"
                        >
                            Add Turn Action
                        </button>
                        <input
                            type="text"
                            id="turnActions.notes"
                            placeholder={'Notes'}
                            className={inputTextField}
                            {...register("turnActions.notes")}
                        />
                    </>
                    <input type="submit" placeholder="Submit" className={inputTextField}/>
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