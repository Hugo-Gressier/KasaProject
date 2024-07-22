import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './img/logo.png';
import './styles/css/header.css';

function Header() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState('/');

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    return (
        <header>
            <Link to="/">
                <img src={Logo} alt="Logo du site Kasa" />
            </Link>
            <nav>
                <Link
                    className={`nav-link ${activeLink === '/' ? 'active' : ''}`}
                    to="/"
                    onClick={() => setActiveLink('/')}
                >
                    Accueil
                </Link>
                <Link
                    className={`nav-link ${activeLink === '/about' ? 'active' : ''}`}
                    to="/about"
                    onClick={() => setActiveLink('/about')}
                >
                    A Propos
                </Link>
            </nav>
        </header>
    );
}

export default Header;
