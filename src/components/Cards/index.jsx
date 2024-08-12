import { Link } from 'react-router-dom';
import './styles/css/cards.css';

const Cards = ({ data }) => {
    if (!data) {
        console.error('Error');
        return null;
    }

    return (
        <div className="cards">
            {data.map((item, index) => (
                <Link to={`/housing/${item.id}`} key={index}>
                    <div className="cards__card">
                        <h2>{item.title}</h2>
                        <img src={item.cover} alt={item.title} />
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Cards;
