import React from 'react';
import './styles/css/rating.css';

const Rating = ({ rating }) => {
    const ratingValue = parseInt(rating, 10);
    const stars = Array.from({ length: 5 }, (_, index) => index < ratingValue);

    return (
        <div className="rating">
            {stars.map((filled, index) => (
                <i key={index} className={`fas fa-star ${filled ? 'filled' : 'unfilled'}`}></i>
            ))}
        </div>
    );
};

export default Rating;
