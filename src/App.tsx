import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  // useNavigate 
} from 'react-router-dom'
import { useEffect } from 'react'

import Home from '@/Pages/Home.tsx'
import AddFlashcard from '@/Pages/AddFlashcard.tsx'

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
          <Route path="/*" element={<Home />} />
          <Route path="/add-flashcard" element={<AddFlashcard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
