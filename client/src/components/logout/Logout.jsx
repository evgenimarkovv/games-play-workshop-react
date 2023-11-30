import { useEffect } from 'react';
import * as authService from '../../services/authService.js';
import { useNavigate } from 'react-router-dom';
import Path from '../../paths.js';
import { useContext } from 'react';
import AutContext from '../../contexts/authContext.js';

export default function Logout() {
    const {logoutHandler} = useContext(AutContext);
    const navigate = useNavigate();
    useEffect(() => {
        authService.logout()
            .then(() => logoutHandler())
            .catch(() => navigate(Path.Home));

    },[logoutHandler, navigate]);

    return null;
}