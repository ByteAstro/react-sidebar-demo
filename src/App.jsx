import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='main'>
      <Sidebar />
      <div className="container">
        <h1 className='title'>My react App</h1>
        <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero corrupti neque tenetur reprehenderit? Quia suscipit, dolor, fuga iste facere distinctio porro ipsum.</p>
        <button className='btn'>Explore now</button>
      </div>
    </div>
  )
}

export default App
