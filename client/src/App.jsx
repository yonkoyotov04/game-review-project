import { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router'
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
import UserContext from './contexts/userContext.js'
import LeaveReview from './components/leave-review/LeaveReview.jsx'

function App() {

    const navigate = useNavigate();
    const [user, setUser] = useState({});

    const onLogin = (user) => {
        setUser(user);
    }

    const onLogout = () => {
        setUser({});
    }

    const contextValues = {
        user,
        isAuthenticated: !!user.email,
        loginHandler: onLogin,
        logoutHandler: onLogout
    }

    return (
        <UserContext.Provider value={contextValues}>
            <Header />
            <Background />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/games' element={<Catalogue />} />
                <Route path='/games/:category' element={<Catalogue />} />
                <Route path='/games/:gameId/details' element={<GameDetails />} />
                <Route path='/games/create' element={<AddGame />} />
                <Route path='/reviews/:gameId/review' element={<LeaveReview />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/profile/:userId' element={<Profile />} />
            </Routes>

            <Footer />
        </UserContext.Provider>
    )
}

export default App
