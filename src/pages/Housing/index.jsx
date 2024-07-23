import React from 'react';
import { useParams } from 'react-router-dom';
import Error from '../Error';
import Slideshow from '../../components/Slideshow';
import Host from '../../components/Host';
import Rating from '../../components/Rating';
import Collapse from '../../components/Collapse';
import './styles/css/housing.css';

const Housing = ({ data }) => {
    const { id } = useParams();
    const housingData = data.find(item => item.id === id);

    if (!housingData) {
        return <Error />;
    }

    return (
        <div className="housing">
            <Slideshow images={housingData.pictures} />
            <article>
                <div className="housing__title">
                    <h1>{housingData.title}</h1>
                    <p>{housingData.location}</p>
                </div>
                <div className="housing__host">
                    <Host host={housingData.host} />
                    <Rating rating={housingData.rating} />
                </div>
            </article>
            <div className="housing__tags">
                {housingData.tags.map((tag, index) => (
                    <span key={index} className="housing__tags--tag">{tag}</span>
                ))}
            </div>
            <div className="collapse-container">
                <Collapse title="Description">
                    <p>{housingData.description}</p>
                </Collapse>
                <Collapse title="Équipements">
                    <ul>
                        {housingData.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </Collapse>
            </div>
        </div>
    );
};

export default Housing;
