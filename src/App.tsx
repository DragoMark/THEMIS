import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  // useNavigate 
} from 'react-router-dom'
import { useEffect } from 'react'
import { pages } from '@/utils/routes'

import Home from '@/Pages/Home.tsx'
import AddFlashcard from '@/Pages/AddFlashcard'
import ViewFlashcard from '@/Pages/ViewFlashcard'

import { saveFlashcards } from '@/utils/localStorage.ts'
import dummyFlashcards from '@/store/flashcardStore.ts'


function App() {

  // Load flashcards into localStorage
  useEffect(() => {
    saveFlashcards(dummyFlashcards);
  },[]);

  return (
    <>
      <Router>
        <Routes>
          <Route path={pages.HOME} element={<Home />} />
          <Route path={pages.ADD_FLASHCARD} element={<AddFlashcard />} />
          <Route path={`${pages.VIEW_FLASHCARD}:flashcardId`} element={<ViewFlashcard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
