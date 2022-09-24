import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import StartPage from './Components/StartPage'
import Quiz from './Components/Quiz'
import Results from './Components/Results'

function App() {

  return (
    <Routes>
      <Route path='*' element={ <StartPage/> } />
      <Route exact path='/start-quiz' element={ <Quiz/> } />
      <Route exact path='/results' element={ <Results/> } />
    </Routes>
  )
}

export default App