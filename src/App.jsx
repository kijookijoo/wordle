import { useState } from 'react'
import GamePage from './pages/GamePage'
import Header from './components/Header'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

        <GamePage />
    </>
  )
}

export default App
