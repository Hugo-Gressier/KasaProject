import './styles/css/banner.css';

const Banner = ({ backgroundImage, title }) => {
    return (
        <div className="banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="banner__overlay">
                <h1 className="banner__overlay--title">{title}</h1>
            </div>
        </div>
    );
};

export default Banner;
