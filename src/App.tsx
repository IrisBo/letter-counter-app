import { useState } from 'react'

import './App.css'
import { Layout } from './components/layout/Layout'
import Homepage from './pages/hompage/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <Homepage/> 
      </div>
     
      
    </>
  )
}

export default App
