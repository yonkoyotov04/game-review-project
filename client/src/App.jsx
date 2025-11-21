import { useState } from 'react'
import { Route, Routes } from 'react-router'
import Background from './components/background/Background.jsx'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import Home from './components/home/home.jsx'
import About from './components/about/About.jsx'
import AddGame from './components/add-game/Add-Game.jsx'
import Catalogue from './components/catalogue/Catalogue.jsx'
import Profile from './components/profile/Profile.jsx'
import Register from './components/register/Register.jsx'
import Login from './components/login/Login.jsx'
import GameDetails from './components/game-details/GameDetails.jsx'

function App() {

  return (
    <>
      <Header />
      <Background />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/games/create' element={<AddGame />} />
        <Route path='/games' element={<Catalogue />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/games/details' element={<GameDetails />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
