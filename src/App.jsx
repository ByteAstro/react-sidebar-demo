import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className='h-screen text-sm flex text-white'>
      <div className="w-64 flex-shrink-0 bg-red-950 h-screen overflow-auto">
        hello
      </div>



      <div className="grow-0 p-8 cat_image_bg opactity_custom bg-cover bg-center text-white flex flex-col justify-center text-center">
        <h1 className='text-5xl'>My React App</h1>
        <p className='text-lg tracking-[1px] m-6 text-[#E0E0E0]'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, enim? Ab, nam repellendus ipsa cumque voluptate, iure facilis sunt nihil fugiat sit excepturi delectus animi sint. Aperiam laboriosam eum quis.
        </p>
        <button className='my-0 mx-auto border outline-none px-10 py-4 text-base tracking-[1px] shadow-2xl font-bold uppercase rounded-md bg-red-900 text-white hover:tracking-[3px] transition-all'>Explore now</button>
      </div>



    </div>
  )
}

export default App
