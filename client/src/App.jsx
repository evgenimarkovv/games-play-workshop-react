import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import * as autService from './services/authService.js';
import AutContext from './contexts/authContext.js';
import Path from './paths.js';

import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import GameList from './components/game-list/GameList.jsx';
import GameCreate from './components/game-create/GameCreate.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import GameDetails from './components/game-details/GameDetails.jsx';


function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});
    const loginSubmitHandled = async (values) => {
        const result = await autService.login(values.email, values.password);
        setAuth(result);
        navigate(Path.Home);
    };

    const registerSubmitHandler = async (values) => {
        console.log(values);
    };

    const values = {
        loginSubmitHandled,
        registerSubmitHandler,
        username: auth.username,
        email: auth.email,
        isAuthenticated: !!auth.username,
    };

    return (
        <AutContext.Provider value={values}>
            <div id="box">
                <Header />
                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path='/games' element={<GameList />} />
                    <Route path='/games/create' element={<GameCreate />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/games/:gameId/details' element={<GameDetails />} />
                </Routes>
            </div>
        </AutContext.Provider >

    );
}

export default App;
