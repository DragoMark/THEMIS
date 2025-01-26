import { 
  BrowserRouter as Router, 
  Routes, 
  Route, 
  // useNavigate 
} from 'react-router-dom'

import Home from './Pages/Home.tsx'
import AddFlashcard from './Pages/AddFlashcard.tsx'


function App() {

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
