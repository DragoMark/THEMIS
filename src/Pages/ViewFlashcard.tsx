// import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { Flashcard } from '@/utils/Flashcard'
import { pages } from '@/utils/routes'
import { leftArrow } from '@/utils/Characters.ts'

import NoData from '@/components/NoData'
import FloatingButton from '@/components/FloatingButton.tsx'

const ViewFlashcard = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const flashcard = location.state as Flashcard || undefined

    const goBack = () => {
        navigate(pages.HOME);
    }

    if(!flashcard) {
        return <NoData />
    }

    return (
      <div className="p-8 mt-12">

        <h1 className="text-3xl font-bold">{flashcard.name}</h1>
        <p className="mt-2">{flashcard.plot}</p>
        <div className="my-4 flex flex-col gap-2">
          <div>
            <h3>Player count: <span>{flashcard.playerCount.min}<span> to </span>{flashcard.playerCount.max} players</span></h3>
          </div>
          <div>
            <h3>Duration: <span>{flashcard.duration.min}<span> to </span>{flashcard.duration.max} mins</span></h3>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-xl font-bold">Goal</h2>
          <p>{flashcard.goal.phrase}</p>
          <ul>
            {flashcard.goal.action.map((action, index) => (
              <li key={index}>- {action}</li>
            ))}
          </ul>
        </div>
        {
          flashcard.turnActions !== undefined ? (
            <div className="mt-4">
              <h2 className="text-xl font-bold">Turn Actions</h2>
              <p>{flashcard.turnActions?.notes}</p>
              <ul>
                {flashcard.turnActions.actions.map((action, index) => (
                  <li key={index}>- {action}</li>
                ))}
              </ul>
            </div>
          ) : null
        }
        {/* Render additional flashcard data as needed */}
        <FloatingButton 
            onClick={goBack}
            buttonText={leftArrow}
            top={true}
            left={true}
        />
      </div>
    )
}

export default ViewFlashcard;