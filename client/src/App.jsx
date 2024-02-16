import { useState } from 'react'
import './App.css'
import Appbar from './components/appbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GetTodos from './pages/getTodos'
import CreateTodos from './pages/createTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route Component={GetTodos} path='/' />
          <Route Component={CreateTodos} path='/add' />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
