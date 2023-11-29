import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import GameList from './components/game-list/GameList.jsx';
import GameCreate from './components/game-create/GameCreate.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import GameDetails from './components/game-details/GameDetails.jsx';
import { useState } from 'react';


function App() {
    const [auth, setAuth] = useState({});
    const loginSubmitHandled = (values) => {
        console.log(values);
    };

    return (
        <div id="box">
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/games' element={<GameList />} />
                <Route path='/games/create' element={<GameCreate />} />
                <Route path='/login' element={<Login loginSubmitHandled={loginSubmitHandled} />} />
                <Route path='/register' element={<Register />} />
                <Route path='/games/:gameId/details' element={<GameDetails />} />

            </Routes>

        </div>

    );
}

export default App;
