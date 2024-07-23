import React from 'react';
import './styles/css/host.css';

const Host = ({ host }) => {
    const nameParts = host.name.split(' ');

    return (
        <div className="host">
            <p className="host__name">
                {nameParts.map((part, index) => (
                    <span key={index}>{part}</span>
                ))}
            </p>
            <img className="host__picture" src={host.picture} alt={host.name} />
        </div>
    );
};

export default Host;
