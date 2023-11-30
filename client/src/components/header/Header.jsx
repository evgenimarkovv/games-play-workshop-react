import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AutContext from '../../contexts/authContext.js';


export default function Header() {
    const {
        isAuthenticated,
        username,
    } = useContext(AutContext);
    return (
        <header>
            {/* <!-- Navigation --> */}
            <h1><Link className="home" to="/">GamesPlay</Link></h1>
            <nav>
                <Link to="/games">All games</Link>
                {/* <!-- Logged-in users --> */}
                {isAuthenticated && (
                    <div id="user">
                        <Link to="/games/create">Create Game</Link>
                        <Link to="/logout">Logout</Link>
                        <span>| {username}</span>
                    </div>
                )}

                {/* <!-- Guest users --> */}
                {!isAuthenticated && (
                    <div id="guest">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                )}
            </nav>
        </header>
    );
}