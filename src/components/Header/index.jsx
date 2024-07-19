import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/error">Error</Link>
            <Link to="/housing">Housing</Link>
        </nav>
    );
};

export default Header;
