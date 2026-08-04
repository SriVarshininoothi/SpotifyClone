import { useState } from 'react'

import './App.css'
import Sidebar  from './Components/Sidebar'
import Player from './Components/Player'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen bg-black'>
      <div className='h-[90%] flex' >
        <Sidebar/>

      </div>
      <Player/>
       
    </div>
  )
}

export default App
