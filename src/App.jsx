import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Map from './pages/Map'
import Tabular from './pages/Tabular'
import './App.css'


function App() {

  return (
    <>
      <div className="routing">
        <Routes>
          <Route path='/' element={<Home/>} exact/>
          <Route path='/peta' element={<Map/>}/>
          <Route path='/data' element={<Tabular/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
