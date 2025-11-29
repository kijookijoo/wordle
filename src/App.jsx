import { useState } from 'react'
import GamePage from './pages/GamePage'
import Keyboard from './components/Keyboard'


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
