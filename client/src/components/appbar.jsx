import React from 'react'
import { Link } from 'react-router-dom'

function Appbar() {
  return (
    <div className='h-16 p-4 bg-black w-full flex justify-between items-center'>
      <h1 className='text-white font-bold text-xl'>ToDo For Devops</h1>
      <ul className='list-none flex'>
        <Link to="/" className='text-white font-semibold cursor-pointer hover:underline'>View Todo</Link>
        <Link to="/add" className='text-white font-semibold ml-3 cursor-pointer hover:underline'>Create Todo</Link>
      </ul>
    </div>
  )
}

export default Appbar