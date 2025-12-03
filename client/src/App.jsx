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
import LeaveReview from './components/leave-review/LeaveReview.jsx'
import EditProfile from './components/profile/EditProfile.jsx'
import GuardedRoutes from './utils/GuardedRoutes.jsx'
import { ErrorProvider } from './contexts/ErrorContext.jsx'

function App() {


    return (
        <ErrorProvider>
            <Header />
            <Background />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/games' element={<Catalogue />} />
                <Route path='/games/:category' element={<Catalogue />} />
                <Route path='/games/:gameId/details' element={<GameDetails />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/profile/:userId' element={<Profile />} />
                <Route path='/profile/edit' element={<EditProfile />} />

                <Route element={<GuardedRoutes />}>
                    <Route path='/games/create' element={<AddGame editMode={false} />} />
                    <Route path='/games/:gameId/edit' element={<AddGame editMode={true} />} />
                    <Route path='/games/:gameId/review' element={<LeaveReview editMode={false} />} />
                    <Route path='/reviews/:reviewId/edit' element={<LeaveReview editMode={true} />} />
                </Route>
            </Routes>
            
            <Footer />
        </ErrorProvider>
    )
}

export default App
