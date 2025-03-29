import { useEffect } from 'react'
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

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

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
              <ul>
                {flashcard.turnActions.actions.map((action, index) => (
                  <li key={index}>- {action}</li>
                ))}
              </ul>
              <p>{flashcard.turnActions?.notes}</p>
            </div>
          ) : null
        }
        <div className="my-4 flex flex-col gap-2">
          <div>
            <h3>End Round: <span>{flashcard.endRound}</span></h3>
          </div>
          <div>
            <h3>End Game: <span>{flashcard.endGame}</span></h3>
          </div>
        </div>
        {
          flashcard.keywords !== undefined ? (
            <div className="mt-4">
              <h2 className="text-xl font-bold">Keywords</h2>
              <ul>
                {flashcard.keywords.map((keyword, index) => (
                  <li key={index}>- {keyword}</li>
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