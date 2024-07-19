import { Link } from 'react-router-dom';
import Logo from './img/logo.png';
import './styles/css/header.css';

function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo du site Kasa" />
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/about">A Propos</Link>
            </nav>
        </header>
    );
};

export default Header;
