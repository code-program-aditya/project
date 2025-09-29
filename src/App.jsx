import React from 'react'
import Header from './component/Header'
import Home from './pages/Home'
import Footer from './component/Footer'
import { Routes, Route } from 'react-router-dom'
import Aircraft from './pages/Aircraft'
import Drone from './pages/Drone'
import Helicopter from './pages/Helicopter'
import AirDefence from './pages/Air Defence'
import Rifle from './pages/Rifle'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aircraft' element={<Aircraft />} />
        <Route path='/drone' element={<Drone />} />
        <Route path='/helicopter' element={<Helicopter />} />
        <Route path='/Air Defence' element={<AirDefence />} />
        <Route path='/rifle' element={<Rifle />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
