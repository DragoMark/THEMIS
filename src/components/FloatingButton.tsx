import React from 'react'

interface FloatingButtonProps {
    onClick: () => void,
    buttonText: string,
    top?: boolean,
    left?: boolean,
    bottom?: boolean,
    right?: boolean
}

const FloatingBackButton: React.FC<FloatingButtonProps> = ({
    onClick, 
    buttonText,
    top,
    left,
    bottom,
    right
}) => {

    return (
        <button className={`fixed bg-cyan-500 hover:bg-cyan-600 rounded-2xl shadow-lg text-white text-2xl font-bold w-12 h-12 flex justify-center items-center cursor-pointer
            ${top && 'top-4'} 
            ${left && 'left-4'} 
            ${bottom && 'bottom-4'} 
            ${right && 'right-4'} `}
            onClick={onClick}
        >
            {buttonText}
        </button>
    )
};

export default FloatingBackButton;