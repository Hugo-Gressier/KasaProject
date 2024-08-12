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

    if (!data) {
        console.error('Error');
        return null;
    }

    const housingData = data.find(item => item.id === id);

    if (!housingData) {
        return <Error />;
    }

    return (
        <div className="housing">
            <Slideshow images={housingData.pictures} />
            <article className="housing__infos">
                <div className="housing__infos--title">
                    <div className="title">
                        <h1>{housingData.title}</h1>
                        <p>{housingData.location}</p>
                    </div>
                    <div className="tags">
                        {housingData.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="housing__infos--host">
                    <Host host={housingData.host} />
                    <Rating rating={housingData.rating} />
                </div>
            </article>
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
