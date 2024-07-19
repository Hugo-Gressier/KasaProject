import './styles/css/cards.css';

const Cards = ({ data }) => {
    return (
        <div className="cards">
            {data.map((item, index) => (
                <div className="card" key={index}>
                    <h2>{item.title}</h2>
                    <img src={item.cover} alt={item.title} />
                </div>
            ))}
        </div>
    );
};

export default Cards;
