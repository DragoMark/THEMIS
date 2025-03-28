import { useNavigate } from "react-router-dom"

import { pages } from "@/utils/routes"
import { leftArrow } from "@/utils/Characters"

import FloatingButton from "./FloatingButton"


const NoData = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(pages.HOME)
    }

    return (
    <>
        <div className="absolute top-2/4 w-full m-auto text-neutral-700 hover:text-neutral-500 font-macondo text-4xl text-center">
        {/* <div className="p-8 mt-12 flex flex-col items-center"> */}
        <p>Nat 1 {':\'('}</p>
        <p>No Data Available</p>
        </div>
        <FloatingButton 
            onClick={goBack}
            buttonText={leftArrow}
            top={true}
            left={true}
        />
    </>
    )
}

export default NoData