import Logo from './img/logo.png';
import './styles/css/footer.css';

function Footer() {
    return (
        <footer>
            <img src={Logo} alt="Logo du site Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;
